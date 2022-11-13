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