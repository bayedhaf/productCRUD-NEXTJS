'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

export default function ReadFile() {
  const params = useParams();
  const id = params?.id;  

  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const handlerRead = async () => {
      if (!id) {
        setError('Invalid product ID');
        return;
      }

      try {
        const res = await axios.get(`/api/product/${id}`);
        setProduct(res.data);
      } catch (error) {
        console.error('Error fetching product:', error);
        setError('Failed to load product. Please try again later.');
      }
    };

    handlerRead();
  }, [id]);

  if (error) return <p className="p-4 text-red-500">{error}</p>;
  if (!product) return <p className="p-4">Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Product Detail</h1>
      <p><strong>ID:</strong> {product.id}</p> 
      <p><strong>Title:</strong> {product.title || 'N/A'}</p>
      <p><strong>Description:</strong> {product.description || 'N/A'}</p>
      <p><strong>Sales:</strong> {product.sales ?? '0'}</p>
      <p><strong>Buy:</strong> {product.buy || 'N/A'}</p>
      <p><strong>Price:</strong> {product.price != null ? product.price : 'N/A'}</p>
    </div>
  );
}
