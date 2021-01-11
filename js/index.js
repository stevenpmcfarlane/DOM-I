const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2018",
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

//Document querySelectors
const container = document.querySelector("container");
const nav = document.querySelector("nav");
const ctaText = document.querySelector(".cta-text");
const mainContent = document.querySelector(".main-content");
const contact = document.querySelector(".contact");
const footer = document.querySelector("footer");

//ctaText querySelectors
const headingFirst = ctaText.querySelector("h1");
const button = ctaText.querySelector("button");
const headerImage = ctaText.querySelector("#cta-img");

//changes to ctaText
headingFirst.textContent = "DOM Is Awesome";
button.textContent = "Get started";
headerImage.src = "img/header-img.png";

//mainContent querySelectors
const topContent = mainContent.querySelector(".top-content");
const bottomContent = mainContent.querySelector(".bottom-content");
const middleImage = mainContent.querySelector("#middle-img");

//topContent querySelectors
const topTextContent = topContent.querySelector(".text-content");

//topTextContent querySelectors
const headingFourthFirst = topTextContent.querySelector("h4");
const topTextParaFirst = topTextContent.querySelector("p");

//footer querySelectors
const footerPara = footer.querySelector("p");

//changes to footer
footerPara.textContent = "Copyright Great Idea! 2018";

//creating and appending two new elements
const mdnLink = document.createElement("a");
mdnLink.textContent = "Check out documentation on MDN";
mdnLink.href = "#";
document.querySelector("mainContent").appendChild(mdnLink);

const footerAddendum = document.createElement("h6");
footerAddendum.textContent = "Buh-bye, now!";
document.querySelector("footer").appendChild(footerAddendum);
