import { useEffect, useState } from 'react';
import './App.css';
import AppContext from './AppContext';
import Calculater from './components/calculater/Calculater';
import Details from './components/employee/Details';
import Employee from './components/employee/Employee';
import StuRecord from './components/stuRecord/StuRecord';

import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom';
import { Container, Nav, NavDropdown, Navbar, Modal, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { login, selectIsAdmin } from './redux/appReducer';

function App() {
  const [emp, setEmp] = useState({});
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispacher = useDispatch();
  const isAdmin$ = useSelector(selectIsAdmin);

  useEffect(() => {
    dispacher(login({
      user: {name: "Harish", email: "harish@email.com"},
      token: "asdasdasdakjhdka987987",
      isAdmin: false,
    }));
  }, [])

  return (
    <BrowserRouter>
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/employee">Employee</Link>
          </li>
          <li>
            <Link to="/stuRecord">Student Record</Link>
          </li>
        </ul>
      </nav> */}

      {/* <nav className="navbar bg-primary navbar-expand-lg" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Flipkart</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
              </li>
            </ul>
            
            <div className='d-flex'>
              <button className="btn btn-outline-light m-2" type="button">Login</button>
              <button className="btn btn-outline-light m-2" type="button">Sign-up</button>
              <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  HA
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Profile</a></li>
                  <li><a className="dropdown-item" href="#">Settings</a></li>
                  <li><a className="dropdown-item" href="#">Logout</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav> */}


      <Navbar expand="lg" className="bg-primary text-light">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className='text-white'>Home</Nav.Link>
              <Nav.Link href="/employee" className='text-white'>Employee</Nav.Link>
              <Nav.Link href="#link" className='text-white' onClick={handleShow}>
                Launch demo modal</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item className='text-white' href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: {isAdmin$ ? "Admin" : "Gest User"}
          </Navbar.Text>
        </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://static8.depositphotos.com/1000939/923/i/450/depositphotos_9239571-stock-photo-hand-reaching-images-streaming-from.jpg"
              className="d-block w-100 h-50" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://static4.depositphotos.com/1000423/411/i/450/depositphotos_4114844-stock-photo-several-images.jpg"
              className="d-block w-100 h-50" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://static4.depositphotos.com/1000423/399/i/450/depositphotos_3991613-stock-photo-several-images.jpg"
              className="d-block w-100  h-50" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className='row text-center my-5'>
        <div className='col-3 offset-1'>
          <div class="card bg-info">
            <img src="https://static4.depositphotos.com/1000423/399/i/450/depositphotos_3991613-stock-photo-several-images.jpg"
              class="card-img-top border border-primary rounded-circle mx-5 my-3 " alt="..." />
            <div class="card-body">
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        <div className='col-3 mx-5'>
          <div class="card  bg-warning" >
            <img src="https://static4.depositphotos.com/1000423/399/i/450/depositphotos_3991613-stock-photo-several-images.jpg"
              class="card-img-top border border-primary rounded-circle mx-5 my-3 " alt="..." />
            <div class="card-body">
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        <div className='col-3'>
          <div class="card bg-danger" >
            <img src="https://static4.depositphotos.com/1000423/399/i/450/depositphotos_3991613-stock-photo-several-images.jpg"
              class="card-img-top border border-primary rounded-circle mx-5 my-3 " alt="..." />
            <div class="card-body">
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
      </div>

      {/* <AppContext.Provider value={{ emp, setEmp }}> */}
      <Routes>
        <Route path="/" element={<><h1>Home</h1></>} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/stuRecord" element={<StuRecord />} />
      </Routes>
      {/* </AppContext.Provider> */}
    </BrowserRouter>
  );
}

export default App;
