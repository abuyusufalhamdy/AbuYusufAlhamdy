const apiKey = "AIzaSyBxjceYQcKUaSwU12QLeu6meNmuIBunMng";
const channelId = "UCoXzWPTne8dHYrftHpdIopw";

fetch(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=50`)
  .then(response => response.json())
  .then(data => {
    const videoContainer = document.getElementById("video-list");
    data.items.forEach(item => {
      if (item.id.kind === "youtube#video") {
        const videoId = item.id.videoId;
        const videoElement = document.createElement("div");
        videoElement.classList.add("video-item");
        videoElement.innerHTML = `
          <iframe 
            src="https://www.youtube.com/embed/${videoId}" 
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <p class="video-title">${item.snippet.title}</p>
        `;
        videoContainer.appendChild(videoElement);
      }
    });
  })
  .catch(err => {
    console.error("YouTube API Error:", err);
    document.getElementById("video-list").innerHTML = "<p>Failed to load videos.</p>";
  });
