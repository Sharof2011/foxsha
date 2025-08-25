// Yulduzlarni dinamik chiqarish
const starsContainer = document.getElementById("stars");
const starsCount = 5;

for (let i = 0; i < starsCount; i++) {
  const star = document.createElement("span");
  star.textContent = "⭐";
  star.classList.add("text-yellow-400", "text-xl");
  starsContainer.appendChild(star);
}
