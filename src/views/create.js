import { html, render } from '../../node_modules/lit-html/lit-html.js'
import { get } from '../api/api.js'
import { createCar } from '../api/cars.js'
import { getUserData } from '../api/util.js'

const createTemplate = (onSubmit) => html` <!-- Create Listing Page -->
<section id="create-listing">
    <div class="container">
        <form @submit=${onSubmit} id="create-form">
            <h1>Create Car Listing</h1>
            <p>Please fill in this form to create an listing.</p>
            <hr>

            <p>Car Brand</p>
            <input type="text" placeholder="Enter Car Brand" name="brand">

            <p>Car Model</p>
            <input type="text" placeholder="Enter Car Model" name="model">

            <p>Description</p>
            <input type="text" placeholder="Enter Description" name="description">

            <p>Car Year</p>
            <input type="number" placeholder="Enter Car Year" name="year">

            <p>Car Image</p>
            <input type="text" placeholder="Enter Car Image" name="imageUrl">

            <p>Car Price</p>
            <input type="number" placeholder="Enter Car Price" name="price">

            <hr>
            <input type="submit" class="registerbtn" value="Create Listing">
        </form>
    </div>
</section>
`



export function createView(ctx) {
    ctx.render(createTemplate(onSubmit))


async function onSubmit(e){
    e.preventDefault()
    const formData = new FormData(e.target)
    const brand = formData.get("brand")
    const model = formData.get("model")
    const description = formData.get("description")
    const year = Number(formData.get("year"))
    const imageUrl = formData.get("imageUrl")
    const price = formData.get("price")

    const car = {
        brand, 
        model,
        description,
        year:Number(year),
        imageUrl,
        price:(Number(price))
    }

    if (car.brand == "" || car.description == "" || car.model == "" || car.year <= 0 || car.imageUrl == "" || car.price <= 0 || car.year == "" || car.price == ""){
        return alert("all fields are neeed")
    }
    await createCar(car)

    e.target.reset()
    ctx.page.redirect("/alllistings")
}}