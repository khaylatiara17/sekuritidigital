/* script.js */

function handleLogin(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (validateCredentials(username, password)) {
        displaySuccessMessage();
        enableContentEditing();
    } else {
        alert('Username atau password salah.');
    }
}

function validateCredentials(username, password) {
    return username === 'Ahfat Mustafit' && password === 'F@ndi-191289';
}

function displaySuccessMessage() {
    alert('Login berhasil! Anda sekarang dapat mengisi konten.');
}

function enableContentEditing() {
    const articleContent = document.getElementById('article-content');
    articleContent.innerHTML = `
        <p>Tambah artikel baru:</p>
        <textarea id="new-article" rows="4" class="form-control mb-3"></textarea>
        <button id="add-article" class="btn btn-primary">Tambahkan Artikel</button>
    `;

    const addButton = document.getElementById('add-article');
    if (addButton) {
        addButton.addEventListener('click', handleAddArticle);
    }
}

function handleAddArticle() {
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
}

document.getElementById('login-form').addEventListener('submit', handleLogin);
