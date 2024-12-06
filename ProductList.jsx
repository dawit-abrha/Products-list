// src/ProductList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios.get('https://fakestoreapi.com/products');
            setProducts(response.data);
        };
        fetchProducts();
    }, []);

    const handleDelete = async (id) => {
        setProducts(products.filter(product => product.id !== id));
    };

    return (
        <div className='container'>
            <h1>Product List</h1>

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.id}>
                            <td>{product.title}</td>
                            <td>{product.description}</td>
                            <td className='actions'>
                                <Link to={`/products/show/${product.id}`}>Show</Link>|
                                <Link to={`/products/edit/${product.id}`}>Edit</Link>
                                <button onClick={() => handleDelete(product.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Link to="/products/new">Add Product</Link>
        </div>
    );
};

export default ProductList;