const hamburgerIcon = document.getElementById("burgerIcon");
const nav = document.getElementById("navMenu");
const bars = document.getElementsByClassName('bar')

hamburgerIcon.addEventListener('click', () => {
    hamburgerIcon.classList.toggle("active");
    nav.classList.toggle("active");
    bars.body.style.color = "white";
})

document.querySelectorAll('.navLink').forEach(n => n.addEventListener('click', () => {
    hamburgerIcon.classList.remove('active');
    nav.classList.remove('active');

}))


