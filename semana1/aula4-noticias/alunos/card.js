// defini a classe card
class Card {
  // cria a propriedade lista que contem a tag com ID Lista do HTML
  constructor() {
    this.alunos = document.getElementById("alunos")
  }

  // monta o HTML do card com os dados do JSON
  mostraAlunos(dados) {
    console.log(dados)
    // cria uma variavel que ira armazenar todo esse HTML
    let card = ''
    // faz o loop no array dados que armazena as noticias
    dados.alunos.map(function (elemento) {
      // adiciona a variavel card todo o HTML com as informações
      // += serve para adicionar sem sobrescrever
      card += `
      <div class="card">
        <h2>Chamada ${elemento.id}</h2>
        <p>${elemento.name}</p>
      </div>
      `
    });

    this.alunos.innerHTML = card
  }
}
