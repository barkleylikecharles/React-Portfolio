import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import ContactForm from './components/Contact'


function App() {
  const [categories] = useState([
    {
      name: 'Node',
      description: 'Photos of grocery stores, food trucks, and other commercial projects',
    },
    { name: 'Express', description: '' },
    { name: 'HTML/CSS', description: 'D' },
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
