import page from "./node_modules/page/page.mjs"
import { html, render } from "./node_modules/lit-html/lit-html.js"
import { logout, register } from "./users.js"
import { loginView } from "./views/login.js"
import {registerView} from "./views/register.js"
import {createView} from "./views/create.js"
 

// •	Create Furniture (POST): http://localhost:3030/data/catalog
// •	All Furniture (GET): http://localhost:3030/data/catalog
// •	Furniture Details (GET): http://localhost:3030/data/catalog/:id
// •	Update Furniture (PUT): http://localhost:3030/data/catalog/:id
// •	Delete Furniture (DELETE):  http://localhost:3030/data/catalog/:id
// •	My Furniture (GET): http://localhost:3030/data/catalog?where=_ownerId%3D%22{userId}%22
// page("/index.html", "/")
// page('/', loginView)
page('/login', loginView)
page('/register', registerView)
page('/create', createView)
page.start()


export function logged() {
    if (window.localStorage.length == 0) {
        document.getElementById("guest").style.display = "inline"
        document.getElementById("user").style.display = "none"
    }else{ document.getElementById("user").style.display = "inline"
    document.getElementById("guest").style.display = "none"}
}
logged()

const logoutbtn = document.getElementById("logoutBtn")
logoutbtn.addEventListener('click', logouting)

function logouting(){
    localStorage.removeItem('user')
    logged()
}