// javascript code goes here
const colorBoxEelement = document.getElementById("colorbox");
const colorChangeElement = document.getElementById("colorchange");
const textContainerElement = document.getElementById("text-container");

// Color Change Functionality:---

colorChangeElement.addEventListener("click", (event) => {
   const  color = colorBoxEelement.value;
    textContainerElement.style.color = color;
});

// Font Size Adjustment:---

const rangeElement = document.getElementById("fontsize");
rangeElement.addEventListener("input", (event) => {
    const rangeTarget = event.target;
    const range = rangeTarget.value;
    textContainerElement.style.fontSize = range +"px";
});

// Text Style Toggles:---

const underlineBtnElement = document.getElementById("underline");
underlineBtnElement.addEventListener("click", () => {
    textContainerElement.style.textDecoration = "underline";

    underlineBtnElement.addEventListener("click", () => {
        textContainerElement.style.textDecoration = "none";
    });
});

const italicBtnElement = document.getElementById("italic");
italicBtnElement.addEventListener("click", () => {
    textContainerElement.style.fontStyle = "italic";

    italicBtnElement.addEventListener("click", () => {
        textContainerElement.style.fontStyle = "normal";
    });
});

const boldBtnElement = document.getElementById("bold");
boldBtnElement.addEventListener("click", () => {
    textContainerElement.style.fontWeight = "bold";

    boldBtnElement.addEventListener("click", () => {
        textContainerElement.style.fontWeight = "normal";
    });
});

// Font Family Selection:---

const listSelectorElement = document.getElementById("list");
listSelectorElement.addEventListener("click", (event) => {
    const selectElement = event.target;
    const select = selectElement.value;
    textContainerElement.style.fontFamily = select;
});

// Display CSS Properties:---

const cssPropsElement = document.getElementById("css-props");
const getstyleBtnElement = document.getElementById("getstyle");
getstyleBtnElement.addEventListener("click", () => {
    cssPropsElement.textContent = `coloe: ${colorBoxEelement.value}; font-size: ${rangeElement.value}px; text-decoration: ${textContainerElement.style.textDecoration}; font-style: ${textContainerElement.style.fontStyle}; font-weight: ${textContainerElement.style.fontWeight}; font-family: ${listSelectorElement.value};`;
});
