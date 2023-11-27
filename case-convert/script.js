document.addEventListener('DOMContentLoaded', function () {
const inputText = document.getElementById('inputText');
const outputText = document.getElementById('outputText');
const buttons = document.getElementById('buttons');
const downloadTextButton = document.getElementById('downloadText');

// Add event listeners to each conversion button
buttons.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        const mode = event.target.id;
        const text = inputText.value;
        switch (mode) {
            case 'sentenceCase':
                outputText.textContent = text.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g, c => c.toUpperCase());
                break;
            case 'lowerCase':
                outputText.textContent = text.toLowerCase();
                break;
            case 'upperCase':
                outputText.textContent = text.toUpperCase();
                break;
            case 'capitalizedCase':
                outputText.textContent = text.toLowerCase().replace(/(^|\s)\S/g, char => char.toUpperCase());
                break;
            case 'alternatingCase':
                let alternatingText = '';
                for (let i = 0; i < text.length; i++) {
                    alternatingText += i % 2 === 0 ? text[i].toLowerCase() : text[i].toUpperCase();
                }
                outputText.textContent = alternatingText;
                break;
            case 'titleCase':
                outputText.textContent = text.toLowerCase().replace(/(^|\s)\S/g, char => char.toUpperCase());
                break;
            case 'inverseCase':
                outputText.textContent = text.split('').map(char => char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase()).join('');
                break;
            case 'downloadText':
                downloadText(text);
                break;
        }
    }
});

// Function to download text as a .txt file
function downloadText(text) {
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'gitforge.in_converted-text.txt';
    a.click();
    URL.revokeObjectURL(url);
}
});
