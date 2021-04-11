// Variables
  // Buttons
var cookBtn= document.querySelector('.cook-btn')
  // Hide/Show
var potLogo = document.querySelector('.pot')
var dish = document.querySelector('.dish')
  //radio
var side = document.querySelector('.side')
var mainDish = document.querySelector('.main-dish')
var dessert = document.querySelector('.dessert')
var entireMeal = document.querySelector('.entire-meal')
var suggestion = document.querySelector('h3')
var clearBtn = document.querySelector('.clear-btn')
var recipeBtn = document.querySelector('.recipe-btn')
  // Add Recipe Form
var createBtn = document.getElementById('add-btn')
var recipeName = document.getElementById('recipe-name')
var recipeType = document.getElementById('recipe-type')
var footer = document.querySelector('footer')
var loginBtn = document.querySelector('#login-btn')
// to sort
var recipeContainer = document.querySelector('.recipe-container')
var mealContainer = document.querySelector('#meal-container')
var loginContainer = document.querySelector('#login-container')
var user = document.querySelector('#user')
var username = document.querySelector('#username')
var welcomeMsg = document.querySelector('#welcome')
var favoriteBtn = document.querySelector('favorite-btn')

// Event Listeners
cookBtn.addEventListener('click', randomizeDish)
clearBtn.addEventListener('click', clearPage)
recipeBtn.addEventListener('click', showFooter)
createBtn.addEventListener('click', addRecipe)
loginBtn.addEventListener('click', showEverything)


// Event Handerlers
function randomizeDish(e) {
 e.preventDefault()
if (dish.innerText !== 'Pick a dish!') {
show(clearBtn)
show(suggestion)
}
show(favoriteBtn)
hide(potLogo)
show(dish)


return side.checked ? dish.innerText = randomizeIndex(sides)
 : mainDish.checked ? dish.innerText = randomizeIndex(mains)
 : dessert.checked ? dish.innerText = randomizeIndex(desserts) 
 : entireMeal.checked ? dish.innerText = `${randomizeIndex(sides)} with a side of ${randomizeIndex(mains)} and ${randomizeIndex(desserts)} for dessert!` 
 : console.log('No Radio Selected')
}


function hide(e) {
  e.classList.add('hidden')
}

function show(e) {
  e.classList.remove('hidden')
}

function randomizeIndex(dishList) {
  return dishList[Math.floor(Math.random() * dishList.length)];
}

function clearPage() {
  if (dish.innerText !== 'Pick a dish!') {
  show(potLogo)
  hide(clearBtn)
  hide(suggestion)
  hide(favoriteBtn)
  hide(dish)
  }
}

function addRecipe(e) {
  if (recipeName.value === "") {
    recipeName.value = "Please fill this out"
  }
  e.preventDefault()
  if (recipeType.value.toLowerCase() === "side" ||
      recipeType.value.toLowerCase() === "main dish" ||
      recipeType.value.toLowerCase() === "dessert" ||
      recipeType.value.toLowerCase() === "entire meal" 
      && recipeName.value !== ""
  ) {
    hide(potLogo)
    show(clearBtn)
    show(suggestion)
    show(dish)
    show(favoriteBtn)
    dish.innerText = recipeName.value
  }
  //  recipeType.value = "Side, Main Dish, Dessert, or Entire Meal"
}

function showFooter() {
  show(footer)gi
}

function showEverything(e) {
  e.preventDefault()
  // if(username.value) {
    recipeContainer.removeAttribute('id')
    show(mealContainer)
    show(recipeContainer)
    show(recipeBtn)
    show(cookBtn)
    show(potLogo)
    hide(loginContainer)
    user.innerText = username.value
    show(welcomeMsg) 
  // }
// loginBtn.value = "Put your name in the form please, please!"
 

}