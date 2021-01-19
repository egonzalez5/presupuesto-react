import React, { Fragment, useState} from 'react'
import Error from './Error';

const Pregunta = ({setPresupuesto, setRestante, setMostrarPregunta}) => {

//definir state
const [cantidad, setcantidad] = useState(0);
const [error, setError] = useState(false)

//Función para leer el presupuesto
const definirPresupuesto = e => {
    setcantidad(parseInt(e.target.value, 10))
}

//s Submit para definir presupuesto
const agregarPresupuesto = e => {
    e.preventDefault();

    // Validaciones
    if(cantidad < 1 || isNaN(cantidad)) {
        setError(true)
        return;
    }
    // Pasa validaciones
    setError(false);
    setPresupuesto(cantidad);
    setRestante(cantidad);
    setMostrarPregunta(false);
}

    return (
        <Fragment>
            <div className="container">
                <div className="row">
                    
                    <h2>Coloca tu presupuesto</h2>

                    {error ? <Error mensaje="El presupuesto es incorrecto"/>: null}

                    <form
                        onSubmit={agregarPresupuesto}
                    >
                        <input 
                            type="number"
                            className="form-control mb-2"
                            placeholder="Coloca tu presupuesto"
                            onChange={definirPresupuesto}
                        />
                        <input 
                            type="submit"
                            className="btn btn-primary btn-block"
                            placeholder="Definir resupuesto"
                        />
                    </form>  
                    </div>
                </div>
           
            
           
        </Fragment>
    )
}

export default Pregunta
