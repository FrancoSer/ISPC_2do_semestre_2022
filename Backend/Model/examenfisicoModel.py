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
            
#Registrar Examen Fisico - UPDATE

def registrarExamen(self, presion, peso, altura, fecha, historia_clinica_id, medico_matricula):
        if self.conexion.is_connected():
            try:
                cursor = self.conexion.cursor()
                sentenciaSQL= "INSERT INTO examen_fisico VALUES(%s,%s,%s,%s,%s,%s,%s)"
                data= (presion, peso, altura, fecha, historia_clinica_id, medico_matricula)
                cursor.execute(sentenciaSQL,data)
                self.conexion.commit()
                self.conexion.close()

            except:
                print("No se pudo registrar el examen fisico")


#Buscar Examen Fisico - SELECT

def buscarExamen(self, id):
            if self.conexion.is_connected():
                try:
                    cursor = self.conexion.cursor()
                    sentenciaSQL= "SELECT * from examen_fisico where id="+id
                    cursor.execute(sentenciaSQL)
                    resultadoREAD = cursor.fetchall()
                    self.conexion.close()
                    return resultadoREAD

                except:
                    print("No se pudo consultar a la base de datos")

#Modificar Examen Fisico
def modificarExamen(self, id, presion, peso, altura, fecha, historia_clinica_id, medico_matricula):
        if self.conexion.is_connected():
            try:
                cursor = self.conexion.cursor()
                sentenciaSQL= "UPDATE examen_fisico SET presion="+presion+", peso="+ peso +", altura="+altura+", fecha="+ fecha + ",historia_clinica_id="+ historia_clinica_id + ", medico_matricula=" + medico_matricula + "WHERE id="+id
                cursor.execute(sentenciaSQL)
                self.conexion.commit()
                self.conexion.close()

            except:
                print("No se pudo modificar el Examen Físico") 



#Borrar Examen Fisico - DELETE
def eliminarExamen(self,id):
        if self.conexion.is_connected():
            try:
                cursor = self.conexion.cursor()
                sentenciaSQL = "DELETE from examen_fisico where id="+id
                cursor.execute(sentenciaSQL)

                self.conexion.commit()                
                self.conexion.close()
            except:
                print("No se pudo eliminar el Examen Físico ")