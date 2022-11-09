###################################################
#CONSULTAS TABLA PACIENTE
###################################################

#Insertar Paciente
INSERT INTO paciente VALUES(cuit, nombre, apellido, email, fecha_nacimiento, telefono, direccion, tipoSangre, genero, sexo, peso, altura, password)

#Buscar paciente por cuit
SELECT * FROM paciente where cuit="cuitABuscar"

#Buscar todos los pacientes
SELECT * FROM paciente

#UPDATE paciente
UPDATE paciente WHERE cuit="cuit" VALUES(nombre, apellido, email, fecha_nacimiento, telefono, direccion, tipoSangre, genero, sexo, peso, altura, password)

#DELETE Paciente por cuit
DELETE from paciente where cuit ="cuit"

###################################################
#CONSULTAS TABLA MEDICO
###################################################

#Insertar Médico
INSERT INTO medico VALUES(matricula, cuit, nombre, apellido, email, fechaNacimiento, telefono, direccion, genero, especialidad, password)

#Buscar Médico por matricula
SELECT * from medico where matricula="matricula"

#Actualizar Médico
UPDATE medico WHERE matricula="+matricula+" VALUES(cuit, nombre, apellido, email, fechaNacimiento, telefono, direccion, genero, especialidad, password)

#Eliminar Médico
DELETE from medico where matricula="matricula"

###################################################
#CONSULTAS TABLA Historia Clínica
###################################################

