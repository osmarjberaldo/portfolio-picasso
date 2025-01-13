<?php
header('Access-Control-Allow-Origin: https://devosmar.com.br');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Accept');
header('Content-Type: application/json');

// Log de erros em arquivo específico
ini_set('error_log', __DIR__ . '/email_error.log');
error_reporting(E_ALL);
ini_set('display_errors', 0); // Desativa display de erros em produção

// Verificar se é uma requisição OPTIONS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    try {
        error_log("Nova requisição de contato recebida: " . date('Y-m-d H:i:s'));
        
        $input = file_get_contents('php://input');
        $data = json_decode($input, true);
        
        // Validação mais rigorosa dos dados
        if (!$data || !isset($data['nome'], $data['email'], $data['assunto'], $data['mensagem'])) {
            throw new Exception('Dados incompletos');
        }

        // Sanitização dos dados
        $nome = filter_var($data['nome'], FILTER_SANITIZE_STRING);
        $email = filter_var($data['email'], FILTER_SANITIZE_EMAIL);
        $telefone = filter_var($data['telefone'] ?? '', FILTER_SANITIZE_STRING);
        $assunto = filter_var($data['assunto'], FILTER_SANITIZE_STRING);
        $mensagem = filter_var($data['mensagem'], FILTER_SANITIZE_STRING);
        $to_email = 'contato@devosmar.com.br'; // Email fixo para maior segurança

        // Validações adicionais
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            throw new Exception('Email inválido');
        }

        // Headers do email
        $headers = array(
            'From' => $email,
            'Reply-To' => $email,
            'X-Mailer' => 'PHP/' . phpversion(),
            'MIME-Version' => '1.0',
            'Content-Type' => 'text/html; charset=UTF-8'
        );

        $message_body = "
            <html>
            <head>
                <title>Nova mensagem do site</title>
            </head>
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

        // Tentativa de envio com mais informações de debug
        $success = mail($to_email, "Contato do Site: $assunto", $message_body, $headers);

        if (!$success) {
            $error = error_get_last();
            error_log("Falha no envio do email: " . print_r($error, true));
            throw new Exception('Falha ao enviar email');
        }

        error_log("Email enviado com sucesso para $to_email");
        
        echo json_encode([
            'status' => 'success',
            'message' => 'Mensagem enviada com sucesso!'
        ]);

    } catch (Exception $e) {
        error_log("Erro no processamento do email: " . $e->getMessage());
        http_response_code(500);
        echo json_encode([
            'status' => 'error',
            'message' => 'Erro ao enviar mensagem: ' . $e->getMessage()
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
