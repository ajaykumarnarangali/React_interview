import { useEffect, useState } from "react"

function Progressbar({ progress }) {

  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setAnimatedProgress(progress)
    }, 100);
  }, [progress]);

  return (
    <div className='w-full min-h-screen bg-green-200 flex items-center justify-center p-4'>
      <div className="w-full max-w-xl rounded-lg border border-black bg-white overflow-hidden">
        <div className={`bg-green-600 text-right`}
          style={{
            transform: `translateX(${animatedProgress - 100}%)`,
            transition:'ease-in .5s'
          }}
        >
          {progress}%
        </div>
      </div>
    </div>
  )
}

export default Progressbar