from Model.usuarioClase import *
from Model.medicoModel import *


# crearUsuarioMedico()
def crearUsuarioMedico(self,matricula, cuit, nombre, apellido, email, fechaNacimiento, telefono, direccion, genero, especialidad, password):
    nuevoMedico = Medico(self,matricula, cuit, nombre, apellido, email, fechaNacimiento, telefono, direccion, genero, especialidad, password):                     
    conexion = Conectar()
    conexion.registrarMedico(nuevoMedico)


    # modificarMedico()
def modificarUsuarioMedico(self, medico: Medico):
    conexion = Conectar()
    conexion.modificarMedico(medico.get_matricula, medico.get_cuit, medico.get_nombre, medico.get_apellido, medico.get_email, medico.get_fechaNacimiento, medico.get_telefono, medico.get_direccion, medico.get_genero, medico.get_especialidad, medico.get_password)                               

# buscarPaciente()
def buscarMedicoPorMatricula(self, matricula):
    conexion=Conectar()
    medico:medico=conexion.consultarMedico(matricula)
    if(medico):
        print("Medico encontrado: " + medico.__str__)
        return medico
    else:
        print("No existe un médico registrado con esa matrícula")
    

def existeMedico(self, matricula):
    conexion=Conectar()
    medico=conexion.consultarMedico(matricula)
    if(medico):
        return True
    else:
        return False

#eliminarPaciente
def eliminarMedico(self, matricula):
    conexion=Conectar()
    conexion.eliminarMedico(matricula)