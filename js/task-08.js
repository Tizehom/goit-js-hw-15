const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const elements = event.currentTarget.elements;

  const email = elements.email.value;
  const password = elements.password.value;

  if (email.trim() === "" || password.trim() === "") {
    alert("All fields must be completed!");
    return;
  }

  const formData = {
    email,
    password,
  };

  console.log(formData);

  loginForm.reset();
});
