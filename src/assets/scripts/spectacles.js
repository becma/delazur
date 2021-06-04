const modal = document.querySelector('.modal');
        const courriel = document.getElementById('courriel');
        const boutonSoumettre = document.querySelector('.bouton_soumettre');
        const boutonFermer = document.querySelector('.bouton_fermer');
        const formulaireCourriel = document.querySelector('.modal_courriel');
        const messageMerci = document.querySelector('.modal_courriel_merci');
        const rectangleAbonner = document.querySelector('.abonner');
        const fermerLaFenetre = document.querySelectorAll('.fermerLaFenetre');
        let patternRegEx = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

        rectangleAbonner.addEventListener('click', (event) => {
            formulaireCourriel.style.display = 'flex';
            modal.style.display = 'flex';
        });

        boutonSoumettre.addEventListener('click', (event) => {
            event.preventDefault();
            const validation = patternRegEx.test(courriel.value);
            if (validation) {
                formulaireCourriel.style.display = 'none';
                messageMerci.style.display = 'flex';
            } else {
                alert('Votre courriel n\'est pas valide!');
            }
        });

        for (i = 0; i < fermerLaFenetre.length; i++) {
            fermerLaFenetre[i].addEventListener('click', () => {
                formulaireCourriel.style.display = 'none';
                messageMerci.style.display = 'none';
                modal.style.display = 'none';
            });
        };

        boutonFermer.addEventListener('click', (event) => {
            messageMerci.style.display = 'none';
            modal.style.display = 'none';
        });