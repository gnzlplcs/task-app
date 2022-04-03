import React from 'react';
import '../styles/Tarea.css';

const Tarea = ({ texto }) => {
  return (
    <div className='tarea-contenedor'>
      <div className="tarea-texto">{texto}</div>
      <div className="tarea-icono">
        Eliminar
      </div>
    </div>
  )
}

export default Tarea