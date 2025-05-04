document.addEventListener("DOMContentLoaded", () => {
  renderCarruselFotos(fotosHorizontales, 'horizontal-carousel-inner');
  renderCarruselFotos(fotosVerticales, 'vertical-carousel-inner');

  const container = document.getElementById('videoGallery');
  const videoModal = document.getElementById('videoModal');
  const videoFrame = document.getElementById('videoFrame');
  const bootstrapModal = new bootstrap.Modal(videoModal);

  // Tu lista de videos (debes tenerla definida como array de objetos)
  videoLinks.forEach(video => {
    const div = document.createElement('div');
    div.className = 'video-preview';
    div.dataset.youtubeId = video.youtubeId;
    div.innerHTML = `
    <img src="${video.poster}" alt="Video Thumbnail" class="video-thumbnail" />
  `;

    // Evento para abrir el modal con el video
    div.addEventListener('click', () => {
      const videoUrl = `https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`;
      videoFrame.src = videoUrl;
      bootstrapModal.show();
    });

    container.appendChild(div);
  });

  // Limpia el video al cerrar el modal
  videoModal.addEventListener('hidden.bs.modal', () => {
    videoFrame.src = '';
  });


  document.addEventListener('click', function (e) {
    const preview = e.target.closest('.video-preview');

    if (preview) {
      const youtubeId = preview.dataset.youtubeId;
      const iframe = document.getElementById('videoFrame');
      iframe.src = `https://www.youtube.com/embed/${youtubeId}?autoplay=1`;

      const myModal = new bootstrap.Modal(document.getElementById('videoModal'));
      myModal.show();
    }

    if (e.target.matches('.btn-close')) {
      const iframe = document.getElementById('videoFrame');
      iframe.src = ''; // Detener el video
    }
  });
});

function renderCarruselFotos(fotos, containerId) {
  const container = document.getElementById(containerId);
  fotos.forEach((foto, index) => {
    const item = document.createElement("div");
    item.className = "carousel-item" + (index === 0 ? " active" : "");
    item.innerHTML = `<img src="${foto.src}" class="d-block img-fluid custom-img">`;
    container.appendChild(item);
  });
}

/*-------------Scroll Navbar---------------*/
window.addEventListener('scroll', function () {
  const navbar = document.getElementById('navbar');
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});


/*-------Carrousel----------------------*/
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

const videoLinks = [
  {
    youtubeId: "gAGfMjAYla0",
    poster: "https://img.youtube.com/vi/gAGfMjAYla0/hqdefault.jpg",
    src: "https://www.youtube.com/embed/gAGfMjAYla0?si=PJzWPycEijvJZAyX"
  },
  {
    youtubeId: "6BkD_dwTow4",
    poster: "https://img.youtube.com/vi/6BkD_dwTow4/hqdefault.jpg",
    src: "https://www.youtube.com/embed/6BkD_dwTow4?si=ANZoBkw-Nv6iBqvh"
  },
  {
    youtubeId: "wzVp0Lz8m0w",
    poster: "https://img.youtube.com/vi/wzVp0Lz8m0w/hqdefault.jpg",
    src: "https://www.youtube.com/embed/wzVp0Lz8m0w?si=0WnTIbm_9LhGwp2H"
  },
  {
    youtubeId: "p5eyR3MzRd8",
    poster: "https://img.youtube.com/vi/p5eyR3MzRd8/hqdefault.jpg",
    src: "https://www.youtube.com/embed/p5eyR3MzRd8?si=GeFWIOdTCOkvEyXx"
  },
  {
    youtubeId: "O9-1Wdm0SzI",
    poster: "https://img.youtube.com/vi/O9-1Wdm0SzI/hqdefault.jpg",
    src: "https://www.youtube.com/embed/O9-1Wdm0SzI?si=0Mm-G2vgIEpd0dq5"
  },
  {
    youtubeId: "5Sh_2PW6udc",
    poster: "https://img.youtube.com/vi/5Sh_2PW6udc/hqdefault.jpg",
    src: "https://www.youtube.com/embed/5Sh_2PW6udc?si=0oauGyMM0rB6HCFA"
  }
];



