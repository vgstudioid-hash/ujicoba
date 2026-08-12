# Be-ARISE Dashboard — GitHub Pages

Paket v2.1.8 memperbaiki navigasi bawah pada smartphone agar seluruh tombol dapat disentuh, sekaligus mempertahankan warna matriks risiko dan publikasi folder `VirtualTour`.

Pemetaan heatmap:

- A / Rendah: `#388E3C`
- B / Sedang: `#FBC02D`
- C / Tinggi: `#D32F2F`
- D / Kritis: `#B51C1C`

## Unggah dengan GitHub Desktop

1. Salin folder `dashboard` dari paket ke root repositori `ujicoba`, lalu pilih Replace/Merge.
2. Salin folder `.github` dari paket ke root repositori, lalu pilih Replace/Merge.
3. Commit dan push ke branch `main`.
4. Buka **Settings → Pages** dan pilih **Source: GitHub Actions**.
5. Setelah workflow selesai, buka `https://vgstudioid-hash.github.io/ujicoba/`.

Folder `VirtualTour` yang sudah ada di root repositori jangan dihapus. Workflow baru akan menggabungkannya ke deployment dashboard.

Jangan meletakkan folder `.github` di dalam `dashboard`; folder tersebut harus berada di root repositori.
