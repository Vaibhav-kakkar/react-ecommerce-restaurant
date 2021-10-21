import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Featured from './components/Featured';
import Hero from './components/Hero';
import Products from './components/Product';
import { productData } from './components/Product/data';
import { GlobalStyle } from './globalStyles';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading='Choose your favorite' data={productData} />
      <Featured />
    </Router>
  );
}

export default App;
