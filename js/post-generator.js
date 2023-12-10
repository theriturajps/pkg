function insertTag(openTag, closeTag, textAreaId) {
        var description = document.getElementById(textAreaId);
        var startPos = description.selectionStart;
        var endPos = description.selectionEnd;
        var selectedText = description.value.substring(startPos, endPos);
    
        var modifiedText = openTag + selectedText + closeTag;
    
        description.value =
          description.value.substring(0, startPos) +
          modifiedText +
          description.value.substring(endPos);
    
        // Set the cursor position after the inserted tags
        var newStartPos = startPos + openTag.length;
        var newEndPos = newStartPos + selectedText.length;
    
        description.setSelectionRange(newStartPos, newEndPos);
        description.focus();
      }
    
      function generatePost() {
        const postTitle = document.getElementById('postTitle').value;
        const imageURL = document.getElementById('imageURL').value;
        const imageAlt = document.getElementById('imageAlt').value;
        const imageTitle = document.getElementById('imageTitle').value;
        const postIntroduction = document.getElementById('postIntroduction').value;
        const postDescription = document.getElementById('postDescription').value;
        const postFeatures = document.getElementById('postFeatures').value;
        const downloadFilename = document.getElementById('downloadFilename').value;
        const downloadFilesize = document.getElementById('downloadFilesize').value;
        const previewURL = document.getElementById('previewURL').value;
        const downloadURL = document.getElementById('downloadURL').value;
    
        const generatedPostHTML = generatedPostHTMLContent;
    
        // Display the generated HTML code in the text area
        const generatedCodeTextArea = document.getElementById('generatedCode');
        generatedCodeTextArea.value = generatedPostHTML;
    
        // Reset copy button text
        const copyButton = document.getElementById('copyButton');
        copyButton.textContent = 'Copy HTML Code';
      }
    
      function download(url, count, isPremium, elementId) {
        alert(`Download function triggered for ${url}.`);
      }
    
      function copyToClipboard() {
        const generatedCodeTextArea = document.getElementById('generatedCode');
        generatedCodeTextArea.select();
        document.execCommand('copy');
    
        // Change button text after copying
        const copyButton = document.getElementById('copyButton');
        copyButton.textContent = 'HTML Code Copied';
      }
