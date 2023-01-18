import { RoutesMain as Routes } from "./Routes";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "./Context/UserContext";
import { TechProvider } from "./Context/TechContext";
import "react-toastify/dist/ReactToastify.min.css";
import { Router } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <ToastContainer />
      <UserProvider>
        <TechProvider>
          <Routes />
        </TechProvider>
      </UserProvider>
    </div>
  );
}

export default App;
