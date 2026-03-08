function displayedRecipe(response) {
  new Typewriter("#recipe-generator", {
    strings: response.data.answer,
    autoStart: true,
    cursor: " ",
    delay: 3,
  });
}

function generateRecipe(event) {
  event.preventDefault();
  let input = document.querySelector("#search-form-input");
  let apiKey = "beo13db4f40a67ec083e24f0e0fatf50";
  let context =
    "You are a friendly chef who loves cute presentation. Generate a short recipe in basic HTML. Use <strong> for the title, <ul> for ingredients, <ol> for steps. Sign with '<em>SheCodes AI 🩷</em>' at the end.";
  let prompt = `User instructions: Generate a recipe about ${input.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let card = document.querySelector("#result-card");
  card.classList.remove("hidden");
  document.querySelector("#recipe-generator").innerHTML =
    `<p class="generating">🧑‍🍳 Cooking up a recipe for <strong>${input.value}</strong>...</p>`;
  axios.get(apiURL).then(displayedRecipe);
}

document
  .querySelector("#search-form")
  .addEventListener("submit", generateRecipe);
