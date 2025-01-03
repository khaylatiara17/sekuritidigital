// script.js

// Referensi elemen
const dropZone = document.getElementById('drop-zone');
const fileInput = document.getElementById('file-input');
const preview = document.getElementById('preview');

// Fungsi untuk menangani file
function handleFiles(files) {
    Array.from(files).forEach(file => {
        const fileReader = new FileReader();

        fileReader.onload = () => {
            const element = file.type.startsWith('image/')
                ? `<img src="${fileReader.result}" alt="${file.name}">`
                : `<video controls>
                        <source src="${fileReader.result}" type="${file.type}">
                        Browser Anda tidak mendukung video.
                   </video>`;

            preview.innerHTML += element;
        };

        fileReader.readAsDataURL(file);
    });
}

// Drag & Drop Events
dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropZone.classList.add('drag-over');
});

dropZone.addEventListener('dragleave', () => {
    dropZone.classList.remove('drag-over');
});

dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.classList.remove('drag-over');

    const files = e.dataTransfer.files;
    handleFiles(files);
});

// Input File Event
fileInput.addEventListener('change', (e) => {
    const files = e.target.files;
    handleFiles(files);
});

// Form Submit Event
document.getElementById('content-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.getElementById('title').value.trim();
    const description = document.getElementById('description').value.trim();

    if (title && description) {
        alert(`Materi dengan judul "${title}" berhasil ditambahkan.`);
        document.getElementById('content-form').reset();
    }
});
