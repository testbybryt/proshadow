// Example animation
document.querySelectorAll(".app-card").forEach((card) => {
  card.addEventListener("mouseover", () => {
    card.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.2)";
  });
  card.addEventListener("mouseout", () => {
    card.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
  });
});
