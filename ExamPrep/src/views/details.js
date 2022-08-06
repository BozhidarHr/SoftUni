import {html, render} from "../../node_modules/lit-html/lit-html.js"
import { deleteCar, getCarbyId } from "../api/cars.js"
import { getUserData } from "../api/util.js"

const detailsTemplate = (car, isOwner, onDelete) => html`<!-- Listing Details Page -->
<section id="listing-details">
    <h1>Details</h1>
    <div class="details-info">
        <img src=${car.imageUrl}>
        <hr>
        <ul class="listing-props">
            <li><span>Brand:</span>${car.brand}</li>
            <li><span>Model:</span>${car.model}</li>
            <li><span>Year:</span>${car.year}</li>
            <li><span>Price:</span>${car.price}$</li>
        </ul>

        <p class="description-para">${car.description}</p>

        <div class="listings-buttons">
            
            ${isOwner ? html`<a href="/edit/${car._id}" class="button-list">Edit</a>
            <a @click= ${onDelete} href="#" class="button-list">Delete</a>
            `:""}
        </div>
    </div>
</section>
`



export async function detailsView(ctx) {
    const car = await getCarbyId(ctx.params.id)
    const userData = getUserData()
    const isOwner = userData?.id == car._ownerId
    ctx.render(detailsTemplate(car, isOwner, onDelete))


    async function onDelete() {
        const choice = confirm('are you sure? ')
        if (choice) {
            await deleteCar(ctx.params.id)
            setTimeout(ctx.page.redirect('/alllistings'), 3000)
            
        }
        

    }
}

