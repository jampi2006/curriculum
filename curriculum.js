let agregar2 = document.getElementById("agregar2")
let tocame1 = document.getElementById("tocame1")
let objeto = document.getElementById("objeto")

// tocame1.addEventListener("click",function(){
// objeto.innerHTML = agregar2.value
// })


tocame1.addEventListener("click",function(){
if (agregar2=="") {
    
} else {
    let si = document.createElement("li")
    si.innerHTML = agregar2.value
    objeto.appendChild(si)
}

})



