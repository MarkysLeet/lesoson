const body = document.body;
const modeToggle = document.getElementById("modeToggle");
const tabs = document.querySelectorAll(".menu-item");
const tabContents = document.querySelectorAll(".tab-content");
const switchOptions = document.querySelectorAll(".switch-option");
const gameCards = document.querySelectorAll(".game-card");
const tickerTrack = document.getElementById("tickerTrack");

modeToggle?.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  body.classList.toggle("light-mode");
  const isDark = body.classList.contains("dark-mode");
  modeToggle.querySelector(".toggle-icon").textContent = isDark ? "☀️" : "🌙";
});

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = tab.dataset.tab;
    tabs.forEach((btn) => btn.classList.remove("active"));
    tabContents.forEach((content) => content.classList.remove("active"));
    tab.classList.add("active");
    document.getElementById(target)?.classList.add("active");
  });
});

switchOptions.forEach((option) => {
  option.addEventListener("click", () => {
    const category = option.dataset.category;
    switchOptions.forEach((btn) => btn.classList.remove("active"));
    option.classList.add("active");
    gameCards.forEach((card) => {
      if (category === "online") {
        card.style.display = card.classList.contains("online") ? "block" : "none";
      } else {
        card.style.display = card.classList.contains("offline") ? "block" : "none";
      }
    });
  });
});

document.querySelector(".switch-option.active")?.click();

const feedMessages = [
  "🎉 Игрок LuckyFox выиграл 1200₽ в Fruit Spin!",
  "🏅 User_234 сделал ставку 500₽ в Рулетке!",
  "💎 DiamondKing выиграл 3200₽ в Blackjack Live!",
  "🔥 NeoQueen сорвала джекпот 3 400₽ в Turbo Poker!",
  "⚡ Player_81 активировал бонус миссий!",
  "🎯 User_Mars выполнил миссию 'Сделай 3 ставки'",
];

function appendTickerMessage() {
  if (!tickerTrack) return;
  const span = document.createElement("span");
  span.textContent = feedMessages[Math.floor(Math.random() * feedMessages.length)];
  span.classList.add("ticker-fade-in");
  tickerTrack.appendChild(span);
  if (tickerTrack.children.length > 12) {
    tickerTrack.removeChild(tickerTrack.firstElementChild);
  }
}

setInterval(appendTickerMessage, 6500);

const fakeBetElements = document.querySelectorAll(".fake-bets span");
fakeBetElements.forEach((bet, index) => {
  bet.style.animationDelay = `${index * 1.2}s`;
});
