import {html, render} from "../../node_modules/lit-html/lit-html.js"
import { deleteCar, getCarbyId, getCarsbySearch } from "../api/cars.js"


const byYearTemplate = (rendering) => html`
<!-- Search Page -->
<section id="search-cars">
    <h1>Filter by year</h1>

    <div class="container">
        <input id="search-input" type="text" name="search" placeholder="Enter desired production year">
        <button @click=${rendering} class="button-list">Search</button>
    </div>
    </section>
`
    const newtemplate = (cars) => html`<h2>Results:</h2>
    <div class="listings">
${cars.length == 0 ? html`<p class="no-cars"> No results.</p>`: cars.map(carscard)}
        
    </div>
`


 async function rendering(){
    const querys = document.getElementById("search-input")
    const cars = await getCarsbySearch(querys.value)
    render(newtemplate(cars), document.getElementById("search-cars"))}
    
export async function byYearView(ctx) {
    ctx.render(byYearTemplate(rendering))

}


const carscard = (car) => html `<div class="listing">
<div class="preview">
    <img src=${car.imageUrl}>
</div>
<h2>${car.brand} ${car.model}</h2>
<div class="info">
    <div class="data-info">
        <h3>Year: ${car.year}</h3>
        <h3>Price: ${car.price} $</h3>
    </div>
    <div class="data-buttons">
        <a href="/details/${car._id}" class="button-carDetails">Details</a>
    </div>
</div>
</div>
`
