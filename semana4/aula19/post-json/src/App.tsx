import React, { useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  let inputNome = useRef<HTMLInputElement>(null)
  let inputIdade = useRef<HTMLInputElement>(null)
  let inputEmpresa = useRef<HTMLInputElement>(null)
  let inputTelefone = useRef<HTMLInputElement>(null)

  const [cadastro, setCadastro] = useState<String>('')

  const enviarFormulario = () => {
    const nome = inputNome.current?.value
    const idade = inputIdade.current?.value
    const empresa = inputEmpresa.current?.value
    const telefone = inputTelefone.current?.value

    axios.post("http://localhost:4000/usuarios", {
      name: nome,
      age: idade,
      company: empresa,
      phone: telefone
    })
      .then(resposta => {
        if (resposta.status == 201) {
          setCadastro('Cadastro realizado com sucesso')
        }
      })
  }

  return (
    <div className="App">
      <input type="text" placeholder="Digite o nome" ref={inputNome} />
      <input type="text" placeholder="Digite a idade" ref={inputIdade} />
      <input type="text" placeholder="Digite a empresa" ref={inputEmpresa} />
      <input type="text" placeholder="Digite o telefone" ref={inputTelefone} />
      <button onClick={enviarFormulario}>Enviar dados</button>
      <p>{cadastro}</p>
    </div>
  );
}

export default App;
