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


#Registrar Consulta - INSERT
def registrarConsulta(self,fecha, tipoConsulta, observaciones, diagnostico, receta, proximaCita, medico_matricula, historia_clinica_id):
        if self.conexion.is_connected():
            try:
                cursor = self.conexion.cursor()
                sentenciaSQL= "INSERT INTO consulta VALUES(%s,%s,%s,%s,%s,%s,%s,%s)"
                data= (fecha, tipoConsulta, observaciones, diagnostico, receta, proximaCita, medico_matricula, historia_clinica_id)
                cursor.execute(sentenciaSQL,data)
                self.conexion.commit()
                self.conexion.close()

            except:
                print("No se pudo registrar la consulta")


#Buscar Consulta - SELECT

def buscarConsultaPorId(self, id_consulta):
            if self.conexion.is_connected():
                try:
                    cursor = self.conexion.cursor()
                    sentenciaSQL= "SELECT * FROM consulta WHERE id_consulta="+id_consulta
                    cursor.execute(sentenciaSQL)
                    resultadoREAD = cursor.fetchall()
                    self.conexion.close()
                    return resultadoREAD

                except:
                    print("No se pudo consultar a la base de datos")

def buscarConsultaPorHistoriaClinica(self, historia_clinica_id):
            if self.conexion.is_connected():
                try:
                    cursor = self.conexion.cursor()
                    sentenciaSQL= "SELECT * FROM consulta WHERE historia_clinica_id="+historia_clinica_id
                    cursor.execute(sentenciaSQL)
                    resultadoREAD = cursor.fetchall()
                    self.conexion.close()
                    return resultadoREAD

                except:
                    print("No se pudo consultar a la base de datos")

#Modificar Consulta - UPDATE

def modificarConsulta(self,id_consulta, fecha, tipoConsulta, observaciones, diagnostico, receta, proximaCita, medico_matricula, historia_clinica_id):
        if self.conexion.is_connected():
            try:
                cursor = self.conexion.cursor()
                sentenciaSQL= "UPDATE consulta SET fecha="+fecha+", tipoConsulta="+tipoConsulta+", observaciones="+ observaciones+", diagnostico="+ diagnostico+", receta="+ receta+", proximaCita="+ proximaCita+", medico_matricula="+ medico_matricula+", historia_clinica_id="+ historia_clinica_id+"WHERE id_consulta="+id_consulta
                cursor.execute(sentenciaSQL)
                self.conexion.commit()
                self.conexion.close()

            except:
                print("No se pudo modificar los datos de la consulta") 



#Borrar Consulta - DELETE
def eliminarConsulta(self,id_consulta):
        if self.conexion.is_connected():
            try:
                cursor = self.conexion.cursor()
                sentenciaSQL = "DELETE FROM consulta WHERE id_consulta="+id_consulta
                cursor.execute(sentenciaSQL)

                self.conexion.commit()                
                self.conexion.close()
            except:
                print("No se pudo eliminar la consulta")
