const body = document.body;
const modeToggle = document.getElementById("modeToggle");
const tabs = document.querySelectorAll(".menu-item");
const tabContents = document.querySelectorAll(".tab-content");
const switchOptions = document.querySelectorAll(".switch-option");
const gameCards = document.querySelectorAll(".game-card");
const gameLaunchButtons = document.querySelectorAll(".game-launch");
const tickerTrack = document.getElementById("tickerTrack");
const liveTicker = document.querySelector(".live-ticker");
const liveTickerToggle = document.getElementById("liveTickerToggle");
const navLinks = document.querySelectorAll(".nav-link");
const pageSections = document.querySelectorAll("[data-page]");
const userControls = document.getElementById("userControls");
const dashboardLink = document.getElementById("dashboardLink");
const balanceButton = document.getElementById("balanceButton");
const balanceDropdown = document.getElementById("balanceDropdown");
const balanceMenu = document.querySelector(".balance-menu");
const toastContainer = document.getElementById("toastContainer");
const balanceAmount = document.getElementById("balanceAmount");
const dashboardBalanceAmount = document.querySelector(".balance-amount");
const welcomeName = document.querySelector(".welcome .accent");
const profileInitials = document.getElementById("profileInitials");
const profileName = document.getElementById("profileName");
const profileLevel = document.getElementById("profileLevel");
const profileExperience = document.getElementById("profileExperience");
const profileProgress = document.getElementById("profileProgress");
const profileWins = document.getElementById("profileWins");
const profileFavourite = document.getElementById("profileFavourite");
const profileVip = document.getElementById("profileVip");
const profileVisit = document.getElementById("profileVisit");
const profileStreak = document.getElementById("profileStreak");
const profileEditForm = document.getElementById("profileEditForm");
const profileEditFeedback = document.getElementById("profileEditFeedback");
const profileEditNickname = document.getElementById("profileEditNickname");
const securityEmailValue = document.getElementById("securityEmailValue");
const gameHistoryList = document.getElementById("gameHistoryList");
const historyRefreshButton = document.getElementById("historyRefreshButton");
const changePasswordButton = document.getElementById("changePasswordButton");
const changeEmailButton = document.getElementById("changeEmailButton");
const passwordModal = document.getElementById("passwordModal");
const emailModal = document.getElementById("emailModal");
const passwordChangeForm = document.getElementById("passwordChangeForm");
const emailChangeForm = document.getElementById("emailChangeForm");
const passwordFeedback = document.getElementById("passwordFeedback");
const emailFeedback = document.getElementById("emailFeedback");
const modalCloseButtons = document.querySelectorAll("[data-close-modal]");

const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const loginFeedback = document.getElementById("loginFeedback");
const registerFeedback = document.getElementById("registerFeedback");
const authSwitchButtons = document.querySelectorAll(".auth-switch");
const logoutButton = document.getElementById("logoutButton");

const rouletteForm = document.getElementById("rouletteForm");
const rouletteNumber = document.getElementById("rouletteNumber");
const rouletteStatus = document.getElementById("rouletteStatus");
const rouletteFeedback = document.getElementById("rouletteFeedback");
const rouletteStartButton = document.getElementById("rouletteStart");
const rouletteWheel = document.getElementById("rouletteWheel");
const rouletteStakeInput = document.getElementById("rouletteStake");
const rouletteCountdown = document.getElementById("rouletteCountdown");
const roulettePhaseLabel = document.getElementById("roulettePhase");
const rouletteColumns = {
  red: document.getElementById("rouletteColumnRed"),
  black: document.getElementById("rouletteColumnBlack"),
  green: document.getElementById("rouletteColumnGreen"),
};
const rouletteHistoryTrack = document.getElementById("rouletteHistory");
const roulettePointer = document.getElementById("roulettePointer");

const rouletteWrapper = document.querySelector(".roulette-wrapper");
const betQuickButtons = document.querySelectorAll(".bet-quick-button");

const blackjackForm = document.getElementById("blackjackForm");
const blackjackStakeInput = document.getElementById("blackjackStakeInput");
const blackjackStakeDisplay = document.getElementById("blackjackStakeDisplay");
const blackjackBetTotalDisplay = document.getElementById("blackjackBetTotal");
const blackjackBalanceDisplay = document.getElementById("blackjackBalance");
const blackjackStatus = document.getElementById("blackjackStatus");
const blackjackFeedback = document.getElementById("blackjackFeedback");
const blackjackHitButton = document.getElementById("blackjackHit");
const blackjackStandButton = document.getElementById("blackjackStand");
const blackjackDoubleButton = document.getElementById("blackjackDouble");
const blackjackSplitButton = document.getElementById("blackjackSplit");
const blackjackDealButton = document.getElementById("blackjackDeal");
const blackjackStakeButtons = document.querySelectorAll(".chip-control");
const blackjackDealerCardsEl = document.getElementById("blackjackDealerCards");
const blackjackDealerTotalEl = document.getElementById("blackjackDealerTotal");
const blackjackPlayerHandsEl = document.getElementById("blackjackPlayerHands");
const blackjackLiveToggle = document.getElementById("blackjackLiveToggle");
const blackjackLiveFeed = document.getElementById("blackjackLiveFeed");
const blackjackLiveList = document.getElementById("blackjackLiveList");
const backButtons = document.querySelectorAll(".back-to-lobby");
const brandButton = document.querySelector(".brand[data-target='home']");

const ACCOUNTS_KEY = "neoCasinoAccounts";
const CURRENT_USER_KEY = "neoCasinoCurrentUser";
const ROULETTE_BET_DURATION = 18000;
const ROULETTE_SPIN_DURATION = 6000;
const ROULETTE_HISTORY_LIMIT = 12;
const GAME_HISTORY_LIMIT = 20;
const ROULETTE_SEGMENT_ANGLE = 360 / 37;
const ROULETTE_HALF_SEGMENT = ROULETTE_SEGMENT_ANGLE / 2;
const ROULETTE_WHEEL_ORDER = [
  0,
  32,
  15,
  19,
  4,
  21,
  2,
  25,
  17,
  34,
  6,
  27,
  13,
  36,
  11,
  30,
  8,
  23,
  10,
  5,
  24,
  16,
  33,
  1,
  20,
  14,
  31,
  9,
  22,
  18,
  29,
  7,
  28,
  12,
  35,
  3,
  26,
];
const ROULETTE_NUMBER_INDEX = ROULETTE_WHEEL_ORDER.reduce((map, number, index) => {
  map[number] = index;
  return map;
}, {});
const ROULETTE_BET_SECONDS = Math.round(ROULETTE_BET_DURATION / 1000);
const numberFormatter = new Intl.NumberFormat("ru-RU", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});
const usdFormatter = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});
const dateFormatter = new Intl.DateTimeFormat("ru-RU", {
  day: "2-digit",
  month: "long",
  hour: "2-digit",
  minute: "2-digit",
});

const redNumbers = new Set([
  1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36,
]);
const colorLabels = {
  red: "красное",
  black: "чёрное",
  green: "зелёное",
};

const resultLabels = {
  win: "Победа",
  lose: "Поражение",
  draw: "Ничья",
};

const fakeNames = [
  "LuckyFox",
  "NeoQueen",
  "DiamondKing",
  "Player_81",
  "User_Mars",
  "RapidAce",
  "MoonGambler",
  "StarRunner",
  "NovaLight",
  "CharmingLuck",
];

const BLACKJACK_RANKS = ["A", "K", "Q", "J", "10", "9", "8", "7", "6", "5", "4", "3", "2"];
const BLACKJACK_SUITS = ["hearts", "diamonds", "clubs", "spades"];
const BLACKJACK_FACE_RANKS = new Set(["J", "Q", "K"]);
const BLACKJACK_PIP_LAYOUTS = {
  A: ["middle-center"],
  "2": ["top-center", "bottom-center"],
  "3": ["top-center", "middle-center", "bottom-center"],
  "4": ["top-left", "top-right", "bottom-left", "bottom-right"],
  "5": ["top-left", "top-right", "middle-center", "bottom-left", "bottom-right"],
  "6": [
    "top-left",
    "top-right",
    "middle-left",
    "middle-right",
    "bottom-left",
    "bottom-right",
  ],
  "7": [
    "top-left",
    "top-right",
    "middle-left",
    "middle-right",
    "bottom-left",
    "bottom-right",
    "top-center",
  ],
  "8": [
    "top-left",
    "top-right",
    "middle-left",
    "middle-right",
    "bottom-left",
    "bottom-right",
    "top-center",
    "bottom-center",
  ],
  "9": [
    "top-left",
    "top-right",
    "middle-left",
    "middle-right",
    "bottom-left",
    "bottom-right",
    "top-center",
    "bottom-center",
    "middle-center",
  ],
  "10": [
    "top-left",
    "top-right",
    "upper-left",
    "upper-right",
    "middle-left",
    "middle-right",
    "lower-left",
    "lower-right",
    "bottom-left",
    "bottom-right",
  ],
};
const BLACKJACK_MIN_BET = 0.1;
const BLACKJACK_STEP = 0.1;
const BLACKJACK_MAX_LIVE_ENTRIES = 10;

let roulettePhase = "idle";
let rouletteCycleActive = false;
let roulettePhaseEndsAt = 0;
let rouletteCountdownInterval = null;
let roulettePhaseTimeout = null;
let rouletteSpinTimeout = null;
let rouletteFakeTimeout = null;
let rouletteShuffleInterval = null;
let rouletteRotation = 0;
let roulettePlayerBet = null;
let rouletteHistory = [];
let blackjackDeck = [];
let blackjackDealerCards = [];
let blackjackHands = [];
let blackjackActiveHandIndex = 0;
let blackjackDealerRevealed = false;
let blackjackRoundActive = false;
let blackjackResolving = false;
let blackjackTotalStake = 0;
let blackjackLiveEnabled = false;
let blackjackLiveTimer = null;
let blackjackLiveEntries = [];
let blackjackHandCounter = 0;
const appState = {
  isAuthenticated: false,
  currentAccount: null,
  accounts: [],
  activeGame: null,
};

