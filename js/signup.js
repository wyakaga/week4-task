const $ = (element) => document.querySelector(element);

const emailInput = $("#email-input");
const pwdInput = $("#pwd-input");
const phoneInput = $("#phone-input");

const emailWrapper = $(".email-wrapper");
const pwdWrapper = $(".pwd-wrapper");
const phoneWrapper = $(".phone-wrapper");

const signupBtn = $("#signup-btn");
const overlay = $(".modal-overlay");
const dialogue = $(".modal-content");
const modalMsg = $(".modal-msg");
const closeBtn = $("#modal-btn-close");

const msg = document.createElement("p");
msg.setAttribute("class", "msg");
const err = document.createElement("p");
err.setAttribute("class", "err");

let msgContent;
let errContent;

const openButtonFn = () => {
	let emailValue = emailInput.value;
	let pwdValue = pwdInput.value;
	let phoneValue = phoneInput.value;
	let strRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gm;
	let numRegex = /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/gm;

	if (emailValue === "") {
    errContent = document.createTextNode("Email is required");
    err.appendChild(errContent);
    emailWrapper.appendChild(err);
		return;
	}

	if (!strRegex.test(emailValue)) {
		errContent = document.createTextNode("Invalid email");
		err.appendChild(errContent);
		emailWrapper.appendChild(err);
		return;
	}

	if (pwdValue === "") {
		errContent = document.createTextNode("Password is required");
    err.appendChild(errContent);
    pwdWrapper.appendChild(err);
    return;
	}

	if (phoneValue === "") {
		errContent = document.createTextNode("Phone number is required");
    err.appendChild(errContent);
    phoneWrapper.appendChild(err);
    return;
	}

	if (!numRegex.test(phoneValue)) {
		errContent = document.createTextNode("Invalid phone number");
    err.appendChild(errContent);
    phoneWrapper.appendChild(err);
    return;
	}

	overlay.classList.remove("hidden");
	dialogue.classList.remove("hidden");
	msgContent = document.createTextNode(`Welcome ${emailValue}!`);
	msg.appendChild(msgContent);
	modalMsg.appendChild(msg);
};

const closeButtonFn = () => {
	overlay.classList.add("hidden");
	dialogue.classList.add("hidden");
	emailInput.value = "";
	pwdInput.value = "";
	phoneInput.value = "";
	msg.remove();
	msgContent.remove();
};

const inputFn = () => {
	err.remove();
	errContent.remove();
};

signupBtn.addEventListener("click", () => openButtonFn());
closeBtn.addEventListener("click", () => closeButtonFn());
emailInput.addEventListener("input", inputFn);
pwdInput.addEventListener("input", inputFn);
phoneInput.addEventListener("input", inputFn);