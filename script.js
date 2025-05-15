const API_KEY = "AIzaSyBxjceYQcKUaSwU12QLeu6meNmuIBunMng";
const CHANNEL_ID = "UCoXzWPTne8dHYrftHpdIopw";
const videoGrid = document.getElementById("video-grid");

async function fetchVideos() {
  try {
    const res = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet&type=video&maxResults=12`);
    const data = await res.json();
    videoGrid.innerHTML = "";
    data.items.forEach(item => {
      const video = document.createElement("div");
      video.className = "video-item";
      video.innerHTML = `
        <a href="https://www.youtube.com/watch?v=${item.id.videoId}" target="_blank">
          <img src="${item.snippet.thumbnails.medium.url}" alt="${item.snippet.title}">
          <p>${item.snippet.title}</p>
        </a>
      `;
      videoGrid.appendChild(video);
    });
  } catch (err) {
    videoGrid.innerHTML = "<p>Error loading videos. Please try again later.</p>";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  fetchVideos();
  document.getElementById("mode-toggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
});

function showTab(id) {
  document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  if (id === "videos") fetchVideos();
}

document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Message sent (simulation).');
});
