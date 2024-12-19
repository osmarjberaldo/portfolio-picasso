<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Log de erros
error_reporting(E_ALL);
ini_set('display_errors', 1);
ini_set('error_log', 'error.log');

// Verificar se é uma requisição OPTIONS (preflight)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    try {
        $input = file_get_contents('php://input');
        $data = json_decode($input, true);

        if (json_last_error() !== JSON_ERROR_NONE) {
            throw new Exception('Invalid JSON data');
        }

        $nome = $data['nome'] ?? '';
        $email = $data['email'] ?? '';
        $telefone = $data['telefone'] ?? '';
        $assunto = $data['assunto'] ?? '';
        $mensagem = $data['mensagem'] ?? '';
        $to_email = $data['to_email'] ?? '';

        if (empty($nome) || empty($email) || empty($assunto) || empty($mensagem)) {
            throw new Exception('Campos obrigatórios não preenchidos');
        }

        $headers = "From: $email\r\n";
        $headers .= "Reply-To: $email\r\n";
        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

        $message_body = "
            <html>
            <body>
                <h2>Nova mensagem do site</h2>
                <p><strong>Nome:</strong> " . htmlspecialchars($nome) . "</p>
                <p><strong>Email:</strong> " . htmlspecialchars($email) . "</p>
                <p><strong>Telefone:</strong> " . htmlspecialchars($telefone) . "</p>
                <p><strong>Assunto:</strong> " . htmlspecialchars($assunto) . "</p>
                <p><strong>Mensagem:</strong></p>
                <p>" . nl2br(htmlspecialchars($mensagem)) . "</p>
            </body>
            </html>
        ";

        $success = mail($to_email, "Contato do Site: $assunto", $message_body, $headers);

        if (!$success) {
            error_log("Erro ao enviar email: " . error_get_last()['message']);
            throw new Exception('Falha ao enviar email');
        }

        echo json_encode([
            'status' => 'success',
            'message' => 'Email enviado com sucesso'
        ]);

    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode([
            'status' => 'error',
            'message' => $e->getMessage()
        ]);
    }
} else {
    http_response_code(405);
    echo json_encode([
        'status' => 'error',
        'message' => 'Método não permitido'
    ]);
}
?>
