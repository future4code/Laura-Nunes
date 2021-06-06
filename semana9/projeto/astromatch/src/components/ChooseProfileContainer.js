import React, { useState, useEffect } from "react";
import axios from "axios";
import { choosePersonUrl, profileUrl } from "../constants/constants";
import {
  ProfileCard,
  ProfileInfos,
  Infos,
  Img,
  BackgroundPhoto,
  Bio,
  ButtonContainer,
  ButtonX,
  ButtonHeart,
} from "./styled";

const ChooseProfileContainer = () => {
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
    <div>
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
    </div>
  );
};

export default ChooseProfileContainer;
