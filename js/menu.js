// window.addEventListener('DOMContentLoaded', e=>{
//   var toggleBtn = document.querySelector('#nav-icon2');
//   var menu = document.querySelectorAll('.menu');
//   var navbarActive = false;
//   toggleBtn.addEventListener('click', ()=>{
//     if(!navbarActive){
//       console.log('clicked open');
//       menu[0].style.left = '0';
//       toggleBtn.classList.add('open');
//       navbarActive =true;
//       // window.addEventListener('scroll', noScroll);
//     }  else{
//       console.log('clicked close');

//       navbarActive=false;
//       menu[0].style.left = '-100%';
//       toggleBtn.classList.remove('open');
//       // window.removeEventListener('scroll', noScroll);
//     }
//   })
// })

// // function noScroll() {
// //   window.scrollTo(0, 0);
// // }
var Btn = document.querySelector('.navicon');
var toggleBtn = document.querySelector('#nav-icon2');
var crosses = document.querySelectorAll('#nav-icon2 span');
			var menu = document.querySelectorAll('.menu');
			let navbarActive = false;
			function navbar(){
			if(!navbarActive){
				console.log('clicked open');
				menu[0].style.left = '0';
				toggleBtn.classList.add('open');
				// Btn.classList.add('white');
				crosses.forEach(c=>{
					c.style.background='#fff';
				})
				navbarActive =true;
				// window.addEventListener('scroll', noScroll);
			}  else{
				console.log('clicked close');

				navbarActive=false;
				menu[0].style.left = '-100%';
				toggleBtn.classList.remove('open');
				Btn.classList.remove('white');
				// window.removeEventListener('scroll', noScroll);
			}
			}