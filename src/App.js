import React, { useState } from 'react';

import Header from "./components/Header/header.js";

import Footer from "./components/Footer/footer.js";

import About from "./pages/About/about.js";
import Contact from "./pages/Contact/contact.js";
import Projects from "./pages/Projects/projects.js";

import "./App.css"
function App() {
  // const [currentCategory, setCurrentCategory] = useState("About");
    const [currentCategory, setCurrentCategory] = useState("Intro");
  
  const pageSelect = () =>{
    if(currentCategory === "Projects"){
      return <Projects></Projects>
    }
    if(currentCategory === "Contact"){
      return <Contact></Contact>
    } 
    if(currentCategory === "About"){
      return <About></About>
    }
  }
  
  return (
    <div>
      <Header
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Header>
      <main>
        { pageSelect()}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;

