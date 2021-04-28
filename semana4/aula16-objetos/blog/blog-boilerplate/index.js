function criarPost() {
  const arrayDePosts = [];
  const titulo = document.getElementById("titulo-post");
  const autor = document.getElementById("autor-post");
  const conteudo = document.getElementById("conteudo-post");
  const imagem = document.getElementById("imagem-post")
  
  const post = {
    titulo: titulo.value,
    autor: autor.value,
    conteudo: conteudo.value,
    imagem: imagem.value,
  };

  arrayDePosts.push(post);
  
  const containerDePosts = document.getElementById("container-de-posts")
  containerDePosts.innerHTML += `<p>${post.titulo}</p> <p>${post.autor}</p> <p>${post.conteudo}</p> 
  <img src="${imagem}">`

  titulo.value = "";
  autor.value = "";
  conteudo.value = "";
  imagem.value = "";
}


