document.addEventListener("DOMContentLoaded", () => {
    console.log("JS WORKING")
    let vert = document.getElementById("vertical-nav")

    let toggle = document.getElementById("nav-toggle")
    toggle.addEventListener("click", () => {
        console.log("Extend Menu")
        rotateElement(toggle)
        toggleDisplay(vert)
    })
})


function rotateElement(element) {
    element.classList.toggle('rotated');
    let offset = element.classList.contains('rotated') ? '-90' : '0';
    element.style.transform = `rotate(${offset}deg)`
}

function toggleDisplay(element) {
    if (element.style.display == 'flex') {
        element.style.display = 'none'
    } else {
        element.style.display = 'flex'
    }
}