//  🔴 animación scroll header 🔴

window.onscroll = function(){
	hideShowOnScroll()
};

function hideShowOnScroll(){

	console.log(document.documentElement.scrollTop);

	if (document.documentElement.scrollTop < 40) {

		document.getElementById("menu_scroll").style.backgroundColor  = "#f3f3f3";
		document.getElementById("menu_scroll").style.backdropFilter  = "blur(0px)";
		document.getElementById("menu_scroll").style.borderBottom  = "0px solid #cdcdcd1a";
		document.getElementById("menu_scroll").style.padding = "25px 30px";
	}

	else{

		document.getElementById("menu_scroll").style.backgroundColor  = "#ffffff78";
		document.getElementById("menu_scroll").style.backdropFilter  = "blur(9px)";
		document.getElementById("menu_scroll").style.borderBottom  = "1px solid #cdcdcd1a";
		document.getElementById("menu_scroll").style.padding = "19px 30px";
	}

};
