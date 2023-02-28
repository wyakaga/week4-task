const $ = (element) => document.querySelector(element);

const emailInput = $("#email-input");
const sendBtn = $("#send-btn");
const emailWrapper = $("#email-wrapper");
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

  overlay.classList.remove("hidden");
	dialogue.classList.remove("hidden");
	msgContent = document.createTextNode(`Sent to ${emailValue}!`);
	msg.appendChild(msgContent);
	modalMsg.appendChild(msg);
}

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

sendBtn.addEventListener("click", () => openButtonFn());
closeBtn.addEventListener("click", () => closeButtonFn());
emailInput.addEventListener("input", inputFn);