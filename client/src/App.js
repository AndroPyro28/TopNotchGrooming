import './App.css';
import {Routes, Route } from 'react-router-dom';
import Index from './pages/publicPages/index/Index';
import Home from './pages/customerPages/homepage/Home';
import Dashboard from './pages/adminPages/dashboard/Dashboard';
import PublicNavbar from './components/navbar/PublicNavbar';
import Contact from './pages/publicPages/contact/Contact.jsx';

function App() {
  return (
    <div className="App">
      <PublicNavbar/>
      <Routes>
        <Route path='/' element={<Index/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/customer/' element={<Home/>}/>
        <Route path='/admin/' element={<Dashboard/>}/>
        <Route path='*' element={<h1>Page Not Found</h1>}/>
      </Routes>
    </div>
  );
}

export default App;
