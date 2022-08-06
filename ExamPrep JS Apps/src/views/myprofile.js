import {html, render} from '../../node_modules/lit-html/lit-html.js'
import { getCarsbyuser } from '../api/cars.js'

import { getUserData } from '../api/util.js'


const mybooksTemplate = (cars) => html` 
<!-- My Listings Page -->
<section id="my-listings">
    <h1>My car listings</h1>
    <div class="listings">
        ${cars.length == 0 ? html`<p class="no-cars"> You haven't listed any cars yet.</p>`: html`${cars.map(carcard)}`}
    </div>
</section>

`


const carcard = (car) => html`<div class="listing">
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
</div>`


export async function myprofileView(ctx){
    const userData = getUserData()
    const cars = await getCarsbyuser(userData.id)
    ctx.render(mybooksTemplate(cars))  

}
