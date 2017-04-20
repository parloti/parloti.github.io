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
// configure
if (filter_input(INPUT_POST, 'contact') === 'on') {
	$origin = filter_input(INPUT_SERVER, 'HTTP_ORIGIN');
	$allowedOrigins = ['http://127.0.0.1', 'https://127.0.0.1', 'http://parloti.github.io', 'https://parloti.github.io'];
	if (in_array($origin, $allowedOrigins)) {
		header('Access-Control-Allow-Origin: ' + $origin);
	}

	$from = 'parloti@gmail.com';
	$sendTo = 'parloti@gmail.com';
	$subject = 'New message from contact form';
	$fields = array('name' => 'Name', 'email' => 'Email', 'phone' => 'Phone', 'subject' => 'Subject', 'message' => 'Message'); // array variable name => Text to appear in the email
	$okMessage = 'Contact form successfully submitted. Thank you, I will get back to you soon!';
	$errorMessage = 'There was an error while submitting the form. Please try again later.';

// let's do the sending

	try {
		$emailText = "You have new message from contact form\n=============================\n";
		$post = filter_input_array(INPUT_POST, array(
			'name' => FILTER_SANITIZE_STRING,
			'email' => FILTER_SANITIZE_STRING,
			'phone' => FILTER_SANITIZE_STRING,
			'subject' => FILTER_SANITIZE_STRING,
			'message' => FILTER_SANITIZE_STRING)
		);
		foreach ($post as $key => $value) {
			$emailText .= "$fields[$key]: $value\n";
		}
		$headers = array('Content-Type: text/plain; charset="UTF-8";',
			'From: ' . $from,
			'Reply-To: ' . $from,
			'Return-Path: ' . $from,
		);
		$mailResult = mail($sendTo, $subject, $emailText, implode("\n", $headers));
		if ($mailResult == true) {
			$responseArray = array('type' => 'success', 'message' => $okMessage);
		} else {
			$responseArray = array('type' => 'danger', 'message' => $errorMessage);
		}
	} catch (\Exception $e) {
		$responseArray = array('type' => 'danger', 'message' => $errorMessage);
	}
	
	if (strtolower(filter_input(INPUT_SERVER, 'HTTP_X_REQUESTED_WITH')) == 'xmlhttprequest') {
		$encoded = json_encode($responseArray);

		header('Content-Type: application/json');

		echo $encoded;
	} else {
		echo $responseArray['message'];
	}
} else {
	define('WP_USE_THEMES', true);

	/** Loads the WordPress Environment and Template */
	//require( dirname(__FILE__) . '/wp-blog-header.php' );
	require( dirname(__FILE__) . '/index.html' );
}