import express, { Application, NextFunction, Request, Response } from 'express';
import { createServer } from 'http';
import axios from 'axios';
import compression from 'compression';

const app: Application = express();
const PORT: number = 5000;

const bookApi: string = 'http://henri-potier.xebia.fr/books';

app.use(compression());
app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true
  })
);

let cart: Cart[] = [];
let bookList: Book[] = [];

axios.get(bookApi).then(({ data }: { data: Book[] }) => {
  bookList = [...data];
});

app.get('/', async (_, res: Response): Promise<void> => {
  res.render('pages/home', { books: bookList });
});

app.get('/about', (_, res: Response): void => {
  res.render('pages/about');
});

app.get('/cart', (_, res: Response): void => {
  res.render('pages/cart', { books: cart });
});

app.post('/cart', (req: Request, res: Response): void => {
  if (!req.body) res.status(404).send('bad request');
  const elem = cart.find((books: Cart) => books.book.isbn === req.body.book.isbn);
  if (elem) {
    elem.quantity += req.body.quantity;
    elem.price += req.body.price;
    res.status(201).send('success');
  } else {
    const newElem: Cart = {
      book: req.body.book,
      price: req.body.price,
      quantity: req.body.quantity
    }
    cart.push(newElem);
    res.status(201).send('success');
  }
});

app.get('/:isbn', (req: Request, res: Response): void => {
  const { isbn } = req.params;
  let element: Book = bookList.find((book: Book) => book.isbn === isbn)!;
  if (element) res.send({ book: element });
});

createServer(app).listen(PORT, (): void => (
  console.log(`Server is running on http://localhost:${PORT}`)
));