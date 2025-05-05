
function toggleSenha() {
    const senha = document.getElementById('senha');
    const icone = document.getElementById('iconeSenha');

    if (senha.type === 'password') {
      senha.type = 'text';
      icone.textContent = 'visibility';
    } else {
      senha.type = 'password';
      icone.textContent = 'visibility_off';
    }
  }

  function verificarSenha() {
    const senha = document.getElementById('senha').value;
    let res = document.getElementById('res')

    const regras = {
      minuscula: /[a-z]/.test(senha),
      maiuscula: /[A-Z]/.test(senha),
      numero: /[0-9]/.test(senha),
      especial: /[!@#$%^&*(),.?":{}|<>-]/.test(senha),
      tamanho: senha.length >= 8
    };

    for (let id in regras) {
      const item = document.getElementById(id);
      if (regras[id]) {
        item.classList.add('ok');
      } else {
        item.classList.remove('ok');
      }
    }
  }

  function entrar(){
    let res = document.getElementById('res');
    let senhaInput = document.getElementById('senha').value;
  
    if(senhaInput === 'Familia-31'){
      window.location.href = 'https://www.instagram.com/accounts/login/';
    } else {
      res.innerHTML = 'Senha incorreta';
    }
  }
  