<?php

$vizitkaData = json_decode($_POST['arr1']);

//Telo pis'ma ==> start	
$body = "<!doctype html><html><head></head><body>";
$body .= "<a href='http://ice-tc.com'>ice-tc.com</a></br>";
$body .= "<h1>Получен заказ на услугу Виртуализации</h1></br>";

foreach ($vizitkaData as $key => $value) {
	if($key=='undefined'){
		$body .= "</br><h2>Контакты: </h2>";
		foreach ($value as $k => $v) {
			$body .= "<p> $k : $v </p>";
		}	
		
	}else if($key=='Пропускная способность'){
		$body .= "</br><h2>Пропускная способность: </h2>";
		foreach ($value as $k => $v) {
			$body .= "<p> Объем : $v Гбайт.</p>";
		}		
	}else{
		$body .= "</br><h2>$key</h2>";
		foreach ($value as $k => $v) {
			$body .= "<p> $k : $v </p>";
		}
	}
    
}

$body .= "</body></html>";	
//date_default_timezone_set('Etc/UTC');

require 'lib/PHPMailerAutoload.php';

//Create a new PHPMailer instance
$mail = new PHPMailer();
//Charset
$mail->CharSet = 'UTF-8';

//Tell PHPMailer to use SMTP
$mail->isSMTP();

//Enable SMTP debugging
// 0 = off (for production use)
// 1 = client messages
// 2 = client and server messages
$mail->SMTPDebug = 0;

//Ask for HTML-friendly debug output
$mail->Debugoutput = 'html';

//Set the hostname of the mail server
$mail->Host = "icetccom.ipage.com";

//Set the encryption system to use - ssl (deprecated) or tls
//$mail->SMTPSecure = 'ssl';

//Set the SMTP port number - 587 for authenticated TLS, a.k.a. RFC4409 SMTP submission
$mail->Port = 587;

//Whether to use SMTP authentication
$mail->SMTPAuth = true;

//Username to use for SMTP authentication - use full email address for gmail
$mail->Username = "noreply@ice-tc.com";

//Password to use for SMTP authentication
$mail->Password = "Nazarbayev8";

//Set who the message is to be sent from
$mail->setFrom('noreply@ice-tc.com', 'noreply@ice-tc.com');

//Set an alternative reply-to address
$mail->addReplyTo('noreply@ice-tc.com', 'noreply@ice-tc.com');


//Set the subject line


$mail->Subject = 'Получен заказ на Виртуализацию';

//Read an HTML message body from an external file, convert referenced images to embedded,
//convert HTML into a basic plain-text alternative body
$mail->Body     =  $body;
$mail->IsHTML(true);  /* <== call IsHTML() after $mail->Body has been set. */

//Replace the plain text body with one created manually
$mail->AltBody = 'Из за проблем отправки HTML письма отправляется этот текст';

//Attach an image file
//$mail->addAttachment('images/phpmailer_mini.png');

//send to name
$mail->FromName = "Форма заказа сайтов с сайта ice-tc.com";

//Sen to this e-mail
$mail->AddAddress("info@ice-tc.com");


//send the message, check for errors
if (!$mail->send()) {
    echo "Ошибка отправки: " . $mail->ErrorInfo;
}else{
    echo "Ваша заявка принята! Мы Вам позвоним в ближайшее время";
}



	
?>


	



