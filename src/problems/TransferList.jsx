import React, { useState } from 'react'

function TransferList() {

    const [available, setAvailable] = useState([{ id: 1, value: 'Item 1' },
    { id: 2, value: 'Item 2' },
    { id: 3, value: 'Item 3' },
    { id: 4, value: 'Item 4' }]);
    const [selected, setSeletected] = useState([]);

    const [itemsSelected, setItemsSelected] = useState({});

    const handleItem = (e) => {
        setItemsSelected(prev => { return { ...prev, [e.target.value]: 1 } });
    }

    const handleSelect = () => {
        const selectedArray = [];
        const availableArray = [];
        available.forEach((av) => {
            if (itemsSelected[av.id] == 1 && !selected.includes(av.id)) {
                selectedArray.push(av);
            } else if (itemsSelected[av.id] != 1 && !available.includes(av.id)) {
                availableArray.push(av);
            }
        });
        setSeletected(prev => [...prev, ...selectedArray]);
        setAvailable(prev => [...prev, ...availableArray]);
        setItemsSelected({});
    }
    const handleUnselect = () => {
        const selectedArray = [];
        const availableArray = [];
        selected.forEach((av) => {
            if (itemsSelected[av.id] == 1 && !available.includes(av.id)) {
                availableArray.push(av);
            } else if (itemsSelected[av.id] != 1 && !selected.includes(av.id)) {
                selectedArray.push(av);
            }
        });
        setSeletected(prev => [...prev, ...selectedArray]);
        setAvailable(prev => [...prev, ...availableArray]);
        setItemsSelected({});
    }

    return (
        <div className="w-full h-screen bg-green-200 flex items-center justify-center p-4">
            <div className="w-full max-w-lg bg-white h-1/2 p-3 flex flex-col">
                <div className='w-full'>
                    <div className='flex gap-2 items-center w-fit mx-auto'>
                        <h1 className='text-lg font-bold'>Available</h1>
                        <div className='flex flex-col gap-1'>
                            <button
                                aria-label="Previous Slide"
                                className="
                            text-white bg-black/30 hover:bg-black/50 
                            rounded-full w-10 h-10 flex items-center justify-center 
                            transition-colors duration-300 shadow-md backdrop-blur"
                                onClick={handleUnselect}
                            >
                                ‹
                            </button>
                            <button
                                aria-label="Next Slide"
                                className="
                            text-white bg-black/30 hover:bg-black/50 
                            rounded-full w-10 h-10 flex items-center justify-center 
                            transition-colors duration-300 shadow-md backdrop-blur"
                                onClick={handleSelect}
                            >
                                ›
                            </button>
                        </div>
                        <h1 className='text-lg font-bold'>Selected</h1>
                    </div>
                </div>
                <div className='h-full flex w-fit mx-auto py-2'>
                    <div className='px-10 flex flex-col gap-2'>
                        {available.length > 0 &&
                            available.map((item, i) => (
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={itemsSelected[item.id] == 1}
                                        value={item.id}
                                        id="myCheckbox"
                                        onChange={handleItem} />
                                    {item.value}
                                </label>
                            ))
                        }
                    </div>
                    <div className='px-10 flex flex-col gap-2'>
                        {selected.length > 0 &&
                            selected.map((item, i) => (
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={itemsSelected[item.id] == 1}
                                        value={item.id}
                                        id="myCheckbox"
                                        onChange={handleItem}
                                    />
                                    {item.value}
                                </label>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TransferList