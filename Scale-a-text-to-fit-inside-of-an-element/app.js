const headlineEl = document.getElementById("headline");

// measure text by canvas
const measureWidthC1 = (text, font) => {
  // create canvas
  const canvas = document.createElement("canvas");
  // get context
  const context = canvas.getContext("2d");
  // set font
  context.font = font;
  // measure text
  const metrics = context.measureText(text);
  return metrics.width;
};

const measureWidth = (text, font) => {
  // create fake element
  const el = document.createElement("div");
  el.style.whiteSpace = "no-wrap";
  el.style.position = "absolute";
  el.style.left = "-999999px";
  el.style.font = font;
  el.textContent = text;
  el.style.display = "inline";

  document.body.appendChild(el);

  const width = getComputedStyle(el).width;

  document.body.removeChild(el);

  return width;
};

// get computed style that apply for element (CSS)
const styles = window.getComputedStyle(headlineEl);

const { font, fontSize } = styles;

// calc width of text
const measured = measureWidthC1(headlineEl.textContent, font);

console.log(measured);

// calc scale to fit element
const scale = headlineEl.clientWidth / parseFloat(measured);

// calc font size
const scaleFontSize = Math.floor(scale * parseFloat(fontSize));

// apply scaled to element
headlineEl.style.fontSize = `${scaleFontSize}px`;
