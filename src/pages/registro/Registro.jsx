import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { CiUser, CiCreditCard1, CiMail, CiLock, CiCalendar } from "react-icons/ci";
import LogoUleamHorizontal from "../../../public/logouleamhorizontal.png";

export const Registro = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    ruc: "",
    email: "",
    password: "",
    repliPassword: "",
    birthday: "",
  });

  useEffect(() => {
    const savedDataUser = localStorage.getItem("savedDataUser");

    if (savedDataUser) {
      const parsedFormData = JSON.parse(savedDataUser);
      setFormData(parsedFormData);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones existentes...
    if (formData.password.length < 6) {
      alert('La contraseña debe tener al menos 6 caracteres.');
      return;
    }
    if (!/[A-Z]/.test(formData.password)) {
      alert('La contraseña debe contener al menos una letra mayúscula.');
      return;
    }
    if (formData.password !== formData.repliPassword) {
      alert('Las contraseñas no coinciden.');
      return;
    }
    if (!formData.email.includes('@')) {
      alert('La dirección de correo electrónico no es válida.');
      return;
    }

    const formDataString = JSON.stringify(formData);
    localStorage.setItem("savedDataUser", formDataString);

    navigate("/login");
  };

  return (
    <>
      <div>
        <div className="menu">
          <div className="logo">
            <a href="index.html">
              <img src={LogoUleamHorizontal} alt="Logo" />
            </a>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="form-container">
          <h1 id="tittle" className="tittle">
            Registrarse
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <div className="input-field">
                <CiUser />
                <input
                  type="text"
                  required
                  name="name"
                  placeholder="Nombre"
                  onChange={handleChange}
                  value={formData.name}
                />
              </div>
              <div className="input-field">
                <CiUser />
                <input
                  required
                  type="text"
                  name="lastname"
                  placeholder="Apellido"
                  onChange={handleChange}
                  value={formData.lastname}
                />
              </div>
              <div className="input-field">
                <CiCreditCard1 />
                <input
                  required
                  type="text"
                  name="ruc"
                  placeholder="Cedula"
                  onChange={handleChange}
                  value={formData.ruc}
                />
              </div>
              <div className="input-field">
                <CiMail />
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="Correo"
                  onChange={handleChange}
                  value={formData.email}
                />
              </div>
              <div className="input-field">
                <CiLock />
                <input
                  required
                  type="password"
                  name="password"
                  placeholder="Contrasena"
                  onChange={handleChange}
                  value={formData.password}
                />
              </div>
              <div className="input-field">
                <CiLock />
                <input
                  required
                  type="password"
                  name="repliPassword"
                  placeholder="Repite contrasena"
                  onChange={handleChange}
                  value={formData.repliPassword}
                />
              </div>
              <div className="input-field">
                <CiCalendar />
                <input
                  required
                  type="date"
                  name="birthday"
                  placeholder="dd/mm/aaaa"
                  onChange={handleChange}
                  value={formData.birthday}
                />
              </div>
            </div>
            <div className="btn-field">
              <button type="submit">Registrarse</button>
              <NavLink to={"/login"}>
                <button>Iniciar Sesión</button>
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Registro;
