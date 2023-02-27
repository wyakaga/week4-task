const $ = (element) => document.querySelector(element);

const emailInput = $("#email-input");
const pwdInput = $("#pwd-input");
const emailWrapper = $(".email-wrapper");
const pwdWrapper = $(".pwd-wrapper");
const loginBtn = $("#login-btn");
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

const db = {
	email: "zulaikha17@gmail.com",
	password: "zulaikha17",
	username: "Zulaikha",
};

const openButtonFn = () => {
	let emailValue = emailInput.value;
	let pwdValue = pwdInput.value;
	let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gm;

	if (emailValue === "") {
		errContent = document.createTextNode("Email is required");
		err.appendChild(errContent);
		emailWrapper.appendChild(err);
		return;
	}

	if (!regex.test(emailValue)) {
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

	if (!(emailValue === db["email"] && pwdValue === db["password"])) {
		overlay.classList.remove("hidden");
		dialogue.classList.remove("hidden");
		errContent = document.createTextNode("Invalid email or password");
		msg.appendChild(errContent);
		modalMsg.appendChild(msg);
		return;
	}

	overlay.classList.remove("hidden");
	dialogue.classList.remove("hidden");
	msgContent = document.createTextNode(`Welcome ${db["username"]}!`);
	msg.appendChild(msgContent);
	modalMsg.appendChild(msg);
};

const closeButtonFn = () => {
	overlay.classList.add("hidden");
	dialogue.classList.add("hidden");
	emailInput.value = "";
	pwdInput.value = "";
};

const inputFn = () => {
	err.remove();
	errContent.remove();
};

loginBtn.addEventListener("click", () => openButtonFn());
closeBtn.addEventListener("click", () => closeButtonFn());
emailInput.addEventListener("input", inputFn);
pwdInput.addEventListener("input", inputFn);
