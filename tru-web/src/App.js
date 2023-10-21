import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// const TreeMap = React.lazy(() => import('./pages/TreeMap'));

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<TreeMap />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;