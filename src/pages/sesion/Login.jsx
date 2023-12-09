import React, { useCallback, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { CiMail, CiLock } from "react-icons/ci";
import LogoUleamHorizontal from "../../../public/logouleamhorizontal.png";

import "./login.css";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    // Intenta recuperar los datos del usuario registrado
    const savedDataUser = localStorage.getItem("savedDataUser");

    if (!savedDataUser) {
      alert("No hay datos registrados. Por favor, regístrese primero.");
      return;
    }

    const { email: savedEmail, password: savedPassword } = JSON.parse(savedDataUser);

    // Comparación segura de contraseñas (considera usar bcrypt en un entorno real)
    if (formData.email === savedEmail && formData.password === savedPassword) {
      // Actualiza el estado de isLoggedIn
      localStorage.setItem("isLoggedIn", JSON.stringify(true));

      // Redirige al usuario a donde quieras después de un inicio de sesión exitoso
      navigate("/registrodatos");
    } else {
      alert("Credenciales incorrectas. Por favor, verifica tu correo y contraseña.");
    }
  }, [formData, navigate]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div id="main">
      <div className="menu">
        <div className="logo">
          <NavLink to={"/"}>
            <img src={LogoUleamHorizontal} alt="Logo" />
          </NavLink>
        </div>
      </div>
      <div className="container">
        <div className="form-content">
          <h1 id="tittle" className="tittle">
            Login
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <div className="input-field">
                <CiMail />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  placeholder="Correo"
                  onChange={handleChange}
                />
              </div>
              <div className="input-field">
                <CiLock />
                <input
                  type="password"
                  value={formData.password}
                  name="password"
                  placeholder="Contraseña"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="btn-field">
              <button type="submit">Login</button>
              <NavLink to="/register">
                <button>SignUp</button>
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
