import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CustomerProfile from './components/CustomerProfile';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import Login from './components/Login';
import ManagerProfile from './components/ManagerProfile';
import { NavigationBar } from './components/NavigationBar';
import { Signup } from './components/Signup';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path='/' element={<HomePage />} ></Route>
        <Route path="*" element={<HomePage />} />
        <Route path='/customerlogin' element={<Login  entity="customer" />} />
        <Route path='/managerlogin' element={<Login  entity="manager"/>} />
        <Route path='/registercustomer' element={<Signup />} />
        <Route path='/customerprofile' element={<CustomerProfile />} />
        <Route path='/managerprofile' element={<ManagerProfile />} />
      </Routes>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
