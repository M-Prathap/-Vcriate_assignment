import React, { useEffect, useState } from 'react';
import ProductList from './components/ProductList';
import FlowEditor from './components/FlowEditor';
import './App.css'; 

const App = () => {
  const [products, setProducts] = useState([]);
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => setProducts(data.products))
      .catch(err => console.error(err));
  }, []);

  const addNode = (product) => {
    const newNode = {
      id: `${Date.now()}`,
      data: { label: `${product.title} ($${product.price})` },
      position: { x: Math.random() * 400, y: Math.random() * 400 },
    };
    setNodes((prev) => [...prev, newNode]);
  };

  return (
    <div className="appContainer">
      <div className="layout">
        <ProductList products={products} onAddNode={addNode} />
        <FlowEditor nodes={nodes} setNodes={setNodes} edges={edges} setEdges={setEdges} />
      </div>
    </div>
  );
};

export default App;
