import React from 'react';
import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Layout from './hocs/Layout';

import Home from './containers/Home';
import Register from './containers/Register';
import Login from './containers/Login';
import AdminHome from './containers/AdminHome';

import { Provider } from 'react-redux';
import store from './store';

const App = () => (
 <Provider store={store}>
      <Router>
         <Layout>
         <Routes>
            
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/register' element={<Register/>}/>
            <Route exact path='/login' element={<Login/>}/>
            <Route exact path='/home' element={<AdminHome/>}/>
         </Routes>
         </Layout>
      </Router>
</Provider>     
)
export default App;