
const baliseDuNombreDeProduitsDansLePanier = document.getElementById('nombreDeProduitsDansLePanier');
const baliseDuPanierDAchat = document.querySelector('.panierAchat');
const tableauDuPanierDAchat = document.getElementById('panierAchat-tb');
const baliseBasculePanier = document.getElementById('bascule-panier');
const baliseIconeDuPanierAchat = document.getElementById('iconeDuPanierDAchat');

let nombreArticlesDansLePanier = 0;

function basculerOverturePanier() {
    baliseDuPanierDAchat.classList.toggle('panier-ouvert');
    tableauDuPanierDAchat.classList.toggle('panier-ouvert');
    baliseIconeDuPanierAchat.classList.toggle('fa-times');
    baliseIconeDuPanierAchat.classList.toggle('fa-shopping-cart');
}

// function ajouterAuPanier (produitAAjoute) {

// }

// function retirerDuPanier (produitARetirer) {

// }

baliseBasculePanier.addEventListener('click', basculerOverturePanier);