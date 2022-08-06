import {html, render} from '../../node_modules/lit-html/lit-html.js'
import {login} from "../api/users.js"




const loginTemplate = (onSubmit) => html`  <!-- Login Page (Only for Guest users) -->
<section id="login">
  <div class="form">
    <h2>Login</h2>
    <form @submit = ${onSubmit} class="login-form">
      <input type="text" name="email" id="email" placeholder="email" />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="password"
      />
      <button type="submit">login</button>
      <p class="message">
        Not registered? <a href="/register">Create an account</a>
      </p>
    </form>
  </div>
</section>`

export function loginView(context){
  context.render(loginTemplate(onSubmit))

    async function onSubmit(e){
        e.preventDefault()
        let formdata = new FormData(e.target)
        let email = formdata.get("email").trim()
        let password = formdata.get("password").trim()

        if (email == "" || password == ""){
            return alert("there are empty fields")
        }

        await login(email, password)
        context.checkNavig()
        context.page.redirect("/dashboard")
    }
}




