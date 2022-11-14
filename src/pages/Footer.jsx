import React from 'react'
import { Card } from 'react-bootstrap';
import '../App.css'

export default function Footer() {
  return (
    <div>
        <div className="text-center absolute-bottom footer">
            <p>TPA 4 Front-End Bootcamp</p>
            <a href="https://github.com/rhnthobie11"><i class="ri-github-fill"></i></a>
            <footer className="text-muted pb-4">Personal Website with ReactJS<i class="ri-reactjs-line"></i></footer>
        </div>
    </div>
  )
}
