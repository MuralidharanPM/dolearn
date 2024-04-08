import './App.css';
import Aboutus from './components/Aboutus';
import Courseoffered from './components/Courseoffered';
import Faq from './components/Faq';
import Footer from './components/Footer';
import Home from './components/Home';
import Howwework from './components/Howwework';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <Aboutus/>
      <Courseoffered/>
      <Howwework/>
      <Faq/>
      <Footer/>
    </>
  );
}

export default App;
