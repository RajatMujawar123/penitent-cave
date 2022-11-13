import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import CartContextProvider from './Components/cartprovider';
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <ChakraProvider>
    <CartContextProvider>   
    <Auth0Provider
    domain="dev-aau6hpjmajw23x3y.us.auth0.com"
    clientId="FS2unDsqyLK46sIsO91VJ8UGuPPngXIm"
    redirectUri={window.location.origin}
  >
    <App />
    </Auth0Provider>
    </CartContextProvider>
  </ChakraProvider>
</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
