function displayedPoem(response) {
  new Typewriter("#poem-generator", {
    strings: response.data.answer,
    autoStart: true,
    cursor: " ",
    delay: 3,
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#search-form-input");
  let apiKey = "beo13db4f40a67ec083e24f0e0fatf50";
  let context =
    "You are a romantic Poem expert and love to write short poems. You mission is to generate a 4 line poem in basic HTML and separate each line with a <br />. Make sure to follow the user instructions. Do not include a title to the poem. Sign the poem with 'SheCodes AI' inside a <strong> element at the end of the poem and NOT at the beginning";
  let prompt = `User instructions: Generate a english poem about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem-generator");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳ Generating a English poem about ${instructionsInput.value}</div>`;

  axios.get(apiURL).then(displayedPoem);
}

let poemElement = document.querySelector("#search-form");
poemElement.addEventListener("submit", generatePoem);
