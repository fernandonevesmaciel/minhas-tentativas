function buscar() {
    const res = document.getElementById('res');
    const opcao = document.getElementById('opcao').value;
    
    res.innerHTML = ''; // Limpa o que tinha antes

    if (opcao === "1") {
        criarLinha(
            "Manual do inversor CFW500",
            `
            <p>📘 Manual do inversor CFW500 disponível para download abaixo:</p>
            <a href="https://drive.google.com/uc?export=download&id=1KdryQ02OayUDnwhxcIJkyVJsrmcdvsnT" target="_blank">Clique aqui para baixar</a>
            <br><br>
            <iframe src="https://drive.google.com/file/d/1KdryQ02OayUDnwhxcIJkyVJsrmcdvsnT/preview" width="300" height="400" style="border:1px solid #ccc; border-radius:5px;"></iframe>
            `
        );
    } else if(opcao === "2"){
        criarLinha(
            "Manual de falhas"
        )
    }
    // você pode colocar outras opções também!

    // FUNÇÃO criarLinha() dentro da função buscar()
    function criarLinha(titulo, conteudoHtml) {
        const linha = document.createElement('div');
        linha.style.margin = "10px";
        linha.style.borderBottom = "1px solid #ccc";
        linha.style.padding = "10px";
        linha.style.position = "relative";

        const texto = document.createElement('span');
        texto.innerText = titulo;
        texto.style.marginRight = "20px";

        const botao = document.createElement('button');
        botao.innerText = '+';
        botao.style.position = "absolute";
        botao.style.right = "10px";
        botao.style.top = "10px";

        const conteudoDiv = document.createElement('div');
        conteudoDiv.style.display = 'none'; // Escondido inicialmente
        conteudoDiv.style.marginTop = '10px';
        conteudoDiv.style.background = '#f9f9f9';
        conteudoDiv.style.padding = '10px';
        conteudoDiv.style.borderRadius = '5px';
        
        // Aqui inserimos o HTML completo (link, p, iframe)
        conteudoDiv.innerHTML = conteudoHtml;

        botao.addEventListener('click', () => {
            if (conteudoDiv.style.display === 'none') {
                conteudoDiv.style.display = 'block';
                botao.innerText = '-';
            } else {
                conteudoDiv.style.display = 'none';
                botao.innerText = '+';
            }
        });

        linha.appendChild(texto);
        linha.appendChild(botao);
        linha.appendChild(conteudoDiv);

        res.appendChild(linha);
    }
}
