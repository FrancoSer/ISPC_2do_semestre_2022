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
            
#Registrar Vacunacion - UPDATE

def registrarVacunacion(self, nombre, fecha_colocacion, historia_clinica_id, medico_matricula):
        if self.conexion.is_connected():
            try:
                cursor = self.conexion.cursor()
                sentenciaSQL= "INSERT INTO consulta VALUES(%s,%s,%s,%s,%s)"
                data= (nombre, fecha_colocacion, historia_clinica_id, medico_matricula)
                cursor.execute(sentenciaSQL,data)
                self.conexion.commit()
                self.conexion.close()

            except:
                print("No se pudo registrar la vacunacion")


#Buscar Vacunacion - SELECT

def buscarVacunacion(self, id):
            if self.conexion.is_connected():
                try:
                    cursor = self.conexion.cursor()
                    sentenciaSQL= "SELECT * from vacuna_colocacion where id="+id
                    cursor.execute(sentenciaSQL)
                    resultadoREAD = cursor.fetchall()
                    self.conexion.close()
                    return resultadoREAD

                except:
                    print("No se pudo consultar a la base de datos")

#Modificar Vacunacion
def modificarVacunacion(self, id, nombre, fecha_colocacion, historia_clinica_id, medico_matricula):
        if self.conexion.is_connected():
            try:
                cursor = self.conexion.cursor()
                sentenciaSQL= "UPDATE vacuna_colocacion SET nombre="+nombre+", fecha_colocacion="+ fecha_colocacion +", historia_clinica_id="+historia_clinica_id+", fecha_colocacion="+ fecha_colocacion + ",medico_matricula="+ medico_matricula+ "WHERE id="+id
                cursor.execute(sentenciaSQL)
                self.conexion.commit()
                self.conexion.close()

            except:
                print("No se pudo modificar la vacunación") 



#Borrar Vacunacion - DELETE
def eliminarVacunacion(self,id):
        if self.conexion.is_connected():
            try:
                cursor = self.conexion.cursor()
                sentenciaSQL = "DELETE from vacuna_colocacion where id="+id
                cursor.execute(sentenciaSQL)

                self.conexion.commit()                
                self.conexion.close()
            except:
                print("No se pudo eliminar la vacunación")