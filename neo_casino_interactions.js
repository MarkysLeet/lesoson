const body = document.body;
const tabs = document.querySelectorAll(".menu-item");
const tabContents = document.querySelectorAll(".tab-content");
const switchOptions = document.querySelectorAll(".switch-option");
const gameCards = document.querySelectorAll(".game-card");
const gameLaunchButtons = document.querySelectorAll(".game-launch");
const tickerTrack = document.getElementById("tickerTrack");
const navLinks = document.querySelectorAll(".nav-link");
const pageSections = document.querySelectorAll("[data-page]");
const userControls = document.getElementById("userControls");
const dashboardLink = document.getElementById("dashboardLink");
const balanceButton = document.getElementById("balanceButton");
const balanceDropdown = document.getElementById("balanceDropdown");
const balanceMenu = document.querySelector(".balance-menu");
const balanceFeedback = document.getElementById("balanceFeedback");
const balanceAmount = document.getElementById("balanceAmount");
const dashboardBalanceAmount = document.querySelector(".balance-amount");
const welcomeElement = document.querySelector(".welcome");
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
const rouletteOtherBets = document.getElementById("rouletteOtherBets");
const rouletteStartButton = document.getElementById("rouletteStart");

const crashRoot = document.getElementById("crashGameRoot");
const crashHashDisplay = document.getElementById("crashHashDisplay");
const backButtons = document.querySelectorAll(".back-to-lobby");
const languageSelect = document.getElementById("languageSelect");

const ACCOUNTS_KEY = "neoCasinoAccounts";
const CURRENT_USER_KEY = "neoCasinoCurrentUser";
const OTHER_BETS_INTERVAL = 5200;
const LANGUAGE_KEY = "neoCasinoLanguage";

const supportedLanguages = {
  ru: { label: "Русский", locale: "ru-RU" },
  tr: { label: "Türkçe", locale: "tr-TR" },
  en: { label: "English", locale: "en-US" },
};

