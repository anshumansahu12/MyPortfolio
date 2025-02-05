const scroll = new LocomotiveScroll({
	el: document.querySelector('#main'),
	smooth: true
});
const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		console.log(entry)
		if (entry.isIntersecting) {
			entry.target.classList.add('show');
		} else {
			entry.target.classList.remove('show');
		}
	});
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
const typed = new Typed('.multiple-text', {
	strings: ['Backend Developer', 'Frontend Developer', 'Web-Scrapper', 'Gamer'],
	typeSpeed: 80,
	backSpeed: 80,
	backDelay: 1200,
	loop: true,
});
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('active');
}
window.onscroll = () => {
	menu.classList.remove('bx-x');
	navbar.classList.remove('active');
}
//cursor
var cursor = document.querySelector(".cursor");
var cursor2 = document.querySelector(".cursor2");
document.addEventListener("mousemove", function(e) {
	cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});
const scrollers = document.querySelectorAll(".scroller");
// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
	addAnimation();
}

function addAnimation() {
	scrollers.forEach((scroller) => {
		// add data-animated="true" to every `.scroller` on the page
		scroller.setAttribute("data-animated", true);
		// Make an array from the elements within `.scroller-inner`
		const scrollerInner = scroller.querySelector(".scroller__inner");
		const scrollerContent = Array.from(scrollerInner.children);
		// For each item in the array, clone it
		// add aria-hidden to it
		// add it into the `.scroller-inner`
		scrollerContent.forEach((item) => {
			const duplicatedItem = item.cloneNode(true);
			duplicatedItem.setAttribute("aria-hidden", true);
			scrollerInner.appendChild(duplicatedItem);
		});
	});
}

function loaderAnimation() {
	var loader = document.querySelector("#loader")
	setTimeout(function() {
		loader.style.transform = "translateX(-100%)"
	}, 4200)
}
loaderAnimation() 
    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      loop: true, 
      rewind: true, 
      navigation: false, 
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        768: {
         slidesPerView: 2,
       } , 
      }, 
//       navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//       },
    })
