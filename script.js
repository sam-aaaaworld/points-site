document.addEventListener("DOMContentLoaded", () => {
    console.log("JS WORKING")

    let toggle = document.getElementById("nav-toggle")
    toggle.addEventListener("click", () => {
        console.log("Extend Menu")
        rotateElement(toggle)
    })
})


function rotateElement(element) {
    element.classList.toggle('rotated');
    let offset = element.classList.contains('rotated') ? '-90' : '0';
    element.style.transform = `rotate(${offset}deg)`
}
