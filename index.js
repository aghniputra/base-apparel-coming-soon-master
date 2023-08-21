let emailField = document.getElementById("email-field");
let emailLabel = document.getElementById("email-label");
let emailError = document.getElementById("email-error");
let errorWarning = document.getElementById("error-warning");
let submitButton = document.getElementById("submit-button");

function validateEmail() {
  // !emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)
  //   ? (emailError.innerHTML = "Please provide a valid email") : false

  if (
    !emailField.value.match(
      /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z\.]{2,6}$/
    )
  ) {
    emailError.innerHTML = "Please provide a valid email";
    emailField.className =
      "flex justify-end mx-0 my-2 py-4 px-6 relative rounded-full font-display text-red-300 text-base font-semibold border-solid border-2 border-red-200 active:border-red-200 focus:outline-none active:outline-none";
    errorWarning.className = "absolute inset-y-6 right-30 self-end block";
    return false;
  }

  emailError.innerHTML = "";
  errorWarning.className = "absolute inset-y-6 right-30 self-end hidden";
  emailField.className =
    "flex justify-end mx-0 my-2 py-4 px-6 relative rounded-full font-display text-red-300 text-base font-semibold border-solid border border-red-300 active:border-red-200 active:outline-none focus:outline-none active:ring-red-50 active:ring-4 focus:ring-red-50 focus:ring-4";
  return true;
}

submitButton.addEventListener('click', ()=> {
    let value = emailField.value.trim();
    if (emailField.value.length == 0) {
        emailError.innerHTML = "Please provide a valid email";
        emailField.className =
          "flex justify-end mx-0 my-2 py-4 px-6 relative rounded-full font-display text-red-300 text-base font-semibold border-solid border-2 border-red-200 active:border-red-200 focus:outline-none active:outline-none";
        errorWarning.className = "absolute inset-y-6 right-30 self-end block";
        return false;
    }
})
