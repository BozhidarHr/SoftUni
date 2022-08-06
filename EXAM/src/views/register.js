import {html, render} from "../../node_modules/lit-html/lit-html.js"
import { register } from "../api/users.js"


const registerTemplate = (onSubmit) => html`<!-- Register Page (Only for Guest users) -->
<section id="register">
  <div class="form">
    <h2>Register</h2>
    <form @submit = ${onSubmit} class="login-form">
      <input
        type="text"
        name="email"
        id="register-email"
        placeholder="email"
      />
      <input
        type="password"
        name="password"
        id="register-password"
        placeholder="password"
      />
      <input
        type="password"
        name="re-password"
        id="repeat-password"
        placeholder="repeat password"
      />
      <button type="submit">register</button>
      <p class="message">Already registered? <a href="/login">Login</a></p>
    </form>
  </div>
</section>
`

export function registerView(context){
  context.render(registerTemplate(onSubmit))

    async function onSubmit(e){
        e.preventDefault()
        let formdata = new FormData(e.target)
        let email = formdata.get("email").trim()
        let repass = formdata.get('re-password').trim()
        let password = formdata.get("password").trim()


        if (email == "" || password == ""){
            return alert("there are empty fields")
        }
        if (password != repass){
            return alert("passwords do not match")
        }

        await register(email, password)
        context.checkNavig()
        context.page.redirect("/dashboard")
    }
}




