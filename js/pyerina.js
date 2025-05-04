document.querySelectorAll('.video-preview').forEach(preview => {
    const video = preview.querySelector('video');
  
    preview.addEventListener('mouseenter', () => {
      video.play();
    });
  
    preview.addEventListener('mouseleave', () => {
      video.pause();
      video.currentTime = 0;
    });
  
    preview.addEventListener('click', () => {
      const youtubeId = preview.getAttribute('data-youtube-id');
      const iframe = document.getElementById('videoFrame');
      iframe.src = `https://www.youtube.com/embed/${youtubeId}?autoplay=1`;
      document.getElementById('videoModal').classList.remove('hidden');
    });
  });
  
  document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('videoModal').classList.add('hidden');
    document.getElementById('videoFrame').src = '';
  });
  