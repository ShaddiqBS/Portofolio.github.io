var typed= new Typed(".text", {
    Strings: ["Frontend developer", "robotic engineer", "Web Developer, Phytoner"],
typeSpeed: 100,
backSpeed: 100,
backDelay: 1000,
loop: true
});
let section = document.querySelectorAll('section');

window.onscroll = () => {
    (document.querySelectorAll('header nav a')).forEach(sec => {
        let top = window.scrollY;
        let offset = sec,offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ']').classList.add

            })
        };
    }

    )
}

function myFunction() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }