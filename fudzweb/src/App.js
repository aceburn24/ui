import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Bestseller from './components/Bestseller';
import Footer from './components/Footer'; // Import Footer component
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './App.css'; // Your custom styles

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-9">
            <Bestseller /> {/* You can create a component for each section */}
            {/* Continue with other components for Foods, Drinks, etc. */}
          </div>
        </div>
      </div>
      <Footer /> {/* Add Footer component */}
    </div>
  );
};

export default App;