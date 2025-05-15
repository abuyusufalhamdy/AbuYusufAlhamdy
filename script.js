<script>
  const apiKey = 'AIzaSyBxjceYQcKUaSwU12QLeu6meNmuIBunMng';
  const channelId = 'UCoXzWPTne8dHYrftHpdIopw';
  const maxResults = 6;

  async function fetchLatestVideos() {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${maxResults}`
      );
      const data = await response.json();

      const videoListDiv = document.getElementById('videoList');
      videoListDiv.innerHTML = '';

      if (data.items && data.items.length > 0) {
        data.items.forEach(item => {
          if (item.id.kind === 'youtube#video') {
            const videoId = item.id.videoId;
            const iframe = document.createElement('iframe');
            iframe.width = '100%';
            iframe.height = '315';
            iframe.src = `https://www.youtube.com/embed/${videoId}`;
            iframe.title = item.snippet.title;
            iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
            iframe.allowFullscreen = true;
            iframe.style.marginBottom = '20px';
            videoListDiv.appendChild(iframe);
          }
        });
      } else {
        videoListDiv.innerHTML = '<p>No videos found for this channel.</p>';
      }
    } catch (error) {
      console.error('Error fetching videos:', error);
      document.getElementById('videoList').innerHTML = '<p>Error loading videos. Please try again later.</p>';
    }
  }

  window.onload = fetchLatestVideos;
</script>
