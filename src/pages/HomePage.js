import React from 'react';
import Header from '../components/Header';
import Content from '../components/Content';
import Footer from '../components/Footer';

function HomePage() {
  return (
    <div className="min-h-screen bg-white overflow-hidden">  
      <Header />
      {/* Adjust the top margin to avoid overlap */}
      <Content />
      <Footer />
    </div>
  );
}

export default HomePage;
