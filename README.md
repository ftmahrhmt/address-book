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
    A["Start"] --> B["Application Loaded"]

    B --> C["Display Contact List"]
    C --> D["User Can Search Contacts"]

    D --> E{"User Action?"}

    %% Add Contact
    E --> F["Add New Contact"]
    F --> G["Fill Contact Form"]
    G --> H{"Save?"}
    H -->|Yes| C
    H -->|Cancel| C

    %% Edit Contact
    E --> I["Edit Contact"]
    I --> J["Form Loads Existing Data"]
    J --> K{"Save Changes?"}
    K -->|Yes| C
    K -->|Cancel| C

    %% Delete Contact
    E --> L["Delete Contact"]
    L --> M{"Confirm Delete?"}
    M -->|Yes| C
    M -->|No| C

    %% Exit
    E --> N["End"]
```