function loadAccounts() {
  try {
    const stored = localStorage.getItem(ACCOUNTS_KEY);
    if (!stored) return [];
    const parsed = JSON.parse(stored);
    if (!Array.isArray(parsed)) return [];
    return parsed.map((item) => {
      ensureAccountDefaults(item);
      return item;
    });
  } catch (error) {
    console.warn("Не удалось загрузить аккаунты", error);
    return [];
  }
}

function saveAccounts() {
  try {
    localStorage.setItem(ACCOUNTS_KEY, JSON.stringify(appState.accounts));
  } catch (error) {
    console.warn("Не удалось сохранить аккаунты", error);
  }
}

function persistCurrentUser() {
  if (appState.currentAccount) {
    localStorage.setItem(CURRENT_USER_KEY, appState.currentAccount.id);
  }
  saveAccounts();
}

function clearCurrentUser() {
  localStorage.removeItem(CURRENT_USER_KEY);
}

function roundCurrency(value) {
  if (!Number.isFinite(value)) return 0;
  return Math.round(value * 100) / 100;
}

function formatCurrency(value) {
  const normalized = roundCurrency(Number.isFinite(value) ? value : 0);
  return `${numberFormatter.format(normalized)}₽`;
}

function formatSignedAmount(value) {
  if (!Number.isFinite(value)) return formatCurrency(0);
  const rounded = roundCurrency(value);
  const absolute = numberFormatter.format(Math.abs(rounded));
  if (rounded > 0) return `+${absolute}₽`;
  if (rounded < 0) return `-${absolute}₽`;
  return `${absolute}₽`;
}

function formatUsd(value) {
  return `$${usdFormatter.format(roundCurrency(value))}`;
}

function getInitials(value) {
  if (!value) return "NP";
  const parts = value
    .toString()
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  if (parts.length === 0) return "NP";
  if (parts.length === 1) {
    return parts[0].slice(0, 2).toUpperCase();
  }
  return (parts[0][0] + parts[1][0]).toUpperCase();
}

function formatDateTime(value) {
  if (!value) return "—";
  try {
    return dateFormatter.format(new Date(value));
  } catch (error) {
    return "—";
  }
}

function ensureAccountDefaults(account) {
  if (!account || typeof account !== "object") return;
  if (typeof account.preferences !== "object" || account.preferences === null) {
    account.preferences = {};
  }
  if (typeof account.preferences.liveTickerEnabled !== "boolean") {
    account.preferences.liveTickerEnabled = true;
  }
  if (!Array.isArray(account.history)) {
    account.history = [];
  }
  if (typeof account.email !== "string") {
    account.email = "";
  }
  if (typeof account.nickname !== "string" || !account.nickname.trim()) {
    account.nickname = "Игрок";
  }
}

function generateAccountId() {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }
  return `acc-${Date.now()}-${Math.floor(Math.random() * 1_000_000)}`;
}

function hideFormFeedback(element) {
  if (!element) return;
  element.classList.add("hidden");
  element.classList.remove("success");
  element.textContent = "";
}

function showFormFeedback(element, message, isSuccess = false) {
  if (!element) return;
  element.textContent = message;
  element.classList.toggle("success", isSuccess);
  element.classList.toggle("hidden", !message);
}

function updateBalanceDisplays() {
  const balanceValue = appState.currentAccount?.balance ?? 0;
  if (balanceAmount) {
    balanceAmount.textContent = formatCurrency(balanceValue);
  }
  if (dashboardBalanceAmount) {
    dashboardBalanceAmount.textContent = formatCurrency(balanceValue);
  }
  updateBlackjackTotals();
}

function updateWelcome() {
  const name = appState.currentAccount?.nickname ?? "Гость";
  if (welcomeName) {
    welcomeName.textContent = name;
  }
}

function gainExperience(amount) {
  const account = appState.currentAccount;
  if (!account || !Number.isFinite(amount) || amount <= 0) return;
  const currentExperience = Number(account.experience ?? 0) + amount;
  let level = Number(account.level ?? 1);
  let experience = currentExperience;
  while (experience >= 100) {
    experience -= 100;
    level += 1;
  }
  account.experience = experience;
  account.level = level;
}

function updateProfile() {
  if (!profileName || !profileInitials) return;

  if (!appState.currentAccount) {
    profileName.textContent = "NeoPlayer";
    profileInitials.textContent = "NP";
    profileLevel.textContent = "Уровень 1";
    profileExperience.textContent = "Опыт 0/100";
    if (profileProgress) profileProgress.style.width = "0%";
    profileWins.textContent = "0";
    profileFavourite.textContent = "—";
    profileVip.textContent = "Новичок";
    profileVisit.textContent = "—";
    profileStreak.textContent = "0";
    if (profileEditNickname) profileEditNickname.value = "";
    if (securityEmailValue) securityEmailValue.textContent = "—";
    renderGameHistory(null);
    hideFormFeedback(profileEditFeedback);
    return;
  }

  const account = appState.currentAccount;
  profileName.textContent = account.nickname;
  profileInitials.textContent = getInitials(account.nickname);
  profileLevel.textContent = `Уровень ${account.level ?? 1}`;
  const experienceValue = Number(account.experience ?? 0);
  profileExperience.textContent = `Опыт ${numberFormatter.format(
    experienceValue
  )}/100`;
  if (profileProgress) {
    profileProgress.style.width = `${Math.min(100, experienceValue)}%`;
  }
  profileWins.textContent = numberFormatter.format(account.wins ?? 0);
  profileFavourite.textContent = account.favouriteGame ?? "—";
  profileVip.textContent = account.vip ?? "Новичок";
  profileVisit.textContent = formatDateTime(account.lastLogin);
  profileStreak.textContent = numberFormatter.format(account.streak ?? 0);
  if (profileEditNickname) profileEditNickname.value = account.nickname;
  if (securityEmailValue) {
    securityEmailValue.textContent = account.email ? account.email : "—";
  }
  renderGameHistory(account);
}

function getLiveTickerEnabled() {
  const account = appState.currentAccount;
  if (!account) return true;
  const { preferences } = account;
  if (!preferences) return true;
  return preferences.liveTickerEnabled !== false;
}

function setLiveTickerVisible(isVisible) {
  if (!liveTicker) return;
  liveTicker.classList.toggle("hidden", !isVisible);
  if (isVisible) {
    liveTicker.removeAttribute("aria-hidden");
  } else {
    liveTicker.setAttribute("aria-hidden", "true");
  }
  if (tickerTrack) {
    tickerTrack.style.animationPlayState = isVisible ? "running" : "paused";
  }
}

function updateLiveTickerUI() {
  const enabled = getLiveTickerEnabled();
  if (liveTickerToggle) {
    liveTickerToggle.checked = enabled;
  }
  setLiveTickerVisible(enabled);
}

function updateDashboardData() {
  updateWelcome();
  updateBalanceDisplays();
  updateProfile();
  updateLiveTickerUI();
}

function showFeedback(message) {
  if (!toastContainer) return;
  const toast = document.createElement("div");
  toast.className = "toast-message";
  toast.textContent = message;
  toastContainer.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 4000);
}

function handleLiveTickerToggleChange() {
  const isEnabled = Boolean(liveTickerToggle?.checked);
  if (!appState.currentAccount) {
    if (liveTickerToggle) liveTickerToggle.checked = true;
    setLiveTickerVisible(true);
    showFeedback("Авторизуйтесь, чтобы управлять живой лентой.");
    return;
  }
  ensureAccountDefaults(appState.currentAccount);
  appState.currentAccount.preferences.liveTickerEnabled = isEnabled;
  setLiveTickerVisible(isEnabled);
  persistCurrentUser();
  showFeedback(isEnabled ? "Живая лента включена." : "Живая лента скрыта.");
}

