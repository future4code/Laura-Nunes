import React from "react";
import styled from "styled-components";

export const MainHome = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
  justify-content: flex-end;
  padding: 20px 20px 0px;
`;

export const ProfileCard = styled.div`
  box-shadow: rgb(117 117 117 / 77%) 0px 2px 10px 0px;
  position: relative;
  border-radius: 5px;
  overflow: hidden;
  transition: all 0.5s ease 0s;
  height: 430px;
  animation: 0.5s ease 0s 1 normal forwards running none;
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
`;
export const Infos = styled.div`
  display: flex;
  align-items: baseline;
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
