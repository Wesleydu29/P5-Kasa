import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';
import ApartmentDetails from './pages/ApartmentDetails';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='*' element={<Error/>}/> 
            <Route path='/apartment/:id' element={<ApartmentDetails/>}/>
          </Routes>
        </main>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;

// le * sert à capturer toutes les URL non définies dans l'application