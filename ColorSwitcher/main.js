const buttonsParent = document.querySelector("#buttons");

buttonsParent.addEventListener("click", function (e) {
  if (e.target.id === "grey") {
    document.body.style.backgroundColor = e.target.id;
  }
  if (e.target.id === "purple") {
    document.body.style.backgroundColor = e.target.id;
  }
  if (e.target.id === "blue") {
    document.body.style.backgroundColor = e.target.id;
  }
  if (e.target.id === "yellow") {
    document.body.style.backgroundColor = e.target.id;
  }
});
