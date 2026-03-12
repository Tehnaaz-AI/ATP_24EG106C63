
//Exercise-1
const user = {
id: 101,
name: "Ravi",
preferences: {
    theme: "dark",
    language: "en"
}
};
// Create a shallow copy of user
let copyUser={...user}
//     2. Change:

//i. name in the copied object
copyUser.name="Sonu"

//ii. preferences.theme in the copied object
copyUser.preferences.theme="light"

//iii .Log both original and copied objects
console.log(user)
console.log(copyUser)

//iv. Observe what changes and what doesn’t
//As it is a shallow copy both the objects change theme but not name 
//as name is top level property and preferences is not. 


//Exercise-2
const order = {
orderId: "ORD1001",
customer: {
name: "Anita",
address: {
    city: "Hyderabad",
    pincode: 500085
}
},
items: [
{ product: "Laptop", price: 70000 }
]
};

// 1. Create a deep copy of order
copyOrder=structuredClone(order)
// 2. Modify in copied object:
//     i. customer.address.city
        copyOrder.customer.address.city ='Chennai'
//     ii. items[0].price
        copyOrder.items[0].price=80000
//     iii. Verify original object remains unchanged
    console.log(order)
    console.log(copyOrder)