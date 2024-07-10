document.addEventListener('DOMContentLoaded', function() {
    const introBox = document.getElementById('introBox');
    const showGalleryBtn = document.getElementById('showGalleryBtn');
    const gallery = document.getElementById('gallery');

    showGalleryBtn.addEventListener('click', function() {
        introBox.style.display = 'none';
        gallery.classList.add('active');
    });
});

function toggleDescription(element) {
    const overlayText = element.querySelector('.overlay-text');
    overlayText.classList.toggle('active');
}
