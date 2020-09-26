import React from 'react';
import ProductTable from './component/product_table';
import './App.css';
import PropTypes from 'prop-types';

function App() {
  const products=[
    {name: "Jeans Jacket",
    price: "60 DT",
    category: "Clothes"},

    {name: "Smart Phone",
    price: "1090 DT",
    category: "Electronics"},

    {name: "Sneakers",
    price: "120 DT",
    category: "Clothes"},
  ]
  return (
    <div className="App">
      <ProductTable products={products}/>
    </div>
  );
}

ProductTable.PropTypes={
  products:PropTypes.array,
}

export default App;
