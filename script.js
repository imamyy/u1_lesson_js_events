const btn = document.getElementById("btn");
console.log(btn);
btn.addEventListener("click", () => {
  console.log("Element clicked through function!");
});
// Add text to the page on click
btn.addEventListener("click", () => {
  document.body.append("It seems as if it has been clicked!");
});
// Use a named, referenced function as the click handler for the listener
// Separate named function addText
const addText = () => {
  document.body.append("It seems as if it has been clicked!");
};
// Then reference this in the event Listener
btn.addEventListener("click", addText);
// Toggle the background-color of the page
const changeClass = () => {
  document.body.classList.toggle("black");
};
btn.addEventListener("click", changeClass);
