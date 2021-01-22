import React, {useState} from 'react'

function MostraGif () {
    const [gif, adicionaMostraGif] = useState(false)
    
    const showGif = () => {
        adicionaMostraGif(true)
    }

    const hideGif = () => {
        adicionaMostraGif(false)
    }

    return (
        <>
            <button id="botao" onClick={showGif}>Mostrar o gif</button><br />
            {
                gif && <div><img src="https://cdn.dicionariopopular.com/imagens/nazareconfusamatematica.gif" alt="Gif" width="200px" onClick={hideGif}/></div>
            }
            {
                gif && <p>Clique no gif para escondê-lo</p>
            }
        </>
    )
}

export default MostraGif