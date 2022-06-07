// abrir e fechar o menu
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

//quando clicar em um item do menu, tirar a classe show
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

//shadow header onScroll

function changeHeaderOnScroll() {
  const header = document.querySelector('header')
  const navHeight = header.offsetHeight

  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

//scroll reveal
ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
#home, #home img,#home .title,#home p,#home .button, 
#services,#services header,#services .cards,#services .card,
#about,#about header,#about p,#about img,
#contact,#contact .title, #contact p, #contact .button, #contact li,
footer, footer .brand, footer .booking, footer .social-media `)

//back to top button

function backToTop() {
  const backToTopButton = document.querySelector('.back-to-top svg')

  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

window.addEventListener('scroll', function () {
  changeHeaderOnScroll()
  backToTop()
})
