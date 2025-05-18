# Belajar DOM (Document Object Model) JavaScript

## Apa itu DOM?

DOM (Document Object Model) adalah representasi struktur halaman web sebagai pohon objek yang dapat diakses dan dimanipulasi menggunakan JavaScript. Dengan DOM, kita bisa mengubah konten, struktur, dan style halaman secara dinamis tanpa perlu reload.

## Penjelasan Singkat dan Fitur DOM

- **Mengakses Elemen**  
  Memilih elemen HTML dengan metode seperti:  
  - `getElementById()`  
  - `getElementsByClassName()`  
  - `getElementsByTagName()`  
  - `querySelector()` dan `querySelectorAll()`

- **Manipulasi Konten**  
  Mengubah isi elemen dengan properti:  
  - `textContent` (mengubah teks tanpa HTML)  
  - `innerText` (mengubah teks yang terlihat)  
  - `innerHTML` (mengubah isi HTML di dalam elemen)

- **Manipulasi Atribut**  
  Mengatur atribut elemen seperti `src`, `href`, dll menggunakan:  
  - `setAttribute()`  
  - `getAttribute()`  
  - `removeAttribute()`

- **Manipulasi Style dan Class**  
  Mengubah gaya visual elemen secara langsung atau dengan menambah/menghapus kelas CSS:  
  - `element.style.property`  
  - `classList.add()`, `classList.remove()`, `classList.toggle()`

- **Event Handling**  
  Menangani interaksi pengguna seperti klik, submit, input, dll dengan:  
  - `addEventListener()`

- **Menambah dan Menghapus Elemen**  
  Membuat, menambah, atau menghapus elemen dari halaman:  
  - `createElement()`  
  - `appendChild()`  
  - `removeChild()`

- **Navigasi DOM**  
  Mengakses elemen terkait dalam struktur DOM:  
  - `parentNode`  
  - `children`  
  - `nextSibling` dan `previousSibling`

- **Integrasi API dan Data Dinamis**  
  Mengambil data dari server atau API dan menampilkan konten secara dinamis di halaman menggunakan teknik seperti `fetch()`.

## Kenapa Belajar DOM Penting?

DOM adalah fondasi bagi pengembangan web interaktif. Dengan menguasai DOM, kamu dapat membuat aplikasi web yang dinamis, responsif, dan kaya fitur tanpa harus me-refresh halaman secara manual.

---

