import React, { useState } from 'react'
import { Container,Accordion } from 'react-bootstrap'
import BlogCard from './BlogCard'

export default function BlogPage() {
  const blogContent = [
    {
      id: "1",
      title: "5 Cara agar Foto WhatsApp tidak pecah",
      content: "Foto profil WhatsApp yang buram atau kabur tentunya tidak menarik untuk dilihat. Namun, Anda tidak perlu khawatir, sebab ada beberapa cara yang dapat dilakukan agar foto profil WhatsApp tidak pecah. Anda dapat melakukannya dengan mudah dan tidak perlu menggunakan aplikasi tambahan. Anda hanya perlu memerhatikan pengaturan serta ukuran foto yang hendak digunakan sebagai foto profil.",
      sumber: "https://www.cnnindonesia.com/teknologi/20221107164512-190-870645/5-cara-agar-foto-profil-whatsapp-tidak-pecah-tanpa-aplikasi"
    },
    {
      id: "2",
      title: "Centang Biru Berbayar Twitter Bakal Aktif Lagi Pekan Depan",
      content: "Elon Musk menyampaikan bahwa layanan centang biru berbayar Twitter akan kembali hadir pada akhir pekan depan. Hal ini disampaikannya melalui cuitan akun Twitter miliknya.",
      sumber: "https://www.cnnindonesia.com/teknologi/20221113114828-185-873043/centang-biru-berbayar-twitter-bakal-aktif-lagi-pekan-depan"
    },
    {
      id: "3",
      title: "Ribuan ODP IndiHome Cover G20 Bali, Jaringan Dijamin Aman?",
      content: "Sebanyak 2.000 teknisi komunikasi disiapkan untuk puncak KTT G20 di Pulau Bali untuk memantau kelancaran jaringan Telkom dan anak usahanya termasuk IndiHome.",
      sumber: "https://www.cnnindonesia.com/teknologi/20221113133423-213-873072/ribuan-odp-indihome-cover-g20-bali-jaringan-dijamin-aman"
    },
    {
      id: "4",
      title: "Penduduk Manusia Capai 8 Miliar Sepekan Lagi, Cek Catatan Sejarahnya",
      content: "Populasi Bumi akan mencapai 8 miliar orang pada 15 November 2022. Rekor bersejarah bagi peradaban umat manusia!. Peradaban manusia membutuhkan 12 tahun untuk menambah populasi dari 7 miliar menjadi 8 miliar orang. Sedangkan untuk mencapai populasi 9 miliar orang setidaknya dibutuhkan 15 tahun dari sekarang, yang artinya angka tersebut baru akan tercapai pada 2037.",
      sumber: "https://www.cnnindonesia.com/teknologi/20221111123856-199-872493/penduduk-manusia-capai-8-miliar-sepekan-lagi-cek-catatan-sejarahnya"
    },
    {
      id: "5",
      title: "Jokowi Yakin Elon Musk Akan Buka Pabrik Tesla di Indonesia",
      content: "Presiden Joko Widodo (Jokowi) mengatakan ingin membuat sebuah ekosistem besar untuk baterai kendaraan listrik (EV baterai) di Indonesia.",
      sumber: "https://www.cnnindonesia.com/otomotif/20221113135732-579-873094/jokowi-yakin-elon-musk-akan-buka-pabrik-tesla-di-indonesia"
    },
    {
      id: "6",
      title: "Cara Baru Punya Mobil Listrik Tanpa Beli",
      content: "Toyota Astra Motor (TAM) menawarkan dua cara membeli mobil listrik bZ4X, yaitu membeli atau sewa. Menyewa mobil bisa jadi alternatif baru bagi masyarakat yang punya uang banyak tapi enggak mau ribet. Merek Jepang ini telah menyiapkan skema khusus dalam satu layanan kepada mereka yang menginginkan mobil listrik tanpa membeli. Sewa artinya tak hanya membayar unit pinjaman untuk periode tertentu, tetapi termasuk juga biaya perawatan hingga pembayaran pajak.",
      sumber: "https://www.cnnindonesia.com/otomotif/20221111183401-603-872675/cara-baru-punya-mobil-listrik-tanpa-beli"
    },
  ]
  return (
    <>
      <Container className='Blog'>
        <h3 className='text-center mb-4 text-white'>Blog</h3>
        <div className="Blogs">
          {blogContent.map((el) => {
            return <BlogCard key={el.id} id={el.id} title={el.title} content={el.content} sumber={el.sumber}/>
          })}
        </div>
      </Container>
    </>
  )
}
