const cartItems = document.querySelector('.cart-items');
const getCart = JSON.parse(localStorage.getItem('cart'));
for (let i = 0; i < getCart.length; i++) {
  let cartContent = document.createElement('div');
  cartContent.classList.add('cart-content');
  cartContent.id = `${i}`;
  let cartItem = document.createElement('div');
  cartItem.classList.add('cart-item');
  cartItem.classList.add('cart-column');
  let spanItem = document.createElement('span');
  spanItem.classList.add('cart-price');
  spanItem.classList.add('cart-column');
  let quantityItem = document.createElement('div');
  quantityItem.classList.add('cart-quantity');
  quantityItem.classList.add('cart-column');
  cartItem.innerHTML = `
    <img class="cart-item-image" src="${getCart[i].book.cover}" width="100" height="100">
    <span class="cart-item-title">${getCart[i].book.title}</span>`;
  spanItem.textContent = getCart[i].price + '€';
  quantityItem.innerHTML = `
    <input class="cart-quantity-input" type="number" value="${getCart[i].quantity}"
    step="1" min="1" max="10">
    <button class="btn btn-danger" type="button">Supprimer</button>
  `;
  cartContent.append(cartItem);
  cartContent.append(spanItem);
  cartContent.append(quantityItem);
  cartItems.append(cartContent);
};

const PriceOpp = () => {
  const getCart = localStorage.getItem('cart');
  const prices = Array.from(document.getElementsByClassName('cart-price'));
  const offer = document.querySelector('.offer');
  const totalPrice = document.querySelector('.cart-total-price');
  const priceFinal = prices.slice(1).reduce((a, b) => a + parseInt(b.textContent.slice(0, -1)), 0);
  totalPrice.textContent = priceFinal + '€';
  fetch('/offer', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: getCart
  }).then(res => res.json()).then(res => {
    offer.textContent = res + '€';
  });
}

const cartInput = document.querySelectorAll('.cart-quantity-input');
cartInput.forEach(input => {
  input.onchange = function(event) {
    const index = event.target.parentElement.parentElement.id;
    const newElem = JSON.parse(localStorage.getItem('cart'));
    newElem[index].quantity = event.target.value
    newElem[index].price = event.target.value * getCart[index].book.price;
    localStorage.setItem('cart', JSON.stringify(newElem));
    event.target.parentElement.parentElement.children[1].innerText = newElem[index].price + '€';
    PriceOpp()
  }
})

const btnDelete = document.querySelectorAll('.btn-danger');
btnDelete.forEach(btn => {
  btn.onclick = function(event) {
    const currentCart = JSON.parse(localStorage.getItem('cart'))
    const cart = currentCart.filter(elem => elem.book.title !== event.target.parentElement.parentElement.children[0].innerText);
    localStorage.setItem('cart', JSON.stringify(cart));
    event.target.parentElement.parentElement.remove();
    const items = document.getElementsByClassName('cart-content');
    for (let index = 0; index < items.length; index++) {
      items[index].id = index;
    }
    PriceOpp();
  };
});

PriceOpp();