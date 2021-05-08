// Obtener diferencia de modelos
export function obtenerDiferenciaModelo(modelo) {
    return new Date().getFullYear() - modelo;
    // Una vez creada esta function, importarla en Formulario
    // como es un export "normal" (no default), la voy a importar entre llaves
}

// Calcular el total a pagar según la marca
// Este export lo puedo importar en la misma línea que el export anterior
export function calcularMarca(marca) {
    let incremento;

    switch(marca) {
        case 'europeo':
            incremento = 1.30;
            break;
        case 'americano':
            incremento = 1.15;
            break;
        case 'asiatico':
            incremento = 1.05;
            break;

        default:
            break;    
    }

    return incremento;
}

// Calcular el tipo de seguro
export function obtenerPlan (plan) {
    return (plan === 'basico') ? 1.20 : 1.50;
}

// Muestra la primer letra mayúscula
export function primerMayuscula (texto) {
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}