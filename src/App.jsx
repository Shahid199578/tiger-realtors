import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App({ route }) {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-amber-400 selection:text-slate-900">
      <Navbar />
      <main>{route.render()}</main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
