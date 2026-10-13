# Dashboard Capaian Tes Kemampuan Akademik (TKA) 2026 Provinsi Aceh

Dashboard interaktif berbasis web untuk memvisualisasikan data capaian Tes Kemampuan Akademik (TKA) tahun 2026 tingkat Provinsi Aceh mencakup **23 Kabupaten/Kota**, **2 Mata Pelajaran** (Bahasa Indonesia & Matematika), serta **2 Jenjang Pendidikan** (SD & SMP).

---

## Fitur Utama

1. **Ringkasan Makro (Overview Tab):**
   * Menampilkan perbandingan langsung antara Rerata Provinsi Aceh dan Rerata Nasional untuk jenjang SD dan SMP.
   * Grafik visual interaktif menggunakan **Chart.js** untuk memudahkan analisis komparatif.
2. **Eksplorasi Wilayah (Explorer Tab):**
   * Filter interaktif berdasarkan jenjang pendidikan (SD / SMP) dan pilihan dropdown **23 Kabupaten/Kota di Provinsi Aceh**.
   * Kartu ringkasan performa wilayah terpilih lengkap dengan indikator status terhadap rata-rata provinsi.
   * Tabel komprehensif seluruh kabupaten/kota yang diurutkan berdasarkan kode wilayah[cite: 1].
3. **Analisis Mendalam & Rekomendasi (Analysis Tab):**
   * Uraian analitis mengenai *Regional Disparity* (kesenjangan antar wilayah, dominasi perkotaan, serta potensi wilayah kabupaten).
   * Analisis *Mapel Gap* antara literasi (Bahasa Indonesia) dan numerasi (Matematika).
   * Rekomendasi strategis berbasis klaster dan intervensi pendidikan.

---

## Struktur File Repository

Repositori ini dirancang dengan arsitektur modular (*frontend separation*) agar mudah dikelola dan dikembangkan:

```text
tka-aceh-2026/
 ┣ index.html        # Struktur utama halaman web & kerangka HTML5
 ┣ style.css         # Desain antarmuka (UI/UX), styling modern & responsif
 ┗ script.js         # Logika interaktif, dataset 23 kabupaten/kota, & Chart.js
