<?php
$to = "sanchez.juanmy@gmail.com";
$subject = $_POST['subject'];
$name = $_POST['name'];
$email = $_POST['email'];
$text = $_POST['text'];
$sala =  $_POST['sala'];
$sucursal = "";
$headers = "Content-type: text/html; charset=iso-8859-1\r\n";
$res = "Mensaje";
    if( isset($subject) && isset($name) && isset($text) ){
        if($sala != 0){
            try{
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
                $message = "<html><body><h2>Sala: ".$sucursal."</h2></br><h3>Nombre: ".$name."</h3></br><b>Email: "."$email"."</><p>Mensaje: ".$text."</p></body></html>";
                mail($to, $subject, $message, $headers);
                $res = "La consulta fue enviada correctamente!";
                //$res = $to." ".$subject." ".$message." ".$headers;
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