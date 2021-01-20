// cria classe noticias
class Alunos {
  // cria método para buscar noticias no json
  buscaAlunos() {
    // retorna o fetch com a promisse e APENAS A PROMISSE SEM TRATAMENTO
    return fetch("./api.json", { method: 'get' })
  }
}
