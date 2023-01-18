import DivModalStyled from "../../Styles/divModal";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "../Button";
import { useContext } from "react";
import { techContext } from "../../Context/TechContext";
const Modal = ({ setModal, setTechArray }) => {
  const { handleData } = useContext(techContext);

  const FormSchema = yup.object().shape({
    title: yup.string().required("Nome obrigatório"),
    status: yup.string().required("Status obrigatório"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(FormSchema),
  });

  return (
    <DivModalStyled>
      <div className="modalContainer">
        <div className="headerModal">
          <p className="p-tech">Cadastrar Tecnologia</p>
          <button onClick={() => setModal(false)} className="closeModal">
            X
          </button>
        </div>
        <div className="mainModal">
          <form onSubmit={handleSubmit(handleData)}>
            <label>Nome</label>
            <input
              type="text"
              {...register("title")}
              placeholder="Nome da tecnologia"
            />
            {errors.title?.message}
            <label>Selecionar Status</label>
            <select {...register("status")}>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
            {errors.status?.message}
            <Button className="buttonSubmit" type="submit">
              Enviar
            </Button>
          </form>
        </div>
      </div>
    </DivModalStyled>
  );
};
export default Modal;
