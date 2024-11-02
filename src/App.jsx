import { Routes, Route, Navigate } from "react-router-dom";
import { ComponentList } from "./router/ComponentList";
import LoginPage from "./views/LoginPage";
import LoginLayout from "./layout/LoginLayout";

const App = () => {
  // console.log(import.meta.env.VITE_API_KEY);
  const token = localStorage.getItem("tuit_token");

  return (
    <Routes>
      {/* Login sahifasiga token bo'lmasa yo'naltirish */}
      <Route
        path="/login"
        element={!token ? <LoginLayout><LoginPage /></LoginLayout> : <Navigate to="/" />}
      />
      

      {/* Asosiy componentlar */}
      <Route
        path="/*"
        element={token ? <ComponentList /> : <Navigate to="/login" />}
      />
      {/* {ComponentList()} */}
    </Routes>
  );
};

export default App;
