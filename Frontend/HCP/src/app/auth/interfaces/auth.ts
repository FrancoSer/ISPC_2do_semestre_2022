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
    password: string,
    passwordRepeat: string,
    premium: boolean;

}

export interface PacienteLogin
{
    username: string,
    email: string,
    password: string;
}

export interface MedicoRegistro
{

    id?: string,
    username: string,
    apellido?: string,
    matricula?: string,
    email: string,
    password: string,
    passwordRepeat?: string,
    nacimiento?: string,
    genero?: Genero.masculino,

}

export interface MedicoLogin
{
    username: string,
    email: string,
    password: string;
}

