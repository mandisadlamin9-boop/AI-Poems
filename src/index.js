function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem-generator", {
    strings: "the poem will be displayed here",
    autoStart: true,
    cursor: " ",
    delay: 3,
  });
}

let poemElement = document.querySelector("#search-form");
poemElement.addEventListener("submit", generatePoem);
