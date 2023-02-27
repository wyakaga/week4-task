const $$ = (element) => document.querySelectorAll(element);
const $ = (element) => document.querySelector(element);

const cards = $$(".cards");
const garbageIcons = $$(".garbage-icon");
const closeIcons = $$(".close-icon");
const toggler = $(".toggler");
const rightNav = $(".right-nav");

cards.forEach((card, index) =>
	cards[index].addEventListener("click", () => {
		card.classList.toggle("bg-second-white");
		garbageIcons[index].classList.toggle("flex");
		closeIcons[index].classList.toggle("flex");
	})
);

garbageIcons.forEach((icon, index) =>
	garbageIcons[index].addEventListener("click", () => {
		cards[index].remove();
	})
);

closeIcons.forEach((icon, index) =>
	closeIcons[index].addEventListener("click", () => {
		icon.classList.toggle("flex");
		closeIcons[index].classList.toggle("flex");
	})
);

toggler.addEventListener("click", () => {
	rightNav.classList.toggle("flex");
	rightNav.classList.toggle("absolute");
	rightNav.classList.toggle("bg-white");
	rightNav.classList.toggle("z-10");
	rightNav.classList.toggle("w-full");
	rightNav.classList.toggle("p-5");
	rightNav.classList.toggle("gap-8");
	rightNav.classList.toggle("rounded-lg");
	rightNav.classList.toggle("shadow-lg");
	rightNav.classList.toggle("left-[0px]");
	rightNav.classList.toggle("top-[100px]");
});
