const body = document.body;
const modeToggle = document.getElementById("modeToggle");
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

const blackjackForm = document.getElementById("blackjackForm");
const blackjackStatus = document.getElementById("blackjackStatus");
const blackjackFeedback = document.getElementById("blackjackFeedback");
const blackjackHitButton = document.getElementById("blackjackHit");
const blackjackStandButton = document.getElementById("blackjackStand");
const blackjackRestartButton = document.getElementById("blackjackRestart");
const blackjackStartButton = document.getElementById("blackjackStart");
const playerCardsEl = document.getElementById("playerCards");
const dealerCardsEl = document.getElementById("dealerCards");
const playerScoreEl = document.getElementById("playerScore");
const dealerScoreEl = document.getElementById("dealerScore");
const blackjackOtherBets = document.getElementById("blackjackOtherBets");
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
    "games.blackjack.title": "Оффлайн Блэкджэк",
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
    "ticker.messages.2": "💎 DiamondKing выиграл 3 200₺ в блэкджэке!",
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
    "blackjack.back": "← В лобби",
    "blackjack.title": "Блэкджэк",
    "blackjack.subtitle": "Выбирайте ставку, тяните карты и попытайтесь обыграть дилера.",
    "blackjack.stakeLabel": "Размер ставки (₺)",
    "blackjack.stakePlaceholder": "Минимум 100₺",
    "blackjack.start": "Начать раунд",
    "blackjack.hit": "Взять карту",
    "blackjack.stand": "Хватит",
    "blackjack.restart": "Новая ставка",
    "blackjack.dealer": "Дилер",
    "blackjack.player": "Вы",
    "blackjack.dealerScore": "Очки: <span id=\"dealerScore\">{{value}}</span>",
    "blackjack.playerScore": "Очки: <span id=\"playerScore\">{{value}}</span>",
    "blackjack.status.idle": "Сделайте ставку, чтобы начать.",
    "blackjack.status.turn": "Ваш ход.",
    "blackjack.outcome.blackjack": "Блэкджэк! Вы победили!",
    "blackjack.outcome.bust": "Перебор! Вы проиграли.",
    "blackjack.outcome.dealerBust": "Дилер перебрал. Победа!",
    "blackjack.outcome.push": "Ничья с дилером.",
    "blackjack.outcome.playerWin": "Вы победили!",
    "blackjack.outcome.dealerWin": "Победил дилер.",
    "blackjack.feedback.win": "Вы выиграли {{amount}}!",
    "blackjack.feedback.push": "Ничья! Ставка возвращена.",
    "blackjack.other.waiting": "ожидает дилера",
    "blackjack.other.double": "удвоил ставку",
    "blackjack.other.hit": "берёт карту",
    "blackjack.other.stand": "остановился",
    "blackjack.other.hot": "на серии побед",
    "blackjack.sidebarTitle": "Ставки других игроков",
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
    "messages.authBlackjack": "Авторизуйтесь, чтобы сыграть.",
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
    "games.blackjack.title": "Offline Blackjack",
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
    "ticker.messages.2": "💎 DiamondKing won 3 200₺ in blackjack!",
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
    "blackjack.back": "← Back to lobby",
    "blackjack.title": "Blackjack",
    "blackjack.subtitle": "Choose your stake, draw cards, and try to beat the dealer.",
    "blackjack.stakeLabel": "Stake amount (₺)",
    "blackjack.stakePlaceholder": "Minimum 100₺",
    "blackjack.start": "Start round",
    "blackjack.hit": "Hit",
    "blackjack.stand": "Stand",
    "blackjack.restart": "New stake",
    "blackjack.dealer": "Dealer",
    "blackjack.player": "You",
    "blackjack.dealerScore": "Score: <span id=\"dealerScore\">{{value}}</span>",
    "blackjack.playerScore": "Score: <span id=\"playerScore\">{{value}}</span>",
    "blackjack.status.idle": "Place a bet to start.",
    "blackjack.status.turn": "Your move.",
    "blackjack.outcome.blackjack": "Blackjack! You win!",
    "blackjack.outcome.bust": "Bust! You lose.",
    "blackjack.outcome.dealerBust": "Dealer busts. You win!",
    "blackjack.outcome.push": "Push with the dealer.",
    "blackjack.outcome.playerWin": "You win!",
    "blackjack.outcome.dealerWin": "Dealer wins.",
    "blackjack.feedback.win": "You won {{amount}}!",
    "blackjack.feedback.push": "Push! Stake returned.",
    "blackjack.other.waiting": "waiting for dealer",
    "blackjack.other.double": "doubled the stake",
    "blackjack.other.hit": "taking a card",
    "blackjack.other.stand": "standing",
    "blackjack.other.hot": "on a hot streak",
    "blackjack.sidebarTitle": "Other players' bets",
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
    "messages.authBlackjack": "Sign in to play.",
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
    "games.blackjack.title": "Çevrimdışı Blackjack",
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
    "ticker.messages.2": "💎 DiamondKing blackjack'te 3 200₺ kazandı!",
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
    "blackjack.back": "← Lobiye dön",
    "blackjack.title": "Blackjack",
    "blackjack.subtitle": "Bahsinizi seçin, kart çekin ve krupiyeyi yenmeye çalışın.",
    "blackjack.stakeLabel": "Bahis tutarı (₺)",
    "blackjack.stakePlaceholder": "Minimum 100₺",
    "blackjack.start": "Eli başlat",
    "blackjack.hit": "Kart al",
    "blackjack.stand": "Yeter",
    "blackjack.restart": "Yeni bahis",
    "blackjack.dealer": "Krupiye",
    "blackjack.player": "Siz",
    "blackjack.dealerScore": "Puan: <span id=\"dealerScore\">{{value}}</span>",
    "blackjack.playerScore": "Puan: <span id=\"playerScore\">{{value}}</span>",
    "blackjack.status.idle": "Başlamak için bahis yapın.",
    "blackjack.status.turn": "Hamle sırası sizde.",
    "blackjack.outcome.blackjack": "Blackjack! Kazandınız!",
    "blackjack.outcome.bust": "Aştınız! Kaybettiniz.",
    "blackjack.outcome.dealerBust": "Krupiye aştı. Kazandınız!",
    "blackjack.outcome.push": "Krupiye ile berabere.",
    "blackjack.outcome.playerWin": "Kazandınız!",
    "blackjack.outcome.dealerWin": "Krupiye kazandı.",
    "blackjack.feedback.win": "{{amount}} kazandınız!",
    "blackjack.feedback.push": "Berabere! Bahsiniz iade edildi.",
    "blackjack.other.waiting": "krupiyeyi bekliyor",
    "blackjack.other.double": "bahsi ikiye katladı",
    "blackjack.other.hit": "kart alıyor",
    "blackjack.other.stand": "durdu",
    "blackjack.other.hot": "kazanç serisinde",
    "blackjack.sidebarTitle": "Diğer oyuncuların bahisleri",
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
    "messages.authBlackjack": "Oynamak için giriş yapın.",
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
    if (trimmed === "blackjack") return t("games.blackjack.title");
    if (trimmed === "roulette") return t("games.roulette.title");
    const lower = trimmed.toLowerCase();
    if (lower.includes("blackjack") || lower.includes("блэкдж")) {
      return t("games.blackjack.title");
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
  if (blackjackStatus && !blackjackRoundActive) {
    blackjackStatus.textContent = t("blackjack.status.idle");
  }
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

const blackjackDeckValues = [
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

const otherBetsIntervals = new Map();
let feedbackTimeout;
let rouletteSpinning = false;
let blackjackDeck = [];
let blackjackPlayerCards = [];
let blackjackDealerCards = [];
let blackjackStake = 0;
let blackjackRoundActive = false;

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

  const isGamePage = target === "roulette" || target === "blackjack";
  if (isGamePage) {
    if (appState.activeGame && appState.activeGame !== target) {
      stopOtherBets(appState.activeGame);
    }
    appState.activeGame = target;
    startOtherBets(target);
  } else if (appState.activeGame) {
    stopOtherBets(appState.activeGame);
    appState.activeGame = null;
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

function generateBlackjackBets() {
  const statuses = [
    "blackjack.other.waiting",
    "blackjack.other.double",
    "blackjack.other.hit",
    "blackjack.other.stand",
    "blackjack.other.hot",
  ];
  return Array.from({ length: randomInt(3, 5) }, () => {
    const stake = Math.round(randomInt(3, 70) * 50);
    return {
      name: randomChoice(fakeNames),
      stake,
      status: randomChoice(statuses),
    };
  });
}

function renderOtherBets(gameKey) {
  const list = gameKey === "roulette" ? rouletteOtherBets : blackjackOtherBets;
  if (!list) return;
  const items =
    gameKey === "roulette" ? generateRouletteBets() : generateBlackjackBets();
  list.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    const left = document.createElement("span");
    left.textContent = item.name;
    const right = document.createElement("span");
    if (gameKey === "roulette") {
      right.textContent = `${formatCurrency(item.stake)} • ${getColourLabel(item.color)}`;
    } else {
      right.textContent = `${formatCurrency(item.stake)} • ${t(item.status)}`;
    }
    li.append(left, right);
    list.appendChild(li);
  });
}

function startOtherBets(gameKey) {
  renderOtherBets(gameKey);
  stopOtherBets(gameKey);
  const interval = setInterval(() => renderOtherBets(gameKey), OTHER_BETS_INTERVAL);
  otherBetsIntervals.set(gameKey, interval);
}

function stopOtherBets(gameKey) {
  if (gameKey) {
    const timer = otherBetsIntervals.get(gameKey);
    if (timer) {
      clearInterval(timer);
      otherBetsIntervals.delete(gameKey);
    }
    return;
  }
  otherBetsIntervals.forEach((timer) => clearInterval(timer));
  otherBetsIntervals.clear();
}

function initializeBlackjackState() {
  blackjackDeck = [];
  blackjackPlayerCards = [];
  blackjackDealerCards = [];
  blackjackStake = 0;
  blackjackRoundActive = false;
  blackjackForm?.reset();
  if (blackjackHitButton) blackjackHitButton.disabled = true;
  if (blackjackStandButton) blackjackStandButton.disabled = true;
  if (blackjackRestartButton) blackjackRestartButton.classList.add("hidden");
  if (blackjackStartButton) blackjackStartButton.disabled = false;
  if (blackjackStatus) blackjackStatus.textContent = t("blackjack.status.idle");
  if (playerCardsEl) playerCardsEl.innerHTML = "";
  if (dealerCardsEl) dealerCardsEl.innerHTML = "";
  if (playerScoreEl) playerScoreEl.textContent = "0";
  if (dealerScoreEl) dealerScoreEl.textContent = "0";
  hideFormFeedback(blackjackFeedback);
}

function resetRouletteUI() {
  rouletteSpinning = false;
  if (rouletteNumber) rouletteNumber.textContent = "-";
  if (rouletteStatus) rouletteStatus.textContent = t("roulette.status.idle");
  hideFormFeedback(rouletteFeedback);
  rouletteForm?.reset();
  if (rouletteStartButton) rouletteStartButton.disabled = false;
}

function createBlackjackDeck() {
  const deck = [];
  blackjackDeckValues.forEach((value) => {
    for (let i = 0; i < 4; i += 1) {
      deck.push(value);
    }
  });
  return deck.sort(() => Math.random() - 0.5);
}

function drawCard() {
  if (blackjackDeck.length === 0) {
    blackjackDeck = createBlackjackDeck();
  }
  return blackjackDeck.pop();
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

function renderBlackjackHands() {
  if (dealerCardsEl) {
    dealerCardsEl.innerHTML = blackjackDealerCards
      .map((card) => `<span class="card">${card}</span>`)
      .join("");
  }
  if (playerCardsEl) {
    playerCardsEl.innerHTML = blackjackPlayerCards
      .map((card) => `<span class="card">${card}</span>`)
      .join("");
  }
  if (dealerScoreEl) {
    dealerScoreEl.textContent = calculateScore(blackjackDealerCards).toString();
  }
  if (playerScoreEl) {
    playerScoreEl.textContent = calculateScore(blackjackPlayerCards).toString();
  }
}

function finishBlackjackRound(outcome, messageKey, experienceReward = 0, messageParams = {}) {
  blackjackRoundActive = false;
  if (blackjackHitButton) blackjackHitButton.disabled = true;
  if (blackjackStandButton) blackjackStandButton.disabled = true;
  if (blackjackRestartButton) blackjackRestartButton.classList.remove("hidden");
  if (blackjackStartButton) blackjackStartButton.disabled = false;
  const translatedMessage = t(messageKey, messageParams);
  if (blackjackStatus) blackjackStatus.textContent = translatedMessage;

  const account = appState.currentAccount;
  if (!account) return;

  if (outcome === "blackjack" || outcome === "win") {
    const multiplier = outcome === "blackjack" ? 2.5 : 2;
    const winnings = Math.round(blackjackStake * multiplier);
    account.balance += winnings;
    account.wins = Number(account.wins ?? 0) + 1;
    account.favouriteGame = "blackjack";
    account.streak = Number(account.streak ?? 0) + 1;
    gainExperience(experienceReward);
    showFormFeedback(
      blackjackFeedback,
      t("messages.winAmount", { amount: formatCurrency(winnings - blackjackStake) }),
      true
    );
  } else if (outcome === "push") {
    account.balance += blackjackStake;
    showFormFeedback(blackjackFeedback, t("blackjack.feedback.push"), true);
  } else {
    account.streak = 0;
    showFormFeedback(blackjackFeedback, translatedMessage, false);
  }

  blackjackStake = 0;
  updateDashboardData();
  persistCurrentUser();
}

function startBlackjackRound(stake) {
  const account = appState.currentAccount;
  if (!account) return;
  account.balance -= stake;
  blackjackStake = stake;
  blackjackDeck = createBlackjackDeck();
  blackjackPlayerCards = [drawCard(), drawCard()];
  blackjackDealerCards = [drawCard(), drawCard()];
  blackjackRoundActive = true;
  hideFormFeedback(blackjackFeedback);
  if (blackjackRestartButton) blackjackRestartButton.classList.add("hidden");
  if (blackjackHitButton) blackjackHitButton.disabled = false;
  if (blackjackStandButton) blackjackStandButton.disabled = false;
  if (blackjackStartButton) blackjackStartButton.disabled = true;
  if (blackjackStatus) blackjackStatus.textContent = t("blackjack.status.turn");
  renderBlackjackHands();
  updateBalanceDisplays();
  persistCurrentUser();

  const playerScore = calculateScore(blackjackPlayerCards);
  if (playerScore === 21) {
    finishBlackjackRound("blackjack", "blackjack.outcome.blackjack", 12);
  }
}

function handleBlackjackHit() {
  if (!blackjackRoundActive) return;
  blackjackPlayerCards.push(drawCard());
  renderBlackjackHands();
  const playerScore = calculateScore(blackjackPlayerCards);
  if (playerScore > 21) {
    finishBlackjackRound("lose", "blackjack.outcome.bust");
  }
}

function handleBlackjackStand() {
  if (!blackjackRoundActive) return;
  if (blackjackHitButton) blackjackHitButton.disabled = true;
  if (blackjackStandButton) blackjackStandButton.disabled = true;

  let dealerScore = calculateScore(blackjackDealerCards);
  while (dealerScore < 17) {
    blackjackDealerCards.push(drawCard());
    dealerScore = calculateScore(blackjackDealerCards);
    renderBlackjackHands();
  }

  const playerScore = calculateScore(blackjackPlayerCards);
  dealerScore = calculateScore(blackjackDealerCards);

  if (dealerScore > 21) {
    finishBlackjackRound("win", "blackjack.outcome.dealerBust", 10);
  } else if (dealerScore === playerScore) {
    finishBlackjackRound("push", "blackjack.outcome.push");
  } else if (playerScore > dealerScore) {
    finishBlackjackRound("win", "blackjack.outcome.playerWin", 10);
  } else {
    finishBlackjackRound("lose", "blackjack.outcome.dealerWin");
  }
}

function handleBlackjackRestart() {
  initializeBlackjackState();
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
  stopOtherBets();
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
  } else if (gameKey === "blackjack") {
    showPage("blackjack");
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
blackjackForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!appState.currentAccount) {
    toggleAuthView("login");
    showPage("auth");
    showFormFeedback(blackjackFeedback, t("messages.authBlackjack"));
    return;
  }
  if (blackjackRoundActive) return;
  const formData = new FormData(blackjackForm);
  const stake = Number(formData.get("stake"));
  if (!Number.isFinite(stake) || stake < 100) {
    showFormFeedback(blackjackFeedback, t("messages.minimumStake"));
    return;
  }
  if (appState.currentAccount.balance < stake) {
    showFormFeedback(blackjackFeedback, t("messages.balanceInsufficient"));
    return;
  }
  startBlackjackRound(stake);
});

blackjackHitButton?.addEventListener("click", handleBlackjackHit);
blackjackStandButton?.addEventListener("click", handleBlackjackStand);
blackjackRestartButton?.addEventListener("click", handleBlackjackRestart);

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
initializeBlackjackState();
showPage("home");

document.querySelector(".switch-option.active")?.click();
