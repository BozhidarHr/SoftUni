
class Garden {
    constructor(spaceavailable) {
        this.spaceavailable = spaceavailable
        this.plants = []
        this.storage = []
    }
    addPlant(plantname, spacerequired) {
        plantname = String(plantname)
        spacerequired = Number(spacerequired)
        if (this.spaceavailable < spacerequired) {
            throw new Error("Not enough space in the garden.")
        } else {
            let plant = {
                plantname: plantname,
                spacerequired: spacerequired,
                ripe: false,
                quantity: 0
            }
            this.plants.push(plant)
            this.spaceavailable -= spacerequired
            return (`The ${plantname} has been successfully planted in the garden.`)
        }
    }
    ripenPlant(plantname, quantity) {
        quantity = Number(quantity)
        for (let plant of this.plants) {
            if (plant.plantname == plantname) {
                if (plant.ripe == true){
                    throw new Error(`The ${plantname} is already ripe.`)
                } else{
                    plant.ripe = true
                }
                if (quantity <= 0){
                    throw new Error("The quantity cannot be zero or negative.")
                }else{
                    plant.quantity += quantity
                    if (plant.quantity == 1) {
                        return `${plant.quantity} ${plant.plantname} has successfully ripened.`
                    }
                    else {
                        return `${plant.quantity} ${plant.plantname}s have successfully ripened.`
                    }
                }
            }
                
            
        }throw new Error(`There is no ${plantname} in the garden.`)

    }
    harvestPlant(plantname){
        for (let plant of this.plants){
            if (plant.plantname == plantname){
                if (plant.ripe == false){
                    throw new Error(`The ${plantname} cannot be harvested before it is ripe.`)
                }else{
                    this.spaceavailable += plant.spacerequired
                    let name = plant.plantname
                    let qua = plant.quantity
                    this.storage.push({name:name,quantity:qua})
                    let index = this.plants.indexOf(plant)
                    this.plants.splice(index,1)
                    return(`The ${plant.plantname} has been successfully harvested.`)
                }
            }
        }throw new Error(`There is no ${plantname} in the garden.`)
    }
    generateReport(){
        let lastresult = ""
        lastresult += `The garden has ${this.spaceavailable} free space left.` +'\n'
        let endresult = ""
        let plantnamesarray = this.plants.map(p => p.plantname).sort((a,b) => a.localeCompare(b))
        for (let i = 0; i < this.plants.length; i++){
            endresult += plantnamesarray[i] + ", "
        }
        lastresult +=`Plants in the garden: ${endresult.slice(0,-2)}` +'\n'
        if (this.storage.length == 0){
            lastresult += "Plants in storage: The storage is empty."
        }else{
            let endresultttt = ""
            for (let i = 0; i < this.storage.length; i++){
                endresultttt +=`${this.storage[i].name} (${this.storage[i].quantity})`
                lastresult += `Plants in storage: ${endresultttt}`
        }
    }
return lastresult 
}}
const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());
'The garden has 220 free space left.\nPlants in the garden: apple, raspberry\nPlants in storage: orange(1)'
'The garden has 220 free space left.\nPlants in the garden: apple, raspberry\nPlants in storage: orange (1)'