import logo from './logo.svg';
import './App.css';
import './Appone.css'
import Navbar from './Re-UsableComponent/Navbar-Component/Navbar.component';
import Sectionone from './Re-UsableComponent/Section-one/Sectionone.component';
import Footer from './Re-UsableComponent/Footer/Footer';
import Mainsection from './Main-Components/Mainsection/Mainsection';
import Instructorsection from './Main-Components/InstructorSection/Instructorsection';
import Customerreview from './Main-Components/CustomerReview/Customerreview';
function App() {
  return (
    <div>
      <body class="bg-white overflow-hidden">
        {/* <!-- Navbar Login --> */}
        <Navbar />
        {/* <!-- Page Content --> */}
        <Sectionone />

        
<Mainsection/>
<Customerreview/>


        {/* footer */}
     <Footer/>

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
