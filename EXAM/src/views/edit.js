import { html, render } from '../../node_modules/lit-html/lit-html.js'

import { getanOfferbyId, updatetheoffer } from '../api/offersreq.js'


const editTemplate = (offer, Sumbmitting) => html`
<!-- Edit Page (Only for logged-in users) -->
<section id="edit">
  <div class="form">
    <h2>Edit Offer</h2>
    <form @submit = ${Sumbmitting} class="edit-form">
      <input
        type="text"
        name="title"
        id="job-title"
        placeholder="Title"
        .value = ${offer.title}
      />
      <input
        type="text"
        name="imageUrl"
        id="job-logo"
        placeholder="Company logo url"
        .value = ${offer.imageUrl}
      />
      <input
        type="text"
        name="category"
        id="job-category"
        placeholder="Category"
        .value = ${offer.category}
      />
      <textarea
        id="job-description"
        name="description"
        placeholder="Description"
        rows="4"
        cols="50"
        .value = ${offer.description}
      ></textarea>
      <textarea
        id="job-requirements"
        name="requirements"
        placeholder="Requirements"
        rows="4"
        cols="50"
        .value = ${offer.requirements}
      ></textarea>
      <input
        type="text"
        name="salary"
        id="job-salary"
        placeholder="Salary"
        .value = ${offer.salary}
      />

      <button type="submit">post</button>
    </form>
  </div>
</section>`



export async function editView(context) {
    const offer = await getanOfferbyId(context.params.id)

    context.render(editTemplate(offer, Sumbmitting))

    async function Sumbmitting(e) {
        e.preventDefault()
        const formData = new FormData(e.target)
        const title = formData.get("title")
        const category = formData.get("category")
        const imageUrl = formData.get("imageUrl")
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
        await updatetheoffer(context.params.id, offer)

        e.target.reset()
        context.page.redirect("/details/" + context.params.id)
    }

}
