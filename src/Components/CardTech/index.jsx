import Button from "../Button";
import bin from "../../Assets/bin.svg";
const CardTech = ({ handleDeleteClick, obj }) => {
  return (
    <div className="post">
      <p className="techName">{obj.title}</p>
      <div className="containerButton">
        <div className="level">{obj.status}</div>
        <Button
          id={obj.id}
          className="deletePost"
          onClick={() => handleDeleteClick(obj)}
        >
          <img src={bin} alt="bin" />
        </Button>
      </div>
    </div>
  );
};
export default CardTech;
