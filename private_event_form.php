<?php

$renter_name = $_POST['renter_name'];
$renter_phone = $_POST['renter_phone'];
$renter_email = $_POST['renter_email'];

$event_name = $_POST['event_name'];
$organization_name = $_POST['organization_name'];
$university_affiliated = $_POST['university_affiliated'];
$event_date = $_POST['event_date'];
$event_age = $_POST['event_age'];
$event_start = $_POST['event_start'];
$event_end = $_POST['event_end'];
$event_guests = $_POST['event_guests'];
$event_entertainment = $_POST['event_entertainment'];
$event_budget = $_POST['event_budget'];

$to = 'booking@necto.com';
$subject = 'PRIVATE EVENT Request: ' . $event_name;

$message = 'Event Name: ' . $event_name . "\n" . 'Organization: ' . $organization_name . "\n" . 'University Affiliated: ' . $university_affiliated . "\n" . 'Event Date: ' . $event_date . "\n" . 'Event Age: ' . $event_age . "\n" . 'Event Start: ' . $event_start . "\n" . 'Event End: ' . $event_end . "\n" . 'Event Guests: ' . $event_guests . "\n" . 'Event Entertainment: ' . $event_entertainment . "\n" . 'Event Budget: ' . $event_budget . "\n" . 'Renter Name: ' . $renter_name . "\n" . 'Renter Email: ' . $renter_email . "\n" . 'Renter Phone: ' . $renter_phone . "\n" ;

mail ($to, $subject, $message, 'From: ' . $renter_email);
header("Location: https://www.necto.com/private-event-thank-you.html");

?>