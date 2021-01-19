import React from 'react'

const Gasto = ({gasto}) => (

        <p>
            {gasto.nombre}
            <span>$ {gasto.cantidad}</span>
        </p>

);
export default Gasto;
