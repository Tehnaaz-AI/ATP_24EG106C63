import { getProductById, checkStock } from './product.js';
                          
 let cartItems = [];
                          
  // TODO: Implement these functions
                          
export function addToCart(productId, quantity) {
// 1. Get product details
let item=getProductById(productId)
// 2. Check stock availability
let stk=checkStock(item.id,quantity)
// 3. Check if product already in cart
//    - If yes, update quantity
for(let cartObj of cartItems){
{
  if(cartObj.id==item.id){
    item.stock+=1
    let index=cartItems.findIndex(cartObj=>cartObj.id==productId)
    cartItems.splice(index,1,item)
    return "success"
    
  
}}}

//    - If no, add new item
cartItems.push(item)
// 4. Return success/error message
return "success"
}
                          
export function removeFromCart(productId) {
  // Remove product from cart
  for(let i=0;i<cartItems.length;i++){
    if(cartItems[i].id==productId){
      let product=cartItems[i].name
      cartItems.splice(i,1)
      return `${product} removed`
    }
}}
  

                          
export function updateQuantity(productId, newQuantity) {
  // Update quantity of product in cart
  for(let i=0;i<cartItems.length;i++){
    if(cartItems[i].id==productId && checkStock(productId,newQuantity)){
      cartItems[i].stock=newQuantity
      return cartItems[i]
    }
  // Check stock before updating
}}
                          
export function getCartItems() {
// Return all cart items with product details
return cartItems
}
                          
export function getCartTotal() {
  // Calculate total price of all items in cart
  let totalPrice=0
  for(let i=0;i<cartItems.length;i++){
    totalPrice+=cartItems[i].price*cartItems[i].stock
  }
  // Return total
  return totalPrice }
                          
export function clearCart() {
  // Empty the cart
  cartItems=[]
 }
