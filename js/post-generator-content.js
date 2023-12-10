generatedPostHTMLContent = `
      <div class="separator" style="clear: both; text-align: center;">
        <img alt="${imageAlt}" border="0" data-original-height="533" data-original-width="800" src="${imageURL}" title="${imageTitle}" />
      </div>
      <p>Hey there! I'm excited you stopped by the <b>GitForge</b> Website today. I wanted to tell you about this awesome free <a href="https://www.gitforge.in/search?q=Blogger+Template">Blogger Template</a> I came across called <b>${postTitle}</b>.</p>
      <b>{tocify} $title={Table of Contents}</b><br />
      ${postIntroduction}
  
      <blockquote>Today I am going to provide you <b>${postTitle}</b></blockquote>
  
      <h2>Description</h2>
      ${postDescription}
  
      <div class='acdn'>
        <div class='related_ac'>
          <div class='acCont'>
            <input class='acMn' id='offrelPost' name='relatedposts-1' type='checkbox'/>
            <label class='acTtl' for='offrelPost'>
              <i class='acIcn'></i>
              <span>More Articles on this topic</span>
            </label>
            <div class='cont'>
              <div id='autoRelatedPost'></div>
            </div>
          </div>
        </div>
      </div>
  
      <h2>Features</h2>
        ${postFeatures}
  
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
              <span data-text='Size'>${downloadFilesize}</span>
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
      <div class="ac">
        <div class="ac-i">
            <div class="ac-h">How to Apply Blogger Template on your Site?</div>
            <div class="ac-b">
                <div class="ac-c">
                  <blockquote>
                    <span><b>Step 1:-</b> Login to your <a href="https:/www.blogger.com">Blogger Dashboard</a></span><br>
                    <span><b>Step 2:-</b> On Blogger Dashboard, Click on <code>Themes Section</code>.</span><br>
                    <span><b>Step 3:-</b> Click the <code>arrow down icon</code> just next to '<code>Customize</code>' button.</span><br>
                    <span><b>Step 4:-</b> Now Click on <code>Edit HTML</code></span><br>
                    <span><b>Step 5:-</b> Select all the Pre-existing codes from the editor and remove it.</span><br>
                    <span><b>Step 6:-</b> Now open the Blogger Template file which you have Downloaded.</span><br>
                    <span><b>Step 7:-</b> Select all codes from that file and copy them to Clipboard.</span><br>
                    <span><b>Step 8:-</b> Paste that copied Clipboard codes in '<code>Blogger Theme Editor</code>' page.</span><br>
                    <span><b>Step 9:-</b> Now <code>click on Save icon</code> and save the template.</span><br>{alertSuccess}
                  </blockquote>
                </div>
            </div>
        </div>
        <div class="ac-i">
            <div class="ac-h">Disclaimer & Copyright</div>
            <div class="ac-b">
              <div class="ac-c">
                <blockquote>
                    Hey folks, just want to be upfront that the templates and files we're sharing here are already floating around the internet. We don't actually modify or dupe any templates ourselves.
                  <br><br>
                    I'd definitely encourage y'all to buy the real deal legally if you have the money to spend. That way you get the latest version, instructions, all that good stuff from the actual creators. There's a purchase link above if you're interested.
                  <br><br>
                    We're only sharing these for educational and non-profit reasons. Don't own any rights to the templates, images, etc. If you made one of these originally and want it taken down, totally understand! Just shoot me a message and I'll remove it within 2-3 days, no problem. {alertWarning}
                </blockquote>
              </div>
            </div>
        </div>
      </div>
      <br>
  
      <h2>Conclusion</h2>
      <p>I hope you enjoyed exploring the capabilities of the <b>${postTitle}</b>. Please share this overview with anyone creating effective online employment hubs for the modern workforce. And stay tuned to our blog for more tips on leveraging quality templates to build your blog's success!</p>
    `;
