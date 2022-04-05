import React from "react";
import TareaFormulario from "../components/TareaFormulario";
import '../styles/ListaDeTareas.css';

const ListaDeTareas = () => {
  return (
    <>
      <TareaFormulario />
      <div className="tareas-lista-contenedor">LISTA DE TAREAS</div>
    </>
  );
};

export default ListaDeTareas;
