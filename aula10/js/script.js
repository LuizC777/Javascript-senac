// function horario(){
//     // vamos fazer a instância da classe date, onde iremos encontrar as funções de data e hora.

//     let tempo=new Date()
//     let hora = tempo.getHours()
//     let minuto = tempo.getMinutes()
//     let segundo = tempo.getSeconds()

//     document.querySelector('#relogio').innerHTML=`${hora}:${minuto}:${segundo}`
// }
// let p=0
// function movimentaDiv(){
//     if(p>=1285){
//         p=1285
//     }
//     else{
//         p++
//     }
//     document.querySelector('#imagem').style.left=p+'px';
//     console.log(p)
// }
// window.setInterval(movimentaDiv,1)

function apagarSombra(){
    document.querySelector('#sombra').style.opacity='0'
}
window.setTimeout(apagarSombra, 3000)