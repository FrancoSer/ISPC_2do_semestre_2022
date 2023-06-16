use hcp;

CREATE TABLE paciente (
    id_paciente INT PRIMARY KEY AUTO_INCREMENT,
    cuil VARCHAR(11) NOT NULL,
    nacimiento_p DATE NOT NULL,
    nombre_p VARCHAR(30) NOT NULL,
    apellido_p VARCHAR(30) NOT NULL,
    telefono_p VARCHAR(20) NOT NULL,
    direccion_p VARCHAR(40) NOT NULL,
    mail_p VARCHAR(30) NOT NULL,
    genero_p ENUM('Masculino', 'Femenino', 'No binarix', 'Otro') NOT NULL,
    sangre ENUM('A+', 'A-', 'B+', 'B-', '0+', '0-', 'AB+', 'AB-') NOT NULL,
    password_p VARCHAR(20) NOT NULL,
    premium BOOL NOT NULL
);

CREATE TABLE medico (
    id_medico INT PRIMARY KEY AUTO_INCREMENT,
    matricula VARCHAR(10) NOT NULL,
    nacimiento_m DATE NOT NULL,
    nombre_m VARCHAR(30) NOT NULL,
    apellido_m VARCHAR(30) NOT NULL,
    telefono_m VARCHAR(20) NOT NULL,
    direccion_m VARCHAR(40) NOT NULL,
    mail_m VARCHAR(30) NOT NULL,
    genero_m ENUM('Masculino', 'Femenino', 'No binarix', 'Otro') NOT NULL,
    password_m VARCHAR(20) NOT NULL
);

CREATE TABLE historia (
    id_historia INT PRIMARY KEY AUTO_INCREMENT,
    fecha_h DATE NOT NULL,
    referencia_h VARCHAR(20),
    especialidad VARCHAR(30),
    diagnostico VARCHAR(50),
    antecedentes VARCHAR(255),
    presion VARCHAR(10),
    peso VARCHAR(10),
    altura VARCHAR(10),
    prueba_diagnostica VARCHAR(30),
    medicacion VARCHAR(50),
    dieta VARCHAR(100),
    vacuna VARCHAR(50),
    proxima_visita VARCHAR(20),
    observaciones VARCHAR(255),
    adjunto VARCHAR(255)
);

CREATE TABLE historia_clinica (
    id_paciente_id INT,
    id_medico_id INT,
    id_historia_id INT,
    FOREIGN KEY (id_paciente_id) REFERENCES paciente(id_paciente),
    FOREIGN KEY (id_medico_id) REFERENCES medico(id_medico),
    FOREIGN KEY (id_historia_id) REFERENCES historia(id_historia)
);

CREATE TABLE servicio (
    id_servicio INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(20) NOT NULL,
    duracion INT NOT NULL,
    valor FLOAT NOT NULL,
    descripcion TEXT
);

CREATE TABLE factura (
    id_factura INT PRIMARY KEY AUTO_INCREMENT,
    total FLOAT NOT NULL,
    extras FLOAT,
    alta DATE NOT NULL,
    id_paciente_id INT,
    id_servicio_id INT,
    FOREIGN KEY (id_paciente_id) REFERENCES paciente(id_paciente),
    FOREIGN KEY (id_servicio_id) REFERENCES servicio(id_servicio)
);
