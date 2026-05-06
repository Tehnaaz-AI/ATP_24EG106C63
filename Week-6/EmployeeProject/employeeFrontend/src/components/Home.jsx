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
    <div className=" flex flex-col items-center justify-center gap-10">
  
  <h1 className="text-6xl text-pink-600 font-bold font-serif">
    Welcome!
  </h1>

  <div className="flex justify-around w-full max-w-5xl">
    
    <div className="border-4 border-pink-600 p-4 rounded-3xl grid place-items-center gap-4">
      <h1 className="text-4xl">NewCounter: {newCounter}</h1>
      <button
        onClick={incrementCounter}
        className="bg-amber-400 px-4 py-2 rounded-3xl font-serif font-bold"
      >
        Change
      </button>
    </div>

    <div className="border-4 border-pink-600 p-4 rounded-3xl grid place-items-center gap-4">
      <h1 className="text-4xl">Counter1: {counter}</h1>
      <button
        onClick={changeCounter}
        className="bg-amber-400 px-4 py-2 rounded-3xl font-serif font-bold"
      >
        Change
      </button>
    </div>

    <div className="border-4 border-pink-600 p-4 rounded-3xl grid place-items-center gap-4">
      <h1 className="text-4xl">Counter2: {counter1}</h1>
      <button
        onClick={changeCounter1}
        className="bg-amber-400 px-4 py-2 rounded-3xl font-serif font-bold"
      >
        Change
      </button>
    </div>

  </div>
</div>
  )
}

export default Home