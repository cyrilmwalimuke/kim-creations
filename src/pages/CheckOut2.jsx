

import { useState } from "react"
// import {Link} from "react-router-dom"


// import { input } from "@/components/ui/input"
// import { label

//  } from "@/components/ui/label"
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
// import { Textarea } from "@/components/ui/textarea"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { div, div, div, div, div, div } from "@/components/ui/card"
// import { div, div, div, div } from "@/components/ui/tabs"
// import {
//   CreditCard,
//   CheckCircle2,
//   ChevronRight,
//   ChevronLeft,
//   Truck,
//   CreditCardIcon,
//   CheckSquare,
//   ShieldCheck,
// } from "lucide-react"

export default function CheckOut2() {
  // const [activeStep, setActiveStep] = useState("shipping")

  // // In a real app, you would fetch cart data from a state management solution or API
  // const cartItems = [
  //   {
  //     id: "1",
  //     name: "Cozy Winter Hat",
  //     price: "$39.99",
  //     quantity: 1,
  //     color: "Beige",
  //     size: "M",
  //   },
  //   {
  //     id: "2",
  //     name: "Summer Bikini Set",
  //     price: "$59.99",
  //     quantity: 1,
  //     color: "Blue",
  //     size: "S",
  //   },
  // ]

  // const subtotal = "$99.98"
  // const shipping = "$5.00"
  // const total = "$104.98"

  // const handleNext = () => {
  //   if (activeStep === "shipping") {
  //     setActiveStep("payment")
  //   } else if (activeStep === "payment") {
  //     setActiveStep("review")
  //   }
  // }

  // const handleBack = () => {
  //   if (activeStep === "payment") {
  //     setActiveStep("shipping")
  //   } else if (activeStep === "review") {
  //     setActiveStep("payment")
  //   }
  // }

  return (
    <div>hello</div>

//     <div className="container px-4 md:px-6 py-12">
//       <div className="max-w-6xl mx-auto">
//         <h1 className="text-3xl font-bold tracking-tight text-[#8a5a44] mb-8">Checkout</h1>

//         {/* Checkout Progress */}
//         <div className="mb-10">
//           <div className="flex items-center justify-between max-w-2xl mx-auto">
//             <div className="flex flex-col items-center">
//               <div
//                 className={`w-10 h-10 rounded-full flex items-center justify-center ${activeStep === "shipping" || activeStep === "payment" || activeStep === "review" ? "bg-[#8a5a44] text-white" : "bg-gray-200"}`}
//               >
//                 <Truck className="h-5 w-5" />
//               </div>
//               <span
//                 className={`text-sm mt-2 ${activeStep === "shipping" ? "font-medium text-[#8a5a44]" : "text-gray-600"}`}
//               >
//                 Shipping
//               </span>
//             </div>
//             <div
//               className={`flex-1 h-1 mx-2 ${activeStep === "payment" || activeStep === "review" ? "bg-[#8a5a44]" : "bg-gray-200"}`}
//             ></div>
//             <div className="flex flex-col items-center">
//               <div
//                 className={`w-10 h-10 rounded-full flex items-center justify-center ${activeStep === "payment" || activeStep === "review" ? "bg-[#8a5a44] text-white" : "bg-gray-200"}`}
//               >
//                 <CreditCardIcon className="h-5 w-5" />
//               </div>
//               <span
//                 className={`text-sm mt-2 ${activeStep === "payment" ? "font-medium text-[#8a5a44]" : "text-gray-600"}`}
//               >
//                 Payment
//               </span>
//             </div>
//             <div className={`flex-1 h-1 mx-2 ${activeStep === "review" ? "bg-[#8a5a44]" : "bg-gray-200"}`}></div>
//             <div className="flex flex-col items-center">
//               <div
//                 className={`w-10 h-10 rounded-full flex items-center justify-center ${activeStep === "review" ? "bg-[#8a5a44] text-white" : "bg-gray-200"}`}
//               >
//                 <CheckSquare className="h-5 w-5" />
//               </div>
//               <span
//                 className={`text-sm mt-2 ${activeStep === "review" ? "font-medium text-[#8a5a44]" : "text-gray-600"}`}
//               >
//                 Review
//               </span>
//             </div>
//           </div>
//         </div>

//         <div className="grid md:grid-cols-3 gap-8">
//           {/* Checkout Form */}
//           <div className="md:col-span-2">
//             {activeStep === "shipping" && (
//               <div>
//                 <div>
//                   <div>Shipping Information</div>
//                   <div>Enter your shipping details</div>
//                 </div>
//                 <div className="space-y-6">
//                   <div className="grid grid-cols-2 gap-4">
//                     <div className="space-y-2">
//                       <label
//                        htmlFor="first-name">First Name</label
//                       >
//                       <input id="first-name" placeholder="Enter your first name" />
//                     </div>
//                     <div className="space-y-2">
//                       <label
//                        htmlFor="last-name">Last Name</label
//                       >
//                       <input id="last-name" placeholder="Enter your last name" />
//                     </div>
//                   </div>
//                   <div className="space-y-2">
//                     <label
//                      htmlFor="email">Email Address</label
//                     >
//                     <input id="email" type="email" placeholder="Enter your email" />
//                   </div>
//                   <div className="space-y-2">
//                     <label
//                      htmlFor="phone">Phone Number</label
//                     >
//                     <input id="phone" type="tel" placeholder="Enter your phone number" />
//                   </div>
//                   <div className="space-y-2">
//                     <label
//                      htmlFor="address">Street Address</label
//                     >
//                     <input id="address" placeholder="Enter your street address" />
//                   </div>
//                   <div className="grid grid-cols-2 gap-4">
//                     <div className="space-y-2">
//                       <label
//                        htmlFor="city">City</label
//                       >
//                       <input id="city" placeholder="Enter your city" />
//                     </div>
//                     <div className="space-y-2">
//                       <label
//                        htmlFor="state">State/Province</label
//                       >
//                       <Select>
//                         <SelectTrigger id="state">
//                           <SelectValue placeholder="Select state" />
//                         </SelectTrigger>
//                         <SelectContent>
//                           <SelectItem value="al">Alabama</SelectItem>
//                           <SelectItem value="ak">Alaska</SelectItem>
//                           <SelectItem value="az">Arizona</SelectItem>
//                           <SelectItem value="ca">California</SelectItem>
//                           <SelectItem value="co">Colorado</SelectItem>
//                           <SelectItem value="ct">Connecticut</SelectItem>
//                           {/* Add more states as needed */}
//                         </SelectContent>
//                       </Select>
//                     </div>
//                   </div>
//                   <div className="grid grid-cols-2 gap-4">
//                     <div className="space-y-2">
//                       <label
//                        htmlFor="zip">ZIP/Postal Code</label
//                       >
//                       <input id="zip" placeholder="Enter your ZIP code" />
//                     </div>
//                     <div className="space-y-2">
//                       <label
//                        htmlFor="country">Country</label
//                       >
//                       <Select defaultValue="us">
//                         <SelectTrigger id="country">
//                           <SelectValue placeholder="Select country" />
//                         </SelectTrigger>
//                         <SelectContent>
//                           <SelectItem value="us">United States</SelectItem>
//                           <SelectItem value="ca">Canada</SelectItem>
//                           <SelectItem value="uk">United Kingdom</SelectItem>
//                           <SelectItem value="au">Australia</SelectItem>
//                           {/* Add more countries as needed */}
//                         </SelectContent>
//                       </Select>
//                     </div>
//                   </div>
//                   <div className="space-y-2">
//                     <label
//                     >Shipping Method</label
//                     >
//                     <RadioGroup defaultValue="standard" className="space-y-3">
//                       <div className="flex items-center justify-between border rounded-lg p-4">
//                         <div className="flex items-center space-x-3">
//                           <RadioGroupItem value="standard" id="standard" />
//                           <label
//                            htmlFor="standard" className="font-normal cursor-pointer">
//                             Standard Shipping (3-5 business days)
//                           </label
//                           >
//                         </div>
//                         <span className="font-medium">$5.00</span>
//                       </div>
//                       <div className="flex items-center justify-between border rounded-lg p-4">
//                         <div className="flex items-center space-x-3">
//                           <RadioGroupItem value="express" id="express" />
//                           <label
//                            htmlFor="express" className="font-normal cursor-pointer">
//                             Express Shipping (1-2 business days)
//                           </label
//                           >
//                         </div>
//                         <span className="font-medium">$15.00</span>
//                       </div>
//                     </RadioGroup>
//                   </div>
//                 </div>
//                 <div className="flex justify-between">
//                   <Link href="/cart">
//                     <button variant="outline">
//                       <ChevronLeft className="mr-2 h-4 w-4" />
//                       Back to Cart
//                     </button>
//                   </Link>
//                   <button onClick={handleNext} className="bg-[#8a5a44] hover:bg-[#6d4535]">
//                     Continue to Payment
//                     <ChevronRight className="ml-2 h-4 w-4" />
//                   </button>
//                 </div>
//               </div>
//             )}

//             {activeStep === "payment" && (
//               <div>
//                 <div>
//                   <div>Payment Method</div>
//                   <div>Choose your payment method and enter your details</div>
//                 </div>
//                 <div className="space-y-6">
//                   <div defaultValue="credit-card">
//                     <div className="grid w-full grid-cols-2">
//                       <div value="credit-card" className="flex items-center gap-2">
//                         <CreditCard className="h-4 w-4" />
//                         Credit div
//                       </div>
//                       <div value="paypal" className="flex items-center gap-2">
//                         <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                           <path
//                             d="M19.5 8.25H4.5C3.67157 8.25 3 8.92157 3 9.75V18.75C3 19.5784 3.67157 20.25 4.5 20.25H19.5C20.3284 20.25 21 19.5784 21 18.75V9.75C21 8.92157 20.3284 8.25 19.5 8.25Z"
//                             stroke="currentColor"
//                             strokeWidth="1.5"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                           />
//                           <path
//                             d="M7.5 15.75H10.5"
//                             stroke="currentColor"
//                             strokeWidth="1.5"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                           />
//                           <path
//                             d="M16.5 15.75H16.5075"
//                             stroke="currentColor"
//                             strokeWidth="1.5"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                           />
//                           <path
//                             d="M3 10.5L21 10.5"
//                             stroke="currentColor"
//                             strokeWidth="1.5"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                           />
//                         </svg>
//                         PayPal
//                       </div>
//                     </div>
//                     <div value="credit-card" className="space-y-6 mt-6">
//                       <div className="space-y-2">
//                         <label
//                          htmlFor="card-name">Name on div</label
//                         >
//                         <input id="card-name" placeholder="Enter the name on your card" />
//                       </div>
//                       <div className="space-y-2">
//                         <label
//                          htmlFor="card-number">div Number</label
//                         >
//                         <input id="card-number" placeholder="0000 0000 0000 0000" />
//                       </div>
//                       <div className="grid grid-cols-2 gap-4">
//                         <div className="space-y-2">
//                           <label
//                            htmlFor="expiry">Expiration Date</label
//                           >
//                           <input id="expiry" placeholder="MM/YY" />
//                         </div>
//                         <div className="space-y-2">
//                           <label
//                            htmlFor="cvv">CVV</label
//                           >
//                           <input id="cvv" placeholder="123" />
//                         </div>
//                       </div>
//                       <div className="flex items-center space-x-2">
//                         <input type="checkbox" id="save-card" className="rounded border-gray-300" />
//                         <label
//                          htmlFor="save-card" className="text-sm font-normal">
//                           Save this card for future purchases
//                         </label
//                         >
//                       </div>
//                     </div>
//                     <div value="paypal" className="mt-6">
//                       <div className="text-center py-8 space-y-4">
//                         <div className="w-16 h-16 bg-[#f9f4ef] rounded-full flex items-center justify-center mx-auto">
//                           <svg
//                             className="h-8 w-8 text-[#8a5a44]"
//                             viewBox="0 0 24 24"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <path
//                               d="M19.5 8.25H4.5C3.67157 8.25 3 8.92157 3 9.75V18.75C3 19.5784 3.67157 20.25 4.5 20.25H19.5C20.3284 20.25 21 19.5784 21 18.75V9.75C21 8.92157 20.3284 8.25 19.5 8.25Z"
//                               stroke="currentColor"
//                               strokeWidth="1.5"
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                             />
//                             <path
//                               d="M7.5 15.75H10.5"
//                               stroke="currentColor"
//                               strokeWidth="1.5"
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                             />
//                             <path
//                               d="M16.5 15.75H16.5075"
//                               stroke="currentColor"
//                               strokeWidth="1.5"
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                             />
//                             <path
//                               d="M3 10.5L21 10.5"
//                               stroke="currentColor"
//                               strokeWidth="1.5"
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                             />
//                           </svg>
//                         </div>
//                         <p className="text-gray-600">
//                           You will be redirected to PayPal to complete your purchase securely.
//                         </p>
//                         <button className="bg-[#0070ba] hover:bg-[#005ea6]">Continue with PayPal</button>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="border-t pt-6">
//                     <div className="space-y-2">
//                     <label htmlFor="billing-address" className="block font-medium">
//   Billing Address
// </label>
// <div className="space-y-3">
//   <div className="flex items-center space-x-3">
//     <input type="radio" id="same" name="billing-address" value="same" defaultChecked />
//     <label htmlFor="same" className="font-normal cursor-pointer">
//       Same as shipping address
//     </label>
//   </div>
//   <div className="flex items-center space-x-3">
//     <input type="radio" id="different" name="billing-address" value="different" />
//     <label htmlFor="different" className="font-normal cursor-pointer">
//       Use a different billing address
//     </label>
//   </div>
// </div>

//                     </div>
//                   </div>
//                 </div>
//                 <div className="flex justify-between">
//                   <button variant="outline" onClick={handleBack}>
//                     <ChevronLeft className="mr-2 h-4 w-4" />
//                     Back to Shipping
//                   </button>
//                   <button onClick={handleNext} className="bg-[#8a5a44] hover:bg-[#6d4535]">
//                     Review Order
//                     <ChevronRight className="ml-2 h-4 w-4" />
//                   </button>
//                 </div>
//               </div>
//             )}

//             {activeStep === "review" && (
//               <div>
//                 <div>
//                   <div>Review Your Order</div>
//                   <div>Please review your order details before placing your order</div>
//                 </div>
//                 <div className="space-y-6">
//                   <div>
//                     <h3 className="font-medium text-lg mb-3">Items in Your Order</h3>
//                     <div className="space-y-4">
//                       {cartItems.map((item) => (
//                         <div key={item.id} className="flex gap-4 pb-4 border-b">
//                           <div className="w-20 h-20 rounded-md overflow-hidden flex-shrink-0 bg-[#f9f4ef]">
//                             <img
//                               src="/placeholder.svg?height=80&width=80"
//                               width={80}
//                               height={80}
//                               alt={item.name}
//                               className="w-full h-full object-cover"
//                             />
//                           </div>
//                           <div className="flex-1">
//                             <h4 className="font-medium">{item.name}</h4>
//                             <p className="text-sm text-gray-600">
//                               Color: {item.color}, Size: {item.size}
//                             </p>
//                             <div className="flex justify-between mt-2">
//                               <span className="text-sm">Qty: {item.quantity}</span>
//                               <span className="font-medium">{item.price}</span>
//                             </div>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                   <div className="grid md:grid-cols-2 gap-6">
//                     <div>
//                       <h3 className="font-medium text-lg mb-3">Shipping Information</h3>
//                       <div className="bg-[#f9f4ef] p-4 rounded-lg">
//                         <p className="font-medium">John Doe</p>
//                         <p className="text-gray-600">123 Main Street</p>
//                         <p className="text-gray-600">Apt 4B</p>
//                         <p className="text-gray-600">New York, NY 10001</p>
//                         <p className="text-gray-600">United States</p>
//                         <p className="text-gray-600 mt-2">johndoe@example.com</p>
//                         <p className="text-gray-600">(123) 456-7890</p>
//                       </div>
//                     </div>
//                     <div>
//                       <h3 className="font-medium text-lg mb-3">Payment Method</h3>
//                       <div className="bg-[#f9f4ef] p-4 rounded-lg">
//                         <div className="flex items-center gap-2">
//                           <CreditCard className="h-5 w-5 text-[#8a5a44]" />
//                           <span className="font-medium">Credit div</span>
//                         </div>
//                         <p className="text-gray-600 mt-2">Visa ending in 4242</p>
//                         <p className="text-gray-600">Expires 12/25</p>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="space-y-2">
//                     <label htmlFor="order-notes">Order Notes (Optional)</label>
//                     <textarea id="order-notes" placeholder="Add any special instructions or notes about your order" />
//                   </div>
//                   <div className="flex items-center space-x-2">
//                     <input type="checkbox" id="terms" className="rounded border-gray-300" />
//                     <label
//                      htmlFor="terms" className="text-sm font-normal">
//                       I agree to the{" "}
//                       <Link href="/terms" className="text-[#8a5a44] underline">
//                         Terms and Conditions
//                       </Link>{" "}
//                       and{" "}
//                       <Link href="/privacy" className="text-[#8a5a44] underline">
//                         Privacy Policy
//                       </Link>
//                     </label
//                     >
//                   </div>
//                 </div>
//                 <div className="flex justify-between">
//                   <button variant="outline" onClick={handleBack}>
//                     <ChevronLeft className="mr-2 h-4 w-4" />
//                     Back to Payment
//                   </button>
//                   <button className="bg-[#8a5a44] hover:bg-[#6d4535]">
//                     Place Order
//                     <CheckCircle2 className="ml-2 h-4 w-4" />
//                   </button>
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Order Summary */}
//           <div>
//             <div className="sticky top-24">
//               <div>
//                 <div>
//                   <div>Order Summary</div>
//                 </div>
//                 <div className="space-y-4">
//                   {cartItems.map((item) => (
//                     <div key={item.id} className="flex justify-between text-sm pb-2 border-b">
//                       <span>
//                         {item.name} × {item.quantity}
//                       </span>
//                       <span>{item.price}</span>
//                     </div>
//                   ))}
//                   <div className="space-y-2 pt-2">
//                     <div className="flex justify-between">
//                       <span className="text-gray-600">Subtotal</span>
//                       <span>{subtotal}</span>
//                     </div>
//                     <div className="flex justify-between">
//                       <span className="text-gray-600">Shipping</span>
//                       <span>{shipping}</span>
//                     </div>
//                     <div className="border-t pt-2 mt-2">
//                       <div className="flex justify-between font-bold">
//                         <span>Total</span>
//                         <span>{total}</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="flex flex-col space-y-4">
//                   <div className="w-full">
//                     <div className="relative">
//                       <input placeholder="Enter coupon code" />
//                       <button className="absolute right-0 top-0 rounded-l-none bg-[#8a5a44] hover:bg-[#6d4535]">
//                         Apply
//                       </button>
//                     </div>
//                   </div>
//                   <div className="flex items-center gap-2 text-sm text-gray-600 w-full">
//                     <ShieldCheck className="h-4 w-4 text-[#8a5a44]" />
//                     <span>Secure checkout. Your data is protected.</span>
//                   </div>
//                 </div>
//               </div>
//               <div className="flex items-center justify-center gap-4 mt-6">
//                 <img src="/banner1.jpg" alt="Visa" className="h-8" />
//                 <img src="/banner1.jpg" alt="Mastercard" className="h-8" />
//                 <img src="/banner1.jpg" alt="American Express" className="h-8" />
//                 <img src="/banner1.jpg" alt="PayPal" className="h-8" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
  )
}

