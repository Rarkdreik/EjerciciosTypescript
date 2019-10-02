var _this = this;
var array = [];
var btn = document.getElementById("add");
btn.addEventListener("click", function (e) {
    _this.add_array();
});
function add_array() {
    var persona = {
        nombre: document.getElementById('nombre').value,
        edad: parseInt(document.getElementById('edad').value)
    };
    this.array.push(persona);
}
function mostrar_array() {
    console.log(this.array);
}
