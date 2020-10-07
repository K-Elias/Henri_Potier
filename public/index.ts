if (!localStorage.getItem("books")) {
  localStorage.setItem("books", JSON.stringify([]));
};

const buttons: Array<Element> = Array.from(document.getElementsByClassName('shop-item-button'));

const handleClick = (e: Event): void => {
  if (e.target) {
    const books: Array<string> = JSON.parse(localStorage.getItem("books")!);
    if (books) {
      localStorage.setItem("books", JSON.stringify([...books, (<HTMLElement>e.target).id]));
    }
  }
};

buttons.forEach((button: Element): void => {
  button.addEventListener('click', handleClick, false);
})