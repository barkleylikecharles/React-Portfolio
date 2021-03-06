import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import ContactForm from './components/Contact'
import Home from './components/Home'
import coverImage from "./assets/coverImage.jpg";

function App() {
  const [categories] = useState([
    {
      name: 'Node',
      description: '',
    },
    { name: 'Express', description: '' },
    { name: 'HTML/CSS', description: '' },
    { name: 'React', description: '' },
  ]);
  const [contactSelected, setContactSelected] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        <Home img src="{coverImage}" className="my-2" style={{ width: "100%" }} alt="cover"></Home>
          {!contactSelected ? (
            <>
              <Projects currentCategory={currentCategory}></Projects>
              <About></About>
            </>
          ) : (
            <ContactForm></ContactForm>
          )}
  
      </main>
    </div>
  );
}

export default App;
