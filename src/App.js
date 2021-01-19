import { useState, useEffect } from 'react';
import { Formulario } from './components/Formulario';
import Pregunta from './components/Pregunta';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';


function App() {
  
//state
const [presupuesto, setPresupuesto] = useState(0);
const [restante, setRestante] = useState(0);
const [mostrarPregunta, setMostrarPregunta] = useState(true)
const [gastos, setGastos] = useState([]);
const [gasto, setgasto] = useState({})
const [crearGasto, setcrearGasto] = useState(false)

// usseEffect para actualizar restante
useEffect(() => {
  if(crearGasto){

    //agregar al nuevo presupuesto
    setGastos([
      ...gastos,
      gasto
    ]);

    //resta del presupuesto actual
    const presupuestoRestante = restante - gasto.cantidad;
    setRestante(presupuestoRestante);

    //reset
    setcrearGasto(false);
  }
}, [gasto, crearGasto, gastos, restante])


  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h1>Gasto Semanal</h1>
          {mostrarPregunta ?
            <Pregunta
              setPresupuesto={setPresupuesto}
              setRestante={setRestante}
              setMostrarPregunta={setMostrarPregunta}
            />
             :
              <div className="row">
                <div className="col-md-6">
                  <Formulario 
                  setgasto={setgasto}
                  setcrearGasto={setcrearGasto}
                  />
                </div>

                <div className="col-md-6">
                  <ul className="list-group">
                    <li className="list-group-item">
                     <Listado
                      gastos={gastos}
                    />
                    </li>
                  </ul>
                  <ControlPresupuesto
                    presupuesto={presupuesto}
                    restante={restante}
                  />
                </div>
              </div>
              

          }
          


          </div>
        </div>
    </div>
  );
}

export default App;
