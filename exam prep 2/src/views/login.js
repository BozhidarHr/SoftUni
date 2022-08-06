import {html, render} from '../../node_modules/lit-html/lit-html.js'
import {login} from "../api/users.js"




const loginTemplate = (onSubmit) => html`<section id="login-page" class="login">
<form @submit = ${onSubmit} id="login-form" action="" method="">
    <fieldset>
        <legend>Login Form</legend>
        <p class="field">
            <label for="email">Email</label>
            <span class="input">
                <input type="text" name="email" id="email" placeholder="Email">
            </span>
        </p>
        <p class="field">
            <label for="password">Password</label>
            <span class="input">
                <input type="password" name="password" id="password" placeholder="Password">
            </span>
        </p>
        <input class="button submit" type="submit" value="Login">
    </fieldset>
</form>
</section>
`

export function loginView(ctx){
    ctx.render(loginTemplate(onSubmit))

    async function onSubmit(e){
        e.preventDefault()
        let formdata = new FormData(e.target)
        let email = formdata.get("email").trim()
        let password = formdata.get("password").trim()

        if (email == "" || password == ""){
            return notify("all fields are required")
        }

        await login(email, password)
        ctx.updateNav()
        ctx.page.redirect("/")
    }
}




