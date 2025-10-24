const body = document.body;
const modeToggle = document.getElementById("modeToggle");
const tabs = document.querySelectorAll(".menu-item");
const tabContents = document.querySelectorAll(".tab-content");
const switchOptions = document.querySelectorAll(".switch-option");
const gameCards = document.querySelectorAll(".game-card");
const tickerTrack = document.getElementById("tickerTrack");
const navLinks = document.querySelectorAll(".nav-link");
const pageSections = document.querySelectorAll("[data-page]");
const authForm = document.querySelector(".auth-form");
const userControls = document.getElementById("userControls");
const dashboardLink = document.getElementById("dashboardLink");
const balanceButton = document.getElementById("balanceButton");
const balanceDropdown = document.getElementById("balanceDropdown");
const balanceMenu = document.querySelector(".balance-menu");
const balanceFeedback = document.getElementById("balanceFeedback");
const balanceAmount = document.getElementById("balanceAmount");
const dashboardBalanceAmount = document.querySelector(".balance-amount");
const welcomeName = document.querySelector(".welcome .accent");
const gameLaunchButtons = document.querySelectorAll(".game-launch");
const gameModal = document.getElementById("gameModal");
const closeGameModal = document.getElementById("closeGameModal");
const gameModalBody = document.getElementById("gameModalBody");

const appState = {
  isAuthenticated: false,
  playerName: "NeoPlayer",
  balance: 25400,
};

const numberFormatter = new Intl.NumberFormat("ru-RU");
let feedbackTimeout;

function formatCurrency(value) {
  return `${numberFormatter.format(value)}₽`;
}

function updateBalanceDisplays() {
  const formatted = formatCurrency(appState.balance);
  if (balanceAmount) {
    balanceAmount.textContent = formatted;
  }
  if (dashboardBalanceAmount) {
    dashboardBalanceAmount.textContent = formatted;
  }
}

function updateWelcome() {
  if (welcomeName) {
    welcomeName.textContent = appState.playerName;
  }
}

function showFeedback(message) {
  if (!balanceFeedback) return;
  balanceFeedback.textContent = message;
  balanceFeedback.classList.remove("hidden");
  clearTimeout(feedbackTimeout);
  feedbackTimeout = setTimeout(() => {
    balanceFeedback.classList.add("hidden");
  }, 3200);
}

function setActiveNav(target) {
  navLinks.forEach((link) => {
    const matches = target && link.dataset.target === target && !link.classList.contains("hidden");
    link.classList.toggle("active", Boolean(matches));
    if (!target) {
      link.classList.remove("active");
    }
  });
}

function updateNavState() {
  navLinks.forEach((link) => {
    if (link.dataset.target === "auth") {
      link.classList.toggle("hidden", appState.isAuthenticated);
    }
  });
}

function showPage(target) {
  const section = Array.from(pageSections).find((item) => item.dataset.page === target);
  if (!section) return;

  const requiresAuth = section.dataset.requiresAuth === "true";
  if (requiresAuth && !appState.isAuthenticated) {
    showPage("auth");
    setActiveNav("auth");
    return;
  }

  pageSections.forEach((item) => {
    item.classList.toggle("hidden", item !== section);
  });

  if (target === "dashboard") {
    setActiveNav(null);
  } else {
    setActiveNav(target);
  }
}

function hideDropdown() {
  if (!balanceDropdown || !balanceButton) return;
  balanceDropdown.classList.add("hidden");
  balanceButton.setAttribute("aria-expanded", "false");
}

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

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const target = link.dataset.target;
    showPage(target);
  });
});

showPage("home");

authForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(authForm);
  const loginValue = formData.get("login");
  const username =
    (typeof loginValue === "string" && loginValue.trim()) || appState.playerName;

  appState.isAuthenticated = true;
  appState.playerName = username;
  updateWelcome();
  updateBalanceDisplays();
  userControls?.classList.remove("hidden");
  updateNavState();
  showFeedback(`Добро пожаловать, ${appState.playerName}!`);
  showPage("dashboard");
  hideDropdown();
  authForm.reset();
});

balanceButton?.addEventListener("click", (event) => {
  event.stopPropagation();
  if (!balanceDropdown) return;
  const isHidden = balanceDropdown.classList.toggle("hidden");
  balanceButton.setAttribute("aria-expanded", (!isHidden).toString());
});

document.addEventListener("click", (event) => {
  if (balanceMenu && !balanceMenu.contains(event.target)) {
    hideDropdown();
  }
});

