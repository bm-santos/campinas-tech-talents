import { useSelector } from 'react-redux'

interface Store {
  carrinho: number
}

const Carrinho  = () => {

  const valorDoCarrinho = useSelector((state: Store) => state.carrinho)

  return (
    <p>{valorDoCarrinho}</p>
  );
}

export default Carrinho;