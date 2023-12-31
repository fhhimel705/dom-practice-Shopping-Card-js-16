document.getElementById("buy-btn").addEventListener("click", function () {
  const price = document.getElementById("price");
  const priceValue = parseFloat(price.innerText);

  const discount = priceValue * (30 / 100);
  const discountPrice = priceValue - discount;

  // ignore 2 line below
  // const pay = document.getElementById('pay');
  // pay.innerText = discountPrice;

  const buyBtn = document.getElementById("buy-btn");
  buyBtn.innerText = "Purchased ";

  const existingPaid = document.getElementById('paid');

  if (existingPaid) {
    existingPaid.innerText = "paid : " + discountPrice + "$";
  } else {
    const paid = document.createElement("p");
    paid.id = 'paid';
    paid.style.fontSize = "24px";
    paid.style.fontWeight = "600";
    paid.innerText = "Paid : " + discountPrice + "$";

    const shoppingCart = document.getElementById("shopping-cart");
    shoppingCart.appendChild(paid);
  }
});
