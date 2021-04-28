function criarPost() {
  const arrayDePosts = [];
  const titulo = document.getElementById("titulo-post");
  const autor = document.getElementById("autor-post");
  const conteudo = document.getElementById("conteudo-post");
  
  const post = {
    titulo: titulo.value,
    autor: autor.value,
    conteudo: conteudo.value,
  };

  arrayDePosts.push(post);
  console.log(arrayDePosts)

  const containerDePosts = document.getElementById("container-de-posts")
  containerDePosts.innerHTML += `<p>${post.titulo}</p> <p>${post.autor}</p> <p>${post.conteudo}</p>`


  titulo.value = "";
  autor.value = "";
  conteudo.value = "";
}


