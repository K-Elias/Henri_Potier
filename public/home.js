if (!localStorage.getItem('cart')) {
  localStorage.setItem('cart', JSON.stringify([]));
};

const setCart = (newBook) => {
  const getCart = JSON.parse(localStorage.getItem('cart'));
  const getElem = getCart.find(cart => cart.book.title === newBook.book.title)
  if (getElem) {
    getElem.quantity = parseInt(getElem.quantity) + parseInt(newBook.quantity);
    localStorage.setItem('cart', JSON.stringify(getCart));
  } else {
    localStorage.setItem('cart', JSON.stringify([...getCart, newBook]));
  }
};

var bookData;
const btn = document.getElementsByClassName('btn');
for (let i = 0; i < btn.length; i++) {
  btn[i].onclick = async function() {
    const data = await fetch(`/${this.getAttribute("id")}`, { method: 'GET' });
    var { book } = await data.json();
    bookData = book;
    document.getElementById("book-title").textContent = book.title;
    document.getElementById("book-synopsis").textContent = book.synopsis;
    document.getElementById("image-book").setAttribute('src', book.cover);
    document.getElementById('modal').style.display = 'block';
    document.getElementById("price").textContent = book.price + "€";
  }
};

const modal = document.getElementById('modal');
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

const spinner = document.querySelector('.quantity')
    input = document.querySelector('input[type="number"]'),
    btnUp = document.querySelector('.quantity-up'),
    btnDown = document.querySelector('.quantity-down'),
    min = input.getAttribute('min'),
    max = input.getAttribute('max');

btnUp.onclick = function() {
  var oldValue = parseFloat(input.value);
  if (oldValue >= max) {
    var newVal = oldValue;
  } else {
    var newVal = oldValue + 1;
  }
  document.querySelector('input[type="number"]').value = newVal;
  document.getElementById('price').textContent = newVal * bookData.price + "€";
};

btnDown.onclick = function() {
  var oldValue = parseFloat(input.value);
  if (oldValue <= min) {
    var newVal = oldValue;
  } else {
    var newVal = oldValue - 1;
  }
  document.querySelector("input").value = newVal;
  document.getElementById('price').textContent = newVal * bookData.price + "€";
};

const btnShopCart = document.querySelector('.shop-cart-button');
btnShopCart.onclick = function() {
  const price = document.getElementById('price').textContent;
  const quantity = parseInt(document.querySelector('input[type="number"]').value);
  const intPrice = parseInt(price.slice(0, price.length - 1));
  const newBook = { book: bookData, price: intPrice, quantity };
  setCart({ book: bookData, price: intPrice, quantity });
  modal.style.display = 'none'
  const alert = document.querySelector('.alert');
  alert.style.display = 'block';
  const close = document.querySelector('.closebtn');
  close.onclick = function() {
    alert.style.opacity = '0';
    setTimeout(function(){ alert.style.display = 'none'; }, 600);
  }
  document.querySelector('input[type="number"]').value = "1"
  setTimeout(function(){ alert.style.display = 'none'; }, 1200);
}