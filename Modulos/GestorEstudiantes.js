import Estudiante from "./Estudiante.js";

class GestorEstudiantes {
    constructor() {
        this.estudiantes = [];
    }

    agregarEstudiante(nombre, edad, nivel) {
        const nuevoEstudiante = new Estudiante(nombre, edad, nivel);
        this.estudiantes.push(nuevoEstudiante);
    }

    listarEstudiantes() {
        if (this.estudiantes.length === 0) {
            console.log("No hay estudiantes registrados.");
            return;
        }
        for (let i = 0; i < this.estudiantes.length; i++) {
            const estudiante = this.estudiantes[i];
            console.log(`ID: ${estudiante.id}, Nombre: ${estudiante.nombre}, Edad: ${estudiante.edad}, Nivel: ${estudiante.nivel}`);
        }
    }

    actualizarEstudiante(id, nuevoNombre, nuevaEdad, nuevoNivel) {
        for (let i = 0; i < this.estudiantes.length; i++) {
            if (this.estudiantes[i].id === id) {
                this.estudiantes[i].nombre = nuevoNombre;
                this.estudiantes[i].edad = nuevaEdad;
                this.estudiantes[i].nivel = nuevoNivel;
                return;
            }
        }
        console.log("Estudiante no encontrado.");
    }

    eliminarEstudiante(id) {
        for (let i = 0; i < this.estudiantes.length; i++) {
            if (this.estudiantes[i].id === id) {
                for (let j = i; j < this.estudiantes.length - 1; j++) {
                    this.estudiantes[j] = this.estudiantes[j + 1];
                }
                this.estudiantes.pop();
                return;
            }
        }
        console.log("Estudiante no encontrado.");
    }
}

export default GestorEstudiantes;