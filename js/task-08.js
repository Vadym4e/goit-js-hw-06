const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", formSubmit);

function formSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("всі поля повинні бути заповнені");
  }

  const formValues = {
    email: email.value,
    password: password.value,
  };

  console.log(formValues);

  event.currentTarget.reset();
}
