import businesses from "./data.js"
// Array to contain all the big spenders
const bigSpenders = businesses.filter(business =>  business.orders.some(element => element > 9000))

console.log(bigSpenders)