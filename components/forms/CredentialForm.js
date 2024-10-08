import React from 'react';
import { useState } from "react";
import axios from 'axios';
import Link from 'next/link';

export default function CredentialForm ({
  _id,
  ownerFirstName:existingOwnerFirstName,
  ownerLastName:existingOwnerLastName,
  businessEmail:existingBusinessEmail,
  mobileNumber:existingMobileNumber,
}) {
  const [ownerFirstName, setOwnerFirstName] = useState(existingOwnerFirstName || '');
  const [ownerLastName, setOwnerLastName] = useState(existingOwnerLastName || '');
  const [businessEmail, setBusinessEmail] = useState(existingBusinessEmail || '');
  const [mobileNumber, setMobileNumber] = useState(existingMobileNumber || '');


  async function handleSubmit(ev) {
    ev.preventDefault();
    const data ={ownerFirstName, ownerLastName, businessEmail, mobileNumber};
    try {
      // Create new credentials
      await axios.post('/api/credentials', data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  }

  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="firstName" className="block text-sm font-medium mb-1">Business Owner First Name:</label>
        <input type="text" value={ownerFirstName} 
        onChange={ev => setOwnerFirstName(ev.target.value)}
         id="firstName" name="firstName" required 
         className="w-full p-2 border border-gray-300 
         rounded-md" 
        />
      </div>
      <div className="mb-4">
        <label htmlFor="lastName" className="block text-sm font-medium mb-1">Business Owner Last Name:</label>
        <input type="text" value={ownerLastName}
        onChange={ev => setOwnerLastName(ev.target.value)}
        id="lastName" name="lastName" required className="w-full p-2 border border-gray-300 rounded-md" />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium mb-1">Enter Your Business Email:</label>
        <input type="email" 
        onChange={ev => setBusinessEmail(ev.target.value)} 
        value={businessEmail} id="email" name="email" required className="w-full p-2 border border-gray-300 rounded-md" />
      </div>
      <div className="mb-4">
        <label htmlFor="phoneNumber" className="block text-sm font-medium mb-1">Mobile Phone Number:</label>
        <input type="tel" value={mobileNumber}
        onChange={ev => setMobileNumber(ev.target.value)} 
        id="phoneNumber" name="phoneNumber" required className="w-full p-2 border border-gray-300 rounded-md" />
      </div>
      <div className="mb-4">
        <label htmlFor="birForm" className="block text-sm font-medium mb-1">Do you have BIR 2303 form (BIR Certificate)?</label>
        <div className="flex gap-4 items-center">
          <div className="flex items-center">
            <input type="radio" id="birFormYes" name="birForm" value="yes" className="mr-2" />
            <label htmlFor="birFormYes">Yes</label>
          </div>
          <div className="flex items-center">
            <input type="radio" id="birFormNo" name="birForm" value="no" className="mr-2" />
            <label htmlFor="birFormNo">No</label>
          </div>
        </div>
      </div>
      <Link
        href="/signup"
        className="p-2 bg-red-500 text-white rounded-md
         hover:bg-red-600 focus:outline-none focus:ring-2
          focus:ring-red-300 text-center"
      >
        Get Started
      </Link>
    </form>
  );
};

