import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './ProductList';
import ProductForm from './ProductForm';

function App() {
  return (
    <Router>
      <div style={styles.container}>
        <header style={styles.header}>
          <h1 style={styles.heading}>Product Management</h1>
        </header>
        <main style={styles.main}>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/add" element={<ProductForm />} />
            <Route path="/edit/:id" element={<ProductForm />} />
          </Routes>
        </main>
        <footer style={styles.footer}>
          Made with ❤️ by Chella Vignesh K P (G23AI2083) for Virtualization and Cloud Computing
        </footer>
      </div>
    </Router>
  );
}

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '10px 0',
    textAlign: 'center',
    marginBottom: '20px',
    borderRadius: '5px 5px 0 0',
  },
  heading: {
    margin: '0',
    fontSize: '2rem',
  },
  main: {
    backgroundColor: '#f8f9fa',
    padding: '20px',
    borderRadius: '0 0 5px 5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  footer: {
    textAlign: 'center',
    marginTop: '20px',
    color: '#777',
  },
};

export default App;
