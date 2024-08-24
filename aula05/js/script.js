function verificarcpf(){
    let cpf = document.getElementById("cpf")
    let msg = document.getElementById("msg")
    // verificar se a caixa do cpf esta preenchida, caso esteja vazia exibir mensagem para o preenchimento
    if(cpf.value==""){
    return msg.innerHTML="você deve preencher o cpf"
    }

    let peso10 = 10 // primeira parte da conta
    let peso11 = 11 // segunda parte da conta
    let resto = 0 // resto da divisão
    let resultado = 0 

    /*
    a variavel cpf calc foi criada para guardar os 9 primeiros digitos e realizar os calculos nescessarios, utilizamos o comando
    substring para quebrar os digitos do cpf que são 11 em 9 digitos no substring o primeiro valor refere-se à posição em que
    começa a pegar os digitos, ja o segundo valor diz respeito a quantidade de digitos que queremos pegar portanto
    pegamos da posição 0 a quantidade de 9 números.
    */

    let cpf_calc = cpf.value.substring(0,9)

    for(let i = 0 ; i<9 ; i++){
    resultado+=cpf_calc[i]*peso10
    peso10--
    }
    resto = resultado %11
    if(resto < 2) {
        cpf_calc+=0
    } else {
        cpf_calc=11-resto
    }

    resultado=0

    for(let i = 0 ; i<10 ; i++){
        resultado+=cpf_calc[i]*peso11
        peso10--
        }
        resto = resultado %11
        if(resto < 2) {
            cpf_calc+=0
        } else {
            cpf_calc=11-resto
        }

        if(cpf_calc==cpf.value){
            msg.innerHTML="cpf válido"
        } else {
            msg.innerHTML="cpf inválido"
        }
}