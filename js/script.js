
document.addEventListener('DOMContentLoaded', () => {
  const modeToggle = document.getElementById('mode-toggle');
  modeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });

  const tabs = document.querySelectorAll('#sidebar nav a');
  const sections = document.querySelectorAll('.tab');

  tabs.forEach(tab => {
    tab.addEventListener('click', e => {
      e.preventDefault();
      tabs.forEach(t => t.classList.remove('active'));
      sections.forEach(s => s.classList.remove('active'));
      tab.classList.add('active');
      document.getElementById(tab.getAttribute('data-target')).classList.add('active');
    });
  });

  fetchLatestVideo();
  fetchAllVideos();

  function fetchLatestVideo() {
    fetch('https://www.googleapis.com/youtube/v3/search?key=AIzaSyBxjceYQcKUaSwU12QLeu6meNmuIBunMng&channelId=UCoXzWPTne8dHYrftHpdIopw&order=date&maxResults=1')
      .then(res => res.json())
      .then(data => {
        const videoId = data.items[0].id.videoId;
        document.getElementById('latest-video').innerHTML =
          `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>`;
      });
  }

  function fetchAllVideos() {
    fetch('https://www.googleapis.com/youtube/v3/search?key=AIzaSyBxjceYQcKUaSwU12QLeu6meNmuIBunMng&channelId=UCoXzWPTne8dHYrftHpdIopw&order=date&maxResults=50')
      .then(res => res.json())
      .then(data => {
        const container = document.getElementById('video-grid');
        container.innerHTML = '';
        data.items.forEach(item => {
          if (item.id.kind === 'youtube#video') {
            const videoId = item.id.videoId;
            const title = item.snippet.title;
            const thumb = item.snippet.thumbnails.medium.url;
            container.innerHTML += `
              <div class="video-item">
                <a href="https://www.youtube.com/watch?v=${videoId}" target="_blank">
                  <img src="${thumb}" alt="${title}"/>
                  <p>${title}</p>
                </a>
              </div>`;
          }
        });
        document.getElementById('search-bar').addEventListener('input', function () {
          const val = this.value.toLowerCase();
          document.querySelectorAll('.video-item').forEach(item => {
            item.style.display = item.textContent.toLowerCase().includes(val) ? '' : 'none';
          });
        });
      });
  }

  document.getElementById('contact-form').addEventListener('submit', e => {
    e.preventDefault();
    alert('Message sent to abuyusufalhamdy@gmail.com');
  });
});
