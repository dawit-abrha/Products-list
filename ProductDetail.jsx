
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
            setProduct(response.data);
        };
        fetchProduct();
    }, [id]);

    if (!product) return <div>Loading...</div>;

    return (
        <div className='container1'>
            <h3>Name:{product.title}</h3>
            <h3>Price: ${product.price}</h3>
            <h3>Description:{product.description}</h3>
            <div>
                <p><a href="/products"> <button > back</button></a><span>/</span>
                    <Link to={`/products/edit/${product.id}`}>Edit</Link> </p>
            </div>
        </div>
    );
};

export default ProductDetail;