const $ = (element) => document.querySelector(element);

const toggler = $(".toggler");
const rightNav = $(".right-nav");

const emailInput = $("#email-input");
const addressInput = $("#address-input");
const phoneInput = $("#phone-input");
const dNameInput = $("#dName-input");
const fNameInput = $("#fName-input");
const lNameInput = $("#lName-input");
const genderRadio = $("input[name=gender-form]:checked");
const dateInput = $("#date-input");
const saveBtn = $("#save-btn");

const overlay = $("#overlay");
const dialogue = $("#dialogue");
const msgWrapper = $("#msg-wrapper");
const closeBtn = $("#close-btn");

const msg = document.createElement("div");
msg.setAttribute(
	"class",
	"flex flex-col gap-y-0.5 text-lg font-semibold font-poppins"
);

msg.innerHTML = "";
let msgContent = `
<p>your email address is ${emailInput.value}</p>
<p>your address is ${addressInput.value}</p>
<p>your phone number is ${phoneInput.value}</p>
<p>your date of birth is ${dateInput.value}</p>
<p>your display name is ${dNameInput.value}</p>
<p>your first name is ${fNameInput.value}</p>
<p>your last name is ${lNameInput.value}</p>
<p>your gender is ${genderRadio.value}</p>
<p>your birthday is ${dateInput.value}</p>`;


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

const saveBtnFn = () => {
	overlay.classList.remove("hidden");
	dialogue.classList.remove("hidden");
	msg.innerHTML += msgContent;
	msgWrapper.appendChild(msg);
};

const closeBtnFn = () => {
	overlay.classList.add("hidden");
	dialogue.classList.add("hidden");
	msg.innerHTML = "";
};

saveBtn.addEventListener("click", () => saveBtnFn());
closeBtn.addEventListener("click", () => closeBtnFn());
