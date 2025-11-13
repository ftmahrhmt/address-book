# 📒 Address Book

Proyek sederhana berbasis web untuk menyimpan dan mengelola daftar kontak.  
Dibuat menggunakan **HTML**, **CSS**, dan **Tailwind CSS** dengan tampilan yang responsif dan mudah digunakan.

## 🚀 Fitur
- Menambahkan, mengedit, dan menghapus data kontak  
- Desain responsif dengan Tailwind CSS  
- Tampilan bersih dan sederhana  

## 🛠️ Teknologi yang Digunakan
- HTML  
- CSS 
- JavaScript

## 📂 Flowchart
```mermaid
flowchart TD
    A["Mulai"] --> B["Tampilkan Daftar Kontak"]
    B --> C{"Aksi Pengguna"}
    C --> J["Selesai"]
    C --> D["Tambah Kontak"]
    C --> E["Edit Kontak"]
    C --> F["Hapus Kontak"]

    D --> G["Tampilkan Form Tambah Kontak"]
    G --> H["Simpan Kontak Baru"]
    H --> B

    E --> I["Tampilkan Form Edit Kontak"]
    I --> K["Perbarui Kontak"]
    K --> B

    F --> L["Konfirmasi Hapus Kontak"]
    L --> M["Hapus Kontak"]
    M --> B
```