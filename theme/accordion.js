const accordionItemHeaders=document.querySelectorAll(".ac-h");accordionItemHeaders.forEach((e=>{e.addEventListener("click",(t=>{const c=document.querySelector(".ac-h.active");c&&c!==e&&(c.classList.toggle("active"),c.nextElementSibling.style.maxHeight=0),e.classList.toggle("active");const i=e.nextElementSibling;e.classList.contains("active")?i.style.maxHeight=i.scrollHeight+"px":i.style.maxHeight=0}))}));
