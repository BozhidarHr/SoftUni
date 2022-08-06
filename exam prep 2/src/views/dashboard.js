import {html, render} from '../../node_modules/lit-html/lit-html.js'
import { getAllbooks } from '../api/books.js'

const dashboardTemplate = (books) => html` 
<!-- Dashboard Page ( for Guests and Users ) -->
<section id="dashboard-page" class="dashboard">
   <h1>Dashboard</h1>
   ${books.length == 0 ? html` <p class="no-books">No books in database!</p>` : html`<ul>${books.map(bookcard)}</ul>`}
</section>
       `

export async function dashboardView(ctx){
    const books = await getAllbooks()
    ctx.render(dashboardTemplate(books))  

}


const bookcard = (book) => html `<li class="otherBooks">
<h3>${book.title}</h3>
<p>${book.type}</p>
<p class="img"><img src=${book.imageUrl}></p>
<a class="button" href="/books/${book._id}">Details</a>
</li>`





