import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import { ButtonApplication, ButtonBack } from "../../components/Buttons";

const ListTripPage = () => {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    getTrips();
  }, [setTrips]);

  const getTrips = () => {
    axios
      .get(`${BASE_URL}/trips`, {
        headers: {
          auth: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res.data.trips);
        setTrips(res.data.trips);
      })
      .catch((err) => alert(err.response.data.message));
  };

  const listTrips = () => {
    return trips.map((trip) => {
      return (
        <div key={trip.id}>
          <p>Nome: {trip.name}</p>
          <p>Descrição: {trip.description}</p>
          <p>Planeta: {trip.planet}</p>
          <p>Duração: {trip.durationInDays}</p>
          <p>Data: {trip.date}</p>
        </div>
      );
    });
  };

  return (
    <div>
      <ButtonBack />
      <ButtonApplication />

      <h1>Lista de Viagens</h1>

      {listTrips()}
    </div>
  );
};
export default ListTripPage;
