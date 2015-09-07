<?php
require_once('PHPMailer/class.phpmailer.php');

$id = $_POST['sucursales'];
$mensaje = $_POST['mensaje'];
$email = $_POST['email'];
$nombre =$_POST['nombre'];
$telefono = $_POST['telefono'];
$tipo = $_FILES['curriculum']['type'];
$size = $_FILES['curriculum']['size'];
$nom = $_FILES['curriculum']['name'];
$res = "Mensaje";
$sala = "";

if($tipo == 'application/pdf' || $tipo == 'application/vnd.oasis.opendocument.text' || $tipo == 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' || $tipo == 'application/msword'){
    if($size < 2097152){//si es menor a 2MB        
        if($id > 0 && $id < 15){
           switch ($id) {
               case 1:
                   $sala = "crucires@gmail.com";
                   break;
               case 2:
                   $sala = "crucijacinto@gmail.com";
                   break;
               case 3:
                   $sala = "crucivilla@gmail.com";
                   break;
               case 4:
                   $sala = "crucicorrientes@gmail.com";
                   break;
               case 5:
                   $sala = "cruciformosa2@gmail.com";
                   break;
               case 6:
                   $sala = "crucipos2@gmail.com";
                   break;
               case 7:
                   $sala = "crucipos1@gmail.com";
                   break;
               case 8:
                   $sala = "crucisalta@hotmail.com";
                   break;
               case 9:
                   $sala = "crucisanjuan@gmail.com";
                   break;
               case 10:
                   $sala = "crucirosa2@gmail.com";
                   break;
               case 11:
                   $sala = "crucirosa1@gmail.com";
                   break;
               case 12:
                   $sala = "crucisantiago@gmail.com";
                   break;
               case 13:
                   $sala = "crucitucu@gmail.com";
                   break;
               case 14:
                   $sala = "crucitucu2@gmail.com";
                   break;
            }
            
            try {
                $mail = new PHPMailer(true);
                $mail->From = $email; // from
                $mail->AddReplyTo($sala, "Curriculum"); // reply to address/name
                $mail->AddAddress('sanchez.juanmy@gmail.com'); // to address
                $mail->Subject = '[Web Crucijuegos Salas] - Curriculum'; // subject
                $mail->Body = "Sala:$sala </br> Mensaje:Éste correo contiene adjunto un curriculum \n".$mensaje; // body
                $mail->Username = "[Crucijuegos Web] ".$nombre;
                $mail->AddAttachment($_FILES['curriculum']['tmp_name']); // attach uploaded file 
                $mail->Send();
                $res = "El curriculum se ha enviado con exito!";
                //$res = "from: $email, replay: $sala, body:$mensaje, name:$nombre, archivo:$nom"; 
                $response_array['status'] = 'success';
            } catch (phpmailerException $e) {
              $res = $e->getMessage()." - ".$mail->ErrorInfo;
            }   
        }
        else
        {
            $res = "Error al enviar el correo - id de sala incorrecto";
            $response_array['status'] = 'error';  
        }
    }
    else
    {
        $res = "Error al enviar el correo - tamaño mayor a 2MB";
        $response_array['status'] = 'error';  
    }
}else
{
    $res = "Error al enviar el correo - No es un pdf/doc/odt/docx";
    $response_array['status'] = 'error';  
}

$response_array['message'] = $res;  
echo json_encode($response_array);

?>