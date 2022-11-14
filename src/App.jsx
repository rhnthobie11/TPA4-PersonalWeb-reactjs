import { Routes, Route, Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import reactLogo from './assets/react.svg'
import './App.css'
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import PortoPage from './pages/PortoPage';
import AboutPage from './pages/AboutPage';
import Footer from './pages/Footer';

function App() {

  return (
    <div className="App">
      <Navbar bg="white" variant="light">
        <Container>
                <h4>Raihan Thobie</h4>
                <Nav className="ms-auto">
                    <Link to={"/"}>Home <i className="ri-home-2-fill"></i></Link>
                    <Link to={"/blog"}>Blog <i className="ri-article-fill"></i></Link>
                    <Link to={"/porto"}>Porto <i className="ri-list-check"></i></Link>
                    <Link to={"/about"}>About <i className="ri-user-3-fill"></i></Link>
                </Nav>
        </Container>
      </Navbar>

      <Container>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage/>}/>
          <Route path="/porto" element={<PortoPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Container>
      <Footer/>
    </div>
  )
}

export default App
