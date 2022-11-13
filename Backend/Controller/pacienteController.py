from usuario import *
from Model.pacienteModel import *


# crearUsuarioPaciente()
def crearUsuarioPaciente(self, cuit, nombre, apellido, fecha_nacimiento, telefono, direccion, genero, sexo, tipoSangre, peso, altura, email):
    nuevoPaciente = Paciente(cuit, nombre, apellido, fecha_nacimiento,
                             telefono, direccion, genero, sexo, tipoSangre, peso, altura, email)
    conexion = Conectar()
    conexion.registrarPaciente(nuevoPaciente)


    # modificarPaciente()
def modificarUsuarioPaciente(self, paciente: Paciente):
    conexion = Conectar()
    conexion.modificarPaciente(paciente.get_Cuil, paciente.get_Nombre, paciente.get_Apellido, paciente.get_Email, paciente.get_fechaNacimiento,
                               paciente.get_Telefono, paciente.get_Direccion, paciente.get_TipoSangre, paciente.get_Genero, paciente.get_Sexo, paciente.get_Peso, paciente.get_Altura)                               

# buscarPaciente()
def buscarPacientePorCuil(self, cuil):
    conexion=Conectar()
    paciente:paciente=conexion.consultarPaciente(cuil)
    if(paciente):
        print("Paciente encontrado: " + paciente.__str__)
        return paciente
    else:
        print("No existe un paciente registrado con ese Cuil")
    

def existePaciente(self, cuit):
    conexion=Conectar()
    paciente=conexion.consultarPaciente(cuit)
    if(paciente):
        return True
    else:
        return False

#eliminarPaciente
def eliminarPaciente(self, cuil):
    conexion=Conectar()
    conexion.eliminarPaciente(cuil)
