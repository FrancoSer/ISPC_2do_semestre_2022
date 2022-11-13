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
            
#Crear cuenta paciente - INSERT
    def registrarPaciente(self,cuit, nombre, apellido, email, fecha_nacimiento, telefono, direccion, tipoSangre, genero, sexo, peso, altura, password):
        if self.conexion.is_connected():
            try:
                cursor = self.conexion.cursor()
                sentenciaSQL= "INSERT INTO paciente (cuit, nombre, apellido, email, fecha_nacimiento, telefono, direccion, tipoSangre, genero, sexo, peso, altura, password) VALUES(%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)"
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
                sentenciaSQL= "UPDATE paciente SET nombre="+nombre+", apellido="+apellido+", email="+email+", fecha_nacimiento="+fecha_nacimiento+", telefono="+telefono+", direccion="+direccion+", tipoSangre="+tipoSangre+", genero="+genero+", sexo="+sexo+", peso="+peso+", altura="+altura+", password="+password+" WHERE cuit="+cuit
                cursor.execute(sentenciaSQL)
                self.conexion.commit()
                self.conexion.close()

            except:
                print("No se pudo actualizar los datos del Paciente") 
                   

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
