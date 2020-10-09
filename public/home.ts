interface Book {
  isbn: string
  title: string
  price: number
  cover: string
  synopsis: Array<string>
  isAdded?: boolean
}

const buttons: Array<Element> = Array.from(document.getElementsByClassName('shop-item-button'));

const getItem = async (): Promise<Array<Book>> => {
  const items = await fetch('/cartItem', {
    method: 'GET'
  });
  const response = await items.json();
  return response.cart;
}

const handleClick = async (e: Event): Promise<void> => {
  if (e.target) {
    const elem = (<HTMLElement>e.target).id
    const items: Array<Book> = await getItem();
    if (!items.find(item => item.isbn === elem)) {
      fetch(`/${elem}`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      });
      let isbn: (HTMLElement | null) = document.getElementById(elem)
      if (isbn) {
        let isbnParent: (Node & ParentNode) | null = isbn.parentNode;
        isbn.remove();
        if (isbnParent) {
          const node: HTMLSpanElement = document.createElement('span');
          const textnode: Text = document.createTextNode('Ajouté');
          node.appendChild<Text>(textnode);
          node.classList.add('added-item');
          isbnParent.append(node);
        }
      }
    }
  }
};

buttons.forEach((button: Element): void => {
  button.addEventListener('click', handleClick, false);
})