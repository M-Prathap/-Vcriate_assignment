import React from "react";
import styles from "./ProductList.module.scss";

const ProductList = ({ products, onAddNode }) => {
  return (
    <div className={styles.sidebar}>
      <h2>Products</h2>
      {products.map(product => (
        <div key={product.id} className={styles.productCard}>
          <div><strong>{product.title}</strong></div>
          <div>${product.price}</div>
          <button onClick={() => onAddNode(product)} className={styles.addButton}>
            Add to Flow
          </button>
        </div>
      ))}
    </div>
  );
};


export default ProductList;
