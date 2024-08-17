let cores="<table>"
for(let i = 0; i<=10; i++){
    cores+="<tr>"
    for(let p = 0; p<= 50; p++){
        let r = parseInt(Math.random()*255)
        let g = parseInt(Math.random()*255)
        let b = parseInt(Math.random()*255)
        cores+= "<td style=background-color:rgb("+r+","+g+","+b+")> </td>"
    }
    cores+="</tr>"
}
cores+="</table>"
document.getElementById("paleta").innerHTML= cores