const $modalRecipe = document.querySelectorAll(".main-modal");
const $btnClose = document.querySelectorAll(".btn-close");
const $cardRecipe = document.querySelectorAll(".card-recipe");


$btnClose.forEach((btn, index) => {
   btn.addEventListener("click", () => {
      console.log("CLICK BOTÃO FECHAR")
      $modalRecipe[index].classList.remove("-show")
   })
})

$cardRecipe.forEach((card, index) => {
   card.addEventListener("click", () => {
      console.log("CLICK CARD MODAL")
      $modalRecipe[index].classList.add("-show")
   })
})

