// Function to insert HTML tags at the cursor position in the description text area
function insertTag(openTag, closeTag) {
    var description = document.getElementById("description");
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
    var newEndPos = endPos + openTag.length;

    description.setSelectionRange(newStartPos, newEndPos);
    description.focus();
  }

  // Function to save bot token and channel ID in local storage
  function saveCredentials() {
    var botToken = document.getElementById("botToken").value;
    var channelId = document.getElementById("channelId").value;

    localStorage.setItem("botToken", botToken);
    localStorage.setItem("channelId", channelId);

    alert("Credentials saved successfully!");
  }

  // Function to get bot token from local storage
  function getBotToken() {
    return localStorage.getItem("botToken") || "";
  }

  // Function to get channel ID from local storage
  function getChannelId() {
    return localStorage.getItem("channelId") || "";
  }

  // Function to reset bot token and channel ID
  function resetCredentials() {
    localStorage.removeItem("botToken");
    localStorage.removeItem("channelId");

    document.getElementById("botToken").value = "";
    document.getElementById("channelId").value = "";

    alert("Credentials reset successfully!");
  }

  // Function to update button visibility based on the checkbox state
  function updateButtonVisibility() {
    var sendButton = document.getElementById("sendButton");
    var firstBtnText = document.getElementById("firstBtnText");
    var secondBtnText = document.getElementById("secondBtnText");

    firstBtnText.disabled = !sendButton.checked;
    secondBtnText.disabled = !sendButton.checked;
  }

  // Function to update image selection based on checkbox state
  function updateImageSelection() {
    var includeImage = document.getElementById("includeImage");
    var image = document.getElementById("image");
    var includeDocument = document.getElementById("includeDocument");
    var documentField = document.getElementById("document");

    image.disabled = !includeImage.checked;

    // Disable "Include Document" checkbox if "Include Image" is checked
    if (includeImage.checked) {
      includeDocument.checked = false;
      documentField.disabled = true;
    }
  }

  // Function to update document selection based on checkbox state
  function updateDocumentSelection() {
    var includeDocument = document.getElementById("includeDocument");
    var documentField = document.getElementById("document");
    var includeImage = document.getElementById("includeImage");
    var image = document.getElementById("image");

    documentField.disabled = !includeDocument.checked;

    // Disable "Include Image" checkbox if "Include Document" is checked
    if (includeDocument.checked) {
      includeImage.checked = false;
      image.disabled = true;
    }
  }

  // Attach form submission event listener
  var form = document.getElementById("submitForm");
  form.addEventListener("submit", submitForm);

  // Attach save button click event listener
  var saveBtn = document.getElementById("saveBtn");
  saveBtn.addEventListener("click", saveCredentials);

  // Attach reset button click event listener
  var resetBtn = document.getElementById("resetBtn");
  resetBtn.addEventListener("click", resetCredentials);

  // Attach checkbox change event listeners
  var sendButton = document.getElementById("sendButton");
  sendButton.addEventListener("change", updateButtonVisibility);

  var includeImage = document.getElementById("includeImage");
  includeImage.addEventListener("change", updateImageSelection);

  var includeDocument = document.getElementById("includeDocument");
  includeDocument.addEventListener("change", updateDocumentSelection);

  // Function to handle form submission
  function submitForm(event) {
    event.preventDefault(); // Prevent form from being submitted

    // Get form values
    var title = document.getElementById("title").value;
    var description = document.getElementById("description").value;
    var firstBtnURL = document.getElementById("firstBtnURL").value;
    var secondBtnURL = document.getElementById("secondBtnURL").value;
    var channelURL = document.getElementById("channelURL").value;
    var channelName = document.getElementById("channelName").value;
    var firstBtnText = document.getElementById("firstBtnText").value;
    var secondBtnText = document.getElementById("secondBtnText").value;
    var sendButton = document.getElementById("sendButton").checked;
    var includeImage = document.getElementById("includeImage").checked;
    var image = document.getElementById("image").files[0];
    var includeDocument = document.getElementById("includeDocument").checked;
    var documentField = document.getElementById("document").files[0];

    // Format the message
    var message = title + "\n" + description;

    // Telegram API endpoint
    var url = "https://api.telegram.org/bot" + getBotToken();

    // Inline keyboard buttons
    var inlineKeyboard = null;
    if (sendButton) {
      message +=
        "\n\n<b>By: <a href='" + channelURL + "'>" + channelName + "</a></b>";

      inlineKeyboard = JSON.stringify({
        inline_keyboard: [
          [
            { text: firstBtnText, url: firstBtnURL },
            { text: secondBtnText, url: secondBtnURL }
          ]
        ]
      });
    }

    // Prepare the data to be sent
    var formData = new FormData();
    formData.append("chat_id", getChannelId());
    formData.append("parse_mode", "HTML");
    if (includeImage && image) {
      formData.append("photo", image);
      formData.append("caption", message);
      if (inlineKeyboard) {
        formData.append("reply_markup", inlineKeyboard);
      }

      // Add the disable_web_page_preview parameter
      formData.append("disable_web_page_preview", true);

      // Send the data to Telegram using AJAX
      var xhr = new XMLHttpRequest();
      xhr.open("POST", url + "/sendPhoto", true);
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            // Form submission successful
            alert("Form submitted successfully!");
            document.getElementById("submitForm").reset(); // Reset the form
          } else {
            // Form submission failed
            alert("Form submission failed. Please try again.");
          }
        }
      };

      xhr.send(formData);
    } else {
      // If no image is selected or includeImage is false, send only the message
      var params = "chat_id=" + getChannelId() + "&text=" + encodeURIComponent(message) + "&parse_mode=HTML";
      if (inlineKeyboard) {
        params += "&reply_markup=" + encodeURIComponent(inlineKeyboard);
      }

      if (includeDocument && documentField) {
        formData.append("document", documentField);
        formData.append("caption", message);
        if (inlineKeyboard) {
          formData.append("reply_markup", inlineKeyboard);
        }

        // Add the disable_web_page_preview parameter
        params += "&disable_web_page_preview=true";

        // Send the data to Telegram using AJAX
        var xhr = new XMLHttpRequest();
        xhr.open("POST", url + "/sendDocument", true);
        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              // Form submission successful
              alert("Form submitted successfully!");
              document.getElementById("submitForm").reset(); // Reset the form
            } else {
              // Form submission failed
              alert("Form submission failed. Please try again.");
            }
          }
        };

        xhr.send(formData);
      } else {
        // Add the disable_web_page_preview parameter
        params += "&disable_web_page_preview=true";

        // Send the data to Telegram using AJAX
        var xhr = new XMLHttpRequest();
        xhr.open("POST", url + "/sendMessage", true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              // Form submission successful
              alert("Form submitted successfully!");
              document.getElementById("submitForm").reset(); // Reset the form
            } else {
              // Form submission failed
              alert("Form submission failed. Please try again.");
            }
          }
        };

        xhr.send(params);
      }
    }
  }

  // Populate bot token and channel ID if available
  document.getElementById("botToken").value = getBotToken();
  document.getElementById("channelId").value = getChannelId();

  // Initialize button visibility
  updateButtonVisibility();
