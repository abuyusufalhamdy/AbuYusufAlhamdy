const API_KEY = 'AIzaSyBxjceYQcKUaSwU12QLeu6meNmuIBunMng';
const CHANNEL_ID = 'UCoXzWPTne8dHYrftHpdIopw';

const sidebar = document.getElementById('sidebar');
const toggleSidebarBtn = document.getElementById('toggleSidebar');
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

toggleSidebarBtn.addEventListener('click', () => {
  if (sidebar.classList.contains('sidebar-expanded')) {
    sidebar.classList.remove('sidebar-expanded');
    sidebar.classList.add('sidebar-collapsed');
  } else {
    sidebar.classList.add('sidebar-expanded');
    sidebar.classList.remove('sidebar-collapsed');
  }
});

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    tabButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    const tabToShow = button.getAttribute('data-tab');
    tabContents.forEach(content => {
      content.classList.toggle('active', content.id === tabToShow);
    });
  });
});

// Utility to create video cards
function createVideoCard(video) {
  const div = document.createElement('div');
  div.className = 'video-card';
  div.innerHTML = `
    <iframe src="https://www.youtube.com/embed/${video.id.videoId}" frameborder="0" allowfullscreen></iframe>
    <div class="video-title">${video.snippet.title}</div>
  `;
  div.addEventListener('click', () => {
    openVideoOverlay(video.id.videoId);
  });
  return div;
}

// Open video overlay with animation
function openVideoOverlay(videoId) {
  const overlay = document.createElement('div');
  overlay.className = 'enlarge-overlay';
  overlay.innerHTML = `
    <iframe src="https://www.youtube.com/embed/${videoId}?autoplay=1" frameborder="0" allowfullscreen></iframe>
  `;
  document.body.appendChild(overlay);
  overlay.addEventListener('click', () => closeVideoOverlay(overlay));
}

function closeVideoOverlay(overlay) {
  overlay.classList.add('closing');
  overlay.addEventListener('animationend', () => overlay.remove());
}

async function fetchVideos(maxResults = 10) {
  const url = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=${maxResults}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (!data.items) throw new Error('No videos found or quota exceeded.');
    return data.items.filter(item => item.id.videoId);
  } catch (error) {
    console.error('YouTube API error:', error);
    return [];
  }
}

async function loadHomeVideos() {
  const videos = await fetchVideos(6);
  const container = document.getElementById('homeVideos');
  container.innerHTML = '';
  videos.forEach(video => container.appendChild(createVideoCard(video)));
}

async function loadAllVideos() {
  const videos = await fetchVideos(100);
  const container = document.getElementById('allVideosList');
  container.innerHTML = '';
  videos.forEach(video => container.appendChild(createVideoCard(video)));
}

async function loadLatestVideo() {
  const videos = await fetchVideos(1);
  const container = document.getElementById('latestVideoContainer');
  container.innerHTML = '';
  if (videos.length > 0) {
    const vid = videos[0];
    container.innerHTML = `
      <iframe src="https://www.youtube.com/embed/${vid.id.videoId}" frameborder="0" allowfullscreen style="width:100%;height:450px;border-radius:8px;"></iframe>
      <h2>${vid.snippet.title}</h2>
      <p>${vid.snippet.description}</p>
      <button id="likeSubscribeBtn">Like & Subscribe</button>
    `;
    document.getElementById('likeSubscribeBtn').addEventListener('click', () => {
      alert('Please like and subscribe on YouTube. Thanks!');
    });
  } else {
    container.textContent = 'No videos found.';
  }
}

function init() {
  loadHomeVideos();
  loadLatestVideo();
  loadAllVideos();
}

window.onload = init;
