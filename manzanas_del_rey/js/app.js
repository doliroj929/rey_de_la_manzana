
console.log("aqui comienza todo")

const contenedorRecetas = document.querySelector("#contenedor-recetas");
const botonAgregar = document.querySelector("#boton-agregar");
const mensajeError = document.querySelector("#mensaje-error");


// Crear la funcion -- para añadir la receta
function agregarRecetas() {

    // ver que hay dentro los inputs (título - ingredientes - elaboracion)
    const inputTitulo= document.querySelector("#receta-cliente__titulo");
    const inputIngredientes= document.querySelector("#receta-cliente__ingredientes");
    const inputElaboracion= document.querySelector("#receta-cliente__elaboracion");

    // 2. capturar lo que hay dentro de los inputs
    const titulo= inputTitulo.value.trim();
    const ingrediente= inputIngredientes.value.trim();
    const elaboracion= inputElaboracion.value.trim();


    // comprovar que no este vacio
    if (titulo === "" || ingrediente === "" || elaboracion === "" ) {
        mensajeError.textContent = "Por favor, completa todos los campos de la receta.";
        return;
    }
    // limpiar el mesaje de error
    mensajeError.textContent = "";


    // 3. Creacion de la nueva estructura
    const nuevaReceta = document.createElement("section");
    nuevaReceta.classList.add("nueva-receta");

    const h2 = document.createElement("h2");
    h2.textContent = titulo;

    const h3Ingredientes = document.createElement("h3");
    h3Ingredientes.textContent = "Ingredientes";

    const pIngredientes = document.createElement('p');
    pIngredientes.textContent = ingrediente;

    const h3Elaboracion = document.createElement("h3");
    h3Elaboracion.textContent = "Elaboración";

    const pElaboracion = document.createElement("p");
    pElaboracion.textContent = elaboracion;

    // Usamos el operador spread (...) para que append acepte los de elementos
    const elementosRenderizar = [h2, h3Ingredientes, pIngredientes, h3Elaboracion, pElaboracion];
    nuevaReceta.append(...elementosRenderizar);
    contenedorRecetas.append(nuevaReceta);
     //Función auxiliar para resetear los inputs.

    const limpiarFormulario = (campos) => {
        campos.forEach(campo => campo.value = "");
    };

    // 6. Limpieza de campos (Función flecha auxiliar)
    limpiarFormulario([inputTitulo, inputIngredientes, inputElaboracion]);

}

// evento
botonAgregar.addEventListener('click', agregarRecetas);



