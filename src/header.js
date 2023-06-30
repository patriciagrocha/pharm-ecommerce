
const logoImg = {
  src: "img/logo.png",
  alt: "Logo Pharma Popular",
};

const options = [
  {
    text: "Início",
    href: "index.html",
  },
  {
    text: "Todos os medicamentos",
    href: "./pages/medicine.html",
  },
  {
    text: "Sobre nós",
    href: "./pages/about.html",
  },
  {
    text: "Fale conosco",
    href: "./pages/contact.html",
  },
];

const logo = document.querySelector("#logo");
for(const key in logoImg) {
  logo.setAttribute(key, logoImg[key])
}

const navLinks = document.querySelectorAll(".navbar-nav a");
function menuOptions(navLinks, options) {
  navLinks.forEach((link, index) => {
        const option = options[index]
        link.innerText = option.text;
        link.setAttribute("href", option.href);    
  });
}
menuOptions(navLinks, options);


