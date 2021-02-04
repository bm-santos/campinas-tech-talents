import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [users, setUsers] = useState<Users[]>([])
  const [id, setId] = useState<Number>()
  const [posts, setPosts] = useState<Posts[]>([])

  interface Users {
    id: number,
    name: string,
  }

  interface Posts {
    id: number,
    title: string,
    body: string,
  }

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/`)
      .then(resposta => setUsers(resposta.data))
  }, [])

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
      .then(resposta => setPosts(resposta.data))
  }, [id])

  return (
    <table>
      <th>
        {id === undefined && <p>Clique em um dos usuários para exibir os posts</p>}
        <h2>Usuários</h2>
        {users.map((usuario: Users) => (
          <>
            <p key={usuario.id} onClick={() => setId(usuario.id)}>{usuario.name} ({usuario.id})</p>
          </>)
        )
        }
      </th>
      <th></th>
      {id !== undefined &&
        <th>
          <h2>Posts do Usuário ID: {id}</h2>
          {posts.map((post: Posts) => (
            <>
              <p key={post.id}><u>Título:</u> {post.title}</p>
            </>
          ))
          }
        </th>}
    </table>
  )
}

export default App;
