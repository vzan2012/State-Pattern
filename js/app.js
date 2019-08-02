// Page State
const PageState = function() {
  let currentState = new homeState(this);

  this.init = function() {
    this.change(new homeState());
  };

  this.change = function(state) {
    currentState = state;
  };
};

// Home State
const homeState = function(page) {
  document.querySelector("#heading").textContent = null;
  document.querySelector("#content").innerHTML = `
    <div class="jumbotron">
    <h1 class="display-4">Hello, world!</h1>
    <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    <hr class="my-4">
    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
    <p class="lead">
    <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
    </p>
    </div>
    `;
};

// About State
const aboutState = function(page) {
  document.querySelector("#heading").textContent = `About Page`;
  document.querySelector("#content").innerHTML = `
      <p>
        This is a About Page
      </p>
    `;
};

// Contact State
const contactState = function(page) {
  document.querySelector("#heading").textContent = `Contact Page`;
  document.querySelector("#content").innerHTML = `
      <p>
        This is a Contact Page
      </p>
    `;
};

// Instantiate pageState
const page = new PageState();

// Init the Page State
page.init();

// UI Vars
const home = document.querySelector("#home"),
  about = document.querySelector("#about"),
  contact = document.querySelector("#contact");

// Home
home.addEventListener("click", e => {
  page.change(new homeState());
  e.preventDefault();
});

// About
about.addEventListener("click", e => {
  page.change(new aboutState());
  e.preventDefault();
});

// Contact
contact.addEventListener("click", e => {
  page.change(new contactState());
  e.preventDefault();
});
