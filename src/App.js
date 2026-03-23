import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import AddProduct from './pages/AddProduct';
import EditProduct from './pages/EditProduct';
function App() {
  return (
    <BrowserRouter>
  <Routes>
    <Route path="/" element={<Dashboard/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/register" element={<Register/>} />
    <Route path="/add-product" element={<AddProduct/>} />
    <Route path="/edit-product/:id" element={<EditProduct/>} />
  </Routes>
</BrowserRouter>
  );
}

export default App;
