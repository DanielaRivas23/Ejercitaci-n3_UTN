import React, { useState } from 'react';
import productImage1 from './jasci-3.webp';
import productImage2 from './jasci-2.webp';
import productImage3 from './jasci-1.webp';
import Iconos from './SeccionProductos/Iconos';
import Botones from './SeccionProductos/Botones';
import './Producto.css';

const Producto = () => {
    const [mensajeCompra, setMensajeCompra] = useState('');
    const [mensajeAgotado, setMensajeAgotado] = useState('');
    const [disponibilidad, setDisponibilidad] = useState(3);

    // Conjunto de imágenes
  const imagenes = [productImage1, productImage2, productImage3];
  const [imagenActual, setImagenActual] = useState(imagenes[0]);

    const handleCompra = (cantidadSeleccionada) => {

        if(disponibilidad - cantidadSeleccionada >= 0) {
            setMensajeCompra('Gracias por su compra');
            setDisponibilidad(disponibilidad - cantidadSeleccionada);
            setMensajeAgotado('');

            setTimeout(() => {
                setMensajeCompra('');
            }, 3000);
        } else {
            setMensajeAgotado('No hay suficiente stock');
        }
    }

    // Función para cambiar la imagen actual
    const cambiarImagen = (indice) => {
        setImagenActual(imagenes[indice]);
    }

    return (
        <section className='contenedor'>
            <div className='flexMain contenido-seccion'>
                <div className='columna'>
                    {/* Carrusel */}
                    <div className='carrusel'>
                        {imagenes.map((imagen, index) => (
                        <img
                            key={index}
                            src={imagen}
                            alt={`Variante ${index + 1}`}
                            onClick={() => cambiarImagen(index)}
                        />
                        ))}
                    </div>
                    
                    <img src={imagenActual} alt="Vino Tinto Italiano" />
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
                    <Botones 
                        onCompra={handleCompra} 
                        disponibilidad={disponibilidad}
                    />
                    <p><strong>Disponibles:</strong>{disponibilidad}</p>
                    <p><strong>SKU:</strong> W-N65</p>
                    <p className={`mensaje ${mensajeCompra ? 'visible' : 'oculto'}`}>{mensajeCompra}</p>
                    <p className={`agotado ${mensajeAgotado ? 'visible' : 'oculto'}`}>{mensajeAgotado}</p>
                </div>             
            </div>
        </section>
    );
}

export default Producto;
