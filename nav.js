const navBar = document.querySelector('.bar');
const closeNav =document.querySelector('.close');

navBar.addEventListener('click', () => {
  const navMenu = document.querySelector('.nav-menu');
  const links =document.querySelectorAll('.nav-menu-links');

  let isNavMenuOpen = false;
  isNavMenuOpen= !isNavMenuOpen

  if (isNavMenuOpen) {
    navMenu.style.display = 'flex';
    document.body.style.overflowY = 'hidden';
  } else {
    navMenu.style.display = 'none';
    document.body.style.overflowY = 'auto';
  }
  links.forEach(link=>{
    link.addEventListener('click',()=>{
       isNavMenuOpen= !isNavMenuOpen
       navMenu.style.display = 'none';
    document.body.style.overflowY = 'auto';
    })
  })
closeNav.addEventListener('click',()=>{
   navMenu.style.display = 'none';
    document.body.style.overflowY = 'auto';
})

});