function setActiveNav(target) {
  navLinks.forEach((link) => {
    const matches = target && link.dataset.target === target;
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

function toggleAuthView(view) {
  if (!loginForm || !registerForm) return;
  const showLogin = view !== "register";
  loginForm.classList.toggle("hidden", !showLogin);
  registerForm.classList.toggle("hidden", showLogin);
  hideFormFeedback(loginFeedback);
  hideFormFeedback(registerFeedback);
}

function showPage(target) {
  const section = Array.from(pageSections).find(
    (item) => item.dataset.page === target
  );
  if (!section) return;

  const requiresAuth = section.dataset.requiresAuth === "true";
  if (requiresAuth && !appState.isAuthenticated) {
    toggleAuthView("login");
    showPage("auth");
    setActiveNav("auth");
    return;
  }

  pageSections.forEach((item) => {
    item.classList.toggle("hidden", item !== section);
  });

  if (target === "dashboard") {
    setActiveNav(null);
  } else if (target === "home" || target === "auth") {
    setActiveNav(target);
  } else {
    setActiveNav(null);
  }

  if (target === "roulette") {
    appState.activeGame = "roulette";
    startRouletteCycle();
  } else {
    if (appState.activeGame === "roulette") {
      stopRouletteCycle();
    }
    appState.activeGame = target === "blackjack" ? "blackjack" : null;
  }
}

function hideDropdown() {
  if (!balanceDropdown || !balanceButton) return;
  balanceDropdown.classList.add("hidden");
  balanceButton.setAttribute("aria-expanded", "false");
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomChoice(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function clearRouletteBoard() {
  Object.values(rouletteColumns).forEach((column) => {
    if (column) {
      column.innerHTML = "";
    }
  });
}

function appendRouletteBet({ name, stake, color, isPlayer = false }) {
  const column = rouletteColumns[color];
  if (!column) return;
  const item = document.createElement("li");
  item.className = "roulette-bet";
  if (isPlayer) {
    item.classList.add("player");
  }
  const nickname = document.createElement("span");
  nickname.textContent = name;
  const amount = document.createElement("span");
  amount.textContent = formatCurrency(stake);
  item.append(nickname, amount);
  column.appendChild(item);
  while (column.children.length > 6) {
    const first = column.firstElementChild;
    if (first?.classList.contains("player") && column.children.length > 1) {
      column.removeChild(first.nextElementSibling || first);
    } else if (first) {
      column.removeChild(first);
    } else {
      break;
    }
  }
}

function renderRouletteHistory() {
  if (!rouletteHistoryTrack) return;
  rouletteHistoryTrack.innerHTML = "";
  const fragment = document.createDocumentFragment();
  rouletteHistory.forEach((color, index) => {
    const node = document.createElement("span");
    node.className = `roulette-history-item ${color}`;
    const label = colorLabels[color] ?? color;
    node.textContent = label.charAt(0).toUpperCase();
    node.title = `Раунд ${index + 1}: ${label}`;
    node.setAttribute("aria-label", `Раунд ${index + 1}: ${label}`);
    fragment.appendChild(node);
  });
  rouletteHistoryTrack.appendChild(fragment);
}

function pushRouletteHistory(color) {
  if (!color) return;
  rouletteHistory.unshift(color);
  if (rouletteHistory.length > ROULETTE_HISTORY_LIMIT) {
    rouletteHistory.length = ROULETTE_HISTORY_LIMIT;
  }
  renderRouletteHistory();
}

function renderGameHistory(account = appState.currentAccount) {
  if (!gameHistoryList) return;
  gameHistoryList.innerHTML = "";
  const historySource = Array.isArray(account?.history) ? account.history : [];
  if (historySource.length === 0) {
    const empty = document.createElement("li");
    empty.className = "history-empty";
    empty.textContent = "Пока нет сыгранных раундов.";
    gameHistoryList.appendChild(empty);
    return;
  }

  const fragment = document.createDocumentFragment();
  historySource.forEach((entry) => {
    const item = document.createElement("li");
    const resultClass = entry.result && typeof entry.result === "string" ? entry.result : "";
    item.className = `history-entry ${resultClass}`.trim();

    const game = document.createElement("span");
    game.className = "history-game";
    game.textContent = entry.game ?? "Игра";
    if (entry.detail) {
      const detail = document.createElement("span");
      detail.className = "history-detail";
      detail.textContent = entry.detail;
      game.appendChild(detail);
    }

    const result = document.createElement("span");
    result.className = "history-result";
    const resultLabel = entry.result && resultLabels[entry.result]
      ? resultLabels[entry.result]
      : entry.result ?? "—";
    result.textContent = resultLabel;

    const amount = document.createElement("span");
    amount.className = "history-amount";
    amount.textContent = formatSignedAmount(entry.delta ?? 0);

    const time = document.createElement("time");
    const stamp = entry.timestamp ?? new Date().toISOString();
    time.dateTime = stamp;
    time.textContent = formatDateTime(stamp);

    item.append(game, result, amount, time);
    fragment.appendChild(item);
  });

  gameHistoryList.appendChild(fragment);
}

function addGameHistoryEntry(data) {
  const account = appState.currentAccount;
  if (!account) return;
  ensureAccountDefaults(account);
  const history = Array.isArray(account.history) ? account.history : [];
  const entry = {
    game: data.game ?? "Игра",
    detail: data.detail ?? "",
    result: data.result ?? "",
    stake: Number.isFinite(data.stake) ? Math.max(0, roundCurrency(data.stake)) : null,
    delta: Number.isFinite(data.delta) ? roundCurrency(data.delta) : 0,
    timestamp: data.timestamp ?? new Date().toISOString(),
  };
  history.unshift(entry);
  if (history.length > GAME_HISTORY_LIMIT) {
    history.length = GAME_HISTORY_LIMIT;
  }
  account.history = history;
}

function resetQuickBetButtons() {
  betQuickButtons.forEach((button) => button.classList.remove("active"));
}

function syncQuickBetButtons(value) {
  if (!Number.isFinite(value)) {
    resetQuickBetButtons();
    return;
  }
  betQuickButtons.forEach((button) => {
    const amount = Number(button.dataset.amount);
    button.classList.toggle("active", amount === value);
  });
}

function openModal(modal) {
  if (!modal) return;
  modal.classList.remove("hidden");
  const form = modal.querySelector("form");
  form?.reset();
  const feedback = modal.querySelector(".form-feedback");
  hideFormFeedback(feedback);
  const firstInput = modal.querySelector("input");
  if (firstInput) {
    setTimeout(() => {
      firstInput.focus({ preventScroll: true });
    }, 0);
  }
}

function closeModal(modal) {
  if (!modal) return;
  const form = modal.querySelector("form");
  modal.classList.add("hidden");
  if (form) form.reset();
  const feedback = modal.querySelector(".form-feedback");
  hideFormFeedback(feedback);
}

function setRoulettePointerColor(color) {
  if (!roulettePointer) return;
  roulettePointer.classList.remove("red", "black", "green");
  if (color && ["red", "black", "green"].includes(color)) {
    roulettePointer.classList.add(color);
    roulettePointer.setAttribute("data-color", color);
    const label = colorLabels[color] ?? color;
    const formattedLabel =
      typeof label === "string"
        ? label.charAt(0).toUpperCase() + label.slice(1)
        : String(label);
    roulettePointer.setAttribute(
      "aria-label",
      `Текущий результат: ${formattedLabel}`
    );
  } else {
    roulettePointer.removeAttribute("data-color");
    roulettePointer.removeAttribute("aria-label");
  }
}

function scheduleFakeRouletteBet() {
  clearTimeout(rouletteFakeTimeout);
  if (!rouletteCycleActive || roulettePhase !== "betting") return;
  rouletteFakeTimeout = setTimeout(() => {
    const fakeBet = {
      name: randomChoice(fakeNames),
      stake: Math.round(randomInt(2, 60) * 50),
      color: randomChoice(["red", "black", "green"]),
    };
    appendRouletteBet(fakeBet);
    scheduleFakeRouletteBet();
  }, randomInt(1200, 2600));
}

function stopRouletteFakeBets() {
  clearTimeout(rouletteFakeTimeout);
  rouletteFakeTimeout = null;
}

function updateRouletteCountdown() {
  if (!rouletteCountdown) return;
  if (roulettePhase !== "betting") {
    rouletteCountdown.textContent = "0.0";
    return;
  }
  const remaining = Math.max(0, roulettePhaseEndsAt - Date.now());
  rouletteCountdown.textContent = (remaining / 1000).toFixed(1);
}

function setRoulettePhaseLabel(phase) {
  if (!roulettePhaseLabel) return;
  const labels = {
    betting: "Приём ставок",
    spinning: "Колесо вращается",
    idle: "Ожидание",
  };
  roulettePhaseLabel.textContent = labels[phase] ?? "Ожидание";
}

function stopRouletteTimers() {
  clearInterval(rouletteCountdownInterval);
  clearInterval(rouletteShuffleInterval);
  clearTimeout(roulettePhaseTimeout);
  clearTimeout(rouletteSpinTimeout);
  clearTimeout(rouletteFakeTimeout);
  rouletteCountdownInterval = null;
  rouletteShuffleInterval = null;
  roulettePhaseTimeout = null;
  rouletteSpinTimeout = null;
  rouletteFakeTimeout = null;
}

function startRouletteBettingPhase() {
  roulettePhase = "betting";
  roulettePhaseEndsAt = Date.now() + ROULETTE_BET_DURATION;
  setRoulettePhaseLabel("betting");
  roulettePlayerBet = null;
  clearRouletteBoard();
  hideFormFeedback(rouletteFeedback);
  rouletteForm?.reset();
  resetQuickBetButtons();
  if (rouletteStartButton) rouletteStartButton.disabled = false;
  if (rouletteNumber) rouletteNumber.textContent = "-";
  if (rouletteStatus)
    rouletteStatus.textContent = `Ставки открыты. У вас ${ROULETTE_BET_SECONDS} секунд.`;
  if (rouletteWheel) {
    rouletteWheel.classList.remove("spinning");
  }
  rouletteWrapper?.classList.remove("is-spinning");
  updateRouletteCountdown();
  clearInterval(rouletteCountdownInterval);
  rouletteCountdownInterval = setInterval(updateRouletteCountdown, 100);
  clearTimeout(roulettePhaseTimeout);
  roulettePhaseTimeout = setTimeout(startRouletteSpinPhase, ROULETTE_BET_DURATION);
  scheduleFakeRouletteBet();
}

function startRouletteSpinPhase() {
  if (!rouletteCycleActive) return;
  roulettePhase = "spinning";
  setRoulettePhaseLabel("spinning");
  stopRouletteFakeBets();
  clearInterval(rouletteCountdownInterval);
  rouletteCountdownInterval = null;
  if (rouletteCountdown) rouletteCountdown.textContent = "0.0";
  if (rouletteStartButton) rouletteStartButton.disabled = true;
  if (rouletteStatus) rouletteStatus.textContent = "Колесо вращается...";
  hideFormFeedback(rouletteFeedback);
  const result = randomInt(0, 36);
  if (rouletteWheel) {
    rouletteWheel.classList.add("spinning");
    const spins = randomInt(4, 6) * 360;
    const resultIndex = ROULETTE_NUMBER_INDEX[result] ?? result;
    const targetAngle =
      (resultIndex * ROULETTE_SEGMENT_ANGLE + ROULETTE_HALF_SEGMENT) % 360;
    const normalizedCurrent = ((rouletteRotation % 360) + 360) % 360;
    const desiredFinal = ((90 - targetAngle) % 360 + 360) % 360;
    const deltaToDesired = (desiredFinal - normalizedCurrent + 360) % 360;
    rouletteRotation += spins + deltaToDesired;
    requestAnimationFrame(() => {
      rouletteWheel.style.transform = `rotate(${rouletteRotation}deg)`;
    });
  }
  rouletteWrapper?.classList.add("is-spinning");
  clearInterval(rouletteShuffleInterval);
  rouletteShuffleInterval = setInterval(() => {
    if (rouletteNumber) {
      rouletteNumber.textContent = randomInt(0, 36).toString();
    }
  }, 120);
  clearTimeout(rouletteSpinTimeout);
  rouletteSpinTimeout = setTimeout(() => {
    finishRouletteRound(result);
  }, ROULETTE_SPIN_DURATION);
}

function finishRouletteRound(result) {
  roulettePhase = "idle";
  setRoulettePhaseLabel("idle");
  clearInterval(rouletteShuffleInterval);
  rouletteShuffleInterval = null;
  if (rouletteNumber) rouletteNumber.textContent = result.toString();
  const resultColor = getRouletteColor(result);
  const colorName = colorLabels[resultColor];
  pushRouletteHistory(resultColor);
  setRoulettePointerColor(resultColor);
  if (rouletteStatus) {
    rouletteStatus.textContent =
      result === 0
        ? `Выпало зеро (${colorName}).`
        : `Выпало число ${result} (${colorName}).`;
  }
  if (rouletteWheel) {
    rouletteWheel.classList.remove("spinning");
    const normalizedRotation = ((rouletteRotation % 360) + 360) % 360;
    rouletteRotation = normalizedRotation;
    const previousTransition = rouletteWheel.style.transition;
    rouletteWheel.style.transition = "none";
    rouletteWheel.style.transform = `rotate(${rouletteRotation}deg)`;
    // Force a reflow so the wheel keeps its final pose without animating again
    // before restoring the transition for the next spin.
    void rouletteWheel.offsetWidth;
    rouletteWheel.style.transition = previousTransition;
  }
  rouletteWrapper?.classList.remove("is-spinning");

  const account = appState.currentAccount;
  if (account && roulettePlayerBet) {
    const { stake, color } = roulettePlayerBet;
    const multipliers = { red: 2, black: 2, green: 36 };
    const betLabel = colorLabels[color] ?? color;
    const resultLabel = colorLabels[resultColor] ?? resultColor;
    let delta = roundCurrency(-Math.abs(stake));
    let outcomeResult = "lose";
    if (resultColor === color) {
      const winnings = roundCurrency(stake * multipliers[color]);
      const profit = roundCurrency(winnings - stake);
      account.balance = roundCurrency((account.balance ?? 0) + winnings);
      account.wins = Number(account.wins ?? 0) + 1;
      account.favouriteGame = "Рулетка";
      account.streak = Number(account.streak ?? 0) + 1;
      gainExperience(color === "green" ? 15 : 6);
      showFormFeedback(
        rouletteFeedback,
        `Вы выиграли ${formatCurrency(profit)}!`,
        true
      );
      delta = profit;
      outcomeResult = "win";
    } else {
      account.streak = 0;
      showFormFeedback(
        rouletteFeedback,
        "Не повезло в этот раз. Попробуйте снова.",
        false
      );
    }
    const stakeText = formatCurrency(stake);
    const historyDetail =
      outcomeResult === "win"
        ? `Ставка на ${betLabel} — ${stakeText}`
        : `Ставка на ${betLabel} — ${stakeText}, выпало ${resultLabel}`;
    addGameHistoryEntry({
      game: "Рулетка",
      detail: historyDetail,
      stake: roundCurrency(stake),
      delta: roundCurrency(delta),
      result: outcomeResult,
    });
    updateDashboardData();
    persistCurrentUser();
  }

  roulettePlayerBet = null;

  clearTimeout(roulettePhaseTimeout);
  roulettePhaseTimeout = setTimeout(() => {
    if (!rouletteCycleActive) return;
    startRouletteBettingPhase();
  }, 1600);
}

function stopRouletteCycle() {
  rouletteCycleActive = false;
  stopRouletteTimers();
  roulettePhase = "idle";
  if (rouletteWheel) {
    rouletteWheel.classList.remove("spinning");
    rouletteWheel.style.removeProperty("transform");
  }
  rouletteWrapper?.classList.remove("is-spinning");
  rouletteRotation = 0;
  if (rouletteCountdown)
    rouletteCountdown.textContent = (ROULETTE_BET_DURATION / 1000).toFixed(1);
  setRoulettePhaseLabel("betting");
  if (rouletteStatus) rouletteStatus.textContent = "Ставка ещё не сделана.";
  if (rouletteNumber) rouletteNumber.textContent = "-";
  if (rouletteStartButton) rouletteStartButton.disabled = false;
  roulettePlayerBet = null;
  setRoulettePointerColor(null);
  clearRouletteBoard();
  hideFormFeedback(rouletteFeedback);
  rouletteForm?.reset();
  resetQuickBetButtons();
}

function startRouletteCycle() {
  if (rouletteCycleActive) return;
  rouletteCycleActive = true;
  startRouletteBettingPhase();
}

function initializeBlackjackState() {
  stopBlackjackLiveTimer();
  blackjackDeck = [];
  blackjackDealerCards = [];
  blackjackHands = [];
  blackjackActiveHandIndex = 0;
  blackjackDealerRevealed = false;
  blackjackRoundActive = false;
  blackjackResolving = false;
  blackjackTotalStake = 0;
  if (blackjackLiveToggle) {
    blackjackLiveEnabled = blackjackLiveToggle.checked;
  }
  if (!blackjackLiveEnabled) {
    blackjackLiveEntries = [];
  }
  blackjackHandCounter = 0;
  blackjackForm?.reset();
  if (blackjackStakeInput) {
    const defaultValue =
      Number.parseFloat(
        blackjackStakeInput.defaultValue || blackjackStakeInput.value || BLACKJACK_STEP
      ) || BLACKJACK_STEP;
    const sanitized = sanitizeStake(defaultValue);
    blackjackStakeInput.value = sanitized.toFixed(2);
  }
  updateBlackjackStakeDisplay();
  updateBlackjackTotals();
  clearBlackjackTable();
  hideFormFeedback(blackjackFeedback);
  updateBlackjackStatus("Сделайте ставку и нажмите «Раздать».");
  if (blackjackDealButton) blackjackDealButton.disabled = false;
  setStakeControlsDisabled(false);
  updateBlackjackActionButtons();
  renderBlackjackTable();
  renderBlackjackLiveBets();
  if (blackjackLiveEnabled) {
    scheduleBlackjackLiveEntry();
  }
}

function resetRouletteUI() {
  stopRouletteCycle();
}

function sanitizeStake(value) {
  if (!Number.isFinite(value)) return BLACKJACK_MIN_BET;
  const scaled = Math.max(BLACKJACK_MIN_BET, value);
  const steps = Math.round(scaled / BLACKJACK_STEP);
  return roundCurrency(steps * BLACKJACK_STEP);
}

function setStakeControlsDisabled(disabled) {
  if (blackjackStakeInput) blackjackStakeInput.disabled = disabled;
  blackjackStakeButtons.forEach((button) => {
    button.disabled = disabled;
  });
}

function adjustBlackjackStake(action) {
  if (!blackjackStakeInput) return;
  let value = sanitizeStake(Number.parseFloat(blackjackStakeInput.value));
  switch (action) {
    case "increase":
      value = sanitizeStake(value + BLACKJACK_STEP);
      break;
    case "decrease":
      value = sanitizeStake(value - BLACKJACK_STEP);
      break;
    case "double":
      value = sanitizeStake(value * 2);
      break;
    case "half":
      value = sanitizeStake(value / 2);
      break;
    default:
      value = sanitizeStake(value);
  }
  blackjackStakeInput.value = value.toFixed(2);
  updateBlackjackStakeDisplay();
}

function updateBlackjackStakeDisplay() {
  if (!blackjackStakeInput) return;
  const stakeValue = sanitizeStake(Number.parseFloat(blackjackStakeInput.value));
  blackjackStakeInput.value = stakeValue.toFixed(2);
  if (blackjackStakeDisplay) {
    blackjackStakeDisplay.textContent = formatUsd(stakeValue);
  }
}

function updateBlackjackTotals() {
  if (blackjackBetTotalDisplay) {
    blackjackBetTotalDisplay.textContent = formatUsd(blackjackTotalStake);
  }
  const balance = appState.currentAccount?.balance ?? 0;
  if (blackjackBalanceDisplay) {
    blackjackBalanceDisplay.textContent = formatUsd(balance);
  }
}

function updateBlackjackStatus(message) {
  if (blackjackStatus) blackjackStatus.textContent = message;
}

function clearBlackjackTable() {
  if (blackjackDealerCardsEl) blackjackDealerCardsEl.innerHTML = "";
  if (blackjackPlayerHandsEl) blackjackPlayerHandsEl.innerHTML = "";
  if (blackjackDealerTotalEl) blackjackDealerTotalEl.textContent = "0";
}

function createBlackjackDeck() {
  const deck = [];
  BLACKJACK_SUITS.forEach((suit) => {
    BLACKJACK_RANKS.forEach((rank) => {
      deck.push({ rank, suit });
    });
  });
  for (let i = deck.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
}

function drawBlackjackCard() {
  if (blackjackDeck.length === 0) {
    blackjackDeck = createBlackjackDeck();
  }
  const card = blackjackDeck.pop();
  return { ...card };
}

function calculateHandScore(cards) {
  let total = 0;
  let aces = 0;
  cards.forEach((card) => {
    if (card.rank === "A") {
      total += 11;
      aces += 1;
    } else if (["K", "Q", "J"].includes(card.rank)) {
      total += 10;
    } else {
      total += Number(card.rank);
    }
  });
  while (total > 21 && aces > 0) {
    total -= 10;
    aces -= 1;
  }
  return { total, isSoft: aces > 0 };
}

const suitSymbols = {
  hearts: "♥",
  diamonds: "♦",
  clubs: "♣",
  spades: "♠",
};

function createCardElement(card, { hidden = false } = {}) {
  const element = document.createElement("div");
  element.classList.add("playing-card");
  if (hidden) {
    element.classList.add("card-back");
    requestAnimationFrame(() => element.classList.add("card-enter"));
    return element;
  }
  const symbol = suitSymbols[card.suit] ?? "";
  element.classList.add(`suit-${card.suit}`);
  const topCorner = `
    <div class="corner top">
      <span class="rank">${card.rank}</span>
      <span class="suit">${symbol}</span>
    </div>
  `;
  const bottomCorner = `
    <div class="corner bottom">
      <span class="rank">${card.rank}</span>
      <span class="suit">${symbol}</span>
    </div>
  `;
  let centerContent = "";
  if (BLACKJACK_FACE_RANKS.has(card.rank)) {
    const faceRankClass = card.rank.toLowerCase();
    element.classList.add("is-face");
    centerContent = `
      <div class="face-illustration face-${faceRankClass}">
        <span class="face-rank">${card.rank}</span>
        <span class="face-suit">${symbol}</span>
      </div>
    `;
  } else {
    const layout = BLACKJACK_PIP_LAYOUTS[card.rank] ?? ["middle-center"];
    const pipMarkup = layout
      .map((position) => `<span class="pip ${position}">${symbol}</span>`)
      .join("");
    const pipClasses = card.rank === "A" ? "pip-grid ace" : "pip-grid";
    element.classList.add("has-pips");
    centerContent = `<div class="${pipClasses}">${pipMarkup}</div>`;
  }
  element.innerHTML = `${topCorner}${centerContent}${bottomCorner}`;
  requestAnimationFrame(() => element.classList.add("card-enter"));
  return element;
}

function renderBlackjackTable() {
  if (blackjackDealerCardsEl) {
    blackjackDealerCardsEl.innerHTML = "";
    blackjackDealerCards.forEach((card, index) => {
      const hidden = !blackjackDealerRevealed && index === 1;
      const cardElement = createCardElement(card, { hidden });
      blackjackDealerCardsEl.appendChild(cardElement);
    });
  }
  if (blackjackDealerTotalEl) {
    const visibleCards =
      blackjackDealerRevealed || blackjackDealerCards.length <= 1
        ? blackjackDealerCards
        : [blackjackDealerCards[0]];
    const score = calculateHandScore(visibleCards).total;
    blackjackDealerTotalEl.textContent = score.toString();
  }
  if (blackjackPlayerHandsEl) {
    blackjackPlayerHandsEl.innerHTML = "";
    blackjackHands.forEach((hand, index) => {
      const handElement = document.createElement("div");
      handElement.classList.add("player-hand");
      if (
        blackjackRoundActive &&
        !blackjackResolving &&
        index === blackjackActiveHandIndex &&
        hand.status === "playing"
      ) {
        handElement.classList.add("active");
      }
      if (hand.status === "bust") {
        handElement.classList.add("bust");
      }
      if (hand.status === "blackjack") {
        handElement.classList.add("blackjack");
      }
      const header = document.createElement("div");
      header.classList.add("hand-meta");
      const label = blackjackHands.length > 1 ? `Рука ${index + 1}` : "Вы";
      const score = calculateHandScore(hand.cards);
      header.innerHTML = `<span class="hand-label">${label}</span><span class="hand-score">${score.total}</span>`;
      handElement.appendChild(header);
      const cardsContainer = document.createElement("div");
      cardsContainer.classList.add("hand-cards");
      hand.cards.forEach((cardItem) => {
        const cardElement = createCardElement(cardItem);
        cardsContainer.appendChild(cardElement);
      });
      handElement.appendChild(cardsContainer);
      const footer = document.createElement("div");
      footer.classList.add("hand-meta");
      const statusSpan = document.createElement("span");
      statusSpan.classList.add("hand-status");
      if (hand.result) {
        statusSpan.textContent = hand.result.message;
        if (hand.result.type === "win" || hand.result.type === "blackjack") {
          statusSpan.classList.add("success");
        } else if (hand.result.type === "lose") {
          statusSpan.classList.add("fail");
        }
      } else if (hand.status === "bust") {
        statusSpan.textContent = "Перебор";
        statusSpan.classList.add("fail");
      } else if (hand.status === "blackjack") {
        statusSpan.textContent = "Блэкджэк";
        statusSpan.classList.add("success");
      } else if (hand.status === "stood") {
        statusSpan.textContent = "Ожидание дилера";
      } else {
        statusSpan.textContent =
          index === blackjackActiveHandIndex ? "Ваш ход" : "Ожидание";
      }
      const stakeSpan = document.createElement("span");
      stakeSpan.classList.add("hand-stake");
      stakeSpan.textContent = formatUsd(hand.stake);
      footer.append(statusSpan, stakeSpan);
      handElement.appendChild(footer);
      blackjackPlayerHandsEl.appendChild(handElement);
    });
  }
}

function getCurrentBlackjackHand() {
  return blackjackHands[blackjackActiveHandIndex] ?? null;
}

function updateBlackjackActionButtons() {
  const account = appState.currentAccount;
  const currentHand = getCurrentBlackjackHand();
  const canAct =
    blackjackRoundActive &&
    !blackjackResolving &&
    currentHand &&
    currentHand.status === "playing";
  if (blackjackHitButton) {
    blackjackHitButton.disabled = !canAct || currentHand?.splitFromAce === true;
  }
  if (blackjackStandButton) {
    blackjackStandButton.disabled = !canAct;
  }
  if (blackjackDoubleButton) {
    const canDouble =
      canAct &&
      currentHand?.cards.length === 2 &&
      !currentHand?.doubled &&
      account &&
      roundCurrency(account.balance ?? 0) >= roundCurrency(currentHand.stake);
    blackjackDoubleButton.disabled = !canDouble;
  }
  if (blackjackSplitButton) {
    const canSplit =
      blackjackRoundActive &&
      !blackjackResolving &&
      blackjackHands.length === 1 &&
      currentHand &&
      currentHand.cards.length === 2 &&
      currentHand.cards[0].rank === currentHand.cards[1].rank &&
      account &&
      roundCurrency(account.balance ?? 0) >= roundCurrency(currentHand.stake);
    blackjackSplitButton.disabled = !canSplit;
  }
}

function determineNextPlayableHand() {
  if (blackjackResolving) return;
  const nextIndex = blackjackHands.findIndex((hand) => hand.status === "playing");
  if (nextIndex !== -1) {
    blackjackActiveHandIndex = nextIndex;
    const label = blackjackHands.length > 1 ? `Рука ${nextIndex + 1}` : "Ваша рука";
    updateBlackjackStatus(`${label}: ваш ход.`);
    renderBlackjackTable();
    updateBlackjackActionButtons();
  } else {
    renderBlackjackTable();
    resolveBlackjackRound();
  }
}

function createBlackjackHand(stake, options = {}) {
  return {
    id: `hand-${++blackjackHandCounter}`,
    cards: [],
    stake: roundCurrency(stake),
    status: "playing",
    doubled: false,
    split: Boolean(options.split),
    splitFromAce: Boolean(options.splitFromAce),
    natural: false,
    result: null,
  };
}

function startBlackjackRound(stake) {
  const account = appState.currentAccount;
  if (!account) return;
  blackjackDeck = createBlackjackDeck();
  blackjackDealerCards = [drawBlackjackCard(), drawBlackjackCard()];
  const hand = createBlackjackHand(stake);
  hand.cards.push(drawBlackjackCard(), drawBlackjackCard());
  const score = calculateHandScore(hand.cards);
  hand.natural = score.total === 21;
  hand.status = hand.natural ? "blackjack" : "playing";
  blackjackHands = [hand];
  blackjackActiveHandIndex = 0;
  blackjackDealerRevealed = false;
  blackjackRoundActive = true;
  blackjackResolving = false;
  blackjackTotalStake = roundCurrency(stake);
  account.balance = roundCurrency((account.balance ?? 0) - stake);
  hideFormFeedback(blackjackFeedback);
  setStakeControlsDisabled(true);
  if (blackjackDealButton) blackjackDealButton.disabled = true;
  updateBalanceDisplays();
  updateBlackjackTotals();
  renderBlackjackTable();
  persistCurrentUser();
  if (hand.natural || calculateHandScore(blackjackDealerCards).total === 21) {
    blackjackDealerRevealed = true;
    renderBlackjackTable();
    resolveBlackjackRound();
  } else {
    updateBlackjackStatus("Ваш ход. Выберите действие.");
    updateBlackjackActionButtons();
  }
}

function handleBlackjackHit() {
  if (!blackjackRoundActive || blackjackResolving) return;
  const hand = getCurrentBlackjackHand();
  if (!hand || hand.status !== "playing") return;
  if (hand.splitFromAce) return;
  hand.cards.push(drawBlackjackCard());
  const score = calculateHandScore(hand.cards);
  if (score.total > 21) {
    hand.status = "bust";
    updateBlackjackStatus("Перебор! Рука завершена.");
    determineNextPlayableHand();
  } else if (score.total === 21) {
    hand.status = "stood";
    updateBlackjackStatus("21 очко! Ожидаем дилера.");
    determineNextPlayableHand();
  } else {
    renderBlackjackTable();
    updateBlackjackStatus("Выберите следующее действие.");
    updateBlackjackActionButtons();
  }
}

function handleBlackjackStand() {
  if (!blackjackRoundActive || blackjackResolving) return;
  const hand = getCurrentBlackjackHand();
  if (!hand || hand.status !== "playing") return;
  hand.status = "stood";
  updateBlackjackStatus("Рука завершена. Ожидаем дилера.");
  determineNextPlayableHand();
}

function handleBlackjackDouble() {
  if (!blackjackRoundActive || blackjackResolving) return;
  const hand = getCurrentBlackjackHand();
  const account = appState.currentAccount;
  if (!hand || hand.status !== "playing" || !account) return;
  if (hand.cards.length !== 2 || hand.doubled) return;
  if (roundCurrency(account.balance ?? 0) < roundCurrency(hand.stake)) {
    showFormFeedback(blackjackFeedback, "Недостаточно средств для удвоения.");
    return;
  }
  account.balance = roundCurrency((account.balance ?? 0) - roundCurrency(hand.stake));
  hand.stake = roundCurrency(hand.stake * 2);
  hand.doubled = true;
  blackjackTotalStake = roundCurrency(
    blackjackHands.reduce((total, current) => total + current.stake, 0)
  );
  updateBalanceDisplays();
  updateBlackjackTotals();
  persistCurrentUser();
  hand.cards.push(drawBlackjackCard());
  const score = calculateHandScore(hand.cards);
  hand.status = score.total > 21 ? "bust" : "stood";
  updateBlackjackStatus("Удвоение выполнено. Ожидаем дилера.");
  determineNextPlayableHand();
}

function handleBlackjackSplit() {
  if (!blackjackRoundActive || blackjackResolving) return;
  const hand = getCurrentBlackjackHand();
  const account = appState.currentAccount;
  if (!hand || hand.status !== "playing" || !account) return;
  if (blackjackHands.length !== 1) return;
  if (hand.cards.length !== 2 || hand.cards[0].rank !== hand.cards[1].rank) return;
  if (roundCurrency(account.balance ?? 0) < roundCurrency(hand.stake)) {
    showFormFeedback(blackjackFeedback, "Недостаточно средств для сплита.");
    return;
  }
  account.balance = roundCurrency((account.balance ?? 0) - roundCurrency(hand.stake));
  const [firstCard, secondCard] = hand.cards;
  const firstHand = createBlackjackHand(hand.stake, {
    split: true,
    splitFromAce: firstCard.rank === "A",
  });
  const secondHand = createBlackjackHand(hand.stake, {
    split: true,
    splitFromAce: secondCard.rank === "A",
  });
  firstHand.cards.push(firstCard, drawBlackjackCard());
  secondHand.cards.push(secondCard, drawBlackjackCard());
  firstHand.status = firstHand.splitFromAce ? "stood" : "playing";
  secondHand.status = secondHand.splitFromAce ? "stood" : "playing";
  firstHand.natural = false;
  secondHand.natural = false;
  blackjackHands = [firstHand, secondHand];
  blackjackTotalStake = roundCurrency(
    blackjackHands.reduce((total, current) => total + current.stake, 0)
  );
  updateBalanceDisplays();
  updateBlackjackTotals();
  persistCurrentUser();
  updateBlackjackStatus("Руки разделены. Ваш ход.");
  determineNextPlayableHand();
}

function handleBlackjackDeal(event) {
  event?.preventDefault?.();
  if (!appState.currentAccount) {
    toggleAuthView("login");
    showPage("auth");
    showFormFeedback(blackjackFeedback, "Авторизуйтесь, чтобы сыграть.");
    return;
  }
  if (blackjackRoundActive || blackjackResolving) return;
  const stakeValue = sanitizeStake(Number.parseFloat(blackjackStakeInput?.value ?? ""));
  if (!Number.isFinite(stakeValue) || stakeValue < BLACKJACK_MIN_BET) {
    showFormFeedback(
      blackjackFeedback,
      `Минимальная ставка ${formatUsd(BLACKJACK_MIN_BET)}.`
    );
    return;
  }
  if ((appState.currentAccount.balance ?? 0) < stakeValue) {
    showFormFeedback(blackjackFeedback, "Недостаточно средств на балансе.");
    return;
  }
  hideFormFeedback(blackjackFeedback);
  blackjackTotalStake = roundCurrency(stakeValue);
  startBlackjackRound(stakeValue);
  if (blackjackLiveEnabled) {
    pushBlackjackLiveEntry({
      name: appState.currentAccount.nickname || "Вы",
      stake: stakeValue,
      isPlayer: true,
    });
  }
}

async function resolveBlackjackRound() {
  if (blackjackResolving) return;
  blackjackResolving = true;
  blackjackRoundActive = false;
  if (blackjackDealButton) blackjackDealButton.disabled = false;
  updateBlackjackActionButtons();
  if (!blackjackDealerRevealed) {
    blackjackDealerRevealed = true;
    renderBlackjackTable();
    await wait(400);
  }
  let dealerScoreData = calculateHandScore(blackjackDealerCards);
  while (dealerScoreData.total < 17) {
    blackjackDealerCards.push(drawBlackjackCard());
    renderBlackjackTable();
    await wait(500);
    dealerScoreData = calculateHandScore(blackjackDealerCards);
  }
  const dealerScore = dealerScoreData.total;
  const dealerHasBlackjack = blackjackDealerCards.length === 2 && dealerScore === 21;
  const account = appState.currentAccount;
  const detailParts = [];
  let totalStake = 0;
  let totalDelta = 0;
  let wins = 0;
  let losses = 0;
  blackjackHands.forEach((hand, index) => {
    const score = calculateHandScore(hand.cards);
    let payout = 0;
    let message = "Поражение";
    let outcomeType = "lose";
    if (hand.status === "bust") {
      message = "Перебор";
      outcomeType = "lose";
    } else if (hand.natural && !hand.split && !dealerHasBlackjack) {
      payout = roundCurrency(hand.stake * 2.5);
      message = "Блэкджэк";
      outcomeType = "blackjack";
    } else if (hand.natural && dealerHasBlackjack) {
      payout = hand.stake;
      message = "Ничья";
      outcomeType = "push";
    } else if (dealerHasBlackjack && hand.status !== "bust") {
      message = "Дилер блэкджэк";
      outcomeType = "lose";
    } else if (score.total > 21) {
      message = "Перебор";
      outcomeType = "lose";
    } else if (dealerScore > 21) {
      payout = roundCurrency(hand.stake * 2);
      message = "Победа";
      outcomeType = "win";
    } else if (score.total > dealerScore) {
      payout = roundCurrency(hand.stake * 2);
      message = "Победа";
      outcomeType = "win";
    } else if (score.total === dealerScore) {
      payout = hand.stake;
      message = "Ничья";
      outcomeType = "push";
    }
    const delta = roundCurrency(payout - hand.stake);
    totalStake = roundCurrency(totalStake + hand.stake);
    totalDelta = roundCurrency(totalDelta + delta);
    if (account && payout > 0) {
      account.balance = roundCurrency((account.balance ?? 0) + payout);
    }
    if (outcomeType === "win" || outcomeType === "blackjack") {
      wins += 1;
    } else if (outcomeType === "lose") {
      losses += 1;
    }
    hand.result = { type: outcomeType, message };
    const deltaLabel =
      delta > 0
        ? ` (+${formatUsd(delta)})`
        : delta < 0
        ? ` (-${formatUsd(Math.abs(delta))})`
        : "";
    const label = blackjackHands.length > 1 ? `Рука ${index + 1}` : "Рука";
    detailParts.push(`${label}: ${message}${deltaLabel}`);
  });
  if (account) {
    if (wins > 0) {
      account.wins = Number(account.wins ?? 0) + wins;
      account.favouriteGame = "Блэкджэк";
      account.streak = Number(account.streak ?? 0) + wins;
      gainExperience(wins * 8);
    } else if (losses > 0) {
      account.streak = 0;
    }
  }
  blackjackTotalStake = 0;
  setStakeControlsDisabled(false);
  updateBlackjackTotals();
  updateBalanceDisplays();
  updateDashboardData();
  renderBlackjackTable();
  persistCurrentUser();
  const resultLabel =
    totalDelta > 0
      ? `Победа ${formatUsd(totalDelta)}`
      : totalDelta < 0
      ? `Поражение ${formatUsd(Math.abs(totalDelta))}`
      : "Ничья";
  updateBlackjackStatus(`Раунд завершён: ${resultLabel}.`);
  if (totalDelta > 0) {
    showFormFeedback(
      blackjackFeedback,
      `Вы выиграли ${formatUsd(totalDelta)}!`,
      true
    );
  } else if (totalDelta < 0) {
    showFormFeedback(
      blackjackFeedback,
      `Проигрыш ${formatUsd(Math.abs(totalDelta))}.`,
      false
    );
  } else {
    showFormFeedback(blackjackFeedback, "Ничья. Ставка возвращена.", true);
  }
  addGameHistoryEntry({
    game: "Блэкджэк",
    detail: detailParts.join(" • "),
    stake: totalStake,
    delta: totalDelta,
    result: totalDelta > 0 ? "win" : totalDelta < 0 ? "lose" : "draw",
  });
  blackjackResolving = false;
  if (blackjackLiveEnabled) {
    scheduleBlackjackLiveEntry();
  }
}

function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

function pushBlackjackLiveEntry(entry) {
  blackjackLiveEntries.unshift(entry);
  if (blackjackLiveEntries.length > BLACKJACK_MAX_LIVE_ENTRIES) {
    blackjackLiveEntries.length = BLACKJACK_MAX_LIVE_ENTRIES;
  }
  renderBlackjackLiveBets();
}

function renderBlackjackLiveBets() {
  if (!blackjackLiveList) return;
  blackjackLiveList.innerHTML = blackjackLiveEntries
    .map((entry) => {
      const classes = entry.isPlayer ? " class=\"is-player\"" : "";
      return `<li${classes}><span>${entry.name}</span><span>${formatUsd(entry.stake)}</span></li>`;
    })
    .join("");
  if (blackjackLiveFeed) {
    blackjackLiveFeed.classList.toggle("hidden", !blackjackLiveEnabled);
  }
}

function scheduleBlackjackLiveEntry() {
  stopBlackjackLiveTimer();
  if (!blackjackLiveEnabled) return;
  const delay = 2800 + Math.random() * 4200;
  blackjackLiveTimer = setTimeout(() => {
    const name = fakeNames[Math.floor(Math.random() * fakeNames.length)];
    const stake = roundCurrency(
      BLACKJACK_MIN_BET * (2 + Math.floor(Math.random() * 10))
    );
    pushBlackjackLiveEntry({ name, stake });
    scheduleBlackjackLiveEntry();
  }, delay);
}

function stopBlackjackLiveTimer() {
  if (blackjackLiveTimer) {
    clearTimeout(blackjackLiveTimer);
    blackjackLiveTimer = null;
  }
}

function toggleBlackjackLive(enabled) {
  blackjackLiveEnabled = enabled;
  if (blackjackLiveToggle) {
    blackjackLiveToggle.checked = enabled;
  }
  if (!enabled) {
    stopBlackjackLiveTimer();
    blackjackLiveEntries = [];
  } else {
    scheduleBlackjackLiveEntry();
  }
  renderBlackjackLiveBets();
}


function getRouletteColor(number) {
  if (number === 0) return "green";
  return redNumbers.has(number) ? "red" : "black";
}

function handleRouletteBet(event) {
  event.preventDefault();
  if (!appState.currentAccount) {
    toggleAuthView("login");
    showPage("auth");
    showFormFeedback(rouletteFeedback, "Авторизуйтесь, чтобы сделать ставку.");
    return;
  }

  if (roulettePhase !== "betting") {
    showFormFeedback(rouletteFeedback, "Ставки закрыты. Ожидайте новый раунд.");
    return;
  }

  if (roulettePlayerBet) {
    showFormFeedback(rouletteFeedback, "Вы уже сделали ставку в этом раунде.");
    return;
  }

  const formData = new FormData(rouletteForm);
  const stake = Number(formData.get("stake"));
  const color = formData.get("color");

  if (!Number.isFinite(stake) || stake < 100) {
    showFormFeedback(rouletteFeedback, "Минимальная ставка 100₽.");
    return;
  }

  if (!["red", "black", "green"].includes(color)) {
    showFormFeedback(rouletteFeedback, "Выберите один цвет для ставки.");
    return;
  }

  const account = appState.currentAccount;
  if (!account) return;

  if (roundCurrency(account.balance ?? 0) < roundCurrency(stake)) {
    showFormFeedback(rouletteFeedback, "Недостаточно средств на балансе.");
    return;
  }

  account.balance = roundCurrency((account.balance ?? 0) - stake);
  roulettePlayerBet = { stake, color };
  appendRouletteBet({
    name: account.nickname || "Вы",
    stake,
    color,
    isPlayer: true,
  });
  if (rouletteStartButton) rouletteStartButton.disabled = true;
  if (rouletteStatus)
    rouletteStatus.textContent = "Ставка принята. Ожидайте спина.";
  showFormFeedback(rouletteFeedback, "Ставка принята!", true);
  const colorName = colorLabels[color] ?? color;
  showFeedback(
    `Ставка ${formatCurrency(stake)} на ${
      typeof colorName === "string"
        ? colorName.charAt(0).toUpperCase() + colorName.slice(1)
        : colorName
    } принята.`
  );
  updateBalanceDisplays();
  persistCurrentUser();
}

function handleDeposit() {
  if (!appState.isAuthenticated || !appState.currentAccount) {
    showFeedback("Авторизуйтесь, чтобы управлять балансом.");
    hideDropdown();
    return;
  }
  appState.currentAccount.balance = roundCurrency(
    (appState.currentAccount.balance ?? 0) + 1000
  );
  gainExperience(3);
  showFeedback(`Баланс пополнен на ${formatCurrency(1000)}.`);
  updateDashboardData();
  persistCurrentUser();
  hideDropdown();
}

function handleProfileUpdate(event) {
  event.preventDefault();
  if (!profileEditForm) return;
  hideFormFeedback(profileEditFeedback);
  if (!appState.currentAccount) {
    showFeedback("Авторизуйтесь, чтобы изменить профиль.");
    return;
  }

  const formData = new FormData(profileEditForm);
  const nickname = formData.get("nickname")?.toString().trim();

  if (!nickname || nickname.length < 3) {
    showFormFeedback(
      profileEditFeedback,
      "Никнейм должен содержать не менее 3 символов."
    );
    return;
  }

  const account = appState.currentAccount;
  const nicknameLower = nickname.toLowerCase();
  const duplicate = appState.accounts.some(
    (item) => item.id !== account.id && item.nickname.toLowerCase() === nicknameLower
  );

  if (duplicate) {
    showFormFeedback(
      profileEditFeedback,
      "Такой никнейм уже используется другим игроком."
    );
    return;
  }

  account.nickname = nickname;
  ensureAccountDefaults(account);
  updateDashboardData();
  persistCurrentUser();
  showFormFeedback(profileEditFeedback, "Профиль обновлён.", true);
  showFeedback("Профиль успешно обновлён.");
}

function handlePasswordChange(event) {
  event.preventDefault();
  if (!passwordChangeForm) return;
  hideFormFeedback(passwordFeedback);
  if (!appState.currentAccount) {
    showFeedback("Авторизуйтесь, чтобы изменить пароль.");
    closeModal(passwordModal);
    return;
  }

  const formData = new FormData(passwordChangeForm);
  const current = formData.get("current")?.toString() ?? "";
  const next = formData.get("next")?.toString() ?? "";
  const confirm = formData.get("confirm")?.toString() ?? "";

  if (current !== appState.currentAccount.password) {
    showFormFeedback(passwordFeedback, "Неверный текущий пароль.");
    return;
  }

  if (next.length < 6) {
    showFormFeedback(
      passwordFeedback,
      "Пароль должен содержать не менее 6 символов."
    );
    return;
  }

  if (next !== confirm) {
    showFormFeedback(passwordFeedback, "Пароли должны совпадать.");
    return;
  }

  if (next === current) {
    showFormFeedback(
      passwordFeedback,
      "Новый пароль должен отличаться от текущего."
    );
    return;
  }

  appState.currentAccount.password = next;
  persistCurrentUser();
  showFormFeedback(passwordFeedback, "Пароль обновлён.", true);
  showFeedback("Пароль успешно изменён.");
  setTimeout(() => {
    closeModal(passwordModal);
  }, 900);
}

function handleEmailChange(event) {
  event.preventDefault();
  if (!emailChangeForm) return;
  hideFormFeedback(emailFeedback);
  if (!appState.currentAccount) {
    showFeedback("Авторизуйтесь, чтобы изменить почту.");
    closeModal(emailModal);
    return;
  }

  const formData = new FormData(emailChangeForm);
  const email = formData.get("email")?.toString().trim().toLowerCase();
  const confirm = formData.get("confirm")?.toString().trim().toLowerCase();
  const password = formData.get("password")?.toString() ?? "";

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showFormFeedback(emailFeedback, "Введите корректную почту.");
    return;
  }

  if (email !== confirm) {
    showFormFeedback(emailFeedback, "Почты должны совпадать.");
    return;
  }

  if (password !== appState.currentAccount.password) {
    showFormFeedback(emailFeedback, "Неверный пароль.");
    return;
  }

  if (email === appState.currentAccount.email) {
    showFormFeedback(
      emailFeedback,
      "Укажите новую почту, отличную от текущей."
    );
    return;
  }

  const duplicate = appState.accounts.some(
    (item) => item.id !== appState.currentAccount.id && item.email === email
  );

  if (duplicate) {
    showFormFeedback(
      emailFeedback,
      "Эта почта уже используется другим игроком."
    );
    return;
  }

  appState.currentAccount.email = email;
  ensureAccountDefaults(appState.currentAccount);
  updateDashboardData();
  persistCurrentUser();
  showFormFeedback(emailFeedback, "Почта обновлена.", true);
  showFeedback("Почта успешно обновлена.");
  setTimeout(() => {
    closeModal(emailModal);
  }, 900);
}

function handleWithdraw() {
  if (!appState.isAuthenticated || !appState.currentAccount) {
    showFeedback("Авторизуйтесь, чтобы управлять балансом.");
    hideDropdown();
    return;
  }
  if (roundCurrency(appState.currentAccount.balance ?? 0) < 1000) {
    showFeedback("Недостаточно средств для вывода.");
    hideDropdown();
    return;
  }
  appState.currentAccount.balance = roundCurrency(
    (appState.currentAccount.balance ?? 0) - 1000
  );
  appState.currentAccount.streak = 0;
  showFeedback(`Вы вывели ${formatCurrency(1000)}.`);
  updateDashboardData();
  persistCurrentUser();
  hideDropdown();
}

function handleLogin(event) {
  event.preventDefault();
  if (!loginForm) return;
  const formData = new FormData(loginForm);
  const email = formData.get("email")?.toString().trim().toLowerCase();
  const password = formData.get("password")?.toString();

  const account = appState.accounts.find(
    (item) => item.email === email && item.password === password
  );

  if (!account) {
    showFormFeedback(loginFeedback, "Неверная почта или пароль.");
    return;
  }

  ensureAccountDefaults(account);
  account.lastLogin = new Date().toISOString();
  appState.currentAccount = account;
  appState.isAuthenticated = true;
  loginForm.reset();
  hideFormFeedback(loginFeedback);
  persistCurrentUser();
  setAuthenticatedState(true);
  updateDashboardData();
  showPage("dashboard");
}

function handleRegister(event) {
  event.preventDefault();
  if (!registerForm) return;
  const formData = new FormData(registerForm);
  const nickname = formData.get("nickname")?.toString().trim();
  const email = formData.get("email")?.toString().trim().toLowerCase();
  const password = formData.get("password")?.toString();
  const confirm = formData.get("confirm")?.toString();
  const rulesAccepted = formData.get("rules") === "on";

  if (!nickname || nickname.length < 3) {
    showFormFeedback(
      registerFeedback,
      "Никнейм должен содержать не менее 3 символов."
    );
    return;
  }

  if (!email || !password || !confirm) {
    showFormFeedback(registerFeedback, "Заполните все поля.");
    return;
  }

  if (password.length < 6) {
    showFormFeedback(
      registerFeedback,
      "Пароль должен содержать не менее 6 символов."
    );
    return;
  }

  if (password !== confirm) {
    showFormFeedback(registerFeedback, "Пароли должны совпадать.");
    return;
  }

  if (!rulesAccepted) {
    showFormFeedback(registerFeedback, "Подтвердите согласие с правилами.");
    return;
  }

  const nicknameLower = nickname.toLowerCase();
  const duplicate = appState.accounts.some(
    (item) => item.email === email || item.nickname.toLowerCase() === nicknameLower
  );

  if (duplicate) {
    showFormFeedback(
      registerFeedback,
      "Аккаунт с такими данными уже существует."
    );
    return;
  }

  const newAccount = {
    id: generateAccountId(),
    nickname,
    email,
    password,
    balance: 0,
    wins: 0,
    favouriteGame: "—",
    vip: "Новичок",
    streak: 0,
    level: 1,
    experience: 0,
    lastLogin: null,
    preferences: { liveTickerEnabled: true },
  };

  ensureAccountDefaults(newAccount);
  appState.accounts.push(newAccount);
  saveAccounts();
  registerForm.reset();
  showFormFeedback(
    registerFeedback,
    "Аккаунт создан! Теперь вы можете войти.",
    true
  );
  setTimeout(() => {
    toggleAuthView("login");
    hideFormFeedback(registerFeedback);
  }, 1600);
}

function handleLogout() {
  appState.isAuthenticated = false;
  appState.currentAccount = null;
  appState.activeGame = null;
  clearCurrentUser();
  stopRouletteCycle();
  initializeBlackjackState();
  hideDropdown();
  setAuthenticatedState(false);
  updateDashboardData();
  toggleAuthView("login");
  showPage("home");
}

function setAuthenticatedState(isAuthenticated) {
  userControls?.classList.toggle("hidden", !isAuthenticated);
  updateNavState();
}

function openGame(gameKey) {
  if (!appState.isAuthenticated) {
    toggleAuthView("login");
    showPage("auth");
    showFormFeedback(loginFeedback, "Авторизуйтесь, чтобы открыть игру.");
    return;
  }
  if (gameKey === "roulette") {
    showPage("roulette");
  } else if (gameKey === "blackjack") {
    showPage("blackjack");
    initializeBlackjackState();
  }
}

function initializeAuth() {
  appState.accounts = loadAccounts();
  const storedId = localStorage.getItem(CURRENT_USER_KEY);
  if (storedId) {
    const account = appState.accounts.find((item) => item.id === storedId);
    if (account) {
      ensureAccountDefaults(account);
      appState.currentAccount = account;
      appState.isAuthenticated = true;
      setAuthenticatedState(true);
      updateDashboardData();
    }
  }
}

modeToggle?.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  body.classList.toggle("light-mode");
  const isDark = body.classList.contains("dark-mode");
  modeToggle.querySelector(".toggle-icon").textContent = isDark ? "☀️" : "🌙";
});

tabs.forEach((tab) => {
  if (!tab.dataset.tab) return;
  tab.addEventListener("click", () => {
    const target = tab.dataset.tab;
    tabs.forEach((btn) => {
      if (btn.dataset.tab) {
        btn.classList.remove("active");
      }
    });
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
    if (target === "auth") {
      toggleAuthView("login");
    }
    showPage(target);
  });
});

brandButton?.addEventListener("click", () => {
  showPage("home");
});

backButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.dataset.target || "home";
    showPage(target);
  });
});

