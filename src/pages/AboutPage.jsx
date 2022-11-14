import React from 'react'
import '../App.css'
import { Card } from 'react-bootstrap';

export default function AboutPage() {
  return (
    <>
        <h3 className='text-center m-4'>About Me</h3>

        <div className="d-flex justify-content-center p-4 Bio">
          <img src={"https://cdn-icons-png.flaticon.com/512/1242/1242108.png?w=740&t=st=1668335539~exp=1668336139~hmac=6f1ca16fa14e1ef4119e6a6d3b6903f3d552c7e667cdb2b37f18210b2be00a09"} width='200px' alt="" />
          <table>
            <tr>
              <td><b>Nama</b></td>
              <td>:</td>
              <td>Raihan Thobie N M</td>
          </tr>
            <tr>
              <td><b>Panggilan</b></td>
              <td>:</td>
            <td>Thobie</td>
          </tr>
          <tr>
            <td><b>Jurusan</b></td>
              <td>:</td>
              <td>Informatika</td>
            </tr>
            <tr>
              <td><b>Asal Universitas</b></td>
              <td>:</td>
              <td>UPN "Veteran" Jawa Timur</td>
            </tr>
            <tr>
              <td><b>Hobi</b></td>
              <td>:</td>
              <td>Motoran</td>
            </tr>
          </table>
        </div>
          <Card className='m-5 p-2 text-white about'>
            <Card.Body>Halo, aku Raihan. mahasiswa UPN "Veteran" Jawa Timur yang sedang menempuh perjalanan semester 5 bersama dengan Studi Independen di Skilvul mengikuti Track Front-End Web Development. aku ingin menambah wawasan seputar bidang Front-end yang dimana tidak bisa ku pelajari dengan sendirinya (karena tidak tau mulai dari mana), dengan bergabungnnya menjadi partisipan di MSIB Batch 3 ini, saya merasa sudah menemukan arah serta petunjuk baru untuk melanjutkan pembelajaran pada bidang ini.</Card.Body>
          </Card>
    </>
  )
}
