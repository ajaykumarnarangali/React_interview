import { useReducer } from 'react'

function reducer() {

    const ACTION = {
        INCREMENT: "INC",
        DECREMENT: "DEC"
    }
    const initialstate = { count: 0 };
    const reducer = (state, action) => {
        switch (action.type) {
            case ACTION.INCREMENT: {
                return { count: state.count + 1 };
            }
            case ACTION.DECREMENT: {
                return { count: state.count - 1 };
            }

            default: return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialstate);

    const handleIncrement = () => {
        dispatch({type:ACTION.INCREMENT});
    }

    const handleDecrement = () => {
        dispatch({type:ACTION.DECREMENT});
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-6 rounded shadow-md flex flex-col items-center gap-4">
                <h1 className="text-2xl font-semibold">Count: {state.count}</h1>
                <div className="flex gap-4">
                    <button
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                        onClick={handleDecrement}
                    >
                        Decrement
                    </button>
                    <button
                        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                        onClick={handleIncrement}
                    >
                        Increment
                    </button>
                </div>
            </div>
        </div>
    )
}

export default reducer