import {counterContextObj} from "./contextProvider"
import { useContext } from "react"

function App() {
  const {counter,incrCount,decrCount}= useContext(counterContextObj)

  return (
    <div className="bg-red-400 min-h-screen pt-10 pl-50 pr-50 pb-30">
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 bg-pink-300 mt-10 rounded-4xl border-2 p-20  ">
        <div className="text-center p-5 border-4 text-2xl  bg-green-300 border-blue-500 rounded-2xl m-5  ">
          <h1 className="font-bold font-serif">EditCount-1</h1>
          <p className="font-semibold">count:  {counter}</p>
          <button onClick={incrCount} className='bg-blue-500 h-10 font-bold rounded-2xl w-10 m-2'>+</button>
          <button onClick={decrCount} className='bg-amber-400 h-10 font-bold rounded-2xl w-10'>-</button>
        </div>

        <div className="text-center p-5 border-4 text-2xl bg-green-300 border-blue-500 rounded-2xl m-5  ">
          <h1 className="font-bold font-serif">EditCount-2</h1>
          <p className="font-semibold">count:  {counter}</p>
          <button onClick={incrCount} className='bg-blue-500 h-10 font-bold rounded-2xl w-10 m-2'>+</button>
          <button onClick={decrCount} className='bg-amber-400 h-10 font-bold rounded-2xl w-10'>-</button>
        </div>

        <div className="text-center p-5 border-4 text-2xl bg-green-300 border-blue-500 rounded-2xl m-5  ">
          <h1 className="font-bold font-serif">EditCount-3</h1>
          <p className="font-semibold">count:  {counter}</p>
          <button onClick={incrCount} className='bg-blue-500 h-10 font-bold rounded-2xl w-10 m-2'>+</button>
          <button onClick={decrCount} className='bg-amber-400 h-10 font-bold rounded-2xl w-10'>-</button>
        </div>

        <div className="text-center p-5 border-4 text-2xl bg-green-300 border-blue-500 rounded-2xl m-5  ">
          <h1 className="font-bold font-serif">EditCount-4</h1>
          <p className="font-semibold">count:  {counter}</p>
          <button onClick={incrCount} className='bg-blue-500 h-10 font-bold rounded-2xl w-10 m-2'>+</button>
          <button onClick={decrCount} className='bg-amber-400 h-10 font-bold rounded-2xl w-10'>-</button>
        </div>
      </div>
    </div>
  )
}

export default App