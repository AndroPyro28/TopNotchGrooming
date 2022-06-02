import './App.css';
import { Routes, Route } from 'react-router-dom';
import Index from './pages/publicPages/index/Index';
import Home from './pages/customerPages/homepage/Home';
import Dashboard from './pages/adminPages/dashboard/Dashboard';
import PublicNavbar from './components/public_navbar/PublicNavbar';
import Footer from './components/footer/Footer';
import Contact from './pages/publicPages/contact/Contact.jsx';
import About from './pages/publicPages/about/About';
import {Suspense} from "react"
import Login from './pages/publicPages/login_signup/Login';
import Signup from './pages/publicPages/login_signup/Signup';
function App() {

  // const {pathname} = useLocation();

  // useEffect(async () => {
  //   alert(pathname)
  // }, [pathname])

  return (
    <Suspense fallback={<h1>Loading..</h1>}>
    <div className="App">
      
      <PublicNavbar/>
      <Routes>
        <Route path='/' element={<Index/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path="/customer/login" element={<Login/>} />
        <Route path="/customer/signup" element={<Signup/>} />
        <Route path='/customer/' element={<Home/>}/>
        <Route path='/admin/' element={<Dashboard/>}/>
        <Route path='*' element={<h1>Page Not Found</h1>}/>
      </Routes>

      <Footer/>
    </div>
    </Suspense>
  );
}

export default App;
