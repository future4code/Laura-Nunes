import React from "react";
import "./styled.js";
import { MainHome } from "./styled";
import { ProfileCard } from "./styled";
import { ProfileInfos } from "./styled";
import { Infos } from "./styled";
import { ButtonContainer } from "./styled";
import { ButtonX } from "./styled";
import { ButtonHeart } from "./styled";

const Home = () => {
  return (
    <MainHome>
      <ProfileCard>
        {/* {/* retorna uma div com a imagem em blur\} */}
        IMAGEM DE PERFIL
        <ProfileInfos>
          <Infos>
            <div>Nome da pessoa, </div>
            <div>idade</div>
          </Infos>
          <p>Bio da pessoa</p>
        </ProfileInfos>
      </ProfileCard>
      <ButtonContainer>
        <ButtonX>X</ButtonX>
        <ButtonHeart>♥</ButtonHeart>
      </ButtonContainer>
    </MainHome>
  );
};

export default Home;
