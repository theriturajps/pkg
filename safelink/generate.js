  function validate() {
    if (document.getElementById("link-to").value.length == 0) {
      return false
    }
    if (document.getElementById("link-page").value.length == 0) {
      return false
    }
    return true
  }

  var notifi = document.getElementById("notifi");
  document.getElementById("create-link").addEventListener("click", () => {
    if (!validate()) {
      document.getElementById("result").value = "";
      notifi.style["animation-name"] = null;
      notifi.offsetHeight;
      notifi.style["animation-name"] = "fail";
      return;
    }
    var linkPage = document.getElementById("link-page").value.trim();
    var linkTo = document.getElementById("link-to").value.trim();
    linkTo = linkTo.replace(/^((?!(\w+:))(\/\/)?)/, "http://"); // auto add http://
    var data = {
      url: linkTo,
    },
      base = btoa(encodeURIComponent(JSON.stringify(data))).replace(/={1,}$/, ""),
      queryVal = "~gitforge" + "=" + base,
      result;
    if (linkPage.indexOf("#") != -1) {
      var urlAndHash = linkPage.split("#", 2);

      if (urlAndHash[0].indexOf("?") != -1) {
        result = urlAndHash[0] + "&" + queryVal + "#" + urlAndHash[1];
      }
      else {
        result = urlAndHash[0] + "?" + queryVal + "#" + urlAndHash[1];
      }

    } else {
      if (linkPage.indexOf("?") != -1) {
        result = linkPage + "&" + queryVal;
      }
      else {
        result = linkPage + "?" + queryVal;
      }
    }

    document.getElementById("result").value = result;
    document.getElementById("open").href = result;
    notifi.style["animation-name"] = null;
    notifi.offsetHeight;
    notifi.style["animation-name"] = "success";
  });
