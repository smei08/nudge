const startBtn = document.querySelector(".start-btn");
const containers = document.querySelector(".containers");
const categories = document.querySelector(".categories");
const ideas = document.querySelector(".ideas");
const spinBtn = document.querySelector(".spin-btn");

let allCategories = null;
let selectedCategory = null;

function showContainers() {
  console.log("start btn pressed");
  containers.style.display = "block";
  // startBtn.style.display = "none";
}

startBtn.addEventListener("click", showContainers);

fetch("./ideas.json")
  .then((response) => response.json())
  .then((data) => {
    allCategories = data.categories;
  });

function fetchAndDisplay() {
  const randomNumC = Math.floor(Math.random() * allCategories.length);
  selectedCategory = allCategories[randomNumC];
  getCategory(selectedCategory.name);

  setTimeout(() => {
    const randomNumI = Math.floor(
      Math.random() * selectedCategory.ideas.length,
    );
    const newIdea = selectedCategory.ideas[randomNumI];
    getIdea(newIdea);
  }, 1500);
}

function getCategory(newCategory) {
  categories.innerHTML = newCategory;
}
function getIdea(newIdea) {
  ideas.innerHTML = newIdea;
}

spinBtn.addEventListener("click", fetchAndDisplay);
