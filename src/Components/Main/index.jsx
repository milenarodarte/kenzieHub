import MainStyled from "../../Styles/main";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Button from "../Button";
import { useContext } from "react";
import { userContext } from "../../Context/UserContext";

function Main() {
  const navigate = useNavigate();
  const { onSubmitFunction } = useContext(userContext);
  const FormSchema = yup.object().shape({
    email: yup.string().required("email obrigatório").email(),
    password: yup.string().required("Senha obrigatória"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(FormSchema),
  });

  const useRegister = () => {
    navigate("/register");
  };
  return (
    <MainStyled>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <input
          {...register("email")}
          type="email"
          placeholder="Digite seu email"
        />
        {errors.email?.message}
        <input
          {...register("password")}
          type="password"
          placeholder="Digite sua senha"
        />
        {errors.password?.message}
        <Button type="submit">entrar</Button>
      </form>
      <p className="noCount">Ainda não possui uma conta?</p>
      <Button onClick={useRegister}>Cadastre-se</Button>
    </MainStyled>
  );
}
export default Main;
