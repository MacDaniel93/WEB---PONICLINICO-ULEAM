import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import LogoUleamHorizontal from "../../../public/logouleamhorizontal.png";

import "./home.css";

const Home = () => {
  const navigate = useNavigate();
  const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));

  const handleLogout = () => {
    // Limpiar el estado de isLoggedIn al cerrar sesión
    localStorage.removeItem("isLoggedIn");
    // Redirigir al usuario a la página de inicio después de cerrar sesión
    navigate("/");
  };

  return (
    <>
      <header>
        <div className="logo">
          <NavLink to={"/"}>
            <img src={LogoUleamHorizontal} alt="Logo" />
          </NavLink>
        </div>
        <div className="botones">
          {isLoggedIn ? (
            <>
              <NavLink to="/registrodatos">
                <button className="boton">HISTORIAL CLINICO</button>
              </NavLink>
              {/* Agrega más botones según tus necesidades */}
              <NavLink to={'/registrocitas'}>
                <button className="boton">REGISTRO DE CITAS</button>  
              </NavLink>
              <NavLink to={'/configuration'}>
                <button className="boton">CONFIGURACION</button>
              </NavLink>
              <button onClick={handleLogout} className="boton">
                Cerrar Sesión
              </button>
            </>
          ) : (
            <>
              <NavLink to="/login">
                <button className="boton">INICIAR SESION</button>
              </NavLink>
              <NavLink to="/register">
                <button className="boton">REGISTRATE</button>
              </NavLink>
            </>
          )}
        </div>
      </header>

      <div className="imagen_1">
        <NavLink to="/register">
          <button className="boton-sobre-imagen">REGISTRATE</button>
        </NavLink>
        <div className="texto-sobre-boton">
          <strong>Ponoclinico Universidad Laica Eloy Alfaro</strong>
        </div>
        <div className="rectangulo-izquierdo"></div>
        <div className="rectangulo-derecho"></div>
      </div>

      {/* Resto de tu contenido */}
    </>
  );
};

export default Home;
