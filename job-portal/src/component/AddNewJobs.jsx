import React, { useState } from 'react';

const AddNewJobs = () =>{
  const [formData, setFormData] = useState({
    id: '',
    title: '',
    company: '',
    location:'',
    description:''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("formData ",JSON.stringify(formData))
    let result = await fetch('http://localhost:3000/api/addnewjobs',{
      method:'post',
      body:JSON.stringify(formData),
      headers:{
        'Content-Type':'application/json'
      },
    });
    result = await result.json();
    console.log('result ',result)
    if(result) {
      alert(result.msg);
      setFormData({
        id: '',
        title: '',
        company: '',
        location:'',
        description:''
      })
    }
  }

 
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 py-36">
      <div className="w-2/3 p-8 space-y-6 bg-white shadow-lg rounded-md">
        <h2 className="text-2xl font-bold text-center">Create New Job</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-1 text-gray-600">Job Id</label>
            <input
              type="text"
              name="id"
              value={formData.id}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-600">Job Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-600">Company Name</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-600">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-600">Description</label>
            <textarea
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddNewJobs;