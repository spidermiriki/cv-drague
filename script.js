$(document).ready(function() {

    // Mode nuit
    $('#btn-night').click(function() {
        $('body').toggleClass('night');
        if ($('body').hasClass('night')) {
            $(this).html('<i class="fa-solid fa-sun"></i>');
        } else {
            $(this).html('<i class="fa-solid fa-moon"></i>');
        }
    });

    // Impression
    $('#btn-print').click(function() {
        window.print();
    });

});

// Typed.js — effet machine à écrire
var typed = new Typed('#typed-text', {
    strings: [
        "Futur boyfriend de Solane",
        "Plus bronzé que toi depuis 1999",
        "Peut se transformer en tram",
        "Latino energy activée",
        "Programmeur & skateur confirmé",
        "En attente de votre réponse...",
        "Patience : niveau ultime",
        "Ref SOL-2025 — Candidature sérieuse"
    ],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 2000,
    loop: true
});
