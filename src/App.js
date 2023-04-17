import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import Home from './components/Home';
import Login from './components/Login';
import { Routes, Route } from "react-router-dom"
import Details from './components/Details';
import Errror from './components/Error';
import { Footer } from './components/footer';

function App() {
  
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/details' element={<Details />} />
        <Route path='*' element={<Errror />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;