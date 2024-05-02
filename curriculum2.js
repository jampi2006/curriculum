let nom = document.getElementById("nom")
let boton = document.getElementById("boton")
let datos = document.getElementById("datos")
let datos2 = document.getElementById("datos2")
let datos3 = document.getElementById("datos3")
let datos4 = document.getElementById("datos4")
let apellido = document.getElementById("apellido")
let numero = document.getElementById("numero")
let correo = document.getElementById("correo")

boton.addEventListener("click",function() {
    datos.innerHTML = nom.value
})


boton.addEventListener("click",function() {
    datos2.innerHTML = apellido.value
})

boton.addEventListener("click",function() {
    datos3.innerHTML = numero.value
})

boton.addEventListener("click",function() {
    datos4.innerHTML = correo.value
})