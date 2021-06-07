const motDePasseInput = document.getElementById('mot_de_passe');
const boutonSoumettre = document.getElementById('soumettre');
const formElement = document.querySelector('form');
const motDePasseFieldset = document.querySelector('.mot_de_passe'); 

let messageNonActive = true; 
let pMessageErreur = document.createElement('p');

function afficherMessageErreur(event) { 
	let champsMotDePasse = motDePasseInput.value;
	
	if(champsMotDePasse != 'Kaput Draconis') { 
		event.preventDefault();
		
		if (messageNonActive) { 
			pMessageErreur.innerHTML = 'Le mot de passe n\'est pas valide'
			motDePasseFieldset.appendChild(pMessageErreur); 
			pMessageErreur.classList.add('message_erreur'); 
			messageNonActive = false; 
		}; 
	};
}

formElement.addEventListener('submit', afficherMessageErreur)
