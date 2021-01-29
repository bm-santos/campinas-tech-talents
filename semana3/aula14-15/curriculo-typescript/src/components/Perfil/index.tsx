import { TipoPerfilDados } from "../../types/TipoPerfil"

function Profile(props: TipoPerfilDados) {

    const { nome, ocupacao, resumo, perfilProfissional } = props.dados

    return (
        <>
            <div className="perfil">
                <img src="https://media-exp1.licdn.com/dms/image/C4D03AQEEkc94fFLMCg/profile-displayphoto-shrink_200_200/0/1602804324688?e=1616630400&v=beta&t=-c4jR_k2W1d4QiaZMvij-PinzvrN2ki-vYgmGt7czJ8" alt="Perfil" />
            </div>
            <div className="biografia">
                <h1>{nome}</h1>
                <div className="ocupacao">{ocupacao}</div>
                <p>{resumo}</p>
            </div>

            <div className="titulo">
                Perfil <br /> Profissional
            </div>

            <div className="perfil-profissional">
                <p>{perfilProfissional}</p>
            </div>
        </>
    )
}

export default Profile