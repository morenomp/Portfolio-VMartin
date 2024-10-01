//  🔴 menu desplegable 🔴 

const abrir = document.getElementById("burguer_button");

const desplegable = document.getElementById("contMenuResp");
const invertlogo = document.getElementById("invertResp");

const line_one = document.getElementById("line_one");
const line_two = document.getElementById("line_two");


// console.log(abrir);
abrir.addEventListener("click", () => {

	desplegable.classList.toggle("activeMenu")

	line_one.classList.toggle("activeCerrar_one")
	line_two.classList.toggle("activeCerrar_two")

	const scroll_one = document.getElementById("hiddenBody");
	scroll_one.classList.toggle("desactiveScroll_one")
});

