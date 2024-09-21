let nome=document.getElementById('txtNome')
let email=document.getElementById('txtEmail')
let telefone=document.getElementById('txtTel')
let idade=document.getElementById('txtIdade')

let dados= []
let cadastro=()=>{
    let cliente={
        nome:nome.value,
        email:email.value,
        telefone:telefone.value,
        idade:idade.value
    }
    dados.push(cliente)
    listarClientes()
    console.log(dados)
}
let listarClientes=()=>{
    let lista=document.getElementById('lista')
    lista.innerHTML=`
    <p>
        <span>Nome</span>
        <span>Email</span>
        <span>Telefone</span>
        <span>Idade</span>
    </p>
    `

    let saida=''
    dados.map((cli,ix)=>{
        saida+=`
        <p>
            <span>${cli.nome}</span>
            <span>${cli.email}</span>
            <span>${cli.telefone}</span>
            <span>${cli.idade}</span>
        </p>
        `
    })
    lista.innerHTML+=saida
}