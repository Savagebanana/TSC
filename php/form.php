<?php
require_once("PHPMailer-master/PHPMailerAutoload.php");
// $config = require("config.php");

/* Cleaning Data */

foreach ($_POST as $key => $value) {
	$_POST[$key] = trim($_POST[$key]);
	$_POST[$key] = stripslashes($_POST[$key]);
	$_POST[$key] = htmlspecialchars($_POST[$key]);
}
/* Variables */
$mail = new PHPMailer;

$mail->isSMTP();
$mail->SMTPAuth = true;
$mail->SMTPSecure = 'ssl';
$mail->Host = 'host262.hostmonster.com';
$mail->Port = 465;
$mail->Username = "automated@torontoskycam.com";
$mail->Password = "gb9knuP6";
$mail->isHTML(true);
$mail->addAddress('info@torontoskycam.com');
// $mail->addAddress('adrian@savagebanana.com');

if($_POST['hidden']== "contact"){
	$mail->From = $_POST['email'];
	$mail->FromName = $_POST['name'];
	$mail->addReplyTo($_POST['email']);
	$mail->Subject = 'Website Contact Form!';
	$mail->Body = $_POST['message'];

    if(!$mail->send()){
        die();
    }
};

?>