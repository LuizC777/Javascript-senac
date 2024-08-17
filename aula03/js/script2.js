function calcular(){
    let preco = document.getElementById("preco")
    let forma = document.getElementById("forma_pagamento")
    let valor_pagar = document.getElementById("valor_pagar")

    /* 
    se a forma de pagamento for pix, 10% de desconto
    se a forma de pagamento for dinheiro, 5% de desconto
    se a forma de pagamento for cartão, 5% de acrécimo
    se não for selecionada forma de pagamneto, será apresentada mensagem
    */

    let resultado = 0
    if (forma.value=="pix"){
        resultado = preco.value*0.9
    }
    else if (forma.value=="dinheiro"){
        resultado = preco.value*0.95
    }
    else if (forma.value=="cartao"){
        resultado = preco.value*1.05
    }
    else{
        alert("Selecione uma forma de pagamento")
    }
    
    valor_pagar.value="R$ " + resultado
}

function pagamento(){
    let forma = document.getElementById("forma_pagamento")
    if(forma.value=="cartao"){
        document.getElementById("parcelas").style.display="block"
    } else {
        document.getElementById("parcelas").style.display="none"
    }
}
function parcelamento(){
    let qtd_par = document.getElementById("qtd_par")
    let valor_par = document.getElementById("valor_par")
    let valor_pagar = document.getElementById("valor_pagar")

    switch(qtd_par.value){
        case "1":
            valor_par.value=valor_pagar.value.substring(3,10)
            break
        case "2":
            valor_par.value=valor_pagar.value.substring(3,10) / 2
            break
        case "3":
            valor_par.value=valor_pagar.value.substring(3,10) / 3
            break
        case "4":
            valor_par.value=valor_pagar.value.substring(3,10) / 4
            break
    }

}