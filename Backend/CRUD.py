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

###########################################################################################################################################################
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
                    sentenciaSQL= "SELECT * from consulta where id_consulta="+id_consulta
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
                    sentenciaSQL= "SELECT * from consulta where historia_clinica_id="+historia_clinica_id
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
                sentenciaSQL= "UPDATE consulta WHERE id_consulta="+id_consulta+" VALUES(%s,%s,%s,%s,%s,%s,%s,%s)"
                data= (fecha, tipoConsulta, observaciones, diagnostico, receta, proximaCita, medico_matricula, historia_clinica_id)
                cursor.execute(sentenciaSQL,data)
                self.conexion.commit()
                self.conexion.close()

            except:
                print("No se pudo modificar los datos de la consulta") 



#Borrar Consulta - DELETE
def eliminarConsulta(self,id_consulta):
        if self.conexion.is_connected():
            try:
                cursor = self.conexion.cursor()
                sentenciaSQL = "DELETE from consulta where id_consulta="+id_consulta
                cursor.execute(sentenciaSQL)

                self.conexion.commit()                
                self.conexion.close()
            except:
                print("No se pudo eliminar la consulta")


###########################################################################################################################################################

# TABLA TRATAMIENTO

###########################################################################################################################################################

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
def eliminarConsulta(self,idTratamiento):
        if self.conexion.is_connected():
            try:
                cursor = self.conexion.cursor()
                sentenciaSQL = "DELETE from tratamiento where id="+idTratamiento
                cursor.execute(sentenciaSQL)

                self.conexion.commit()                
                self.conexion.close()
            except:
                print("No se pudo eliminar el tratamiento")


###########################################################################################################################################################

# TABLA ESTUDIO REALIZADO

###########################################################################################################################################################

#Registrar Estudio - INSERT
def registrarEstudioRealizado(self,tipo, nombre, resultado, fecha, archivo, historia_clinica_id, medico_matricula):
        if self.conexion.is_connected():
            try:
                cursor = self.conexion.cursor()
                sentenciaSQL= "INSERT INTO estudio_realizado VALUES(%s,%s,%s,%s,%s,%s,%s)"
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
                sentenciaSQL= "UPDATE estudio_realizado WHERE id_estudio="+id_estudio+" VALUES(%s,%s,%s,%s,%s,%s,%s)"
                data= (tipo, nombre, resultado, fecha, archivo, historia_clinica_id, medico_matricula)
                cursor.execute(sentenciaSQL,data)
                self.conexion.commit()
                self.conexion.close()

            except:
                print("No se pudo modificar los datos del estudio realizado") 



#Borrar Estudio Realizado - DELETE
def eliminarConsulta(self,idEstudio):
        if self.conexion.is_connected():
            try:
                cursor = self.conexion.cursor()
                sentenciaSQL = "DELETE from estudio_realizado where id_estudio="+idEstudio
                cursor.execute(sentenciaSQL)

                self.conexion.commit()                
                self.conexion.close()
            except:
                print("No se pudo eliminar el estudio realizado")







