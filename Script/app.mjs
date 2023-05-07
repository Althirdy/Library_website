import recommend from "./data.mjs"

// Function to select the element in HTML
const selector = (name) => {
    const el = document.querySelector(`${name}`);
    return el
}


//variable Data
const recommended = recommend,
      glider = selector(".glider")

const recommend_data = recommended.map(n => (
    `                    <div class="card">
<img src="${n.img}" alt="" class="book">
<div class="txt_title">
<div class="txt">
    <h2>${n.title}</h2>
    <p>${n.author}</p>
</div>
<div class="bot">
    <img src="./Imges/star.png" alt="">
    <button id="${n.id}">View</button>
</div>
</div>
</div>`
))
glider.innerHTML = recommend_data.join('')
console.log(recommend_data)

// Recommend card 








// Element variable
const toggle = selector(".toggle"),
    navbar = selector(".navbar");


// Showing of Navbar
toggle.addEventListener('click', () => {
    navbar.classList.toggle("show_navbar")
    toggle.classList.toggle("show_toggle")
})


// Glider
new Glider(document.querySelector('.glider'), {
    slidesToShow: 1,
    slidesToScroll: 5,
    draggable: true,
    dots: '.dots',
    responsive : [{
        breakpoint: 360,
        settings: {
        // Set to `auto` and provide item width to adjust to viewport
        slidesToShow: 1.3,
        slidesToScroll: 'auto',
        itemWidth: 150,
        duration: 0.25}
    },
    {
        breakpoint: 400,
        settings: {
        // Set to `auto` and provide item width to adjust to viewport
        slidesToShow: 1.5,
        slidesToScroll: 'auto',
        itemWidth: 150,
        duration: 0.25}
    },{
        breakpoint: 1366,
        settings: {
        // Set to `auto` and provide item width to adjust to viewport
        slidesToShow: 4.5,
        slidesToScroll: 'auto',
        itemWidth: 150,
        duration: 0.25}
    },{
        breakpoint: 1024,
        settings: {
        // Set to `auto` and provide item width to adjust to viewport
        slidesToShow: 4,
        slidesToScroll: 'auto',
        itemWidth: 150,
        duration: 0.25}
    },{
        breakpoint: 768,
        settings: {
        // Set to `auto` and provide item width to adjust to viewport
        slidesToShow: 2.5,
        slidesToScroll: 'auto',
        itemWidth: 150,
        duration: 0.25}
    },{
        breakpoint: 600,
        settings: {
        // Set to `auto` and provide item width to adjust to viewport
        slidesToShow: 2,
        slidesToScroll: 'auto',
        itemWidth: 150,
        duration: 0.25}
    },


]
});

