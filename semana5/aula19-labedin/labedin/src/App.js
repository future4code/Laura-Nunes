import React from "react";
import "./App.css";
import CardGrande from "./components/CardGrande/CardGrande";
import CardPequeno from "./components/CardPequeno/CardPequeno";
import ImagemButton from "./components/ImagemButton/ImagemButton";
import styled from "styled-components";


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem="https://i.ibb.co/Qpd3Rhm/3zwaec.jpg"
          nome="Laura"
          descricao="Oi, eu sou a Laura. Sou aluna da Labenu. Tenho 27 anos, sou graduanda em pedagogia e agora 
          estou me aventurando no mundo das exatas. Já dei aula, já trabalhei como fotógrafa, dirigi alguns 
          curta metragens, já fui da área financeira também. O que não me falta é curiosidade e vontade de
          aprender de tudo."
        />

        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
          imagem=""
          nome="Email:"
          descricao="lauranunes.c@gmail.com"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
          imagem=""
          nome="Endereço"
          descricao="Rua Luis Forner, 40"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png"
          nome="Labenu"
          descricao="Desenvolvedora Web Full Stack"
        />

        <CardGrande
          imagem="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Logomarca_UFSCAR.png/1200px-Logomarca_UFSCAR.png"
          nome="UFSCar"
          descricao="Graduanda em Pedagogia."
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>
    </div>
  );
}

export default App;
