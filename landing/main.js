// Scroll reveal and the countdown to the next 08:00 phrase.
document.documentElement.classList.add('js');

const items = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      }
    },
    { rootMargin: '0px 0px -8% 0px' },
  );
  items.forEach((el) => io.observe(el));
} else {
  items.forEach((el) => el.classList.add('is-in'));
}

const out = document.getElementById('countdown');
const pad = (n) => String(n).padStart(2, '0');
function tick() {
  const now = new Date();
  const next = new Date(now);
  next.setHours(8, 0, 0, 0);
  if (now.getHours() >= 8) next.setDate(next.getDate() + 1);
  const ms = next - now;
  out.textContent = `${pad(Math.floor(ms / 3.6e6))}:${pad(Math.floor((ms % 3.6e6) / 6e4))}:${pad(Math.floor((ms % 6e4) / 1000))}`;
}
if (out) {
  tick();
  setInterval(tick, 1000);
}
