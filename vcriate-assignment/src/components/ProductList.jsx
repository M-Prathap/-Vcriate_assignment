import React from "react";
import './ProductList.css'; // ✅ import normal CSS

const ProductList = ({ products, onAddNode }) => {
  return (
    <div className="sidebar">
      <h2>Products</h2>
      {products.map(product => (
        <div key={product.id} className="productCard">
          <div><strong>{product.title}</strong></div>
          <div>${product.price}</div>
          <button onClick={() => onAddNode(product)} className="addButton">
            Add to Flow
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