const translations = {
  ru: {
    "header.brand": "NeoCasino",
    "nav.home": "Главная",
    "nav.auth": "Авторизация",
    "header.dashboard": "Личный кабинет",
    "header.balance": "Баланс:",
    "dropdown.deposit": "Пополнить",
    "dropdown.withdraw": "Вывести",
    "auth.heading": "Добро пожаловать в NeoCasino",
    "auth.login.title": "Вход в аккаунт",
    "auth.login.subtitle": "Используйте зарегистрированную почту и пароль.",
    "auth.email": "Почта",
    "auth.emailPlaceholder": "Введите почту",
    "auth.password": "Пароль",
    "auth.passwordPlaceholder": "Введите пароль",
    "auth.login.submit": "Войти",
    "auth.login.switch": "Регистрация",
    "auth.register.title": "Регистрация",
    "auth.register.subtitle": "Создайте аккаунт, чтобы начать играть и управлять балансом.",
    "auth.nickname": "Никнейм",
    "auth.nicknamePlaceholder": "Ваш никнейм",
    "auth.emailExample": "name@example.com",
    "auth.passwordCreate": "Создайте пароль",
    "auth.confirm": "Подтверждение пароля",
    "auth.confirmPlaceholder": "Повторите пароль",
    "auth.rules": "Я подтверждаю, что ознакомлен и принимаю правила казино",
    "auth.register.submit": "Создать аккаунт",
    "auth.register.switch": "Назад к входу",
    "auth.demo": "Это демо-сайт для развлекательных целей",
    "auth.guest": "Гость",
    "dashboard.welcome": "Добро пожаловать, <span class=\"accent\">{{name}}</span>",
    "dashboard.balanceLabel": "Баланс",
    "dashboard.deposit": "Пополнить",
    "dashboard.withdraw": "Вывести",
    "menu.profile": "Профиль",
    "menu.security": "Безопасность",
    "menu.notifications": "Уведомления",
    "menu.vip": "Программа",
    "menu.missions": "Миссии",
    "menu.settings": "Настройки",
    "menu.logout": "Выйти",
    "profile.stats": "Статистика",
    "profile.wins": "Побед: <span id=\"profileWins\">{{value}}</span>",
    "profile.favourite": "Любимая игра: <span id=\"profileFavourite\">{{value}}</span>",
    "profile.vip": "VIP-уровень: <span id=\"profileVip\">{{value}}</span>",
    "profile.activity": "Активность",
    "profile.lastVisit": "Последний визит: <span id=\"profileVisit\">{{value}}</span>",
    "profile.streak": "Серия побед: <span id=\"profileStreak\">{{value}}</span>",
    "profile.level": "Уровень {{level}}",
    "profile.experience": "Опыт {{current}}/100",
    "profile.none": "—",
    "profile.vipDefault": "Новичок",
    "security.title": "Безопасность",
    "security.mfa.title": "Двухфакторная аутентификация",
    "security.mfa.text": "Добавьте дополнительный уровень защиты аккаунта.",
    "security.mfa.button": "Настроить",
    "security.password.title": "Смена пароля",
    "security.password.text": "Рекомендуем обновлять пароль каждые 3 месяца.",
    "security.password.button": "Изменить",
    "notifications.title": "Настройки уведомлений",
    "notifications.promos": "Промо-акции и бонусы",
    "notifications.system": "Системные уведомления",
    "notifications.events": "Игровые события",
    "vip.title": "Программа лояльности",
    "vip.silver": "Кэшбек 5%, быстрые выплаты.",
    "vip.gold": "Персональный менеджер, эксклюзивные турниры.",
    "vip.diamond": "VIP-ивенты, премиальные подарки, увеличенный кэшбек.",
    "missions.title": "Дневные миссии",
    "missions.first.title": "Сделай 3 ставки — получи бонус!",
    "missions.first.progress": "Прогресс: 2/3",
    "missions.second.title": "Выиграй в слотах 5 раз",
    "missions.second.progress": "Прогресс: 1/5",
    "settings.title": "Настройки",
    "settings.language": "Язык интерфейса",
    "settings.language.ru": "Русский",
    "settings.language.tr": "Türkçe",
    "settings.language.en": "English",
    "settings.note": "Выберите язык интерфейса. Настройки сохранятся для следующих посещений.",
    "home.hero.title": "NeoCasino — почувствуй азарт",
    "home.hero.text": "Геймифицированный портал с честными выигрышами, ежедневными миссиями и живой атмосферой.",
    "home.hero.play": "Играть сейчас",
    "home.hero.more": "Узнать больше",
    "home.filters": "Категории игр",
    "home.filters.online": "Онлайн",
    "home.filters.offline": "Оффлайн",
    "games.roulette.title": "Онлайн Рулетка",
    "games.crash.title": "Rocket Crash",
    "games.crash.description": "Разгоняйтесь вместе с ракетой и забирайте ставку до внезапного краша.",
    "games.fruit.title": "Fruit Spin",
    "games.neon.title": "Neon Crash",
    "games.poker.title": "Turbo Poker",
    "games.wheel.title": "Lucky Wheel",
    "games.play": "Играть",
    "games.soon": "Скоро",
    "footer.vip.title": "Программа лояльности",
    "footer.vip.text": "Собирайте опыт, открывайте уровни Silver, Gold и Diamond, получайте эксклюзивные бонусы.",
    "footer.missions.title": "Дневные миссии",
    "footer.missions.text": "Ежедневно выполняйте задания и забирайте дополнительные награды.",
    "chat.label": "Чат-поддержка",
    "chat.button": "Открыть чат",
    "ticker.messages.0": "🎉 Игрок LuckyFox выиграл 1 200₺ в Fruit Spin!",
    "ticker.messages.1": "🏅 User_234 сделал ставку 500₺ в Рулетке!",
    "ticker.messages.2": "💎 DiamondKing забрал 3 200₺ в Rocket Crash!",
    "ticker.messages.3": "🔥 NeoQueen сорвала джекпот 3 400₺ в Turbo Poker!",
    "ticker.messages.4": "⚡ Player_81 активировал бонус миссий!",
    "ticker.messages.5": "🎯 User_Mars выполнил миссию «Сделай 3 ставки»",
    "ticker.messages.6": "🃏 RapidAce собрал 21 на первом ходу!",
    "ticker.messages.7": "🎲 NovaLight поставил 2 000₺ на красное!",
    "roulette.back": "← В лобби",
    "roulette.title": "Онлайн Рулетка",
    "roulette.subtitle": "Сделайте ставку на один цвет и запустите колесо удачи.",
    "roulette.stakeLabel": "Размер ставки (₺)",
    "roulette.stakePlaceholder": "Минимум 100₺",
    "roulette.colors": "Выбор цвета",
    "roulette.red": "Красное",
    "roulette.black": "Чёрное",
    "roulette.green": "Зелёное",
    "roulette.submit": "Сделать ставку",
    "roulette.sidebarTitle": "Ставки других игроков",
    "roulette.status.idle": "Ставка ещё не сделана.",
    "roulette.status.spinning": "Колесо вращается...",
    "roulette.result.zero": "Выпало зеро ({{color}}).",
    "roulette.result.number": "Выпало число {{number}} ({{color}}).",
    "crash.back": "← В лобби",
    "crash.title": "Rocket Crash",
    "crash.subtitle": "Делайте ставку, задайте авто-кэшаут и успейте забрать выигрыш до краша ракеты.",
    "crash.loading": "Загрузка реактивного интерфейса…",
    "crash.roundLabel": "Раунд №{number}",
    "crash.balanceLabel": "Баланс",
    "crash.status.flight": "Полёт · {multiplier}×",
    "crash.status.crashed": "Краш на {multiplier}×",
    "crash.status.next": "Следующий раунд через {seconds} с",
    "crash.status.countdown": "Старт через {seconds} с",
    "crash.currentMultiplier": "Текущий множитель",
    "crash.targetMultiplier": "Краш-поинт",
    "crash.betAmount": "Ставка (₺)",
    "crash.adjustDown": "Уменьшить ставку",
    "crash.adjustUp": "Увеличить ставку",
    "crash.autoCashout": "Авто-кэшаут (×)",
    "crash.autoCashoutHint": "Автоматически фиксирует выигрыш при достижении выбранного множителя.",
    "crash.autoCashoutLocked": "Авто-кэшаут недоступен во время полёта.",
    "crash.btn.placeBet": "Поставить",
    "crash.btn.cashOutAt": "Забрать {multiplier}×",
    "crash.quickActions": "Быстрые действия",
    "crash.repeatBet": "Повтор",
    "crash.doubleBet": "Удвоить",
    "crash.resetDemo": "Сбросить демо",
    "crash.soundOn": "Звук включён",
    "crash.soundOff": "Звук выключен",
    "crash.historyTitle": "История раундов",
    "crash.historyEmpty": "История пока пуста.",
    "crash.historyRound": "Раунд №{number}",
    "crash.historyWin": "Выигрыш",
    "crash.historyLose": "Поражение",
    "crash.leaderboardTitle": "Лучшие кэшауты",
    "crash.toast.betAccepted": "Ставка {amount} принята.",
    "crash.toast.betRejected": "Ставка не принята — дождитесь следующего старта.",
    "crash.toast.cashout": "Вы забрали {amount} при {multiplier}×!",
    "crash.toast.loss": "Краш на {multiplier}×. Ставка сгорела.",
    "crash.errors.betTooLow": "Минимальная ставка {value}.",
    "crash.noAccount": "Авторизуйтесь, чтобы сделать ставку.",
    "crash.demoBalanceReset": "Баланс сброшен до {amount}.",
    "crash.responsibleNote": "Demo-режим. Обучающие цели. Без денежных операций.",
    "crash.fairnessDisclaimer": "Demo-режим. Обучающие цели. Без денежных операций.",
    "crash.hashLabel": "Раунд №{round} — SHA256: {hash}",
    "crash.hashTooltip": "Серверный сид: {server}\nКлиентский сид: {client}\nNonce: {nonce}",
    "messages.authBet": "Авторизуйтесь, чтобы сделать ставку.",
    "messages.minimumStake": "Минимальная ставка 100₺.",
    "messages.colorRequired": "Выберите один цвет для ставки.",
    "messages.balanceInsufficient": "Недостаточно средств на балансе.",
    "messages.authBalance": "Авторизуйтесь, чтобы управлять балансом.",
    "messages.depositSuccess": "Баланс пополнен на 1 000₺",
    "messages.withdrawInsufficient": "Недостаточно средств для вывода.",
    "messages.withdrawSuccess": "Вы вывели 1 000₺",
    "messages.loginInvalid": "Неверная почта или пароль.",
    "messages.nicknameShort": "Никнейм должен содержать не менее 3 символов.",
    "messages.fillAll": "Заполните все поля.",
    "messages.passwordShort": "Пароль должен содержать не менее 6 символов.",
    "messages.passwordMismatch": "Пароли должны совпадать.",
    "messages.rulesRequired": "Подтвердите согласие с правилами.",
    "messages.accountExists": "Аккаунт с такими данными уже существует.",
    "messages.accountCreated": "Аккаунт создан! Теперь вы можете войти.",
    "messages.authGame": "Авторизуйтесь, чтобы открыть игру.",
    "messages.rouletteTryAgain": "Не повезло в этот раз. Попробуйте снова.",
    "messages.authRequired": "Авторизуйтесь, чтобы продолжить.",
    "messages.winAmount": "Вы выиграли {{amount}}!",
  },
  en: {
    "header.brand": "NeoCasino",
    "nav.home": "Home",
    "nav.auth": "Sign in",
    "header.dashboard": "Dashboard",
    "header.balance": "Balance:",
    "dropdown.deposit": "Deposit",
    "dropdown.withdraw": "Withdraw",
    "auth.heading": "Welcome to NeoCasino",
    "auth.login.title": "Account login",
    "auth.login.subtitle": "Use your registered email and password.",
    "auth.email": "Email",
    "auth.emailPlaceholder": "Enter email",
    "auth.password": "Password",
    "auth.passwordPlaceholder": "Enter password",
    "auth.login.submit": "Sign in",
    "auth.login.switch": "Register",
    "auth.register.title": "Registration",
    "auth.register.subtitle": "Create an account to start playing and manage your balance.",
    "auth.nickname": "Nickname",
    "auth.nicknamePlaceholder": "Your nickname",
    "auth.emailExample": "name@example.com",
    "auth.passwordCreate": "Create a password",
    "auth.confirm": "Confirm password",
    "auth.confirmPlaceholder": "Repeat password",
    "auth.rules": "I confirm that I have read and accept the casino rules",
    "auth.register.submit": "Create account",
    "auth.register.switch": "Back to login",
    "auth.demo": "This is a demo site for entertainment purposes",
    "auth.guest": "Guest",
    "dashboard.welcome": "Welcome, <span class=\"accent\">{{name}}</span>",
    "dashboard.balanceLabel": "Balance",
    "dashboard.deposit": "Deposit",
    "dashboard.withdraw": "Withdraw",
    "menu.profile": "Profile",
    "menu.security": "Security",
    "menu.notifications": "Notifications",
    "menu.vip": "Program",
    "menu.missions": "Missions",
    "menu.settings": "Settings",
    "menu.logout": "Log out",
    "profile.stats": "Statistics",
    "profile.wins": "Wins: <span id=\"profileWins\">{{value}}</span>",
    "profile.favourite": "Favourite game: <span id=\"profileFavourite\">{{value}}</span>",
    "profile.vip": "VIP level: <span id=\"profileVip\">{{value}}</span>",
    "profile.activity": "Activity",
    "profile.lastVisit": "Last visit: <span id=\"profileVisit\">{{value}}</span>",
    "profile.streak": "Win streak: <span id=\"profileStreak\">{{value}}</span>",
    "profile.level": "Level {{level}}",
    "profile.experience": "Experience {{current}}/100",
    "profile.none": "—",
    "profile.vipDefault": "Rookie",
    "security.title": "Security",
    "security.mfa.title": "Two-factor authentication",
    "security.mfa.text": "Add an extra layer of protection to your account.",
    "security.mfa.button": "Set up",
    "security.password.title": "Change password",
    "security.password.text": "We recommend updating your password every 3 months.",
    "security.password.button": "Change",
    "notifications.title": "Notification settings",
    "notifications.promos": "Promotions and bonuses",
    "notifications.system": "System notifications",
    "notifications.events": "Game events",
    "vip.title": "Loyalty programme",
    "vip.silver": "5% cashback, fast payouts.",
    "vip.gold": "Personal manager, exclusive tournaments.",
    "vip.diamond": "VIP events, premium gifts, higher cashback.",
    "missions.title": "Daily missions",
    "missions.first.title": "Place 3 bets — grab a bonus!",
    "missions.first.progress": "Progress: 2/3",
    "missions.second.title": "Win in slots 5 times",
    "missions.second.progress": "Progress: 1/5",
    "settings.title": "Settings",
    "settings.language": "Interface language",
    "settings.language.ru": "Russian",
    "settings.language.tr": "Turkish",
    "settings.language.en": "English",
    "settings.note": "Choose a language for the interface. Your preference will be saved for future visits.",
    "home.hero.title": "NeoCasino — feel the thrill",
    "home.hero.text": "A gamified portal with fair wins, daily missions, and a lively atmosphere.",
    "home.hero.play": "Play now",
    "home.hero.more": "Learn more",
    "home.filters": "Game categories",
    "home.filters.online": "Online",
    "home.filters.offline": "Offline",
    "games.roulette.title": "Online Roulette",
    "games.crash.title": "Rocket Crash",
    "games.crash.description": "Ride the rocket and cash out before it explodes.",
    "games.fruit.title": "Fruit Spin",
    "games.neon.title": "Neon Crash",
    "games.poker.title": "Turbo Poker",
    "games.wheel.title": "Lucky Wheel",
    "games.play": "Play",
    "games.soon": "Coming soon",
    "footer.vip.title": "Loyalty programme",
    "footer.vip.text": "Earn experience, unlock Silver, Gold, and Diamond levels, and receive exclusive bonuses.",
    "footer.missions.title": "Daily missions",
    "footer.missions.text": "Complete tasks every day and claim extra rewards.",
    "chat.label": "Chat support",
    "chat.button": "Open chat",
    "ticker.messages.0": "🎉 Player LuckyFox won 1 200₺ in Fruit Spin!",
    "ticker.messages.1": "🏅 User_234 placed a 500₺ bet on Roulette!",
    "ticker.messages.2": "💎 DiamondKing cashed out 3 200₺ in Rocket Crash!",
    "ticker.messages.3": "🔥 NeoQueen hit the 3 400₺ jackpot in Turbo Poker!",
    "ticker.messages.4": "⚡ Player_81 activated the missions bonus!",
    "ticker.messages.5": "🎯 User_Mars completed the \"Place 3 bets\" mission",
    "ticker.messages.6": "🃏 RapidAce hit 21 on the first draw!",
    "ticker.messages.7": "🎲 NovaLight placed a 2 000₺ bet on red!",
    "roulette.back": "← Back to lobby",
    "roulette.title": "Online Roulette",
    "roulette.subtitle": "Place your bet on a colour and spin the wheel of fortune.",
    "roulette.stakeLabel": "Bet amount (₺)",
    "roulette.stakePlaceholder": "Minimum 100₺",
    "roulette.colors": "Colour choice",
    "roulette.red": "Red",
    "roulette.black": "Black",
    "roulette.green": "Green",
    "roulette.submit": "Place bet",
    "roulette.sidebarTitle": "Other players' bets",
    "roulette.status.idle": "No bet placed yet.",
    "roulette.status.spinning": "The wheel is spinning...",
    "roulette.result.zero": "Zero rolled ({{color}}).",
    "roulette.result.number": "Number {{number}} rolled ({{color}}).",
    "crash.back": "← Back to lobby",
    "crash.title": "Rocket Crash",
    "crash.subtitle": "Set your bet and auto cashout, then grab the win before the rocket crashes.",
    "crash.loading": "Booting rocket interface…",
    "crash.roundLabel": "Round #{number}",
    "crash.balanceLabel": "Balance",
    "crash.status.flight": "In flight · {multiplier}×",
    "crash.status.crashed": "Crash at {multiplier}×",
    "crash.status.next": "Next round in {seconds}s",
    "crash.status.countdown": "Launching in {seconds}s",
    "crash.currentMultiplier": "Current multiplier",
    "crash.targetMultiplier": "Crash point",
    "crash.betAmount": "Bet amount (₺)",
    "crash.adjustDown": "Decrease bet",
    "crash.adjustUp": "Increase bet",
    "crash.autoCashout": "Auto cashout (×)",
    "crash.autoCashoutHint": "Automatically cash out once the multiplier reaches the chosen value.",
    "crash.autoCashoutLocked": "Auto cashout is locked during flight.",
    "crash.btn.placeBet": "Place bet",
    "crash.btn.cashOutAt": "Cash Out {multiplier}×",
    "crash.quickActions": "Quick actions",
    "crash.repeatBet": "Repeat",
    "crash.doubleBet": "Double",
    "crash.resetDemo": "Reset demo",
    "crash.soundOn": "Sound on",
    "crash.soundOff": "Sound off",
    "crash.historyTitle": "Recent rounds",
    "crash.historyEmpty": "No rounds yet.",
    "crash.historyRound": "Round #{number}",
    "crash.historyWin": "Win",
    "crash.historyLose": "Loss",
    "crash.leaderboardTitle": "Latest cashouts",
    "crash.toast.betAccepted": "Bet {amount} accepted.",
    "crash.toast.betRejected": "Bet not accepted — wait for the next launch.",
    "crash.toast.cashout": "You cashed out {amount} at {multiplier}×!",
    "crash.toast.loss": "Crashed at {multiplier}×. Bet lost.",
    "crash.errors.betTooLow": "Minimum bet is {value}.",
    "crash.noAccount": "Sign in to place a bet.",
    "crash.demoBalanceReset": "Demo balance restored to {amount}.",
    "crash.responsibleNote": "Demo mode. Educational purposes. No monetary operations.",
    "crash.fairnessDisclaimer": "Demo mode. Educational purposes. No monetary operations.",
    "crash.hashLabel": "Round #{round} — SHA256: {hash}",
    "crash.hashTooltip": "Server seed: {server}\nClient seed: {client}\nNonce: {nonce}",
    "messages.authBet": "Sign in to place a bet.",
    "messages.minimumStake": "Minimum stake is 100₺.",
    "messages.colorRequired": "Choose one colour for your bet.",
    "messages.balanceInsufficient": "Insufficient balance.",
    "messages.authBalance": "Sign in to manage your balance.",
    "messages.depositSuccess": "Balance topped up by 1 000₺",
    "messages.withdrawInsufficient": "Not enough funds to withdraw.",
    "messages.withdrawSuccess": "You withdrew 1 000₺",
    "messages.loginInvalid": "Incorrect email or password.",
    "messages.nicknameShort": "Nickname must be at least 3 characters.",
    "messages.fillAll": "Fill in all fields.",
    "messages.passwordShort": "Password must be at least 6 characters.",
    "messages.passwordMismatch": "Passwords must match.",
    "messages.rulesRequired": "Confirm that you accept the rules.",
    "messages.accountExists": "An account with these details already exists.",
    "messages.accountCreated": "Account created! You can now sign in.",
    "messages.authGame": "Sign in to open the game.",
    "messages.rouletteTryAgain": "No luck this time. Try again.",
    "messages.authRequired": "Sign in to continue.",
    "messages.winAmount": "You won {{amount}}!",
  },
  tr: {
    "header.brand": "NeoCasino",
    "nav.home": "Ana sayfa",
    "nav.auth": "Giriş",
    "header.dashboard": "Kontrol paneli",
    "header.balance": "Bakiye:",
    "dropdown.deposit": "Para yatır",
    "dropdown.withdraw": "Para çek",
    "auth.heading": "NeoCasino'ya hoş geldiniz",
    "auth.login.title": "Hesaba giriş",
    "auth.login.subtitle": "Kayıtlı e-posta ve şifrenizi kullanın.",
    "auth.email": "E-posta",
    "auth.emailPlaceholder": "E-postanızı girin",
    "auth.password": "Şifre",
    "auth.passwordPlaceholder": "Şifrenizi girin",
    "auth.login.submit": "Giriş yap",
    "auth.login.switch": "Kayıt ol",
    "auth.register.title": "Kayıt",
    "auth.register.subtitle": "Oynamaya başlamak ve bakiyenizi yönetmek için hesap oluşturun.",
    "auth.nickname": "Kullanıcı adı",
    "auth.nicknamePlaceholder": "Kullanıcı adınız",
    "auth.emailExample": "name@example.com",
    "auth.passwordCreate": "Şifre oluşturun",
    "auth.confirm": "Şifreyi onaylayın",
    "auth.confirmPlaceholder": "Şifreyi tekrar girin",
    "auth.rules": "Kumarhane kurallarını okuduğumu ve kabul ettiğimi onaylıyorum",
    "auth.register.submit": "Hesap oluştur",
    "auth.register.switch": "Girişe dön",
    "auth.demo": "Bu site yalnızca eğlence amaçlı bir demodur",
    "auth.guest": "Misafir",
    "dashboard.welcome": "Hoş geldiniz, <span class=\"accent\">{{name}}</span>",
    "dashboard.balanceLabel": "Bakiye",
    "dashboard.deposit": "Para yatır",
    "dashboard.withdraw": "Para çek",
    "menu.profile": "Profil",
    "menu.security": "Güvenlik",
    "menu.notifications": "Bildirimler",
    "menu.vip": "Program",
    "menu.missions": "Görevler",
    "menu.settings": "Ayarlar",
    "menu.logout": "Çıkış",
    "profile.stats": "İstatistikler",
    "profile.wins": "Galibiyet: <span id=\"profileWins\">{{value}}</span>",
    "profile.favourite": "Favori oyun: <span id=\"profileFavourite\">{{value}}</span>",
    "profile.vip": "VIP seviyesi: <span id=\"profileVip\">{{value}}</span>",
    "profile.activity": "Aktivite",
    "profile.lastVisit": "Son ziyaret: <span id=\"profileVisit\">{{value}}</span>",
    "profile.streak": "Galibiyet serisi: <span id=\"profileStreak\">{{value}}</span>",
    "profile.level": "Seviye {{level}}",
    "profile.experience": "Deneyim {{current}}/100",
    "profile.none": "—",
    "profile.vipDefault": "Acemi",
    "security.title": "Güvenlik",
    "security.mfa.title": "İki faktörlü doğrulama",
    "security.mfa.text": "Hesabınıza ekstra güvenlik katmanı ekleyin.",
    "security.mfa.button": "Ayarla",
    "security.password.title": "Şifre değiştir",
    "security.password.text": "Şifrenizi her 3 ayda bir güncellemenizi öneririz.",
    "security.password.button": "Değiştir",
    "notifications.title": "Bildirim ayarları",
    "notifications.promos": "Promosyonlar ve bonuslar",
    "notifications.system": "Sistem bildirimleri",
    "notifications.events": "Oyun etkinlikleri",
    "vip.title": "Sadakat programı",
    "vip.silver": "%5 nakit iade, hızlı ödemeler.",
    "vip.gold": "Kişisel yönetici, özel turnuvalar.",
    "vip.diamond": "VIP etkinlikleri, özel hediyeler, yüksek nakit iade.",
    "missions.title": "Günlük görevler",
    "missions.first.title": "3 bahis yap — bonusu kap!",
    "missions.first.progress": "İlerleme: 2/3",
    "missions.second.title": "Slotlarda 5 kez kazan",
    "missions.second.progress": "İlerleme: 1/5",
    "settings.title": "Ayarlar",
    "settings.language": "Arayüz dili",
    "settings.language.ru": "Rusça",
    "settings.language.tr": "Türkçe",
    "settings.language.en": "İngilizce",
    "settings.note": "Arayüz dilini seçin. Tercihiniz sonraki ziyaretler için saklanır.",
    "home.hero.title": "NeoCasino — heyecanı hisset",
    "home.hero.text": "Adil kazançlar, günlük görevler ve canlı atmosfer sunan oyunlaştırılmış portal.",
    "home.hero.play": "Hemen oyna",
    "home.hero.more": "Daha fazla bilgi",
    "home.filters": "Oyun kategorileri",
    "home.filters.online": "Çevrimiçi",
    "home.filters.offline": "Çevrimdışı",
    "games.roulette.title": "Çevrimiçi Rulet",
    "games.crash.title": "Rocket Crash",
    "games.crash.description": "Roketle yüksel, çakılmadan önce kazancı yakala.",
    "games.fruit.title": "Fruit Spin",
    "games.neon.title": "Neon Crash",
    "games.poker.title": "Turbo Poker",
    "games.wheel.title": "Lucky Wheel",
    "games.play": "Oyna",
    "games.soon": "Yakında",
    "footer.vip.title": "Sadakat programı",
    "footer.vip.text": "Deneyim kazan, Silver, Gold ve Diamond seviyelerini aç ve özel bonuslar al.",
    "footer.missions.title": "Günlük görevler",
    "footer.missions.text": "Her gün görevleri tamamla ve ekstra ödüller kazan.",
    "chat.label": "Canlı destek",
    "chat.button": "Sohbeti aç",
    "ticker.messages.0": "🎉 LuckyFox oyuncusu Fruit Spin'de 1 200₺ kazandı!",
    "ticker.messages.1": "🏅 User_234 Rulet'te 500₺ bahis yaptı!",
    "ticker.messages.2": "💎 DiamondKing Rocket Crash'te 3 200₺ cash-out yaptı!",
    "ticker.messages.3": "🔥 NeoQueen Turbo Poker'de 3 400₺ jackpotunu aldı!",
    "ticker.messages.4": "⚡ Player_81 görev bonusunu aktifleştirdi!",
    "ticker.messages.5": "🎯 User_Mars '3 bahis yap' görevini tamamladı",
    "ticker.messages.6": "🃏 RapidAce ilk elde 21 yaptı!",
    "ticker.messages.7": "🎲 NovaLight kırmızıya 2 000₺ yatırdı!",
    "roulette.back": "← Lobiye dön",
    "roulette.title": "Çevrimiçi Rulet",
    "roulette.subtitle": "Bir renk seç ve şans çarkını çevir.",
    "roulette.stakeLabel": "Bahis tutarı (₺)",
    "roulette.stakePlaceholder": "Minimum 100₺",
    "roulette.colors": "Renk seçimi",
    "roulette.red": "Kırmızı",
    "roulette.black": "Siyah",
    "roulette.green": "Yeşil",
    "roulette.submit": "Bahsi yap",
    "roulette.sidebarTitle": "Diğer oyuncuların bahisleri",
    "roulette.status.idle": "Henüz bahis yapılmadı.",
    "roulette.status.spinning": "Çark dönüyor...",
    "roulette.result.zero": "Sıfır geldi ({{color}}).",
    "roulette.result.number": "{{number}} geldi ({{color}}).",
    "crash.back": "← Lobiye dön",
    "crash.title": "Rocket Crash",
    "crash.subtitle": "Bahsini ayarla, auto cash-out değerini seç ve roket çakılmadan kazancı al.",
    "crash.loading": "Roket arayüzü yükleniyor…",
    "crash.roundLabel": "Raunt #{number}",
    "crash.balanceLabel": "Bakiye",
    "crash.status.flight": "Uçuş · {multiplier}×",
    "crash.status.crashed": "{multiplier}× değerinde çakıldı",
    "crash.status.next": "Sonraki raunt {seconds} sn sonra",
    "crash.status.countdown": "Kalkışa {seconds} sn",
    "crash.currentMultiplier": "Anlık çarpan",
    "crash.targetMultiplier": "Çarpışma noktası",
    "crash.betAmount": "Bahis tutarı (₺)",
    "crash.adjustDown": "Bahsi azalt",
    "crash.adjustUp": "Bahsi artır",
    "crash.autoCashout": "Auto cash-out (×)",
    "crash.autoCashoutHint": "Çarpan seçilen değere ulaştığında kazancı otomatik olarak alır.",
    "crash.autoCashoutLocked": "Uçuş sırasında auto cash-out kilitlidir.",
    "crash.btn.placeBet": "Bahsi yap",
    "crash.btn.cashOutAt": "{multiplier}× çarpanında al",
    "crash.quickActions": "Hızlı işlemler",
    "crash.repeatBet": "Tekrarla",
    "crash.doubleBet": "İkiye katla",
    "crash.resetDemo": "Demo bakiyeyi sıfırla",
    "crash.soundOn": "Ses açık",
    "crash.soundOff": "Ses kapalı",
    "crash.historyTitle": "Son rauntlar",
    "crash.historyEmpty": "Henüz kayıt yok.",
    "crash.historyRound": "Raunt #{number}",
    "crash.historyWin": "Kazanç",
    "crash.historyLose": "Kayıp",
    "crash.leaderboardTitle": "Son cash-out'lar",
    "crash.toast.betAccepted": "{amount} tutarındaki bahis kabul edildi.",
    "crash.toast.betRejected": "Bahis kabul edilmedi — bir sonraki kalkışı bekleyin.",
    "crash.toast.cashout": "{multiplier}× çarpanında {amount} aldınız!",
    "crash.toast.loss": "{multiplier}× değerinde çakıldı. Bahis kaybedildi.",
    "crash.errors.betTooLow": "Minimum bahis {value}.",
    "crash.noAccount": "Bahis yapmak için giriş yapın.",
    "crash.demoBalanceReset": "Demo bakiye {amount} olarak sıfırlandı.",
    "crash.responsibleNote": "Demo mod. Eğitim amaçlıdır. Para işlemi yoktur.",
    "crash.fairnessDisclaimer": "Demo mod. Eğitim amaçlıdır. Para işlemi yoktur.",
    "crash.hashLabel": "Raunt #{round} — SHA256: {hash}",
    "crash.hashTooltip": "Sunucu tohum: {server}\nİstemci tohum: {client}\nNonce: {nonce}",
    "messages.authBet": "Bahis yapmak için giriş yapın.",
    "messages.minimumStake": "Minimum bahis 100₺.",
    "messages.colorRequired": "Bahsiniz için bir renk seçin.",
    "messages.balanceInsufficient": "Bakiyeniz yetersiz.",
    "messages.authBalance": "Bakiyenizi yönetmek için giriş yapın.",
    "messages.depositSuccess": "Bakiyenize 1 000₺ eklendi",
    "messages.withdrawInsufficient": "Çekim için yeterli bakiye yok.",
    "messages.withdrawSuccess": "1 000₺ çektiniz",
    "messages.loginInvalid": "E-posta veya şifre hatalı.",
    "messages.nicknameShort": "Kullanıcı adı en az 3 karakter olmalı.",
    "messages.fillAll": "Tüm alanları doldurun.",
    "messages.passwordShort": "Şifre en az 6 karakter olmalı.",
    "messages.passwordMismatch": "Şifreler aynı olmalı.",
    "messages.rulesRequired": "Kuralları kabul ettiğinizi onaylayın.",
    "messages.accountExists": "Bu bilgilerle bir hesap zaten var.",
    "messages.accountCreated": "Hesap oluşturuldu! Artık giriş yapabilirsiniz.",
    "messages.authGame": "Oyunu açmak için giriş yapın.",
    "messages.rouletteTryAgain": "Bu sefer olmadı. Tekrar deneyin.",
    "messages.authRequired": "Devam etmek için giriş yapın.",
    "messages.winAmount": "{{amount}} kazandınız!",
  },
};

