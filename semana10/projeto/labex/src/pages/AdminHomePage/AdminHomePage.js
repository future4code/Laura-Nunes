import React, { useEffect, useState } from "react";
import axios from "axios";
import useProtectedPage from "../../hooks/useProtectedPage";
import { BASE_URL } from "../../constants/urls";
import { ButtonBack, ButtonCreateTrip } from "../../components/Buttons";
import { goToTripDetailsPage } from "../../routes/coordinator";
import { useHistory } from "react-router";

const AdminHomePage = () => {
  useProtectedPage();
  const history = useHistory();
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

  const deleteTrip = (id) => {
    const token = localStorage.getItem("token")

    axios
    .delete(`BASE_URL/trips/${id}`, {
      headers: {
        auth: token
      }
    }
    )
    .then((res) => {
      window.confirm("Tem certeza que quer deletar esta viagem?")
      alert("A viagem foi deletada")
      getTrips()
      history.push ("admin/trips/list")
    })
    .catch((err) => alert(err.response.data.message))
  }


  const logout = () => {
    localStorage.removeItem("token");
    history.push("/login");
  };

  const listTrips = () => {
    return trips.map((trip) => {
      return (
        <div
          onClick={() => goToTripDetailsPage(history, trip.id)}
          key={trip.id}
        >
          <p>{trip.name}</p>
          <button onClick={() => deleteTrip(trip.id)}>X</button>
          {/* colocar o botão de delete no index 1 (frente da div) pra funcionar direito o delete */}
        </div>
      );
    });
  };

  return (
    <div>
      <h1>Painel Administrativo</h1>

      <ButtonBack />
      <ButtonCreateTrip />
      <button onClick={logout}>Logout</button>

      {listTrips()}
    </div>
  );
};
export default AdminHomePage;
