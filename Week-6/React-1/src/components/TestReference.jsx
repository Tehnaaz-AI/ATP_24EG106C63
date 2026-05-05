import {useState} from "react";

function Test(){
    const [user,setUser] =useState({username:"Sonu",age:22,city:"Hyderabad"})
    const [marks,setMarks]=useState([10,20,30])

    const updateUser=()=>{
        setUser({...user,username:"Monu"})
    }

    const updateMarks=()=>{
        setMarks([40,...marks])
    }
    
    return(
        <div className="m-auto text-center p-2" >
            <p>username : {user.username}</p>
            <p>age: {user.age}</p>
            <p>city:{user.city}</p>
            <button onClick={updateUser}>Update User</button>
             marks.map(mark,user.mark)
            <button onClick={updateMarks}>Update Marks</button>

        </div>
    )
}

export default Test