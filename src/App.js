import React from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
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
  return (
    // Contenedor
    <Contenedor>
        <Header 
          titulo='Cotizador de seguros'
      />
    {/* Formulario */}
      <ContenedorFormulario>
          <Formulario />
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
