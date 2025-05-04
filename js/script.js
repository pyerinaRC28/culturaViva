const fotosHorizontales = [
  { src: "./img/_DSC0084.jpg" },
  { src: "./img/_DSC5673.jpg" },
  { src: "./img/_DSC4264.jpg" },
  { src: "./img/_DSC6105.jpg" },
  { src: "./img/_DSC6167.jpg" },
  { src: "./img/_DSC9847.jpg" },
  { src: "./img/_DSC6649.jpg" },
  { src: "./img/_DSC4448.jpg" },
  { src: "./img/_DSC5435.jpg" },
  { src: "./img/_DSC2250.jpg" },
  { src: "./img/_MG_9892.jpg" }
];

const fotosVerticales = [
  { src: "./img/_DSC6140.jpg" },
  { src: "./img/_DSC6023.jpg" },
  { src: "./img/_DSC5476.jpg" },
  { src: "./img/_DSC4378.jpg" },
  { src: "./img/_DSC3943.jpg" },
  { src: "./img/_DSC6159.jpg" },
  { src: "./img/_MG_0013.jpg" },
  { src: "./img/_DSC6786.jpg" },
  { src: "./img/_DSC2107.jpg" },
  { src: "./img/_DSC2223.jpg" },
  { src: "./img/_DSC6715.jpg" },
];

function renderCarruselFotos(fotos, containerId) {
  const container = document.getElementById(containerId);
  fotos.forEach((foto, index) => {
    const item = document.createElement("div");
    item.className = "carousel-item" + (index === 0 ? " active" : "");
    item.innerHTML = `
        <img src="${foto.src}" class="d-block img-fluid custom-img">
      `;
    container.appendChild(item);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderCarruselFotos(fotosHorizontales, "horizontal-carousel-inner");
  renderCarruselFotos(fotosVerticales, "vertical-carousel-inner");
});
