import axios from 'axios';

const API_URL = 'http://localhost:5000/api/products';

class ProductService {
  getProducts() {
    return axios.get(API_URL);
  }

  getProductById(id) {
    return axios.get(`${API_URL}/${id}`);
  }

  createProduct(product) {
    return axios.post(API_URL, product);
  }

  updateProduct(id, product) {
    return axios.put(`${API_URL}/${id}`, product);
  }

  deleteProduct(id) {
    return axios.delete(`${API_URL}/${id}`);
  }
}

const productServiceInstance = new ProductService(); // Create an instance of ProductService

export default productServiceInstance; // Export the instance as default

