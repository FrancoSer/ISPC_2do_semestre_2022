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
            
#Registrar Estudio - INSERT
def registrarEstudioRealizado(self,tipo, nombre, resultado, fecha, archivo, historia_clinica_id, medico_matricula):
        if self.conexion.is_connected():
            try:
                cursor = self.conexion.cursor()
                sentenciaSQL= "INSERT INTO estudio_realizado (tipo, nombre, resultado, fecha, archivo, historia_clinica_id, medico_matricula) VALUES(%s,%s,%s,%s,%s,%s,%s)"
                data= (tipo, nombre, resultado, fecha, archivo, historia_clinica_id, medico_matricula)
                cursor.execute(sentenciaSQL,data)
                self.conexion.commit()
                self.conexion.close()

            except:
                print("No se pudo registrar el estudio")


#Buscar Estudio Realizado - SELECT

def buscarEstudioRealizado(self, idEstudio):
            if self.conexion.is_connected():
                try:
                    cursor = self.conexion.cursor()
                    sentenciaSQL= "SELECT * from estudio_realizado where id_estudio="+idEstudio
                    cursor.execute(sentenciaSQL)
                    resultadoREAD = cursor.fetchall()
                    self.conexion.close()
                    return resultadoREAD

                except:
                    print("No se pudo consultar a la base de datos")


#Modificar Estudio Realizado
def modificarEstudioRealizado(self,id_estudio, tipo, nombre, resultado, fecha, archivo, historia_clinica_id, medico_matricula):
        if self.conexion.is_connected():
            try:
                cursor = self.conexion.cursor()
                sentenciaSQL= "UPDATE estudio_realizado SET tipo="+ tipo +", nombre="+ nombre +", resultado="+ resultado +", fecha="+ fecha+", archivo="+archivo+", historia_clinica_id="+historia_clinica_id+", medico_matricula="+medico_matricula+" WHERE id_estudio="+id_estudio
                data= (tipo, nombre, resultado, fecha, archivo, historia_clinica_id, medico_matricula)
                cursor.execute(sentenciaSQL,data)
                self.conexion.commit()
                self.conexion.close()

            except:
                print("No se pudo modificar los datos del estudio realizado") 



#Borrar Estudio Realizado - DELETE
def eliminarEstudioRealizado(self,idEstudio):
        if self.conexion.is_connected():
            try:
                cursor = self.conexion.cursor()
                sentenciaSQL = "DELETE from estudio_realizado where id_estudio="+idEstudio
                cursor.execute(sentenciaSQL)

                self.conexion.commit()                
                self.conexion.close()
            except:
                print("No se pudo eliminar el estudio realizado")
