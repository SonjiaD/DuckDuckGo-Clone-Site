
//making social icons display on click

// 1. Select the element that triggers the display of social icons
const hornBtn = document.querySelector('.social-icons span');
// 2. Add a click event listener to the selected element
hornBtn.addEventListener('click', ()=>{
    // 3. Toggle the 'socialIconsToggle' class on the '.social-icons-list' element
    document.querySelector('.social-icons-list').classList.toggle('socialIconsToggle');
})

const navbarCollapse = document.querySelector('.navbar-collapse');
const navShowBtn = document.getElementById('navbar-toggler');
const navCloseBtn = document.getElementById('nav-close-btn');
const modal = document.getElementById('modal');

navShowBtn.addEventListener('click', () => {
    navbarCollapse.classList.add('show-navbar-collapse')
    modal.classList.add('fullscreenModal');
});

navCloseBtn.addEventListener('click', () => {
    navbarCollapse.classList.remove('show-navbar-collapse');
    modal.classList.remove('fullscreenModal');
})

window.addEventListener('click', (e)=>{
    if(e.target === modal) {
        navbarCollapse.classList.remove('show-navbar-collapse');
        modal.classList.remove('fullscreenModal');
        
    }
})

//making the faq collapsable
const faqHeadIcons = document.querySelectorAll('.faq-head span');
const faqHeadTitles = document.querySelectorAll('.faq-head h3');
const faqBodyContents = document.querySelectorAll('.faq-body');

faqBodyContents[0].classList.add('show-faq-body');
faqHeadIcons[0].innerHTML = '<img src = "assets/icons/up.svg">';

// When clicking the title of the FAQ
faqHeadTitles.forEach((title) => {
    title.addEventListener('click', () => {
        faqBodyHide();
        faqIconReset();
        title.parentElement.nextElementSibling.classList.add('show-faq-body');
        title.previousElementSibling.innerHTML = '<img src="assets/icons/up.svg">';
    });
});

// While clicking the icon
faqHeadIcons.forEach((icon) => {
    icon.addEventListener('click', () => {
        faqBodyHide();
        faqIconReset();
        icon.parentElement.nextElementSibling.classList.add('show-faq-body');
        icon.innerHTML = '<img src="assets/icons/up.svg">';  // Corrected the missing double quote
    });
});


function faqBodyHide(){
    faqBodyContents.forEach((body) => {
        body.classList.remove('show-faq-body');
    });
}

function faqIconReset(){
    faqHeadIcons.forEach((icon) => {
        icon.innerHTML = '<img src="assets/icons/down.svg">';
    });
}