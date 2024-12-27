// Fonction pour gérer la soumission du formulaire (inchangée)
function handleFormSubmission(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    // ... récupérer les autres valeurs

    if (!name || !email) {
        alert('Veuillez remplir les champs obligatoires.');
        return;
    }

    // ... traitement de la soumission

    alert('Votre demande de réparation a été envoyée avec succès !');
    document.getElementById('repairForm').reset();
}

const repairForm = document.getElementById('repairForm');
if (repairForm) {
    repairForm.addEventListener('submit', handleFormSubmission);
}
