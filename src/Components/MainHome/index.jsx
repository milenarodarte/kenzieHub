import DivHomeStyled from "../../Styles/DivHome";
import Button from "../Button";
import { useContext } from "react";
import CardTech from "../CardTech";
import { techContext } from "../../Context/TechContext";
import { userContext } from "../../Context/UserContext";

const MainHome = ({ setModal, techArray, setTechArray }) => {
  const { handleDeleteClick } = useContext(techContext);
  const { userData } = useContext(userContext);
  const techData = userData.techs;

  return (
    <DivHomeStyled>
      <div className="headerTech">
        <p className="tech">Tecnologias</p>
        <Button className="addButton" onClick={() => setModal(true)}>
          +
        </Button>
      </div>
      <div className="containerList">
        {techData?.map((obj) => (
          <CardTech
            key={obj.id}
            handleDeleteClick={handleDeleteClick}
            obj={obj}
          />
        ))}
      </div>
    </DivHomeStyled>
  );
};
export default MainHome;
