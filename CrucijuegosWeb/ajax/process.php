<?php
$to = "sanchez.juanmy@gmail.com";
$subject = $_POST['subject'];
$name = $_POST['name'];
$email = $_POST['email'];
$text = $_POST['text'];
$sala =  $_POST['sala'];
$message = "<html><body><h2>$sala</h2></br><h3>$name</h3></br><b>$email</><p>$text</p></body></html>";
$headers = "Content-type: text/html; charset=iso-8859-1\r\n";
$res = "Mensaje";
    if( isset($subject) && isset($name) && isset($text) ){
        if($sala != 0){
            try{
                mail($to, $subject, $message, $headers);
                $res = "La consulta fue enviada correctamente!";
                $response_array['status'] = 'success';
            } catch (Exception $ex) {
                $res = 'Excepción capturada: '.$ex->getMessage();
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