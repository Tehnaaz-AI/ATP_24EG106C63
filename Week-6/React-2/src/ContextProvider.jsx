import {createContext,useState} from 'react'

export const counterContextObj=createContext() 


function ContextProvider({children}) {

    const [counter,setCount]=useState(0)

    const incrCount=()=>{
        setCount(counter+1)
    }

    const decrCount=()=>{
        setCount(counter-1)
    }

    

  return (
    <counterContextObj.Provider value={{counter,incrCount,decrCount}}>
        {children}
    </counterContextObj.Provider>
  )
}

export default ContextProvider