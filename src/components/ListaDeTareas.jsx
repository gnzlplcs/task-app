import React, { useEffect, useState } from "react";
import TareaFormulario from "../components/TareaFormulario";
import Tarea from "./Tarea";
import "../styles/ListaDeTareas.css";

const initialState = JSON.parse(localStorage.getItem('tareas'));

const ListaDeTareas = () => {
  const [tareas, setTareas] = useState(initialState || []);

  useEffect(() => {
    window.localStorage.setItem('tareas', JSON.stringify(tareas))
  }, [tareas]);

  const agregarTarea = (tarea) => {
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
    }
  };

  const eliminarTarea = (id) => {
    const tareasActualizadas = tareas.filter((tarea) => id !== tarea.id);
    setTareas(tareasActualizadas);
  };

  const completarTarea = (id) => {
    const tareasActualizadas = tareas.map((tarea) => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  };

  return (
    <>
      <TareaFormulario onSubmit={agregarTarea} />
      <div className="tareas-lista-contenedor">
        {tareas.map((tarea) => (
          <Tarea
            key={tarea.id}
            id={tarea.id}
            texto={tarea.texto}
            completada={tarea.completada}
            completarTarea={completarTarea}
            eliminarTarea={eliminarTarea}
          />
        ))}
      </div>
    </>
  );
};

export default ListaDeTareas;
