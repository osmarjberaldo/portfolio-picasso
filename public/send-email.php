<?php
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';
require 'PHPMailer/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

header('Access-Control-Allow-Origin: https://devosmar.com.br');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Accept');
header('Content-Type: application/json');

ini_set('error_log', __DIR__ . '/email_error.log');
error_reporting(E_ALL);
ini_set('display_errors', 0);

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    try {
        error_log("Nova requisição de contato recebida: " . date('Y-m-d H:i:s'));
        
        $input = file_get_contents('php://input');
        $data = json_decode($input, true);
        
        if (!$data || !isset($data['nome'], $data['email'], $data['assunto'], $data['mensagem'])) {
            throw new Exception('Dados incompletos');
        }

        $nome = filter_var($data['nome'], FILTER_SANITIZE_STRING);
        $email = filter_var($data['email'], FILTER_SANITIZE_EMAIL);
        $telefone = filter_var($data['telefone'] ?? '', FILTER_SANITIZE_STRING);
        $assunto = filter_var($data['assunto'], FILTER_SANITIZE_STRING);
        $mensagem = filter_var($data['mensagem'], FILTER_SANITIZE_STRING);
        
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            throw new Exception('Email inválido');
        }

        // Configuração do PHPMailer
        $mail = new PHPMailer(true);
        
        try {
            // Configurações do servidor
            $mail->isSMTP();
            $mail->Host = 'smtp.hostinger.com'; // Ajuste para seu servidor SMTP
            $mail->SMTPAuth = true;
            $mail->Username = 'contato@devosmar.com.br'; // Seu email
            $mail->Password = 'SUA_SENHA_AQUI'; // Sua senha
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
            $mail->Port = 587;
            
            // Destinatários
            $mail->setFrom('contato@devosmar.com.br', 'Contato Site');
            $mail->addAddress('contato@devosmar.com.br');
            $mail->addReplyTo($email, $nome);
            
            // Conteúdo
            $mail->isHTML(true);
            $mail->CharSet = 'UTF-8';
            $mail->Subject = "Contato do Site: $assunto";
            
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
            
            $mail->Body = $message_body;
            
            $mail->send();
            error_log("Email enviado com sucesso para contato@devosmar.com.br");
            
            echo json_encode([
                'status' => 'success',
                'message' => 'Mensagem enviada com sucesso!'
            ]);
            
        } catch (Exception $e) {
            error_log("Erro no envio do email: " . $mail->ErrorInfo);
            throw new Exception("Erro no envio: " . $mail->ErrorInfo);
        }

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
