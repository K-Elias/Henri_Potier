import express, { Application, Request, Response } from 'express';
import { createServer } from 'http';
import axios from 'axios';
import compression from 'compression';
import helmet from 'helmet';

const app: Application = express();
const PORT: number = 5000;

const bookApi: string = 'http://henri-potier.xebia.fr/books';

app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(
  express.urlencoded({
    extended: true
  })
);
app.use(express.json());
app.use(helmet());
app.use(compression());

let cart: Book[] = [];
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