function calculos(){
    let op=0
    while(op!=9){
        let n1 = prompt("digite um número")
        let n2 = prompt("digite outro número")
        op=prompt("digite:\n1-soma\n2-subtrair\n3-multiplicar\n4-dividir\n9-sair")
        n1=parseFloat(n1)
        n2=parseFloat(n2)
        if(op==1){
            alert(n1+n2)
        }
        else if(op==2){
            alert(n1-n2)
        }
        else if (op==3){
            alert(n1*n2)
        }
        else if(op==4){
            alert(n1/n2)
        }
        else {
            break
        }
    }
}
function anobissexto(){
    let anoi = prompt("digite um ano inicial")
    let anof = prompt("digite um ano final")
    while(anoi<=anof){
        if(anoi%4==0){
            console.log(anoi)
        }
        anoi++
    }
}
function tabuada(){
    let n1 = prompt("descobrir a tabuada do:")
    n1=parseInt(n1)
    let mult = 1
    while(mult<=10){
        result = n1*mult
        document.getElementById("res").innerHTML+="<p>"+n1+"x"+mult+"="+result+"</p>"
        mult++
        console.log(result)
    }
}