var responsiveOpen = document.getElementsByClassName("responsive-open");
var responsiveNav = document.getElementById("responsive");


for (var i = 0; i < responsiveOpen.length; i++) {
  responsiveOpen[i].addEventListener("click", function () {
    responsiveNav.classList.toggle("responsive-nav")
  })
}
