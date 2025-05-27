import { useState, useMemo } from "react"

function Memo() {

  const initialItems = () => {
    return new Array(29999999).fill(0).map((_, i) => {
      return {
        id: i,
        isSelected: i === 29999998
      }
    })
  }

  const [count, setCount] = useState(0);
  const [items] = useState(initialItems);
  const selectedItem = useMemo(() => {
    return items.find((item) => item.isSelected)
  }, [items])

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-green-200">
      <div className="bg-gray-100 rounded-lg p-28 flex flex-col gap-2 items-center">
        <div className="font-bold">Count: {count}</div>
        <div className="font-bold">Selected Item: {selectedItem.id}</div>
        <button className="p-2 bg-gray-300 rounded hover:shadow-md" onClick={() => { setCount(prev => prev + 1) }}>Increament</button>
      </div>
    </div>
  )
}

export default Memo