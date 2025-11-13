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
    A[Start] --> B[Display Contact List]
    B --> C{User Action}
    C -->|Add Contact| D[Show Add Contact Form]
    C -->|Edit Contact| E[Show Edit Contact Form]
    C -->|Delete Contact| F[Confirm Deletion]
    D --> G[Save New Contact]
    E --> H[Update Contact]
    F --> I[Remove Contact]
    G --> B
    H --> B
    I --> B
    B --> J[End]
```