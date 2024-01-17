"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const fruitKey = urlParams.get("key");

  const fruits = JSON.parse(localStorage.getItem("fruits"));

  const index = fruits.findIndex((fruit) => fruit.name === fruitKey);

  const fruit = fruits[index];

  document.getElementById("fruit-name").value = fruit.name;
  document.getElementById("fruit-price").value = fruit.price;
  document.getElementById("fruit-quantity").value = fruit.quantity;
  if (fruit.availability === 0) {
    document.getElementById("fruit-availability").value = fruit.availability;
    document.getElementById(
      "available"
    ).textContent = `<p class="error-text">Availability : Out Of Stock</p>`;
  } else {
    document.getElementById("fruit-availability").value = fruit.availability;
  }
  document.getElementById("modify-fruit-image").src = fruit.url;

  // If the fruit is out of stock, make the select button disabled.
  if (fruit.availability === 0) {
    document.getElementById("select-button").classList.add("unavailable");
  }
});

// When a fruit is selected
// Add to basket
// Update the fruits availability
document
  .getElementById("select-button")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const fruits = JSON.parse(localStorage.getItem("fruits"));
    const urlParams = new URLSearchParams(window.location.search);
    const fruitKey = urlParams.get("key");

    const index = fruits.findIndex((fruit) => fruit.name === fruitKey);
    const fruit = fruits[index];

    const url = fruit.url;

    const name = document.getElementById("fruit-name").value;
    const quantity = document.getElementById("fruit-quantity").value;
    const price = document.getElementById("fruit-price").value;

    // Update the fruit availability

    const updatedFruits = fruits.map((ele) => {
      if (ele.name === fruit.name) {
        ele.availability =
          ele.availability -
          parseInt(document.getElementById("fruit-quantity").value);
      }
      return ele;
    });

    // Updat the total price
    let totalPrice = JSON.parse(localStorage.getItem("totalPrice"));
    const kgs = quantity / 1000;
    totalPrice += price * kgs;

    localStorage.setItem("totalPrice", JSON.stringify(totalPrice));
    localStorage.setItem("fruits", JSON.stringify(updatedFruits));

    if (
      Number.parseInt(document.getElementById("fruit-quantity").value) === 0
    ) {
      document.getElementById("equal-zero").style.display = "Block";
      return;
    } else {
      // Add to basket
      const basket = JSON.parse(localStorage.getItem("basket"));
      basket.push({ name, quantity, price, url });
      localStorage.setItem("basket", JSON.stringify(basket));
      document.getElementById("equal-zero").style.display = "None";
    }

    window.location.href = "index.html";
  });

document
  .getElementById("increase-button")
  .addEventListener("click", function (event) {
    event.preventDefault();

    let currentAvailability = Number.parseInt(
      document.getElementById("fruit-availability").value
    );
    let currentQuantity = Number.parseInt(
      document.getElementById("fruit-quantity").value
    );
    currentQuantity += 500;

    if (currentQuantity > 3000) {
      document.getElementById("beyond-limit").style.display = "Block";

      return;
    } else if (currentQuantity > currentAvailability) {
      document.getElementById("beyond-quantity").style.display = "Block";
      return;
    } else if (currentQuantity >= 0 && currentQuantity <= 3000) {
      document.getElementById("behind-limit").style.display = "None";
      document.getElementById("beyond-limit").style.display = "None";
      document.getElementById("beyond-quantity").style.display = "None";
      document.getElementById("equal-zero").style.display = "None";
    }
    document.getElementById("fruit-quantity").value = currentQuantity;
  });

document
  .getElementById("decrease-button")
  .addEventListener("click", function (event) {
    event.preventDefault();
    let currentQuantity = Number.parseInt(
      document.getElementById("fruit-quantity").value
    );
    currentQuantity -= 500;

    if (currentQuantity < 0) {
      document.getElementById("behind-limit").style.display = "block";

      return;
    } else if (currentQuantity >= 0 && currentQuantity <= 3000) {
      document.getElementById("behind-limit").style.display = "None";
      document.getElementById("beyond-limit").style.display = "None";
      document.getElementById("beyond-quantity").style.display = "None";
      document.getElementById("equal-zero").style.display = "None";
      console.log("hehe");
    }
    document.getElementById("fruit-quantity").value = currentQuantity;
  });
