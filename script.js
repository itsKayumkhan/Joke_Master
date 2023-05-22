let joke = document.getElementById("joke");
let btn = document.getElementById("btn");
let url = "https://icanhazdadjoke.com/slack";
let newJoke = async () => {
  let response = await fetch(url);
  let data = await response.json();

  joke.innerHTML = data.attachments[0].text;
};
newJoke();

btn.addEventListener("click", newJoke);
