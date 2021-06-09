import React from "react";
import { ButtonBack } from "../../components/Buttons";
import useProtectedPage from "../../hooks/useProtectedPage";

const CreateTripPage = () => {

  useProtectedPage();
  
  return (
    <div>
      <h1>Criar viagem</h1>
      {/* formulário de criar viagem */}
      
      <ButtonBack />
      <button>Criar</button>
      {/* POST Create trip */}
    </div>
  );
};
export default CreateTripPage;
