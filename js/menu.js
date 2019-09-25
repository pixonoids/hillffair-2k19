window.addEventListener('DOMContentLoaded', e=>{
  var toggleBtn = document.querySelector('#nav-icon2');
  var menu = document.querySelectorAll('.menu');
  var navbarActive = false;
  toggleBtn.addEventListener('click', ()=>{
    if(!navbarActive){
      menu[0].style.left = '0';
      toggleBtn.classList.add('open');
      navbarActive =true;
      // window.addEventListener('scroll', noScroll);
    }  else{
      navbarActive=false;
      menu[0].style.left = '-100%';
      toggleBtn.classList.remove('open');
      // window.removeEventListener('scroll', noScroll);
    }
  })
})

function noScroll() {
  window.scrollTo(0, 0);
}