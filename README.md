<h1 align="center">Magic Button (Kelompok 9 P2)</h1>

<p align="center">Magic Button merupakan sebuah platform berbasis website untuk mempermudah mahasiswa untuk bergabung kedalam video conference. Platform ini dibangun dengan stack teknologi MERN (MongoDB, Express.js, React, dan Node.js)</p>

<div align="center">
    <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/ihsanfir/frontend-magic-button?style=for-the-badge">
    <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/ihsanfir/frontend-magic-button?style=for-the-badge">
    <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/ihsanfir/frontend-magic-button?style=for-the-badge">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/ihsanfir/frontend-magic-button?style=for-the-badge">
</div>

| [Deskripsi Singkat](#deskripsi-singkat) | [User Analysis](#user-analysis) | [Lingkungan Pengembangan](#lingkungan-pengembangan) | [Konsep OOP](#konsep-oop) | [Tipe Desain Pengembangan](#tipe-desain-pengembangan) | [Hasil dan Pembahasan](#hasil-dan-pembahasan) | [Hasil Implementasi](#hasil-implementasi) | [Developer dan Jobdesc](#developer-dan-jobdesc) | [Saran](#saran) | [Link Pendukung](#link-pendukung) |
| :-------------------------------------: | :-----------------------------: | :-------------------------------------------------: | :-----------------------: | :---------------------------------------------------: | :-------------------------------------------: | :---------------------------------------: | :---------------------------------------------: | --------------- | --------------------------------- |

## Deskripsi Singkat

[`^ kembali ke atas ^`](#)

Magic Button merupakan fitur untuk mempermudah mahasiswa untuk masuk kedalam video conference. Mahasiswa tidak perlu pusing untuk mencari link video conference yang ada di masing- masing grup kuliah atau praktikum dimana sering sekali tertimbun chat. Fitur ini menyesuaikan jadwal tiap mahasiswa dan dosen, sehingga apabila sudah waktunya kelas, mahasiswa dan dosen hanya perlu menekan satu tombol di halaman utama dan mereka akan langsung masuk ke dalam kelas online yang sudah disediakan oleh sistem. Tombol tersebut akan membawa pengguna ke dalam link video conference yang benar sesuai jadwal mereka saat itu. Fitur selanjutnya yaitu fitur history video conference yang sudah pernah dihadiri beserta link rekaman dari video conference tersebut sesuai dengan jadwal tiap mahasiswa. Terdapat pula fitur tambahan lain seperti notifikasi pengingat yang muncul setiap kelas virtual akan dimulai dan fitur presensi otomatis setiap mahasiswa mengklik tombol “Magic Button”.

## User Analysis

[`^ kembali ke atas ^`](#)

### User Story

- Saya sebagai mahasiswa, saya ingin bergabung dengan kelas virtual tanpa ribet sehingga saya dapat fokus memperhatikan materi kuliah.
- Saya sebagai mahasiswa, saya ingin melihat kembali rekaman ulang mata kuliah secara lebih mudah dan lengkap.
- Saya sebagai mahasiswa, saya ingin mendapat notifikasi pengingat setiap kelas virtual akan dimulai sehingga saya tidak melewatkan kelas karena lupa.
- Saya sebagai mahasiswa, saya ingin presensi dilakukan otomatis setiap menghadiri kelas virtual sehingga saya tidak melewatkan presensi karena lupa.

## Ruang Lingkup

Aplikasi ini hanya digunakan oleh mahasiswa, dosen, dan pengurus. Digunakan untuk
keperluan perkuliahan secara synchronous.

## Lingkungan Pengembangan

[`^ kembali ke atas ^`](#)

### Software

- Visual Studio Code
- Postman
![Visual Studio Code Logo](./public/vsc_logo.jpg)
![Postman Logo](./public/postman_logo.png)
### Hardware

- processor : Intel core i5-8300
- RAM : 8GB
- VGA : NVIDIA GTX 1050

### Tech Stack

- Next.js (Front-end)
- Express.js (Back-end)
- MongoDB (DBMS)

## Konsep OOP

konsep OOP yang kami gunakan dalam projek ini


[`^ kembali ke atas ^`](#)

## Tipe Desain Pengembangan

[`^ kembali ke atas ^`](#)

### Architectural Pattern

Dalam asritekur mengembanagan website kami menggunakan 
arsitektur Model View Controler (MVC).

![MVC Diagram](./public/mvc_diagram.png)

model digunakan untuk berinteraksi dengan data base
view untuk menampilkan hasil
controler mengatur request yang diminta oleh user

### Design Pattern

Design pattern yang digunakan yaitu 
Creational Desgin Pattern

![creatinal design pattern](./public/creational_design_pattern.png)

pattern ini dibagi menjadi class-creation pattern dan object-creation pattern
dimana class-creation digunakan untuk memanggil fungsi dan 
object-creation untuk menyelesaikan pekerjaan

## Hasil dan Pembahasan

[`^ kembali ke atas ^`](#)

### Use Case Diagram

![Use Case Diagram](https://user-images.githubusercontent.com/60083946/120787993-26959d80-c55a-11eb-9561-38c3bd235899.jpg)

### Activity Diagram
![Activity Diagram](./public/activity_diagram.png)

### Class Diagram

![Class Diagram](./public/class_diagram_revisi.png)

### Entity Relationship Diagram

![URL Diagram](./public/url_diagram_revisi.png)

### Arsitektur Sistem
![Arsitektur Diagram](./public/arsitektur.png)
### Fungsi Utama yang Dikembangkan

fungsi utama yang kita kembangkan adalah tombol join
untuk masuk kedalam video conference sesuai dengan jadwal 
yang dimiliki oleh mahasiswa atau dosen.

### Fungsi CRUD

- CRUD Admin
> Menambah Link
admin dapat menambahkan link video converence yang akan digunakan mahasiswa
> Otomatis Presensi
tombol join otomatis kana menginput daftar hadir mahasiswa kedalam database
## Hasil Implementasi

[`^ kembali ke atas ^`](#)

### Screenshot Sistem

Halaman Utama
![Hasil implementasi](./public/hasil_implementasi_1.png)

Halaman Jadwal Mahasiswa
![Hasil implementasi](./public/hasil_implementasi_2.png)

### Link Aplikasi

Front-end : http://frontend-magic-button.vercel.app/

Back-end : https://psbo-magic-button.herokuapp.com/

## Saran

Sistem yang kami gunakan belum mendapat rincian tentang informasi 
pertemuan keberapa yang dihadiri oleh mahasiswa. Diharapkan untuk 
pengembangan lebih lanjut terdapat detail spesifik tentang pertemuan 
yang sedang dihadiri oleh mahasiswa

[`^ kembali ke atas ^`](#)

## Developer dan Jobdesc

[`^ kembali ke atas ^`](#)
| Nama | NIM | Role |
| --------------------- | --------- | --------- |
| Indra Rizky Gunawan | G64180010 | UI/UX |
| M. Dwiki Ramdhani | G64180032 | Front-end |
| Ihsan Firdaus | G64180054 | Front-end |
| Sultan Fariz | G64180086 | Back-end |
| Fathi Annaufal Soblia | G64180094 | Back-end |

## Link Pendukung

[`^ kembali ke atas ^`](#)

### Figma

https://ipb.link/figma-psbo-kel-9

### Repo Back-end

https://github.com/sultanfariz/backend-magic-button

### API Docs

https://documenter.getpostman.com/view/14458184/TzXwEJLU
