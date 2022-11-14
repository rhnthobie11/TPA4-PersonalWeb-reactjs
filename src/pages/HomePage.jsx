import React from 'react'
import { Container, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import '../App.css'
import BlogPage from './BlogPage'
import Footer from './Footer'
import PortoPage from './PortoPage'


export default function HomePage() {
  return (
    <>
      <Container>
        <div className="d-flex justify-content-center header">
          <h2>Halo, saya Raihan. seorang Junior Front-End Web Developer</h2>
          <img src={"https://img.freepik.com/free-vector/code-typing-concept-illustration_114360-3581.jpg?w=740&t=st=1668331059~exp=1668331659~hmac=0bddc650bf3dad9ad8ea8dec1d9fc77a0c614efe897b91d92231484066950fb4"} width="350px" alt="" />
        </div>

        <BlogPage/>
        <PortoPage/>

      </Container>
    </>
  )
}
