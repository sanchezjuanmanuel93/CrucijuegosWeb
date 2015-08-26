<?php
$to = "sanchez.juanmy@gmail.com";
$subject = $_POST['subject'];
$name = $_POST['name'];
$email = $_POST['email'];
$text = $_POST['text'];
$message = "<html><body><h3>$name</h3></br><b>$email</><p>$text</p></body></html>";
$headers = "Content-type: text/html; charset=iso-8859-1\r\n";
if( isset($subject) && isset($name) && isset($text)){
    //mail($to, $subject, $message, $headers);
    echo "envia mail";
}
?>