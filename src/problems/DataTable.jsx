import { useState } from "react"
import { Dummy } from "../../public/dummy"

function DataTable() {

    const [dataCount, setDataCount] = useState(5);
    const total_length = Dummy?.length;
    const PAGE_COUNT = Math.ceil(total_length / dataCount);
    const [currentPage, setCurrentPage] = useState(1);

    const startIndex = (currentPage - 1) * dataCount;
    const endIndex = currentPage * dataCount;


    const handleDataCount = (e) => {
        setDataCount(() => {
            return e.target.value;
        })
    }

    return (
        <div className="w-full min-h-screen bg-green-200 flex items-center justify-center p-4">
            <div className="w-full max-w-xl rounded-lg border bg-white overflow-hidden">
                <table className="w-full border border-gray-300">
                    <thead>
                        <tr className="border-b border-gray-300">
                            <th className="border-r border-gray-300 p-2">ID</th>
                            <th className="border-r border-gray-300 p-2">Name</th>
                            <th className="p-2">Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Dummy.slice(startIndex, endIndex).map((data, i) => (
                                <tr key={i} className="border-t border-gray-300">
                                    <td className="border-r border-gray-300 p-2">{data.id}</td>
                                    <td className="border-r border-gray-300 p-2">{data.name}</td>
                                    <td className="p-2">{data.age}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <div className="p-3 justify-between flex">
                    <div className="flex gap-2 items-center">
                        <button className="border-2 p-1 bg-slate-400"
                            onClick={() => { setCurrentPage(prev => prev - 1) }}
                            disabled={currentPage == 1}>
                            previous
                        </button>
                        <span>
                            Page {currentPage} of {PAGE_COUNT}
                        </span>
                        <button className="border-2 p-1 bg-slate-400"
                            onClick={() => { setCurrentPage(prev => prev + 1) }}
                            disabled={currentPage == PAGE_COUNT}>
                            next
                        </button>
                    </div>
                    <div>
                        <select className="w-16" value={dataCount} onChange={handleDataCount}>
                            <option value={5}>5</option>
                            <option value={10}>10</option>
                            <option value={15}>15</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default DataTable