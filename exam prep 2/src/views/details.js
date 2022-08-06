import {html, render} from "../../node_modules/lit-html/lit-html.js"
import { deleteBook, getBookbyId} from "../api/books.js"
import { getUserData } from "../api/util.js"

const detailsTemplate = (book, isOwner, onDelete) => html`
<!-- Details Page ( for Guests and Users ) -->
<section id="details-page" class="details">
    <div class="book-information">
        <h3>${book.title}</h3>
        <p class="type">Type: ${book.type}</p>
        <p class="img"><img src=${book.imageUrl}></p>
        <div class="actions">
            <!-- Edit/Delete buttons ( Only for creator of this book )  -->
            ${isOwner? html`<a class="button" href="/edit/${book._id}">Edit</a>
            <a @click = ${onDelete} class="button" href="#">Delete</a>` : ""}

            Bonus
            <!-- Like button ( Only for logged-in users, which is not creators of the current book ) -->
            ${isOwner || sessionStorage.lengt == 0 ? "":html`<a class="button" href="#">Like</a>`}

            <!-- ( for Guests and Users )  -->
            <div class="likes">
                <img class="hearts" src="/images/heart.png">
                <span id="total-likes">Likes: 0</span>
            </div>
            <!-- Bonus -->
        </div>
    </div>
    <div class="book-description">
        <h3>Description:</h3>
        <p>${book.description}</p>
    </div>
</section>`



export async function detailsView(ctx) {
    const book = await getBookbyId(ctx.params.id)
    const userData = getUserData()
    const isOwner = userData?.id == book._ownerId
    ctx.render(detailsTemplate(book, isOwner, onDelete))


    async function onDelete() {
        const choice = confirm('are you sure? ')
        if (choice) {
            await deleteBook(ctx.params.id)
            ctx.page.redirect('/')
        }

    }
}

