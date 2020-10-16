import express, { Application, Request, Response } from 'express';
import { createServer } from 'http';
import axios from 'axios';
import compression from 'compression';

import { offerOperation } from './offer';

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

let bookList: Book[] = [];

axios.get(bookApi).then(({ data }: { data: Book[] }): void => {
  bookList = [...data];
});

app.get('/', (_, res: Response): void => {
  res.sendStatus(200);
  res.render('pages/home', { books: bookList });
});

app.get('/about', (_, res: Response): void => {
  res.sendStatus(200);
  res.render('pages/about');
});

app.get('/cart', (_, res: Response): void => {
  res.sendStatus(200);
  res.render('pages/cart');
});

app.post('/offer', async (req: Request, res: Response): Promise<void> => {
  if (req.body || req.body.length > 0) {
    const offer = await offerOperation(req.body);
    res.sendStatus(200);
    res.json(offer);
  } else {
    res.sendStatus(404);
  }
})

app.get('/:isbn', (req: Request, res: Response): void => {
  const { isbn } = req.params;
  let element: Book = bookList.find((book: Book) => book.isbn === isbn)!;
  if (element) res.send({ book: element });
});

createServer(app).listen(PORT, (): void => (
  console.log(`Server is running on http://localhost:${PORT}`)
));