import page from "./node_modules/page/page.mjs"
import {getUserData} from "./src/api/util.js"
import {logout} from "./src/api/users.js"
import { loginView } from "./src/views/login.js"
import {html, render} from "./node_modules/lit-html/lit-html.js"
import { registerView } from "./src/views/register.js"
import { homeView } from "./src/views/home.js"
import { dashboardView } from "./src/views/dashboard.js"
import { createView } from "./src/views/create.js"
import { detailsView } from "./src/views/details.js"
import { editView } from "./src/views/edit.js"


const main = document.querySelector('main')

page(decorate)
page('/', homeView)
page('/login', loginView)
page('/register', registerView)
page('/dashboard', dashboardView)
page('/create', createView)
page('/edit/:id', editView)
page('/details/:id', detailsView)

checkNavig()
page.start()

function rendering(template){
    render(template, main)
}


function checkNavig() {
    const userinfo = getUserData()
    if (userinfo) {
        const usernav = document.querySelector(".user")
        usernav.style.display = "block"
        document.querySelector(".guest").style.display = "none"
    } else {
        document.querySelector(".user").style.display = "none"
        document.querySelector(".guest").style.display = "block"
}
}

function decorate(context, next){
    context.checkNavig = checkNavig
    context.render = rendering
    next()
}

let userfor = document.querySelector(".user")
userfor.querySelectorAll('a')[1].addEventListener('click', Logouting)

function Logouting(){
    logout()
    checkNavig()
    page.redirect('/dashboard')
}