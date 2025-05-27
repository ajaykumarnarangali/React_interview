import { Link } from "react-router-dom"

function Home() {

  const Questions = [
    { name: "Accordion", path: "accordion" },
    { name: "Chips", path: "chips" },
    { name: "Otp", path: "otp" },
    { name: "Pagination", path: "pagination" },
    { name: "Progressbar", path: "progress-bar" },
    { name: "Search", path: "search" },
    { name: "Todo", path: "todo" },
    { name: "TabForm", path: "tab-form" },
    { name: "folder", path: "folder" },
    { name: "useMemo", path: "use-memo" },
    { name: "useCallback", path:"use-callback" },
    { name: "useReducer", path:"use-Reducer" }
  ]

  return (
    <div className='w-full h-screen bg-green-200 p-10 flex flex-col'>
      <div className='flex-1 overflow-y-scroll'>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 p-2">
          {
            Questions.map((Qn, index) => (
              <Link
                key={index}
                className="border h-52 rounded-lg bg-slate-50 shadow p-4 hover:shadow-lg transition flex justify-center items-center"
                to={`/${Qn.path}`}
              >
                <h2 className="font-semibold text-lg text-gray-800">{Qn.name}</h2>
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Home