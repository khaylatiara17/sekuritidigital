// script.js

document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'Ahfat Mustafit' && password === 'F@ndi-191289') {
        alert('Login berhasil! Anda sekarang dapat mengisi konten.');
        // Tambahkan logika untuk akses ke fitur pengisian konten
        document.getElementById('article-content').innerHTML = `
            <p>Tambah artikel baru:</p>
            <textarea id="new-article" rows="4" class="form-control mb-3"></textarea>
            <button id="add-article" class="btn btn-primary">Tambahkan Artikel</button>
        `;

        document.getElementById('add-article').addEventListener('click', function () {
            const newArticle = document.getElementById('new-article').value;
            if (newArticle.trim() !== '') {
                const articleList = document.getElementById('article-content');
                const newParagraph = document.createElement('p');
                newParagraph.textContent = newArticle;
                articleList.appendChild(newParagraph);
                document.getElementById('new-article').value = '';
            } else {
                alert('Artikel tidak boleh kosong.');
            }
        });
    } else {
        alert('Username atau password salah.');
    }
});
