import { useEffect, useState } from "react";

function TodoRating() {

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
            isRunning: false,
            timer: {
                minute: 0,
                second: 0
            },
            rating: 0
        }
        setTodos((prev) => {
            return [...prev, todo]
        })
        setInput("");
    }

    const deleteTodo = (Todo_id) => {
        setTodos((prev) => {
            return prev.filter(({ id }) => {
                return id != Todo_id;
            })
        })
    }

    const runTimer = () => {
        setTodos((prev) =>
            prev.map((todo) => {
                if (!todo.isRunning) return todo;
                const newTimer = { ...todo };
                if (newTimer.timer.second === 59) {
                    newTimer.timer.minute++;
                    newTimer.timer.second = 0;
                } else {
                    newTimer.timer.second++;
                }
                return newTimer;
            })
        );
    };

    useEffect(() => {
        const hasActiveTimer = todos.some(todo => todo.isRunning);
        if (!hasActiveTimer) return;

        const interval = setInterval(() => {
            runTimer()
        }, 1000);

        return () => clearInterval(interval);
    }, [todos]);

    const toggleTimer = (id) => {
        setTodos(prev =>
            prev.map(todo =>
                todo.id === id ? { ...todo, isRunning: !todo.isRunning } : todo
            )
        );
    }

    const resetTimer = (id) => {
        setTodos(prev =>
            prev.map(todo =>
                todo.id === id ? { ...todo, isRunning: false, timer: { minute: 0, second: 0 } } : todo
            )
        );
    }

    const handleRating = (todoId, ind) => {
        setTodos(prev =>
            prev.map(todo =>
                todo.id === todoId ? { ...todo, rating: todo.rating == ind ? 0 : ind } : todo
            )
        );
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
                <div>
                    {
                        todos.length > 0 &&
                        todos.map((todo, index) => (
                            <div key={index} className='mt-2 bg-white h-40 rounded-lg p-2'>
                                <div className="flex flex-col gap-2 h-full justify-between">
                                    <div>
                                        <div className="flex gap-3 items-center mb-2">
                                            <span className="text-lg font-bold">
                                                {todo.text}
                                            </span>
                                            <span className="text-lg font-bold">
                                                {
                                                    String(todo.timer.minute).padStart(2, '0')
                                                }
                                                :
                                                {
                                                    String(todo.timer.second).padStart(2, '0')
                                                }
                                            </span>
                                        </div>
                                        <div className="flex flex-col justify-center">
                                            <div className="flex gap-2 items-center">
                                                <div>Rating:</div>
                                                {Array(5).fill(0).map((_, i) => {
                                                    return <span className={`text-xl cursor-pointer ${todo.rating <= i ? 'text-slate-500' : 'text-orange-500'}`}
                                                        onClick={() => { handleRating(todo.id, i + 1) }}>
                                                        ☆
                                                    </span>
                                                })}
                                            </div>
                                            <span>Current rating: {todo.rating}</span>
                                        </div>
                                    </div>
                                    <div className="flex gap-2 text-white font-semibold">
                                        <button className={`${todo.isRunning ? 'bg-orange-500' : 'bg-green-500'} rounded-md py-2 px-3`}
                                            onClick={() => toggleTimer(todo.id)}
                                        >
                                            {todo.isRunning ? 'Resume' : 'Start'}
                                        </button>
                                        <button className="bg-red-500 rounded-md py-2 px-3"
                                            onClick={() => resetTimer(todo.id)}
                                        >
                                            Reset
                                        </button>
                                        <button className="bg-slate-500 rounded-md py-2 px-3"
                                            onClick={() => { deleteTodo(todo.id) }}
                                        >
                                            delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default TodoRating