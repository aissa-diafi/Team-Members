import React from 'react';
import ReactDOM from 'react-dom/client'; // React 18
import './style.css';
import App from './components/App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


// React < 18
// import ReactDOM from 'react-dom';
// ReactDOM.render(<App />, document.getElementById('root'));