import  { useState } from 'react';
import './App.css';

import axios from 'axios'
import { TipoCep } from './types';

function App() {

  const [cep, setCep] = useState("")

  const [dados, setDados] = useState<TipoCep>()

  const getDados = () => {
    axios.get(`https://viacep.com.br/ws/${cep}/json/`)
      .then(resposta => setDados(resposta.data))
  }

  return (
    <div className="App">
      <h1>Digite o CEP: <input type="text" onChange={(event) => setCep(event.target.value)} />
      <button onClick={getDados}>Buscar</button></h1>
      <h3>
        <p>Bairro: {dados?.bairro}</p>
        <p>CEP: {dados?.cep}</p>
        <p>Complemento: {dados?.complemento}</p>
        <p>DDD: {dados?.ddd}</p>
        <p>GIA: {dados?.gia}</p>
        <p>IBGE: {dados?.ibge}</p>
        <p>Cidade: {dados?.localidade}</p>
        <p>Logradouro: {dados?.logradouro}</p>
        <p>Siafi: {dados?.siafi}</p>
        <p>UF: {dados?.uf}</p>
      </h3>
    </div >
  );
}

export default App;
