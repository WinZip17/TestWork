import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import './Normalize.css';
import './App.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
console.log('index');
ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
