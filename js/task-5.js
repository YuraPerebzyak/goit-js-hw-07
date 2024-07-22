function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorButton = document.querySelector('.change-color');
const colorToText = document.querySelector('.color');


const changeBackgroundColor = () => {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  colorToText.textContent = randomColor;
};

changeColorButton.addEventListener('click', changeBackgroundColor);