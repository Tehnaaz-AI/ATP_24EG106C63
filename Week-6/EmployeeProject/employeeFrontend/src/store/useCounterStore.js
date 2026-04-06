import {create} from 'zustand'


//create store
export const useCounterStore=create((set)=>({
    //state
    newCounter:0,
    newCounter1:100,
    //add user state (name,age,email)
    user:{name:"ravi",email:"ravi@mail.com",age:20},
    changeEmail:()=>set({...user,email:"test@mail.com"}),
    changeNameAndAge:()=>set({...user,name:"Sonu",age:20}),
    //functions to modify the state
    incrementCounter:()=>set(state=>({newCounter:state.newCounter+1})),
    decrementCounter:()=>set(state=>({newCounter:state.newCounter-1})),
    reset:()=>set({newCounter:0}),
    //function to change newCounter to 500
    reset500:()=>set({newCounter:500}),
    //function to decrement newCounter by 20
    decrementBy20:()=>set(state=>({newCounter:state.newCounter-20}))

})

)