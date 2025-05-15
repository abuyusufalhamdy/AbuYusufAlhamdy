const YT_API_BASE = 'https://www.googleapis.com/youtube/v3';

let currentPageToken = '';
let nextPageToken = '';
let prevPageToken = '';

function createVideoItem(video, openModalCallback) {
  const container = document.createElement('div');
  container.className = 'video-item';

  const thumbnail = document.createElement('img');
  thumbnail.className = 'video-thumbnail';
  thumbnail.src = video.snippet.thumbnails.medium.url;
  thumbnail.alt = video.snippet.title;
  container.appendChild(thumbnail);

  const title = document.createElement('div');
  title.className = 'video-title';
  title.textContent = video.snippet.title;
  container.appendChild(title);

  container.addEventListener('click', () => {
    openModalCallback(video.id.videoId);
  });

  return container;
}

function openVideoModal(videoId) {
  const modal = document.getElementById('videoModal');
  const iframe = modal.querySelector('iframe');
  iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  modal.classList.add('active');
}

function closeVideoModal() {
  const modal = document.getElementById('videoModal');
  const iframe = modal.querySelector('iframe');
  // Animation zoomOut
  iframe.style.animation = 'zoomOut 0.3s ease forwards';
  setTimeout(() => {
    iframe.src = '';
    iframe.style.animation = 'zoomIn 0.3s ease forwards';
    modal.classList.remove('active');
  }, 300);
}

async function fetchVideos(apiKey, channelId, maxResults = 6, pageToken = '') {
  const url = new URL(`${YT_API_BASE}/search`);
  url.searchParams.set('key', apiKey);
  url.searchParams.set('channelId', channelId);
  url.searchParams.set('part', 'snippet,id');
  url.searchParams.set('order', 'date');
  url.searchParams.set('maxResults', maxResults);
  if (pageToken) url.searchParams.set('pageToken', pageToken);
  url.searchParams.set('type', 'video');

  const response = await fetch(url.toString());
  if (!response.ok) throw new Error(`API error: ${response.statusText}`);

  return response.json();
}

function updatePaginationButtons(pageTokens, paginationControls) {
  const { prevBtnId, nextBtnId, pageInfoId } = paginationControls;
  const prevBtn = document.getElementById(prevBtnId);
  const nextBtn = document.getElementById(nextBtnId);
  const pageInfo = document.getElementById(pageInfoId);

  prevBtn.disabled = !pageTokens.prevPageToken;
  nextBtn.disabled = !pageTokens.nextPageToken;
  pageInfo.textContent = `Page`;

  prevBtn.onclick = () => {
    if (pageTokens.prevPageToken) {
      currentPageToken = pageTokens.prevPageToken;
      loadVideos();
    }
  };

  nextBtn.onclick = () => {
    if (pageTokens.nextPageToken) {
      currentPageToken = pageTokens.nextPageToken;
      loadVideos();
    }
  };
}

function createVideoModal() {
  if (document.getElementById('videoModal')) return; // already exists
  const modal = document.createElement('div');
  modal.id = 'videoModal';

  modal.innerHTML = `
    <div class="close-btn" id="modalClose">&times;</div>
    <iframe frameborder="0" allowfullscreen allow="autoplay"></iframe>
  `;

  modal.addEventListener('click', (e) => {
    if (e.target.id === 'videoModal' || e.target.id === 'modalClose') {
      closeVideoModal();
    }
  });

  document.body.appendChild(modal);
}

async function initYoutubePage({
  apiKey,
  channelId,
  maxResults = 6,
  totalMaxResults = null,
  targetElement