loginForm?.addEventListener("submit", handleLogin);
registerForm?.addEventListener("submit", handleRegister);
profileEditForm?.addEventListener("submit", handleProfileUpdate);
passwordChangeForm?.addEventListener("submit", handlePasswordChange);
emailChangeForm?.addEventListener("submit", handleEmailChange);
logoutButton?.addEventListener("click", handleLogout);
liveTickerToggle?.addEventListener("change", handleLiveTickerToggleChange);

historyRefreshButton?.addEventListener("click", () => {
  if (!appState.currentAccount) {
    showFeedback("Авторизуйтесь, чтобы просматривать историю игр.");
    return;
  }
  renderGameHistory(appState.currentAccount);
  showFeedback("История обновлена.");
});

changePasswordButton?.addEventListener("click", () => {
  if (!appState.currentAccount) {
    showFeedback("Авторизуйтесь, чтобы изменить пароль.");
    return;
  }
  openModal(passwordModal);
});

changeEmailButton?.addEventListener("click", () => {
  if (!appState.currentAccount) {
    showFeedback("Авторизуйтесь, чтобы изменить почту.");
    return;
  }
  openModal(emailModal);
});

modalCloseButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal-overlay");
    closeModal(modal);
  });
});

[passwordModal, emailModal].forEach((modal) => {
  modal?.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal(modal);
    }
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  if (passwordModal && !passwordModal.classList.contains("hidden")) {
    closeModal(passwordModal);
    return;
  }
  if (emailModal && !emailModal.classList.contains("hidden")) {
    closeModal(emailModal);
  }
});

authSwitchButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const view = button.dataset.target || "login";
    toggleAuthView(view);
  });
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
    if (type === "deposit") {
      handleDeposit();
    } else if (type === "withdraw") {
      handleWithdraw();
    }
  });
});

dashboardLink?.addEventListener("click", () => {
  if (!appState.isAuthenticated) {
    toggleAuthView("login");
    showPage("auth");
    setActiveNav("auth");
    return;
  }
  showPage("dashboard");
});

rouletteForm?.addEventListener("submit", handleRouletteBet);
rouletteForm?.addEventListener("reset", resetQuickBetButtons);

betQuickButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const amount = Number(button.dataset.amount);
    if (Number.isFinite(amount) && rouletteStakeInput) {
      rouletteStakeInput.value = amount.toString();
      rouletteStakeInput.dispatchEvent(new Event("input", { bubbles: true }));
    }
    syncQuickBetButtons(amount);
  });
});

rouletteStakeInput?.addEventListener("input", () => {
  const value = Number(rouletteStakeInput.value);
  if (Number.isFinite(value)) {
    syncQuickBetButtons(value);
  } else {
    resetQuickBetButtons();
  }
});

blackjackForm?.addEventListener("submit", handleBlackjackDeal);
blackjackDealButton?.addEventListener("click", handleBlackjackDeal);
blackjackHitButton?.addEventListener("click", handleBlackjackHit);
blackjackStandButton?.addEventListener("click", handleBlackjackStand);
blackjackDoubleButton?.addEventListener("click", handleBlackjackDouble);
blackjackSplitButton?.addEventListener("click", handleBlackjackSplit);

blackjackStakeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    adjustBlackjackStake(button.dataset.action);
  });
});

blackjackStakeInput?.addEventListener("input", updateBlackjackStakeDisplay);
blackjackLiveToggle?.addEventListener("change", () => {
  toggleBlackjackLive(blackjackLiveToggle.checked);
});

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
  "🃏 RapidAce собрал 21 на первом ходу!",
  "🎲 NovaLight поставил 2 000₽ на красное!",
];

function appendTickerMessage() {
  if (!tickerTrack) return;
  const span = document.createElement("span");
  span.textContent = randomChoice(feedMessages);
  span.classList.add("ticker-fade-in");
  tickerTrack.appendChild(span);
  if (tickerTrack.children.length > 12) {
    tickerTrack.removeChild(tickerTrack.firstElementChild);
  }
}

setInterval(appendTickerMessage, 6500);

toggleAuthView("login");
initializeAuth();
updateDashboardData();
updateNavState();
resetRouletteUI();
renderRouletteHistory();
initializeBlackjackState();
showPage("home");

document.querySelector(".switch-option.active")?.click();
