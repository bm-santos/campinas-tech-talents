export interface TipoEducacao {
    id: number,
    instituicao: string,
    curso: string,
    periodo: string
}

export interface TipoEducacaoDados {
    educacao: TipoEducacao[]
}

export interface TipoEducacaoProps {
    dados: TipoEducacao
}