import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'

const Launch = React.lazy(() => import('./pages/Launch'));
const NewBiography = React.lazy(() => import('./pages/NewBiography'));

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <Suspense fallback={<div>Loading...</div>}>
            <Launch />
          </Suspense>
        } />
        <Route path="/new-biography" element={
          <Suspense fallback={<div>Loading...</div>}>
            <NewBiography />
          </Suspense>
        } />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
