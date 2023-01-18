import { createContext, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useContext } from "react";
import { userContext } from "./UserContext";
export const techContext = createContext({});

export const TechProvider = ({ children }) => {
  const token = localStorage.getItem("@token");
  const { userData, setUserData } = useContext(userContext);

  const handleDeleteClick = (obj) => {
    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const id = obj.id;
    axios
      .delete(`https://kenziehub.herokuapp.com/users/techs/${id}`, headers)
      .then((res) => {
        newArrayData();
      })
      .catch((err) => console.log(err));
  };

  function newArrayData() {
    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .get("https://kenziehub.herokuapp.com/profile", headers)
      .then((res) => setUserData(res.data))
      .catch((err) => console.log(err));
  }

  const handleData = (data) => {
    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .post("https://kenziehub.herokuapp.com/users/techs", data, headers)
      .then((res) => {
        newArrayData();
        toast.success("Tecnologia criada com sucesso");
      })
      .catch((err) => {
        console.log(err);
        toast.error(`${err.response.data.message}`);
      });
  };

  return (
    <techContext.Provider
      value={{
        handleDeleteClick,
        handleData,
      }}
    >
      {children}
    </techContext.Provider>
  );
};
