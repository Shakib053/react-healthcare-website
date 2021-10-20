import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './Components/Login/Login';
import Services from './Components/Services/Services';
import NotFound from './Components/NotFound/NotFound';
import Home from './Components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import AuthProvider from './context/AuthProvider';
import ContactUs from './Components/ContactUs/ContactUs';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import ServiceDetails from './Components/ServiceDetails/ServiceDetails';
import Doctors from './Components/Doctors/Doctors';
import DoctorDetails from './Components/DoctorDetails/DoctorDetails';
import Publications from './Components/Publications/Publications';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/doctors'>
            <Doctors></Doctors>
          </Route>
          <Route path='/contactus'>
            <ContactUs></ContactUs>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>
          <PrivateRoute path="/serviceDetails/:id">
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
          <PrivateRoute path="/doctorDetails/:id">
            <DoctorDetails></DoctorDetails>
          </PrivateRoute>
          <PrivateRoute path='/publications'>
            <Publications></Publications>
          </PrivateRoute>

          <Route exact='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
