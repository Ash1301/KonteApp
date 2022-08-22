
let konteYo = document.getElementById("count-el")
let anrej = document.getElementById("save-el")

let konte = 0

function ogmante() {
    konte += 1
    konteYo.textContent = konte
}

function anrejistre() {
    let kontAnrej = konte + " - "
    anrej.textContent += kontAnrej
    konteYo.textContent = 0
    konte = 0
}
