const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//Nav
const navItems = document.querySelectorAll('a');
navItems[0].textContent = siteContent.nav["nav-item-1"];
navItems[1].textContent = siteContent.nav["nav-item-2"];
navItems[2].textContent = siteContent.nav["nav-item-3"];
navItems[3].textContent = siteContent.nav["nav-item-4"];
navItems[4].textContent = siteContent.nav["nav-item-5"];
navItems[5].textContent = siteContent.nav["nav-item-6"];

navItems.forEach(link => {
  link.style.color = 'green'
})

// CTA
const domH1 = document.querySelector('h1')
domH1.textContent = siteContent.cta['h1'];

const btn = document.querySelector('button');
btn.textContent = siteContent.cta.button

const imgCta = document.getElementById('cta-img');
imgCta.setAttribute('src', siteContent["cta"]["img-src"]);

// const featH4 = document.querySelector('.main-content');
// featH4.textContent = siteContent["main-content"]['features-h4'];

// const featContent = document.querySelector('.main-content');
// featContent.textContent = siteContent["main-content"]['features-content']

// const aboutH4 = document.querySelector('h4');
// aboutH4.textContent = siteContent["main-content"]['about-h4']

// Main Section
const tContent = document.querySelectorAll('.top-content .text-content');
const top1 = tContent[0].children;
const top2 = tContent[1].children;

const featH4 = top1[0].textContent = (siteContent['main-content']['features-h4']);
const featContent = top1[1].textContent = (siteContent['main-content']['features-content']);

const aboutH4 = top2[0].textContent = (siteContent['main-content']['about-h4']);
const aboutContent = top2[1].textContent = (siteContent['main-content']['about-content']);

const imgMain = document.getElementById('middle-img');
imgMain.setAttribute('src', siteContent['main-content']["middle-img-src"]);

const bContent = document.querySelectorAll('.bottom-content .text-content')
const first = bContent[0].children;
const second = bContent[1].children;
const last = bContent[2].children;

const servH4 = first[0].textContent = (siteContent['main-content']['services-h4']);
const servContent = first[1].textContent = (siteContent['main-content']['services-content']);

const prodH4 = second[0].textContent = (siteContent['main-content']['product-h4']);
const prodContent = second[1].textContent = (siteContent['main-content']['product-content']);

const visH4 = last[0].textContent = (siteContent['main-content']['vision-h4']);
const visContent = last[1].textContent = (siteContent['main-content']['vision-content']);

//Contact
const contactH4 = document.querySelector('.contact h4')
contactH4.textContent = siteContent['contact']['contact-h4'];

const conAddress = document.querySelector('.contact p')
conAddress.textContent = siteContent['contact']['address'];

const conPhone = document.querySelector('.contact p+p')
conPhone.textContent = siteContent['contact']['phone'];

const conEmail = document.querySelector('.contact p+p+p')
conEmail.textContent = siteContent['contact']['email'];

//Footer
const foot = document.querySelector('footer p');
foot.textContent = siteContent['footer']['copyright'];

