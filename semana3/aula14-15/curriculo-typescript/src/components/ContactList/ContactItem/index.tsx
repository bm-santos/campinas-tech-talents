import { TipoContatosProps } from "../../../types/TipoContatos";

function ContactItem(props: TipoContatosProps) {
    const {tipo, link, contato} = props.dados
    return (
        <div className="item-contato">
            <h4>{tipo}</h4>
            <p><a href={link} target="blank">{contato}</a></p>
        </div>
    )
}

export default ContactItem