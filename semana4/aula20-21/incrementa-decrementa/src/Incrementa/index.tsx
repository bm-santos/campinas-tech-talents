import { useDispatch } from 'react-redux'

const Incrementa = () => {

    const dispatch = useDispatch()

    return (
        <div>
            <button onClick={() => dispatch({
                type: 'INCREMENTA_ITEM'
            })}>
                +
            </button>
        </div>
    );
}

export default Incrementa;