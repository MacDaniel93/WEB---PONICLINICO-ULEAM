import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import LogoUleamHorizontal from '../../../public/logouleamhorizontal.png';
import './registroDatos.css';

const RegistroDatos = () => {
  const navigate = useNavigate();

  const [historialData, setHistorialData] = useState({
    nombre: '',
    fechaNacimiento: '',
    tipoSangre: '',
    contactoEmergencia: '',
    fechaUltimoExamenFisico: '',
    pruebasEstudios: '',
    enfermedadesCirugias: '',
    alergias: '',
    enfermedadesCronicas: '',
  });

  useEffect(() => {
    // Obtener la información del historial desde el almacenamiento local
    const savedHistorialData = JSON.parse(localStorage.getItem('historialData'));

    // Actualizar el estado con la información del historial
    if (savedHistorialData) {
      setHistorialData(savedHistorialData);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHistorialData((prevData) => ({ ...prevData, [name]: value }));
  };

  const guardarHistorial = () => {
    // Puedes realizar validaciones adicionales aquí antes de guardar
    // ...

    // Guardar en el almacenamiento local
    localStorage.setItem('historialData', JSON.stringify(historialData));
  };

  const handleLogout = () => {
    // Limpiar el estado de isLoggedIn al cerrar sesión
    localStorage.removeItem('isLoggedIn');
    // Redirigir al usuario a la página de inicio después de cerrar sesión
    navigate('/');
  };

  return (
    <>
      <div id="main">
        <div className="menu">
          <div className="logo">
            <NavLink to={'/'}>
              <img src={LogoUleamHorizontal} alt="Logo" />
            </NavLink>
          </div>
          <div className="botones">
            <NavLink to={'/registrodatos'}>
              <button className="boton">MI HISTORIAL CLINICO</button>
            </NavLink>
            <NavLink to={'/registrocitas'}>
              <button className="boton">REGISTRO DE CITAS</button>
            </NavLink>
            <NavLink to={'/configuration'}>
              <button className="boton">CONFIGURACION</button>
            </NavLink>
            <button onClick={handleLogout} className="boton">
              Cerrar Sesión
            </button>
          </div>
        </div>

        <div className="container">
          <div className="form-content">
            <h1 id="tittle" className="tittle">
              MY HISTORIAL CLINICO
            </h1>
            <form>
              <div className="input-field">
                <i className="fas fa-calendar"></i>
                <label htmlFor="fecha-nacimiento">Fecha de Nacimiento</label>
                <input
                  type="date"
                  id="fecha-nacimiento"
                  name="fechaNacimiento"
                  required
                  onChange={handleChange}
                  value={historialData.fechaNacimiento}
                />
              </div>

              <div className="input-field">
                <i className="fas fa-id-card"></i>
                <select
                  name="tipoSangre"
                  id="tipo-sangre"
                  required
                  onChange={handleChange}
                  value={historialData.tipoSangre}
                >
                  <option value="">Tipo de Sangre</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                  {/* Otras opciones */}
                </select>
              </div>

              <div className="input-field">
                <i className="fas fa-phone"></i>
                <input
                  type="tel"
                  placeholder="Contacto de Emergencia"
                  name="contactoEmergencia"
                  required
                  onChange={handleChange}
                  value={historialData.contactoEmergencia}
                />
              </div>

              <div className="input-field">
                <i className="fas fa-calendar"></i>
                <label htmlFor="fecha-examen-fisico">Fecha del Último Examen Físico</label>
                <input
                  type="date"
                  placeholder="Fecha del Último Examen Físico"
                  name="fechaUltimoExamenFisico"
                  required
                  onChange={handleChange}
                  value={historialData.fechaUltimoExamenFisico}
                />
              </div>

              <div className="input-field">
                <i className="fas fa-clipboard-list"></i>
                <textarea
                  required
                  placeholder="Fechas y Resultados de Pruebas y Estudios"
                  name="pruebasEstudios"
                  onChange={handleChange}
                  value={historialData.pruebasEstudios}
                ></textarea>
              </div>

              <div className="input-field">
                <i className="fas fa-notes-medical"></i>
                <textarea
                  required
                  placeholder="Enfermedades Importantes y Cirugías"
                  name="enfermedadesCirugias"
                  onChange={handleChange}
                  value={historialData.enfermedadesCirugias}
                ></textarea>
              </div>

              <div className="input-field">
                <i className="fas fa-clipboard-list"></i>
                <textarea
                  required
                  placeholder="Cualquier tipo de alergia"
                  name="alergias"
                  onChange={handleChange}
                  value={historialData.alergias}
                ></textarea>
              </div>

              <div className="input-field">
                <i className="fas fa-notes-medical"></i>
                <textarea
                  required
                  placeholder="Cualquier enfermedad crónica"
                  name="enfermedadesCronicas"
                  onChange={handleChange}
                  value={historialData.enfermedadesCronicas}
                ></textarea>
              </div>

              <div className="btn-field">
                <button id="guardar" type="button" onClick={guardarHistorial}>
                  Guardar
                </button>
              </div>
            </form>
          </div>

          {/* Mostrar los datos guardados a la derecha del formulario */}
          <div className="datos-guardados">
            <h2>Datos Guardados:</h2>
            <p>Nombre: {historialData.nombre}</p>
            <p>Fecha de Nacimiento: {historialData.fechaNacimiento}</p>
            <p>Tipo de Sangre: {historialData.tipoSangre}</p>
            <p>Contacto de Emergencia: {historialData.contactoEmergencia}</p>
            <p>Fecha del Último Examen Físico: {historialData.fechaUltimoExamenFisico}</p>
            <p>Pruebas y Estudios: {historialData.pruebasEstudios}</p>
            <p>Enfermedades Crónicas: {historialData.enfermedadesCronicas}</p>
            <p>Enfermedades y Cirugías: {historialData.enfermedadesCirugias}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistroDatos;
