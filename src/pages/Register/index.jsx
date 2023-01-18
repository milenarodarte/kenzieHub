import MainStyledRegister from "../../Styles/mainRegister.js";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import HeaderRegister from "../../Components/HeaderRegister";
import Button from "../../Components/Button";
import { useContext } from "react";
import { userContext } from "../../Context/UserContext.jsx";

function Register() {
  const { registerFunction } = useContext(userContext);

  const FormSchema = yup.object().shape({
    email: yup.string().required("email obrigatório"),
    password: yup.string().required("Senha obrigatória"),
    confirmPassword: yup.string().required("Confirmação de senha obrigatória"),
    name: yup.string().required("Nome obrigatório"),
    bio: yup.string().required("Bio obrigatória"),
    contact: yup.string().required("Forma de contat obrigatória"),
    course_module: yup.string().required("Modulo obrigatório"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(FormSchema),
  });

  return (
    <div>
      <HeaderRegister />
      <MainStyledRegister>
        <div className="divForm">
          <h2>Crie sua conta</h2>
          <p className="createCount">Rápido e grátis, vamos nessa</p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(registerFunction)(e);
            }}
          >
            <p>Nome:</p>
            <input
              type="text"
              placeholder="Digite seu nome"
              {...register("name")}
            />
            {errors.name?.message}
            <p>E-mail:</p>
            <input
              type="email"
              placeholder="Digite seu e-mail"
              {...register("email")}
            />
            {errors.email?.message}
            <p>Senha:</p>
            <input
              type="password"
              placeholder="Digite sua senha"
              {...register("password")}
            />
            {errors.password?.message}
            <p>Confirmação de senha:</p>
            <input
              type="password"
              placeholder="Confime sua senha"
              {...register("confirmPassword")}
            />
            {errors.confirmePassword?.message}
            <p>Bio:</p>
            <input
              type="text"
              placeholder="Fale um pouco sobre você"
              {...register("bio")}
            />
            {errors.bio?.message}
            <p>Opções de contato:</p>
            <input
              type="text"
              placeholder="Opção de contato"
              {...register("contact")}
            />
            <p className="error">{errors.contact?.message} </p>
            <p>Módulos:</p>
            <select
              placeholder="Selecione o seu módulo"
              {...register("course_module")}
            >
              <option value="Primeiro módulo (Introdução ao Frontend)">
                Primeiro módulo (Introdução ao Frontend)
              </option>
              <option value="Segundo módulo (Frontend Avançado)">
                Segundo módulo (Frontend Avançado)
              </option>
              <option value="Terceiro módulo (Introdução ao Backend">
                Terceiro módulo (Introdução ao Backend)
              </option>
              <option value="Quarto módulo (Backend Avançado)">
                Quarto módulo (Backend Avançado)
              </option>
            </select>
            {/*  {errors.select?.message} */}
            <Button type="submit" className="buttonRegister">
              Cadastrar
            </Button>
          </form>
        </div>
      </MainStyledRegister>
    </div>
  );
}
export default Register;
