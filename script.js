document.getElementById('mode-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
function showTab(id) {
  document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Message sent (simulation).');
});
// Video fetch simulation placeholder
document.getElementById('videos')?.addEventListener('click', () => {
  // You’d use fetch with YouTube API here
});
