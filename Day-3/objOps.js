/* ASSIGNMENT 1:
-------------
You are building a shopping cart summary for an e-commerce website.

Test Data : 
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

Tasks:
    1. Use filter() to get only inStock products
    2. Use map() to create a new array with:  { name, totalPrice }
    3. Use reduce() to calculate grand total cart value
    4. Use find() to get details of "Mouse"
    5. Use findIndex() to find the position of "Keyboard"
*/

const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

//Use filter() to get only inStock products
res1=cart.filter(cartObj=>cartObj.inStock=true)

//Use map() to create a new array with:  { name, totalPrice }
res2=cart.map(cartObj=>[cartObj.name,cartObj.price*cartObj.quantity])

//Use reduce() to calculate grand total cart value
res3=cart.reduce((acc,cartObj)=>acc+cartObj.price*cartObj.quantity,0)

//Use find() to get details of "Mouse"
res4=cart.find(cartObj=>cartObj.name==="Mouse")

//Use findIndex() to find the position of "Keyboard"
res5=cart.findIndex(cartObj=>cartObj.name==="Keyboard")

console.log("--------------------------------------------------------------")
console.log("---Assignments-1---")
console.log(res1)
console.log(res2)
console.log(res3)
console.log(res4)
console.log(res5)



/*
ASSIGNMENT 2:
-------------
Student Performance Dashboard

You are working on a college result analysis system.

Test Data:
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

Tasks:
    1. filter() students who passed (marks ≥ 40)
    2. map() to add a grade field
              ≥90 → A
              ≥75 → B
              ≥60 → C
              else → D

   3. reduce() to calculate average marks
   4. find() the student who scored 92
   5. findIndex() of student "Kiran"
*/

const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];
console.log(students)

//filter() students who passed (marks ≥ 40)
res1=students.filter(stuObj=>stuObj.marks>=40)

/*map() to add a grade field
              ≥90 → A
              ≥75 → B
              ≥60 → C
              else → D
*/
res2=students.map(stuObj=>
    {
        if(stuObj.marks>=90)
        return stuObj.grade="A"
        else if(stuObj.marks>=75)
        return stuObj.grade="B"
        else if(stuObj.marks>=60)
        return stuObj.grade="C"
        else 
        return stuObj.grade="B"
    })


//reduce() to calculate average marks
res3=(students.reduce((acc,stuObj)=>
{
    return acc+stuObj.marks
},0)/students.length)

//find() the student who scored 92
res4=students.find(stuObj=>stuObj.marks==92)

//findIndex() of student "Kiran"
res5=students.findIndex(stuObj=>stuObj.name=="Kiran")


console.log("--------------------------------------------------------------")
console.log("---Assignments-2 ---")
console.log(res1)
console.log(res2)
console.log(res3)
console.log(res4)
console.log(res5)

/*
ASSIGNMENT 3:
-------------
Employee Payroll Processor

You are building a salary processing module in a company HR app.

Test data:
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

Tasks:
    1. filter() employees from IT department
    2. map() to add:
            netSalary = salary + 10% bonus

    3. reduce() to calculate total salary payout
    4. find() employee with salary 30000
    5. findIndex() of employee "Neha"
*/


const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

//filter() employees from IT department
res1=employees.filter(empObj=>empObj.department=="IT")

//map() to add:
//netSalary = salary + 10% bonus
res2=employees.map(empObj=>empObj.netSalary=empObj.salary+(0.1*empObj.salary))

//reduce() to calculate total salary payout
res3=employees.reduce((acc,empObj)=>acc+empObj.salary,0)

//find() employee with salary 30000
res4=employees.find(empObj=>empObj.salary==30000)


//findIndex() of employee "Neha"
res5=employees.findIndex(empObj=>empObj.name=="Neha")

console.log("--------------------------------------------------------------")
console.log("---Assignments-3---")
console.log(res1)
console.log(res2)
console.log(res3)
console.log(res4)
console.log(res5)







/*
ASSIGNMENT 4: 
------------
Movie Streaming Platform

You are working on a movie recommendation system.

Test data:
const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];


Tasks:
    1. filter() only "Sci-Fi" movies
    2. map() to return:
            "Inception (8.8)"

    3. reduce() to find average movie rating
    4. find() movie "Joker"
    5. findIndex() of "Avengers"
*/

const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];

//filter() only "Sci-Fi" movies
res1=movies.filter(movObj=>movObj.genre=="Sci-Fi")

//map() to return: "Inception (8.8)"
res2=movies.map(movObj=>{
  if(movObj.title==="Inception")
    return `${movObj.title} (${movObj.rating})`
})

//reduce() to find average movie rating
res3=movies.reduce((acc,movObj)=>acc+movObj.rating,0)

//find() movie "Joker"
res4=movies.find(movObj=>movObj.title=="Joker")


//findIndex() of "Avengers"
res5=movies.findIndex(movObj=>movObj.title==="Avengers")



console.log("--------------------------------------------------------------")
console.log("---Assignments-4---")
console.log(res1)
console.log(res2)
console.log(res3)
console.log(res4)
console.log(res5)



/*
ASSIGNMENT 5: 
-------------
Bank Transaction Analyzer

You are building a bank statement summary.

Test data:
const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];


Tasks:
    1. filter() all credit transactions
    2. map() to extract only transaction amounts
    3. reduce() to calculate final account balance
    4. find() the first debit transaction
    5. findIndex() of transaction with amount 10000
*/

const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];

//filter() all credit transactions
res1=transactions.filter(tranObj=>tranObj.type==="credit")

//map() to extract only transaction amounts
res2=transactions.map(tranObj=>tranObj.amount)

//  reduce() to calculate final account balance
res3=transactions.reduce((acc,tranObj)=>{
  if(tranObj.type==="credit")
    return acc+tranObj.amount
  return acc-tranObj.amount
},0)

// find() the first debit transaction
res4=transactions.find(tranObj=>tranObj.type==="debit")

// findIndex() of transaction with amount 10000
res5=transactions.findIndex(tranObj=>tranObj.amount==10000)

console.log("--------------------------------------------------------------")
console.log("---Assignments-5---")
console.log(res1)
console.log(res2)
console.log(res3)
console.log(res4)
console.log(res5)