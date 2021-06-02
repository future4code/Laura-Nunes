import React, { useState, useEffect } from "react";
import "./styled.js";
import { MainHome, ProfileCard, ProfileInfos, Infos } from "./styled";
import { ButtonContainer, ButtonX, ButtonHeart } from "./styled";
import axios from "axios";

const Home = () => {
  const [profile, setProfile] = useState({})

  const profileUrl = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/laura-campos/person"
  const choosePersonUrl = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/laura-campos/choose-person"

  useEffect(() => {
    const getProfile = () => {
      axios
      .get(profileUrl)
      .then((res) => setProfile(res.data.profile))
      .catch((err) => console.log(err))
    };
    getProfile();
  }, [setProfile, profileUrl]);

  // const choosePerson = () => {
  //   axios
  //   .post
  // }



  return (
    <MainHome>
      <ProfileCard>
        {/* {/* retorna uma div com a imagem em blur\} */}
        <img src={profile.photo}></img>
        <ProfileInfos>
          <Infos>
            <div>{profile.name}, </div>
            <div>{profile.age}</div>
          </Infos>
          <p>{profile.bio}</p>
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