let numberFormatter = new Intl.NumberFormat("ru-RU");
let dateFormatter = new Intl.DateTimeFormat("ru-RU", {
  day: "2-digit",
  month: "long",
  hour: "2-digit",
  minute: "2-digit",
});
const defaultLanguage = "ru";
let currentLanguage = defaultLanguage;
const currencySymbol = "₺";

function resolveLocale(language) {
  return supportedLanguages[language]?.locale ?? supportedLanguages[defaultLanguage].locale;
}

function formatTemplate(template, params = {}) {
  return template.replace(/\{\{(\w+)\}\}/g, (_, key) => {
    const value = params[key];
    return value !== undefined ? value : `{{${key}}}`;
  });
}

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function t(key, params = {}) {
  const languageTable = translations[currentLanguage] ?? translations[defaultLanguage];
  const fallbackTable = translations[defaultLanguage] ?? {};
  const template = languageTable?.[key] ?? fallbackTable?.[key] ?? key;
  if (typeof template !== "string") {
    return key;
  }
  return formatTemplate(template, params);
}

function updateFormatters() {
  const locale = resolveLocale(currentLanguage);
  numberFormatter = new Intl.NumberFormat(locale);
  dateFormatter = new Intl.DateTimeFormat(locale, {
    day: "2-digit",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function applyTranslations() {
  document.documentElement.lang = resolveLocale(currentLanguage).split("-")[0];
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    element.innerHTML = t(element.dataset.i18nHtml);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.setAttribute("placeholder", t(element.dataset.i18nPlaceholder));
  });
  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    element.setAttribute("aria-label", t(element.dataset.i18nAriaLabel));
  });
}

