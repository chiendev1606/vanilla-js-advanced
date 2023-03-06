const textBox = document.getElementById("input");
const fakeElement = document.createElement("div");

const stylesTextBox = getComputedStyle(textBox);

fakeElement.style.visibility = "hidden";
fakeElement.style.position = "absolute";
fakeElement.style.left = "-9999999px";

// copy font style
fakeElement.style.font = stylesTextBox.font;
fakeElement.style.padding = stylesTextBox.padding;
fakeElement.style.letterSpacing = stylesTextBox.letterSpacing;
fakeElement.style.fontWeight = stylesTextBox.fontWeight;
fakeElement.style.border = stylesTextBox.border;

document.body.appendChild(fakeElement);

// use fakeElement
const setWidth = () => {
  const text = textBox.value || textBox.getAttribute("placeholder") || "";
  fakeElement.innerHTML = text.replace(/\s/g, "&nbsp;");
  textBox.style.width = getComputedStyle(fakeElement).width;
};

// use canvas
const setWidth2 = () => {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  context.font = stylesTextBox.font;
  const text = textBox.value || textBox.getAttribute("placeholder") || "";
  const textHtml = text.replace(/\s/g, "&nbsp;");
  context.font = stylesTextBox.font;
  const metrics = context.measureText(textHtml);

  textBox.style.width = metrics.width;
};

setWidth();

textBox.addEventListener("input", () => {
  setWidth();
});
