'use client';

import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Product() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {

        const res = await axios.get('/api/product');
        setPosts(res.data);
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handleDelete=async(id)=>{
  try{
    await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
    alert('deleted product');
  }
  catch (err) {
    console.error("Error deleting products:", err);
  } 
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Product List</h1>
       <Link href='/components/products'> <h1 className="text-xl font-semibold text-gray-600">Record Info</h1></Link>
      </div>

      <div className="overflow-x-auto">
        {loading ? (
          <p className="text-center text-gray-500 py-6">Loading...</p>
        ) : posts.length === 0 ? (
          <p className="text-center text-gray-500 py-6">No products found.</p>
        ) : (
          <table className="min-w-full border border-gray-300 divide-y divide-gray-200">
            <thead className="bg-gray-100 text-left text-sm font-semibold text-gray-700">
              <tr>
                <th className="px-4 py-2">NO</th>
                <th className="px-4 py-2">Pr_ID</th>
                <th className="px-4 py-2">Title</th>
                <th className="px-4 py-2">Description</th>
                <th className="px-4 py-2">Sales</th>
                <th className="px-4 py-2">Buy</th>
                <th className="px-4 py-2">Price</th>
                <th className="px-4 py-2">Read</th>
                <th className="px-4 py-2">Edit</th>
                <th className="px-4 py-2">Delete</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post, index) => (
                <tr key={post.id || index} className="hover:bg-gray-50">
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2">{post.id}</td>
                  <td className="px-4 py-2">{post.title}</td>
                  <td className="px-4 py-2">{post.description}</td>
                  <td className="px-4 py-2">{post.sales}</td>
                  <td className="px-4 py-2">{post.buy}</td>
                  <td className="px-4 py-2">{post.price}</td>
                  <td className="px-4 py-2">

                  <Link href={`/components/${post.id}/read`}>
                  <button className="text-green-600 hover:underline">Read</button>
                  </Link>
                  </td>
                  <td className="px-4 py-2">
                  <Link href={`/components/${post.id}/edit`}>
                  <button className="text-yellow-600 hover:underline">Edit</button>
                  </Link>

                  </td>
                  <td className="px-4 py-2">
                    <button onClick={()=>handleDelete(post.id)} className="text-red-600 hover:underline">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
