'use client'
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const Page = () => {
  const [form,setForm]=useState({
    no:'',
    id:'',
    title:'',
    description:'',
    sales:'',
    buy:'',
    price:''
  });
  const router=useRouter()
  const hadlerSubmit=async(e)=>{
      e.preventDefault();
      try {
        const res = await axios.post('https://dummyjson.com/c/fc77-689e-4f14-9997', {
          no: form.no,
          id: form.id,
          title: form.title,
          description: form.description,
          sales: form.sales,
          buy: form.buy,
          price: form.price,
        });
  
        console.log('Form created:', res.data);
        router.push('/');
        setForm({
          no: '',
          id: '',
          title: '',
          description: '',
          sales: '',
          buy: '',
          price: '',
        });
      
      

      } 
    catch(error){
      console.error('error commit',error);
    }
  }
  
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <form onSubmit={hadlerSubmit} className="bg-white shadow-md rounded-lg p-6">
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
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white hover:bg-gray-50">
              <td className="px-4 py-2">
                <input
                  type="number"
                  name="no"
                  value={form.no}
                  onChange={(e)=>setForm({...form,no:e.target.value})}
                  className="w-full border rounded px-2 py-1 text-sm"
                  placeholder="1"
                />
              </td>
              <td className="px-4 py-2">
                <input
                  type="number"
                  name="id"
                  value={form.id}
                  onChange={(e)=>setForm({...form,id:e.target.value})}
                  className="w-full border rounded px-2 py-1 text-sm"
                  placeholder="P001"
                />
              </td>
              <td className="px-4 py-2">
                <input
                  type="text"
                  name="title"
                  value={form.title}
                  onChange={(e)=>setForm({...form,title:e.target.value})}
                  className="w-full border rounded px-2 py-1 text-sm"
                  placeholder="Product title"
                />
              </td>
              <td className="px-4 py-2">
                <input
                  type="text"
                  name="description"
                  value={form.description}
                  onChange={(e)=>setForm({...form,description:e.target.value})}
                  className="w-full border rounded px-2 py-1 text-sm"
                  placeholder="Short description"
                />
              </td>
              <td className="px-4 py-2">
                <input
                  type="text"
                  name="sales"
                  value={form.sales}
                  onChange={(e)=>setForm({...form,sales:e.target.value})}
                  className="w-full border rounded px-2 py-1 text-sm"
                  placeholder="Sales"
                />
              </td>
              <td className="px-4 py-2">
                <input
                  type="text"
                  name="buy"
                  value={form.buy}
                  onChange={(e)=>setForm({...form,buy:e.target.value})}
                  className="w-full border rounded px-2 py-1 text-sm"
                  placeholder="Buy option"
                />
              </td>
              <td className="px-4 py-2">
                <input
                  type="number"
                  name="price"
                  value={form.price}
                  onChange={(e)=>setForm({...form,price:e.target.value})}
                  className="w-full border rounded px-2 py-1 text-sm"
                  placeholder="birr 0.00"
                />
              </td>
            </tr>
          </tbody>
        </table>

        <div className="mt-6 flex justify-end">
          <button
            type="submit"
            className="bg-blue-600 text-white font-medium px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Page;
