import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Header from './components/header/header';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer/footer';
import { Container } from 'reactstrap';



function App() {
  return (
    <div className="">
      <Header />
      <Container fluid>
        <Home />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
