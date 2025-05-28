import { useQueryClient } from "@tanstack/react-query"

function CacheAccess() {

    const queryClient=useQueryClient();
    const data=queryClient.getQueryData(["users"]);

    console.log("cache data",data);

    return (
        <div className="max-w-md mx-auto mt-10 p-4 bg-white shadow-md rounded-lg">
            <div className="flex justify-center  h-fit items-center gap-3">
                <h2 className="text-2xl font-bold mb-4 text-center">Backup User List</h2>
            </div>
            <ul className="space-y-3">
                {data && data.length>0 && data.map((user, index) => (
                    <li
                        key={index}
                        className="bg-gray-100 p-3 rounded-md shadow-sm flex items-center gap-2"
                    >
                        <span className="text-gray-700">👤 {user.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default CacheAccess