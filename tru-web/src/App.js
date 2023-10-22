import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LoadingComponent from './components/LoadingComponent';
const Launch = React.lazy(() => import('./pages/Launch'));
const NewBiography = React.lazy(() => import('./pages/NewBiography'));
const EditContent = React.lazy(() => import('./pages/EditContent'));

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<LoadingComponent />}>
              <Launch />
            </Suspense>
          }
        />
        <Route
          path="/new-biography"
          element={
            <Suspense fallback={<LoadingComponent />}>
              <NewBiography />
            </Suspense>
          }
        />
        <Route
          path="/edit"
          element={
            <Suspense fallback={<LoadingComponent />}>
              <EditContent />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
