// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
let navbar = document.getElementById("navbar");

// Get the offset position of the navbar
let sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

window.onscroll = function() {myFunction()};

function myFunction() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}


//Space Facts Generator
function getFact(){
    let newFact = document.getElementById("fact");
    let source = document.getElementById("source");

    let facts = [];
    let sources = [];

    facts[0] = "Mercury and Venus are the only two planets in our solar system that have no moons. "
    sources[0] = "The Fact Site"

    facts[1] = "Space is completely silent."
    sources[1] = "theplanets.org"

    facts[2] = "Uranus, the gas giant spins sideways. Appearing to roll around the sun like a ball."
    sources[2] = "space.com"

    facts[3] = "The highest mountain discovered is the Olympus Mons, which is located on Mars."
    sources[3] = "The Fact Site"

    facts[4] = "Neptune's winds are the fastest in the solar system. its giant, spinning storms could swallow the whole earth!"
    sources[4] = "nasa"

    facts[5] = "Halleys Comet will not orbit past Earth again until 2061. The famous comet was last seen in 1986 and is only seen once every 75 to 76 years."
    sources[5] = "theplanets.org"

    let i = Math.floor(Math.random() * facts.length);

    newFact.innerHTML = facts[i];
    source.innerHTML = sources[i];
}

//Blog Post 
function getBlog() {
    let newBlog = document.getElementById("blog");
    let newTitle = document.getElementById("title");

    let blogs = [];
    let title = [];

    blogs[0] = "In this blog post I discuss what data visualisation is and how it is used to simplify data so that the data may be received clearly."
    title[0] = "Blog Post One"
    

    blogs[1] = "In this blog post I critically analyse and discuss the UI/UX I used to create the website."
    title[1] = "Blog Post Two"

    let i = Math.floor(Math.random() * blogs.length);

    newBlog.innerHTML = blogs[i];
    newTitle.innerHTML = title[i];

}

let dataartbtn = document.querySelector("#dataartbtn");
dataartbtn.addEventListener("click", () => GoToDataArtPage());

function GoToDataArtPage(){
    window.location.replace("https://kiarose19.github.io/FinalWebsite_Assignment4_DataArt_2506102/data-art.html");
}

let datavisbtn = document.querySelector("#datavisbtn");
datavisbtn.addEventListener("click", () => GoToDataVisPage());

function GoToDataVisPage(){
    window.location.replace("https://kiarose19.github.io/FinalWebsite_Assignment4_DataArt_2506102/data-vis.html");
}

let designbtn = document.querySelector("#designbtn");
designbtn.addEventListener("click", () => GoToDesignPage());

function GoToDesignPage(){
    window.location.replace("https://kiarose19.github.io/FinalWebsite_Assignment4_DataArt_2506102/designs.html");
}

let blogsbtn = document.querySelector("#blogsbtn");
blogsbtn.addEventListener("click", () => GoToBlogsPage());

function GoToBlogsPage(){
    window.location.replace("https://kiarose19.github.io/FinalWebsite_Assignment4_DataArt_2506102/blogs.html");
}

const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('nav a');

forEach(link => {
  if (link.href.includes(`${activePage}`)) {
    link.classList.add('active');
  }
});

document.querySelector('.scrolldownbtn').addEventListener('click', function (e){
  e.preventDefault();
  const targetID = this.getAttribute('href').substring(1);
  const targetElement = document.getElementById(targetID);

  if (targetElement){
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: 'smooth'
    });
  }
});

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
 function openModal(){
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
 function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Get the button that opens the modal
var btn = document.getElementById("myBtn2");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close2")[0];

// When the user clicks the button, open the modal 
 function openModal2(){
  var modal = document.getElementById("myModal2");
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
 function closeModal2() {
  var modal = document.getElementById("myModal2");
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}