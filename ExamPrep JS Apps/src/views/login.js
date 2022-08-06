import {html, render} from '../../node_modules/lit-html/lit-html.js'
import {login} from "../api/users.js"




const loginTemplate = (onSubmit) => html`<!-- Login Page -->
<section id="login">
    <div class="container">
        <form @submit=${onSubmit} id="login-form" action="#" method="post">
            <h1>Login</h1>
            <p>Please enter your credentials.</p>
            <hr>

            <p>Username</p>
            <input placeholder="Enter Username" name="username" type="text">

            <p>Password</p>
            <input type="password" placeholder="Enter Password" name="password">
            <input type="submit" class="registerbtn" value="Login">
        </form>
        <div class="signin">
            <p>Dont have an account?
                <a href="/register">Sign up</a>.
            </p>
        </div>
    </div>
</section>
`

export function loginView(ctx){
    ctx.render(loginTemplate(onSubmit))

    async function onSubmit(e){
        e.preventDefault()
        let formdata = new FormData(e.target)
        let username = formdata.get("username").trim()
        let password = formdata.get("password").trim()

        if (username == "" || password == ""){
            return alert("all fields are needed")
        }

        await login(username, password)
        ctx.updateNav()
        ctx.page.redirect("/alllistings")
    }
}




