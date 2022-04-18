import React from 'react';
import ReactDOM from 'react-dom';

import { Sveika } from './Sveika';

// Find all widget divs
const WidgetDivs = document.querySelectorAll('.root')

// Inject our React App into each
WidgetDivs.forEach(Div => {
  ReactDOM.render(
    <React.StrictMode>
      <Sveika />
    </React.StrictMode>,
    Div
  );
})
