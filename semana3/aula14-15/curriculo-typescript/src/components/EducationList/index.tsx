import { TipoEducacaoDados } from "../../types/TipoEducacao"
import EducationItem from "./EducationItem"

function EducationList(props: TipoEducacaoDados) {
    const educacao = props.educacao
    return (
        <>
            <div className="sidebar">
                <h3>Educação</h3>
                {
                    educacao.map(item => (
                        <EducationItem key={item.id} dados={item} />
                    ))
                }
            </div>
        </>
    )
}

export default EducationList