const groupeAlbum = document.querySelector('.album');
let largeurEcran = window.innerWidth;
let i = 0;

function afficherCopieAlbum() {

    for (i ; i < 10; i++) {
        
        const copieAlbum = new Image();

        copieAlbum.src = '/src/assets/img/album1.png';
        copieAlbum.classList.add('copie-album');
        copieAlbum.alt = 'Couverture de l\'album Azur Mimosa';
        copieAlbum.ariaHidden = 'true';

        groupeAlbum.append(copieAlbum); 
        
        switch(i) { 
            case 0: 
                copieAlbum.style.zIndex = '9'; 
                copieAlbum.style.opacity = '90%';
                copieAlbum.style.left = '10%';
                break; 
            case 1: 
                copieAlbum.style.zIndex = '8'; 
                copieAlbum.style.opacity = '80%';
                copieAlbum.style.left = '20%';
                break; 
            case 2: 
                copieAlbum.style.zIndex = '7'; 
                copieAlbum.style.opacity = '70%';
                copieAlbum.style.left = '30%';
                break; 
            case 3: 
                copieAlbum.style.zIndex = '6'; 
                copieAlbum.style.opacity = '60%';
                copieAlbum.style.left = '40%';
                break; 
            case 4: 
                copieAlbum.style.zIndex = '5'; 
                copieAlbum.style.opacity = '50%';
                copieAlbum.style.left = '50%';
                break; 
            case 5: 
                copieAlbum.style.zIndex = '4'; 
                copieAlbum.style.opacity = '40%';
                copieAlbum.style.left = '60%';
                break; 
            case 6: 
                copieAlbum.style.zIndex = '3'; 
                copieAlbum.style.opacity = '30%';
                copieAlbum.style.left = '70%';
                break; 
            case 7: 
                copieAlbum.style.zIndex = '2'; 
                copieAlbum.style.opacity = '20%';
                copieAlbum.style.left = '80%';
                break; 
            case 8:
                copieAlbum.style.zIndex = '1'; 
                copieAlbum.style.opacity = '10%';
                copieAlbum.style.left = '90%';
                break; 
            case 9: 
                copieAlbum.style.zIndex = '0'; 
                copieAlbum.style.opacity = '5%';
                copieAlbum.style.left = '100%';
                break; 
        }
    }
}
afficherCopieAlbum();







