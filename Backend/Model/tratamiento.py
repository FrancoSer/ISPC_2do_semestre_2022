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
            
#Registrar Tratamiento - INSERT
def registrarTratamiento(self,medicacion, dieta, cuidados_especiales, observaciones, estado, historia_clinica_id, medico_matricula):
        if self.conexion.is_connected():
            try:
                cursor = self.conexion.cursor()
                sentenciaSQL= "INSERT INTO tratamiento VALUES(%s,%s,%s,%s,%s,%s,%s,%s)"
                data= (medicacion, dieta, cuidados_especiales, observaciones, estado, historia_clinica_id, medico_matricula)
                cursor.execute(sentenciaSQL,data)
                self.conexion.commit()
                self.conexion.close()

            except:
                print("No se pudo registrar la consulta")


#Buscar Tratamiento - SELECT

def buscarTratamiento(self, idTratamiento):
            if self.conexion.is_connected():
                try:
                    cursor = self.conexion.cursor()
                    sentenciaSQL= "SELECT * from tratamiento where id="+idTratamiento
                    cursor.execute(sentenciaSQL)
                    resultadoREAD = cursor.fetchall()
                    self.conexion.close()
                    return resultadoREAD

                except:
                    print("No se pudo consultar a la base de datos")


#Modificar Tratamiento
def modificarTratamiento(self,idTratamiento, medicacion, dieta, cuidados_especiales, observaciones, estado, historia_clinica_id, medico_matricula):
        if self.conexion.is_connected():
            try:
                cursor = self.conexion.cursor()
                sentenciaSQL= "UPDATE tratamiento WHERE id="+idTratamiento+" VALUES(%s,%s,%s,%s,%s,%s,%s)"
                data= (medicacion, dieta, cuidados_especiales, observaciones, estado, historia_clinica_id, medico_matricula)
                cursor.execute(sentenciaSQL,data)
                self.conexion.commit()
                self.conexion.close()

            except:
                print("No se pudo modificar los datos del tratamiento") 



#Borrar Tratamiento - DELETE
def eliminarTratamiento(self,idTratamiento):
        if self.conexion.is_connected():
            try:
                cursor = self.conexion.cursor()
                sentenciaSQL = "DELETE from tratamiento where id="+idTratamiento
                cursor.execute(sentenciaSQL)

                self.conexion.commit()                
                self.conexion.close()
            except:
                print("No se pudo eliminar el tratamiento")