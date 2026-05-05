import { useState,useEffect } from "react";


function APIDemo(){
    let [user,setUsers]=useState([])
    let [error,setError]=useState(null)
    let [loading,setLoading]=useState(false)
    

    useEffect(()=>{
        async function getData() {
            setLoading(true)
            try{
                let res=await fetch("https://jsonplaceholder.typicode.com/posts")
                let userList=await res.json()
                setUsers(userList)
                }
                catch(err){
                    console.log("Error is: ",err)
                    setError(err)
                }
                finally{
                    setLoading(false)
                }
            } getData()
    },[])

    console.log("API Demo Rendered")
    //Making API req need to be in waiting until initial rendering finishes
    //Initial Render--> Display ---> API Call ---> Re-render ---->Display
    if(loading)
        return <p className="text-5xl text-center">Loading....</p>
    if(error!=null)
        return <p className="text-red-600 text-center text-5xl">{error.message}</p>

    return(
        <div className="text-center mt=10">
        <h1 className="text-8xl text-pink-600 p-10">List of Users</h1>
        <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">{user.map((userObj)=>(
            <div className=" border-pink-600 border-4 rounded-3xl"key={userObj.id}>
            <p>{userObj.title}</p>
            <p>{userObj.body}</p>    
            </div>
        ))}
        </div>
    </div>
        
    )
}
export default APIDemo






// function APIDemo(){
//     let [count,setCount]=useState(100)
//     const changeCount=()=>{
//         setCount(count+=1)

//     }

//     useEffect(()=>{
//         console.log("Use Effect Executed")
//     },[])

//     console.log("API Demo Rendered")
//     //Making API req need to be in waiting until initial rendering finishes
//     //Initial Render--> Display ---> API Call ---> Re-render ---->Display

//     return(
//         <div>
//             <h1>Count:{count}</h1>
//         <button onClick={changeCount}>changeCount</button>
//         </div>
        
//     )
// }

