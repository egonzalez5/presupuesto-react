import React, {Fragment, useState} from 'react'
import Error from './Error'
import shortid from 'shortid'

export const Formulario = ({setgasto, setcrearGasto}) => {

    const [nombre, setNombre] = useState('');
    const [cantidad, setCantidad] = useState(0);
    const [error, setError] = useState(false);



    // agregar gasto
    const agregarGasto = e => {
        e.preventDefault();

        // validaciones
        if(cantidad < 1 || isNaN(cantidad) || nombre.trim() === ''){
            setError(true);
            return;
        }
        setError(false);

        // Contrucción de gasto
        const gasto = {
            nombre,
            cantidad,
            id: shortid.generate()
        }

        // enviar componente gasto a componente principal
        setgasto(gasto);
        setcrearGasto(true);
        // Reset formulario
        setNombre('');
        setCantidad(0);
    }

    return (
        <Fragment>
            <form
            onSubmit={agregarGasto}
             >
            <h2>Agrega tus gastos aquí</h2>

            { error ? <Error mensaje="Ambos campos son obligatorios o presupuesto incorrecto"
            /> : null}

                <label className="form-label">Nombre gasto</label>
                <input 
                    type="text"
                    className="form-control mb-2"
                    placeholder="Ej. Transporte"
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                />
                <label className="form-label">Cantidad gasto</label>
                <input 
                    type="number"
                    className="form-control mb-2"
                    placeholder="Ej. 300"
                    value={cantidad}
                    onChange={e => setCantidad(parseInt(e.target.value, 10))}
                />
                <input
                    type="submit"
                    className="btn btn-primary btn-block"
                    value="Agregar gasto"
                />
            
        </form>    
        </Fragment>
        
    )
}
