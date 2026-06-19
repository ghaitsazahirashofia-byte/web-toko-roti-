// 1. Logika untuk Form Kontak (Halaman contact.html)
document.getElementById('contactForm')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah halaman reload otomatis

    // Ambil data inputan
    const name = document.getElementById('name').value;
    const subject = document.getElementById('subject').value;

    // Tampilkan pesan konfirmasi sukses (Sudah diperbaiki format ${} nya)
    alert(`Terima kasih ${name}!\nPesan mengenai "${subject}" telah berhasil terkirim. Tim Bread Tale akan segera menghubungi.`);

    // Reset form agar kosong kembali
    this.reset();
});


// 2. Logika untuk Kirim Pesanan ke WhatsApp (Halaman checkout.html)
function kirimKeWhatsApp() {
    // Ganti dengan nomor WhatsApp Toko kamu (gunakan kode negara 62)
    const nomorPenjual = "6281234567890"; 

    // Mengambil data dari input checkout yang sudah diberi ID sebelumnya
    const nama = document.getElementById("buyerName")?.value || "";
    const noHp = document.getElementById("buyerPhone")?.value || "";
    const alamat = document.getElementById("buyerAddress")?.value || "";

    // Validasi jika ada data yang belum diisi
    if (!nama || !noHp || !alamat) {
        alert("Harap lengkapi data pengambilan/pickup terlebih dahulu!");
        return;
    }

    // Data barang belanjaan (bisa disesuaikan dengan sistem keranjangmu nanti)
    const detailPesanan = "- 2x Croissant\n- 1x Donat Cokelat";
    const totalHarga = "Rp 45.000";

    // Menyusun template pesan WhatsApp
    const isiPesan = `*PESANAN BARU (PICKUP)* 🥖

*Data Pembeli:*
• Nama: ${nama}
• No. HP: ${noHp}
• Alamat/Lokasi: ${alamat}

*Detail Pesanan:*
${detailPesanan}

*Total:* ${totalHarga}

Mohon diproses untuk langsung di-pickup ya, terima kasih!`;

    // Proses melempar data ke link WhatsApp
    const urlWhatsApp = `https://wa.me/${nomorPenjual}?text=${encodeURIComponent(isiPesan)}`;
  
    // Buka WhatsApp di tab baru
    window.open(urlWhatsApp, '_blank');
}