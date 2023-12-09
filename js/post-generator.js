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
  
    const generatedPostHTML = `
    <div class="separator" style="clear: both; text-align: center;">
      <img alt="${imageAlt}" border="0" data-original-height="533" data-original-width="800" src="${imageURL}" title="${imageTitle}" />
    </div>
    <p>Hey there! I'm excited you stopped by the <b>GitForge</b> Website today. I wanted to tell you about this awesome free <a href="https://www.gitforge.in/search?q=Blogger+Template">Blogger Template</a> I came across called <b>${postTitle}</b>.</p>

    ${postIntroduction}

    <blockquote>Today I am going to provide you <b>${postTitle}</b></blockquote>

    <h2>Description</h2>

    ${postDescription}

    <h2>Features</h2>
    <ol>
      ${postFeatures}
    </ol>

    <h2>Download ${postTitle}</h2>
    <div class='dldCo' id='download1'>
      <div class='dldBx'>
        <div class='dldTp'>
          <div class='dldIm' data-text='.png' style='background-image:url(https://pkg.gitforge.in/img/download-icon.png)'>
            <svg class='dldSv' viewBox='0 0 34 34'>
              <circle class='b' cx='17' cy='17' r='15.92' />
              <circle class='c dldPg' cx='17' cy='17' r='15.92' />
            </svg>
          </div>
          <div class='dldIn'>
            <span data-text='Name'>${downloadFilename}.zip</span>
            <span data-text='Category'>File</span>
            <span data-text='Size'>${downloadFilesize}KB</span>
            <span data-text='Demo'><a href="${previewURL}" target="_blank">Preview</a></span>
            <span data-text='Extension'>.zip</span>
          </div>
        </div>
        <button onclick='download("${downloadURL}", "10", "false", "#download1")' class='dldBt dldDl'><svg viewBox='0 0 24 24'><polyline points='8 17 12 21 16 17'/><line x1='12' x2='12' y1='12' y2='21'/><path d='M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29'/></svg></button>
        <button class='dldBt dldRt'><svg viewBox='0 0 24 24'><polyline points='23 4 23 10 17 10'/><path d='M20.49 15a9 9 0 1 1-2.12-9.36L23 10'/></svg></button>
      </div>
      <div class='dldSl'>
        <div class='dldMe'></div>
      </div>
    </div>

    <br>
    <!-- Additional sections... -->

    <h2>Conclusion</h2>
    <p>I hope you enjoyed exploring the capabilities of the <b>${postTitle}</b>. Please share this overview with anyone creating effective online employment hubs for the modern workforce. And stay tuned to our blog for more tips on leveraging quality templates to build your blog's success!</p>
  `;
  
    // Display the generated HTML code in the text area
  const generatedCodeTextArea = document.getElementById('generatedCode');
  generatedCodeTextArea.value = generatedPostHTML;

  // Reset copy button text
  const copyButton = document.getElementById('copyButton');
  copyButton.textContent = 'Copy HTML Code';

  // Additional code for formatting buttons
  const formatButtons = `
    <div class="button-container">
      <button type="button" onclick="insertTag('**', '**')">Bold</button>
      <button type="button" onclick="insertTag('_', '_')">Italic</button>
      <button type="button" onclick="insertTag('<u>', '</u>')">Underline</button>
      <button type="button" onclick="insertTag('`', '`')">Code</button>
      <button type="button" onclick="insertTag('~~', '~~')">Strike</button>
      <button type="button" onclick="insertTag('<pre>', '</pre>')">Pre</button>
      <button type="button" onclick="insertTag('> ', '')">Blockquote</button>
      <button type="button" onclick="insertTag('[Link Text](URL)', '')">Link</button>
    </div>
  `;

  // Insert formatting buttons after each textarea
  const postIntroductionContainer = document.getElementById('postIntroduction').parentNode;
  postIntroductionContainer.insertAdjacentHTML('beforeend', formatButtons);

  const postDescriptionContainer = document.getElementById('postDescription').parentNode;
  postDescriptionContainer.insertAdjacentHTML('beforeend', formatButtons);

  const postFeaturesContainer = document.getElementById('postFeatures').parentNode;
  postFeaturesContainer.insertAdjacentHTML('beforeend', formatButtons);
}

// Function for download button (dummy function)
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
