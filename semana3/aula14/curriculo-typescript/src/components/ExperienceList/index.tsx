import { TipoExperienciaDados, TipoExperiencia } from "../../types"
import ExperienceItem from './ExperienceItem'

function ExperienceList(props: TipoExperienciaDados) {
    
    const experiencia = props.experiencia
    return (
        <>
            <div className="experience">
                <h2>Experiência Profissional</h2>
                {
                    experiencia.map(item => (
                        <ExperienceItem key={item.id} cargo={item.cargo} conteudo={item.conteudo} empresa={item.empresa} local={item.local} periodo={item.periodo} />
                    ))
                }
            </div>
        </>
    )
}

export default ExperienceList