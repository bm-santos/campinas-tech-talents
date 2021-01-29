import { useState } from "react"
import { TipoContatosDados } from "../../types/TipoContatos"
import ContactItem from "./ContactItem"

function ContactList(props: TipoContatosDados) {
    const [contactSection, showContactSection] = useState<Boolean>(false)

    const contatos = props.contatos

    const showSection = () => {
        showContactSection(!contactSection)
    }

    return (
        <>
            <div className="sidebar">
                <h3>Contatos</h3>

                <button id="botao" onClick={showSection}>Mostrar contatos</button>
                <div className="lista-de-contatos">
                    {
                        contactSection &&
                        <>
                            {
                                contatos.map(item => (
                                    < ContactItem key={item.id} dados={item} />
                                ))
                            }
                        </>
                    }
                </div>

            </div>
        </>
    )
}

export default ContactList