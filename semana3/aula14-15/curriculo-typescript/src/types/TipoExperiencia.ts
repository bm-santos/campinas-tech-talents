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

export interface TipoExperienciaProps {
    dados: TipoExperiencia
}