import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';

// Find all widget divs
const WidgetDivs = document.querySelectorAll('.gugu_widget')


// Inject our React App into each
WidgetDivs.forEach(Div => {
  ReactDOM.render(
    <React.StrictMode>
      <Main domElement={Div} />
    </React.StrictMode>,
    Div
  );
})
