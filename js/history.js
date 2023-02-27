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
	let classArray = [
		"flex",
		"absolute",
		"bg-white",
		"z-10",
		"w-full",
		"p-5",
		"gap-8",
		"rounded-lg",
		"shadow-lg",
		"left-[0px]",
		"top-[100px]",
	];
	
	for (const cl of classArray) {
		rightNav.classList.toggle(cl);
	}
});
