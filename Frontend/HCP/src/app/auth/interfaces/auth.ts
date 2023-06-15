import { Genero, GrupoSanguineo } from "src/app/users/interfaces/interfaces";

export interface PacienteRegistro
{

    cuil: string,
    nacimiento_p: string,
    nombre_p: string,
    apellido_p: string,
    telefono_p: string,
    direccion_p: string,
    mail_p: string,
    genero_p: Genero,
    sangre: GrupoSanguineo,
    password_p: string,
    password_p_repeat: string,
    premium: boolean;

}

export interface PacienteLogin
{
    cuil: string,
    password_p: string;
}

export interface MedicoRegistro
{

    matricula: string,
    nacimiento_m: string,
    nombre_m: string,
    apellido_m: string,
    telefono_m: string,
    direccion_m: string,
    mail_m: string,
    password_m: string,
    password_m_repeat: string,
    genero_m: Genero,



}

export interface MedicoLogin
{
    matricula: string,
    password_m: string;
}

