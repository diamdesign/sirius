// Code here!

const productHeader = document.querySelector(".art-1 h3");
productHeader.innerText = "Potato";

const nav = document.querySelector("nav");
nav.children[0].innerText = "Start";

const contact = document.querySelector("footer article:first-child a:last-child");
contact.innerText = "Mail Us";

const fireHoodie = document.querySelector(".art-2 p");
fireHoodie.innerText = "Changing the information about this hoodie.";

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
	button.style.backgroundColor = "green";
	button.style.fontWeight = "bold";
	button.style.width = "150px";
	button.innerText = "Add to cart";
});

const changeBack = document.querySelector(".art-1 figure");
changeBack.style.background = "royalblue";

const changeAdress = document.querySelector("footer article:nth-child(2) p");
changeAdress.innerText = "New adress";

const allP = document.querySelectorAll("p");
allP.forEach((p) => {
	p.style.color = "#888";
});

nav.children[0].classList.add("active");

const logo = document.querySelector(".logo");
logo.classList.remove("logo");

const newMenu = '<a href="#">News</a>';

nav.children[2].insertAdjacentHTML("afterend", newMenu);

const newProduct =
	'<article class="art-4">\
            <figure><img src="img/hoodie-forrest.png" alt="hoodie"></figure>\
            <h2>Sinus Hoodie</h2>\
            <h3>Forrest</h3>\
            <p style="color: rgb(136, 136, 136);">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolores.</p>\
            <button style="background-color: green; font-weight: bold; width: 150px;">Add to cart</button>\
        </article>';

const main = document.querySelector("main");
main.insertAdjacentHTML("beforeend", newProduct);

logo.addEventListener("click", function () {
	console.log("found you!");
});

const articles = document.querySelectorAll("article");
articles.forEach((article) => {
	article.addEventListener("click", function () {
		const h3Element = article.querySelector("h3");

		if (h3Element) {
			const elementText = h3Element.innerText;
			console.log(`Hi, I'm article ${elementText}`);
		}
	});
});
