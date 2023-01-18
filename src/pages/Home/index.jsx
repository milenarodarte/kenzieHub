import NavBar from "../../Components/NavBarHome";
import HeaderHome from "../../Components/HeaderHome";
import MainHome from "../../Components/MainHome";
import { useState, useEffect, useContext } from "react";
import Modal from "../../Components/Modal";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../Context/UserContext";
import { Navigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  const [modalOn, setModalOn] = useState(false);
  const [techArray, setTechArray] = useState([]);
  const { userData, loading } = useContext(userContext);

  useEffect(() => {
    if (loading) {
      return;
    } else {
      if (userData === null) {
        navigate("/login");
      } else {
        navigate("/");
      }
    }
  }, []);

  if (userData) {
    return (
      <div>
        <NavBar />
        <HeaderHome />

        <MainHome
          setModal={setModalOn}
          techArray={techArray}
          setTechArray={setTechArray}
        />
        {modalOn && <Modal setModal={setModalOn} setTechArray={setTechArray} />}
      </div>
    );
  } else {
    return null;
  }
}
export default Home;
