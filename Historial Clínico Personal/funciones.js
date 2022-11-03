
// comprobar contrasenas
// restricciones de numero de cuil

function comprobarContrasenaYCuil(){
    let cuil = document.getElementById('cuil').value
    let cuilStr = cuil.toString()
    if (cuilStr.length != 11){
        alert ('El número ingresado no corresponde a un número de cuil')
        console.log ('El número ingresado no corresponde a un número de cuil')
    }else{
        console.log ('Cuil validado')
    }

    let clave1 = document.getElementById('crearContrasena').value;
    let clave2 = document.getElementById ('confirmarContrasena').value;

    
    if (clave1 == clave2){
        console.log ('las contrasenas coinciden');
        document.getElementById ('confirmarContrasena').setCustomValidity('');
    }
    else{
        
        console.log ('Las contraseñas no coinciden');
        document.getElementById ('confirmarContrasena').setCustomValidity("Las contraseñas no coinciden");

    }
}

function comprobarContrasena(){
   

    let clave1 = document.getElementById('crearContrasena').value;
    let clave2 = document.getElementById ('confirmarContrasena').value;

    
    if (clave1 == clave2){
        console.log ('las contrasenas coinciden');
        document.getElementById ('confirmarContrasena').setCustomValidity('');
    }
    else{
        
        console.log ('Las contraseñas no coinciden');
        document.getElementById ('confirmarContrasena').setCustomValidity("Las contraseñas no coinciden");

    }
}


// restricciones de numero de cuil

/*function restriccionCuil(){
    let cuil = document.getElementById('cuil').value
    let cuilStr = cuil.toString()
    if (cuilStr.length != 11){
        alert ('El número ingresado no corresponde a un número de cuil')
        console.log ('El número ingresado no corresponde a un número de cuil')
    }else{
        console.log ('Cuil validado')
    }
}

restriccionCuil()


// restricciones de minimo de letras para nombre
*/

