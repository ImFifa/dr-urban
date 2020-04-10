const isBrowser = (typeof window !== `undefined` && typeof document !== `undefined` )

if (isBrowser) {
  // hide navbar on scroll
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
    if (currentScrollPos < 20 || prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
  }

  // collapse on link click
  document.addEventListener("click", function(event) {
    if (event.target.classList.contains("nav-link")) {
      document.getElementById("basic-navbar-nav").classList.remove("show");
      document.getElementById('navbar-toggler').classList.add('collapsed');
    }
  });
}