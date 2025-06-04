const dialpadButtons = document.querySelectorAll("input[type='button']");
const phoneNumberInput = document.querySelector("input[type='text']");

dialpadButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const onClickValue = button.getAttribute("value");
    const oldInputValue = phoneNumberInput.getAttribute("value");

    phoneNumberInput.setAttribute("value", oldInputValue + onClickValue);
  });
});
