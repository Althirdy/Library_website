import Data from "./data.mjs"

// Function to select the element in HTML
const selector = (name) => {
    const el = document.querySelector(`${name}`);
    return el
}


//variable Data
// start of filtering
const recommended = Data.filter(n => {
    if (n.secondary_id == `recommended`) {
        return n
    }
}),
    glider = selector(".glider")

const main_book = Data.filter(n => {
    if (n.secondary_id == `main_books`) {
        return n
    }

})
// End of filtering
const btn = document.querySelectorAll(".book_nav")
const _showBooks = selector(".books")



//show Main books

// function for showing of data 
const showin_book = (data) => {
    const main_book_show = data.map(n => (
        `   <div class="book_card">
        <img src="${n.img}" alt="" class="book_img">
        <div class="book_card_txt">
            <h3>${n.title}</h3>
            <p>${n.author}</p>
        </div>
        <div class="rating">
            <img src="./Imges/star.png" alt="">
           <a href="${n.href}" target="_blank"> <button id='${n.id}'>view</button></a>
        </div>
    </div>
    `
    ))

    _showBooks.innerHTML = main_book_show.join('')
}


const main_book_show = main_book.map(n => (
    `   <div class="book_card">
        <img src="${n.img}" alt="" class="book_img">
        <div class="book_card_txt">
            <h3>${n.title}</h3>
            <p>${n.author}</p>
        </div>
        <div class="rating">
            <img src="./Imges/star.png" alt="">
           <a href="${n.href}" target="_blank"> <button id='${n.id}'>view</button></a>
        </div>
    </div>
    `
))

_showBooks.innerHTML = main_book_show.join('')
// end of show main books

// Recommend card 
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
     <a href="${n.href}" target="_blank"><button id="${n.id}">View</button></a>
</div>
</div>
</div>`
))
glider.innerHTML = recommend_data.join('')

//  end Recommend card 

btn.forEach(n => {
    n.addEventListener('click', (e) => {
        const category = e.currentTarget.dataset.id
        const booksitem = Data.filter(n=>{
            if(n.category== category){
                return n 
            }
        })
        if(category == "All Genre"){
            showin_book(Data)
        }else{
            showin_book(booksitem)
        }
    })

})


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
    responsive: [{
        breakpoint: 360,
        settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: 1.3,
            slidesToScroll: 'auto',
            itemWidth: 150,
            duration: 0.25
        }
    },
    {
        breakpoint: 400,
        settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: 1.5,
            slidesToScroll: 'auto',
            itemWidth: 150,
            duration: 0.25
        }
    }, {
        breakpoint: 1366,
        settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: 4.5,
            slidesToScroll: 'auto',
            itemWidth: 150,
            duration: 0.25
        }
    }, {
        breakpoint: 1024,
        settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: 4,
            slidesToScroll: 'auto',
            itemWidth: 150,
            duration: 0.25
        }
    }, {
        breakpoint: 768,
        settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: 2.5,
            slidesToScroll: 'auto',
            itemWidth: 150,
            duration: 0.25
        }
    }, {
        breakpoint: 600,
        settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: 2,
            slidesToScroll: 'auto',
            itemWidth: 150,
            duration: 0.25
        }
    },


    ]
});

