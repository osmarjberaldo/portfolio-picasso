<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Log de erros
error_reporting(E_ALL);
ini_set('display_errors', 1);
ini_set('error_log', dirname(__FILE__) . '/error.log');

// Verificar se é uma requisição OPTIONS (preflight)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    try {
        // Log da requisição
        error_log("Recebida nova requisição POST");
        
        $input = file_get_contents('php://input');
        error_log("Dados recebidos: " . $input);
        
        $data = json_decode($input, true);

        if (json_last_error() !== JSON_ERROR_NONE) {
            error_log("Erro ao decodificar JSON: " . json_last_error_msg());
            throw new Exception('Invalid JSON data');
        }

        $nome = $data['nome'] ?? '';
        $email = $data['email'] ?? '';
        $telefone = $data['telefone'] ?? '';
        $assunto = $data['assunto'] ?? '';
        $mensagem = $data['mensagem'] ?? '';
        $to_email = $data['to_email'] ?? '';

        // Validação de email
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            throw new Exception('Email inválido');
        }

        if (empty($nome) || empty($email) || empty($assunto) || empty($mensagem)) {
            error_log("Campos obrigatórios faltando");
            throw new Exception('Campos obrigatórios não preenchidos');
        }

        // Log dos dados processados
        error_log("Dados processados: Nome=$nome, Email=$email, Assunto=$assunto");

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

        // Tentativa de envio
        error_log("Tentando enviar email para: $to_email");
        
        $success = mail($to_email, "Contato do Site: $assunto", $message_body, $headers);

        if (!$success) {
            $error = error_get_last();
            error_log("Erro ao enviar email: " . ($error ? $error['message'] : 'Erro desconhecido'));
            throw new Exception('Falha ao enviar email');
        }

        error_log("Email enviado com sucesso");

        echo json_encode([
            'status' => 'success',
            'message' => 'Email enviado com sucesso'
        ]);

    } catch (Exception $e) {
        error_log("Exceção capturada: " . $e->getMessage());
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
