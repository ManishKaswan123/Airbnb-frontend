import React from 'react';
import { BrowserRouter as Router, Routes, Route , Navigate} from 'react-router-dom';
import HomePage from './pages/HomePage';
import toast , { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <Toaster />
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;