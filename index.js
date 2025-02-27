import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Estudiante {
  constructor(id, nombre, edad, nivel) {
    this.id = id;
    this.nombre = nombre;
    this.edad = edad;
    this.nivel = nivel;
  }
}

class GestorEstudiantes {
  constructor() {
    this.estudiantes = {};
    this.ultimoId = 0;
  }

  agregarEstudiante(nombre, edad, nivel) {
    this.ultimoId++;
    const nuevoEstudiante = new Estudiante(this.ultimoId, nombre, edad, nivel);
    this.estudiantes[this.ultimoId] = nuevoEstudiante;
    console.log(` Estudiante agregado con ID: ${this.ultimoId}`);
  }

  listarEstudiantes() {
    console.log("\n Lista de Estudiantes:");
    for (const key in this.estudiantes) {
      const e = this.estudiantes[key];
      console.log(` ID: ${e.id}, Nombre: ${e.nombre}, Edad: ${e.edad}, Nivel: ${e.nivel}`);
    }
    if (Object.keys(this.estudiantes).length === 0) {
      console.log(" No hay estudiantes registrados.");
    }
  }

  actualizarEstudiante(id, nombre, edad, nivel) {
    if (this.estudiantes[id]) {
      this.estudiantes[id].nombre = nombre;
      this.estudiantes[id].edad = edad;
      this.estudiantes[id].nivel = nivel;
      console.log(` Estudiante con ID ${id} actualizado.`);
    } else {
      console.log(" No se encontró un estudiante con ese ID.");
    }
  }

  eliminarEstudiante(id) {
    if (this.estudiantes[id]) {
      delete this.estudiantes[id];
      console.log(` Estudiante con ID ${id} eliminado.`);
    } else {
      console.log(" No se encontró un estudiante con ese ID.");
    }
  }
}

const gestor = new GestorEstudiantes();

function mostrarMenu() {
  console.log("\n Sistema de Gestión de Estudiantes");
  console.log("1️ Agregar Estudiante");
  console.log("2️ Listar Estudiantes");
  console.log("3️ Actualizar Estudiante");
  console.log("4️ Eliminar Estudiante");
  console.log("5️ Salir");
  rl.question("Selecciona una opción: ", (opcion) => {
    switch (opcion) {
      case "1":
        rl.question(" Nombre: ", (nombre) => {
          rl.question(" Edad: ", (edad) => {
            rl.question(" Nivel: ", (nivel) => {
              gestor.agregarEstudiante(nombre, edad, nivel);
              mostrarMenu();
            });
          });
        });
        break;

      case "2":
        gestor.listarEstudiantes();
        mostrarMenu();
        break;

      case "3":
        rl.question(" ID del estudiante a actualizar: ", (id) => {
          rl.question(" Nuevo Nombre: ", (nombre) => {
            rl.question(" Nueva Edad: ", (edad) => {
              rl.question(" Nuevo Nivel: ", (nivel) => {
                gestor.actualizarEstudiante(id, nombre, edad, nivel);
                mostrarMenu();
              });
            });
          });
        });
        break;

      case "4":
        rl.question(" ID del estudiante a eliminar: ", (id) => {
          gestor.eliminarEstudiante(id);
          mostrarMenu();
        });
        break;

      case "5":
        console.log(" Saliendo del programa...");
        rl.close();
        break;

      default:
        console.log(" Opción no válida. Intenta de nuevo.");
        mostrarMenu();
    }
  });
}

mostrarMenu();
