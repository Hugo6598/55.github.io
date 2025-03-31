// Liste des sections pour le menu
const sections = [
    { name: "Accueil", id: "Acceuil" },
    { name: "Histoire", id: "Histoire" },
    { name: "Départements", id: "departements" },
    { name: "Personnages", id: "personnages" }
];

// Génération dynamique du menu
const menu = document.getElementById("menu");
menu.innerHTML = "<h3>Navigation</h3>";  // Ajouter un titre au menu

// Crée les liens du menu
sections.forEach(section => {
    const lien = document.createElement("a");
    lien.textContent = section.name; // Nom du lien
    lien.onclick = () => {
        document.getElementById(section.id).scrollIntoView({ behavior: "smooth" }); // Défilement en douceur
    };
    menu.appendChild(lien); // Ajouter chaque lien au menu
});
