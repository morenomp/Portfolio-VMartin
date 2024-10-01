//  🔴 animación scroll index 🔴

window.onscroll = function(){
	hideShowOnScroll()
};

function hideShowOnScroll(){

	console.log(document.documentElement.scrollTop);
	// para calcular los pixeles que scrolleas

	if (document.documentElement.scrollTop < 40) {

		document.getElementById("menu_scroll").style.backgroundColor  = "#f3f3f3";
		document.getElementById("menu_scroll").style.backdropFilter  = "blur(0px)";
		document.getElementById("menu_scroll").style.borderBottom  = "0px solid #cdcdcd1a";
		document.getElementById("menu_scroll").style.padding = "25px 30px";
	}

	if (document.documentElement.scrollTop < 200) {
		
		document.getElementById("separation").style.height  = "100px";
		document.getElementById("arrowSeparation").style.opacity = "1";

		document.getElementById("ContImgProjectsIndex").style.opacity = "0";
		document.getElementById("ContProjectsIndex").style.opacity = "0";
		document.getElementById("ContImgProjectsIndex").style.scale = "0.9";
		document.getElementById("ContProjectsIndex").style.scale = "0.9";
	}

	else{

		document.getElementById("menu_scroll").style.backgroundColor  = "#ffffff78";
		document.getElementById("menu_scroll").style.backdropFilter  = "blur(9px)";
		document.getElementById("menu_scroll").style.borderBottom  = "1px solid #cdcdcd1a";
		document.getElementById("menu_scroll").style.padding = "19px 30px";

		document.getElementById("separation").style.height  = "10px";
		document.getElementById("arrowSeparation").style.opacity = "0";

		document.getElementById("ContImgProjectsIndex").style.opacity = "1";
		document.getElementById("ContProjectsIndex").style.opacity = "1";
		document.getElementById("ContImgProjectsIndex").style.scale = "1";
		document.getElementById("ContProjectsIndex").style.scale = "1";
	}

};
