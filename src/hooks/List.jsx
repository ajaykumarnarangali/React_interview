import { useState, useEffect } from 'react';

function List({ getItems }) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        console.log("component rendered");
        setItems(getItems());
    }, [getItems]);

    return (
        <div className="bg-white shadow-md rounded p-4 w-full">
            {items.length > 0 && (
                <>
                    <h2 className="text-lg font-semibold mb-2">Generated Items</h2>
                    <ul className="list-disc list-inside space-y-1">
                        {items.map((item, index) => (
                            <li key={index} className="text-gray-700">{item}</li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
}

export default List;
