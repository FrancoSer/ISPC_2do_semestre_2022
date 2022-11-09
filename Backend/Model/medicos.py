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