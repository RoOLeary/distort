import React, { useState } from "react";
import JobCard from "./JobCard";

const JobSearchFilter = ({ jobs }) => {

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [country, setCountry] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };


  const handleCheckBoxChange = (event) => {
    console.log(event);
    setCountry(event);
  }

  const clearFilters = (event) => {
    setTitle('');
    setCategory('');
    setLocation('')
    setCountry('');
    setType('');
  }



  const filteredJobs = jobs.filter((job) => {
    const categoryMatch = job.category.toLowerCase().includes(category.toLowerCase());
    const locationMatch = job.location.toLowerCase().includes(location.toLowerCase());
    const typeMatch = job.type.toLowerCase().includes(type.toLowerCase());
    const textMatch = job.title.toLowerCase().includes(title.toLowerCase());
    const countryMatch = job.country.toLowerCase().includes(country.toLowerCase());
    return categoryMatch && locationMatch && typeMatch && textMatch && countryMatch;
  });

  const plural = filteredJobs.length < 1;


  return (
    <div className="container mx-auto mt-4">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/4 px-4">
          <h2 className="text-lg font-bold mb-2">Filter Jobs</h2>
          <div className="mb-4">
            <label htmlFor="category" className="block text-gray-700 font-bold mb-2">
              Category
            </label>
            <input
              type="text"
              name="category"
              id="category"
              placeholder="Enter category"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={category}
              onChange={handleCategoryChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="location" className="block text-gray-700 font-bold mb-2">
              Enter Job title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Enter Job Title"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={title}
              onChange={handleTitleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="location" className="block text-gray-700 font-bold mb-2">
              Location
            </label>
            <input
              type="text"
              name="location"
              id="location"
              placeholder="Enter location"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={location}
              onChange={handleLocationChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="type" className="block text-gray-700 font-bold mb-2">
              Type
            </label>
            <select
              name="type"
              id="type"
              className="w-full px-3 py-2 border border-gray-300 rounded-md mb-4"
              value={type}
              onChange={handleTypeChange}
            >
              <option value="">Select type</option>
              <option value="full-time">Full Time</option>
              <option value="part-time">Part Time</option>
              <option value="contract">Contract</option>
              <option value="internship">Internship</option>
            </select>

            <div className="space-y-4">

              <label htmlFor="country[]" className="block text-gray-700 font-bold mb-2">
                Country
              </label>
              
              <div className="flex items-center">
                <input id="filter-color-0" name="country[]" value="nl" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500" onChange={(e) => handleCheckBoxChange(e.target.value)} />
                <label htmlFor="filter-color-0" className="ml-3 text-sm text-gray-600">The Netherlands</label>
              </div>

              <div className="flex items-center">
                <input id="filter-color-1" name="country[]" value="de" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500" onChange={(e) => handleCheckBoxChange(e.target.value)} />
                <label htmlFor="filter-color-1" className="ml-3 text-sm text-gray-600">Germany</label>
              </div>

              <div className="flex items-center">
                <input id="filter-color-2" name="country[]" value="fr" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500"  onChange={(e) => handleCheckBoxChange(e.target.value)} />
                <label htmlFor="filter-color-2" className="ml-3 text-sm text-gray-600">France</label>
              </div>          
          </div>
        
            <button className="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-slate-900 text-white hover:bg-slate-700 pointer-events-auto mt-8" onClick={clearFilters}>Reset</button>
          </div>
        </div>
        <div className="w-full md:w-3/4 px-4">
          <h2 className="text-lg font-bold mb-2">{`${filteredJobs.length} Job${filteredJobs.length > 1 ? `s` : ``} found`}</h2>
          {filteredJobs.map((job, index) => (
            <JobCard key={index} job={job} />
          ))}
          
        </div>
      </div>
    </div>
  );
};

export default JobSearchFilter;
