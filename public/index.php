<?php
/**
 * Front to the WordPress application. This file doesn't do anything, but loads
 * wp-blog-header.php which does and tells WordPress to load the theme.
 *
 * @package WordPress
 */

/**
 * Tells WordPress to load the WordPress theme and output it.
 *
 * @var bool
 */
define('WP_USE_THEMES', true);

/** Loads the WordPress Environment and Template */
//require( dirname( __FILE__ ) . '/wp-blog-header.php' );

// configure
header("Access-Control-Allow-Origin: *");
$from = 'parloti@gmail.com';
$sendTo = 'parloti@gmail.com';
$subject = 'New message from contact form';
$fields = array('name' => 'Name', 'surname' => 'Surname', 'phone' => 'Phone', 'email' => 'Email', 'message' => 'Message'); // array variable name => Text to appear in the email
$okMessage = 'Contact form successfully submitted. Thank you, I will get back to you soon!';
$errorMessage = 'There was an error while submitting the form. Please try again later';

// let's do the sending

try {
	$emailText = "You have new message from contact form\n=============================\n";

	foreach ($_POST as $key => $value) {

		if (isset($fields[$key])) {
			$emailText .= "$fields[$key]: $value\n";
		}
	}

	$headers = array('Content-Type: text/plain; charset="UTF-8";',
		'From: ' . $from,
		'Reply-To: ' . $from,
		'Return-Path: ' . $from,
	);
	if(mail($sendTo, $subject, $emailText, implode("\n", $headers))){echo 'success';}else{echo 'unsuccess';}

	$responseArray = array('type' => 'success', 'message' => $okMessage);
} catch (\Exception $e) {
	$responseArray = array('type' => 'danger', 'message' => $errorMessage);
}

if (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
	$encoded = json_encode($responseArray);

	header('Content-Type: application/json');

	echo $encoded;
} else {
	echo $responseArray['message'];
}
