// SCROLL TO TOP

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}


// SMOOTH SCROLL

const storyLinks = document.querySelectorAll(".story-link");
const storyTop = document.querySelector("#story-top");

storyLinks.forEach((link) => {
  link.addEventListener("click", () => {
    console.log("story");
    storyTop.scrollIntoView({
      behavior: "smooth"
    })
  });
});


// STORY

const storySubheaders = document.querySelectorAll(".story-subheader");
const storySnippets = document.querySelectorAll(".story-snippet");

storySubheaders.forEach((sub) => {
  sub.addEventListener("click", () => {
    activeTab(sub.id);
  })
})

function activeTab(section) {
  storySubheaders.forEach((sub) => {
    sub.classList.remove("story-subheader-active");
  })

  const clickedSubheader = document.getElementById(section);
  clickedSubheader.classList.add("story-subheader-active");

  storySnippets.forEach((snippet) => {
    snippet.classList.add("hidden");
  })

  const clickedSnippet = document.getElementById(`${section}-snippet`);
  clickedSnippet.classList.remove("hidden");
}



// LEARNING

const learningCircles = document.querySelectorAll(".learning-circle");
const learningCerts = document.querySelectorAll(".learning-cert");
const overlay = document.querySelector(".overlay");

learningCircles.forEach((circle) => {
  circle.addEventListener("click", () => {
    activeCircle(circle.id);
  })
})

function activeCircle(cert) {
  const activeCert = document.getElementById(`${cert}-cert`);
  activeCert.classList.remove("hidden");

  overlay.classList.remove("hidden");
}


overlay.addEventListener("click", () => {
  overlay.classList.add("hidden");
  learningCerts.forEach((cert) => {
    cert.classList.add("hidden");
  })
})


// PROJECTS

const projects = document.querySelector(".projects");

let isDown = false;
let startX;
let scrollLeft;

projects.addEventListener("mousedown", (e) => {
  isDown = true;
  startX = e.pageX - projects.offsetLeft;
  scrollLeft = projects.scrollLeft;
});

projects.addEventListener("mouseleave", () => {
  isDown = false;
});

projects.addEventListener("mouseup", () => {
  isDown = false;
});

projects.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - projects.offsetLeft;
  const move = (x - startX);
  projects.scrollLeft = scrollLeft - move;
});


// SCROLL

const pageSections = document.querySelectorAll(".page-section");

function revealSection(entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section-hidden");
  sectionObserver.unobserve(entry.target);
}

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15
})

pageSections.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add("section-hidden");
})
