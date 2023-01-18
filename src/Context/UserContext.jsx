import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const userContext = createContext({});
export const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  const onSubmitFunction = (data) => {
    axios
      .post("https://kenziehub.herokuapp.com/sessions", data)
      .then((response) => {
        const token = response.data.token;
        localStorage.setItem("@token", token);
        const user = response.data.user;
        localStorage.setItem("@user", user);
        setUserData(user);
        console.log(response);
        navigate("/");
      })
      .catch((err) => {
        toast.error("usuário ou senha incorretos");
        console.log(err);
      });
  };

  useEffect(() => {
    async function loadUser() {
      const tokenValidation = localStorage.getItem("@token");
      if (!tokenValidation) {
        setLoading(false);
        return;
      }
      try {
        const { data } = await axios.get(
          "https://kenziehub.herokuapp.com/profile",
          {
            headers: { authorization: `Bearer: ${tokenValidation}` },
          }
        );

        setUserData(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    loadUser();
  }, []);

  const registerFunction = (data) => {
    if (data.password === data.confirmPassword) {
      const { confirmPassword, ...newData } = data;

      axios
        .post("https://kenziehub.herokuapp.com/users", newData)
        .then((response) => {
          toast.success("usuário criado com sucesso");
          navigate("/login");
        })
        .catch((err) => {
          toast.error("Não foi possível criar o usuário");
          console.log(err);
        });
    } else {
      toast.error("senhas não são iguais");
    }
  };

  return (
    <userContext.Provider
      value={{
        onSubmitFunction,
        userData,
        registerFunction,
        loading,
        setUserData,
      }}
    >
      {children}
    </userContext.Provider>
  );
};
