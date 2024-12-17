<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

$data = json_decode(file_get_contents('php://input'), true);

if (!$data) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid JSON data']);
    exit;
}

$required_fields = ['nome', 'email', 'assunto', 'mensagem'];
foreach ($required_fields as $field) {
    if (empty($data[$field])) {
        http_response_code(400);
        echo json_encode(['error' => "Field $field is required"]);
        exit;
    }
}

$to = $data['to_email'];
$subject = "Contato via Site: " . $data['assunto'];

$message = "Nome: " . $data['nome'] . "\n";
$message .= "Email: " . $data['email'] . "\n";
if (!empty($data['telefone'])) {
    $message .= "Telefone: " . $data['telefone'] . "\n";
}
$message .= "\nMensagem:\n" . $data['mensagem'];

$headers = [
    'From' => $data['email'],
    'Reply-To' => $data['email'],
    'X-Mailer' => 'PHP/' . phpversion(),
    'Content-Type' => 'text/plain; charset=UTF-8'
];

try {
    if (mail($to, $subject, $message, $headers)) {
        http_response_code(200);
        echo json_encode(['message' => 'Email sent successfully']);
    } else {
        throw new Exception('Failed to send email');
    }
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => $e->getMessage()]);
}
