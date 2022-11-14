import React from 'react'
import { Container, Card, Button } from 'react-bootstrap'
import '../App.css'
import porto1 from '../img/porto1.jpeg';
import porto2 from '../img/porto2.jpeg';
import porto3 from '../img/porto3.jpeg';

export default function PortoPage() {
  return (
    <>
    <Container>
      <h3 className='text-center m-4'>Porto</h3>

      {/* <h4>Keahlian</h4> */}
        <div className="d-flex justify-content-center list-skill">
            <h6>C++ <img src={"https://e7.pngegg.com/pngimages/46/626/png-clipart-c-logo-the-c-programming-language-computer-icons-computer-programming-source-code-programming-miscellaneous-template.png"} width="24px" alt=""/></h6>
            <h6>PHP <img src={"https://www.kindpng.com/picc/m/11-118738_php-logo-png-circle-transparent-png.png"} width="24px" alt=""/></h6>
            <h6>HTML<i class="ri-html5-fill"></i></h6>
            <h6>CSS <img src={"https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png"} width="24px" alt=""/></h6>
            <h6>JavaScript <img src={"https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"} width="24px" alt=""/></h6>
            <h6>Bootstrap <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png"} width="24px" alt=""/></h6>
            <h6>TailwaindCSS <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png"} width="24px" alt=""/></h6>
            <h6>ReactJS<i class="ri-reactjs-line"></i></h6>
        </div>

      <div className="d-flex justify-content-center">
        <Card style={{ width: '18rem', margin: '2rem', textAlign: 'center' }}>
          <Card.Img variant="top" src='img/porto1.jpeg' alt='gamau ke load' />
          <Card.Body>
            <Card.Title>List Blog Mental Hack</Card.Title>
            <Card.Text>
              Pengambilan data dari mockAPI.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem', margin: '2rem', textAlign: 'center' }}>
          <Card.Img variant="top" src="img/porto2.jpeg" alt='gamau ke load'/>
          <Card.Body>
            <Card.Title>BMI Calulator</Card.Title>
            <Card.Text>
              Aplikasi penghitung BMI sesuai standar Ideal.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem', margin: '2rem', textAlign: 'center' }}>
          <Card.Img variant="top" src="img/porto3.jpeg" alt='gamau ke load'/>
          <Card.Body>
            <Card.Title>List Movie</Card.Title>
            <Card.Text>
              Pengambilan data dengan restAPI.
            </Card.Text>
          </Card.Body>
        </Card>

        
      </div>
      

    </Container>
    </>

  )
}
