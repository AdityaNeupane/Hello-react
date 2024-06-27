import React from 'react';

const Home = () => {
  return (
    <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://plus.unsplash.com/premium_photo-1661638123320-3941dfcb3865?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center p-5">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Our Website</h1>
        <p className="text-xl md:text-2xl">Experience the difference with us.</p>
      </div>
    </div>
  );
};

export default Home;
