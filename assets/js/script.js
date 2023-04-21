let nombre = "JUAN";

console.log(nombre, typeof nombre);

nombre = 1;

console.log(nombre, typeof nombre);

nombre = {
    nombre: "javier",
    edad: 23,
};

console.log(nombre, typeof nombre);

nombre = () => {
    console.log("helalo");
};

console.log(nombre, typeof nombre);

// const DNI = 939222222;

// console.log(DNI);

// DNI = 98908;

// console.log(DNI);

// const list = [];

// list.push("hola");

// list = 123;

// console.log(list);

console.log(1 != 1);

/*
    Ingresado de datos
    - Por medio del comando prompt    
*/
//
// let edad = prompt("Ingresame tu edad");

// edad = parseInt(edad);

// console.log("es esta igualdad cierta? ==", 1 == "1");
// console.log("es esta igualdad cierta?  ===", 1 === "1");

// nombre = prompt("ingresa tu nombre");
// let edad = prompt("ingresa tu edad");

// let customText =
//     "<h1> Hola bienvenido: " +
//     nombre +
//     " soy nuevo en DJANGO, tengo: " +
//     edad +
//     " años! </h1>";

// document.write(customText);

fetch("https://jsonplaceholder.typicode.com/posts")
    .then((data) => data.json())
    .then((datos) => {
        console.log(datos);

        datos.forEach((element) => {
            document.write(`<h1>${element.id}</h1> <p> ${element.title} </p>`);
        });
    });
