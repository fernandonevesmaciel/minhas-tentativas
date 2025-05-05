function gerarsenha() {
    let tamanhosenha = document.getElementById('tamanhoSenha');
    let tsenha = Number(tamanhosenha.value);
    let resultado = document.getElementById('res');

    if (tsenha < 4 || tsenha > 20) {
        alert('[ERRO] O tamanho da senha deve ser entre 4 e 20 caracteres.');
        resultado.innerHTML = ''; // limpa o campo de resultado se houver erro
        return;

    }

    // Conjunto de caracteres possíveis
    let caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{};:,.<>?';
    let senha = '';

    for (let i = 0; i < tsenha; i++) {
        let aleatorio = Math.floor(Math.random() * caracteres.length);
        senha += caracteres[aleatorio];
    }

    resultado.innerHTML = `<p><strong>Senha gerada:</strong> ${senha}</p>`;
}
