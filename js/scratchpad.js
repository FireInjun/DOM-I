const siteContent = {
    "nav": {
        "nav-item-1": "Services",
        "nav-item-2": "Product",
        "nav-item-3": "Vision",
        "nav-item-4": "Features",
        "nav-item-5": "Contact",
        "nav-item-6": "About",
        "img-src": "img/logo.png"
    },

    "cta": {
        "h1": "DOM Is Awesome",
        "button": "Get Started",
        "img-src": "img/header-img.png"
    },

    "main-content": {
        "features-h4": "Features",
        "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "about-h4": "About",
        "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "middle-img-src": "img/mid-page-accent.jpg",
        "services-h4": "Services",
        "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "product-h4": "Product",
        "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "vision-h4": "Vision",
        "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    },

    "contact": {
        "contact-h4": "Contact",
        "address": "123 Way 456 Street Somewhere, USA",
        "phone": "1 (888) 888-8888",
        "email": "sales@greatidea.io",
    },

    "footer": {
        "copyright": "Copyright Great Idea! 2018",
    },
};





//Note on using for() loops, treat siteContent as an array and use array methods!
//Start by deconstructing siteContent into arrays.
const mainArr = Array.from(Object.entries(siteContent));
const navArr = Array.from(mainArr[0]);
const ctaArr = Array.from(mainArr[1]);
const mainContentArr = Array.from(mainArr[2]);
const contactArr = Array.from(mainArr[3]);
const footerArr = Array.from(mainArr[4]);


console.log()

// console.log(mainArr);
// console.log(navArr);
// console.log(ctaArr);
// console.log(mainContentArr);
// console.log(contactArr);
// console.log(footerArr);


// Update logo image
document.getElementById("logo-img").src = siteContent['nav']['img-src'];


// Update header image
document.getElementById("cta-img").src = siteContent['cta']['img-src'];

// Add middle image
document.getElementById("middle-img").src = siteContent["main-content"]["middle-img-src"];

// Add header links
// TODO Add for()loop to clean up this code.
/*let nav = document.getElementsByTagName('nav');
nav[0].children[0].innerHTML = siteContent['nav']['nav-item-1'];
nav[0].children[1].innerHTML = siteContent['nav']['nav-item-2'];
nav[0].children[2].innerHTML = siteContent['nav']['nav-item-3'];
nav[0].children[3].innerHTML = siteContent['nav']['nav-item-4'];
nav[0].children[4].innerHTML = siteContent['nav']['nav-item-5'];
nav[0].children[5].innerHTML = siteContent['nav']['nav-item-6'];*/

//for() loop here





// Add cta contect heading
document.querySelector('.cta-text').firstElementChild.innerHTML = siteContent.cta.h1;

// Add cta button
document.querySelector('.cta-text').getElementsByTagName('button')[0].innerHTML = siteContent.cta.button;



// Add main content
// Seperate into Top Content and Bottom Content

// Top Content
/*document.querySelector('.top-content').getElementsByTagName('h4')[0].innerHTML = siteContent["main-content"]["features-h4"];
document.querySelector('.top-content').getElementsByTagName('p')[0].innerHTML = siteContent["main-content"]["features-content"];
document.querySelector('.top-content').getElementsByTagName('h4')[1].innerHTML = siteContent["main-content"]["about-h4"];
document.querySelector('.top-content').getElementsByTagName('p')[1].innerHTML = siteContent["main-content"]["about-content"];*/

// Bottom Content
/*document.querySelector('.bottom-content').getElementsByTagName('h4')[0].innerHTML = siteContent["main-content"]["services-h4"];
    document.querySelector('.bottom-content').getElementsByTagName('p')[0].innerHTML = siteContent["main-content"]["services-content"];
document.querySelector('.bottom-content').getElementsByTagName('h4')[1].innerHTML = siteContent["main-content"]["product-h4"];
    document.querySelector('.bottom-content').getElementsByTagName('p')[1].innerHTML = siteContent["main-content"]["product-content"];
document.querySelector('.bottom-content').getElementsByTagName('h4')[2].innerHTML = siteContent["main-content"]["vision-h4"];
    document.querySelector('.bottom-content').getElementsByTagName('p')[2].innerHTML = siteContent["main-content"]["vision-content"];*/

//for() loop here




// Add contact
/*document.querySelector('.contact').getElementsByTagName('h4')[0].innerHTML = siteContent.contact["contact-h4"];
    document.querySelector('.contact').getElementsByTagName('p')[0].innerHTML = siteContent.contact["address"];
    document.querySelector('.contact').getElementsByTagName('p')[1].innerHTML = siteContent.contact["phone"];
    document.querySelector('.contact').getElementsByTagName('p')[2].innerHTML = siteContent.contact["email"];*/

//for() loop here




// Add footer
document.querySelector('footer').getElementsByTagName('p')[0].innerHTML = siteContent.footer.copyright;