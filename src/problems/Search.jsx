import React, { useEffect, useState } from 'react'

function Search() {

    const [search, setSearch] = useState('');
    const [result, setResult] = useState([]);
    const [show, setShow] = useState(false);
    const [cache, setCache] = useState({});

    const fetchData = async () => {

        if (search == '') {
            setResult([]);
            setSearch('');
            return;
        }

        if (cache[search]) {
            console.log("get from cache------>");
            setResult(cache[search]);
        } else {
            try {
                console.log("api call------>",search);
                const res = await fetch(`https://dummyjson.com/recipes/search?q=${search}`);
                const data = await res.json();
                setResult(data?.recipes || []);
                setCache(prev => ({ ...prev, [search]: data?.recipes }));
        } catch (error) {
            console.log(error);
        }
    }

}

useEffect(() => {

    const timerId = setTimeout(() => {
        fetchData()
    }, 400);

    return () => {
        clearTimeout(timerId);
    }

}, [search])

return (
    <div className="w-full min-h-screen bg-green-200 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
            <div className="relative">
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 shadow-sm"
                    value={search}
                    onChange={(e) => { setSearch(e.target.value) }}
                    onFocus={() => { setShow(true) }}
                    onBlur={() => { setShow(false) }}
                />
                <svg
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    width="20"
                    height="20"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-4.35-4.35m1.59-5.16a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
                {result.length > 0 && show &&
                    (<ul className="absolute w-full bg-white shadow-lg rounded-lg mt-1 z-10 max-h-60 overflow-y-auto">
                        {result.map((item, index) => (
                            <li
                                key={index}
                                onClick={() => { setSearch(item) }}
                                className="px-4 py-2 hover:bg-green-100 cursor-pointer transition"
                            >
                                {item.name}
                            </li>
                        ))}
                    </ul>)
                }
            </div>
        </div>
    </div>

)
}

export default Search