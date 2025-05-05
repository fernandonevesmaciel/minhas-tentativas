

function verificarsenha(){
    let senhaInput = document.getElementById('senha')
    let senha = senhaInput.value; 
    let res = document.getElementById('res')

    const letrasm = /[a-z]/.test(senha);
    const letrasM = /[A-Z]/.test(senha);
    const numeros = /[0-9]/.test(senha);
    const sEspeciais = /[!@#$%^&*(),.?":{}|<>]/.test(senha);

    if(senha.length < 6){
        res.innerHTML = '🔴 Fraca: menos de 6 caracteres';
    } else if(senha.length >= 6 && senha.length <= 10 && letrasm && numeros){
        res.innerHTML = '🟡 Média: 6 a 10 caracteres, contendo letras e números';
    } else if(senha.length > 10 && letrasm && letrasM && numeros && sEspeciais){
        res.innerHTML = '🟢 Forte: mais de 10 caracteres, contendo letras maiúsculas, minúsculas, números e símbolos especiais';
    } else {
        res.innerHTML = '🟠 Senha precisa de mais diversidade de caracteres';
    }
}


