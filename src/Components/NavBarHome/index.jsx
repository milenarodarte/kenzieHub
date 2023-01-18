import NavBarStyled from "../../Styles/navBar";
import logo from "../../Assets/logo.svg";
import Button from "../Button";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const Navigate = useNavigate();
  const handleClick = () => {
    localStorage.clear();
    Navigate("/login");
  };
  return (
    <NavBarStyled>
      <div className="navContainer">
        <img src={logo} alt="logo" />
        <Button onClick={handleClick}>Sair</Button>
      </div>
    </NavBarStyled>
  );
};
export default NavBar;
