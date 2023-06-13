<?php
require 'vendor/autoload.php';require_once('./vendor/autoload.php');
use Postmark\PostmarkClient;
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);$dotenv->load();
#use PHPMailer\PHPMailer\PHPMailer;
#use PHPMailer\PHPMailer\Exception;
#$mail = new PHPMailer(true);

#try {
    // Server settings
 #   $mail->SMTPDebug = 4; // change to 2 if you want to see SMTP debug information
 #   $mail->isSMTP();
 #   $mail->Host       = $_ENV['MAIL_SERVER'];
 #   $mail->SMTPAuth   = true;
 #   $mail->Username   = $_ENV['USERNAME'];
  #  $mail->Password   = $_ENV['SEPH_PASS'];
  #  $mail->SMTPSecure = 'tls';
  #  $mail->Port       = $_ENV['MAIL_PORT'];
  #  $mail->Sender       = $_ENV['USERNAME'];

    // Recipients
    #$from = isset($_POST['email']) ? htmlspecialchars($_POST['email']) : "";
   # $from = $_ENV['USERNAME'];
    // $to = filter_var($_POST['to'], FILTER_SANITIZE_EMAIL);
  #  $to = $_ENV['TO_EMAIL'];

#

        $name = isset($_POST['name']) ? htmlspecialchars($_POST['name']) : "Name: something went wrong.";
        $subject = "New quote from MontieroHomes.ca";
        $message = isset($_POST['message']) ? htmlspecialchars($_POST['message']) : "Message: something went wrong.";
        $email = isset($_POST['email']) ? htmlspecialchars($_POST['email']) : "Email Address: something went wrong.";
        $txtBody = "Name: $name <br> Email address: $email <br> Message: $message <br>";

    #$name = isset($_POST['name']) ? $_POST['name'] : "name: something went wrong.";
    #$subject = "New quote from MontieroHomes.ca";
    #$message = isset($_POST['message']) ? $_POST['message'] : "message: something went wrong.";


   # //die($message);
    // Validate email addresses
    // echo "$from, $email, $message"
    // if (!filter_var($from, FILTER_VALIDATE_EMAIL)) {
    //     die('Invalid sender email');
    // }
    // if (!filter_var($to, FILTER_VALIDATE_EMAIL)) {
    //     die('Invalid recipient email');
    // }

 #   $mail->setFrom($from, 'Mailer');
 #   $mail->addAddress($to, 'Recipient');

    // Content
 #   $mail->isHTML(false);
 #   $mail->Subject = $subject;
 #   $mail->Body    = $message;

 #   $mail->send();
  #  echo 'Message has been sent';
#} catch (Exception $e) {
#    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
#    $myfile = fopen("phpmailer.log", "a") or die("Unable to open file!");
#    fwrite($myfile, $mail->ErrorInfo);
#    fclose($myfile);

try {
        $client = new PostmarkClient($_ENV['PM_TOKEN']);

        $sendResult = $client->sendEmail(
                "phil@monteirohomes.com",
                "phil@monteirohomes.com",
                $subject,
                $txtBody,
#               "subject is here",
#               "Message content goes here",
);
        echo"Message sent success.";
}

catch (Exception $e) {
        echo"Error........ $e";
}

?>