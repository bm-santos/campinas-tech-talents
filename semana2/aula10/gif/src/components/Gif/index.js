import React, {useState} from 'react'

function Gif () {
    const [mostrarGif, adicionaMostrarGif] = useState(false)
    
    const ocultar = () => {
        adicionaMostrarGif(false)
      }
    return (
        <p><img src="https://cdn.dicionariopopular.com/imagens/nazareconfusamatematica.gif" alt="Gif" width="200px" onClick={ocultar}/></p>
    )
}

export default Gif