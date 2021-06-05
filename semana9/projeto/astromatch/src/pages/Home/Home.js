import React, { useState, useEffect } from "react";
import "./styled.js";
import { MainHome, ProfileCard, ProfileInfos, Infos, Img, BackgroundPhoto, Bio} from "./styled";
import { ButtonContainer, ButtonX, ButtonHeart } from "./styled";
import axios from "axios";
import { choosePersonUrl, profileUrl } from "../../constants/constants.js";

const Home = () => {
  const [profile, setProfile] = useState({});

  const getProfile = () => {
    axios
      .get(profileUrl)
      .then((res) => setProfile(res.data.profile))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getProfile();
  }, [setProfile]);

  const choosePerson = (id, boolean) => {
    const body = {
      id: id,
      choice: boolean,
    };

    axios
      .post(choosePersonUrl, body)
      .then(() => getProfile())
      .catch((err) => console.log(err));
  };

  return (
    <MainHome>
      <ProfileCard>
        <BackgroundPhoto src={profile.photo}></BackgroundPhoto>
        <Img src={profile.photo} alt={profile.name}></Img>
        <ProfileInfos>
          <Infos>
            <div>{`${profile.name}, ${profile.age}`}</div>
          </Infos>
          <Bio>
            <p>{profile.bio}</p>
          </Bio>
        </ProfileInfos>
      </ProfileCard>
      <ButtonContainer>
        <ButtonX onClick={() => choosePerson(profile.id, false)}>X</ButtonX>
        <ButtonHeart onClick={() => choosePerson(profile.id, true)}>
          ♥
        </ButtonHeart>
      </ButtonContainer>
    </MainHome>
  );
};

export default Home;
