import { html, render } from '../../node_modules/lit-html/lit-html.js'
import { getCarbyId, updateCar } from '../api/cars.js'


const editTemplate = (car, onSubmit) => html`
<!-- Edit Listing Page -->
<section id="edit-listing">
    <div class="container">

        <form @submit = ${onSubmit}id="edit-form">
            <h1>Edit Car Listing</h1>
            <p>Please fill in this form to edit an listing.</p>
            <hr>

            <p>Car Brand</p>
            <input type="text" placeholder="Enter Car Brand" name="brand" value="${car.brand}">

            <p>Car Model</p>
            <input type="text" placeholder="Enter Car Model" name="model" value="${car.model}">

            <p>Description</p>
            <input type="text" placeholder="Enter Description" name="description" value="${car.description}">

            <p>Car Year</p>
            <input type="number" placeholder="Enter Car Year" name="year" value="${car.year}">

            <p>Car Image</p>
            <input type="text" placeholder="Enter Car Image" name="imageUrl" value="${car.imageUrl}">

            <p>Car Price</p>
            <input type="number" placeholder="Enter Car Price" name="price" value="${car.price}">

            <hr>
            <input type="submit" class="registerbtn" value="Edit Listing">
        </form>
    </div>
</section>`



export async function editView(ctx) {
    const car = await getCarbyId(ctx.params.id)

    ctx.render(editTemplate(car, onSubmit))

    async function onSubmit(e) {
        e.preventDefault()
        const formData = new FormData(e.target)
        const brand = formData.get("brand")
        const model = formData.get("model")
        const description = formData.get("description")
        const year = formData.get("year")
        const imageUrl = formData.get("imageUrl")
        const price = formData.get("price")


        const car = {
            brand,
            model,
            description,
            year:Number(year),
            imageUrl,
            price:Number(price)
        }
        if (car.brand == "" || car.description == "" || car.model == "" || car.year <= 0 || car.imageUrl == "" || car.price <= 0 || car.year == "" || car.price == ""){
            return alert("all fields are neeed")
        }
        await updateCar(ctx.params.id, car)

        e.target.reset()
        ctx.page.redirect("/details/" + ctx.params.id)
    }

}
