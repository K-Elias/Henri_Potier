import { render } from 'react-dom';
import React, { Fragment } from 'react';

import App from './App';

const Main = (): JSX.Element => (
  <Fragment>
    <App />
  </Fragment>
);

const root: HTMLElement = document.getElementById('app-root');
if (!root) throw new Error();
render(<Main />, root);