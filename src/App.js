import React, {useState} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Resumen from './components/Resumen';
import Resultado from './components/Resultado';
// 1° paso importar Emotion Styled
import styled from '@emotion/styled';

// 2° crear contenedores
// Contenedor
const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;
// Formulario
const ContenedorFormulario = styled.div`
  background-color: #FFF;
  padding: 3rem;
`;

// 3° aplicar contenedores
function App() {

  // Luego de configurar los cálculos de precio en el Formulario, voy a importar y definir un state
  // Este resumen se lo vamos a pasar al formulario, va a tomar los datos del formulario, los va a almacenar en resumen y luego puedo pasarlo a otros componentes más
  const [ resumen, guardarResumen ] = useState({
    cotizacion: 0,
    datos: {
      marca: '',
      modelo: '',
      plan: ''
    }
  });

  // Extraer datos del objeto de arriba
  const { cotizacion, datos } = resumen;
  //Ahora estos datos se los pasamos al componente de Resumen

  return (
    // Contenedor
    <Contenedor>
        <Header 
          titulo='Cotizador de seguros'
      />
    {/* Formulario */}
      <ContenedorFormulario>
          <Formulario 
            // paso el modificador de state al formulario
            guardarResumen={guardarResumen}
            // el siguiente paso es extraerlo en Formulario.jsx
          />

          {/* Al agregar Resumen, no quiero que aparezca antes de solicitar una cotizacion. Para ello voy a crear  una variable de datos = resumen;. Luego agregar un operador ternario */}
          
          
          <Resumen 
            datos={datos}
          />

          <Resultado 
            cotizacion={cotizacion}
          />
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;