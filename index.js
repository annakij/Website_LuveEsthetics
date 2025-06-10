const products = [
    {
      name: "C-Vitamindropp",
      time: "45 minuter",
      price: "1 699",
      image: "images/enecta-cannabis-extracts-80wCkpt-IKE-unsplash.jpg",
      details: "treatmentPages/vitamindropp.html",
      description:
        "Ge din kropp den näring den behöver med skräddarsydda vitamindroppar! I samarbete med Vitaminkliniken erbjuder vi en säker och effektiv behandling som ger din kropp viktiga vitaminer och mineraler direkt via dropp.",
    },
    {
      name: "Botox, 1-3 områden",
      time: "30 minuter",
      price: "1 900 - 2 900",
      image: "cardImages/botoxHeader.jpeg",
      details: "treatmentPages/botox.html",
      description:
        "Botoxbehandling är idealisk för att släta ut rynkor och förebygga djupa veck. Botox fungerar som muskelavslappnande läkemedel för att förbättra linjer, särskilt i pannan, arga rynkar och kråksparkar, samt kan lindra migrän.",
    },
    {
      name: "Fillers, olika behandlingar",
      time: "30-45 minuter",
      price: "1 900 - 2 400",
      image: "cardImages/fillersHeader.jpeg",
      details: "treatmentPages/fillers.html",
      description:
        "Fillers används för att fylla ut och lyfta huden, vilket ger ett slätare utseende och reducerar linjer och veck. Under behandlingen injiceras fillern i det område som du och din behandlare har kommit överens om. Eftersom effekten av behandlingen inte är permanent, krävs regelbundna återbesök för att upprätthålla det önskade resultatet.",
    },
    {
      name: "Lashlift",
      time: "60-70 minuter",
      price: "700 - 1 200",
      image: "cardImages/lashliftHeader.jpeg",
      details: "treatmentPages/lashlift.html",
      description:
        "Lash lift är skönhetsbehandlingar som ger dina fransar en naturlig lyft och böjning. Behandlingarna förbättrar både form och volym, vilket ger ett fräschare och mer öppet uttryck utan behov av smink. Resultatet varar i flera veckor och ger ett hållbart, vackert resultat.",
    },
  ];

  function displayProducts() {
    const container = document.getElementById("products-container");
    container.innerHTML = "";

    products.forEach((product) => {
      const productCard = `
      <div class="card my-5 reveal custom-card">
        <div class="row g-0">
          <div class="col-md-4">
            <img loading="lazy" src="${product.image}" class="img-fluid" alt="${product.name}">
          </div>
          <div class="col-md-8">
            <div class="card-body d-flex flex-column justify-content-between h-100">
              <h3 class="card-title pt-4">${product.name}</h3>
              <p>${product.time}</p>
              <p class="card-text">${product.description}</p>
              <div class="d-flex justify-content-end">
              <a class="btn custom-btn me-3" href="${product.details}">
                VISA MER
              </a>
              <a class="btn custom-btn" href="https://www.bokadirekt.se/places/luve-esthetics-59235" target="_blank">
                BOKA BEHANDLING
              </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    
      container.innerHTML += productCard;
    });

    //connect add-to-cart button
    document.querySelectorAll(".add-to-cart").forEach((button) => {
      button.addEventListener("click", (event) => {
        const name = event.target.getAttribute("data-name");
        const price = parseFloat(event.target.getAttribute("data-price"));
        cart.push({ name, price });
        updateCart();
      });
    });
  }

  displayProducts();

  // Reveal products at scroll - first two left as active
  document.addEventListener("DOMContentLoaded", function () {
    const reveals = document.querySelectorAll(".reveal");
    for (let i = 0; i < 2; i++) {
      if (reveals[i]) {
        reveals[i].classList.add("active");
      }
    }
  });
  window.addEventListener("scroll", revealProducts);

  function revealProducts() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var revealTop = reveals[i].getBoundingClientRect().top;
      var revealPoint = 150;

      if (revealTop < windowHeight - revealPoint) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }