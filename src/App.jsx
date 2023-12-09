import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/home/Home";
import Registro from './pages/registro/Registro';
import Configuracion from './pages/configuracion/Configuracion';
import Login from './pages/sesion/Login';
import RegistroDatos from './pages/registroDatos/RegistroDatos';
import RegistroCitas from './pages/registroCitas/RegistroCitas';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/configuration' element={<Configuracion />}/>
          <Route path='/register' element={<Registro />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/registrocitas' element={<RegistroCitas />}/>
          <Route path='/registrodatos' element={<RegistroDatos />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;