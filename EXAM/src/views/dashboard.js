import {html, render} from '../../node_modules/lit-html/lit-html.js'
import { getAlloffers } from '../api/offersreq.js'


const dashboardTemplate = (offers) => html`<!-- Dashboard page -->
<section id="dashboard">
  <h2>Job Offers</h2>

  <!-- Display a div with information about every post (if any)-->
  ${offers.length == 0 ? html`<h2>No offers yet.</h2>`: offers.map(offercard)}

</section>
`

export async function dashboardView(ctx){
    const offers = await getAlloffers()
    ctx.render(dashboardTemplate(offers))  

}


const offercard = (offer) => html `<div class="offer">
<img src=${offer.imageUrl} alt="example1" />
<p>
  <strong>Title: </strong><span class="title">${offer.title}</span>
</p>
<p><strong>Salary:</strong><span class="salary">${offer.salary}</span></p>
<a class="details-btn" href="/details/${offer._id}">Details</a>
</div>`





