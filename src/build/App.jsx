import React from 'react'
import Main from './components/Main'
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <div className="overlay"></div>
    <Header />
    <Main />
    <Footer />
    </>
  );
}

export default App