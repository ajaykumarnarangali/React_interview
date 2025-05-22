import React, { useState } from 'react'

function Chips() {

    const [input, setInput] = useState("");
    const [chips, setChips] = useState([]);

    const addChip = () => {
        if (input.length === 0) {
            return;
        }
        setChips((prev) => [...prev, input]);
        setInput("");
    }

    const removeChip = (chipIndex) => {
        setChips((prev) => {
            return prev.filter((each, ind) => {
                return chipIndex != ind
            })
        })
    }

    return (
        <div className="w-full min-h-screen bg-green-200 flex items-center justify-center p-4">
            <div className="w-full max-w-md flex flex-col gap-2">
                <input
                    type="text"
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 shadow-sm"
                    value={input}
                    onChange={(e) => { setInput(e.target.value) }}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            addChip();
                        }
                    }}
                    placeholder="Add a todo"
                />
                <div className="w-full flex gap-2 flex-wrap">
                    {
                        chips.length > 0 &&
                        chips.map((chip, index) => (
                            <span key={index} class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-slate-100 text-slate-800 gap-1">
                                {chip}
                                <p className=' text-red-500 cursor-pointer' onClick={() => { removeChip(index) }}> &times;</p>
                            </span>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Chips