import { TipoContatos } from "./TipoContatos";
import { TipoEducacao } from "./TipoEducacao";
import { TipoExperiencia } from "./TipoExperiencia";
import { TipoPerfil } from "./TipoPerfil";

export interface TipoAPI {
    perfil: TipoPerfil,
    contatos: TipoContatos[],
    educacao: TipoEducacao[],
    experiencia: TipoExperiencia[]
}