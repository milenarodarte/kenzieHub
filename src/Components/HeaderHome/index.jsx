import { useContext } from "react";
import { userContext } from "../../Context/UserContext.jsx";
import HeaderHomeStyled from "../../Styles/headerHome.js";
import { useNavigate } from "react-router-dom";
const HeaderHome = () => {
  const navigate = useNavigate();
  const { userData } = useContext(userContext);

  return (
    <HeaderHomeStyled>
      <div className="headerContainer">
        <h2 className="personName">Olá, {userData.name}</h2>
        <p className="personModule"> {userData.course_module}</p>
      </div>
    </HeaderHomeStyled>
  );
};
export default HeaderHome;
