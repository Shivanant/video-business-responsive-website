burger=document.querySelector('.burger')
navbar=document.querySelector('nav')
navlist=document.querySelector('nav ul')
rightnav=document.querySelector('.right-nav')

burger.addEventListener('click',()=>{
    navbar.classList.toggle('h-nav-res')
    navlist.classList.toggle('v-class-res')
    rightnav.classList.toggle('v-class-res')

})