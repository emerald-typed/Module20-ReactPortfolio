import { useState } from 'react';
import Nav from './Nav';
// import Home from './pages/Home';
// import About from './pages/About';
// import Blog from './pages/Project';
// import Contact from './pages/Contact';

export default function PortfolioContainer() {
    //nifty import trick from my tutor for whole react object not just individual components so now I can use .notation // Sick
    let view;
    switch (window.location.pathname) {
      case '/':
        view = <h1>Home</h1>;
        break;
      case '/About':
        view = <h1>About</h1>;
        break;
      case '/Portfolio':
        view = <h1>Portfolio</h1>;
        break;
      case '/Contact':
        view = <h1>Contact</h1>;
        break;
      default:
        view = <h1>Home</h1>;
        break;
    }

  return (
    <div>
      <Nav/>
    </div>
  );
}
