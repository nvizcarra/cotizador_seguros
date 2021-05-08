export function obtenerDiferenciaModelo(modelo) {
    return new Date().getFullYear() - modelo;
    // Una vez creada esta function, importarla en Formulario
    // como es un export "normal" (no default), la voy a importar entre llaves
}