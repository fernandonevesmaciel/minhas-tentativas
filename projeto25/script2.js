function carregar() {
    const res = document.getElementById('res');
    const opcao = document.getElementById('section1').value;
    
    res.innerHTML = ''; // Limpa o que tinha antes

    if (opcao === "1") {
        criarLinha(
            "Manual do inversor ",
            `
            <p>📘 Manual do inversor CFW500 disponível para download abaixo:</p>
            <a href="https://drive.google.com/uc?export=download&id=1KdryQ02OayUDnwhxcIJkyVJsrmcdvsnT" target="_blank">Clique aqui para baixar</a>
            <br><br>
            <iframe src="https://drive.google.com/file/d/1KdryQ02OayUDnwhxcIJkyVJsrmcdvsnT/preview" width="300" height="400" style="border:1px solid #ccc; border-radius:5px;"></iframe>
            `
        );
            criarLinha(
                "Manual de falhas",
                `
                <p>📘 Manual de Falhas do inversor CF500 disponível para download abaixo:</p>
                <a href="https://drive.google.com/uc?export=download&id=1KnfXvqmRlTM79CxOt_Hq88E6Dh_nSk27" target="_blank">Clique aqui para baixar</a>
                <iframe src="https://drive.google.com/file/d/1KnfXvqmRlTM79CxOt_Hq88E6Dh_nSk27/preview" width="300" height="400"></iframe>
                
                `
            );

            criarLinha(
                "Principais Parâmetros",
                `
                <table>
            <thead>
                <tr>
                    <th>Parâmetros</th>
                    <th>Descrição</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>P000</td>
                    <td>Senha de acesso para modificar parâmetros</td>
                </tr>
                <tr>
                    <td>P100</td>
                    <td>Rampa de aceleração</td>
                </tr>
                <tr>
                    <td>P101</td>
                    <td>Rampa de desaceleração</td>
                </tr>
                 <tr>
                    <td>P133</td>
                    <td>Frequência minima</td>
                </tr>
                 <tr>
                    <td>P134</td>
                    <td>Frequência máxima</td>
                </tr>
                <tr>
                    <td>P156</td>
                    <td>Corrente 1.1x a nominal do motor</td>
                    
                </tr>
                 <tr>
                    <td>P157</td>
                    <td>Corrente 1x a nominal do motor</td>
                </tr>
                 <tr>
                    <td>P158</td>
                    <td>Corrente 0.8x a nominal do motor</td>
                </tr>
                 <tr>
                    <td>P204</td>
                    <td>5 = Reseta o inversor de Fábrica</td>
                </tr>
                 <tr>
                    <td>P220</td>
                    <td>Seleciona acesso Remoto ou Local</td>
                </tr>
                 <tr>
                    <td>P221</td>
                    <td>Referência de velocidade local</td>
                </tr>
                 <tr>
                    <td>P222</td>
                    <td>Referência de velocidade Remoto</td>
                </tr>
                 <tr>
                    <td>P223</td>
                    <td>Sentido de giro Local</td>
                </tr>
                 <tr>
                    <td>P226</td>
                    <td>Sentido de giro Remoto</td>
                </tr>
                 <tr>
                    <td>P271</td>
                    <td>Sinal das entradas digitais<br>
                    0 =  sinal NPN<br>
                    1 = sinal PNP</td>
                </tr>
            </tbody>
        </table>
    
        <p>Com base nesses parâmetros acesse o manual.</p>
                `
            );
    } else if(opcao === "2"){
        criarLinha(
            "Manual do inversor ",
            `
            <p>📘 Manual do inversor G120 disponível para download abaixo:</p>
            <a href="https://drive.google.com/file/d/1Kl1z_Qw_OyfQjBbwgZPqMleRUB5JLRXi/view?usp=sharing" target="_blank">Clique aqui para baixar</a>
            <iframe src="https://drive.google.com/file/d/1Kl1z_Qw_OyfQjBbwgZPqMleRUB5JLRXi/preview" width="300" height="400"></iframe>
            `
        );

        criarLinha(
            "Manual de falhas",
            `
            <p>📘 Manual de Falhas do inversor G120 disponível para download abaixo:</p>
            <a href="https://drive.google.com/file/d/1s1SRsK0_jB_ikSdcKxSiKmQKKk9PQY8P/view?usp=sharing" target="_blank">Clique aqui para baixar</a>
            <iframe src="https://drive.google.com/file/d/1s1SRsK0_jB_ikSdcKxSiKmQKKk9PQY8P/preview" width="300" height="400"></iframe>
            `
        );
        criarLinha(
            "Principais Parâmetros",
            `
            <table>
        <thead>
            <tr>
                <th>Parâmetros</th>
                <th>Descrição</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>P100</td>
                <td>2= referente inversor em 60Hz</td>
            </tr>
            <tr>
                <td>P304</td>
                <td>Tensão do motor</td>
            </tr>
            <tr>
                <td>P305</td>
                <td>corrente do motor</td>
            </tr>
             <tr>
                <td>P307</td>
                <td>potência do motor</td>
            </tr>
             <tr>
                <td>P308</td>
                <td>fator de potência</td>
            </tr>
            <tr>
                <td>P310</td>
                <td>frequência do inversor</td>
                
            </tr>
             <tr>
                <td>P311</td>
                <td>Velocidade em RPM do motor</td>
            </tr>
             <tr>
                <td>P640</td>
                <td>Limite de corrente em Amperes</td>
            </tr>
             <tr>
                <td>P1080</td>
                <td>Velocidade minima em RPM</td>
            </tr>
             <tr>
                <td>P1082</td>
                <td>Velocidade máxima em RPM</td>
            </tr>
             <tr>
                <td>P1120</td>
                <td>Rampa de aceleração</td>
            </tr>
             <tr>
                <td>P1121</td>
                <td>Rampa de desaceleração</td>
            </tr>
        </tbody>
    </table>

    <p>Com base nesses parâmetros acesse o manual.</p>
            `
        );
    }else if(opcao === "3"){
        criarLinha(
            "Manual do inversor ",
            `
            <p>📘 Manual do Driver disponível para download abaixo:</p>
            <a href="https://drive.google.com/file/d/1KnSIzwB30ht7baSoZ1_wu0Nn6in--87D/view?usp=sharing" target="_blank">Clique aqui para baixar</a>
            <iframe src="https://drive.google.com/file/d/1KnSIzwB30ht7baSoZ1_wu0Nn6in--87D/preview" width="300" height="400"></iframe>
            `
        );

        criarLinha(
            "Manual de falhas",
            `
            <p>📘 Manual de Falhas dos Driver's disponível para download abaixo:</p>
            <a href="https://drive.google.com/file/d/1PJlIH-LaUxBk-A77S7YUFMUjWA7UIxcT/view?usp=sharing" target="_blank">Clique aqui para baixar</a>
            <iframe src="https://drive.google.com/file/d/1PJlIH-LaUxBk-A77S7YUFMUjWA7UIxcT/preview" width="300" height="400"></iframe>
            `
        );

        criarLinha(
            "Principais Parâmetros",
            `
            <table>
        <thead>
            <tr>
                <th>Parâmetros</th>
                <th>Descrição</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>P301</td>
                <td>velocidade miníma em RPM</td>
            </tr>
            <tr>
                <td>P302</td>
                <td>velocidade máxima em RPM</td>
            </tr>
            <tr>
                <td>P900</td>
                <td>Offset de referência</td>
            </tr>
             <tr>
                <td>P136-P146</td>
                <td>Rampa de parada</td>
            </tr>
             <tr>
                <td>P134-P144</td>
                <td>Rampa de partida</td>
        </tbody>
    </table>

    <p>Com base nesses parâmetros acesse o manual.</p>
            `
        );
    }else if(opcao === "4"){
        criarLinha(
            "Tabela com senhas ",
            `
            <p>📄 Senhas abatedouro</p>
        <p> Se login estiver em branco sinal que não tem login para acessar<p>
    <table>
        <thead>
            <tr>
                <th>Login</th>
                <th>Senha</th>
                <th>Local</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>m</td>
                <td>ab</td>
                <td>sterovac</td>
            </tr>
            <tr>
                <td></td>
                <td>232</td>
                <td>velocidade tranferidor</td>
            </tr>
            <tr>
                <td></td>
                <td>3318</td>
                <td>manutenção transferidor</td>
            </tr>
             <tr>
                <td></td>
                <td>1234</td>
                <td>higienização CMS</td>
            </tr>
             <tr>
                <td></td>
                <td>manut123</td>
                <td>plastificadora</td>
            </tr>
            <tr>
                <td></td>
                <td>manut123</td>
                <td>hig caixas corte</td>
            </tr>
             <tr>
                <td>OP</td>
                <td>123456789</td>
                <td>paletização</td>
            </tr>
             <tr>
                <td>admin</td>
                <td>0000</td>
                <td>choque 1</td>
            </tr>
             <tr>
                <td></td>
                <td>3333</td>
                <td>detector de metal</td>
            </tr>
        </tbody>
    </table>
            `
        );

        criarLinha(
            "Download senhas em PDF",
            `
             <p> Para fazer download das senhas em PDF clique no link abaixo:<p>
    <a href="https://drive.google.com/file/d/1KqnimC12YXJsh-3jE_fWduF522ALIBKW/view?usp=sharing" target="_blank">Clique aqui para baixar</a>

            `
        );
    }
    // você pode colocar outras opções também!

    // FUNÇÃO criarLinha() dentro da função buscar()
    function criarLinha(titulo, conteudoHtml) {
        const linha = document.createElement('div');
        linha.classList.add('linha');
    
        const texto = document.createElement('span');
        texto.innerText = titulo;
        texto.classList.add('titulo');
    
        const botao = document.createElement('button');
        botao.innerText = '+';
        botao.classList.add('botao-toggle');
    
        const conteudoDiv = document.createElement('div');
        conteudoDiv.classList.add('conteudo');
        conteudoDiv.innerHTML = conteudoHtml;
        conteudoDiv.style.display = 'none'; // apenas isso pode ficar no JS (ou usar classe CSS se quiser)
    
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
        document.getElementById('res').appendChild(linha);
    }
}
