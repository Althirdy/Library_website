
// Function to select the element in HTML
const selector = (name) => {
    const el = document.querySelector(`${name}`);

    return el
}

// Element variable
const toggle =selector(".toggle"),
    navbar = selector(".navbar");


// Showing of Navbar
toggle.addEventListener('click',()=>{
    navbar.classList.toggle("show_navbar")
    toggle.classList.toggle("show_toggle")
})


