import { TipoExperienciaDados } from '../../types/TipoExperiencia'
import ExperienceItem from './ExperienceItem'

function ExperienceList(props: TipoExperienciaDados) {

    const experiencia = props.experiencia
    return (
        <div className="experience">
            <h2>Experiência Profissional</h2>
            {
                experiencia.map(item => (
                    <ExperienceItem key={item.id} dados={item} />
                ))
            }
        </div>
    )
}

export default ExperienceList