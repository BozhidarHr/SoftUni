import {html, render} from "./node_modules/lit-html/lit-html.js"
import page from "./node_modules/page/page.mjs"
import {getUserData} from "./src/api/util.js"
import {login, logout, register} from "./src/api/users.js"
import { loginView } from "./src/views/login.js"
import { registerView } from "./src/views/register.js"
import { homeView } from "./src/views/home.js"
import { alllistingsView } from "./src/views/alllistings.js"
import { createView } from "./src/views/create.js"
import { detailsView } from "./src/views/details.js"
import { editView } from "./src/views/edit.js"
import { myprofileView } from "./src/views/myprofile.js"
import { byYearView } from "./src/views/byyear.js"



const main = document.getElementById('site-content')

page(decorateContext)
page('/', homeView)
page('/login', loginView)
page('/register', registerView)
page('/alllistings', alllistingsView)
page('/mylistings', myprofileView)
page('/create', createView)
page('/byyear', byYearView)
page('/edit/:id',editView)
page('/details/:id', detailsView)

window.login = login

updateNav()
page.start()

document.getElementById('profile').querySelectorAll('a')[3].addEventListener("click", onLogout)

function onLogout(){
    logout()
    updateNav()
    page.redirect('/')
}

function renderMain(templateResult){
    render(templateResult, main)
}

function updateNav() {
    const userData = getUserData()
    if (userData) {
        const user = document.getElementById('profile')
        user.style.display = "block"
        document.getElementById("guest").style.display = "none"
        user.querySelector('a').textContent = `Welcome, ${userData.username}`
    } else {
        document.getElementById("profile").style.display = "none"
        document.getElementById("guest").style.display = "block"
    }
}

function decorateContext(ctx,next){
    ctx.updateNav = updateNav
    ctx.render = renderMain
    next()
}
