import { StyledDescriptionCar } from "./StyledDescription";

interface descriptionProps{
  description:string | undefined
}
export const DescriptionCar = ({
  description
}:descriptionProps) => {
  return (
    <StyledDescriptionCar>
      <h2>Descrição</h2>
      <p>
      {description ? description : 'There is no description'}
    
      </p>
    </StyledDescriptionCar>
  );
};
