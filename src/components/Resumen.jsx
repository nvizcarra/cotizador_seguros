import React, { Fragment } from 'react';

const Resumen =  ({datos}) => {
    
    // Extraer de datos para no escribir datos.marca, etc
    const {marca, modelo, plan} = datos;

    if(marca === '' || modelo === '' || plan === '' ) return null;


    return (
        <Fragment>
            <h2>Resumen de Cotización</h2>
            <ul>
                <li>Marca: </li>
                <li>Modelo: </li>
                <li>Plan: </li>
            </ul>
        </Fragment>
    );
}

export default Resumen;