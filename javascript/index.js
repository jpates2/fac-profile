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
