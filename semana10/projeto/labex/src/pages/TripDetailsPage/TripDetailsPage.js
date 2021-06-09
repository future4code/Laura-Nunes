import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import useProtectedPage from "../../hooks/useProtectedPage";
import { ButtonBack } from "../../components/Buttons";

const TripDetailsPage = () => {
  const [trip, setTrip] = useState({});

  useProtectedPage();

  const getTripDetail = (id) => {
    axios
    .get(`${BASE_URL}/trip/${id}`, {
      headers: {
        auth: localStorage.getItem("token")
      }
    })
    .then((res) => {
      setTrip(res.data.trip);
    })
    .catch((err) => alert(err.response.data.message));
  };

  useEffect(() => {
    getTripDetail();
  }, []);

  // ver o token que a chijo colocou no parenteses do useEffect/getTripDetail

return (
    <div>
      <p>DETALHE DA VIAGEM</p>

      {trip.name}
      {/* Card com a viagem e os detalhes 
      GET Trip Details:  
      retorna a viagem, candidatos pendentes (PUT Decide candidato) e aprovados*/}

      <ButtonBack />

      
    </div>
  );
};
export default TripDetailsPage;