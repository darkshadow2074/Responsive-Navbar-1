const toggleButton = document.querySelector(".toggle-button");
const navBarLinkContainer = document.querySelector(".nav-link-container");
toggleButton.addEventListener("click" , toggleClickHandler);
function toggleClickHandler(){
   navBarLinkContainer.classList.toggle("active");
   
}