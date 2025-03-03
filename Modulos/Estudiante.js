let studentId = 1;

class Estudiante {
    constructor(nombre, edad, nivel) {
        this.id = studentId++;
        this.nombre = nombre;
        this.edad = edad;
        this.nivel = nivel;
    }
}

export default Estudiante;