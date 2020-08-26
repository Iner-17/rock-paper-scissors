document.addEventListener("DOMContentLoaded", () => {
  //Username will be printed to the top of the guess pic
  let userName = prompt("Enter your name");
  let otherName = userName.slice(1);
  let firstLetter = userName.slice(0, 1);
  document.querySelector(".player-name").textContent =
    firstLetter.toUpperCase() + otherName.toLowerCase();
});
