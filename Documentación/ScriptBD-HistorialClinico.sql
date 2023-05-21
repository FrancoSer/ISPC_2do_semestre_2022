use hcp;

create table paciente (		
	id_paciente int not null auto_increment unique,
	cuil varchar(11) not null,
	nacimiento_p date not null,
	nombre_p varchar(20) not null,
	apellido_p varchar(20) not null,
	telefono_p varchar(20) not null,
	direccion_p	varchar(40)	not null,
	mail_p	varchar(30)	not null,
	genero_p enum('Masculino', 'Femenino', 'Otro') not null,
    sangre enum('A+', 'A-', 'B+', 'B-', '0+', '0-', 'AB+', 'AB-') not null,
	password_p varchar(20) not null,
	premium	bool not null,    
constraint pk_id_p primary key paciente (id_paciente));

create table medico (		
	id_medico int not null auto_increment unique,
	matricula Varchar(10) not null,
	nacimiento_m date not null,
	nombre_m varchar(20) not null,
	apellido_m varchar(20) not null,
	telefono_m varchar(20) not null,
	direccion_m	varchar(40) not null,
	mail_m varchar(30) not null,
	genero_m enum('Masculino', 'Femenino', 'Otro') not null,
	password_m varchar(20) not null,
constraint pk_id_m primary key medico (id_medico));				

create table historia (		
	id_historia	int	not null auto_increment unique,
	referencia_h varchar(20),
	fecha_h	date not null,
	observaciones Varchar(255),
	especialidad varchar(20),
	diagnostico	varchar(20),
	proxima_visita varchar(20),
	presion	Varchar(10),
	peso Varchar(10),
	altura Varchar(10),
	prueba_diagnostica varchar(30),
	medicacion Varchar(50),
	dieta Varchar(100),
	vacuna Varchar(50),
	adjunto	Varchar(255),
    antecedentes varchar(255),
constraint pk_id_h primary key historia (id_historia));

create table historia_clinica (	
	id_paciente2 int,
	id_medico2 int,
	id_historia2 int,
constraint fk_id_p2 foreign key (id_paciente2) references paciente (id_paciente),			
constraint fk_id_m2 foreign key (id_medico2) references medico (id_medico),			
constraint fk_id_h2 foreign key (id_historia2) references historia (id_historia));			

create table factura (		
	id_factura	int	not null auto_increment unique,
	total float,
	extras float,
	alta date not null,
	baja date not null,
constraint pk_if primary key factura (id_factura));

create table servicio (		
	id_servicio	int	not null auto_increment unique,
	nombre Varchar(20) not null,
	duración Varchar(20) not null,
	valor float not null,
constraint pk_id_s primary key servicio (id_servicio));

create table servicio_factura (	
	id_paciente3 int,
	id_servicio2 int,
	id_factura2	int,
constraint fk_id_p3 foreign key (id_paciente3) references paciente (id_paciente),
constraint fk_id_s2 foreign key (id_servicio2) references servicio (id_servicio),
constraint fk_id_f2 foreign key (id_factura2) references factura (id_factura));