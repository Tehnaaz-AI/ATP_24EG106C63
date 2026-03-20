/*1.Exam portal simulator:
-----------------------------
When a student submits an exam:

Immediately show: “Exam submitted successfully”
*/
console.log("Exam submitted successfully")
// After 2 seconds → show: “Evaluating answers…”
setTimeout(()=>{
    console.log("Evaluating answers…")
},2000)
// After 4 seconds → show: “Result: Pass”
setTimeout(()=>{
    console.log("Result: Pass")
},4000)


// 2.OTP Countdown Simulator (Console App)
// ------------------------------------

// Simulate OTP sending flow in Node.js:

// Show “OTP Sent Successfully”
console.log("OTP Sent Successfully")

// Start 10-second countdown
let countDown=10
let intervelId=setInterval(()=>{
    if(countDown>0){
console.log(v)
countDown-=1}
else {
    console.log("Resend OTP?")
    clearInterval(intervelId)}}
,1000)


// Allow resend only after countdown ends