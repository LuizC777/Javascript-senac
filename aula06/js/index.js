function array1(){
    let cidades=["São Paulo","Osasco","Suzano","Botucatu","Campinas"]
    // exibir a quantidade de elementos do array
    console.log(cidades.length)
    // exibir os elementos do array
    console.log(cidades)
}
function array2(){
    let cidades=["São Paulo","Osasco","Suzano","Botucatu","Campinas"]
    // vamos exibir a pimeira e a ultima cidade
    console.log(cidades[0])
    console.log(cidades[cidades.length-1])
}
function array3(){
    let frutas = []
    let opt = 1
    while(opt==1){
        opt=prompt("digite:\n1-para adicionar uma nova fruta\n2-sair")
        // o comando break faz a parada da execução do while
        if(opt==2){
            break
        }
        let f=prompt("digite o nome da fruta")
        // vamos usar o comando push para adicionar a nova fruta ao array frutas
        frutas.push(f)

        document.getElementById("saida").innerHTML=frutas
        
    }



}
function array4(){
    let anobi=[]
    for(let i = 1930; i <= 2024; i++){
        if(i%4==0){
            anobi.push(i)
        }
    }
    document.getElementById("saida").innerHTML=anobi
}
function array5(){
    let n = [13,21,16,4,58,111,27,38]
    let pares = []
    for(let i = 0; i<=n.length-1; i++){
        if(n[i]%2==0){
            pares.push(n[i])
        }
    }
    document.getElementById("saida").innerHTML=pares
}
function array6(){
    let a1 = [0,45,8,13,87,50]
    let a2 = [17,10,8,15,45,50,110,30]
    let a3 = []
    for(let i=0;i<=a1.length-1;i++){
        for(let o=0;o<=a2.length-1;o++){
            if(a1[i]==a2[o]){
                a3.push(a1[i])
                break
            }
        }
    }
    document.getElementById("saida").innerHTML=a3
}