const dialpadButtons = document.querySelectorAll("input[type='button']");
const phoneNumberInput = document.querySelector("input[type='text']");
const deleteNumberButton = document.querySelector(".delete__button");

const dialpadButtonSound = new Audio("/assets/dial-sound.mp3");

dialpadButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const onClickValue = button.getAttribute("value");
    const onClickPhoneNumber = phoneNumberInput.getAttribute("value");
    const newPhoneNumber = onClickPhoneNumber + onClickValue;

    dialpadButtonSound.play();

    formatPhoneNumber(newPhoneNumber);
  });
});

deleteNumberButton.addEventListener("click", () => {
  const oldInputValue = phoneNumberInput.getAttribute("value");

  phoneNumberInput.setAttribute("value", oldInputValue.slice(0, -1));
});

function formatPhoneNumber(phoneNumber) {
  let cleanedPhoneNumber =phoneNumber.replace(/\D/g, "");

  let formattedPhoneNumber;
  if (cleanedPhoneNumber.length <= 2 ) {
    formattedPhoneNumber = `(${cleanedPhoneNumber}`;
  } else if (cleanedPhoneNumber.length <=  7) {
    formattedPhoneNumber = `(${cleanedPhoneNumber.slice(0, 2)})${cleanedPhoneNumber.slice(2)}`;
  } else {
    formattedPhoneNumber = `(${cleanedPhoneNumber.slice(0, 2)})${cleanedPhoneNumber.slice(2, 7)}-${cleanedPhoneNumber.slice(7, 11)}`;
  }

  phoneNumberInput.setAttribute("value", formattedPhoneNumber);
}
