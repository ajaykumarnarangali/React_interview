import { useCallback, useState } from 'react'
import List from './List'

function Callback() {

    const [number, setNumber] = useState(0);
    const [light, setLight] = useState(true);

    // here list component will re render changes with toggle also . only need to re render when number changes . because in react
    // state "light" changes component re-render . and in react each re-render new function will create. so getItems changes , List useeffect changes
    // and all re render .by using useCallaback it will only create new function when its dependency array changes.
    //when useCallback used its inside value will same.

    const getItems = useCallback(() => {
        return [number, number + 1, number + 2];
    },[number])

    return (
        <div className={`flex flex-col items-center justify-center min-h-screen ${light?'bg-gray-100 text-black':'bg-black text-white'} gap-4 p-6`}>
            <input
                type="text"
                onChange={(e) => setNumber(parseInt(e.target.value))}
                placeholder="Enter number"
                className="border border-gray-300 rounded px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
                onClick={() => setLight((prev) => !prev)}
                className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
            >
                Toggle
            </button>
            <div className="mt-4 w-full max-w-md">
                <List getItems={getItems} />
            </div>
        </div>

    )
}

export default Callback