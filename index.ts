interface Persona {
    nombre: string;
    edad: number;
}

let array: Persona[] = [];

let btn = document.getElementById("add");
btn.addEventListener("click", (e: Event) => {
    this.add_array()
});

function add_array() {
    let persona: Persona = {
        nombre: (<HTMLInputElement>document.getElementById('nombre')).value,
        edad: parseInt((<HTMLInputElement>document.getElementById('edad')).value),
    };
    this.array.push(persona);
}

function mostrar_array() {
    console.log(this.array)
}