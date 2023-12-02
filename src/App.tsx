// App.tsx

import React from 'react';
import './App.css';
import Header from './Components/Header/header';
import Footer from './Components/Footer/footer';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        {/* Your main content goes here */}
        <h1>Welcome to Student Course Management System</h1>
        <p>This is your main content area.</p>
      </main>
      <Footer />
    </div>
  );
};

export default App;
