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
