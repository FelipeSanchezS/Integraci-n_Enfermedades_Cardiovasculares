const scriptUrl = 'https://script.google.com/macros/s/AKfycbyYZNEtMZ9fFpaPDIY-ZV8DEKQWopLDEu8F4xVmOi-Z8srd5rWn9IhPsRzLYbvbPR-djw/exec';
const form = document.forms['Datos'];

form.addEventListener('submit', e => {
    e.preventDefault()

    fetch(scriptUrl, {method: 'POST', body: new FormData(form)})
            .then(response => Swal.fire({
        title: "¡MUCHAS GRACIAS!",
        text: "Formulario Envíado",
        icon: "success"}))
            .then( () => { window.location.reload() } )
            .catch(error => console.error('Error', error.message))
})