import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProductService from './ProductService';

const ProductForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState({ name: '', price: '' });
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    if (id) {
      setIsEdit(true);
      ProductService.getProductById(id).then(response => {
        setProduct(response.data);
      });
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEdit) {
      ProductService.updateProduct(id, product).then(() => {
        navigate('/');
      });
    } else {
      ProductService.createProduct(product).then(() => {
        navigate('/');
      });
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>{isEdit ? 'Edit Product' : 'Add Product'}</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Name</label>
          <input type="text" name="name" value={product.name} onChange={handleChange} style={styles.input} required />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Price</label>
          <input type="number" name="price" value={product.price} onChange={handleChange} style={styles.input} required />
        </div>
        <button type="submit" style={styles.button}>{isEdit ? 'Update' : 'Add'}</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    fontSize: '1.5rem',
    marginBottom: '1rem',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formGroup: {
    marginBottom: '1rem',
  },
  label: {
    marginBottom: '0.5rem',
    fontSize: '1rem',
    fontWeight: 'bold',
  },
  input: {
    padding: '10px',
    fontSize: '1rem',
    border: '1px solid #ccc',
    borderRadius: '5px',
    width: '100%',
  },
  button: {
    padding: '10px',
    fontSize: '1rem',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default ProductForm;
