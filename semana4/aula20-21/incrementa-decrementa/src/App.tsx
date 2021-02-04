import React from 'react'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Incrementa from './Incrementa'
import Carrinho from './Carrinho'
import Decrementa from './Decrementa'

interface Store {
  carrinho: number
}

const initialState: Store = {
  carrinho: 0
}

function reducer(state = initialState, action: any) {
  switch (action.type) {
    case 'INCREMENTA_ITEM':
      return {
        carrinho: state.carrinho + 1
      };
    case 'DECREMENTA_ITEM':
      return {
        carrinho: state.carrinho > 0 ? state.carrinho - 1 : state.carrinho,
      };
    default:
      return state
  }
}

const store = createStore(reducer)

function App() {
  return (
    <Provider store={store}>
      <table>
        <th><Decrementa /></th>
        <th><Carrinho /></th>
        <th><Incrementa /></th>
      </table>
    </Provider>
  );
}

export default App;