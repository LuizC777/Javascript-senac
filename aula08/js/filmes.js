function carregarFilmes(){
    let lista=document.getElementById('lista')
    
    fetch('https://api.themoviedb.org/3/movie/popular?language=pt-br&api_key=20d67220d1e26945d5972e38c7f594d9')
    .then((resposta)=>resposta.json())
    .then((dados)=>{
        console.log(dados.results)
        dados.results.map((f,i)=>{
            // vamos criar um elemento do tipo div para cada filme mapeado
            // adicionar um atributo do tipo class para formatar
            let div_fm=document.createElement('div')
            div_fm.setAttribute('class','filme')

            let img_capa=document.createElement('img')
            img_capa.src=`https://image.tmdb.org/t/p/w500${f.poster_path}`

            let p_votos=document.createElement('p')
            p_votos.setAttribute('class','votos')
            p_votos.innerHTML=f.vote_average

            let h2_titulo=document.createElement('h2')
            h2_titulo.innerHTML=f.title

            let p_lancamento=document.createElement('p')
            p_lancamento.setAttribute('class','lancamento')
            p_lancamento.innerHTML=f.release_date
            // adicionar a imagem na div com comando appendChild
            div_fm.appendChild(img_capa)
            div_fm.appendChild(p_votos)
            div_fm.appendChild(h2_titulo)
            div_fm.appendChild(p_lancamento)
            // adicionar a div na lista
            lista.appendChild(div_fm)
        })
    })
    .catch((e)=>console.error(e))
}