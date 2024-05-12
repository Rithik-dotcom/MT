
import './App.css';
import './Appone.css'
import Navbar from './Re-UsableComponent/Navbar-Component/Navbar.component';
import Footer from './Re-UsableComponent/Footer/Footer';
// import Producttemplate from './Re-UsableComponent/ProductsPage/Template/Producttemplate';
import {  Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Spinner from './Re-UsableComponent/Spinner/Spinner';
import Dipicto from './pages/Dipicto/Dipicto';
const Home = lazy(()=> import('./pages/Home/Home')) ;
const Producttemplate = lazy(()=> import('./Re-UsableComponent/NavbarTwoComponents/NavbarTwo/Producttemplate')) ;

function App() {
  return (
    <div>
      <body class="bg-white overflow-hidden">
        {/* <!-- Navbar Login --> */}
     
          <Navbar />
          <Suspense fallback={<Spinner/>}>
          <Routes>
            <Route path='/' element={<Home  />}/>
            <Route path='/Dipicto' element={<Dipicto  />}/>

     
            <Route path='/user/*' element={<Producttemplate/>} />



          </Routes>
      
          </Suspense>
          <Footer />
        
        
        {/* footer */}

        {/* script */}
        <script src="./assets/libs/bootstrap/dist/js/bootstrap.bundle.min.js"></script>

        {/* <!-- Theme JS --> */}
        <script src="./assets/js/theme.min.js"></script>




      </body>
    </div>
  );
}

export default App;
