import { useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './AddProduct.css'

function AddProduct() {
const [name, setName] = useState("");
const [price, setPrice] = useState("");
const [quantity, setQuantity] = useState("");
const [ category, setCategory] = useState("");
const [ description, setDescription] = useState("");
const [image, setImage] = useState("");
const navigate = useNavigate();
const handleSubmit = async() => {
  try{
 const token = localStorage.getItem('token');
await axios.post(`${process.env.REACT_APP_API_URL}/api/products`,
  { name, price, quantity, category, description, image },
  {
    headers: { Authorization: `Bearer ${token}` }
  })
    
   navigate('/');
  }
catch(err){
  alert(err.response.data.message)
}

}
  return (
    <div className='addProduct-container'>
      <div className='addProduct-box'>
        <h2 className='addProduct-title'>Add Product</h2>
         <input 
         className='addProduct-input'
         type="text"
         value={name}
         placeHolder="Name"
         onChange={(e) => setName(e.target.value)}
         />
           <input 
           className='addProduct-input'
         type="number"
         value={price}
         placeHolder="Price"
         onChange={(e) => setPrice(e.target.value)}
         />
         <input 
         className='addProduct-input'
         type="number"
         value={quantity}
         placeHolder="quantity"
         onChange={(e) => setQuantity(e.target.value)}
         />
         <input 
         className='addProduct-input'
         type="text"
         value={category}
         placeHolder="category"
         onChange={(e) => setCategory(e.target.value)}
         />
         <input 
         className='addProduct-input'
         type="text"
         value={description}
         placeHolder="Description"
         onChange={(e) => setDescription(e.target.value)}
         />
         <input 
         className='addProduct-input'
          type="text"
          value={image}
          placeholder="Image URL"
          onChange={(e) => setImage(e.target.value)}
/>
         <button className='addProduct-btn' onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  )
}
export default AddProduct;