
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [err, setErr] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newProduct = {
            title,
            description,
            price: parseFloat(price)
        };
        console.log(newProduct)

        try {
            await axios.post('https://fakestoreapi.com/products', newProduct);
            navigate('/products');
        } catch (error) {
            setErr('Failed to add product');
        }
    };

    return (
        <div className='container'>
            <h1>Add Product</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Price:</label>
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Add Product</button>
            </form>
            {err && <p style={{ color: 'red' }}>{err}</p>}
        </div>
    );
};

export default AddProduct;