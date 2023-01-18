import HeaderRegister from "../../Styles/header";
import logo from "../../Assets/logo.svg";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
const HeaderRegisterStyled = () => {
  const Navigate = useNavigate();
  const handleBack = () => {
    Navigate("/login");
  };
  return (
    <HeaderRegister>
      <div className="headerDiv">
        <img src={logo} alt="logo" />
        <Button className="buttonBack" onClick={handleBack}>
          Voltar
        </Button>
      </div>
    </HeaderRegister>
  );
};
export default HeaderRegisterStyled;
