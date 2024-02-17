document.getElementById('sub-form').addEventListener('submit', function() {
    let email = document.getElementById('email-input').value;
    console.log('email', email);

    if(email === ""){
        window.alert('Nenhum email encontrado!')
    }
})