function setLanguage(language) {
  const nextLanguage = supportedLanguages[language] ? language : defaultLanguage;
  currentLanguage = nextLanguage;
  updateFormatters();
  localStorage.setItem(LANGUAGE_KEY, currentLanguage);
  if (languageSelect) {
    languageSelect.value = currentLanguage;
  }
  applyTranslations();
  updateDashboardData();
  updateGameStatuses();
  renderTickerMessages();
}

function getColourLabel(color) {
  return t(rouletteColorKeyMap[color] ?? color);
}

function getFavouriteGameLabel(value) {
  if (!value || value === "—") {
    return t("profile.none");
  }
  if (typeof value === "string") {
    const trimmed = value.trim();
    if (trimmed === "crash") return t("games.crash.title");
    if (trimmed === "roulette") return t("games.roulette.title");
    const lower = trimmed.toLowerCase();
    if (lower.includes("crash") || lower.includes("ракета")) {
      return t("games.crash.title");
    }
    if (lower.includes("roulette") || lower.includes("рулет")) {
      return t("games.roulette.title");
    }
    if (lower === "—") {
      return t("profile.none");
    }
  }
  return value ?? t("profile.none");
}

function getVipLabel(value) {
  if (!value) return t("profile.vipDefault");
  if (value === "vipDefault") return t("profile.vipDefault");
  if (typeof value === "string") {
    const lower = value.toLowerCase();
    if (lower.includes("нович") || lower.includes("rookie") || lower.includes("acemi")) {
      return t("profile.vipDefault");
    }
  }
  return value;
}

function updateGameStatuses() {
  if (rouletteStatus && !rouletteSpinning) {
    rouletteStatus.textContent = t("roulette.status.idle");
  }
  document.dispatchEvent(
    new CustomEvent("crash:language", { detail: { language: currentLanguage } })
  );
}

function renderTickerMessages() {
  if (!tickerTrack) return;
  tickerTrack.innerHTML = "";
  initialTickerKeys.forEach((key) => {
    const span = document.createElement("span");
    span.textContent = t(key);
    tickerTrack.appendChild(span);
  });
}

function resetRouletteUI() {
  if (rouletteNumber) {
    rouletteNumber.textContent = "-";
  }
  if (rouletteStatus) {
    rouletteStatus.textContent = t("roulette.status.idle");
  }
  hideFormFeedback(rouletteFeedback);
}

function normalizeAccountData(account) {
  const normalized = { ...account };
  if (normalized.favouriteGame === "—") {
    normalized.favouriteGame = null;
  }
  if (typeof normalized.vip === "string") {
    const lower = normalized.vip.toLowerCase();
    if (lower.includes("нович") || lower.includes("rookie") || lower.includes("acemi")) {
      normalized.vip = "vipDefault";
    }
  }
  return normalized;
}

const redNumbers = new Set([
  1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36,
]);
const rouletteColorKeyMap = {
  red: "roulette.red",
  black: "roulette.black",
  green: "roulette.green",
};
const feedMessageKeys = [
  "ticker.messages.0",
  "ticker.messages.1",
  "ticker.messages.2",
  "ticker.messages.3",
  "ticker.messages.4",
  "ticker.messages.5",
  "ticker.messages.6",
  "ticker.messages.7",
];
const initialTickerKeys = feedMessageKeys.slice(0, 3);

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

const otherBetsIntervals = new Map();
let feedbackTimeout;
let rouletteSpinning = false;

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
    return Array.isArray(parsed) ? parsed : [];
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

function formatCurrency(value) {
  return `${numberFormatter.format(Math.max(0, Math.round(value)))} ${currencySymbol}`;
}

