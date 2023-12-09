import { useState, useCallback } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import LogoUleamHorizontal from "../../../public/logouleamhorizontal.png";
import DefaultPic from "../../../public/default.png"
import "./configuracion.css"
const Configuracion = () => {
  return (
    <>
      <div class="menu">
        <div class="logo">
          <NavLink>
            <img src={LogoUleamHorizontal} alt="Logo" />
          </NavLink>
        </div>
        <div class="botones">
          <NavLink href="registroDatos.html">
            <button class="boton">MI HISTORIAL CLINICO</button>
          </NavLink>
          <NavLink href="RegistroCitas.html">
            <button class="boton">REGISTRO DE CITAS</button>
          </NavLink>
          <NavLink href="configuracion.html">
            <button class="boton">CONFIGURACION</button>
          </NavLink>
        </div>
      </div>
      <div className="container">
        <div class="form-content">
          <h1 id="title" class="title">
            Configuración
          </h1>
          <form action="">
            <label for="phoneNumber">Número Telefónico:</label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Ingrese su número telefónico"
              maxlength="10"
            />
            <br />
            <label for="address">Dirección:</label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Ingrese su dirección"
            />
            <br />
            <label for="profileImage">Imagen de Perfil:</label>
            <input type="file" id="profileImage" name="profileImage" />
            <br />
            <div id="imagePreview">
              <img
                id="preview"
                src={DefaultPic}
                alt="Imagen de perfil"
              />
            </div>
            <button>
              Guardar cambios
            </button>
          
            <div id="updateMessage"></div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Configuracion;
