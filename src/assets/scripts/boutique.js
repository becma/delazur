import { articlesBoutique } from './articlesBoutique.js';

const baliseDuNombreDeProduitsDansLePanier = document.getElementById('nombreDeProduitsDansLePanier');
const baliseDuPanierDAchat = document.querySelector('.panierAchat');
const tableauDuPanierDAchat = document.getElementById('panierAchat-tb');
const baliseBasculePanier = document.getElementById('bascule-panier');
const baliseIconeDuPanierAchat = document.getElementById('iconeDuPanierDAchat');

function basculerOverturePanier() {
	baliseDuPanierDAchat.classList.toggle('panier-ouvert');
	tableauDuPanierDAchat.classList.toggle('panier-ouvert');
	baliseIconeDuPanierAchat.classList.toggle('fa-times');
	baliseIconeDuPanierAchat.classList.toggle('fa-shopping-cart');
}
baliseBasculePanier.addEventListener('click', basculerOverturePanier);

const articlesAVendre = document.querySelectorAll('section table');
const panier = window.localStorage;
const panierBody = document.querySelector('#panierAchat-tb tbody');
const panierVide = document.createElement('tr');

function gererPanier() {
	if (panier.length === 0) {
		panierVide.innerHTML = `<th headers="panierAchat-th" colspan="4" id="vide">Le panier est vide.</th>`;
		panierBody.append(panierVide);
		baliseDuNombreDeProduitsDansLePanier.innerHTML = '0';
		baliseDuNombreDeProduitsDansLePanier.classList.add('visuallyhidden');
	} else {
		baliseDuNombreDeProduitsDansLePanier.innerHTML = panier.length;
		baliseDuNombreDeProduitsDansLePanier.classList.remove('visuallyhidden');

		for (let i = 0; i < panier.length; i++) {
			const premiereRangee = document.createElement('tr');
			const deuxiemeRangee = document.createElement('tr');

			const arr = panier.getItem(panier.key(i)).split(',');
			premiereRangee.innerHTML = `<th headers="panierAchat-th" colspan="4" id="premier-item">${arr[0]}</th>`;
			deuxiemeRangee.innerHTML = `<td headers="panierAchat-th premier-item" colspan="1">${
				arr[1]
			}</td><td headers="panierAchat-th premier-item" colspan="1">${
				arr[2]
			}</td><td headers="panierAchat-th premier-item" colspan="2"><span class="retirerPanier" id="${panier.key(
				i
			)}">Retirer du panier</span></td>`;
			panierBody.append(premiereRangee);
			premiereRangee.after(deuxiemeRangee);
		}
	}
	document.querySelectorAll('.retirerPanier').forEach((btn) => btn.addEventListener('click', retirerArticle));
}
gererPanier();

function ajouterArticle(article) {
	const buttonsAjouter = article.querySelectorAll('button');
	buttonsAjouter.forEach((btn, index) => {
		btn.addEventListener('click', (e) => {
			if (panierVide) panierVide.remove();
			const id = e.path[4].id;
			panier.setItem(Date.now(), [
				articlesBoutique[id].nom,
				articlesBoutique[id][index].type,
				articlesBoutique[id][index].prix,
			]);
			panierBody.innerHTML = '';
			gererPanier();
		});
	});
}
articlesAVendre.forEach((article) => ajouterArticle(article));

function retirerArticle(event) {
	panier.removeItem(event.target.id);
	console.log(event.target.id);
	panierBody.innerHTML = '';
	gererPanier();
}