function formatCurrencySigned(value) {
  const rounded = Math.round(value);
  const sign = rounded >= 0 ? "+" : "\u2212";
  const amount = numberFormatter.format(Math.abs(rounded));
  return `${sign}${amount} ${currencySymbol}`;
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
  if (!value) return t("profile.none");
  try {
    return dateFormatter.format(new Date(value));
  } catch (error) {
    return t("profile.none");
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
  document.dispatchEvent(
    new CustomEvent("crash:balance", { detail: { balance: balanceValue } })
  );
}

function updateWelcome() {
  const name = appState.currentAccount?.nickname ?? t("auth.guest");
  if (welcomeElement) {
    const safeName = escapeHtml(name.toString());
    welcomeElement.innerHTML = t("dashboard.welcome", { name: safeName });
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
    profileLevel.textContent = t("profile.level", { level: 1 });
    profileExperience.textContent = t("profile.experience", { current: numberFormatter.format(0) });
    if (profileProgress) profileProgress.style.width = "0%";
    profileWins.textContent = numberFormatter.format(0);
    profileFavourite.textContent = t("profile.none");
    profileVip.textContent = t("profile.vipDefault");
    profileVisit.textContent = t("profile.none");
    profileStreak.textContent = numberFormatter.format(0);
    return;
  }

  const account = appState.currentAccount;
  profileName.textContent = account.nickname;
  profileInitials.textContent = getInitials(account.nickname);
  const levelValue = Number(account.level ?? 1);
  profileLevel.textContent = t("profile.level", { level: numberFormatter.format(levelValue) });
  const experienceValue = Number(account.experience ?? 0);
  profileExperience.textContent = t("profile.experience", {
    current: numberFormatter.format(experienceValue),
  });
  if (profileProgress) {
    profileProgress.style.width = `${Math.min(100, experienceValue)}%`;
  }
  profileWins.textContent = numberFormatter.format(account.wins ?? 0);
  profileFavourite.textContent = getFavouriteGameLabel(account.favouriteGame);
  profileVip.textContent = getVipLabel(account.vip);
  profileVisit.textContent = formatDateTime(account.lastLogin);
  profileStreak.textContent = numberFormatter.format(account.streak ?? 0);
}

function updateDashboardData() {
  updateWelcome();
  updateBalanceDisplays();
  updateProfile();
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
    const matches = target && link.dataset.target === target;
    link.classList.toggle("active", Boolean(matches));
    if (!target) {
      link.classList.remove("active");
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
  const section = Array.from(pageSections).find((item) => item.dataset.page === target);
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

  const isGamePage = target === "roulette" || target === "crash";
  if (isGamePage) {
    if (appState.activeGame && appState.activeGame !== target) {
      if (appState.activeGame === "roulette") {
        stopRouletteFeed();
      }
      if (appState.activeGame === "crash") {
        document.dispatchEvent(
          new CustomEvent("crash:visibility", { detail: { visible: false } })
        );
      }
    }
    appState.activeGame = target;
    if (target === "roulette") {
      startRouletteFeed();
    } else {
      document.dispatchEvent(
        new CustomEvent("crash:visibility", { detail: { visible: true } })
      );
    }
  } else if (appState.activeGame) {
    if (appState.activeGame === "roulette") {
      stopRouletteFeed();
    }
    if (appState.activeGame === "crash") {
      document.dispatchEvent(
        new CustomEvent("crash:visibility", { detail: { visible: false } })
      );
    }
    appState.activeGame = null;
  }
}

function getRouletteColor(number) {
  if (number === 0) return "green";
  return redNumbers.has(number) ? "red" : "black";
}

function handleRouletteResult({ stake, color }) {
  const account = appState.currentAccount;
  if (!account) return;
  const result = randomInt(0, 36);
  const resultColor = getRouletteColor(result);
  if (rouletteNumber) rouletteNumber.textContent = result.toString();
  if (rouletteStatus) {
    const colorName = getColourLabel(resultColor);
    rouletteStatus.textContent =
      result === 0
        ? t("roulette.result.zero", { color: colorName })
        : t("roulette.result.number", { number: result, color: colorName });
  }

  const multipliers = {
    red: 2,
    black: 2,
    green: 36,
  };

  if (resultColor === color) {
    const winnings = stake * multipliers[color];
    account.balance += winnings;
    account.wins = Number(account.wins ?? 0) + 1;
    account.favouriteGame = "roulette";
    account.streak = Number(account.streak ?? 0) + 1;
    gainExperience(color === "green" ? 15 : 6);
    showFormFeedback(
      rouletteFeedback,
      t("messages.winAmount", { amount: formatCurrency(winnings - stake) }),
      true
    );
  } else {
    account.streak = 0;
    showFormFeedback(rouletteFeedback, t("messages.rouletteTryAgain"));
  }

  rouletteSpinning = false;
  if (rouletteStartButton) rouletteStartButton.disabled = false;
  updateDashboardData();
  persistCurrentUser();
}

function handleRouletteBet(event) {
  event.preventDefault();
  if (!appState.currentAccount) {
    toggleAuthView("login");
    showPage("auth");
    showFormFeedback(rouletteFeedback, t("messages.authBet"));
    return;
  }

  if (rouletteSpinning) return;

  const formData = new FormData(rouletteForm);
  const stake = Number(formData.get("stake"));
  const color = formData.get("color");

  if (!Number.isFinite(stake) || stake < 100) {
    showFormFeedback(rouletteFeedback, t("messages.minimumStake"));
    return;
  }

  if (!["red", "black", "green"].includes(color)) {
    showFormFeedback(rouletteFeedback, t("messages.colorRequired"));
    return;
  }

  const account = appState.currentAccount;
  if (!account) return;

  if (account.balance < stake) {
    showFormFeedback(rouletteFeedback, t("messages.balanceInsufficient"));
    return;
  }

  account.balance -= stake;
  rouletteSpinning = true;
  if (rouletteStartButton) rouletteStartButton.disabled = true;
  if (rouletteStatus) rouletteStatus.textContent = t("roulette.status.spinning");
  if (rouletteNumber) rouletteNumber.textContent = "-";
  hideFormFeedback(rouletteFeedback);
  updateBalanceDisplays();
  persistCurrentUser();

  const spinDuration = 2200;
  let ticks = 0;
  const spinInterval = setInterval(() => {
    if (rouletteNumber) {
      rouletteNumber.textContent = randomInt(0, 36).toString();
    }
    ticks += 1;
    if (ticks >= 16) {
      clearInterval(spinInterval);
    }
  }, 110);

  setTimeout(() => {
    handleRouletteResult({ stake, color });
  }, spinDuration);
}

function generateRouletteBets() {
  const options = ["red", "black", "green"];
  return Array.from({ length: randomInt(4, 6) }, () => {
    const stake = Math.round(randomInt(2, 60) * 50);
    const color = randomChoice(options);
    return {
      name: randomChoice(fakeNames),
      stake,
      color,
    };
  });
}

function renderRouletteOtherBets() {
  if (!rouletteOtherBets) return;
  const items = generateRouletteBets();
  rouletteOtherBets.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    const left = document.createElement("span");
    left.textContent = item.name;
    const right = document.createElement("span");
    right.textContent = `${formatCurrency(item.stake)} • ${getColourLabel(item.color)}`;
    li.append(left, right);
    rouletteOtherBets.appendChild(li);
  });
}

function startRouletteFeed() {
  stopRouletteFeed();
  renderRouletteOtherBets();
  const interval = setInterval(renderRouletteOtherBets, OTHER_BETS_INTERVAL);
  otherBetsIntervals.set("roulette", interval);
}

function stopRouletteFeed() {
  const interval = otherBetsIntervals.get("roulette");
  if (interval) {
    clearInterval(interval);
    otherBetsIntervals.delete("roulette");
  }
}

function handleDeposit() {
  if (!appState.isAuthenticated || !appState.currentAccount) {
    showFeedback(t("messages.authBalance"));
    hideDropdown();
    return;
  }
  appState.currentAccount.balance += 1000;
  gainExperience(3);
  showFeedback(t("messages.depositSuccess"));
  updateDashboardData();
  persistCurrentUser();
  hideDropdown();
}

function handleWithdraw() {
  if (!appState.isAuthenticated || !appState.currentAccount) {
    showFeedback(t("messages.authBalance"));
    hideDropdown();
    return;
  }
  if (appState.currentAccount.balance < 1000) {
    showFeedback(t("messages.withdrawInsufficient"));
    hideDropdown();
    return;
  }
  appState.currentAccount.balance -= 1000;
  appState.currentAccount.streak = 0;
  showFeedback(t("messages.withdrawSuccess"));
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
    showFormFeedback(loginFeedback, t("messages.loginInvalid"));
    return;
  }

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
      t("messages.nicknameShort")
    );
    return;
  }

  if (!email || !password || !confirm) {
    showFormFeedback(registerFeedback, t("messages.fillAll"));
    return;
  }

  if (password.length < 6) {
    showFormFeedback(
      registerFeedback,
      t("messages.passwordShort")
    );
    return;
  }

  if (password !== confirm) {
    showFormFeedback(registerFeedback, t("messages.passwordMismatch"));
    return;
  }

  if (!rulesAccepted) {
    showFormFeedback(registerFeedback, t("messages.rulesRequired"));
    return;
  }

  const nicknameLower = nickname.toLowerCase();
  const duplicate = appState.accounts.some(
    (item) => item.email === email || item.nickname.toLowerCase() === nicknameLower
  );

  if (duplicate) {
    showFormFeedback(
      registerFeedback,
      t("messages.accountExists")
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
    favouriteGame: null,
    vip: "vipDefault",
    streak: 0,
    level: 1,
    experience: 0,
    lastLogin: null,
  };

  appState.accounts.push(newAccount);
  saveAccounts();
  registerForm.reset();
  showFormFeedback(
    registerFeedback,
    t("messages.accountCreated"),
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
  stopRouletteFeed();
  document.dispatchEvent(
    new CustomEvent("crash:visibility", { detail: { visible: false } })
  );
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
    showFormFeedback(loginFeedback, t("messages.authGame"));
    return;
  }
  if (gameKey === "roulette") {
    showPage("roulette");
  } else if (gameKey === "crash") {
    showPage("crash");
  }
}

function initializeAuth() {
  appState.accounts = loadAccounts().map(normalizeAccountData);
  const storedId = localStorage.getItem(CURRENT_USER_KEY);
  if (storedId) {
    const account = appState.accounts.find((item) => item.id === storedId);
    if (account) {
      appState.currentAccount = account;
      appState.isAuthenticated = true;
      setAuthenticatedState(true);
      updateDashboardData();
    }
  }
}


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

backButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.dataset.target || "home";
    showPage(target);
  });
});

loginForm?.addEventListener("submit", handleLogin);
registerForm?.addEventListener("submit", handleRegister);
logoutButton?.addEventListener("click", handleLogout);

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

gameLaunchButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest(".game-card");
    const gameKey = card?.dataset.game;
    if (gameKey) {
      openGame(gameKey);
    }
  });
});

languageSelect?.addEventListener("change", () => {
  setLanguage(languageSelect.value);
});

function appendTickerMessage() {
  if (!tickerTrack) return;
  const span = document.createElement("span");
  span.textContent = t(randomChoice(feedMessageKeys));
  span.classList.add("ticker-fade-in");
  tickerTrack.appendChild(span);
  if (tickerTrack.children.length > 12) {
    tickerTrack.removeChild(tickerTrack.firstElementChild);
  }
}

renderTickerMessages();
setInterval(appendTickerMessage, 6500);

toggleAuthView("login");
initializeAuth();
const storedLanguage = localStorage.getItem(LANGUAGE_KEY);
setLanguage(storedLanguage || defaultLanguage);
updateNavState();
resetRouletteUI();
showPage("home");

document.querySelector(".switch-option.active")?.click();


const CrashReact = window.React;
const CrashReactDOM = window.ReactDOM;
const crashMotion = window.framerMotion;
const crashZustand = window.zustand;

