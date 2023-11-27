  var a = document.getElementsByClassName('copy-btn');
  for (let i = 0; i < a.length; i++) {
    a[i].addEventListener('click', function () {
      var b = a[i].getAttribute("name");
      var text = document.getElementById(b);
      text.select();
      document.execCommand('copy');
    });
  }
