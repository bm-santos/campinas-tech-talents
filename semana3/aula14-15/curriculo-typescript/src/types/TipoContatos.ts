export interface TipoContatos {
    id: number,
    tipo: string,
    contato: string,
    link: string
}

export interface TipoContatosDados {
    contatos: TipoContatos[]
}

export interface TipoContatosProps {
    dados: TipoContatos
}