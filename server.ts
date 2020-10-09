import express, { Application, Request, Response } from 'express';
import { createServer } from 'http';
import axios from 'axios';

const app: Application = express();
const PORT = 5000;

app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(
  express.urlencoded({
    extended: true
  })
);
app.use(express.json());

let bookList: Array<Book> = [];
axios.get('http://henri-potier.xebia.fr/books').then(({ data }) => {
  bookList = [...data];
  return bookList;
});

let cart: Array<Book> = [];

// const offerOperation = (offer) => {
//   let result = [];
//   if (offer.type === 'percentage') {
//     result.push()
//   } else if (offer.type === 'percentage') {

//   } else if (offer.type === 'percentage') {

//   }
// }

app.get('/', async (_, res: Response): Promise<void> => {
  let newBookList: Array<Book> = [];
  bookList.forEach((book: Book): void => {
    if (cart.includes(book)) book = { ...book, isAdded: true };
    else book = { ...book, isAdded: false };
    newBookList.push(book);
  });
  res.render('pages/home', { books: newBookList });
});

app.get('/about', (_, res: Response): void => {
  res.render('pages/about');
});

app.get('/cart', (_, res: Response): void => {
  let offers: any = [];
  if (cart.length > 0) {
    const listBook = cart.map((book: Book) => book.isbn);
    axios.get(`http://henri-potier.xebia.fr/books/{${listBook.join(',')}}/commercialOffers`)
      .then(({ data: { offers } }) => {
        console.log(offers)
      });
  }
  res.render('pages/cart', { books: cart });
});

app.get('/cartItem', (_, res: Response): void => {
  res.send({ cart });
  res.end();
});

app.post('/:isbn', (req: Request): void => {
  const { isbn } = req.params;
  let newElement: Book = bookList.find((book: Book) => book.isbn === isbn)!;
  if (newElement) cart.push(newElement);
});

app.delete('/cartItem/:isbn', (req: Request, res: Response) => {
  const { isbn } = req.params;
  const newCart = cart.filter(book => book.isbn !== isbn);
  cart = [...newCart];
});

createServer(app).listen(PORT, (): void => (
  console.log(`Server is running on http://localhost:${PORT}`)
));