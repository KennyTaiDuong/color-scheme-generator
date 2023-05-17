const firstColor = document.querySelector(".first");
const firstCode = document.querySelector(".first.code");
const secondColor = document.querySelector(".second");
const secondCode = document.querySelector(".second.code");
const thirdColor = document.querySelector(".third");
const thirdCode = document.querySelector(".third.code");
const fourthColor = document.querySelector(".fourth");
const fourthCode = document.querySelector(".fourth.code");
const fifthColor = document.querySelector(".fifth");
const fifthCode = document.querySelector(".fifth.code");
const colorInput = document.querySelector("#input-color");
const colorScheme = document.querySelector("#color-scheme");
const generateBtn = document.querySelector("#generate-btn");

generateBtn.addEventListener("click", function () {
  renderScheme();
});

function renderScheme() {
  const hex = colorInput.value.substring(1);
  const scheme = colorScheme.value;
  fetch(`https://www.thecolorapi.com/scheme?hex=${hex}&mode=${scheme}&count=5`)
    .then((response) => response.json())
    .then((data) => {
      firstColor.style.backgroundColor = data.colors[0].hex.value;
      firstCode.textContent = data.colors[0].hex.value;
      secondColor.style.backgroundColor = data.colors[1].hex.value;
      secondCode.textContent = data.colors[1].hex.value;
      thirdColor.style.backgroundColor = data.colors[2].hex.value;
      thirdCode.textContent = data.colors[2].hex.value;
      fourthColor.style.backgroundColor = data.colors[3].hex.value;
      fourthCode.textContent = data.colors[3].hex.value;
      fifthColor.style.backgroundColor = data.colors[4].hex.value;
      fifthCode.textContent = data.colors[4].hex.value;
    });
}
