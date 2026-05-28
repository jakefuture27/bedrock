document.addEventListener('DOMContentLoaded', () => {
    const copyBtn = document.getElementById('copy-btn');
    const caText = document.getElementById('ca-text').innerText;

    copyBtn.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(caText);
            
            // Success feedback
            const originalText = copyBtn.innerText;
            copyBtn.innerText = 'COPIED!';
            copyBtn.style.backgroundColor = '#70b343'; // Pepe light green
            
            setTimeout(() => {
                copyBtn.innerText = originalText;
                copyBtn.style.backgroundColor = '#569033'; // Back to Pepe green
            }, 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
            copyBtn.innerText = 'ERROR';
            setTimeout(() => {
                copyBtn.innerText = 'COPY';
            }, 2000);
        }
    });
});
