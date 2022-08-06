plants = [{
    quantity: 5,
    name: "john", 
    stuff: "item"
},{quantity: 3,
    name: "mike", 
    stuff: "handle"}]
let name = "mike"
const plantsindex = plants.findIndex(p => p.name == name)
console.log(plantsindex)

let arrayofstuff = plants.map(p => p.stuff).sort((a,b) => a.localeCompare(b))
console.log(arrayofstuff)

let printstuffname = plants.map(p => `${p.stuff}: ${p.name}`)
let end = printstuffname.join(", ")
console.log(end)