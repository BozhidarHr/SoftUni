import page from "../node_modules/page/page.mjs"
import { html, render } from "../node_modules/lit-html/lit-html.js"
import { homeView } from "./views/home.js"
import { catalogView } from "./views/catalog.js"
import { loginView } from "./views/login.js"
import { getUserData } from "./util.js"
import { registerView } from "./views/register.js"
import { logout } from "./api/users.js"
import { createView } from "./views/create.js"
import { detailsView } from "./views/details.js"
import { editView } from "./views/edit.js"
import { profileView } from "./views/myprofile.js"
const main = document.querySelector('main')

page(decorateContext)
page('/', homeView)
page('/memes', catalogView)
page('/create', createView)
page('/profile', profileView)
page('/login', loginView)
page('/register', registerView)
page('/memes/:id', detailsView)
page('/edit/:id', editView)

document.getElementById('logoutBtn').addEventListener('click', OnLogout)

updateNav()
page.start()


function renderMain(templateResult){
    render(templateResult, main)
}

function decorateContext(ctx,next){
    ctx.updateNav = updateNav
    ctx.render = renderMain
    next()
}

function updateNav() {
    const userData = getUserData()
    if (userData){
        document.querySelector(".user").style.display = "block"
        document.querySelector(".guest").style.display = "none"
        document.querySelector('.user span').textContent = `Welcome, ${userData.email}`
    }else{
        document.querySelector(".user").style.display = "none"
        document.querySelector(".guest").style.display = "block"
    }
}

function OnLogout(){
    logout();
    updateNav()
    page.redirect('/')
}