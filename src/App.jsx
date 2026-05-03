import React from 'react';
import Registration from './components/Registration';
import Login from './components/Login';
import AdminDashboard from './components/AdminDashboard';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <>
      {/* 
        INSTRUCTOR EVALUATION GUIDE:
        As we haven't studied routing, please uncomment one component at a time 
        below to view it. Only ONE should be active to avoid stacking.
      */}

      {/* <LandingPage /> */}
      
      {/* <Registration /> */}
      
      {/* <Login /> */}
      
      <AdminDashboard />
    </>
  );
}

export default App;
