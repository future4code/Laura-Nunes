import React from "react";
import ApplicationForm from "../../components/ApplicationForm";
import { ButtonBack } from "../../components/Buttons";
import { ApplicationFormContainer, ButtonContainer } from "./styled";

const ApplicationFormPage = () => {
  return (
    <ApplicationFormContainer>
      <h1>Inscreva-se para uma viagem</h1>

      <ApplicationForm />
      <ButtonContainer>
        <ButtonBack />
        <button>Enviar</button>

        {/* POST Apply to trip */}
      </ButtonContainer>
    </ApplicationFormContainer>
  );
};
export default ApplicationFormPage;
