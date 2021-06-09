import React, { useEffect, useState } from "react";
import axios from "axios";
import useProtectedPage from "../../hooks/useProtectedPage";
import { BASE_URL } from "../../constants/urls";
import { ButtonBack, ButtonCreateTrip } from "../../components/Buttons";
import { goToTripDetailsPage } from "../../routes/coordinator";

const AdminHomePage = () => {
  const [trips, setTrips] = useState([]);

  useProtectedPage();

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

  useEffect(() => {
    getTrips();
  }, []);

  const listTrips = () => {
    return trips.map((trip) => {
      return (
        <div onClick={() => goToTripDetailsPage()} key={trip.id}>
          {/* pensar melhor sobre esse redirecionamento com ID */}
          <p>{trip.name}</p> 
          <button>X</button>
        </div>
      );
    });
  };

  return (
    <div>
      <h1>Painel Administrativo</h1>

      <ButtonBack />
      <ButtonCreateTrip />
      <button>Logout</button>

      {listTrips()}
    </div>
  );
};
export default AdminHomePage;
