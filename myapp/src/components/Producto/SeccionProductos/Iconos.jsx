import React from 'react';
import './Iconos.css'
import StarIcon from '../../IconosAwesome/StarIcon';
import LightStarIcon from '../../IconosAwesome/LightStarIcon';

const Iconos = () => {
    return (
        <div className='flexIconos'>
            <p className='precio'>$18.000</p>
            <div className='flexIconos__stars'>
                <StarIcon/>
                <LightStarIcon/>
            </div>
            <p className='opiniones'>6 Opiniones de clientes</p>
        </div>
    );
}

export default Iconos;