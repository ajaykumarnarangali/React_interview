import { useState } from 'react'

function Todo() {

    const [input, setInput] = useState("");
    const [todos, setTodos] = useState([]);

    const addTodo = () => {

        if (input.length == 0) {
            alert("enter a valid input");
            return;
        }

        const todo = {
            id: Date.now(),
            text: input,
            completed: false
        }

        setTodos((prev) => [...prev, todo]);
        setInput("");
    }

    const deleteTodo = (id) => {
        setTodos((prev) => {
            return prev.filter((todo) => {
                return todo.id != id
            })
        })
    }

    const changeTodoStatus = (id) => {
        setTodos((prev) => {
            return prev.map((todo) => {
                return todo.id != id ? todo : { ...todo, completed: !todo.completed }
            })
        })
    }

    return (
        <div className="w-full min-h-screen bg-green-200 flex items-center justify-center p-4">
            <div className="w-full max-w-md flex flex-col gap-4">
                <div className='w-full flex gap-2'>
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 shadow-sm"
                        value={input}
                        onChange={(e) => { setInput(e.target.value) }}
                    />
                    <button className='px-3 bg-green-400 rounded-lg hover:bg-green-300'
                        onClick={addTodo}
                    >
                        Add
                    </button>
                </div>
                <ul className="list-disc pl-5">
                    {
                        todos.length > 0 &&
                        todos.map((todo, index) => (
                            <li key={index} className='mt-2'>
                                <div className="flex gap-2 items-center">
                                    <input type="checkbox" onChange={() => { changeTodoStatus(todo.id) }} />
                                    <span className={todo.completed ? "line-through" : ""}>
                                        {todo.text}
                                    </span>
                                    <button className="bg-slate-200 rounded-md px-2 hover:bg-slate-100 border border-gray-400"
                                        onClick={() => { deleteTodo(todo.id) }}>
                                        delete
                                    </button>
                                </div>
                            </li>
                        ))
                    }
                </ul>

            </div>
        </div>
    )
}

export default Todo