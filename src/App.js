import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Header from './components/header/header';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './components/footer/footer';



function App() {
  return (
    <div className="">
    <Header/>

      <Home />
      <Footer/>
    </div>
  );
}

export default App;
