const dialpadButtons = document.querySelectorAll("input[type='button']");

dialpadButtons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(button.getAttribute("value"));
  });
});