if (crashRoot && CrashReact && CrashReactDOM && crashMotion && crashZustand?.create) {
  const { useState, useEffect, useMemo, useRef } = CrashReact;
  const { motion, AnimatePresence } = crashMotion;
  const createCrashStore = crashZustand.create;

  const CRASH_RATE = 1.85;
  const COUNTDOWN_START = 5;
  const NEXT_ROUND_DELAY = 3;
  const MIN_BET = 1;
  const TRAJECTORY_STEP_MS = 48;
  const SOUND_TICK_INTERVAL = 320;

  const crashEngine = {
    animationId: null,
    countdownId: null,
    nextTimerId: null,
    startTime: 0,
    crashPoint: 2,
    lastTickTime: 0,
    lastTrajectoryStamp: 0,
    serverSeed: null,
    nonce: 0,
    audioCtx: null,
  };

  function randomHex(bytes = 16) {
    const array = new Uint8Array(bytes);
    if (window.crypto?.getRandomValues) {
      window.crypto.getRandomValues(array);
    } else {
      for (let i = 0; i < array.length; i += 1) {
        array[i] = Math.floor(Math.random() * 256);
      }
    }
    return Array.from(array)
      .map((value) => value.toString(16).padStart(2, "0"))
      .join("");
  }

  async function sha256(message) {
    if (!window.crypto?.subtle) {
      return randomHex(32);
    }
    const encoder = new TextEncoder();
    const data = encoder.encode(message);
    const hashBuffer = await window.crypto.subtle.digest("SHA-256", data);
    return Array.from(new Uint8Array(hashBuffer))
      .map((value) => value.toString(16).padStart(2, "0"))
      .join("");
  }

  function computeCrashPoint(hash) {
    const slice = hash.slice(0, 13);
    const integer = parseInt(slice, 16);
    const max = Math.pow(16, slice.length);
    const ratio = integer / max;
    const crash = Math.max(1.01, Math.exp(ratio * 3.4));
    return Math.round(crash * 100) / 100;
  }

  function formatMultiplierValue(value, language) {
    const locale = supportedLanguages[language]?.locale ?? "ru-RU";
    return new Intl.NumberFormat(locale, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  }

  function ensureAudioContext() {
    if (!window.AudioContext && !window.webkitAudioContext) return null;
    if (!crashEngine.audioCtx) {
      const Ctor = window.AudioContext || window.webkitAudioContext;
      crashEngine.audioCtx = new Ctor();
    }
    return crashEngine.audioCtx;
  }

  function playCrashSound(type) {
    const state = useCrashStore.getState();
    if (!state.soundEnabled) return;
    const ctx = ensureAudioContext();
    if (!ctx) return;
    if (ctx.state === "suspended") {
      ctx.resume().catch(() => {});
    }
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    if (type === "tick") {
      osc.frequency.value = 440;
      gain.gain.setValueAtTime(0.02, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
    } else if (type === "cashout") {
      osc.frequency.value = 960;
      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
    } else {
      osc.type = "sawtooth";
      osc.frequency.value = 180;
      gain.gain.setValueAtTime(0.06, now);
      gain.gain.exponentialRampToValueAtTime(0.002, now + 0.35);
    }
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.4);
  }

  function updateFairnessFooter(meta) {
    if (!crashHashDisplay) return;
    const { language } = useCrashStore.getState();
    crashHashDisplay.textContent = t("crash.hashLabel", {
      round: meta.roundNumber,
      hash: meta.hash,
    });
    crashHashDisplay.setAttribute(
      "title",
      t("crash.hashTooltip", {
        server: meta.serverSeed,
        client: meta.clientSeed,
        nonce: meta.nonce,
      })
    );
  }

  const useCrashStore = createCrashStore((set, get) => ({
    phase: "countdown",
    countdown: COUNTDOWN_START,
    nextTimer: 0,
    multiplier: 1,
    crashPoint: 2,
    autoLocked: false,
    betInput: 100,
    autoCashoutInput: 1.5,
    activeBet: null,
    lastBetAmount: 100,
    history: [],
    leaderboard: [],
    trajectory: [{ time: 0, value: 1 }],
    balance: appState.currentAccount?.balance ?? 0,
    language: currentLanguage,
    roundNumber: 0,
    roundHash: "",
    serverSeed: "",
    clientSeed: "",
    nonce: 0,
    soundEnabled: true,
    visible: false,
    toasts: [],
    setState: (partial) => set(partial),
    updateBalance: (balance) => set({ balance }),
    setLanguage: (language) => set({ language }),
    setVisibility: (visible) => set({ visible }),
    setBetInput: (value) => set({ betInput: value }),
    setAutoCashoutInput: (value) => set({ autoCashoutInput: value }),
    markAutoLocked: (locked) => set({ autoLocked: locked }),
    setActiveBet: (activeBet) => set({ activeBet }),
    setLastBetAmount: (amount) => set({ lastBetAmount: amount }),
    toggleSound: () => set((state) => ({ soundEnabled: !state.soundEnabled })),
    pushToast: (toast) => set((state) => ({ toasts: [...state.toasts, toast] })),
    removeToast: (id) =>
      set((state) => ({ toasts: state.toasts.filter((item) => item.id !== id) })),
    pushHistory: (entry) =>
      set((state) => ({ history: [entry, ...state.history].slice(0, 20) })),
    updateLeaderboard: (entry) =>
      set((state) => ({ leaderboard: [entry, ...state.leaderboard].slice(0, 8) })),
    setTrajectory: (trajectory) => set({ trajectory }),
  }));

  function mutateAccountBalance(delta) {
    const account = appState.currentAccount;
    if (!account) return null;
    account.balance = Math.max(0, Math.round((account.balance ?? 0) + delta));
    updateDashboardData();
    persistCurrentUser();
    return account.balance;
  }

  function resolveLossIfNeeded() {
    const state = useCrashStore.getState();
    const bet = state.activeBet;
    if (!bet || bet.cashedOut) return;
    useCrashStore.setState({ activeBet: { ...bet, lost: true } });
    useCrashStore.getState().pushHistory({
      id: state.roundNumber,
      multiplier: state.crashPoint,
      cashoutMultiplier: null,
      amount: bet.amount,
      outcome: "loss",
      profit: -bet.amount,
    });
    useCrashStore.getState().pushToast({
      id: Date.now(),
      type: "error",
      message: t("crash.toast.loss", {
        multiplier: formatMultiplierValue(state.crashPoint, state.language),
      }),
    });
    if (appState.currentAccount) {
      appState.currentAccount.favouriteGame = "crash";
      appState.currentAccount.streak = 0;
      persistCurrentUser();
    }
  }

  function cashOut(manual = true) {
    const state = useCrashStore.getState();
    const bet = state.activeBet;
    if (!bet || bet.cashedOut) return;
    const multiplier = Math.max(1.01, state.multiplier);
    const payout = Math.round(bet.amount * multiplier);
    const net = payout - bet.amount;
    mutateAccountBalance(payout);
    const updatedBet = { ...bet, cashedOut: true, cashoutMultiplier: multiplier };
    useCrashStore.setState({ activeBet: updatedBet });
    useCrashStore.getState().pushHistory({
      id: state.roundNumber,
      multiplier: state.crashPoint,
      cashoutMultiplier: multiplier,
      amount: bet.amount,
      outcome: "win",
      profit: net,
    });
    useCrashStore.getState().updateLeaderboard({
      player: appState.currentAccount?.nickname ?? "NeoPlayer",
      multiplier,
      amount: payout,
    });
    useCrashStore.getState().pushToast({
      id: Date.now() + 1,
      type: "success",
      message: t("crash.toast.cashout", {
        multiplier: formatMultiplierValue(multiplier, state.language),
        amount: formatCurrency(net),
      }),
    });
    playCrashSound("cashout");
    const account = appState.currentAccount;
    if (account) {
      account.wins = Number(account.wins ?? 0) + 1;
      account.favouriteGame = "crash";
      account.streak = Number(account.streak ?? 0) + 1;
      gainExperience(9);
      persistCurrentUser();
    }
  }

  function clearAnimation() {
    if (crashEngine.animationId) {
      cancelAnimationFrame(crashEngine.animationId);
      crashEngine.animationId = null;
    }
  }

  function clearTimers() {
    if (crashEngine.countdownId) {
      clearInterval(crashEngine.countdownId);
      crashEngine.countdownId = null;
    }
    if (crashEngine.nextTimerId) {
      clearInterval(crashEngine.nextTimerId);
      crashEngine.nextTimerId = null;
    }
  }

  function startNextPhase() {
    clearTimers();
    useCrashStore.setState({ phase: "next", nextTimer: NEXT_ROUND_DELAY });
    crashEngine.nextTimerId = setInterval(() => {
      const state = useCrashStore.getState();
      if (state.nextTimer <= 1) {
        clearInterval(crashEngine.nextTimerId);
        crashEngine.nextTimerId = null;
        prepareCrashRound();
      } else {
        useCrashStore.setState({ nextTimer: state.nextTimer - 1 });
      }
    }, 1000);
  }

  function animationStep(now) {
    const elapsed = (now - crashEngine.startTime) / 1000;
    const value = Math.exp(CRASH_RATE * elapsed);
    const state = useCrashStore.getState();
    if (value >= crashEngine.crashPoint) {
      clearAnimation();
      const finalTrajectory = [...state.trajectory, { time: elapsed, value: crashEngine.crashPoint }];
      useCrashStore.setState({
        phase: "crashed",
        multiplier: crashEngine.crashPoint,
        trajectory: finalTrajectory,
      });
      resolveLossIfNeeded();
      playCrashSound("crash");
      setTimeout(startNextPhase, 420);
      return;
    }

    if (now - crashEngine.lastTickTime > SOUND_TICK_INTERVAL) {
      crashEngine.lastTickTime = now;
      playCrashSound("tick");
    }

    if (now - crashEngine.lastTrajectoryStamp > TRAJECTORY_STEP_MS) {
      crashEngine.lastTrajectoryStamp = now;
      useCrashStore.setState((current) => {
        const trajectory = [...current.trajectory, { time: elapsed, value }];
        if (trajectory.length > 360) trajectory.shift();
        return { multiplier: value, trajectory };
      });
    } else {
      useCrashStore.setState({ multiplier: value });
    }

    const bet = state.activeBet;
    if (bet && !bet.cashedOut && bet.autoCashout && value >= bet.autoCashout) {
      cashOut(false);
    }

    crashEngine.animationId = requestAnimationFrame(animationStep);
  }

  function startFlight() {
    clearAnimation();
    crashEngine.startTime = performance.now();
    crashEngine.lastTickTime = crashEngine.startTime;
    crashEngine.lastTrajectoryStamp = crashEngine.startTime;
    useCrashStore.setState({
      phase: "flying",
      autoLocked: true,
      multiplier: 1,
      trajectory: [{ time: 0, value: 1 }],
    });
    crashEngine.animationId = requestAnimationFrame(animationStep);
  }

  async function prepareCrashRound() {
    clearAnimation();
    clearTimers();
    crashEngine.nonce += 1;
    if (!crashEngine.serverSeed) {
      crashEngine.serverSeed = randomHex(32);
    }
    const state = useCrashStore.getState();
    const clientSeed = appState.currentAccount?.id ?? "demo-client";
    const hash = await sha256(
      `${crashEngine.serverSeed}:${clientSeed}:${crashEngine.nonce}`
    );
    const crashPoint = computeCrashPoint(hash);
    crashEngine.crashPoint = crashPoint;
    useCrashStore.setState({
      phase: "countdown",
      countdown: COUNTDOWN_START,
      multiplier: 1,
      crashPoint,
      autoLocked: false,
      activeBet: null,
      trajectory: [{ time: 0, value: 1 }],
      roundNumber: state.roundNumber + 1,
      roundHash: hash,
      serverSeed: crashEngine.serverSeed,
      clientSeed,
      nonce: crashEngine.nonce,
    });
    updateFairnessFooter({
      roundNumber: state.roundNumber + 1,
      hash,
      serverSeed: crashEngine.serverSeed,
      clientSeed,
      nonce: crashEngine.nonce,
    });
    let seconds = COUNTDOWN_START;
    crashEngine.countdownId = setInterval(() => {
      seconds -= 1;
      if (seconds <= 0) {
        clearInterval(crashEngine.countdownId);
        crashEngine.countdownId = null;
        startFlight();
      } else {
        useCrashStore.setState({ countdown: seconds });
      }
    }, 1000);
  }

  function placeBet() {
    const state = useCrashStore.getState();
    if (!appState.isAuthenticated || !appState.currentAccount) {
      useCrashStore.getState().pushToast({
        id: Date.now() + 3,
        type: "info",
        message: t("crash.noAccount"),
      });
      return;
    }
    if (state.phase !== "countdown") {
      useCrashStore.getState().pushToast({
        id: Date.now() + 4,
        type: "warning",
        message: t("crash.toast.betRejected"),
      });
      return;
    }
    if (state.activeBet && !state.activeBet.cashedOut) {
      useCrashStore.getState().pushToast({
        id: Date.now() + 5,
        type: "warning",
        message: t("crash.toast.betRejected"),
      });
      return;
    }
    const amount = Math.max(MIN_BET, Math.floor(Number(state.betInput) || 0));
    if (!Number.isFinite(amount) || amount < MIN_BET) {
      useCrashStore.getState().pushToast({
        id: Date.now() + 6,
        type: "warning",
        message: t("crash.errors.betTooLow", { value: MIN_BET }),
      });
      return;
    }
    if ((appState.currentAccount?.balance ?? 0) < amount) {
      useCrashStore.getState().pushToast({
        id: Date.now() + 7,
        type: "error",
        message: t("messages.balanceInsufficient"),
      });
      return;
    }
    mutateAccountBalance(-amount);
    const autoValue = Math.max(1.05, Number(state.autoCashoutInput) || 0);
    useCrashStore.setState({
      activeBet: { amount, autoCashout: autoValue, cashedOut: false },
      lastBetAmount: amount,
    });
    useCrashStore.getState().pushToast({
      id: Date.now() + 8,
      type: "success",
      message: t("crash.toast.betAccepted", { amount: formatCurrency(amount) }),
    });
    const ctx = ensureAudioContext();
    ctx?.resume().catch(() => {});
  }

  function repeatBet() {
    const state = useCrashStore.getState();
    useCrashStore.setState({ betInput: state.lastBetAmount || MIN_BET });
  }

  function doubleBet() {
    const state = useCrashStore.getState();
    const balance = appState.currentAccount?.balance ?? state.balance;
    const doubled = Math.min(balance, Math.max(MIN_BET, (state.lastBetAmount || MIN_BET) * 2));
    useCrashStore.setState({ betInput: doubled, lastBetAmount: doubled });
  }

  function applyPreset(value) {
    useCrashStore.setState({ betInput: value });
  }

  function setAutoCashout(value) {
    const state = useCrashStore.getState();
    if (state.autoLocked) {
      useCrashStore.getState().pushToast({
        id: Date.now() + 9,
        type: "info",
        message: t("crash.autoCashoutLocked"),
      });
      return;
    }
    const parsed = Number(value);
    if (!Number.isFinite(parsed) || parsed < 1.05) {
      useCrashStore.setState({ autoCashoutInput: 1.5 });
      return;
    }
    useCrashStore.setState({ autoCashoutInput: Math.round(parsed * 100) / 100 });
  }

  function resetDemoBalance() {
    if (!appState.currentAccount) {
      useCrashStore.getState().pushToast({
        id: Date.now() + 10,
        type: "info",
        message: t("crash.noAccount"),
      });
      return;
    }
    appState.currentAccount.balance = 5000;
    appState.currentAccount.streak = 0;
    updateDashboardData();
    persistCurrentUser();
    useCrashStore.setState({ balance: 5000 });
    useCrashStore.getState().pushToast({
      id: Date.now() + 11,
      type: "success",
      message: t("crash.demoBalanceReset", { amount: formatCurrency(5000) }),
    });
  }

  function toggleSound() {
    useCrashStore.getState().toggleSound();
    const ctx = ensureAudioContext();
    ctx?.resume().catch(() => {});
  }

  function useCrashActions() {
    return {
      placeBet,
      cashOut,
      applyPreset,
      repeatBet,
      doubleBet,
      setAutoCashout,
      resetDemoBalance,
      toggleSound,
    };
  }

  function useCrashState(selector) {
    return useCrashStore(selector);
  }

  function StatusBanner() {
    const phase = useCrashState((state) => state.phase);
  const countdown = useCrashState((state) => state.countdown);
  const multiplier = useCrashState((state) => state.multiplier);
  const crashPoint = useCrashState((state) => state.crashPoint);
  const nextTimer = useCrashState((state) => state.nextTimer);
  const language = useCrashState((state) => state.language);
  const roundNumber = useCrashState((state) => state.roundNumber);
  const balance = useCrashState((state) => state.balance);

    const content = useMemo(() => {
      if (phase === "flying") {
        return t("crash.status.flight", {
          multiplier: formatMultiplierValue(multiplier, language),
        });
      }
      if (phase === "crashed") {
        return t("crash.status.crashed", {
          multiplier: formatMultiplierValue(crashPoint, language),
        });
      }
      if (phase === "next") {
        return t("crash.status.next", { seconds: nextTimer });
      }
      return t("crash.status.countdown", { seconds: countdown });
    }, [phase, countdown, multiplier, crashPoint, nextTimer, language]);

    return (
      <div className="flex items-center justify-between gap-4 rounded-3xl bg-white/5 px-6 py-4 shadow-[0_20px_60px_rgba(0,212,255,0.12)]">
        <div>
          <p className="text-sm uppercase tracking-[0.4em] text-white/70">{t("crash.roundLabel", { number: roundNumber })}</p>
          <p className="mt-2 text-2xl font-semibold text-white drop-shadow">{content}</p>
        </div>
        <div className="text-right">
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">{t("crash.balanceLabel")}</p>
          <p className="mt-1 text-xl font-semibold text-neon drop-shadow">
            {formatCurrency(balance)}
          </p>
        </div>
      </div>
    );
  }

  function Starfield() {
    const canvasRef = useRef(null);
    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return undefined;
      const ctx = canvas.getContext("2d");
      let animationFrame;
      const stars = Array.from({ length: 140 }, () => ({
        x: Math.random(),
        y: Math.random(),
        z: Math.random(),
        speed: 0.0006 + Math.random() * 0.0012,
      }));

      function resize() {
        canvas.width = canvas.clientWidth * window.devicePixelRatio;
        canvas.height = canvas.clientHeight * window.devicePixelRatio;
      }
      resize();
      window.addEventListener("resize", resize);

      function render() {
        const { width, height } = canvas;
        ctx.clearRect(0, 0, width, height);
        stars.forEach((star) => {
          star.z -= star.speed;
          if (star.z <= 0) {
            star.x = Math.random();
            star.y = Math.random();
            star.z = 1;
          }
          const scale = 0.2 + (1 - star.z) * 0.8;
          const x = (star.x - 0.5) * width * 0.9;
          const y = (star.y - 0.5) * height * 0.9;
          const alpha = 0.2 + (1 - star.z) * 0.8;
          ctx.beginPath();
          ctx.fillStyle = `rgba(0, 212, 255, ${alpha})`;
          ctx.arc(width / 2 + x, height / 2 + y, 1.2 * scale, 0, Math.PI * 2);
          ctx.fill();
        });
        animationFrame = requestAnimationFrame(render);
      }
      animationFrame = requestAnimationFrame(render);
      return () => {
        cancelAnimationFrame(animationFrame);
        window.removeEventListener("resize", resize);
      };
    }, []);
    return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />;
  }

  function Sparkline() {
    const canvasRef = useRef(null);
    const trajectory = useCrashState((state) => state.trajectory);
    const crashPoint = useCrashState((state) => state.crashPoint);
    const phase = useCrashState((state) => state.phase);

    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      const width = canvas.clientWidth * window.devicePixelRatio;
      const height = canvas.clientHeight * window.devicePixelRatio;
      canvas.width = width;
      canvas.height = height;
      ctx.clearRect(0, 0, width, height);
      if (!trajectory.length) return;
      const maxMultiplier = Math.max(crashPoint, ...trajectory.map((p) => p.value));
      const maxTime = trajectory[trajectory.length - 1]?.time || 1;
      ctx.lineWidth = 2;
      ctx.strokeStyle = "rgba(0, 212, 255, 0.8)";
      ctx.beginPath();
      trajectory.forEach((point, index) => {
        const x = (point.time / Math.max(maxTime, 1)) * width;
        const y = height - (point.value / Math.max(maxMultiplier, 1)) * height;
        if (index === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      });
      ctx.stroke();
      if (phase === "crashed") {
        const crashX = width;
        const crashY = height - (crashPoint / Math.max(maxMultiplier, 1)) * height;
        ctx.strokeStyle = "rgba(169, 112, 255, 0.7)";
        ctx.beginPath();
        ctx.moveTo(crashX, crashY);
        ctx.lineTo(crashX, height);
        ctx.stroke();
      }
    }, [trajectory, crashPoint, phase]);

    return <canvas ref={canvasRef} className="h-40 w-full" />;
  }

  function RocketVisualizer() {
    const multiplier = useCrashState((state) => state.multiplier);
    const crashPoint = useCrashState((state) => state.crashPoint);
    const phase = useCrashState((state) => state.phase);
    const language = useCrashState((state) => state.language);
    const progress = Math.min(1, (multiplier - 1) / Math.max(crashPoint - 1, 0.0001));
    return (
      <div className="relative overflow-hidden rounded-3xl bg-white/3 p-6 shadow-inner">
        <Sparkline />
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-midnight" />
        <motion.div
          className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center"
          animate={{ y: phase === "flying" ? [-10, -40, -10] : 0 }}
          transition={{ repeat: phase === "flying" ? Infinity : 0, duration: 2, ease: "easeInOut" }}
          style={{ transform: `translate(-50%, ${-progress * 220}px)` }}
        >
          <div className="relative">
            <div className="absolute -bottom-6 left-1/2 h-24 w-2 -translate-x-1/2 rounded-full bg-gradient-to-b from-neon/80 via-neon/20 to-transparent blur-sm" />
            <motion.div
              className="h-14 w-14 rounded-full bg-gradient-to-br from-neon to-orchid shadow-[0_0_30px_rgba(0,212,255,0.6)]"
              animate={{ rotate: phase === "flying" ? [0, 2, -2, 0] : 0 }}
              transition={{ repeat: phase === "flying" ? Infinity : 0, duration: 1.6, ease: "easeInOut" }}
            >
              <div className="relative h-full w-full">
                <svg viewBox="0 0 120 120" className="h-full w-full">
                  <defs>
                    <linearGradient id="rocket-body" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00D4FF" />
                      <stop offset="100%" stopColor="#A970FF" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M60 12c18 18 24 42 24 66a24 24 0 0 1-48 0c0-24 6-48 24-66z"
                    fill="url(#rocket-body)"
                    opacity="0.9"
                  />
                  <circle cx="60" cy="54" r="14" fill="rgba(11,15,26,0.9)" />
                  <circle cx="60" cy="54" r="7" fill="#7EE0FF" />
                  <path d="M36 66c6 8 18 12 24 12s18-4 24-12c-6 16-18 26-24 26s-18-10-24-26z" fill="#fff" opacity="0.18" />
                </svg>
              </div>
            </motion.div>
          </div>
        </motion.div>
        <div className="relative mt-56 flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-white/60">{t("crash.currentMultiplier")}</p>
          <p className="text-4xl font-semibold text-white drop-shadow">
            {formatMultiplierValue(multiplier, language)}×
          </p>
          </div>
          <div className="text-right">
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">{t("crash.targetMultiplier")}</p>
          <p className="text-lg font-semibold text-orchid drop-shadow">
            {formatMultiplierValue(crashPoint, language)}×
          </p>
          </div>
        </div>
      </div>
    );
  }

  function BetControls() {
    const actions = useCrashActions();
    const betInput = useCrashState((state) => state.betInput);
    const autoCashoutInput = useCrashState((state) => state.autoCashoutInput);
    const autoLocked = useCrashState((state) => state.autoLocked);
    const phase = useCrashState((state) => state.phase);
    const activeBet = useCrashState((state) => state.activeBet);
    const multiplier = useCrashState((state) => state.multiplier);
    const language = useCrashState((state) => state.language);
    const setBetInput = useCrashState((state) => state.setBetInput);

    const cashoutLabel = phase === "flying" && activeBet && !activeBet.cashedOut
      ? t("crash.btn.cashOutAt", { multiplier: formatMultiplierValue(multiplier, language) })
      : t("crash.btn.placeBet");

    const adjustBet = (delta) => {
      const current = Number(betInput) || 0;
      const next = Math.max(MIN_BET, Math.round(current + delta));
      setBetInput(next);
    };

    return (
      <div className="space-y-5 rounded-3xl bg-white/6 p-6 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,212,255,0.12)]">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-white/70">
            {t("crash.betAmount")}
            <div className="mt-2 flex items-center gap-2">
              <button
                type="button"
                onClick={() => adjustBet(-1)}
                aria-label={t("crash.adjustDown")}
                title={t("crash.adjustDown")}
                className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-midnight/70 text-2xl font-semibold text-white/80 transition hover:border-neon hover:text-neon focus:outline-none focus:ring-2 focus:ring-neon/60"
              >
                −
              </button>
              <input
                type="number"
                min={MIN_BET}
                step="1"
                value={betInput}
                onChange={(event) => {
                  const raw = Number(event.target.value);
                  if (!Number.isFinite(raw)) {
                    setBetInput(MIN_BET);
                    return;
                  }
                  setBetInput(Math.max(MIN_BET, Math.round(raw)));
                }}
                className="h-12 w-full flex-1 rounded-2xl border border-white/10 bg-midnight/70 px-4 text-lg text-white shadow-inner focus:border-neon focus:outline-none"
              />
              <button
                type="button"
                onClick={() => adjustBet(1)}
                aria-label={t("crash.adjustUp")}
                title={t("crash.adjustUp")}
                className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-midnight/70 text-2xl font-semibold text-white/80 transition hover:border-neon hover:text-neon focus:outline-none focus:ring-2 focus:ring-neon/60"
              >
                +
              </button>
            </div>
          </label>
          <div className="flex flex-wrap gap-2">
            {[1, 5, 10, 25].map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => actions.applyPreset(value)}
                className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/80 transition hover:border-neon hover:text-neon"
              >
                {value}
              </button>
            ))}
          </div>
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-white/70">
            {t("crash.autoCashout")}
            <input
              type="number"
              min="1.05"
              step="0.05"
              value={autoCashoutInput}
              disabled={autoLocked}
              onChange={(event) => actions.setAutoCashout(event.target.value)}
              title={t("crash.autoCashoutHint")}
              className="mt-2 w-full rounded-2xl border border-white/10 bg-midnight/70 px-4 py-3 text-white shadow-inner focus:border-neon focus:outline-none disabled:cursor-not-allowed disabled:border-white/5 disabled:text-white/40"
            />
          </label>
          {autoLocked && <p className="text-xs text-neon/70">{t("crash.autoCashoutLocked")}</p>}
        </div>
        <button
          type="button"
          onClick={() => {
            if (phase === "flying" && activeBet && !activeBet.cashedOut) {
              actions.cashOut(true);
            } else {
              actions.placeBet();
            }
          }}
          className="w-full rounded-2xl bg-gradient-to-r from-neon to-orchid px-4 py-3 text-lg font-semibold text-midnight shadow-neon transition hover:shadow-[0_0_35px_rgba(0,212,255,0.45)]"
          disabled={phase !== "countdown" && !(phase === "flying" && activeBet && !activeBet.cashedOut)}
        >
          {cashoutLabel}
        </button>
      </div>
    );
  }

  function QuickActions() {
    const actions = useCrashActions();
    const soundEnabled = useCrashState((state) => state.soundEnabled);
    return (
      <div className="grid grid-cols-1 gap-3 rounded-3xl bg-white/5 p-4">
        <p className="text-xs uppercase tracking-[0.3em] text-white/60">{t("crash.quickActions")}</p>
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={actions.repeatBet}
            className="rounded-2xl border border-white/15 px-4 py-3 text-sm font-medium text-white/80 transition hover:border-neon hover:text-neon"
          >
            {t("crash.repeatBet")}
          </button>
          <button
            type="button"
            onClick={actions.doubleBet}
            className="rounded-2xl border border-white/15 px-4 py-3 text-sm font-medium text-white/80 transition hover:border-neon hover:text-neon"
          >
            {t("crash.doubleBet")}
          </button>
          <button
            type="button"
            onClick={actions.resetDemoBalance}
            className="rounded-2xl border border-white/15 px-4 py-3 text-sm font-medium text-white/80 transition hover:border-neon hover:text-neon"
          >
            {t("crash.resetDemo")}
          </button>
          <button
            type="button"
            onClick={actions.toggleSound}
            className="rounded-2xl border border-white/15 px-4 py-3 text-sm font-medium text-white/80 transition hover:border-neon hover:text-neon"
          >
            {soundEnabled ? t("crash.soundOn") : t("crash.soundOff")}
          </button>
        </div>
      </div>
    );
  }

  function HistoryPanel() {
    const history = useCrashState((state) => state.history);
    const language = useCrashState((state) => state.language);
    const [expanded, setExpanded] = useState(null);
    const entries = history.slice(0, 15);
    return (
      <div className="rounded-3xl bg-white/5 p-4">
        <p className="text-xs uppercase tracking-[0.3em] text-white/60">{t("crash.historyTitle")}</p>
        <div className="mt-3 space-y-2">
          {entries.length === 0 && <p className="text-sm text-white/60">{t("crash.historyEmpty")}</p>}
          {entries.map((item) => {
            const tone = item.multiplier < 1.5 ? "bg-red-500/20" : item.multiplier < 3 ? "bg-yellow-400/20" : "bg-green-500/20";
            return (
              <button
                key={item.id + String(item.cashoutMultiplier)}
                type="button"
                onClick={() => setExpanded((prev) => (prev === item.id ? null : item.id))}
                className={`w-full rounded-2xl border border-white/10 px-4 py-3 text-left transition hover:border-neon/40 ${tone}`}
              >
                <div className="flex items-center justify-between text-sm text-white/85">
                  <span>{t("crash.historyRound", { number: item.id })}</span>
                  <span>{formatMultiplierValue(item.cashoutMultiplier ?? item.multiplier, language)}×</span>
                </div>
                <div className="mt-1 flex items-center justify-between text-xs text-white/60">
                  <span>{item.outcome === "win" ? t("crash.historyWin") : t("crash.historyLose")}</span>
                  <span>{formatCurrency(item.profit)}</span>
                </div>
                <AnimatePresence>
                  {expanded === item.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="mt-3"
                    >
                      <MiniSparkline multiplier={item.cashoutMultiplier ?? item.multiplier} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  function MiniSparkline({ multiplier }) {
    const canvasRef = useRef(null);
    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      const width = canvas.clientWidth * window.devicePixelRatio;
      const height = canvas.clientHeight * window.devicePixelRatio;
      canvas.width = width;
      canvas.height = height;
      ctx.clearRect(0, 0, width, height);
      ctx.beginPath();
      ctx.strokeStyle = "rgba(0, 212, 255, 0.8)";
      const samples = 40;
      for (let i = 0; i <= samples; i += 1) {
        const ratio = i / samples;
        const value = Math.exp(CRASH_RATE * ratio) / Math.exp(CRASH_RATE);
        const scaled = 1 + (multiplier - 1) * value;
        const x = (i / samples) * width;
        const y = height - (scaled / multiplier) * height;
        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();
    }, [multiplier]);
    return <canvas ref={canvasRef} className="h-20 w-full" />;
  }

  function Leaderboard() {
    const leaderboard = useCrashState((state) => state.leaderboard);
    const language = useCrashState((state) => state.language);
    if (!leaderboard.length) return null;
    return (
      <div className="rounded-3xl bg-white/5 p-4">
        <p className="text-xs uppercase tracking-[0.3em] text-white/60">{t("crash.leaderboardTitle")}</p>
        <div className="mt-3 space-y-2">
          {leaderboard.map((entry, index) => (
            <div key={index} className="flex items-center justify-between rounded-2xl border border-white/10 px-4 py-2 text-sm text-white/80">
              <span>{entry.player}</span>
              <span>{formatMultiplierValue(entry.multiplier, language)}× · {formatCurrency(entry.amount)}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  function ToastStack() {
    const toasts = useCrashState((state) => state.toasts);
    useEffect(() => {
      if (!toasts.length) return undefined;
      const timers = toasts.map((toast) =>
        setTimeout(() => useCrashStore.getState().removeToast(toast.id), 3200)
      );
      return () => timers.forEach((timer) => clearTimeout(timer));
    }, [toasts]);
    return (
      <div className="pointer-events-none fixed bottom-6 right-6 z-50 flex w-72 flex-col gap-3">
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, translateY: 20 }}
              animate={{ opacity: 1, translateY: 0 }}
              exit={{ opacity: 0, translateY: 20 }}
              className="rounded-2xl border border-white/15 bg-midnight/90 px-4 py-3 text-sm text-white shadow-[0_15px_45px_rgba(0,212,255,0.2)]"
            >
              {toast.message}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    );
  }

  function ResponsiblePlay() {
    return (
      <div className="rounded-3xl border border-white/15 bg-white/5 p-4 text-xs text-white/70">
        <p>{t("crash.responsibleNote")}</p>
      </div>
    );
  }

  function CrashGameApp() {
    return (
      <div className="relative h-full w-full font-inter text-white">
        <Starfield />
        <div className="relative z-10 flex h-full flex-col xl:flex-row xl:gap-6">
          <div className="flex flex-1 flex-col gap-5 p-6">
            <StatusBanner />
            <RocketVisualizer />
          </div>
          <div className="flex w-full flex-col gap-5 overflow-y-auto bg-white/6 p-6 xl:w-[380px] xl:rounded-l-3xl">
            <BetControls />
            <QuickActions />
            <Leaderboard />
            <HistoryPanel />
            <ResponsiblePlay />
          </div>
        </div>
        <ToastStack />
      </div>
    );
  }

  function initializeCrashGame() {
    const root = CrashReactDOM.createRoot(crashRoot);
    root.render(<CrashGameApp />);
    prepareCrashRound();
    document.addEventListener("crash:balance", (event) => {
      if (!event?.detail) return;
      useCrashStore.setState({ balance: event.detail.balance });
    });
    document.addEventListener("crash:language", (event) => {
      if (!event?.detail) return;
      useCrashStore.setState({ language: event.detail.language });
      const state = useCrashStore.getState();
      if (state.roundHash) {
        updateFairnessFooter({
          roundNumber: state.roundNumber,
          hash: state.roundHash,
          serverSeed: state.serverSeed,
          clientSeed: state.clientSeed,
          nonce: state.nonce,
        });
      }
    });
    document.addEventListener("crash:visibility", (event) => {
      if (!event?.detail) return;
      useCrashStore.setState({ visible: event.detail.visible });
    });
  }

  initializeCrashGame();
} else if (crashRoot) {
  console.warn("Crash module dependencies missing.");
}
