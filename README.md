# Laman Web Resume Premium | Hisham Bin Mohd Aderis

Projek ini merupakan laman web resume peribadi yang dibina khusus untuk **Hisham Bin Mohd Aderis** (Jurutera Sistem). Reka bentuk laman web ini diinspirasikan daripada susun atur grid templat CV W3Schools, tetapi telah dipertingkatkan dengan reka bentuk moden, mod gelap/cerah interaktif, kesan *glassmorphism*, dan animasi tatalan yang lancar.

---

## 🚀 Ciri-Ciri Utama
*   **Mod Gelap & Cerah (Dark/Light Mode Toggle)**: Butang pertukaran tema di bar atas dengan storan memori automatik (`localStorage`).
*   **Reka Bentuk Responsif**: Menggunakan grid responsif yang menyesuaikan susun atur di desktop (2 lajur) dan peranti mudah alih (1 lajur menegak).
*   **Kesan Glassmorphism**: Penggayaan kad-kad maklumat yang lut sinar dengan sempadan halus dan bayangan bayang (*box-shadow*) yang premium.
*   **Animasi Tatalan Dinamik**:
    *   Kesan pudar masuk (*fade-in*) bagi kad-kad pengalaman semasa skrol.
    *   Animasi bar kemahiran (*progress bars*) yang meluncur keluar dan peratusan dikira menaik (*count-up*) apabila bahagian kemahiran memasuki skrin.
*   **Fungsi Salin E-mel**: Mengklik alamat e-mel akan menyalin alamat tersebut ke papan klip secara automatik berserta maklum balas teks "Disalin!".
*   **Mesra Cetakan (Print & PDF Optimized)**: Susun atur yang dioptimumkan secara automatik apabila dicetak atau disimpan sebagai PDF dengan menyembunyikan elemen navigasi interaktif.

---

## 🛠️ Stack Teknologi
*   **HTML5** — Struktur halaman semantik.
*   **CSS3** — Reka bentuk tersuai, variabel tema, *glassmorphism*, dan animasi keyframes.
*   **JavaScript (ES6)** — Logik interaksi tema, pengesanan tatalan (`IntersectionObserver`), animasi peratusan kemahiran, dan fungsi salin e-mel.
*   **FontAwesome v6** — Pustaka ikon sosial dan perhubungan.
*   **Google Fonts** — Tipografi Outfit (untuk tajuk) & Inter (untuk teks badan).
*   **W3.CSS** — Sebagai rangka susun atur grid asas.

---

## 📂 Struktur Fail
```text
├── index.html       # Fail utama struktur resume
├── style.css        # Reka bentuk gaya & animasi CSS
├── script.js        # Logik JavaScript interaktif
├── avatar.png       # Gambar profil profesional
├── resume.md        # Draf data resume asal
└── PRD.md           # Product Requirement Document
```

---

## 🖥️ Cara Membuka Laman Web
Laman web ini dibina sebagai **laman web statik tulen**, oleh itu tiada pemasangan NodeJS atau sebarang server pelayan diperlukan untuk melihatnya secara tempatan:

1.  Muat turun atau klon direktori projek ini.
2.  Buka folder projek.
3.  Klik dua kali pada fail `index.html` untuk membukanya secara terus di mana-mana pelayar web kegemaran anda (Google Chrome, Mozilla Firefox, Safari, Microsoft Edge, dll.).
4.  Untuk mencetak resume sebagai PDF, klik butang pencetak (ikon print) di bar navigasi atas atau tekan kombinasi kekunci `Ctrl+P` (Windows/Linux) / `Cmd+P` (Mac).
