document.addEventListener("DOMContentLoaded", () => {
  renderCarruselFotos(fotosHorizontales, 'horizontal-carousel-inner');
  renderCarruselFotos(fotosVerticales, 'vertical-carousel-inner');

  const dialog = document.getElementById("videoModal");
const videoFrame = document.getElementById("videoFrame");
const videoGallery = document.getElementById("videoGallery");
let isAnimating = false;

videoGallery.innerHTML = ""; // Limpia por si acaso

// Crear y agregar las miniaturas
videoLinks.forEach((video) => {
  const card = document.createElement("div");
  card.className = "video-card";
  card.addEventListener("click", () => {
    if (!isAnimating && !dialog.open) {
      openVideo(video);
    }
  });

  const img = document.createElement("img");
  img.src = video.poster;
  img.alt = video.title || "Video";

  const overlay = document.createElement("div");
  overlay.className = "overlay";

  const title = document.createElement("div");
  title.className = "video-title";
  title.textContent = video.title || "Sin título";

  const date = document.createElement("div");
  date.className = "video-date";
  date.textContent = video.date || "Sin fecha";

  overlay.appendChild(title);
  overlay.appendChild(date);
  card.appendChild(img);
  card.appendChild(overlay);
  videoGallery.appendChild(card);
});

function openVideo(video) {
  forceCloseDialog(); // Asegura que esté limpio

  dialog.classList.add(video.orientation === "horizontal" ? "video-horizontal" : "video-vertical");

  let embedUrl = "";
  if (video.type === "youtube") {
    embedUrl = `https://www.youtube.com/embed/${video.id}?autoplay=1`;
  } else if (video.type === "vimeo") {
    embedUrl = `https://player.vimeo.com/video/${video.id}?autoplay=1`;
  }

  videoFrame.src = embedUrl;

  setTimeout(() => {
    dialog.showModal();
    requestAnimationFrame(() => {
      dialog.classList.add("show");
    });
  }, 20); // Le damos tiempo a que el display se reinicie
}


  dialog.addEventListener("click", (event) => {
  if (event.target === dialog) {
    forceCloseDialog();
  }
});


function forceCloseDialog() {
  videoFrame.src = "";
  dialog.classList.remove("show", "video-horizontal", "video-vertical");
  dialog.close();
  dialog.style.display = "none"; // Fuerza ocultar
  setTimeout(() => {
    dialog.style.display = "flex"; // Rehabilita para el siguiente uso
  }, 10);
}

});

// Renderiza carruseles de fotos
function renderCarruselFotos(fotos, containerId) {
  const container = document.getElementById(containerId);
  fotos.forEach((foto, index) => {
    const item = document.createElement("div");
    item.className = "carousel-item" + (index === 0 ? " active" : "");
    item.innerHTML = `<img src="${foto.src}" class="d-block img-fluid custom-img">`;
    container.appendChild(item);
  });
}

// Scroll navbar
window.addEventListener('scroll', function () {
  const navbar = document.getElementById('navbar');
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

function openVideoModal(url, isVertical = false) {
  const modal = new bootstrap.Modal(document.getElementById('videoModal'));
  const iframe = document.getElementById('videoFrame');
  const modalDialog = document.getElementById('modalDialog');

  // Limpiar clases previas
  modalDialog.className = 'modal-dialog'; // Siempre parte de esta base

  // Si es horizontal, agregar modal-xl
  if (!isVertical) {
    modalDialog.classList.add('modal-xl');
  }

  iframe.src = url;
  modal.show();

  // Vaciar el src al cerrar (detiene sonido)
  const modalElement = document.getElementById('videoModal');
  modalElement.addEventListener('hidden.bs.modal', () => {
    iframe.src = '';
  }, { once: true });
}


// Lista de fotos horizontales y verticales
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
  { src: "./img/_MG_9892.jpg" },
  { src: "./img/_DSC0881.jpg" },
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
  { src: "./img/_DSC1786.jpg" },

];

// Lista de videos (YouTube + Vimeo)
const videoLinks = [
  {
    type: "youtube",
    id: "6BkD_dwTow4",
    title: "Piurarde Vol. 2",
    date: "14/09/2024",
    poster: "https://i.ytimg.com/vi/6BkD_dwTow4/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARgTIEgofzAP&rs=AOn4CLDUQrkztQu_VMofDE7WBICG31NLqw",
    orientation: "horizontal"
  },
  {
    type: "youtube",
    id: "5Sh_2PW6udc",
    title: "Piurarde Vol. 3",
    date: "07/12/2024",
    poster: "https://i.ytimg.com/vi/5Sh_2PW6udc/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARh_IBMoRjAP&rs=AOn4CLBXSBJigkHlexuJ024vIrBfXfRsTw",
    orientation: "horizontal"
  },
  {
    type: "vimeo",
    id: "1081597068?h=d765640d74&amp",
    title: "Final Miss Piura",
    date: "03/08/24",
    poster: "https://i.vimeocdn.com/video/2012410397-d9a2a6366fdd75d19a35ced3134abc5f69187b0f7f929045d952629d7d03bedd-d?mw=2240&mh=1260&q=70",
    orientation: "horizontal"
  },
  {
    type: "vimeo",
    id: "1081645760?h=7a57dd7fb1&amp",
    title: "Piura Leyends Vol. 2",
    date: "21/12/2024",
    poster: "https://i.vimeocdn.com/video/2012469498-a79c20e9fa5dcc8f619d136e3dae377cd18e4b56352c8781a657fb849ecd5adb-d?mw=500&mh=889",
    orientation: "vertical"
  },
  {
    type: "vimeo",
    id: "1081595991?h=c1639e1865&amp",
    title: "Clausura CAC",
    date: "29/04/2025",
    poster: "https://i.vimeocdn.com/video/2012408937-a247f00e1f1ba4effd4b8a00cdee6fe00d54837c4620ba8e3a6e966942742deb-d?mw=1000&mh=1778&q=70",
    orientation: "vertical"
  },
  {
    type: "vimeo",
    id: "1081593182?h=e4c72f9ee7&amp",
    title: "Piurarde Vol. 4",
    date: "05/04/2025",
    poster: "https://i.vimeocdn.com/video/2012406123-9495fa9f63666d7bdd6e54500c91e89cdbb4f8ccee98de83ef1b315ac07cc5f7-d?mw=1000&mh=1778&q=70",
    orientation: "vertical"
  }
];








