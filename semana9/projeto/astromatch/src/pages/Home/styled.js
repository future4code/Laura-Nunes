import styled, { keyframes } from "styled-components";

export const MainHome = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
  justify-content: flex-end;
  padding: 20px 20px 0px;

  @media screen and (min-width: 450px) {
  }
`;

export const ProfileCard = styled.div`
  box-shadow: rgb(117 117 117 / 77%) 0px 2px 10px 0px;
  position: relative;
  border-radius: 5px;
  overflow: hidden;
  height: 430px;
  display: flex;
  align-items: center;
`;

export const ProfileInfos = styled.div`
  display: flex;
  flex-direction: column;
  height: 30%;
  position: absolute;
  bottom: 0px;
  width: 100%;
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);
  color: white;
  justify-content: flex-end;
  padding: 15px;
  z-index: 2;
`;

export const BackgroundPhoto = styled.img`
  filter: blur(30px);
  height: 100%;
  width: 100%;
  position: absolute;
`;

export const Img = styled.img`
  margin: auto;
  width: 90%;
  z-index: 1;
`;

export const Infos = styled.div`
  display: flex;
  font-size: 25px;
  z-index: 2;
`;

export const Bio = styled.div`
  display: flex;
  
  margin-right: 20px;
  padding: 1px;
  z-index: 2;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px 0px;
`;


export const ButtonX = styled.button`
  border-radius: 50%;
  width: 80px;
  height: 80px;
  border: 1px solid red;
  color: red;
  font-size: 50px;
  transform: scale(0.7);
  transition: all 0.2s ease 0s;
  position: relative;
  box-shadow: rgb(205 205 205 / 73%) 0px 0px 15px 0px;
  overflow: hidden;
  
`;

export const ButtonHeart = styled.button`
  border-radius: 50%;
  width: 80px;
  height: 80px;
  border: 1px solid green;
  color: green;
  font-size: 50px;
  transform: scale(0.7);
  transition: all 0.2s ease 0s;
  position: relative;
  box-shadow: rgb(205 205 205 / 73%) 0px 0px 15px 0px;
  overflow: hidden;
`;

