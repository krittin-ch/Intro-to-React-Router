import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/*
BrowserRouter: This is a component provided by React Router. It uses the HTML5 history API to keep your UI in sync with the URL in the browser address bar. It's usually used at the top level of your application to provide routing functionality to all the components in your application tree.
Routes: This component is used to define the routes for your application. It's part of React Router v6, which introduced a simplified routing model compared to v5. In React Router v6, you define your routes using JSX elements rather than configuring them as props to the <BrowserRouter> or <HashRouter> components. <Routes> is the container for all your route definitions.
Route: This component is used to define individual routes within your application. Each <Route> component specifies a path and the component to render when the URL matches that path. For example, <Route path="/about" element={<About />} /> would render the <About /> component when the URL matches "/about".
*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

reportWebVitals();
