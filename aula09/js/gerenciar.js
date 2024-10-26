// fazer referencia aos controles do formulario

const nome = document.getElementById('txtnome')
const email = document.getElementById('txtemail')
const telefone = document.getElementById('txttelefone')
const endereco = document.getElementById('txtendereco')
const idade = document.getElementById('txtidade')
let idcli = 0

// fazer referencia ao botao salvar

const btnsalvar = document.getElementById('salvar')

// fazer referencia ao botao atualizar

const btnatualizar = document.getElementById('upd')

// fazer referencia ao botao cadastrar

const btncadastrar = document.getElementById('btncadastrar')

// quandoclicar em cadastrar, o botao atualizar deve desaparecer com display none

btncadastrar.onclick=()=>{
  btnatualizar.style.display='none'
  btnsalvar.style.display='block'
}


// para realizar o cadastro de um novo cliente, iremos usar o fetch para localizar o url como o endpoint cadastrar. Passar como parâmetro
// o método post e os dados do formulário para a API de cadastro do clietne

btnsalvar.onclick=()=>{

  if(confirm('Deseja salvar?')==1){
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
    window.location.reload()
  }
  else{
    return
  }

    
}
const lista = document.getElementById('lista')

// quando o documento carregar a lista de clientes deve ser montada na tela

document.body.onload=()=>{
    fetch('http://10.26.49.20:3000/listar')
    .then((resposta)=>resposta.json())
    .then((rs)=>{
        let saida = ''
        rs.dados.map((cli)=>{
            saida+=`<div class="card col-3" >
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
              <a href="#" class="btn btn-danger" onclick=apagar(${cli.idcliente})>Excluir</a>
              <a href="#" class="btn btn-primary"  data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="atualizar(${cli.idcliente},'${cli.nome}','${cli.endereco}','${cli.telefone}','${cli.email}',${cli.idade})">Editar</a>
            </div>
          </div>`
        })
        lista.innerHTML=saida
    })
    .catch((error)=>console.error(`erro na api -> ${error}`))
}

function apagar(id){
  
  if(confirm('Você deseja realmente apagar?')==1){
    fetch(`http://10.26.49.20:3000/apagar/${id}`,{
    method:'DELETE',
    headers:{
      'accept':'application/json',
      'content-type':'application/json'
    }
  })
  .then((resposta)=>resposta.json())
  .then((rs)=>{
    if(rs.msg=='Apagou'){
      alert(`O cliente de id: ${id} foi apagado com sucesso`)
      // fazer um reload na pagina para atualizar os dados
      window.location.reload()
    }
    else {
      alert(`Não foi possível apagar o cliente de id: ${id}\nVeja o erro abaixo:\n${rs.msg}`)
    }
  })
  .catch((error)=>console.error(`Erro ao carregar a API ${error}`))
  }
  else{
    return 
  }

  
}

function atualizar(id,no,en,te,em,ida){

  btnsalvar.style.display='none'
  btnatualizar.style.display='block'

  console.log(`${id}\n${no}\n${en}\n${te}\n${em}\n${ida}\n`)
  nome.value=no
  endereco.value=en
  telefone.value=te
  email.value=em
  idade.value=ida
  idcli=id
}
// vamos aplicar a funcao de atualizar os dados do formulario ao botao atualizar do modal

btnatualizar.onclick=()=>{

  if(confirm("Você realmente quer atualizar?")==1){
    fetch(`http://10.26.49.20:3000/atualizar/${idcli}`,{
      method:'PUT',
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
    .then((rs)=>{
      if(rs.msg=='Atualizado'){
        alert(`O cliente ${nome.value} foi atualizado com sucesso`)
        window.location.reload()
      }
      else{
        alert(`Não foi possível atualizar o cliente ${nome.value}\nVeja o que ocorreu:\n${rs.msg}`)
      }
    })
    .catch((er)=>console.error(`Erro ao carregar a API ${er}`))
  }
  else{
    return
  }
  
}