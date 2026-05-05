import {createContext,useState} from 'react'

//create a context provider obj
export const counterContextObj=createContext() 

const ContextProvider = ({children}) => {

    const [counter,setCount]=useState(10)
    const [counter1,setCount1]=useState(20)

    const changeCounter=()=>{
        setCount(counter+1)
    }


    const changeCounter1=()=>{
      setCount1(counter1+1)
  }


  return (
    <counterContextObj.Provider value={{counter,counter1,changeCounter1,changeCounter}}>
        {children}
    </counterContextObj.Provider>
  )
}

export default ContextProvider