import page from "../node_modules/page/page.mjs"
import { html, render } from "../node_modules/lit-html/lit-html.js"
import { login } from "../users.js"
import { logged } from "../app.js"

let loginTemplate = () => html`
<div class="row space-top">
    <div class="col-md-12">
        <h1>Login User</h1>
        <p>Please fill all fields.</p>
    </div>
</div>
<form @submit=${OnSubmit}>
    <div class="row space-top">
        <div class="col-md-4">
            <div class="form-group">
                <label class="form-control-label" for="email">Email</label>
                <input class="form-control" id="email" type="text" name="email">
            </div>
            <div class="form-group">
                <label class="form-control-label" for="password">Password</label>
                <input class="form-control" id="password" type="password" name="password">
            </div>
            <input type="submit" class="btn btn-primary" value="Login" />
        </div>
    </div>
</form>
`

function OnSubmit(e) {
    e.preventDefault()
    let formdata = new FormData(e.currentTarget)
    let email = formdata.get("email")
    let pass = formdata.get("password")
    login(email, pass)
    logged()
    page.redirect('./dashboard')
    // vinagi redirectva
}

export const loginView = (ctx) => render(loginTemplate(), document.querySelector(".container"))