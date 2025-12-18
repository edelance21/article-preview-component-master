const btn = document.getElementById('share-btn');
const panel = document.getElementById('div-hidden');

btn.addEventListener('click', () => {
    panel.classList.toggle('hidden');
    btn.classList.toggle('active');
})