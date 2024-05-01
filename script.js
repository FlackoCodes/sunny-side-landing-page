let hamButton = document.querySelector('.mobile-btn');
let mobileMenu = document.querySelector('.nav-list-items-mobile');

const openMobileMenu = ()=>{
    if (mobileMenu.classList.contains('reveal-mobile-menu')) {
        mobileMenu.classList.remove('reveal-mobile-menu')
    } else{
        mobileMenu.classList.add('reveal-mobile-menu')
    }
}

hamButton.addEventListener('click', openMobileMenu)