###################################################
#CONSULTAS TABLA PACIENTE
###################################################

#Insertar Paciente
INSERT INTO paciente (cuit, nombre, apellido, email, fecha_nacimiento, telefono, direccion, tipoSangre, genero, sexo, peso, altura, password)
VALUES("cuit", "nombre", "apellido", "email", "fecha_nacimiento", "telefono", "direccion", "tipoSangre", "genero", "sexo", "peso", "altura", "password")

#Buscar paciente por cuit
SELECT * FROM paciente where cuit="cuitABuscar"

#Buscar todos los pacientes
SELECT * FROM paciente

#Actualizar paciente
UPDATE paciente  
SET nombre="nombre", apellido="apellido", email="email", fecha_nacimiento="fechaNacimiento", telefono="telefono", direccion="Direccion", tipoSangre="tipoSangre", genero="genero", sexo="Sexo", peso="peso", altura="altura", password="password" 
WHERE cuit="cuit"

#DELETE Paciente por cuit
DELETE from paciente where cuit ="cuit"

###################################################
#CONSULTAS TABLA MEDICO
###################################################

#Insertar Médico
INSERT INTO medico (matricula, cuit, nombre, apellido, email, fechaNacimiento, telefono, direccion, genero, especialidad, password)
VALUES ("matricula", "cuit","nombre", "apellido", "email", "fechaNacimiento", "telefono", "direccion", "genero", "especialidad", "password")

#Buscar Médico por matricula
SELECT * FROM medico 
WHERE matricula="matricula"

#Actualizar Médico
UPDATE medico  
SET cuit="cuit", nombre="nombre", apellido="apellido", email="email", fechaNacimiento="fechaNacimiento", telefono="telefono", direccion="direccion", genero="genero", especialidad="espacialidad", password="password" 
WHERE matricula="matricula"

#Eliminar Médico
DELETE from medico where matricula="matricula"

###################################################
#CONSULTAS TABLA TRATAMIENTO
###################################################
#Insertar TRATAMIENTO
INSERT INTO tratamiento (medicacion, dieta, cuidados_especiales, observaciones, estado, historia_clinica_id, medico_matricula) 
VALUES ("medicacion", "dieta", "cuidados_especiales", "observaciones", "estado", "historia_clinica_id", "medico_matricula")

#Buscar Tratamiento por id
SELECT * from tratamiento where id="idTratamiento"

#Actualizar Tratamiento
UPDATE tratamiento  SET medicacion="medicacion", dieta="dieta", cuidados_especiales="cuidadosEspeciales", observaciones="observaciones", estado="estado", historia_clinica_id="historia_clinica_id", medico_matricula="medicoMatricula" WHERE id="idTratamiento"

#Eliminar Tratamiento
DELETE from tratamiento where id="idTratamiento"

###################################################
#CONSULTAS TABLA EXAMEN FISICO
###################################################

#Insertar EXAMEN FISICO
INSERT INTO examen_fisico (presion, peso, altura, fecha, historia_clinica_id, medico_matricula) 
VALUES ("presion", "peso", "altura", "fecha", "historia_clinica_id", "medico_matricula")

#Buscar Examen fisico por id
SELECT * from examen_fisico where id="id"

#Actualizar Examen fisico
UPDATE examen_fisico  SET presion="presion", peso="peso", altura="altura", fecha="fecha", historia_clinica_id="historia_clinica_id", medico_matricula="medico_matricula", WHERE id="id"

#Eliminar Examen fisico
DELETE from examen_fisico where id="id"

###################################################
#CONSULTAS TABLA VACUNA COLOCACION
###################################################

#Insertar COLOCACIONES DE VACUNA
INSERT INTO vacuna_colocacion (nombre, fecha_colocacion, historia_clinica_id, medico_matricula) 
VALUES ("nombre", "fecha_colocacion", "historia_clinica_id", "medico_matricula")

#Buscar Examen fisico por id
SELECT * from vacuna_colocacion where id="id"

#Actualizar Examen fisico
UPDATE vacuna_colocacion  SET nombre="nombre", fecha_colocacion="nombre", historia_clinica_id="historia_clinica_id", medico_matricula="medico_matricula", WHERE id="id"

#Eliminar Examen fisico
DELETE from vacuna_colocacion where id="id"

