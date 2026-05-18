import React from 'react';
import Nav from './components/section/Nav';
import Main from './components/section/Main';
import Footer from './components/section/Footer';
import './asset/sass/App.scss';
function App() {
  return (
    <div>
      <Nav />
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
