import mysql.connector

class Conectar():

    def __init__(self) -> None:
        try:
            self.conexion = mysql.connector.connect(
                host = 'localhost',
                port = 3306,
                user = 'root',
                password = 'ContraseñaBBDD',
                db = 'MiBaseDeDatos'

            )
        except mysql.connector.Error as descripcionError:
            print("¡No se conectó!",descripcionError)


#PACIENTE
#Crear cuenta paciente - INSERT
    def registrarPaciente(self,cuit, nombre, apellido, email, fecha_nacimiento, telefono, direccion, tipoSangre, genero, sexo, peso, altura, password):
        if self.conexion.is_connected():
            try:
                cursor = self.conexion.cursor()
                sentenciaSQL= "INSERT INTO paciente VALUES(%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)"
                data= (cuit, nombre, apellido, email, fecha_nacimiento, telefono, direccion, tipoSangre, genero, sexo, peso, altura, password)
                cursor.execute(sentenciaSQL,data)
                self.conexion.commit()
                self.conexion.close()

            except:
                print("No se pudo registrar al Paciente")

#Consultar Paciente - SELECT
    def consultarPaciente(self, cuit):
            if self.conexion.is_connected():
                try:
                    cursor = self.conexion.cursor()
                    sentenciaSQL= "SELECT * from paciente where cuit="+cuit
                    cursor.execute(sentenciaSQL)
                    resultadoREAD = cursor.fetchall()
                    self.conexion.close()
                    return resultadoREAD

                except:
                    print("No se pudo consultar a la base de datos")


#Modificar Paciente - UPDATE
def modificarPaciente(self, cuit, nombre, apellido, email, fecha_nacimiento, telefono, direccion, tipoSangre, genero, sexo, peso, altura, password):
        if self.conexion.is_connected():
            try:
                cursor = self.conexion.cursor()
                sentenciaSQL= "UPDATE paciente WHERE cuit="+cuit+" VALUES(%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)"
                data= (nombre, apellido, email, fecha_nacimiento, telefono, direccion, tipoSangre, genero, sexo, peso, altura, password)
                cursor.execute(sentenciaSQL,data)
                self.conexion.commit()
                self.conexion.close()

            except:
                print("No se pudo registrar al Paciente") 
                   

#Eliminar Paciente - DELETE
def eliminarPaciente(self,cuit):
        if self.conexion.is_connected():
            try:
                cursor = self.conexion.cursor()
                sentenciaSQL = "DELETE from paciente where cuit ="+cuit
                cursor.execute(sentenciaSQL)

                self.conexion.commit()                
                self.conexion.close()
            except:
                print("No se pudo eliminar la cuenta del Paciente")







###########################################################################################################################################################

# TABLA MEDICO
#Crear cuenta medico - INSERT
    def registrarMedico(self,matricula, cuit, nombre, apellido, email, fechaNacimiento, telefono, direccion, genero, especialidad, password):
        if self.conexion.is_connected():
            try:
                cursor = self.conexion.cursor()
                sentenciaSQL= "INSERT INTO medico VALUES(%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)"
                data= (matricula, cuit, nombre, apellido, email, fechaNacimiento, telefono, direccion, genero, especialidad, password)
                cursor.execute(sentenciaSQL,data)
                self.conexion.commit()
                self.conexion.close()

            except:
                print("No se pudo registrar al Profesional")

#Consultar Médico - SELECT
    def consultarMedico(self, matricula):
            if self.conexion.is_connected():
                try:
                    cursor = self.conexion.cursor()
                    sentenciaSQL= "SELECT * from medico where matricula="+matricula
                    cursor.execute(sentenciaSQL)
                    resultadoREAD = cursor.fetchall()
                    self.conexion.close()
                    return resultadoREAD

                except:
                    print("No se pudo consultar a la base de datos")


#Modificar Médico - UPDATE
def modificarMedico(self,matricula, cuit, nombre, apellido, email, fechaNacimiento, telefono, direccion, genero, especialidad, password):
        if self.conexion.is_connected():
            try:
                cursor = self.conexion.cursor()
                sentenciaSQL= "UPDATE medico WHERE matricula="+matricula+" VALUES(%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)"
                data= (cuit, nombre, apellido, email, fechaNacimiento, telefono, direccion, genero, especialidad, password)
                cursor.execute(sentenciaSQL,data)
                self.conexion.commit()
                self.conexion.close()

            except:
                print("No se pudo modificar los datos del Profesional") 


#Eliminar Medico - DELETE
def eliminarMedico(self,matricula):
        if self.conexion.is_connected():
            try:
                cursor = self.conexion.cursor()
                sentenciaSQL = "DELETE from medico where matricula="+matricula
                cursor.execute(sentenciaSQL)

                self.conexion.commit()                
                self.conexion.close()
            except:
                print("No se pudo eliminar la cuenta del Profesional")




######################################################################################################
#CONSULTA

#Registrar Consulta - INSERT
def registrarConsulta(self,fecha, tipoConsulta, observaciones, diagnostico, receta, proximaCita, matriculaMedico, idHistoriaClinica):
        if self.conexion.is_connected():
            try:
                cursor = self.conexion.cursor()
                sentenciaSQL= "INSERT INTO consulta VALUES(%s,%s,%s,%s,%s,%s,%s,%s)"
                data= (fecha, tipoConsulta, observaciones, diagnostico, receta, proximaCita, matriculaMedico, idHistoriaClinica)
                cursor.execute(sentenciaSQL,data)
                self.conexion.commit()
                self.conexion.close()

            except:
                print("No se pudo registrar la consulta")


#Buscar Consulta - SELECT

def buscarConsulta(self, matricula):
            if self.conexion.is_connected():
                try:
                    cursor = self.conexion.cursor()
                    sentenciaSQL= "SELECT * from medico where matricula="+matricula
                    cursor.execute(sentenciaSQL)
                    resultadoREAD = cursor.fetchall()
                    self.conexion.close()
                    return resultadoREAD

                except:
                    print("No se pudo consultar a la base de datos")


#Modificar Consulta - UPDATE



#SEGUNDA OPERACION DEL CRUD: READ O LEER
    def BuscarObjeto(self, nombre):
        if self.conexion.is_connected():
            try:
                cursor = self.conexion.cursor()
                sentenciaSQL= "SELECT * from tablaDeEjemplo where nombre like '%MAR%' "
                cursor.execute(sentenciaSQL)
                resultadoREAD = cursor.fetchall()
                self.conexion.close()
                return resultadoREAD

            except:
                print("No se pudo concectar a la base de datos")

#CUARTA OPERACION DEL CRUD: DELETE O ELIMINAR
    def EliminarObjeto(self,ID):
        if self.conexion.is_connected():
            try:
                cursor = self.conexion.cursor()
                sentenciaSQL = "DELETE from tablaDeEjemplo where id = ID"
                cursor.execute(sentenciaSQL)

                self.conexion.commit()                
                self.conexion.close()
            except:
                print("No se pudo concectar a la base de datos")