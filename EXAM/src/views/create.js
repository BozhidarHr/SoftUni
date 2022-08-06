import { html, render } from '../../node_modules/lit-html/lit-html.js'
import { createanOffer } from '../api/offersreq.js'

const createTemplate = (Submitting) => html`  <!-- Create Page (Only for logged-in users) -->
<section id="create">
  <div class="form">
    <h2>Create Offer</h2>
    <form @submit=${Submitting} class="create-form">
      <input
        type="text"
        name="title"
        id="job-title"
        placeholder="Title"
      />
      <input
        type="text"
        name="imageUrl"
        id="job-logo"
        placeholder="Company logo url"
      />
      <input
        type="text"
        name="category"
        id="job-category"
        placeholder="Category"
      />
      <textarea
        id="job-description"
        name="description"
        placeholder="Description"
        rows="4"
        cols="50"
      ></textarea>
      <textarea
        id="job-requirements"
        name="requirements"
        placeholder="Requirements"
        rows="4"
        cols="50"
      ></textarea>
      <input
        type="text"
        name="salary"
        id="job-salary"
        placeholder="Salary"
      />

      <button type="submit">post</button>
    </form>
  </div>
</section>
`



export function createView(context) {
  context.render(createTemplate(Submitting))


async function Submitting(e){
    e.preventDefault()
    const formData = new FormData(e.target)
    const title = formData.get("title")
    const imageUrl = formData.get("imageUrl")
    const category = formData.get("category")
    const description = formData.get("description")
    const requirements = formData.get("requirements")
    const salary = formData.get("salary")
    

    const offer = {
        title,
        imageUrl, 
        category,
        description,
        requirements,
        salary
    }

    if (offer.title == "" || offer.imageUrl == "" || offer.category == "" || offer.description == "" || offer.requirements == "" || offer.salary == ""){
        return alert("there are empty fields")
    }
    await createanOffer(offer)

    e.target.reset()
    context.page.redirect("/dashboard")
}}