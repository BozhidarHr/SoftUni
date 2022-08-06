import {html, render} from "../../node_modules/lit-html/lit-html.js"
import { applyForanOffer, deleteanOffer, getanOfferbyId,  } from "../api/offersreq.js"
import { getUserData } from "../api/util.js"

const detailsTemplate = (offer, owner, Deleting) => html` <!-- Details page -->
<section id="details">
  <div id="details-wrapper">
    <img id="details-img" src=${offer.imageUrl} alt="example1" />
    <p id="details-title">${offer.title}</p>
    <p id="details-category">
      Category: <span id="categories">${offer.category}</span>
    </p>
    <p id="details-salary">
      Salary: <span id="salary-number">${offer.salary}</span>
    </p>
    <div id="info-wrapper">
      <div id="details-description">
        <h4>Description</h4>
        <span
          >${offer.description}</span
        >
      </div>
      <div id="details-requirements">
        <h4>Requirements</h4>
        <span
          >${offer.requirements}</span
        >
      </div>
    </div>
    <p>Applications: <strong id="applications">1</strong></p> 
      <!--Edit and Delete are only for creator-->
      ${owner ? html`<div id="action-buttons">
        <a href="/edit/${offer._id}" id="edit-btn">Edit</a>
        <a @click = ${Deleting} href="#" id="delete-btn">Delete</a>
         <!--Bonus - Only for logged-in users ( not authors )-->
      </div>`: ""}
      ${sessionStorage.length == 0 || owner == true ? "":html`
      <a href="" id="apply-btn">Apply</a>`}
    </div>
  </section>
`



export async function detailsView(context) {
    const offer = await getanOfferbyId(context.params.id)
    const userinfo = getUserData()
    const owner = userinfo?.id == offer._ownerId
    context.render(detailsTemplate(offer, owner, Deleting))


    async function Deleting() {
        const choice = confirm('are you sure you want to delete the offer? ')
        if (choice) {
            await deleteanOffer(context.params.id)
            context.page.redirect('/dashboard')
        }  
    }

    async function Applying(e){
        const applied = await applyForanOffer(context.params.id)
        e.target.style.display = "none"
    }


}


