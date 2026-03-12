//Exercise-1

//Create a new array moreFruits
let moreFruits=["mango","apple","banana"]
                              
//Copy all fruits from fruits
// Add "orange" at the end using spread
let copyFruits=[...moreFruits,"orange"]

// Print both arrays
console.log(moreFruits)
console.log(copyFruits)


//Exercise-2

let user = {
    name: "Ravi",
    city: "Hyderabad"
};


//Exercise-2
//Create a new object updatedUser
//Copy all properties from user
//Add a new property age: 25
updatedUser={...user,age:25}
//Print both objects
console.log(user)
console.log(updatedUser)


//Exercise-3

//Write a function that receives any no of arguments and return their sum
function findSum(...a) //rest parameter
{
    let sum=a.reduce((acc,ele)=>acc+ele)
    return sum
}

console.log(findSum(10,20,30,40,70))
