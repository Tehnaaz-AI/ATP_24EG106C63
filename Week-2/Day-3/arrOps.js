/* Assignment 1: Daily Temperature Analyzer
----------------------------------------
Scenario : You are analyzing daily temperatures recorded by a weather app.

Test data:
const temperatures = [32, 35, 28, 40, 38, 30, 42];

Tasks:
    1. filter() temperatures above 35
    2. map() to convert all temperatures from Celsius → Fahrenheit
    3. reduce() to calculate average temperature
    4. find() first temperature above 40
    5. findIndex() of temperature 28

*/

const temperatures = [32, 35, 28, 40, 38, 30, 42];
// filter() temperatures above 35
let res1=temperatures.filter(element=> element>35)

//map() to convert all temperatures from Celsius → Fahrenheit
let res2=temperatures.map(element=>element*1.8+32)

//reduce() to calculate average temperature
let res3=(temperatures.reduce((acc,ele)=>
{
    return acc+ele
}))/temperatures.length


//find() first temperature above 40
let res4=temperatures.find(element=>element>40)
console.log("\n Assignments-1\n")

console.log(res1)
console.log(res2)
console.log(res3)
console.log(res4)









/*Assignment 2: Online Course Name Processor
------------------------------------------
Scenario : You are preparing a course list for display on a website.

Test data:
const courses = ["javascript", "react", "node", "mongodb", "express"];


Tasks:
    1. filter() courses with name length > 5
    2. map() to convert course names to uppercase
    3. reduce() to generate a single string:
              "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"

    4. find() the course "react"
    5. findIndex() of "node"
*/
const courses = ["javascript", "react", "node", "mongodb", "express"];

//filter() courses with name length > 5
res1=courses.filter(elements=> elements.length>5)

//map() to convert course names to uppercase
res2=courses.map(elements=> elements.toUpperCase())

//reduce() to generate a single string: "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"
res3=courses.reduce((acc,ele)=> (acc+ele+" | ").toUpperCase())
//find() the course "react"
res4=courses.find(element=> element=='react')

//findIndex() of "node"
res5=courses.findIndex(element=>element=='node')

console.log("\n Assignments-2 \n")
console.log(res1)
console.log(res2)
console.log(res3)
console.log(res4)
console.log(res5)


/* Assignment 3: Student Marks List
--------------------------------
Scenario : You receive marks from an exam system.

Test data:
const marks = [78, 92, 35, 88, 40, 67];

Tasks:
    1. filter() marks ≥ 40 (pass marks)
    2. map() to add 5 grace marks to each student
    3. reduce() to find highest mark
    4. find() first mark below 40
    5. findIndex() of mark 92
*/

const marks = [78, 92, 35, 88, 40, 67];

//filter() marks ≥ 40 (pass marks)
res1=marks.filter(elements=>elements>40)

//map() to add 5 grace marks to each student
res2=marks.map(elements=>elements+5)

//reduce() to find highest mark
res3=marks.reduce((acc,ele)=> acc>ele ?  acc:ele)

//find() first mark below 40
res4=marks.find(element=> element<40)

//findIndex() of mark 92
res4=marks.findIndex(element=> element==90)


console.log("\n Assignments-3\n")
console.log(res1)
console.log(res2)
console.log(res3)
console.log(res4)
console.log(res5)


