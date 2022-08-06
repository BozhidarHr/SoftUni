import { html, render } from '../../node_modules/lit-html/lit-html.js'
import { getBookbyId, updateBook } from "../api/books.js"


const editTemplate = (book, onSubmit) => html` <!-- Edit Page ( Only for the creator )-->
<section id="edit-page" class="edit">
    <form @submit = ${onSubmit} id="edit-form" action="#" method="">
        <fieldset>
            <legend>Edit my Book</legend>
            <p class="field">
                <label for="title">Title</label>
                <span class="input">
                    <input type="text" name="title" id="title" value="${book.title}">
                </span>
            </p>
            <p class="field">
                <label for="description">Description</label>
                <span class="input">
                    <textarea name="description"
                        id="description">${book.description}</textarea>
                </span>
            </p>
            <p class="field">
                <label for="image">Image</label>
                <span class="input">
                    <input type="text" name="imageUrl" id="image" value="${book.imageUrl}">
                </span>
            </p>
            <p class="field">
                <label for="type">Type</label>
                <span class="input">
                    <select id="type" name="type" value="${book.type}">
                        <option value="Fiction" selected>Fiction</option>
                        <option value="Romance">Romance</option>
                        <option value="Mistery">Mistery</option>
                        <option value="Classic">Clasic</option>
                        <option value="Other">Other</option>
                    </select>
                </span>
            </p>
            <input class="button submit" type="submit" value="Save">
        </fieldset>
    </form>
</section>
`



export async function editView(ctx) {
    const book = await getBookbyId(ctx.params.id)

    ctx.render(editTemplate(book, onSubmit))

    async function onSubmit(e){
        e.preventDefault()
        const formData = new FormData(e.target)
        const title = formData.get("title")
        const description = formData.get("description")
        const imageUrl = formData.get("imageUrl")
        const type = formData.get("type")
        const book = {
            title, 
            description,
            imageUrl,
            type
        }
        if (book.title == "" || book.description == "" || book.imageUrl == "" || book.type == ""){
            return alert("all fields are required")
        }
        await updateBook(ctx.params.id, book)
    
        e.target.reset()
        ctx.page.redirect("/books/" + ctx.params.id)
}

}
