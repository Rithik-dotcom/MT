import React, { Suspense, lazy, useEffect, useState } from 'react';
import './Producttemplate.css';
import { Routes, Route, useLocation } from "react-router-dom";

import Spinner from '../../Spinner/Spinner.jsx';
const Dashboard = lazy(() => import('../Dashboard/Dashboard.jsx'))
const Schedule = lazy(() => import('../Schedule/Schedule.jsx'))
const Calander = lazy(() => import('../Calander/Calander.jsx'))

// import Dashboard from '../NabarTwo_ItemOne/Dashboard.jsx';
// import Schedule from '../Schedule/Schedule.jsx';
// import Calander from '../Calander/Calander.jsx';

// Navbar component
const Navbar = React.memo(({ activeNavItem }) => (
  <nav className="main-menu">
    <h1>Fitness App</h1>
    <img className="logo" src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/4cfdcb5a-0137-4457-8be1-6e7bd1f29ebb" alt="" />
    <ul>
      <li className={`nav-item ${activeNavItem === 0 ? 'active' : ''}`}>
      
        <a href="/user/dashboard" className='nav-item-design '> 
        <i class="bi bi-app-indicator icons fs-4"></i>
          <span className="nav-text">Home</span>
        </a>
      </li>
      <li className={`nav-item ${activeNavItem === 1 ? 'active' : ''}`}>
        <b></b>
        <b></b>
        <a href="/user/schedule" className='nav-item-design '>
        <p className=' icons'>Nook</p>
          <span className="nav-text">Schedule</span>
        </a>
      </li>
      <li className={`nav-item ${activeNavItem === 2 ? 'active' : ''}`}>
        <b></b>
        <b></b>
        <a href="/user/instagram" className='nav-item-design '>
          <p className=' icons'>TNav</p>
          {/* <i className="bi bi-instagram fs-4 icons"></i> */}
          <span className="nav-text">Instagram</span>
        </a>
      </li>
      <li className={`nav-item ${activeNavItem === 3 ? 'active' : ''}`}>
        <b></b>
        <b></b>
        <a href="/user/linkedin" className='nav-item-design '>
          <i className="bi bi-linkedin icons fs-4"></i>
          <span className="nav-text">linkedin</span>
        </a>
      </li>
      <li className={`nav-item ${activeNavItem === 4 ? 'active' : ''}`}>
     
        <a href="/user/purchase" className='nav-item-design '>
       
        <p className='icons'> <i class="bi bi-bag "></i>Place Order</p>
                  
        </a>
      </li>
    </ul>
  </nav>
));

const Producttemplate = () => {
  const location = useLocation();
  const [activeNavItem, setActiveNavItem] = useState(0);

  useEffect(() => {
    switch (location.pathname) {
      case '/user/dashboard':
        setActiveNavItem(0);
        break;
      case '/user/schedule':
        setActiveNavItem(1);
        break;
      case '/user/instagram':
        setActiveNavItem(2);
        break;
      case '/user/linkedin':
        setActiveNavItem(3);
        break;
      case '/user/purchase':
        setActiveNavItem(4);
        break;
      default:
        setActiveNavItem(0);
        break;
    }
  }, [location.pathname]);

  return (
    <div>
      <body>
        <main>
          <Navbar activeNavItem={activeNavItem} />
          <Suspense fallback={<Spinner/>}>
          <Routes>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/settings' element={<Calander />} />
            <Route path='/schedule' element={<Calander />} />
            <Route path='/instagram' element={<Calander />} />
            <Route path='/linkedin' element={<Calander />} />
            <Route path='/purchase' element={<Calander />} />
          </Routes>
          </Suspense>
        </main>
      </body>
    </div>
  );
};

export default Producttemplate;
