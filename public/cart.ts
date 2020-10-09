const buttonsRemove: Array<Element> = Array.from(document.getElementsByClassName('shop-item-button'));

const getCart = async (): Promise<Array<Book>> => {
  const items = await fetch('/cartItem', {
    method: 'GET'
  });
  const response = await items.json();
  return response.cart;
}

const removeCart = async (e: Event): Promise<void> => {
  if (e.target) {
    const elem = (<HTMLElement>e.target).id
    const items: Array<Book> = await getCart();
    if (items.find(item => item.isbn === elem)) {
      fetch(`/cartItem/${elem}`, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      });
      let isbn: (HTMLElement | null) = document.getElementById(elem)
      if (isbn) {
        const cartParent = isbn.parentElement;
        if (cartParent) cartParent.parentElement?.remove();
      }
    }
  }
};

buttonsRemove.forEach((button: Element): void => {
  button.addEventListener('click', removeCart, false);
})