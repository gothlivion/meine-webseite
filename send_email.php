<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Formulardaten erhalten und bereinigen
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // E-Mail-Einstellungen
    $to = "gothlivion@gmail.com"; // Deine E-Mail-Adresse
    $subject = "Neue Nachricht von $name über das Kontaktformular";
    $body = "Name: $name\nEmail: $email\nNachricht:\n$message";
    $headers = "From: $email";

    // E-Mail senden
    if (mail($to, $subject, $body, $headers)) {
        echo "Nachricht erfolgreich gesendet!";
    } else {
        echo "Fehler beim Senden der Nachricht. Bitte versuchen Sie es später erneut.";
    }
}
?>
