function generateFAQSchema(){const e=document.querySelector(".ac").querySelectorAll(".ac-i"),t={"@context":"https://schema.org","@type":"FAQPage",mainEntity:[]};e.forEach(((e,n)=>{const c={"@type":"Question",name:e.querySelector(".ac-h").innerText.trim(),acceptedAnswer:{"@type":"Answer",text:e.querySelector(".ac-c").innerText.trim()}};t.mainEntity.push(c)}));const n=document.createElement("script");n.type="application/ld+json",n.textContent=JSON.stringify(t),document.head.appendChild(n)}generateFAQSchema();