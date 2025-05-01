function calcular(){
    let num = document.getElementById('numero')
    let res = document.getElementById('res')
    let n = Number(num.value)
 
    res.innerHTML = ""
    
    if (n <= 0){
        alert = 'Digite um número valido'
    }else{
        for(i = 1; i <= 10; i ++){
            let tabuada = n * i

            res.innerHTML += `${n} x ${i} = ${tabuada}<br>`
        }
    }

}