const $mainDetail = document.querySelector(".main-detail");
const $btnToggle = document.querySelectorAll(".toggle");
const $content = document.querySelectorAll(".content");

$btnToggle.forEach((btn, index) => {
   btn.addEventListener("click", () => {
      if (!$content[index].classList.contains("-active")) {
         $content[index].classList.add("-active")
         $btnToggle[index].innerHTML = "esconder"
      } else {
         $content[index].classList.remove("-active")
         $btnToggle[index].innerHTML = "mostrar"
      }
   })
})