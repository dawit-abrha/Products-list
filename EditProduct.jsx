
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const EditProduct = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProduct = async () => {
            const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
            setProduct(response.data);
        };
        fetchProduct();
    }, [id]);

    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        navigate('/products');
    };

    if (!product) return <div>Loading...</div>;

    return (
        <div className='edit'>
            <form onSubmit={handleSubmit}>
                <h2>Edit Product</h2>
                <input
                    type="text"
                    name="title"
                    value={product.title}
                    onChange={handleChange}
                />
                <input type="number"
                    name="price"
                    value={product.price}
                    onChange={handleChange} />

                <textarea
                    name="description"
                    value={product.description}
                    onChange={handleChange}
                />
                <button type="submit">Update</button>

            </form>
            <p> <Link to={`/products/show/${product.id}`}>Show</Link>|<a href="/products">Home</a></p>
        </div>
    );
};

export default EditProduct;