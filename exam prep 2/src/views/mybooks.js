import {html, render} from '../../node_modules/lit-html/lit-html.js'

import { getUserData } from '../api/util.js'

import { getBooksbyuser } from "../api/books.js"

const mybooksTemplate = (books) => html`    
<!-- My Books Page ( Only for logged-in users ) -->
<section id="my-books-page" class="my-books">
    <h1>My Books</h1>
     ${books.length == 0 ? html`<p class="no-books">No books in database!</p>`: html`<ul class="my-books-list">${books.map(bookcard)}</ul>`}

</section>
`


const bookcard = (book) => html`<li class="otherBooks">
<h3>${book.title}</h3>
<p>Type: ${book.type}</p>
<p class="img"><img src=${book.imageUrl}></p>
<a class="button" href="/books/${book._id}">Details</a>
</li>`


export async function myBooksView(ctx){
    const userData = getUserData()
    const books = await getBooksbyuser(userData.id)
    ctx.render(mybooksTemplate(books))  

}
