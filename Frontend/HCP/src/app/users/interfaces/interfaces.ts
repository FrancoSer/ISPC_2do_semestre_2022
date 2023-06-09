export interface HistoriaClinica
{

    id: string;
    fecha?: string;
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

    id?: string;
    cuil: string;
    password: string;
    nombre: string;
    apellido: string;
    fecha_de_nacimiento: string;
    tel: string;
    direccion?: string;
    email: string;
    genero: Genero;
    tipo_sanguineo?: GrupoSanguineo;
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

    id?: string;
    matricula: number;
    nombre: string;
    apellido: string;
    fecha_de_nacimiento: string;
    tel: number;
    direccion: string;
    email: string;
    genero: Genero;

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