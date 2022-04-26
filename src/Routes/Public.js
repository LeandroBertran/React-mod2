import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Registro from '../Pages/Registro'
import Detalle from '../Pages/Detalle'
import NotFound from '../Pages/NotFound'
import {
    Routes,
    Route,
    Navigate
  } from "react-router-dom"

  export default function Public() {
    return (
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Navigate to="/" />} />
          <Route path='/alta' element={<Registro />} />
          <Route path='/ingresar' element={<Login />} />
          <Route path='/producto/:id' element={<Detalle />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
    )
  }