  function generateAboutUs() {
    var WebsiteName = document.getElementById('WebsiteName').value;
    var WebsiteURL = document.getElementById('WebsiteURL').value;
    var WebsiteEmail = document.getElementById('WebsiteEmail').value;
    var WebsiteMission = document.getElementById('WebsiteMission').value;
    var WebsiteService = document.getElementById('WebsiteService').value;
    var OwnerName = document.getElementById('OwnerName').value;
    var ExperienceYear = document.getElementById('ExperienceYear').value;
    var ContactNumber = document.getElementById('ContactNumber').value;
    
    // Check if all required fields are filled
    if (!WebsiteName || !WebsiteURL || !WebsiteEmail || !WebsiteMission || !WebsiteService || !OwnerName || !ContactNumber) {
      alert('Please fill all the required fields.');
      return;
    }

    var AboutUsContent = `<h2>Our Mission</h2>
<p>At <b>${WebsiteName}</b>, our mission is to ${WebsiteMission}.</p>
<h2>Our Values</h2>
<ul>
  <li><strong>Integrity :-</strong> We uphold the highest standards of integrity in all our actions.</li>
  <li><strong>Customer Commitment :-</strong> We develop relationships that make a positive difference in our customers' lives.</li>
  <li><strong>Quality :-</strong> We provide outstanding products and unsurpassed service that, together, deliver premium value to our customers.</li>
  <li><strong>Teamwork :-</strong> We work together, across boundaries, to meet the needs of our customers and to help the company win.</li>
  <li><strong>Respect for People :-</strong> We value our people, encourage their development, and reward their performance.</li>
</ul>
<h2>What We Do</h2>
<p>At <a class="external" href="${WebsiteURL}"><span><b>${WebsiteName}</b></span></a>, we specialize in ${WebsiteService}. Our innovative approach and commitment to excellence set us apart in the industry. We pride ourselves on delivering ${WebsiteService}.</p>
<h2>Why Choose Us?</h2>
<ul>
  <li><strong>Experience :-</strong> With <b>${ExperienceYear}</b> years of experience in the industry, we have a proven track record of success.</li>
  <li><strong>Expertise :-</strong> Our team consists of industry experts who are passionate about what they do.</li>
  <li><strong>Customer Satisfaction :-</strong> We prioritize our customers' needs and work diligently to exceed their expectations.</li>
  <li><strong>Innovation :-</strong> We are constantly innovating and staying ahead of industry trends to provide the best solutions for our clients.</li>
</ul>
<h2>Contact Us</h2>
<p>We would love to hear from you! If you have any questions or would like to learn more about our company, please feel free to contact us at:</p>
<ul>
  <li><strong>Name :-</strong> ${OwnerName}</li>
  <li><strong>Email :-</strong> ${WebsiteEmail}</li>
  <li><strong>Phone :-</strong> ${ContactNumber}</li>
</ul>
<p style="font-weight: bold; text-align: center;">Thank you for visiting our site. Have a great day!</p>`;
    
    document.getElementById('AboutUsContent').value = AboutUsContent;
  }
  
  function copyToClipboard() {
    var AboutUsContent = document.getElementById('AboutUsContent');
    AboutUsContent.select();
    document.execCommand('copy');
    alert('About Us Content copied to clipboard!');
  }
