import React, { useState, useEffect } from "react";
import "./styled.js";
import { MainHome, ProfileCard, ProfileInfos, Infos } from "./styled";
import { ButtonContainer, ButtonX, ButtonHeart } from "./styled";
import axios from "axios";
import { choosePersonUrl, profileUrl } from "../../constants/constants.js";

const Home = () => {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    const getProfile = () => {
      axios
        .get(profileUrl)
        .then((res) => setProfile(res.data.profile))
        .catch((err) => console.log(err));
    };
    getProfile();
  }, [setProfile, profileUrl]);

  const choosePerson = (id, boolean) => {
    const body = {
      id: id,
      choice: boolean,
    };

    axios
      .post(choosePersonUrl, body)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

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
        <ButtonX 
          onClick={() => choosePerson(profile.id, false)}
          >
          X
        </ButtonX>
        <ButtonHeart
          onClick={() => choosePerson(profile.id, true)}
        >
          ♥
        </ButtonHeart>
      </ButtonContainer>
    </MainHome>
  );
};

export default Home;
