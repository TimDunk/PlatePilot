const container = document.querySelector('.tabs-container');

function scrollRight() {
    // Scrolls the container 200 pixels to the right smoothly
    container.scrollBy({ left: 200, behavior: 'smooth' });
}

function scrollLeft() {
    // Scrolls the container 200 pixels to the left smoothly
    container.scrollBy({ left: -200, behavior: 'smooth' });
}

let preButton=document.querySelector(".category-tabs .pre-btn>button");
preButton.addEventListener("click",(e)=>{
    scrollLeft();
});

let nextButton=document.querySelector(".category-tabs .next-btn>button");
nextButton.addEventListener("click",(e)=>{
    scrollRight();
});