import page from "../node_modules/page/page.mjs"
import { html, render } from "../node_modules/lit-html/lit-html.js"
import { register } from "../users.js"
import { logged } from "../app.js"

let registerTemplate = () => html`<div class="row space-top">
<div class="col-md-12">
    <h1>Register New User</h1>
    <p>Please fill all fields.</p>
</div>
</div>
<form @submit=${onReg}>
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
        <div class="form-group">
            <label class="form-control-label" for="rePass">Repeat</label>
            <input class="form-control" id="rePass" type="password" name="rePass">
        </div>
        <input type="submit" class="btn btn-primary" value="Register" />
    </div>
</div>
</form>
`

function onReg(e) {
    e.preventDefault()
    let formdata = new FormData(e.currentTarget)
    let email = formdata.get("email")
    let pass = formdata.get("password")
    let repass = formdata.get("rePass")
    register(email, pass, repass)
    logged()
    page.redirect('./dashboard')
}

export const registerView = (ctx) => render(registerTemplate(), document.querySelector(".container"))