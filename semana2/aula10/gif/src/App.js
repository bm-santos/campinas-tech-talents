import logo from './logo.svg';
import React, {useState} from 'react'
import './App.css';
import Gif from './components/Gif'

function App() {
  const [mostrarGif, adicionaMostrarGif] = useState(false)
  console.log(Gif.funcao)

  const mostrar = () => {
    adicionaMostrarGif(true)
  }

  const ocultar = () => {
    adicionaMostrarGif(false)
  }

  return (
    <div className="App">
      <button onClick={mostrar}>Mostrar Gif</button><br />
      {mostrarGif && <img src="https://cdn.dicionariopopular.com/imagens/nazareconfusamatematica.gif" alt="Gif" width="200px" onClick={ocultar}/>}
    </div>
  );
}

export default App;
