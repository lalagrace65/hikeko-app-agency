"use client";
import { useState } from "react";
import Image from 'next/image';
import React from 'react';
import Header from "./Header";
import CredentialForm from "../forms/CredentialForm";
// This is the sign up page
export default function Layout({ children }) {
  const [showNav, setShowNav] = useState(false);

    return (
      <div className="relative min-h-screen flex flex-col">

        {/* Cover photo and form */}
        <div className="relative flex-grow">
          {/* Cover photo */}
          <div className="relative h-[700px]"> {/* Increased height */}
            <Image
              src="/credentials.jpg" // Ensure this path is correct and the image is in the public folder
              alt="Travel Curator Image"
              layout="fill"
              objectFit="cover"
              priority
              className="absolute inset-0"
            />
          </div>

          {/* Floating Text */}
          <div className="absolute top-1/4 left-8 z-10 text-white">
            <h1 className="text-3xl font-bold mb-2">
              Boost your revenue with Us!
            </h1>
            <p className="text-lg mb-4">
              Sign up now and start earning more with HikeKo.
            </p>
          </div>

          {/* Form Container */}
          <div className="absolute top-[40%] left-8 z-10">
            <div className="bg-white p-7 rounded-lg shadow-lg" style={{ width: '400px', minHeight: '450px' }}>
            <h2 className="text-xl font-semibold mb-4">
              Ready to grow your business?
            </h2>
              <CredentialForm />
            </div>
          </div>
        </div>

        {/* New Opportunities Section */}
        <div className="bg-white p-8 text-center shadow-lg mt-40 mx-auto max-w-4xl relative">
          <h2 className="text-2xl font-bold mb-4">Brings new opportunities</h2>
          <p className="text-lg">Expand your horizons and explore new business opportunities with HikeKo. Join us today and be part of something big!</p>
        </div>

        
      </div>
    );
  }