const dropdownActions = document.querySelectorAll(".dropdown-action");
dropdownActions.forEach((action) => {
  action.addEventListener("click", (event) => {
    event.stopPropagation();
    const type = action.dataset.action;

    if (!appState.isAuthenticated) {
      showFeedback("Авторизуйтесь, чтобы управлять балансом.");
      hideDropdown();
      return;
    }

    if (type === "deposit") {
      appState.balance += 1000;
      showFeedback("Баланс пополнен на 1 000₽");
    } else if (type === "withdraw") {
      if (appState.balance < 1000) {
        showFeedback("Недостаточно средств для вывода.");
        hideDropdown();
        return;
      }
      appState.balance -= 1000;
      showFeedback("Вы вывели 1 000₽");
    }

    updateBalanceDisplays();
    hideDropdown();
  });
});

dashboardLink?.addEventListener("click", () => {
  if (!appState.isAuthenticated) {
    showPage("auth");
    setActiveNav("auth");
    return;
  }
  showPage("dashboard");
});

function closeGameModalWindow() {
  if (!gameModal) return;
  gameModal.classList.add("hidden");
  if (gameModalBody) {
    gameModalBody.innerHTML = "";
  }
}

closeGameModal?.addEventListener("click", closeGameModalWindow);

gameModal?.addEventListener("click", (event) => {
  if (event.target === gameModal) {
    closeGameModalWindow();
  }
});

function renderRouletteGame() {
  if (!gameModalBody) return;
  gameModalBody.innerHTML = `
    <h2>Онлайн Рулетка</h2>
    <p class="game-description">Запускайте колесо и следите за результатом в режиме реального времени.</p>
    <div class="roulette-panel">
      <div class="roulette-number" id="rouletteNumber">-</div>
      <p class="roulette-status" id="rouletteStatus">Ставки принимаются до запуска.</p>
    </div>
    <button class="btn primary" id="rouletteStart">Запустить раунд</button>
  `;

  const numberDisplay = document.getElementById("rouletteNumber");
  const statusDisplay = document.getElementById("rouletteStatus");
  const startButton = document.getElementById("rouletteStart");

  let spinning = false;
  startButton?.addEventListener("click", () => {
    if (spinning) return;
    spinning = true;
    if (statusDisplay) {
      statusDisplay.textContent = "Колесо вращается...";
    }
    startButton.disabled = true;
    let ticks = 0;
    const interval = setInterval(() => {
      const interim = Math.floor(Math.random() * 37);
      if (numberDisplay) {
        numberDisplay.textContent = interim.toString();
      }
      ticks += 1;
      if (ticks >= 18) {
        clearInterval(interval);
        const result = Math.floor(Math.random() * 37);
        if (numberDisplay) {
          numberDisplay.textContent = result.toString();
        }
        if (statusDisplay) {
          statusDisplay.textContent = result === 0 ? "Выпало зеро!" : `Выпало число ${result}`;
        }
        startButton.disabled = false;
        spinning = false;
      }
    }, 120);
  });
}

