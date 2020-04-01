const $cardRecipe = document.querySelectorAll(".card-recipe");

$cardRecipe.forEach((card, index) => {
   card.addEventListener("click", () => {
      window.location.href = `/receita/${index}`
   })
})

