const $ = (element) => document.querySelector(element);

const main = $(".main");
const showBtn = $(".show-btn");
const cardHolders = $(".card-holder");
const card = document.createElement("div");

card.classList.add("flex", "flex-row", "flex-wrap", "w-10/12", "gap-10", "justify-center");
cardHolders.appendChild(card);

const fetchUsers = async () => {
	try {
		const response = await fetch("https://jsonplaceholder.typicode.com/users");
		if (!response.ok) {
			throw new Error(`${response.message} error code: ${response.code}`);
		} else {
			const data = await response.json();
			let content = "";
			data.forEach((datum) => {
				let HTML = `
				<div class="flex justify-center w-1/3 lg:w-3/12">
					<div class="bg-black w-full rounded-xl flex-wrap py-3 pl-2 pr-10 lg:p-4">
						<p class="text-tokyo-aqua lg:text-center text-xl font-bold mb-5">${datum.name}</p>
						<p class="text-tokyo-white">email : ${datum.email}</p>
						<p class="text-tokyo-white">phone : ${datum.phone}</p>
					</div>
				</div>`;
				content += HTML;
			});
			card.innerHTML = content;
		}
	} catch (error) {
		console.log(error);
	}
};

showBtn.addEventListener("click", () => fetchUsers());
