function carregar(){
    let opcao1 = document.querySelector('#section1').value;
    let opcao2 = document.querySelector('#section2').value;
    let res = document.querySelector('#res');

    res.innerHTML = ''; // Limpa antes

    // Exemplo: se a pessoa escolher "Manual do inversor" e "CFW 500"
    if (opcao1 === "2" && opcao2 === "2") {
        res.innerHTML = `
            <p>📘 Manual do inversor CFW500 disponível para download abaixo:</p>
            <a href="https://drive.google.com/file/d/1KdryQ02OayUDnwhxcIJkyVJsrmcdvsnT/view?usp=sharing" target="_blank">Clique aqui para baixar</a>
            <iframe src="https://drive.google.com/file/d/1KdryQ02OayUDnwhxcIJkyVJsrmcdvsnT/preview" width="300" height="400"></iframe>
        `;
    // Exemplo: se a pessoa escolher "Manual do inversor" e "G120"
    }else if (opcao1 === "2" && opcao2 === "3") {
        res.innerHTML = `
            <p>📘 Manual do inversor G120 disponível para download abaixo:</p>
            <a href="https://drive.google.com/file/d/1Kl1z_Qw_OyfQjBbwgZPqMleRUB5JLRXi/view?usp=sharing" target="_blank">Clique aqui para baixar</a>
            <iframe src="https://drive.google.com/file/d/1Kl1z_Qw_OyfQjBbwgZPqMleRUB5JLRXi/preview" width="300" height="400"></iframe>
            
        `;
    // Exemplo: se a pessoa escolher "Manual do inversor" e "drivers"   
    }else if (opcao1 === "2" && opcao2 === "4") {
        res.innerHTML = `
            <p>📘 Manual do Driver disponível para download abaixo:</p>
            <a href="https://drive.google.com/file/d/1KnSIzwB30ht7baSoZ1_wu0Nn6in--87D/view?usp=sharing" target="_blank">Clique aqui para baixar</a>
            <iframe src="https://drive.google.com/file/d/1KnSIzwB30ht7baSoZ1_wu0Nn6in--87D/preview" width="300" height="400"></iframe>
        `;
    // Exemplo: se a pessoa escolher "Manual do inversor" e "pioneiro"
    }else if (opcao1 === "2" && opcao2 === "5") {
        res.innerHTML = `
       <p>📘 Manual do inversor CFW500 disponível para download abaixo:</p>
            <a href="https://drive.google.com/file/d/1KdryQ02OayUDnwhxcIJkyVJsrmcdvsnT/view?usp=sharing" target="_blank">Clique aqui para baixar</a>
            

            <p>📘 Manual do inversor G120 disponível para download abaixo:</p>
            <a href="https://drive.google.com/file/d/1Kl1z_Qw_OyfQjBbwgZPqMleRUB5JLRXi/view?usp=sharing" target="_blank">Clique aqui para baixar</a>

             <p>📘 Manual do Driver disponível para download abaixo:</p>
            <a href="https://drive.google.com/file/d/1KnSIzwB30ht7baSoZ1_wu0Nn6in--87D/view?usp=sharing" target="_blank">Clique aqui para baixar</a>
    `;    
    }
    // Exemplo: se a pessoa escolher "falhas inversores" e "CFW500"
    else if (opcao1 === "3" && opcao2 === "2") {
        res.innerHTML = `
        <p>📘 Manual de Falhas do inversor CF500 disponível para download abaixo:</p>
            <a href="https://drive.google.com/uc?export=download&id=1KnfXvqmRlTM79CxOt_Hq88E6Dh_nSk27" target="_blank">Clique aqui para baixar</a>
            <iframe src="https://drive.google.com/file/d/1KnfXvqmRlTM79CxOt_Hq88E6Dh_nSk27/preview" width="300" height="400"></iframe>

    `}
// Exemplo: se a pessoa escolher "falhas inversores" e "G120"
    else if (opcao1 === "3" && opcao2 === "3") {
        res.innerHTML = `
        <p>📘 Manual de Falhas do inversor G120 disponível para download abaixo:</p>
            <a href="https://drive.google.com/file/d/1s1SRsK0_jB_ikSdcKxSiKmQKKk9PQY8P/view?usp=sharing" target="_blank">Clique aqui para baixar</a>
            <iframe src="https://drive.google.com/file/d/1s1SRsK0_jB_ikSdcKxSiKmQKKk9PQY8P/preview" width="300" height="400"></iframe>


    `}
    // Exemplo: se a pessoa escolher "falhas inversores" e "Drivers"
    else if (opcao1 === "3" && opcao2 === "4") {
        res.innerHTML = `
        <p>📘 Manual de Falhas dos Driver's disponível para download abaixo:</p>
            <a href="https://drive.google.com/file/d/1PJlIH-LaUxBk-A77S7YUFMUjWA7UIxcT/view?usp=sharing" target="_blank">Clique aqui para baixar</a>
            <iframe src="https://drive.google.com/file/d/1PJlIH-LaUxBk-A77S7YUFMUjWA7UIxcT/preview" width="300" height="400"></iframe>

    `}
    // Exemplo: se a pessoa escolher "falhas inversores" e "pioneiro"
    else if (opcao1 === "3" && opcao2 === "5") {
        res.innerHTML = `
         <p>📘 Manual de Falhas do inversor CF500 disponível para download abaixo:</p>
            <a href="https://drive.google.com/uc?export=download&id=1KnfXvqmRlTM79CxOt_Hq88E6Dh_nSk27" target="_blank">Clique aqui para baixar</a>

            <p>📘 Manual de Falhas do inversor G120 disponível para download abaixo:</p>
            <a href="https://drive.google.com/file/d/1s1SRsK0_jB_ikSdcKxSiKmQKKk9PQY8P/view?usp=sharing" target="_blank">Clique aqui para baixar</a>

             <p>📘 Manual de Falhas dos Driver's disponível para download abaixo:</p>
            <a href="https://drive.google.com/file/d/1PJlIH-LaUxBk-A77S7YUFMUjWA7UIxcT/view?usp=sharing" target="_blank">Clique aqui para baixar</a>
            
    `}

    else if (opcao1 === "4" && opcao2 === "5") {
        res.innerHTML = `
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

    <p> Para fazer download das senhas em PDF clique no link abaixo:<p>
    <a href="https://drive.google.com/file/d/1KqnimC12YXJsh-3jE_fWduF522ALIBKW/view?usp=sharing" target="_blank">Clique aqui para baixar</a>


    `}else if (opcao1 === "4" && opcao2 === "2" || opcao2 === "3" || opcao2 === "4" ) {
        res.innerHTML = `
        <p>❌ A opção senha só compativel com a opção 2 em pioneiro<p>

    `}

    // Caso não tenha nenhuma combinação válida
    else {
        res.innerHTML = `<p>❌ Nenhuma combinação correspondente encontrada.</p>`;
    }
}
