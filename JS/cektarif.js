var footerItems = document.querySelectorAll('.footer-item');
var maxWidth = 100 / footerItems.length + '%';
footerItems.forEach(function(item) {
    item.style.width = maxWidth;
});
// Fungsi untuk mengubah warna saat disentuh
function changeColor(element) {
  element.style.color = 'red';
}

// Fungsi untuk mengembalikan warna semula
function resetColor(element) {
  element.style.color = 'black';
}
 
// Fungsi untuk mengambil nilai tarif berdasarkan kota asal dan tujuan
function getRate(origin, destination) {
    // Tarif pengiriman per kg (contoh sederhana)
    var rates = {
        'Palangkaraya': {
            'Banjarmasin': 7000,
            'Sampit': 5500,
            'Buntok': 6000,
            'Kuala Kapuas': 6500,
            'Kasongan': 5000,
            'Pulang Pisau': 6000

        },
        'Banjarmasin': {
            'Palangkaraya': 7000,
            'Kuala Kapuas': 2500,
            'Kasongan': 3000,
            'Pulang Pisau': 6000,
            'Banjarbaru': 2000,
            'Paringin': 3500,
            'Martapura': 4000,
            'Marabahan': 4500,
            'Barabai': 4300,
            'Amuntai': 4400,
            'Tanjung': 4550,
            'batulicin': 9900,
            'Pelaihari': 7300,
            'Rantau': 7200,
            'Kotabaru': 11000
        }
        
    };

    // Cek apakah tarif tersedia untuk kombinasi kota asal dan tujuan
    if (rates[origin] && rates[origin][destination]) {
        return rates[origin][destination];
    } else {
        // Tarif default jika tidak ditemukan
        return 10000;
    }
}

// Fungsi untuk menghitung biaya pengiriman
function calculateShipping() {
    var weight = document.getElementById('weight').value;
    var origin = document.getElementById('origin').value;
    var destination = document.getElementById('destination').value;
    var shippingType = document.getElementById('type').value;

    // Mendapatkan tarif pengiriman
    var rate = getRate(origin, destination);

    // Menghitung biaya pengiriman
    var cost = weight * rate;

    // Menambahkan diskon 20% jika berat barang kurang dari 1kg
    if ((shippingType === 'regpack' && weight < 1) || (shippingType === 'bigpack' && weight < 10)) {
        cost *= 0.8; // Diskon 20%
    }

    // Menyesuaikan biaya pengiriman berdasarkan jenis pengiriman
    if (shippingType === 'express') {
        cost *= 1.5; // Biaya ekspres 50% lebih mahal
    } else if (shippingType === 'economical') {
        cost *= 0.9; // Diskon 10% untuk pengiriman hemat
    }

    // Menampilkan hasil
    document.getElementById('result').innerHTML = 'Biaya pengiriman: Rp' + cost;
}
// Tambahkan event listener ke tombol hitung biaya
document.getElementById('calculateButton').addEventListener('click', calculateShipping);
