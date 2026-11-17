---
title: "DHCP Lease: Hal yang Perlu Dipantau di Jaringan"
description: "Mengenali hubungan DHCP pool, lease time, dan gejala ketika perangkat mulai kesulitan mendapatkan alamat IP."
pubDate: 2026-11-15
category: "Network Fundamentals"
tags: ["DHCP", "IP Addressing", "Troubleshooting"]
draft: false
---

DHCP mempermudah pemberian alamat IP ke perangkat secara otomatis. Dalam operasional harian, salah satu hal yang perlu diperhatikan adalah **ketersediaan alamat pada DHCP scope/pool**. Ketika pool hampir habis, perangkat baru bisa gagal memperoleh alamat meskipun koneksi fisik atau Wi-Fi terlihat normal.

## Apa yang perlu diperhatikan?

**1. Pool utilization**  
Bandingkan jumlah alamat yang tersedia dengan jumlah lease aktif. Jika pemakaian terus mendekati kapasitas maksimum, evaluasi kebutuhan subnet atau pembagian scope.

**2. Lease time**  
Lease time menentukan berapa lama alamat IP dipinjamkan sebelum klien perlu memperbarui lease. Nilai yang terlalu panjang dapat membuat alamat yang tidak lagi dipakai tertahan lebih lama; nilai terlalu pendek dapat menambah frekuensi proses renewal. Tentukan berdasarkan pola mobilitas perangkat dan kapasitas jaringan.

**3. Lease yang tidak biasa**  
Periksa lease yang menumpuk, alamat yang sering berpindah, duplikasi IP, atau perangkat yang berulang kali melakukan discover/request. Korelasikan dengan MAC address, hostname, VLAN, dan lokasi access point atau switch bila informasinya tersedia.

## Langkah pengecekan awal

1. Periksa kapasitas subnet dan jumlah lease aktif pada DHCP server.
2. Pastikan scope yang digunakan sesuai dengan VLAN atau network segment klien.
3. Cari pesan DHCP Discover, Offer, Request, dan ACK pada log atau packet capture.
4. Pastikan tidak ada DHCP server lain yang memberikan konfigurasi berbeda tanpa perencanaan.
5. Tinjau reservation dan exclusion agar alamat tidak terpakai ganda.

## Catatan operasional

Jangan langsung memperpendek lease time ketika pool penuh. Pertama-tama identifikasi apakah kapasitas subnet memang kurang, banyak perangkat berpindah-pindah, atau ada lease yang tidak dibersihkan sesuai harapan. Perubahan lease time sebaiknya diuji dan disesuaikan dengan karakteristik jaringan.

Dengan memantau utilisasi pool dan tren lease, potensi gangguan DHCP biasanya bisa diketahui sebelum banyak pengguna terdampak.
