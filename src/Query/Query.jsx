
import { useState } from "react"
import CacheAccess from "./CacheAccess";
import { useUserList, useUserMutaionList } from './hook'

function Query() {

    const { data, error, isLoading, isSuccess } = useUserList();

    const { mutate } = useUserMutaionList();

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-xl font-semibold text-gray-600">Loading...</p>
            </div>
        )
    }

    if (error) {
        return (
            <div className="text-red-500 text-center mt-10">
                {JSON.stringify(error.message)}
            </div>
        )
    }

    console.log(data);

    return (
        <>
            <div className="max-w-md mx-auto mt-10 p-4 bg-white shadow-md rounded-lg">
                <div className="flex justify-center  h-fit items-center gap-3">
                    <h2 className="text-2xl font-bold mb-4 text-center">User List</h2>
                    {/* <button className="bg-slate-100 rounded-lg p-2 cursor-pointer" onClick={() => { setIsdisplay(prev => !prev) }}>fetchUser</button> */}
                    <button className="bg-slate-100 rounded-lg p-2 cursor-pointer" onClick={() => { mutate() }}>Add User</button>
                </div>
                <ul className="space-y-3">
                    {isSuccess && data.map((user, index) => (
                        <li
                            key={index}
                            className="bg-gray-100 p-3 rounded-md shadow-sm flex items-center gap-2"
                        >
                            <span className="text-gray-700">👤 {user.name}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <CacheAccess />
        </>
    )
}

export default Query
