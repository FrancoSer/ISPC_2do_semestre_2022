
// comprobar contrasenas

function comprobarContrasena(){
    let clave1 = document.getElementById('crearContrasena').value;
    let clave2 = document.getElementById ('confirmarContrasena').value;

    if (clave1 == clave2){
        console.log ('las contrasenas coinciden')
    }
    else{
        alert ('Las contraseñas no coinciden')
        console.log ('Las contraseñas no coinciden')
    }
}

