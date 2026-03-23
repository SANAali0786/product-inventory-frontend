import { useState} from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate()
  useEffect(() => {
  const token = localStorage.getItem('token');
  axios.get(`${process.env.REACT_APP_API_URL}/api/products`, {
    headers: { Authorization: `Bearer ${token}` }
  })
  .then(res => setProducts(res.data))
}, []);

const handleDelete = async(id) => {
  const token = localStorage.getItem('token');
  await axios.delete(`${process.env.REACT_APP_API_URL}/api/products/${id}`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  // refresh products list after delete
  setProducts(products.filter(product => product._id !== id));
}
  return <div className='dashboard-container'>
  
  <div className='dashboard-header'>
    <h1>Product Inventory</h1>
    <button onClick={() => navigate('/add-product')}>Add Product</button>
  </div>

  <div className='product-grid'>
    {products.map(product => (
     <div key={product._id} className='product-card'>
  {product.image && <img src={product.image} alt={product.name} />}
  <div className='product-info'>
    <h3 className='product-title'>{product.name}</h3>
    <p className='product-price'>₹{product.price}</p>
    <span className='product-category'>{product.category}</span>
    <p className='product-quantity'>Stock: {product.quantity}</p>
    <div className='product-buttons'>
      <button className='btn-edit' onClick={() => navigate(`/edit-product/${product._id}`)}>Edit</button>
      <button className='btn-delete' onClick={() => handleDelete(product._id)}>Delete</button>
    </div>
  </div>
</div>
    ))}
  </div>

</div>
}
export default Dashboard;