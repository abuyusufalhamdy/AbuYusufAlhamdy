const apiKey = 'AIzaSyBxjceYQcKUaSwU12QLeu6meNmuIBunMng';
const channelId = 'UCoXzWPTne8dHYrftHpdIopw';

async function fetchVideos(maxVideos = 300) {
  const videosList = document.getElementById('videos-list');
  videosList.innerHTML = 'Loading videos...';

  let allVideos = [];
  let nextPageToken = '';
  const maxResultsPerPage = 50;

  try {
    while (allVideos.length < maxVideos) {
      const remaining = maxVideos - allVideos.length;
      const maxResults = remaining > maxResultsPerPage ? maxResultsPerPage : remaining;

      const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${maxResults}&pageToken=${nextPageToken}`;

      const response = await fetch(url);
      const data = await response.json();

      if (data.error) {
        videosList.innerHTML = `<p>Error fetching videos: ${data.error.message}</p>`;
        return;
      }

      const videoItems = data.items.filter(item => item.id.kind === 'youtube#video');
      allVideos = allVideos.concat(videoItems);

      if (!data.nextPageToken) break;
      nextPageToken = data.nextPageToken;
    }

    if (allVideos.length === 0) {
      videosList.innerHTML = '<p>No videos found.</p>';
      return;
    }

    renderVideos(allVideos);

    // Setup search
    const searchInput = document.getElementById('video-search');
    searchInput.oninput = () => {
      const query = searchInput.value.toLowerCase();
      const filtered = allVideos.filter(v => v.snippet.title.toLowerCase().includes(query));
      renderVideos(filtered);
    };

  } catch (error) {
    videosList.innerHTML = `<p>Failed to load videos. ${error.message}</p>`;
  }
}

function renderVideos(videos) {
  const videosList = document.getElementById('videos-list');
  videosList.innerHTML = '';
  videos.forEach(video => {
    const videoId = video.id.videoId;
    const title = video.snippet.title;
    const videoElement = document.createElement('div');
    videoElement.className = 'video-item';
    videoElement.innerHTML = `
      <iframe src="https://www.youtube.com/embed/${videoId}" allowfullscreen loading="lazy"></iframe>
      <div class="title">${title}</div>
    `;
    videosList.appendChild(videoElement);
  });
}
