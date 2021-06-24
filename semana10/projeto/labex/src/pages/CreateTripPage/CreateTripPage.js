import React from "react";
import { ButtonBack } from "../../components/Buttons";
import useProtectedPage from "../../hooks/useProtectedPage";
import useForm from "../../hooks/useForm";

const CreateTripPage = () => {
  const { form, onChange, cleanFields } = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: "",
  });

  useProtectedPage();

  const register = (event) => {
    event.preventDefault();
    cleanFields();
  };

  return (
    <div>
      <h1>Criar viagem</h1>
      <form onSubmit={register}>
        <input
          name={"name"}
          value={form.name}
          onChange={onChange}
          placeholder="Nome da viagem"
          required
          pattern={"^.{5,}"}
          title={"O nome deve ter no mínimo 5 letras"}
        />
        <select value={form.planet} name={"planet"} onChange={onChange} required>
          <option>Mercúrio</option>
          <option>Vênus</option>
          <option>Terra</option>
          <option>Marte</option>
          <option>Júpiter</option>
          <option>Saturno</option>
          <option>Urano</option>
          <option>Netuno</option>
          <option>Plutão (é planta, não é planeta, tira casaco, bota casaco)</option>
        </select>

        <input
          name={"date"}
          value={form.date}
          onChange={onChange}
          placeholder="Data"
          required
        />
        <input
          name={"description"}
          value={form.description}
          onChange={onChange}
          placeholder="Descrição"
          required
          pattern={"^.{30,}"}
          title={"A descrição deve ter no mínimo 30 letras"}
        />
        <input
          name={"durationInDays"}
          value={form.durationInDays}
          onChange={onChange}
          placeholder="Duração da viagem (em dias)"
          required
          type="number"
          min="50"
        />
        <button>Criar</button>
      </form>

      <ButtonBack />

      {/* POST Create trip */}
    </div>
  );
};
export default CreateTripPage;
