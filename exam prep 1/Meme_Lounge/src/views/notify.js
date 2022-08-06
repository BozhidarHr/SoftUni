

export function notify(message){
    
let notif = document.getElementById('errorBox')
let span = notif.querySelector('span')
    span.textContent = message
    notif.style.display = "block"

    setTimeout(() => notif.style.display = "none", 3000)
}
