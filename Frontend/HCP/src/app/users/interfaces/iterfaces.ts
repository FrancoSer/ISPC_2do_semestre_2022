export interface HistoriaClinica{

    id:                   string;
    fecha?:               string;
    observaciones?:       string;
    especialidad?:        string;
    diagnostico?:         string;
    proxima_visita?:      string;
    presion?:             number;
    peso?:                number;
    altura?:              number;
    prueba_diagnostica?:  string;
    medicacion?:          string;
    dieta?:               string;
    vacuna?:              string;
    adjunto?:             string;
    tipo_sanguineo?:      string;

}

export interface Factura{

    id:                   string;
    total:                number;
    alta:                 string;
    baja:                 string;
    extras?:              number;

}

export interface Paciente {

    id?:                 string;
    cuil:                number;
    nombre:              string;
    apellido:            string;
    fecha_de_nacimiento: string;
    tel:                 number;
    direccion:           string;
    email:               string;
    genero:              Genero ;
    premium?:            Premium;
    historia_clinica?:   HistoriaClinica;
    factura:             Factura

}

export interface Premium{

    id:                 string;
    nombre:             string;
    duracion:           number;
    valor:              number

}

export interface Medico{

    id?:                 string;
    matricula:           number;
    nombre:              string;
    apellido:            string;
    fecha_de_nacimiento: string;
    tel:                 number;
    direccion:           string;
    email:               string;
    genero:              Genero;

}

export enum Genero{
    masculino = 'Masculino',
    femenino = 'Femenino',
    no_binario = 'No binario',
    otro = ''
}