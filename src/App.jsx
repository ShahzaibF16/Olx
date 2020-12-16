import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Link} from 'react-router-dom';
import HomePage from './components/Home'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Route path="/" component={HomePage} />
    <Footer />
    </BrowserRouter>
  )
}

export default App;
