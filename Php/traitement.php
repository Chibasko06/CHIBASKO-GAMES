<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Sécurisation des champs
    $nom     = htmlspecialchars(trim($_POST["nom"]));
    $prenom  = htmlspecialchars(trim($_POST["prenom"]));
    $email   = htmlspecialchars(trim($_POST["email"]));
    $message = htmlspecialchars(trim($_POST["message"]));

    // Vérifier que tout est rempli
    if (!empty($nom) && !empty($prenom) && !empty($email) && !empty($message)) {
        
        // ⚠️ Mets ici ton adresse email perso
        $destinataire = "chibasko06@gmail.com";

        // Sujet du mail
        $sujet = "📩 Nouveau message du  formulaire Chibasko Games";

        // Contenu du mail
        $contenu = "
        Nom : $nom
        Prénom : $prenom
        Email : $email
        -----------------------------
        Message :
        $message
        ";

        // En-têtes
        $headers = "From: $email\r\n";
        $headers .= "Reply-To: $email\r\n";
        $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

        // Envoi
        if (mail($destinataire, $sujet, $contenu, $headers)) {
            echo "<p style='color:green;'>✅ Message envoyé avec succès !</p>";
        } else {
            echo "<p style='color:red;'>❌ Erreur : le message n'a pas pu être envoyé.</p>";
        }
    } else {
        echo "<p style='color:red;'>⚠️ Merci de remplir tous les champs.</p>";
    }
} else {
    echo "<p style='color:red;'>Accès non autorisé.</p>";
}
?>
