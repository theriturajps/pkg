const imageInput = document.getElementById("image-input");
      const convertBtn = document.getElementById("gitforge_convert_btn");
      const outputImage = document.getElementById("output-image");
      const downloadLink = document.getElementById("download-link");
      const uploadLabel = document.getElementById("upload-label");
      const fileInfo = document.getElementById("file-info");
      const resetBtn = document.getElementById("gitforge_reset_btn");
      
      imageInput.addEventListener("change", () => {
          const selectedFile = imageInput.files[0];
          if (selectedFile) {
              const fileSize = (selectedFile.size / 1024).toFixed(2) + " KB";
              fileInfo.textContent = `File: ${selectedFile.name}, Size: ${fileSize}`;
              uploadLabel.textContent = "Image selected";
              convertBtn.style.display = "block"; // Show the Convert button
          } else {
              uploadLabel.textContent = "Choose an image";
              fileInfo.textContent = "";
              convertBtn.style.display = "none"; // Hide the Convert button
          }
          outputImage.style.display = "none";
          downloadLink.style.display = "none";
      });
      
      convertBtn.addEventListener("click", () => {
          const selectedFile = imageInput.files[0];
          if (selectedFile) {
              const reader = new FileReader();
              reader.onload = function(event) {
                  try {
                      const imageDataUrl = event.target.result;
                      const img = new Image();
                      img.src = imageDataUrl;
                      img.onload = function() {
                          const canvas = document.createElement("canvas");
                          canvas.width = img.width;
                          canvas.height = img.height;
                          const ctx = canvas.getContext("2d");
                          ctx.drawImage(img, 0, 0);
                          canvas.toBlob((blob) => {
                              const webpImage = URL.createObjectURL(blob);
                              outputImage.src = webpImage;
                              outputImage.style.display = "block";
                              downloadLink.href = webpImage;
                              downloadLink.style.display = "block";
                          }, "image/webp");
                      };
                  } catch (error) {
                      console.error("Error converting image:", error.message);
                      // Display an error message to the user
                  }
              };
              reader.readAsDataURL(selectedFile);
          }
      });
      
      resetBtn.addEventListener("click", () => {
          imageInput.value = null;
          uploadLabel.textContent = "Choose an image";
          fileInfo.textContent = "";
          convertBtn.style.display = "none"; // Hide the Convert button
          outputImage.style.display = "none";
          downloadLink.style.display = "none";
      });
