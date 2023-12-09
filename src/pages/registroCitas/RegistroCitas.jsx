import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import LogoUleamHorizontal from "../../../public/logouleamhorizontal.png";

import "./registroCitas.css";

const RegistroCitas = () => {
  const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));

  // Estado para la información de la cita agendada
  const [citaAgendada, setCitaAgendada] = useState({
    fecha: "",
    medico: "",
    hora: "",
  });

  // Efecto para cargar la cita agendada desde el almacenamiento local al montar el componente
  useEffect(() => {
    const storedCitaAgendada = JSON.parse(localStorage.getItem("citaAgendada"));

    if (storedCitaAgendada) {
      setCitaAgendada(storedCitaAgendada);
    }
  }, []);

  // Función para manejar el agendamiento de la cita
  const handleAgendarCita = () => {
    // Lógica para agendar la cita aquí
    // Puedes guardar la información en el estado y en el almacenamiento local
    const nuevaCita = {
      fecha: "2023-10-20", // Reemplaza esto con la fecha seleccionada
      medico: "Médico General", // Reemplaza esto con el tipo de médico seleccionado
      hora: "09:00 AM", // Reemplaza esto con la hora seleccionada
    };

    // Actualiza el estado de la cita agendada
    setCitaAgendada(nuevaCita);

    // Guarda la cita agendada en el almacenamiento local
    localStorage.setItem("citaAgendada", JSON.stringify(nuevaCita));
  };

  // Función para manejar el cierre de sesión
const handleLogout = () => {
    // Limpiar el estado de isLoggedIn al cerrar sesión
    localStorage.removeItem('isLoggedIn','citaAgendada');
    navigate('/');
  };

  return (
    <>
      <div className="menu">
        <div className="logo">
          <NavLink to={"/"}>
            <img src={LogoUleamHorizontal} alt="Logo" />
          </NavLink>
        </div>
        <div className="botones">
          <NavLink to={"/registrodatos"}>
            <button className="boton">MI HISTORIAL CLINICO</button>
          </NavLink>
          <NavLink to={"/registrocitas"}>
            <button className="boton">REGISTRO DE CITAS</button>
          </NavLink>
          <NavLink to={"/configuration"}>
            <button className="boton">CONFIGURACION</button>
          </NavLink>
          {isLoggedIn ? (
            <button onClick={handleLogout} className="boton">
              Cerrar Sesión
            </button>
          ) : null}
        </div>
      </div>
      <div className="container">
        <div className="agenda">
          <div className="agendar-cita">
            <h1 id="title" className="title">
              Agendar Citas Médicas
            </h1>
            {isLoggedIn ? (
              <form>
                <div className="input-field">
                  <i className="far fa-calendar-alt"></i>
                  <label htmlFor="fecha-cita">Fecha de la Cita</label>
                  <select id="fecha-cita" name="fecha-cita">
                    <option value="">Selecciona una fecha disponible</option>
                    <option value="2023-10-20">2023-10-20</option>
                    <option value="2023-10-21">2023-10-21</option>
                  </select>
                </div>

                <div className="input-field">
                  <i className="fas fa-user-md"></i>
                  <select name="tipo-doctor" id="tipo-doctor">
                    <option value="">Tipo de Médico</option>
                    <option value="Medico General">Médico General</option>
                    <option value="Odontólogo">Odontólogo</option>
                    <option value="Psicólogo">Psicólogo</option>
                  </select>
                </div>

                <h2>Horarios Disponibles:</h2>

                <div className="input-field">
                  <i className="far fa-clock"></i>
                  <select name="hora-cita" id="hora-cita">
                    <option value="">Selecciona una hora disponible</option>
                    <option value="09:00 AM">09:00 AM</option>
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="11:00 AM">11:00 AM</option>
                  </select>
                </div>

                <div className="btn-field">
                  <button id="agendar" type="button" onClick={handleAgendarCita}>
                    Agendar Cita
                  </button>
                </div>
              </form>
            ) : (
              <p>Debes iniciar sesión para agendar citas médicas.</p>
            )}
          </div>

          <div className="cita-agendada">
            <h2>Cita Agendada</h2>
            <p>
              <strong>Fecha:</strong> {citaAgendada.fecha}
            </p>
            <p>
              <strong>Médico:</strong> {citaAgendada.medico}
            </p>
            <p>
              <strong>Hora:</strong> {citaAgendada.hora}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistroCitas;