import React from 'react';
import Header from './components/Header';
import Page from './components/Page';
import Footer from './Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800 pt-16">
      <Header />
      <Page />
      <Footer />
    </div>
  );
}
