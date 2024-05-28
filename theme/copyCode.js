function copyCode() {
    const code = document.getElementById('codeToCopy').innerText;
    navigator.clipboard.writeText(code).then(() => {
        const cpyBtn = document.getElementById('cpyBtn');
        cpyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
        cpyBtn.style.backgroundColor = 'green';

        setTimeout(() => {
            cpyBtn.innerHTML = '<i class="fas fa-copy"></i> Copy';
            cpyBtn.style.backgroundColor = '#007bff';
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}
