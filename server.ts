import express, { Application, Response } from 'express';
import { createServer } from 'http';
import axios from 'axios';

import { Book } from './index';

const app: Application = express();

app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', async (_, res: Response): Promise<void> => {
  const { data }: { data: Array<Book> } =
    await axios.get('http://henri-potier.xebia.fr/books');
  res.render('pages/home', { books: data });
});

app.get('/about', (_, res: Response): void => {
  res.render('pages/about');
});

createServer(app).listen(5000, (): void => console.log('server is running'));