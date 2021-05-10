import React, { useState } from 'react';
import styled from '@emotion/styled';
// este import lo voy a usar en la instrucción del evento onSubmit
import {obtenerDiferenciaModelo, calcularMarca, obtenerPlan} from '../helper';


const Campo = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items:center;
`;

const Label = styled.label`
    flex: 0 0 100px;
`;

const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    --webkit-appearance: none;
`;

const InputRadio = styled.input`
    margin: 0 1rem;
`;

const Boton = styled.button`
    background-color: #00838F;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    color:#fff;
    text-transform:uppercase;
    font-weight:bold;
    border:none;
    transition: background-color .3s ease;
    margin-top: 2rem;

    &:hover {
        background-color: #26C6DA;
        cursor: pointer;
    }
`;

const Error = styled.div`
    background-color:red;
    color:white;
    padding:1rem;
    width:100%;
    text-align:center;
    margin-bottom: 2rem;
`;

// El parámetro guardarResumen que viene del state definido en App.js
// Extraigo guardarResumen y una vez realizado, vamos a pasarle el resultadoa guardarResumen
const Formulario = ({guardarResumen, guardarCargando}) => {

     const [ datos, guardarDatos ] = useState ({
        marca: '',
        modelo: '',
        plan: ''
     });

     // State para los errores
     const [error, guardarError ] = useState (false);

     // Extraer los valores del state
     const { marca, modelo, plan } = datos;

     // Leer los datos del formulario y colocarlos en el state
     const obtenerInformacion = e => {
         guardarDatos({
             ...datos,
             [e.target.name] : e.target.value
         })
     }

     // cuando el usuario presiona submit
     const cotizarSeguro = e => {
         // la mayoría de las veces es necesario el preventDefault en los formularios.
         e.preventDefault();

         if(marca.trim() === '' || modelo.trim() === '' || plan.trim() === '') {
             // si el usuario no llena alguno de éstos campos, guardarError = true
             guardarError(true);
             return;
         }

         guardarError(false);

        // Iniciamos con base en modelo 2000
        let resultado = 2000;
     
        // Crear un archivo helper en src
        // obtener la diferencia por modelos
        const diferencia = obtenerDiferenciaModelo(modelo);

        // por cada año hay que restar el 3%
        resultado -= (( diferencia * 3 ) * resultado) / 100;

        // Americano vale 15% más sobre la base de 2000
        
        //  Asiatico vale 5%  más sobre la base de 2000

        //  Europeo vale 30% más sobre la base de 2000
        // (marca) viene del formulario
        resultado = calcularMarca(marca) * resultado;

        // Básico aumenta 20%
        // Completo aumenta 50%
        const incrementoPlan = obtenerPlan(plan);    
        resultado = parseFloat( incrementoPlan * resultado ).toFixed(2);
        
        
        // El siguiente paso es pasar éste resultado al componente principal.
        
        
        // Tras extaer guardarResumen, le paso resultado
        guardarCargando(true);

        setTimeout(() => {
            // Elimina el spinner
            guardarCargando(false);
            // Pasa la información al componente principal
            guardarResumen({
                cotizacion: resultado,
                datos
            });
        }, 3000);
        
        // Luego de este paso, creamos 2 nuevos componentes Resultado.jsx y Resumen.jsx
    }

    return (
        <form
            // Evento onbSubmit. En la documentación lo llaman handleSubmit pero le puedo poner el nombre que quiera.
            onSubmit={cotizarSeguro}
        >

            { error ? <Error>Todos los campos son obligatorios</Error>  : null}

            <Campo>
                <Label>Marca: </Label>
                <Select 
                    name="marca"
                    value={marca}
                    onChange={obtenerInformacion}
                >
                    <option value="">--Seleccione--</option>
                    <option value="americano">Americano</option>
                    <option value="europeo">Europeo</option>
                    <option value="asiatico">Asiatico</option>
                </Select>
            </Campo>

            <Campo>
                <Label>Modelo: </Label>
                <Select 
                    name="modelo"
                    value={modelo}
                    onChange={obtenerInformacion}
                >
                    <option value="">-- Seleccione --</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </Select>
            </Campo>
            
            <Campo>
                <Label>Plan  </Label>
                <InputRadio 
                    type="radio"
                    name="plan"
                    value="basico"
                    checked={plan === "basico"}
                    onChange={obtenerInformacion}
                /> Básico

                <InputRadio
                    type="radio"
                    name="plan"
                    value="completo"
                    checked={plan === "completo"}
                    onChange={obtenerInformacion}
                /> Completo
            </Campo>

            {/* type tiene que ser submit, para que funcione el useState  */}
            <Boton type="submit">Cotizar</Boton>
        </form>
    )
}

export default Formulario;