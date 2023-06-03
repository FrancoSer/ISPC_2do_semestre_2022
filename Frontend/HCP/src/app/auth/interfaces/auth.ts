import { Genero, GrupoSanguineo } from "src/app/users/interfaces/interfaces";

export interface PacienteRegistro {

    id?: string,
    username: string,
    apellido?: string,
    cuil?: string,
    email: string,
    password: string,
    passwordRepeat?: string,
    nacimiento?: string,
    genero?: Genero.masculino,
    grupoSanguineo?: GrupoSanguineo.Apositivo,
    premium?: boolean

}

export interface PacienteLogin{
    username: string,
    email: string,
    password: string
}

export interface MedicoRegistro {

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

export interface MedicoLogin{
    username: string,
    email: string,
    password: string
}

