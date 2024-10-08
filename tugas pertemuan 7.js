// Mengambil semua elemen movie-item
const movieItems = document.querySelectorAll('.movie-item');
const captionContainer = document.querySelector('.caption-container');
const captionText = captionContainer.querySelector('p');
const closeButton = captionContainer.querySelector('button');

// Menambahkan event listener untuk setiap movie-item
movieItems.forEach(item => {
    item.addEventListener('click', () => {
        // Mengambil caption dari atribut data-caption
        const caption = item.querySelector('img').getAttribute('data-caption');
        
        // Menampilkan caption di container
        captionText.textContent = caption;
        captionContainer.style.display = 'block'; // Menampilkan caption
    });
});

// Menambahkan event listener untuk tombol close
closeButton.addEventListener('click', () => {
    captionContainer.style.display = 'none'; // Menyembunyikan caption
});
