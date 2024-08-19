    const qrCodeStyling = new QRCodeStyling({
        width: 200,
        height: 200,
        imageOptions: { crossOrigin: "anonymous" }
    });

    const convertBtn = document.getElementById('convert-btn');
    const textInput = document.getElementById('text-input');
    const qrPreview = document.getElementById('qr-preview');
    const qrCodeDiv = document.getElementById('qr-code');
    const downloadBtn = document.getElementById('download-btn');
    const newQrBtn = document.getElementById('new-qr-btn');
    const qrSize = document.getElementById('qr-size');
    const qrColor = document.getElementById('qr-color');
    const optionsContainer = document.getElementById('options-container');

    convertBtn.addEventListener('click', () => {
        const text = textInput.value.trim();
        const size = parseInt(qrSize.value);
        const color = qrColor.value;

        if (text !== "") {
            qrCodeStyling.update({
                data: text,
                width: size,
                height: size,
                dotsOptions: { color: color }
            });

            qrCodeStyling.append(qrCodeDiv);

            qrPreview.style.display = 'block';
            textInput.style.display = 'none';
            optionsContainer.style.display = 'none';
            convertBtn.style.display = 'none';
        }
    });

    downloadBtn.addEventListener('click', () => {
        qrCodeStyling.download({
            name: 'qr-code-' + Math.floor(Math.random() * 100000),
            extension: 'png'
        });
    });

    newQrBtn.addEventListener('click', () => {
        window.location.reload();
    });
