import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './EditProduct.css';


function EditProduct() {
const [name, setName] = useState("");
const [price, setPrice] = useState("");
const [quantity, setQuantity] = useState("");
const [ category, setCategory] = useState("");
const [ description, setDescription] = useState("");
const [image, setImage] = useState("")
const navigate = useNavigate();
const { id } = useParams();
 useEffect(() => {
  const token = localStorage.getItem('token');
   axios.get(`${process.env.REACT_APP_API_URL}/api/products/${id}`, {
    headers: { Authorization: `Bearer ${token}` }
  }, [id])
  .then(res => {
    setName(res.data.name);
    setPrice(res.data.price);
    setQuantity(res.data.quantity);
    setCategory(res.data.category);
    setDescription(res.data.description);
    setImage(res.data.image)
  })
}, []);



const handleSubmit = async() => {
  try {
    const token = localStorage.getItem('token');
    await axios.put(`${process.env.REACT_APP_API_URL}/api/products/${id}`,
      { name, price, quantity, category, description, image },
      { headers: { Authorization: `Bearer ${token}` }}
    );
    navigate('/');
  } catch(err) {
    alert(err.response.data.message);
  }
}



  return (
    <div className='editProduct-container'>
      <div className='editProduct-box'>
        <h2 className='editProduct-title'>Edit Product</h2>
         <input 
         className='editProduct-input'
         type="text"
         value={name}
         placeHolder="Name"
         onChange={(e) => setName(e.target.value)}
         />
           <input 
            className='editProduct-input'
         type="number"
         value={price}
         placeHolder="Price"
         onChange={(e) => setPrice(e.target.value)}
         />
         <input 
          className='editProduct-input'
         type="number"
         value={quantity}
         placeHolder="quantity"
         onChange={(e) => setQuantity(e.target.value)}
         />
         <input 
          className='editProduct-input'
         type="text"
         value={category}
         placeHolder="category"
         onChange={(e) => setCategory(e.target.value)}
         />
         <input 
          className='editProduct-input'
         type="text"
         value={description}
         placeHolder="Description"
         onChange={(e) => setDescription(e.target.value)}
         />
         <input 
          className='editProduct-input'
          type="text"
          value={image}
          placeholder="Image URL"
          onChange={(e) => setImage(e.target.value)}
/>
         <button className='editProduct-btn' onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  )
}
export default EditProduct;








