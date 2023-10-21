import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import 'semantic-ui-css/semantic.min.css';
import './App.css'
const Launch = React.lazy(() => import('./pages/Launch'));

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Launch />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;