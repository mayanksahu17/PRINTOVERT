import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import {
  Route,
  BrowserRouter as Router, // Renamed BrowserRouter for clarity
  Routes // Import Routes to contain Route components
} from 'react-router-dom';
import './index.css'
import Orders from './components/Orders/Orders.jsx'
import Ticket from './components/Tickets/Ticket.jsx'
import Wallet from './components/wallet/Wallet.jsx'
import Layout from './pages/Layout/Layout.jsx'
import Designlibrary  from './components/Design lib/Designlibrary.jsx'
import Designproduct  from './components/Design product/Designproduct.jsx'
import TShirtDesigner from './components/Tshirtdesigner/TShirtDesigner.jsx'
import Dashboard from './components/Dashboard/Dashboard.jsx'
import Editprofile from './components/Editprofie/Editprofile.jsx'
import Login from './components/login/Login.jsx'
import Createorder from './components/createorders/Createorder.jsx'
import Needhelp from './components/needhelp/Needhelp.jsx'
import Paymentpage from './components/Paymentpage/Paymentpage.jsx'
import Signup from './components/Signup/Signup.jsx'
import Featrenot from './components/!feature/Featrenot.jsx'
import Contactus from './components/contactUs/Contactus.jsx'
import AdLayout from './pages/Admin/Layout/AdLayout.jsx'
import Home from './components/Admin/Home/Home.jsx'
import AdOrders from './components/Admin/Orders/AdOrders.jsx'
import Walletrequest from './components/Admin/Wallet/Walletrequest.jsx';
import Delivered from './components/Admin/Delivered/Delivered.jsx';
import Activeorder from './components/Admin/activeorders/Activeorder.jsx';
import  store  from './store/store.js';
// Define routes using the Router and Routes components
const AppRoutes = () => (
  <Router>
    <Routes>
    <Route path = '/' element = {<Layout/>}>
      <Route path = '' element = {<Dashboard/>}/>
      <Route path = '/design-library' element = {<Designlibrary/>}/>
      <Route path = '/design-product' element = {<Designproduct/>}/>
      <Route path = '/tshirt-designer' element = {<TShirtDesigner/>}/>
      <Route path = '/create-orders' element = {<Createorder/>}/>
      <Route path = '/orders' element = {<Orders/>}/>
      <Route path = '/tickets' element = {<Ticket/>}/>
      <Route path = '/wallet' element = {<Wallet/>}/>
      <Route path = '/edit-profile' element = {<Editprofile/>}/>
      <Route path = '/need-help' element = {<Needhelp/>}/>
      <Route path = '/payment' element = {<Paymentpage/>}/>
      <Route path = '/login' element = {<Login/>}/>
      <Route path = '/featrenot' element = {<Featrenot/>}/>
      <Route path = '/contact-us' element = {<Contactus/>}/>
      <Route path = '/signup' element = {<Signup/>}/>
      </Route>

      <Route path="/admin" element={<AdLayout />}>
        <Route index element={<Home />} />
        <Route path="orders" element={<AdOrders />} />
        <Route path="active-orders" element={<Activeorder />} />
        <Route path="delivered" element={<Delivered />} />
        <Route path="wallet-request" element={<Walletrequest />} />

      </Route>

   
    </Routes>

  </Router>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <Provider store={store}>
   <AppRoutes />
   </Provider>
  </React.StrictMode>
)

