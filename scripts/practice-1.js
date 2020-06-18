
const bigSpenders = businesses.filter(business => {
    
    for(let order of business.orders) {
        if(order > 9000) {
           return true 
        }
    }
})

console.log(bigSpenders)