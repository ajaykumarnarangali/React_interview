import React, { useState } from 'react'

function Accordion({ items }) {

    const [openIndex, setOpenIndex] = useState(null)

    const toggleIndex = (index) => {
        if (openIndex == index) {
            setOpenIndex(null)
        } else {
            setOpenIndex(index)
        }
    }

    return (
        <div className="w-full min-h-screen bg-green-200 flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-white min-h-80 p-3 rounded shadow overflow-auto">
                {items.map((item, index) => (
                    <div key={index} className="w-full mb-2 rounded overflow-hidden border border-gray-200">
                        <button className="w-full bg-gray-100 hover:bg-gray-200 p-3 text-start font-semibold flex justify-between"
                            onClick={() => { toggleIndex(index) }}>
                            {item.title}
                            <span className='text-gray-400'>{openIndex === index ? '▲' : '▼'}</span>
                        </button>
                        <div className={`w-full bg-gray-50 p-3 text-start text-sm text-gray-700 ${openIndex == index ? '' : 'hidden'}`}>
                            {item.content}
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default Accordion