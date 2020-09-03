

// mobile button open icon click function

document.getElementById("mbl-menu-open").addEventListener("click", showNav);
function showNav(){
	document.getElementById("menu-section").style.display = "block";
	document.getElementById("mbl-menu-open").style.display = "none";
	document.getElementById("mobile-nav-close-btn").style.display = "block";

}
// mobile button close icon click function
document.getElementById("mobile-nav-close-btn").addEventListener("click", hideNav);
function hideNav(){
	document.getElementById("menu-section").style.display = "none";
	document.getElementById("mbl-menu-open").style.display = "block";
	document.getElementById("mobile-nav-close-btn").style.display = "none";

}