// fazer referencia aos controles do formulario

const nome = document.getElementById('txtnome')
const email = document.getElementById('txtemail')
const telefone = document.getElementById('txttelefone')
const endereco = document.getElementById('txtendereco')
const idade = document.getElementById('txtidade')

// fazer referencia ao botao salvar

const btnsalvar = document.getElementById('salvar')

// para realizar o cadastro de um novo cliente, iremos usar o fetch para localizar o url como o endpoint cadastrar. Passar como parâmetro
// o método post e os dados do formulário para a API de cadastro do clietne

btnsalvar.onclick=()=>{
    fetch('http://10.26.49.20:3000/cadastrar',
    {
        method:'POST',
        headers:{
            'accept':'application/json',
            'content-type':'application/json'
        },
        body:JSON.stringify({
            nome:nome.value,
            email:email.value,
            telefone:telefone.value,
            endereco:endereco.value,
            idade:idade.value

        })
    })
    .then((resposta)=>resposta.json())
    .then((rs)=>alert(rs.msg))
    .catch((error)=>console.error(`erro na API -> ${error}`))
}
const lista = document.getElementById('lista')

// quando o documento carregar a lista de clientes deve ser montada na tela

document.body.onload=()=>{
    fetch('http://10.26.49.20:3000/listar')
    .then((resposta)=>resposta.json())
    .then((rs)=>{
        let saida = ''
        rs.dados.map((cli)=>{
            saida+=`<div class="card" style="width: 18rem;">
            <img src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png" class="card-img-top tamanho" alt="...">
            <div class="card-body">
              <h5 class="card-title">${cli.nome}</h5>
              <p class="card-text"></p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">E-mail: ${cli.email}</li>
              <li class="list-group-item">Telefone: ${cli.telefone}</li>
              <li class="list-group-item">End.: ${cli.endereco}</li>
              <li class="list-group-item">Idade: ${cli.idade}</li>
            </ul>
            <div class="card-body">
              <a href="#" class="btn btn-danger">Excluir</a>
              ###https://cdn-icons-png.flaticon.com/512/15389/15389475.png###
              <a href="#" class="btn btn-primary">Editar</a>
            </div>
          </div>`
        })
        lista.innerHTML=saida
    })
    .catch((error)=>console.error(`erro na api -> ${error}`))
}