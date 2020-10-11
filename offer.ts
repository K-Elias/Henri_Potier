import axios from 'axios';

const offerApi = (listIsbn: string[]): string => (
  `http://henri-potier.xebia.fr/books/{${listIsbn.join(',')}}/commercialOffers`
);

const offerReducer = (totalPrice: number, offer: Offer, result: number[]): void => {
  if (offer.type === 'percentage') {
    result.push(totalPrice - (totalPrice * (offer.value / 100)));
  } else if (offer.type === 'minus') {
    result.push(totalPrice - offer.value);
  } else if (offer.type === 'slice') {
    const totaltrunc: number = totalPrice / offer.sliceValue!;
    if (totaltrunc > offer.sliceValue!) {
      result.push(totalPrice - (Math.trunc(totaltrunc) * offer.value));
    };
  };
};

export const offerOperation = async (cart: Book[]): Promise<number | null> => {
  if (cart.length < 1) return null;
  const totalPrice: number = cart.reduce((a: number, b: Book) => a + b.price, 0);
  const cartIsbn: string[] = cart.map((book: Book) => book.isbn);
  const { data: { offers } }: { data: { offers: Offer[] } } =
    await axios.get(offerApi(cartIsbn));
  let result: number[] = [];
  offers.forEach((offer: Offer) => offerReducer(totalPrice, offer, result));
  return Math.min(...result);
};