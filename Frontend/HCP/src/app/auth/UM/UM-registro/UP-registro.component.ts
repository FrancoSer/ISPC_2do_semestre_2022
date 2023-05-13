import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-UP-registro',
  templateUrl: './UP-registro.component.html',
  styleUrls: ['./UP-registro.component.css']
})
export class UPRegistroComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

/*
              <script>
                // Ejemplo de JavaScript inicial para deshabilitar el envío de formularios si hay campos no válidos
                (function () {
                    'use strict'

                    // Obtener todos los formularios a los que queremos aplicar estilos de validación de Bootstrap personalizados
                    var forms = document.querySelectorAll('.needs-validation')

                    // Bucle sobre ellos y evitar el envío
                    Array.prototype.slice.call(forms)
                        .forEach(function (form) {
                            form.addEventListener('submit', function (event) {
                                if (!form.checkValidity()) {
                                    event.preventDefault()
                                    event.stopPropagation()
                                }
                                else {

                                    event.preventDefault();
                                    window.location.href = "home.html";
                                }
                                form.classList.add('was-validated')
                            }, false)
                        })
                })()

            </script>

            <script>
                function comprobarContrasena2() {
                    let clave1 = document.getElementById('crearContrasena').value;
                    let clave2 = document.getElementById('confirmarContrasenaPaciente').value;


                    alert("funciona");



                    if (clave1 == clave2) {
                        console.log('las contrasenas coinciden');
                        document.getElementById('confirmarContrasenaPaciente').setCustomValidity('');

                    }
                    else {
                        if (clave2 != ' ') {

                            console.log('Las contraseñas no coinciden');
                            document.getElementById('confirmarContrasenaPaciente').setCustomValidity("Las contraseñas no coinciden");
                        }
                        else {
                            document.getElementById('confirmarContrasenaPaciente').setCustomValidity("Confirme su contraseña");

                        }
                    }
                }
            </script>
*/