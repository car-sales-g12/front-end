import mock from "../../services/mock";
import { StyledDescriptionCar } from "./StyledDescription";


export const DescriptionCar = () => {
  return (
    <StyledDescriptionCar>
      <h2>Descrição</h2>
      <p>
        {mock[0].description}
      </p>
    </StyledDescriptionCar>
  );
};
