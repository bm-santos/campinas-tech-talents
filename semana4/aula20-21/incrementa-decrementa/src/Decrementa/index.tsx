import { useDispatch } from 'react-redux'

const Decrementa = () => {

    const dispatch = useDispatch()

    return (
        <div>
            <button onClick={() => dispatch({
                type: 'DECREMENTA_ITEM'
            })}>
                -
            </button>
        </div>
    );
}

export default Decrementa;