console.log(basket);

const getFruitImage = (obj) => {
  console.log(obj.name);
  return `<div class="fruit-container">
    <img
      id="fruit-image"
      class="fruit-image"
      src="${obj.url}"
      alt="pineapple"
      data-fruit-key="${obj.name}"
    />
    <h4 class='fruit-name'>${obj.name}</h4>
  </div>`;
};

document.addEventListener("DOMContentLoaded", function () {
  // Load all the fruits
  let html = ``;

  const fruits = JSON.parse(localStorage.getItem("fruits"));

  console.log(fruits);

  fruits.forEach((fruit) => {
    html += getFruitImage(fruit);
  });

  document.getElementById("fruit-images-container").innerHTML = html;

  const totalPrice = JSON.parse(localStorage.getItem("totalPrice"));
  document.getElementById("total-price").textContent =
    "Total Price : " + totalPrice;

  const images = document.getElementsByClassName("fruit-image");

  Array.from(images).forEach((element) => {
    element.addEventListener("click", function () {
      const fruitKey = this.getAttribute("data-fruit-key");
      const url = `modify.html?key=${fruitKey}`;
      window.location.href = url;
    });
  });

  document.getElementById("cart-icon").addEventListener("click", function () {
    window.location.href = "./cart.html";
  });

  // Changing color of the total Price
  if (totalPrice >= 100 && totalPrice < 250) {
    document.getElementById("total-price").style.color = "blue";
  } else if (totalPrice >= 250 && totalPrice <= 500) {
    document.getElementById("total-price").style.color = "lightyellow";
  } else if (totalPrice > 500) {
    document.getElementById("total-price").style.color = "lightgreen";
  }
});
