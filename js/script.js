document.addEventListener("DOMContentLoaded", () => {
  renderCarruselFotos(fotosHorizontales, 'horizontal-carousel-inner');
  renderCarruselFotos(fotosVerticales, 'vertical-carousel-inner');

  const container = document.getElementById('videoGallery');
  const videoModal = document.getElementById('videoModal');
  const videoFrame = document.getElementById('videoFrame');
  const bootstrapModal = new bootstrap.Modal(videoModal);

  // Renderizar miniaturas de videos
  videoLinks.forEach(video => {
    const div = document.createElement('div');
    div.className = 'video-preview';
    div.dataset.id = video.id;
    div.dataset.type = video.type;
    div.innerHTML = `
      <img src="${video.poster}" alt="Video Thumbnail" class="video-thumbnail" />
    `;

    container.appendChild(div);
  });

  // Evento global para abrir el modal con el video correspondiente
  document.addEventListener('click', function (e) {
    const preview = e.target.closest('.video-preview');

    if (preview) {
      const id = preview.dataset.id;
      const type = preview.dataset.type;
      const iframe = document.getElementById('videoFrame');

      let src = "";

      if (type === "youtube") {
        src = `https://www.youtube.com/embed/${id}?autoplay=1`;
      } else if (type === "vimeo") {
        src = `https://player.vimeo.com/video/${id}?autoplay=1`;
      }

      iframe.src = src;

      const myModal = new bootstrap.Modal(document.getElementById('videoModal'));
      myModal.show();
    }

    // Cerrar video al cerrar el modal
    if (e.target.matches('.btn-close')) {
      const iframe = document.getElementById('videoFrame');
      iframe.src = '';
    }
  });

  // Limpiar el iframe al cerrar el modal
  videoModal.addEventListener('hidden.bs.modal', () => {
    videoFrame.src = '';
  });
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
  { src: "./img/_MG_9892.jpg" },
  { src: "./img/_MG_0881.jpg" },
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
    poster: "https://i.ytimg.com/vi/6BkD_dwTow4/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARgTIEgofzAP&rs=AOn4CLDUQrkztQu_VMofDE7WBICG31NLqw"
  },
  {
    type: "youtube",
    id: "5Sh_2PW6udc",
    poster: "https://i.ytimg.com/vi/5Sh_2PW6udc/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARh_IBMoRjAP&rs=AOn4CLBXSBJigkHlexuJ024vIrBfXfRsTw"
  },
  {
    type: "vimeo",
    id: "1081597068?h=d765640d74&amp",
    poster: "https://i.vimeocdn.com/video/2012410397-d9a2a6366fdd75d19a35ced3134abc5f69187b0f7f929045d952629d7d03bedd-d?mw=2240&mh=1260&q=70"
  },
  {
    type: "vimeo",
    id: "1081645760?h=7a57dd7fb1&amp",
    poster: "https://i.vimeocdn.com/video/2012469498-a79c20e9fa5dcc8f619d136e3dae377cd18e4b56352c8781a657fb849ecd5adb-d?mw=500&mh=889"
  },
  {
    type: "vimeo",
    id: "1081595991?h=c1639e1865&amp",
    poster: "https://i.vimeocdn.com/video/2012408937-a247f00e1f1ba4effd4b8a00cdee6fe00d54837c4620ba8e3a6e966942742deb-d?mw=1000&mh=1778&q=70"
  },
  {
    type: "vimeo",
    id: "1081593182?h=e4c72f9ee7&amp",
    poster: "https://i.vimeocdn.com/video/2012406123-9495fa9f63666d7bdd6e54500c91e89cdbb4f8ccee98de83ef1b315ac07cc5f7-d?mw=1000&mh=1778&q=70"
  }
];
