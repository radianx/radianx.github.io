import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Pagos from './pages/Pagos';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/regalito" element={<Pagos />} />
    </Routes>
  </Router>
);

export default App;
