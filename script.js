// Fonction pour gérer la soumission du formulaire
function handleFormSubmission(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    // Récupérer les valeurs du formulaire
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    // ... récupérer les autres valeurs

    // Validation simple (vous pouvez ajouter des validations plus complexes)
    if (!name || !email) {
        alert('Veuillez remplir les champs obligatoires.');
        return;
    }

    // Traitement de la soumission (envoi des données à un serveur, etc.)
    // ... ici, vous pourriez utiliser fetch() pour envoyer les données à un script côté serveur

    // Exemple d'affichage d'un message de confirmation
    alert('Votre demande de réparation a été envoyée avec succès !');
    document.getElementById('repairForm').reset(); // Réinitialise le formulaire
}

// Ajouter un écouteur d'événement au formulaire
const repairForm = document.getElementById('repairForm');
if (repairForm) {
    repairForm.addEventListener('submit', handleFormSubmission);
}
