let hamButton = document.querySelector('.mobile-btn');
let mobileMenu = document.querySelector('.nav-list-items-mobile');

const openToggle = ()=>{
    if (mobileMenu.classList.contains('reveal-mobile-menu')) {
        mobileMenu.classList.remove('reveal-mobile-menu')
    } else{
        mobileMenu.classList.add('reveal-mobile-menu')
    }
}

hamButton.addEventListener('click', openToggle)