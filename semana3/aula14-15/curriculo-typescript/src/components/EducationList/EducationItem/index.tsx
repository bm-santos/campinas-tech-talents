import { TipoEducacaoProps } from "../../../types/TipoEducacao"

function EducationItem(props: TipoEducacaoProps) {
    const { curso, instituicao, periodo } = props.dados
    return (
        <>
            <div className="lista-de-formacao">
                <li>
                    <h4>{curso}</h4>
                    <p>{instituicao}</p>
                    <p>{periodo}</p>
                </li>
            </div>
        </>
    )
}

export default EducationItem