
export interface TipoAPI {
    perfil: TipoPerfil,
    contatos: Contatos[],
    educacao: Educacao[],
    experiencia: TipoExperiencia[]
}

export interface TipoPerfil {
    nome: string,
    ocupacao: string,
    resumo: string,
    perfilProfissional: string
}

export interface TipoPerfilDados {
    dados: TipoPerfil
}

export interface Contatos {
    id: number,
    tipo: string,
    contato: string,
    link: string
}

export interface Educacao {
    id: number,
    instituicao: string,
    curso: string,
    periodo: string
}

export interface TipoExperiencia {
    id: number,
    cargo: string,
    periodo: string,
    empresa: string,
    local: string,
    conteudo: string
}
export interface TipoExperienciaDados {
    experiencia: TipoExperiencia[]
}