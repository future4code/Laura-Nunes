import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import useProtectedPage from "../../hooks/useProtectedPage";
import { ButtonBack } from "../../components/Buttons";
import { useHistory, useParams } from "react-router";

const TripDetailsPage = () => {
  useProtectedPage();
  const history = useHistory();
  const params = useParams();
  const [trip, setTrip] = useState({});

  useEffect(() => {
    getTripDetail(params.id);
  }, [params.id]);
  

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

  // const decideCandidate = (tripId) => {
  //   const body = {
  //     approve: true,
  //   }
  //   axios
  //   .put(`BASE_URL/trips/${tripId}/candidates/`)
  // } ENTENDER ISSO AQUI MELHOR, o link não faz sentido



return (
    <div>
      <p>DETALHES DA VIAGEM</p>

      <div> 
        <h4>Nome: {trip.name}</h4>
        <p>Planeta: {trip.planet}</p>
        <p>Duração (em dias): {trip.durationInDays}</p>
        <p>Data da viagem: {trip.date}</p>
      </div>
      
      {/* Card com a viagem e os detalhes 
      GET Trip Details:  
      retorna a viagem, candidatos pendentes (PUT Decide candidato) e aprovados*/}

      <ButtonBack />

      
    </div>
  );
};
export default TripDetailsPage;