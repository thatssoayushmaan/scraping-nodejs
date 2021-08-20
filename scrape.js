const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: true })

const args = process.argv[2]
const url = args[0] 
const minPrice = args[1]
const priceId = args[2]
 

async function checkPrice(){
    try {
        const priceString = await nightmare.goto(url)
        .wait('#priceblock_dealprice')
        .evaluate(() => document.getElementById(priceId).innerText)
        .end()
    
    const priceNumber = parseFloat(priceString.replace('₹', ''))
    
    if(priceNumber < minPrice){
        console.log("Cheap")
    } else{
        console.log("Expensive")
    }
    } catch (error) {
        console.log(error.message)
    }
}

checkPrice()