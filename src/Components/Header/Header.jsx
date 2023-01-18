import HeaderStyled from "./Index";
import logo from "../../Assets/logo.svg";
function Header({ height, padding }) {
  return (
    <HeaderStyled height={height} padding={padding}>
      <img src={logo} alt="logo" />
    </HeaderStyled>
  );
}
export default Header;
