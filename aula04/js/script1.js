for(let i = 1 ; i <= 5 ; i++){
    document.getElementById("fotos").innerHTML+="<img src=img/foto"+i+".jpg>"
}

for(let i=1;i<=5;i++){
    document.getElementById("select_foto").innerHTML+="<option value=foto"+i+"> foto "+i+"</option>"
}

function abrirfoto(){
    let foto = document.getElementById("select_foto")
    //vamos abrir uma nova guia no navegador
    //o primeiro parametro do comando window.open é a url, que é o endereço da págiona.
    // o segundo parametro é onde ela sera aberta,como a guia chamada exibir, ou "_blank", que é uma nova guia
    window.open("img/"+foto.value+".jpg", "exibir")
}