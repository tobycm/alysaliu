
let hidden = false;

const card = document.getElementsByClassName("card").item(0)

console.log(card)

document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('powerBtn');
    if (!btn) return;
  
    btn.addEventListener('click', () => {
      hidden = !hidden;

      card.style.opacity = hidden ? 0.1 : 1;

      btn.textContent = hidden ? 'Show' : "Hide"
    });
  });
  