function renderBlackjackGame() {
  if (!gameModalBody) return;
  gameModalBody.innerHTML = `
    <h2>Оффлайн Блэкджэк</h2>
    <p class="game-description">Сразитесь с дилером: наберите 21 очко или меньше, но больше, чем у дилера.</p>
    <div class="blackjack-table">
      <div class="hand">
        <h3>Дилер</h3>
        <div class="cards" id="dealerCards"></div>
        <p class="score">Очки: <span id="dealerScore">0</span></p>
      </div>
      <div class="hand">
        <h3>Вы</h3>
        <div class="cards" id="playerCards"></div>
        <p class="score">Очки: <span id="playerScore">0</span></p>
      </div>
    </div>
    <div class="blackjack-actions">
      <button class="btn secondary" id="blackjackHit">Взять карту</button>
      <button class="btn outline" id="blackjackStand">Хватит</button>
      <button class="btn primary hidden" id="blackjackRestart">Новая игра</button>
    </div>
    <p class="blackjack-status" id="blackjackStatus">Сделайте ход.</p>
  `;

  const dealerCardsEl = document.getElementById("dealerCards");
  const playerCardsEl = document.getElementById("playerCards");
  const dealerScoreEl = document.getElementById("dealerScore");
  const playerScoreEl = document.getElementById("playerScore");
  const statusEl = document.getElementById("blackjackStatus");
  const hitButton = document.getElementById("blackjackHit");
  const standButton = document.getElementById("blackjackStand");
  const restartButton = document.getElementById("blackjackRestart");

  const deckValues = [
    "A",
    "K",
    "Q",
    "J",
    "10",
    "9",
    "8",
    "7",
    "6",
    "5",
    "4",
    "3",
    "2",
  ];

  let deck = [];
  let dealerCards = [];
  let playerCards = [];

  function createDeck() {
    const newDeck = [];
    deckValues.forEach((value) => {
      for (let i = 0; i < 4; i += 1) {
        newDeck.push(value);
      }
    });
    return newDeck.sort(() => Math.random() - 0.5);
  }

  function drawCard() {
    if (deck.length === 0) {
      deck = createDeck();
    }
    return deck.pop();
  }

  function calculateScore(cards) {
    let total = 0;
    let aces = 0;
    cards.forEach((card) => {
      if (card === "A") {
        total += 11;
        aces += 1;
      } else if (["K", "Q", "J"].includes(card)) {
        total += 10;
      } else {
        total += Number(card);
      }
    });

    while (total > 21 && aces > 0) {
      total -= 10;
      aces -= 1;
    }

    return total;
  }

  function renderHands() {
    if (dealerCardsEl) {
      dealerCardsEl.innerHTML = dealerCards
        .map((card) => `<span class="card">${card}</span>`)
        .join("");
    }
    if (playerCardsEl) {
      playerCardsEl.innerHTML = playerCards
        .map((card) => `<span class="card">${card}</span>`)
        .join("");
    }
    if (dealerScoreEl) {
      dealerScoreEl.textContent = calculateScore(dealerCards).toString();
    }
    if (playerScoreEl) {
      playerScoreEl.textContent = calculateScore(playerCards).toString();
    }
  }

  function finishRound(message) {
    if (statusEl) {
      statusEl.textContent = message;
    }
    if (hitButton) {
      hitButton.disabled = true;
    }
    if (standButton) {
      standButton.disabled = true;
    }
    restartButton?.classList.remove("hidden");
  }

  function startRound() {
    deck = createDeck();
    dealerCards = [];
    playerCards = [];
    restartButton?.classList.add("hidden");
    if (statusEl) {
      statusEl.textContent = "Сделайте ход.";
    }
    if (hitButton) {
      hitButton.disabled = false;
    }
    if (standButton) {
      standButton.disabled = false;
    }
    playerCards.push(drawCard());
    dealerCards.push(drawCard());
    playerCards.push(drawCard());
    dealerCards.push(drawCard());
    renderHands();

    if (calculateScore(playerCards) === 21) {
      finishRound("Блэкджэк! Вы победили!");
    }
  }

  hitButton?.addEventListener("click", () => {
    playerCards.push(drawCard());
    renderHands();
    const playerScore = calculateScore(playerCards);
    if (playerScore > 21) {
      finishRound("Перебор! Вы проиграли.");
    }
  });

  standButton?.addEventListener("click", () => {
    if (hitButton) {
      hitButton.disabled = true;
    }
    if (standButton) {
      standButton.disabled = true;
    }

    let dealerScore = calculateScore(dealerCards);
    while (dealerScore < 17) {
      dealerCards.push(drawCard());
      dealerScore = calculateScore(dealerCards);
      renderHands();
    }

    const playerScore = calculateScore(playerCards);
    dealerScore = calculateScore(dealerCards);

    if (dealerScore > 21) {
      finishRound("Дилер перебрал. Победа!");
    } else if (dealerScore === playerScore) {
      finishRound("Ничья! Ставка возвращена.");
    } else if (playerScore > dealerScore) {
      finishRound("Вы победили!");
    } else {
      finishRound("Победил дилер.");
    }
  });

  restartButton?.addEventListener("click", () => {
    startRound();
  });

  startRound();
}

function openGame(gameKey) {
  if (!gameModal || !gameModalBody) return;
  gameModal.classList.remove("hidden");

  if (gameKey === "roulette") {
    renderRouletteGame();
  } else if (gameKey === "blackjack") {
    renderBlackjackGame();
  }
}

gameLaunchButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest(".game-card");
    const gameKey = card?.dataset.game;
    if (gameKey) {
      openGame(gameKey);
    }
  });
});

const feedMessages = [
  "🎉 Игрок LuckyFox выиграл 1200₽ в Fruit Spin!",
  "🏅 User_234 сделал ставку 500₽ в Рулетке!",
  "💎 DiamondKing выиграл 3200₽ в блэкджэке!",
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

updateBalanceDisplays();
updateWelcome();
updateNavState();

document.querySelector(".switch-option.active")?.click();
