<?php
equire_once('PHPMailer/class.phpmailer.php');

$to = "sanchez.juanmy@gmail.com";
$subject = $_POST['subject'];
$name = $_POST['name'];
$email = $_POST['email'];
$text = $_POST['text'];
$sala =  $_POST['sala'];
$sucursal = "";
$res = "Mensaje";
    if( isset($subject) && isset($name) && isset($text) ){
        if($sala != 0){

                    switch ($sala) {
                                   case 1:
                                       $sucursal = "Resistencia";
                                       break;
                                   case 2:
                                       $sucursal = "Jacinto Rios";
                                       break;
                                   case 3:
                                       $sucursal = "Villa María";
                                       break;
                                   case 4:
                                       $sucursal = "Corrientes";
                                       break;
                                   case 5:
                                       $sucursal = "Formosa 2";
                                       break;
                                   case 6:
                                       $sucursal = "Posadas 2";
                                       break;
                                   case 7:
                                       $sucursal = "Posadas 1";
                                       break;
                                   case 8:
                                       $sucursal = "Salta";
                                       break;
                                   case 9:
                                       $sucursal = "San Juan";
                                       break;
                                   case 10:
                                       $sucursal = "Rosario 2";
                                       break;
                                   case 11:
                                       $sucursal = "Rosario 1";
                                       break;
                                   case 12:
                                       $sucursal = "Santiago del Estero";
                                       break;
                                   case 13:
                                       $sucursal = "Tucumán 1";
                                       break;
                                   case 14:
                                       $sucursal = "Tucumán 2";
                                       break;
                                }  
                    $message = "<html><body><h2>Sala: ".$sucursal."</h2></br><h3><b>Asunto: </b> ".$subject."</h3></br><h3><b>Nombre:</b> ".$name."</h3></br><b>Email: "."$email"."</><p>Mensaje: ".$text."</p></body></html>";
            try{
                    $mail = new PHPMailer(true);
                    $mail->AddReplyTo($email, $name); // reply to address/name
                    $mail->IsHTML(true);
                    $mail->From = $email; // from
                    $mail->FromName = $name;
                    $mail->AddAddress($to); // to address
                    $mail->Subject = '[Web Crucijuegos Salas] - Contacto'; // subject
                    $mail->Body = $message;
                    $mail->Username = $name;
                    if(!$mail->Send()){
                        $response_array['status'] = 'error';
                        $res = "Fallo el envio del email"; 
                    }else
                    {
                        $response_array['status'] = 'success';
                        $res = "La consulta fue enviada correctamente!";
                    }
            } catch (Exception $ex) {
                $res = $e->getMessage()." - ".$mail->ErrorInfo;
                $response_array['status'] = 'error'; 
            }
        }else{
            $res = "No se seleccionó ninguna sala";
            $response_array['status'] = 'error';
        }
    }else
    {
        $res = "Algun campo se encuentra vacio";
        $response_array['status'] = 'error';
    }    
    $response_array['message'] = $res;  
    echo json_encode($response_array);
?>