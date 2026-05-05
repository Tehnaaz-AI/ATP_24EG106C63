import { useContext } from 'react'
import { counterContextObj } from '../Context/contextProvider'
import { useCounterStore } from '../store/useCounterStore'

const Home = () => {
  console.log("Home")
  //call useCounter hook to get state of Zustand store
  let {newCounter,incrementCounter}=useCounterStore()

  const {counter,changeCounter}=useContext(counterContextObj)
  const {counter1,changeCounter1}=useContext(counterContextObj)

  return (
    <div>

      <h1 className='text-4xl'>newCounter: {newCounter}</h1>
      <button onClick={incrementCounter} className='bg-amber-400 p-2'>Change</button>

      <h1 className='text-4xl'>Counter: {counter}</h1>
      <button onClick={changeCounter} className='bg-amber-400 p-2'>Change</button>

      <h1 className='text-4xl'>Counter1: {counter1}</h1>
      <button onClick={changeCounter1} className='bg-amber-400 p-2'>Change</button>
    </div>
  )
}

export default Home