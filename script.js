function goYes() {
  window.location.href = "yes.html";
}

function moveNo() {
  const noBtn = document.getElementById("noBtn");
  if (!noBtn) return;

  let x = Math.random() * (window.innerWidth - 120);
  let y = Math.random() * (window.innerHeight - 60);

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}

// ❤️ HEART SHOWER (WORKS ON BOTH PAGES)
const hearts = document.querySelector(".hearts");

if (hearts) {
  for (let i = 0; i < 35; i++) {
    const span = document.createElement("span");
    span.innerText = "💖";
    span.style.left = Math.random() * 100 + "vw";
    span.style.animationDuration = 4 + Math.random() * 4 + "s";
    hearts.appendChild(span);
  }
}
