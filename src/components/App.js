import React from "react";

function NavBar() {
  return (
    <nav>
      <a href="#home">I'm a link!</a>
    </nav>
  );
}

function Home() {
  return (
    <div id="home">
      <h1>Home</h1>
    </div>
  );
}

function About() {
  return (
    <p>this is an about section</p>
  )
}

function App() {
  return (
    <div id='about'>
      <NavBar />
      <Home /> 
      <About />
    </div>
  );
}

export default App;
