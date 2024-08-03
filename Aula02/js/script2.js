// vamos criar as variaveis para saber a nota final do aluno
var nome = prompt("digite o nome do aluno")
var nota1 = prompt("digite a primeira nota")
var nota2 = prompt("digite a segunda nota")
var nota3 = prompt("digite a terceira nota")
var nota4 = prompt("digite a quarta nota")

// converter as variaveis das notas para valores numericos (float)
nota1 = parseFloat(nota1)
nota2 = parseFloat(nota2)
nota3 = parseFloat(nota3)
nota4 = parseFloat(nota4)

var media = (nota1+nota2+nota3+nota4) / 4

document.getElementsByTagName("h2")[0].innerHTML=nome
document.getElementsByTagName("p")[0].innerHTML="nota 1: " + nota1
document.getElementsByTagName("p")[1].innerHTML="nota 2: " + nota2
document.getElementsByTagName("p")[2].innerHTML="nota 3: " + nota3
document.getElementsByTagName("p")[3].innerHTML="nota 4: " + nota4
document.getElementsByTagName("p")[4].innerHTML="nota media: " + media

if (media >=6){
    document.getElementsByTagName("p")[5].innerHTML = "aprovado"
} else {
    document.getElementsByTagName("p")[5].innerHTML = "reprovado"
}