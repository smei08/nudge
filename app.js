const startBtn = document.querySelector(".start-btn");
const containers = document.querySelector(".containers");
const categoryBtn = document.querySelector(".category-btn");

function showContainers() {
  console.log("start btn pressed");
  containers.style.display = "block";
  startBtn.style.display = "none";
}

startBtn.addEventListener("click", showContainers);

function fetchAndDisplay() {
  fetch("./ideas.json")
    .then((response) => response.json())
    .then((data) => {
      const category = data.categories;
      const randomNumC = Math.floor(Math.random() * category.length);
      const randomNumI = Math.floor(
        Math.random() * category[randomNumC].ideas.length,
      );

      const newIdea = `${category[randomNumC].name}`;
      getIdea(newIdea);
      console.log(category);
      // console.log("random c", category[randomNumC]);
      // console.log("r i ", randomNumI);
      // console.log("length", category[randomNumC].ideas.length);
      // console.log(data.categories[1].ideas[3]);
    });
}

function getIdea(newIdea) {
  const p = document.createElement("p");
  const div = document.querySelector(".cateogories");
  div.innerHTML = "";
  p.textContent = newIdea;
  div.append(p);
}
categoryBtn.addEventListener("click", fetchAndDisplay);
