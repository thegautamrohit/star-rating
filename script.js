const stars = document.getElementsByTagName("li");
const starsCollection = Array.from(stars);
const score = document.getElementById("score");

starsCollection.forEach((item, index) => {
  item.addEventListener("click", () => {
    starsCollection.forEach((item, index2) => {
      index >= index2
        ? item.classList.add("active")
        : item.classList.remove("active");
    });
    score.innerText = `${index + 1} stars`;
  });
});
