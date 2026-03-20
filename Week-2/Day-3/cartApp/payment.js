import { reduceStock } from './product.js';
import { getCartItems, getCartTotal, clearCart } from './cart.js';
import { applyDiscount } from './discount.js';
  
  // TODO: Implement these functions
  
export function processPayment(paymentMethod, couponCode) {
  // 1. Get cart items and total
    let items=getCartItems()
    let total=getCartTotal()
  // 2. Apply discount if coupon provided
if(couponCode!=null)
{
let discountApp=applyDiscount(total,couponCode,items)

let subTotal = discountApp.finalTotal
// 3. Validate payment method (card/upi/cod)
if(validatePaymentMethod(paymentMethod)==true){
// 4. Process payment (simulate)
console.log("Payment is being processed...")
// 5. Reduce stock for all items
for(let item of items){
reduceStock(item.id,1)
}
// 6. Clear cart
clearCart()
// 7. Generate order summary
const orderId=generateOrderId()

// Return order summary:
// {
//   orderId: ...,
//   items: [...],
//   subtotal: ...,
//   discount: ...,
//   total: ...,
//   paymentMethod: ...,
//   status: 'success/failed',
//   message: '...'
// }

  return {
    "orderId": orderId,
    "items": items,
    "subtotal": subTotal,
    "discount": discountApp.discount,
    "total": total,
    "paymentMethod": paymentMethod,
    status: 'success',
    message: 'Paymnet processed successfully'

  }
}}
return {
    "orderId": orderId,
    "items": items ,
    "subtotal": subTotal,
    "discount": discountApp.discount,
    "total": total,
    "paymentMethod": paymentMethod,
    status: 'failed',
    message: 'Paymnet not processed'

  }

}

export function validatePaymentMethod(method) {
  // Check if method is valid (card/upi/cod)
      const validMethods = ['card', 'upi', 'cod'];
      const valid=validMethods.find(methodObj => methodObj === method)
      if (valid!=null) {
        return true
      return false
}}

function generateOrderId() {
  // Generate random order ID
  return 'ORD' + Date.now();
}