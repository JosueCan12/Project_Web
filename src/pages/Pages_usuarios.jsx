import React from 'react'
import { Link } from 'react-router-dom'
function Pages_usuarios() {
  return (
    <div className="container ">
    <div className="mx-auto bg-body h-14 shadow-2xl">
    <ul class="list-none  p-4 text-blanco font-bold flex justify-center">
      <Link to="/"><li class="mx-5">Pedidos</li></Link> 
      <Link to="/usuarios"><li class="ml-5">Usuarios</li></Link>
    </ul>
    </div>
    <div className="container ">
      <h1>Nuevos Usuarios</h1>
    </div>
  </div>
  )
}

export default Pages_usuarios