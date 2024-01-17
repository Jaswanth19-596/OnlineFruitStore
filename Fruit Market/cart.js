const elementHTML = (obj) => {
  return `
    <div class="fruit-container">
    <img
      class="fruit-image"
      src="${obj.url}"
      alt=""
      data-fruit-key="stawberry"
    />
    <p class='fruit-name'>Fruit Name : ${obj.name}</p>
    <p class='fruit-name'>Quantity : ${obj.quantity}</p>
    <p class='fruit-name'>Price : ${(obj.quantity / 1000) * obj.price}</p>
  </div>`;
};

document.addEventListener("DOMContentLoaded", function () {
  const basket = JSON.parse(localStorage.getItem("basket"));
  let finalHTML = ``;

  basket.forEach((element) => {
    finalHTML += elementHTML(element);
  });

  const totalPrice = JSON.parse(localStorage.getItem("totalPrice"));
  document.getElementById(
    "total-price"
  ).textContent = `Total Price : ${totalPrice}`;

  document.getElementById("cart-container").innerHTML = finalHTML;

  // Changing color of the total Price
  if (totalPrice >= 100 && totalPrice < 250) {
    document.getElementById("total-price").style.color = "blue";
  } else if (totalPrice >= 250 && totalPrice <= 500) {
    document.getElementById("total-price").style.color = "lightyellow";
  } else if (totalPrice > 500) {
    document.getElementById("total-price").style.color = "lightgreen";
  }
});
