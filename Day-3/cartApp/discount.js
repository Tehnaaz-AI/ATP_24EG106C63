const coupons = {
'WELCOME10': { type: 'percentage', value: 10, minAmount: 1000 },
'FLAT500': { type: 'flat', value: 500, minAmount: 5000 },
'ELECTRONICS20': { type: 'percentage', value: 20, minAmount: 10000, category: 'electronics' }
};

// TODO: Implement these functions

export function validateCoupon(couponCode, cartTotal, cartItems) {
// 1. Check if coupon exists
  const coupon = coupons[couponCode];

  if (!coupon) {
    return { valid: false, message: "Invalid coupon code." };
  }

  // 2. Check minimum amount requirement
      if (cartTotal < coupon.minAmount) {
    return { 
      valid: false, 
      message: `Minimum purchase amount is ₹${coupon.minAmount}.` 
    };
  }
  // 3. Check category requirement (if any)
  if (coupon.category) {
    const hasRequiredCategory = cartItems.find(
      item => item.category === coupon.category
    );

    if (!hasRequiredCategory) {
      return { 
        valid: false, 
        message: `Coupon valid only for ${coupon.category} items.` 
      };
    }
  }

  return { valid: true, message: "Coupon applied successfully!" };
  // Return { valid: true/false, message: '...' }
}

export function calculateDiscount(couponCode, cartTotal) {
// Calculate discount amount based on coupon type
  let discountAmt=0
  let coupon=coupons[couponCode]
  if (!coupon) {
    return 0; // invalid coupon = no discount
  }
  if (coupon.type === 'percentage') {
    discountAmt = (cartTotal * coupon.value) / 100;
  } else if (coupon.type === 'flat') {
    discountAmt = coupons[coupon].value;
  }
// Return discount amount
return discountAmt
}

export function applyDiscount(cartTotal, couponCode, cartItems) {
// 1. Validate coupon
let valid =validateCoupon(couponCode,cartTotal,cartItems).valid
// 2. If valid, calculate discount
let discountAmt=calculateDiscount(couponCode, cartTotal)
if(valid==true){
  let finalAmt=cartTotal-discountAmt
  
// 3. Return final amount and discount details
return { 
  originalTotal: cartTotal, 
  discount: discountAmt, 
  finalTotal: finalAmt,
  message: 'Discount Applied'
}
}
}

