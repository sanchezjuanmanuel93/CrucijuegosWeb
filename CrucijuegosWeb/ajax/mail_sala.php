<?php
require_once('PHPMailer/class.phpmailer.php');

$id = $_POST['sucursales'];
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
            $mail = new PHPMailer();

            $mail->From = $email; // from

            $mail->AddReplyTo($sala, "Curriculum"); // reply to address/name

            $mail->AddAddress('sanchez.juanmy@gmail.com'); // to address

            $mail->Subject = '[Web Crucijuegos Salas] - Curriculum'; // subject

            $mail->Body = "Éste correo contiene adjunto un curriculum"; // body

            $mail->AddAttachment($_FILES['curriculum']['tmp_name']); // attach uploaded file   

            $response_array['status'] = 'success';    
            
            $res = "El curriculum se ha enviado con exito!";
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
/*
echo $res;
echo "\n";
echo "Sala: $id, Mail Sala:$sala, Nom y Ape:$nombre, TElefono:$telefono";
echo "\n";
echo "Datos del archivo: tamaño:$size, formato:$tipo, nombre:$nom";
*/


   /*
<option value="1">Chaco, Resistencia, Ruta nº 16 Nicolás Avellaneda y Doctor Savin</option>
<option value="2">Cordoba, Jacinto Rios - Libertad 1100</option>
<option value="3">Cordoba, Villa Maria, Ruta 158 km 155</option>
<option value="4">Corrientes, Av. Ferre y Chacabuco</option>
<option value="5">Formosa, Av. Juan D. Perón 757</option>
<option value="6">Misiones, Posadas, Bolivar 1979 - Local 43</option>
<option value="8">Salta, Av.Tabella y Ex. Combatientes de Malvinas</option>
<option value="9">San Juan, Scalabrini Ortiz y Circunvalación</option>
<option value="10">Santa Fe, Rosario2, Av. San Martin 3419</option>
<option value="11">Santa Fe, Rosario1, Bv. Oroño y Av. Battle y Ordoñez</option>
<option value="12">Santiago Del Estero, Aut. Júan D. Perón s/n</option>    
<option value="13">Tucuman, Av. Roca 3450</option>
<option value="14">Tucuman, Suipacha y Castelar. Acceso Norte</option>
    */
/*
$to = "sanchez.juanmy@gmail.com";
$subject = $_POST['subject'];
$name = $_POST['name'];

$text = $_POST['text'];
$message = "<html><body><h3>$name</h3></br><b>$email</><p>$text</p></body></html>";
$headers = "Content-type: text/html; charset=iso-8859-1\r\n";

$id = $_POST['sucursales'];

$filename = $_FILES["curriculum"]["name"]; // gives you the name of the file they uploaded
$filetype = $_FILES["curriculum"]["type"]; // gives you the size of the upload in bytes
$filetemp = $_FILES["curriculum"]["tmp_name"]; // gives you the temporary name of the file on the server until it is renamed
echo $filename." ".$filetype." ".$filetemp;
 * 
 */

/*
if( isset($subject) && isset($name) && isset($text)){
    mail($to, $subject, $message, $headers);

}
 * echo " ".$sala.$email.$fileName.$name;
*/

?>