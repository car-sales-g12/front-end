import { useNavigate } from "react-router-dom";
import { FormLogin } from "../../components/Forms/login";
import { Header } from "../../components/Header";
import { SytlesMainLogin } from "./styles";

export const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleLoginSuccess = (isSeller: boolean) => {
    if (isSeller) {
      navigate("/seller-dashboard");
    } else {
      navigate("/");
    }
  };
  return (
    <>
      <Header />
      <SytlesMainLogin className="h-screen flex items-center justify-center bg-grey-scale-grey-8">
        <section>
          <h1>Login</h1>
          <FormLogin onLoginSuccess={handleLoginSuccess} />
          <h3>ainda não possui conta?</h3>
          <button onClick={() => navigate("/register")}>Cadastrar</button>
        </section>
      </SytlesMainLogin>
    </>
  );
};
