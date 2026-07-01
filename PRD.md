# Product Requirement Document (PRD): Laman Web Resume Premium Hisham Bin Mohd Aderis

## 1. Pengenalan & Objektif
Objektif projek ini adalah untuk membina sebuah laman web resume peribadi yang premium, responsif, dan interaktif untuk **Hisham Bin Mohd Aderis**, seorang Jurutera Sistem berpengalaman selama 15 tahun. Rekaan dibina berasaskan struktur susun atur grid templat CV W3Schools yang popular, namun dipertingkatkan dengan ciri estetika dan fungsi moden.

---

## 2. Kumpulan Sasaran (Target Audience)
*   **Perekrut (Recruiters) / Pengurus Pengambilan Pekerja**: Mencari maklumat ringkas, tepat, mudah dibaca tentang sejarah kerja, kelayakan pendidikan, dan kemahiran Hisham.
*   **Bakal Rakan Perniagaan / Klien**: Menilai kredibiliti teknikal dan latar belakang profesional.

---

## 3. Spesifikasi Keperluan Fungsian (Functional Requirements)

### 3.1. Penukaran Tema (Dark/Light Mode)
*   Sistem mesti membolehkan pengguna bertukar antara tema Mod Gelap (Dark Mode) dan Mod Cerah (Light Mode) melalui butang kawalan di bar atas.
*   Pilihan tema mestilah disimpan dalam `localStorage` supaya pilihan pengguna kekal apabila halaman dimuat semula.
*   Sekiranya tiada pilihan tersimpan, tema harus disesuaikan dengan tetapan sistem pengoperasian pengguna (`prefers-color-scheme`).

### 3.2. Animasi & Interaksi Dinamik
*   **Animasi Tatalan (Scroll-driven Animations)**: Kad kandungan utama (Profil, Pengalaman, Pendidikan) mestilah muncul secara pudar masuk (*fade-in*) apabila pengguna menatal ke bahagian tersebut.
*   **Bar Kemajuan Dinamik (Dynamic Progress Bars)**: Bar kemahiran mestilah mula memanjang dari 0% ke nilai sasaran berserta pengiraan teks peratusan secara menaik (*count-up*) apabila bahagian kemahiran memasuki paparan skrin (*viewport*).
*   **Salin ke Papan Klip (Copy to Clipboard)**: Mengklik pada bahagian e-mel akan menyalin alamat e-mel Hisham secara automatik, dan memaparkan petunjuk visual ("Disalin!") seketika.

### 3.3. Pengoptimuman Cetakan (Print Optimization)
*   Satu helaian gaya cetakan (*print stylesheet*) yang dikhususkan mestilah disediakan.
*   Apabila pengguna ingin mencetak atau menyimpan sebagai PDF (butang Cetak atau `Ctrl+P`), bar navigasi atas, butang-butang interaktif, dan warna latar belakang yang terlalu gelap mesti disembunyikan bagi memastikan salinan cetak kelihatan bersih, legibel, dan profesional.

---

## 4. Keperluan Bukan Fungsian (Non-Functional Requirements)

### 4.1. Reka Bentuk Responsif (Responsive Design)
*   Laman web mestilah responsif sepenuhnya merangkumi peranti mudah alih (telefon pintar), tablet, dan komputer riba/desktop.
*   Pada skrin desktop (lebar >= 993px), susun atur adalah berbentuk 2 lajur (1/3 sidebar di kiri, 2/3 kandungan di kanan).
*   Pada peranti mudah alih (lebar < 993px), susun atur akan disusun semula secara menegak (sidebar berada di atas kandungan utama).

### 4.2. Estetika & Visual Premium
*   Menggunakan tipografi premium daripada Google Fonts (*Outfit* sebagai tajuk, *Inter* sebagai teks biasa).
*   Mempunyai kesan frosted-glass (*glassmorphism*) pada kad-kad kandungan dengan latar belakang lut sinar, sempadan nipis, dan bayangan lembut.
*   Transisi pertukaran warna tema mestilah lembut (menggunakan CSS transition pada latar belakang, teks, dan bayangan).

### 4.3. Prestasi (Performance)
*   Tiada kebergantungan kepada runtime JavaScript pelayan (seperti NodeJS) atau pembina bundel berat.
*   Halaman mestilah ringan dan pantas dimuatkan melalui fail HTML, CSS, dan JS statik.

---

## 5. Struktur Fail Projek
*   `/index.html` — Struktur markup utama.
*   `/style.css` — Gaya visual dan susun atur halaman.
*   `/script.js` — Logik interaksi halaman.
*   `/avatar.png` — Gambar profil Hisham.
*   `/resume.md` — Sumber data resume asal.
