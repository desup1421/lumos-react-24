## Library yang dibutuhkan

- [Axios](https://www.npmjs.com/package/axios)
- [Bootstrap](https://getbootstrap.com/)
- [Bootstrap Icons](https://icons.getbootstrap.com/)
- [JSON Server](https://github.com/typicode/json-server)
- [Bootstrap](https://react-bootstrap.github.io/)
- [React Router](https://reactrouter.com/)
- [Prop Types](https://www.npmjs.com/package/prop-types)
- [Sweet Alert](https://sweetalert2.github.io/)

## Deskripsi Tugas

Siswa akan mengembangkan aplikasi dengan menambahkan logika yang diperlukan agar aplikasi dapat:

- Menambahkan aktivitas baru,
- Menampilkan daftar aktivitas yang tersimpan,
- Mengedit dan memperbarui aktivitas,
- Menghapus aktivitas.

## Langkah-langkah Implementasi

### Setup JSON Server:

- Buat file db.json untuk menyimpan data aktivitas.
- Konfigurasi JSON Server agar berjalan di localhost:3000.

### Membaca dan Menampilkan Data Aktivitas:

- Gunakan useEffect dan axios untuk mengambil data dari JSON Server.
- Tampilkan data aktivitas dalam daftar pada halaman utama.

### Menambahkan Aktivitas Baru:

- Perbarui form modal (ActivityForm.js) agar dapat menambah aktivitas ke JSON Server.
- Gunakan axios.post untuk menyimpan data dan useState untuk memperbarui daftar di UI setelah aktivitas berhasil ditambahkan.

### Mengedit Aktivitas:

- Tambahkan logika agar modal form dapat berfungsi untuk mengedit data.
- Gunakan axios.put untuk memperbarui data di server.
- Pastikan data yang diedit tampil secara real-time di daftar aktivitas.

### Menghapus Aktivitas:

- Tambahkan logika di ActivityList.js untuk menghapus aktivitas dari daftar.
- Gunakan axios.delete untuk menghapus data di server dan hapus aktivitas dari UI setelah berhasil.

### Navigasi Antar Halaman:

- Gunakan React Router untuk menavigasi antara halaman utama dan halaman detail.
- Pastikan setiap aktivitas memiliki tautan untuk melihat detailnya.

### Feedback Pengguna:

- Tambahkan notifikasi menggunakan SweetAlert2 untuk memberi tahu pengguna ketika aktivitas ditambahkan, diperbarui, atau dihapus dengan sukses.

## Petunjuk Tambahan

- State Management: Gunakan useState untuk menyimpan dan memperbarui data aktivitas secara real-time di komponen.
- Hooks: Implementasikan useEffect untuk memuat data awal, dan useState untuk menangani form.
- Error Handling: Tampilkan pesan kesalahan jika ada masalah saat mengakses server atau saat menyimpan data.

## Hasil Akhir

Pada akhir tugas, siswa akan memiliki aplikasi yang sepenuhnya berfungsi dengan fitur-fitur berikut:

- Menambahkan, mengedit, menghapus, dan menampilkan daftar aktivitas.
- Navigasi ke halaman detail untuk melihat informasi lengkap dari setiap aktivitas.
- Feedback visual menggunakan SweetAlert2 untuk meningkatkan pengalaman pengguna.
