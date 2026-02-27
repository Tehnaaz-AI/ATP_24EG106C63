import { getProductById, checkStock } from './product.js';
                          
 let cartItems = [];
                          
  // TODO: Implement these functions
                          
export function addToCart(productId, quantity) {
// 1. Get product details
let item=getProductById(productId)
// 2. Check stock availability
checkStock(quantity)
// 3. Check if product already in cart
if(item in cartItems)
  item.stock+=1
cartItems.push(item)
//    - If yes, update quantity
//    - If no, add new item
// 4. Return success/error message
return "success"
}
                          
export function removeFromCart(productId) {
  // Remove product from cart
  cartItems.map(cartObj=>{
    if(cartItems.id===productId)
    delete cartObj
})
}
                          
export function updateQuantity(productId, newQuantity) {
                            // Update quantity of product in cart
                            for (cartObj of cartItems)
                            {
                              if(cartObj.id===productId)
                                console.log(cartObj.stock)
                                cartObj.stock+=1
                            }
                            // Check stock before updating
                          }
                          
export function getCartItems() {
                            // Return all cart items with product details
                            return cartItems
                          }
                          
export function getCartTotal() {
                            // Calculate total price of all items in cart
                            const re
                            // Return total
                          }
                          
export function clearCart() {
                            // Empty the cart
 }
