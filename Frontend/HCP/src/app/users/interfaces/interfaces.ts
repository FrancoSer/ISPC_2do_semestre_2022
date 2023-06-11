export interface HistoriaClinica
{

    id: string;
    fecha: string;
    observaciones?: string;
    especialidad?: string;
    diagnostico?: string;
    proxima_visita?: string;
    presion?: number;
    peso?: number;
    altura?: number;
    prueba_diagnostica?: string;
    medicacion?: string;
    dieta?: string;
    vacuna?: string;
    adjunto?: string;


}

export interface Factura
{

    id: string;
    total: number;
    alta: string;
    baja: string;
    extras?: number;

}

export interface Paciente
{

    id: string;
    cuil: string,
    nacimiento_p?: string,
    nombre_p?: string,
    apellido_p?: string,
    telefono_p?: string,
    direccion_p?: string,
    mail_p?: string,
    genero_p: Genero,
    sangre?: GrupoSanguineo,
    password_p: string,
    password_p_repeat?: string,
    premium?: boolean;
    historia_clinica?: HistoriaClinica;
    factura?: Factura;

}

export type Premium = {

    id: string;
    nombre: string;
    duracion: number;
    valor: number;

};

export interface Medico
{

    id: string;
    matricula: string,
    nacimiento_m?: string,
    nombre_m?: string,
    apellido_m?: string,
    telefono_m?: string,
    direccion_m?: string,
    mail_m?: string,
    password_m: string,
    password_m_repeat?: string,
    genero_m: Genero,

}

export enum Genero
{
    masculino = 'Masculino',
    femenino = 'Femenino',
    otro = 'Otro'
}

export enum GrupoSanguineo
{
    Apositivo = 'A+',
    Anegativo = 'A-',
    Bpositivo = "B+",
    Bnegativo = "B-",
    CeroPositivo = "0+",
    CeroNegativo = "0-",
    ABpositivo = "AB+",
    ABnegativo = "AB-"
}