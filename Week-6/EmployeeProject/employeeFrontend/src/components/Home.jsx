import { useContext } from 'react'
import { counterContextObj } from '../Context/ContextProvider'
import { useCounterStore } from '../store/useCounterStore'
import Footer from './Footer'

const Home = () => {
  console.log("Home")
  //call useCounter hook to get state of Zustand store
  let {newCounter,incrementCounter}=useCounterStore()

  const {counter,changeCounter}=useContext(counterContextObj)
  const {counter1,changeCounter1}=useContext(counterContextObj)

  return (
    <div
      className="
        flex flex-col items-center justify-center
        gap-14 py-12
      "
    >
      
      {/* Heading */}
      <h1
        className="
          text-7xl font-extrabold font-serif
          bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700
          bg-clip-text text-transparent
          drop-shadow-lg
          hover:scale-105
          transition-all duration-500
        "
      >
         Welcome!
      </h1>
  
      {/* Counter Cards */}
      <div
        className="
          flex flex-wrap justify-center gap-10
          w-full max-w-6xl
        "
      >
  
        {/* Card 1 */}
        <div
          className="
            border-4 border-pink-600
            bg-white shadow-2xl
            p-8 rounded-[2rem]
            grid place-items-center gap-6
            hover:-translate-y-3 hover:scale-105
            hover:shadow-pink-300
            transition-all duration-500
            min-w-[280px]
          "
        >
          <h1 className="text-4xl font-bold text-pink-600">
            NewCounter
          </h1>
  
          <div className="text-6xl font-extrabold text-gray-800">
            {newCounter}
          </div>
  
          <button
            onClick={incrementCounter}
            className="
              bg-amber-400 text-black
              px-6 py-3 rounded-full
              font-serif font-bold text-lg
              shadow-lg
              hover:bg-amber-300
              hover:scale-110
              active:scale-95
              transition-all duration-300
            "
          >
             Change
          </button>
        </div>
  
        {/* Card 2 */}
        <div
          className="
            border-4 border-pink-600
            bg-white shadow-2xl
            p-8 rounded-[2rem]
            grid place-items-center gap-6
            hover:-translate-y-3 hover:scale-105
            hover:shadow-pink-300
            transition-all duration-500
            min-w-[280px]
          "
        >
          <h1 className="text-4xl font-bold text-pink-600">
            Counter1
          </h1>
  
          <div className="text-6xl font-extrabold text-gray-800">
            {counter}
          </div>
  
          <button
            onClick={changeCounter}
            className="
              bg-amber-400 text-black
              px-6 py-3 rounded-full
              font-serif font-bold text-lg
              shadow-lg
              hover:bg-amber-300
              hover:scale-110
              active:scale-95
              transition-all duration-300
            "
          >
           Change
          </button>
        </div>
  
        {/* Card 3 */}
        <div
          className="
            border-4 border-pink-600
            bg-white shadow-2xl
            p-8 rounded-[2rem]
            grid place-items-center gap-6
            hover:-translate-y-3 hover:scale-105
            hover:shadow-pink-300
            transition-all duration-500
            min-w-[280px]
          "
        >
          <h1 className="text-4xl font-bold text-pink-600">
            Counter2
          </h1>
  
          <div className="text-6xl font-extrabold text-gray-800">
            {counter1}
          </div>
  
          <button
            onClick={changeCounter1}
            className="
              bg-amber-400 text-black
              px-6 py-3 rounded-full
              font-serif font-bold text-lg
              shadow-lg
              hover:bg-amber-300
              hover:scale-110
              active:scale-95
              transition-all duration-300
            "
          >
           Change
          </button>
        </div>
  
      </div>
    </div>
  )
}

export default Home