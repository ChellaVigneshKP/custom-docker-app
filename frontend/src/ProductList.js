import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductService from './ProductService';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    ProductService.getProducts().then(response => {
      setProducts(response.data);
    });
  }, []);

  const handleDelete = (id) => {
    ProductService.deleteProduct(id).then(() => {
      setProducts(products.filter(product => product.id !== id));
    });
  };

  return (
    <div>
      <h2 style={styles.heading}>Product List</h2>
      <Link to="/add" style={styles.addButton}>Add Product</Link>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.tableHeader}>ID</th>
            <th style={styles.tableHeader}>Name</th>
            <th style={styles.tableHeader}>Price</th>
            <th style={styles.tableHeader}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id} style={styles.tableRow}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>
                <Link to={`/edit/${product.id}`} style={styles.actionLink}>Edit</Link>
                <button onClick={() => handleDelete(product.id)} style={styles.deleteButton}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  heading: {
    fontSize: '1.5rem',
    marginBottom: '1rem',
    textAlign: 'center',
  },
  addButton: {
    display: 'block',
    width: '120px',
    padding: '10px',
    backgroundColor: '#007bff',
    color: '#fff',
    textDecoration: 'none',
    textAlign: 'center',
    borderRadius: '5px',
    margin: '1rem auto',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '1rem',
  },
  tableHeader: {
    background: '#f8f9fa',
    padding: '10px',
    borderBottom: '1px solid #dee2e6',
    textAlign: 'left',
  },
  tableRow: {
    borderBottom: '1px solid #dee2e6',
  },
  actionLink: {
    marginRight: '1rem',
    color: '#007bff',
    textDecoration: 'none',
  },
  deleteButton: {
    padding: '5px 10px',
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default ProductList;
