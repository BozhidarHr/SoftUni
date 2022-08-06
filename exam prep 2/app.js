import page from "./node_modules/page/page.mjs"
import { html, render } from "./node_modules/lit-html/lit-html.js"
import { getUserData } from "./src/api/util.js"
import { logout } from "./src/api/users.js"
import { login } from "./src/api/users.js"
import { registerView } from "./src/views/register.js"
import { loginView } from "./src/views/login.js"
import { createView } from "./src/views/create.js"
import { dashboardView } from "./src/views/dashboard.js"
import { detailsView } from "./src/views/details.js"
import { editView } from "./src/views/edit.js"
import { myBooksView } from "./src/views/mybooks.js"



const main = document.getElementById('site-content')


page(decorateContext)
page('/', dashboardView)
page('/login', loginView)
page('/register', registerView)
page('/books', myBooksView)
page('/add', createView)
page('/books/:id', detailsView)
page('/edit/:id', editView)

updateNav()
page.start()


user.querySelectorAll('.button')[2].addEventListener('click', onLogout)


function onLogout(){
    logout();
    updateNav()
    page.redirect('/')
}

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
    if (userData) {
        const user = document.getElementById('user')
        user.style.display = "block"
        document.getElementById("guest").style.display = "none"
        user.querySelector('span').textContent = `Welcome, ${userData.email}`
    } else {
        document.getElementById("user").style.display = "none"
        document.getElementById("guest").style.display = "block"
    }
}