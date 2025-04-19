// Gestion des détails dépliables
document.addEventListener('DOMContentLoaded', function() {
    const toggleButtons = document.querySelectorAll('.toggle-details');
    
    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const details = this.nextElementSibling;
            const isOpen = details.classList.contains('open');
            
            // Fermer tous les autres détails
            document.querySelectorAll('.project-details.open').forEach(openDetail => {
                if (openDetail !== details) {
                    openDetail.classList.remove('open');
                    const prevButton = openDetail.previousElementSibling;
                    if (prevButton.classList.contains('toggle-details')) {
                        prevButton.classList.remove('active');
                        prevButton.innerHTML = 'VOIR DÉTAILS';
                    }
                }
            });
            
            // Basculer l'état actuel
            details.classList.toggle('open');
            this.classList.toggle('active');
            
            // Changer le texte du bouton
            this.innerHTML = details.classList.contains('open') 
                ? 'MASQUER' 
                : 'VOIR DÉTAILS';
        });
    });
});