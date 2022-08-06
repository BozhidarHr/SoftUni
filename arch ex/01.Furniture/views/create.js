import { html, render } from "./node_modules/lit-html/lit-html.js"
import * as api from "../api.js"
import page from "../node_modules/page/page.mjs"

const createTemplate = () => html`
<div class="row space-top">
    <div class="col-md-12">
        <h1>Create New Furniture</h1>
        <p>Please fill all fields.</p>
    </div>
</div>
<form @submit=${validationForm}>
    <div class="row space-top">
        <div class="col-md-4">
            <div class="form-group">
                <label class="form-control-label" for="new-make">Make</label>
                <input class="form-control valid" id="new-make" type="text" name="make">
            </div>
            <div class="form-group has-success">
                <label class="form-control-label" for="new-model">Model</label>
                <input class="form-control is-valid" id="new-model" type="text" name="model">
            </div>
            <div class="form-group has-danger">
                <label class="form-control-label" for="new-year">Year</label>
                <input class="form-control is-invalid" id="new-year" type="number" name="year">
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-description">Description</label>
                <input class="form-control" id="new-description" type="text" name="description">
            </div>
        </div>
        <div class="col-md-4">
            <div class="form-group">
                <label class="form-control-label" for="new-price">Price</label>
                <input class="form-control" id="new-price" type="number" name="price">
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-image">Image</label>
                <input class="form-control" id="new-image" type="text" name="img">
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-material">Material (optional)</label>
                <input class="form-control" id="new-material" type="text" name="material">
            </div>
            <input type="submit" class="btn btn-primary" value="Create" />
        </div>
    </div>
</form>`

data = api.get()

function validationForm() {
    e.preventDefault()
    let formdata = new FormData(e.currentTarget)
    let make = formdata.get("make")
    if (make.length >= 4) {
        classgiver(make, true)
    }
    let model = formdata.get("model")
    if (model.length >= 4) {
        classgiver(model, true)
    }
    let year = formdata.get("year")
    if (1950 < Number(year) < 2050) {
        classgiver(year, true)
    }
    let description = formdata.get("description")
    if (description.length > 10) {
        classgiver(description, true)
    }
    let price = formdata.get("price")
    if (price > 0) {
        classgiver(price, true)
    }
    let img = formdata.get("img")
    if (img != "") {
        classgiver(img, true)
    }
    if (invalids.length == 0){
        data = {
            // make:make value ? 
            make:make,
            model:model,
            year:year,
            description:description,
            price:price,
            img:img,
            material:material
        }
        api.post("http://localhost:3030/data/catalog", data)
        page.redirect("/dashboard")
        
    }
}
let invalids = []
function classgiver(element, bool = false) {
    if (bool == true) {
        element.classList.add("is-valid")
    } else {
        element.classList.add("is-invalid")
        invalids.push(element)
    }
}

export const createView = (ctx) => render(createTemplate(), document.querySelector(".container"))