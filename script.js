const main = document.querySelector("main");
const home = document.querySelector("#home");
const about = document.querySelector("#about");
const contact=document.querySelector("#contact");
var input1=document.querySelector("#search");
// home section creation and rendering
const homeSection = document.createElement("section");

// data calling

const productsHTML = myData.map(elem => `
  <div class="product">
    <img src="${elem.image}" alt="no-image available right now">
    <h1>${elem.name}</h1>
    <p>Price: ${elem.price}</p>
    <p>Category :${elem.category}</p>
  <button class="btn btn-outline-primary">Buy Now</button>
  </div>`).join("");
homeSection.innerHTML = `
  <div class="productRow">
    ${productsHTML}
  </div>
    <p id="message" style="color:red;fonst-size:larger; display: flex;float:right;margin-right:72px;margin-top:-50px;
  "></p>
  <br/>
  
`;
// about section creation and rendering
const aboutSection = document.createElement("section");
aboutSection.innerHTML = `
<div class="about-section container-fluid px-4 py-5" style="background-color: #CCE5FF; font-family: 'Playfair Display', serif;">
  
  
  <div class="text-center mb-5">
    <h1 class="fw-bold text-primary mb-3">About Shopsy ECommerce</h1>
    <p class="text-dark fs-5 mx-auto" style="max-width: 800px;">
      Shopsy is more than an online store — it's a promise of style, affordability, and convenience. Dive into a shopping experience where every product is handpicked with care.
    </p>
    <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1000&q=80" 
         alt="About Shopsy" 
         class="img-fluid rounded shadow-sm mt-4" style="max-height: 400px; object-fit: cover;">
  </div>

  <div class="row align-items-center mb-5">
    <div class="col-md-6">
      <img src="https://www.shutterstock.com/image-photo/our-story-symbol-words-appearing-260nw-1887621850.jpg" 
           class="img-fluid rounded shadow" alt="Our Story">
    </div>
    <div class="col-md-6 mt-4 mt-md-0">
      <h3 class="text-primary fw-bold">Our Story</h3>
      <p class="text-dark fs-5">
        Founded by <strong>Ashraf</strong>, Shopsy ECommerce started with a simple mission — make online shopping more human, accessible, and reliable. From humble beginnings, we’ve grown into a trusted destination for thousands of customers across the country.
      </p>
    </div>
  </div>

 
  <div class="row align-items-center flex-md-row-reverse mb-5">
    <div class="col-md-6">
      <img src="https://thumbs.dreamstime.com/b/what-makes-you-different-concept-hand-drawing-chalkboard-55982898.jpg" 
           class="img-fluid rounded shadow" alt="What Makes Us Unique">
    </div>
    <div class="col-md-6 mt-4 mt-md-0">
      <h3 class="text-primary fw-bold">What Makes Us Unique</h3>
      <ul class="fs-5 text-dark" type="none">
        <li>✅ Curated quality products</li>
        <li>✅ Seamless, user-friendly platform</li>
        <li>✅ Fast & secure delivery</li>
        <li>✅ Transparent pricing</li>
        <li>✅ 24/7 customer support</li>
      </ul>
    </div>
  </div>

 
  <div class="row mb-4">
    <div class="col text-center">
      <h3 class="text-primary fw-bold">Our Mission & Vision</h3>
      <p class="fs-5 text-dark mx-auto" style="max-width: 800px;">
        At Shopsy, our mission is to create a digital marketplace that brings people joy through simplicity and trust. We envision a future where anyone, anywhere can access high-quality goods with confidence and ease. We're not just selling products — we're delivering peace of mind.
      </p>
      <button class="btn btn-outline-primary rounded-pill mt-3">Explore Products</button>
    </div>
  </div>

</div>

`;
// contact section creation and rendering
const contactSection=document.createElement("section");
contactSection.innerHTML=`
<div class="container contact-section">
    <div class="row mb-5 text-center">
      <div class="col">
        <h2 class="contact-header">Contact Us</h2>
        <p class="text-muted">We'd love to hear from you! Reach out via any method below.</p>
      </div>
    </div>

    <div class="row text-center contact-info gy-4">
      <div class="col-md-4">
        <i class="bi bi-telephone-fill mb-2"></i>
        <h5 class="mt-2">Phone</h5>
        <p class="text-muted">+1 (800) 123-4567</p>
      </div>

      <div class="col-md-4">
        <i class="bi bi-envelope-fill mb-2"></i>
        <h5 class="mt-2">Email</h5>
        <p class="text-muted">support@shopsy.com</p>
      </div>

      <div class="col-md-4">
        <i class="bi bi-geo-alt-fill mb-2"></i>
        <h5 class="mt-2">Address</h5>
        <p class="text-muted">123 Shopsy St, Commerce City, USA</p>
      </div>
    </div>

    <div class="row text-center mt-5">
      <div class="col">
        <h5>Follow Us</h5>
        <a href="#" class="text-decoration-none me-3"><i class="bi bi-facebook fs-4 text-primary"></i></a>
        <a href="#" class="text-decoration-none me-3"><i class="bi bi-instagram fs-4 text-danger"></i></a>
        <a href="#" class="text-decoration-none me-3"><i class="bi bi-twitter-x fs-4 text-dark"></i></a>
        <a href="#" class="text-decoration-none"><i class="bi bi-linkedin fs-4 text-primary"></i></a>
      </div>
    </div>
  </div>

`;
function loadSection(section) {
  main.innerHTML = "";
  main.appendChild(section);
}
loadSection(homeSection);
// Click handlers
home.onclick = () => loadSection(homeSection);
about.onclick = () => loadSection(aboutSection);
contact.onclick=()=>loadSection(contactSection);

// search process

input1.addEventListener('input',()=>{
  var message=document.querySelector("#message");
  const userInput=input1.value;
  const productDetails=document.querySelectorAll(".product");
   found=false;
  productDetails.forEach(e=>{
    var productName=e.querySelector(".product h1").textContent.toLowerCase();
    if(productName.includes(userInput)){
     e.style.display="block";
     found=true;
     console.log("founded");
    }
    else{
    e.style.display="none";
    console.log("not found");
    
    }
  })
  if(found){
    message.style.display="none";
  }
  else{
    message.innerHTML="Product not found !"
    message.style.display="block";

  }
 
})




// previous and next button work

// var prev=document.querySelector("#previous");
// var next=document.querySelector("#next");
// var cardContainer=document.querySelector(".card-container");
// next.addEventListener('click',()=>{
// cardContainer.scrollLeft=cardContainer.scrollLeft+390;
// })
// prev.addEventListener('click',()=>{
// cardContainer.scrollLeft=cardContainer.scrollLeft-390;
// })