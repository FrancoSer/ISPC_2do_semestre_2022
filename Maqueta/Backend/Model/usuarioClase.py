class Persona:
    def __init__(self, cuil, nombre, apellido, fecha_nacimiento, telefono, direccion, genero, sexo, email):
        self.cuil = cuil
        self.nombre = nombre
        self.apellido = apellido
        self.fecha_nacimiento = fecha_nacimiento
        self.telefono = telefono
        self.direccion = direccion
        self.genero = genero
        self.sexo = sexo
        self.email = email

    def get_Cuil(self):
        return self.cuil
    def set_Cuil(self, cuil):
        self.cuil=cuil

    def get_Email(self):
        return self.email
    def set_Email(self, email):
        self.email=email
    def get_Nombre(self):
        return self.nombre

    def set_Nombre(self, nombre):
        self.nombre = nombre

    def get_Apellido(self):
        return self.apellido

    def set_Apellido(self, apellido):
        self.apellido = apellido

    def get_fechaNacimiento(self):
        return self.fecha_nacimiento

    def set_FechaNacimiento(self, fecha_nacimiento):
        self.fecha_nacimiento = fecha_nacimiento

    def get_Telefono(self):
        return self.telefono

    def set_Telefono(self, telefono):
        self.telefono = telefono

    def get_Direccion(self):
        return self.direccion

    def set_Direccion(self, direccion):
        self.direccion = direccion

    def get_Genero(self):
        return self.genero

    def set_Genero(self, genero):
        self.genero = genero
    
    def get_Sexo(self):
        return self.sexo
    def set_Sexo(self, sexo):
        self.sexo = sexo

    
class Paciente(Persona):
    tipoDeSangre = ""
    peso = 0
    altura = 0.0

    def __init__(self, cuit, nombre, apellido, fecha_nacimiento, telefono, direccion, genero, sexo, tipoSangre, peso, altura, email):
        Persona.__init__(cuit, nombre, apellido, fecha_nacimiento,
                         telefono, direccion, genero, sexo, email)
        self.peso = peso
        self.tipoDeSangre = tipoSangre
        self.altura = altura

    def __str__(self):
        return "Paciente: "+ self.nombre + ", "+ self.apellido + " - Fecha de Nac: " + self.fecha_nacimiento + " - Telefono: " + self.telefono + " - Direccion: " + self.direccion + " - Genero: " + self.genero
    def get_TipoSangre(self):
        return self.tipoDeSangre

    def set_TipoSangre(self, tipoSangre):
        self.tipoDeSangre = tipoSangre

    def get_Altura(self):
        return self.altura

    def set_Altura(self, altura):
        self.altura = altura

    def get_Peso(self):
        return self.peso

    def set_Peso(self, peso):
        self.peso = peso

class Medico(Persona):
   

    def __init__(self, cuit, nombre, apellido, fecha_nacimiento, telefono, direccion, genero, sexo, matricula, especialidad, email):
        Persona.__init__(cuit, nombre, apellido, fecha_nacimiento,
                         telefono, direccion, genero, sexo, email)
        self.matricula = matricula
        self.especialidad = especialidad
       

    def __str__(self):
        return "Medico: "+ self.nombre + ", "+ self.apellido + " - Matricula: " + self.matricula + " - Telefono: " + self.telefono + " - Especialidad: " + self.especialidad 
    def get_Matricula(self):
        return self.matricula

    def set_Matricula(self, matricula):
        self.matricula = matricula

    def get_Especialidad(self):
        return self.especialidad

    