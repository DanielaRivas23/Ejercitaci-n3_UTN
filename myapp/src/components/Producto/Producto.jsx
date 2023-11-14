import React from 'react';
import productImage from './jasci-3.webp';
import Iconos from './SeccionProductos/Iconos';
import Botones from './SeccionProductos/Botones';
import './Producto.css';

const Producto = () => {
    
    return (
        <section className='contenedor'>
            <div className='flexMain contenido-seccion'>
                <div className='columna'>
                    <img src={productImage} alt="Vino Tinto Italiano" />
                </div>
                <div className='columna'>
                    <h2>Nerubé</h2>
                    <Iconos/>
                    <p>
                        De color rojo rubí intenso en aroma, este vino deleita con su sabor típicamente afrutado y especiado, con un cuerpo sedoso que despliega delicados toques de fruta en alcohol y sutiles matices de chocolate, brindando una experiencia sensorial única y placentera.
                    </p>
                    <p><strong>Bodega:</strong> Jasci & Marchesani</p>
                    <p><strong>Uvas:</strong> Montepulciano</p>
                    <p><strong>Región:</strong> Italia</p>
                    <p><strong>Contenido de Alcohol:</strong> 14%</p>
                    <p><strong>Alérgenos:</strong> Contiene sulfitos</p>
                    <Botones/>
                    <p><strong>Disponibles:</strong> 3</p>
                    <p><strong>SKU:</strong> W-N65</p>
                </div>             
            </div>
        </section>
    );
}

export default Producto;
