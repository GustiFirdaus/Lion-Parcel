  // Atur lebar setiap elemen footer agar sama
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