import React, { useState } from 'react';
import './Botones.css';

const Botones = () => {
    const [cantidad, setCantidad] = useState(1);

    const decrementar = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    }

    const incrementar = () => {
        if (cantidad < 3) { 
            setCantidad(cantidad + 1);
        }
    }

    return (
        <div className='flex-botones'>
            <div className='flex-incremento'>
                <input type="number" value={cantidad} readOnly />
                <div className='boton-incremento'>
                    <button onClick={incrementar}>+</button>
                    <br />
                    <button onClick={decrementar}>-</button>
                </div>
            </div>
            <div className='botones boton-naranja'>
                <button>Agregar al Carrito</button>
                <button>Agregar a Favoritos</button>
            </div>
        </div>
    );
}

export default Botones;
