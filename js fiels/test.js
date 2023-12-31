document.getElementById("buy-btn").addEventListener("click", function () {
  const price = document.getElementById("price");
  const priceValue = parseFloat(price.innerText);

  const discount = priceValue * (30 / 100);
  const discountPrice = priceValue - discount;

  const buyBtn = document.getElementById("buy-btn");
  buyBtn.innerText = "Purchased ";

  // Check if there is already a paid element
  const existingPaid = document.getElementById("paid");

  if (existingPaid) {
    // If it exists, update its content
    existingPaid.innerText = "Paid : " + discountPrice.toFixed(2) + "$";
  } else {
    // If it doesn't exist, create a new paid element
    const paid = document.createElement("p");
    paid.id = "paid"; // Add an ID to the paid element for reference
    paid.style.fontSize = "24px";
    paid.style.fontWeight = "600"; // Use '600' for semi-bold
    paid.innerText = "Paid: " + discountPrice.toFixed(2) + "$";

    const shoppingCart = document.getElementById("shopping-cart");
    shoppingCart.appendChild(paid);
  }
});
