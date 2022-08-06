import {html, render} from "../../node_modules/lit-html/lit-html.js"
import { register } from "../api/users.js"


const registerTemplate = (onSubmit) => html`
<!-- Register Page -->
<section id="register">
    <div class="container">
        <form @submit=${onSubmit} id="register-form">
            <h1>Register</h1>
            <p>Please fill in this form to create an account.</p>
            <hr>

            <p>Username</p>
            <input type="text" placeholder="Enter Username" name="username" required>

            <p>Password</p>
            <input type="password" placeholder="Enter Password" name="password" required>

            <p>Repeat Password</p>
            <input type="password" placeholder="Repeat Password" name="repeatPass" required>
            <hr>

            <input type="submit" class="registerbtn" value="Register">
        </form>
        <div class="signin">
            <p>Already have an account?
                <a href="/login">Sign in</a>.
            </p>
        </div>
    </div>
</section>`

export function registerView(ctx){
    ctx.render(registerTemplate(onSubmit))

    async function onSubmit(e){
        e.preventDefault()
        let formdata = new FormData(e.target)
        let username = formdata.get("username").trim()
        let repass = formdata.get('repeatPass').trim()
        let password = formdata.get("password").trim()


        if (username == "" || password == ""){
            return alert("all fields are needed")
        }
        if (password != repass){
            return alert("pass dont match")
        }

        await register(username, password)
        ctx.updateNav()
        ctx.page.redirect("/alllistings")
    }
}




