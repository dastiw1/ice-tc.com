
<?php

	$vizitkaData = json_decode($_POST['vizitkaPhpData']);
if(isset($vizitkaData)){	
	$response = '<h1>На нашем сайта сделали заказ на сайт</h1></br>';
	$response .= '<table border="1">
   <caption>Перечень выбранных услуг</caption>
   <tr>
    <th>Что</th>
    <th>Значение</th>    
   </tr>';
	foreach ($vizitkaData as $key=>$value) {
		$response .= "<tr><td width='280px'>".$key." </td><td width='400px'> ". implode($value)."</td></tr>";
	}
	$response .= '</table>';
	//echo $response;
}	
//Polu4enie dannyh internet magaizina

	$shopData = json_decode($_POST['shopPhpData']);
if(isset($shopData)){
	$response = '<h1>На нашем сайта сделали заказ на сайт</h1></br>';
	$response .= '<table border="1">
   <caption>Перечень выбранных услуг</caption>
   <tr>
    <th>Что</th>
    <th>Значение</th>    
   </tr>';
	foreach ($shopData as $key=>$value) {
		$response .= "<tr><td width='280px'>".$key." </td><td width='400px'> ". implode($value)."</td></tr>";
	}
	$response .= '</table>';
}
//Polu4enie dannyh korporativnogo saita

	$corpData = json_decode($_POST['corpPhpData']);
if(isset($corpData)){
	$response = '<h1>На нашем сайта сделали заказ на сайт</h1></br>';
	$response .= '<table border="1">
   <caption>Перечень выбранных услуг</caption>
   <tr>
    <th>Что</th>
    <th>Значение</th>    
   </tr>';
	foreach ($corpData as $key=>$value) {
		$response .= "<tr><td width='280px'>".$key." </td><td width='400px'> ". implode($value)."</td></tr>";
	}
	$response .= '</table>';
}	
// Polu4enie dannyh saita kataloga

	$catData = json_decode($_POST['catPhpData']);
if(isset($catData)){
	$response = '<h1>На нашем сайта сделали заказ на сайт</h1></br>';
	$response .= '<table border="1">
   <caption>Перечень выбранных услуг</caption>
   <tr>
    <th>Что</th>
    <th>Значение</th>    
   </tr>';
	foreach ($catData as $key=>$value) {
		$response .= "<tr><td width='280px'>".$key." </td><td width='400px'> ". implode($value)."</td></tr>";
	}
	$response .= '</table>';
}
// Polu4enie dannyh unikalnogo saita

	$uniqueData = json_decode($_POST['uniquePhpData']);
if(isset($uniqueData)){
	$response = '<h1>На нашем сайта сделали заказ на сайт</h1></br>';
	$response .= '<table border="1">
   <caption>Перечень выбранных услуг</caption>
   <tr>
    <th>Что</th>
    <th>Значение</th>    
   </tr>';
	foreach ($uniqueData as $key=>$value) {
		$response .= "<tr><td width='280px'>".$key." </td><td width='400px'> ". implode($value)."</td></tr>";
	}
	$response .= '</table>';
}
$siteCallOrderDataPhpData = json_decode($_POST['siteCallOrderDataPhpData']);
if(isset($siteCallOrderDataPhpData)){
	$response = '<h1>На нашем сайта сделали заказ на звонок</h1>';
	$response .= '<table border="1">
   <caption>Контактные данные клиента</caption>
   <tr>
    <th>Что</th>
    <th>Значение</th>    
   </tr>';
	foreach ($siteCallOrderDataPhpData as $key=>$value) {
		$response .= "<tr><td width='280px'>".$key." </td><td width='400px'> ". implode($value)."</td></tr>";
	}
	$response .= '</table>';
}
//Telo pis'ma ==> start	
$body = "<!doctype html><html><head>

</head><body>";
$body .= "<a href='http://ice-tc.com'>ice-tc.com</a></br>";
$body .= $response;

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
$mail->Host = 'icetccom.ipage.com';

//Set the SMTP port number - 587 for authenticated TLS, a.k.a. RFC4409 SMTP submission
$mail->Port = 587;

//Set the encryption system to use - ssl (deprecated) or tls
//$mail->SMTPSecure = 'tls';

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
$siteType ="";
if(isset($vizitkaData)) $siteType = "сайт-визитку";
if(isset($corpData)) $siteType = "корпоративный сайт";
if(isset($catData)) $siteType = "сайт-каталог";
if(isset($shopData)) $siteType = "интернет магазин";
if(isset($uniqueData)) $siteType = "создание уникального сайта";
if(isset($siteCallOrderDataPhpData)) $siteType = "звонок (Создание сайта)";

$mail->Subject = 'Получен заказ на '.$siteType;

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
} else {
    echo "Ваша заявка принята!";
}
	
?>


