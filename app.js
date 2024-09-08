// console.log (dados);//  // <-- Linha comentada, provavelmente usada para depuração

function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    
    let campoPesquisa = document.getElementById
    ("campo-pesquisa").value

    //se campo pesquisa for uma string sem nada
    if (campoPesquisa == "") {
        section.innerHTML = "<p>Nada foi encontrado<p>"
        return 
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = ""; 
    let titulo = "";
    let descricao = "";
    let tags = "";
  
    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        //se includes campo de pesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
        // Constrói o HTML para cada resultado, inserindo o título e a descrição do dado
        resultados += `
        <div class="item-resultado">
            <h2>${dado.titulo}</h2>
                <p class="descricao-meta">${dado.descricao}</p>
      </div>
     `;
        }
        //então, faça...
        console.log(dado.titulo.includes(campoPesquisa))
      
    }

    if (!resultados){
        resultados = "<p>Nada foi encontrado</p>"
    }
  
    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
  }

