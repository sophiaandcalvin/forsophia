import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || "";
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || "";
const MEDIA_BUCKET = import.meta.env.VITE_SUPABASE_MEDIA_BUCKET || "constellation-media";
const PAGE_ID = import.meta.env.VITE_CONSTELLATION_PAGE_ID || "sophia";
const AUTH_REDIRECT_TO = import.meta.env.VITE_SUPABASE_REDIRECT_TO || `${window.location.origin}/admin`;
const SUPABASE_CONFIGURED = Boolean(SUPABASE_URL && SUPABASE_ANON_KEY);
const supabase = SUPABASE_CONFIGURED ? createClient(SUPABASE_URL, SUPABASE_ANON_KEY) : null;
let anniversaryTimingAudioContext = null;

const STORAGE_KEYS = {
  data: "sophiaConstellation:data",
  progress: "sophiaConstellation:progress",
  layout: "sophiaConstellation:layout",
  loveLottery: "sophiaConstellation:loveLottery",
  wishlist: "sophiaConstellation:wishlist",
  anniversary: "sophiaConstellation:anniversary",
  dashboardGate: "sophiaConstellation:dashboardGate",
  anniversaryAdminOverride: "sophiaConstellation:anniversaryAdminOverride",
  anniversarySnakeControlMode: "sophiaConstellation:anniversarySnakeControlMode",
};

const LEGACY_DEFAULT_SUBTITLE = "I made something for you.\nNo expectations - just memories.";

const DEFAULT_DATA = {
  title: "For Sophia",
  subtitle: "My dear love, my one and only.",
  unlockThreshold: 5,
  puzzleImage: "",
  music: {
    tracks: [
      { url: "", name: "" },
      { url: "", name: "" },
      { url: "", name: "" },
    ],
    volume: 0.35,
  },
  soundEffects: {
    starHover: { url: "", name: "", volume: 0.35 },
    starClick: { url: "", name: "", volume: 0.35 },
  },
  loveLottery: {
    music: { url: "", name: "", volume: 0.35 },
  },
  dashboardGate: {
    entryCode: "090601",
    title: "Our little home",
    subtitle: "Enter the pin to open the whole little world.",
  },
  anniversary: {
    entryCode: "1436",
    title: "Our anniversary of knowing each other",
    subtitle: "A small secret with six little locks, just for you.",
    intro:
      "Unlock the tumbler first, then open each level one by one. Every card holds a challenge, a placeholder for a gift image, and a little piece of what I wanted to give you.",
    cards: [
      {
        id: "anniversary-1",
        level: 1,
        gameType: "matching",
        name: "Photo Whispers",
        challenge: "Match each photo to its little memory, then clear the extra mini math pairs too.",
        clue: "Flip two cards at a time and find every pair to reveal the first gift.",
        answer: "",
        rewardTitle: "First little gift",
        rewardText: "Put your first anniversary gift note here.",
        image: "",
        imageName: "",
        matchingPairs: [
          { id: "pair-1", word: "First date", matchText: "", image: "", imageName: "", imagePositionY: 50 },
          { id: "pair-2", word: "Coffee", matchText: "", image: "", imageName: "", imagePositionY: 50 },
          { id: "pair-3", word: "Christmas", matchText: "", image: "", imageName: "", imagePositionY: 50 },
          { id: "pair-4", word: "Inside joke", matchText: "", image: "", imageName: "", imagePositionY: 50 },
          { id: "pair-5", word: "Song", matchText: "", image: "", imageName: "", imagePositionY: 50 },
          { id: "pair-6", word: "Us", matchText: "", image: "", imageName: "", imagePositionY: 50 },
          { id: "pair-7", word: "4 + 4", matchText: "8", image: "", imageName: "", imagePositionY: 50 },
          { id: "pair-8", word: "1 + 2", matchText: "3", image: "", imageName: "", imagePositionY: 50 },
          { id: "pair-9", word: "2 + 5", matchText: "7", image: "", imageName: "", imagePositionY: 50 },
          { id: "pair-10", word: "9 - 4", matchText: "5", image: "", imageName: "", imagePositionY: 50 },
          { id: "pair-11", word: "6 + 3", matchText: "9", image: "", imageName: "", imagePositionY: 50 },
          { id: "pair-12", word: "8 - 2", matchText: "6", image: "", imageName: "", imagePositionY: 50 },
        ],
      },
      {
        id: "anniversary-2",
        level: 2,
        gameType: "snake",
        name: "Heart Snack",
        challenge: "Guide the hungry little snake and nom nom 20 hearts without crashing.",
        clue: "Nudge the stick or arrows up, down, left, or right. Tiny sideways moves should still snap the snake fast.",
        answer: "",
        rewardTitle: "Date of your choice",
        rewardText: "After you win, pick the restaurant and date you want us to go on.",
        image: "",
        imageName: "",
      },
      {
        id: "anniversary-3",
        level: 3,
        gameType: "anagram",
        name: "Heart Shuffle",
        challenge: "Find 15 words with 3 or more letters, then find the pangram too.",
        clue: "Tap letters to build a word, submit it, and reshuffle whenever you want. The pangram uses all of them.",
        answer: "adoration",
        rewardTitle: "A letter for you",
        rewardText: "I adore her. Where quiet things and dreams stay close, a letter is hiding under your bed waiting for you.",
        image: "",
        imageName: "",
        allowedWords: [
          "ado", "aid", "air", "ait", "ana", "and", "ani", "ant", "ara", "arn",
          "art", "dan", "dao", "dar", "din", "dit", "don", "dor", "dot", "iao",
          "ion", "naa", "nar", "nat", "nid", "nit", "noa", "nod", "nor", "not",
          "oar", "oat", "oda", "ona", "ora", "ort", "rad", "ran", "rat", "ria",
          "rid", "rio", "rit", "rod", "roi", "rot", "taa", "tad", "tai", "tan",
          "tao", "tar", "tid", "tin", "toa", "tod", "toi", "ton", "too", "tor",
          "tra", "tri", "adat", "adit", "aint", "aion", "airt", "anda", "anoa", "anta",
          "anti", "arad", "aria", "arid", "arna", "arni", "dain", "dari", "darn", "dart",
          "data", "dian", "dint", "dirt", "dita", "doat", "doit", "dont", "doon", "door",
          "dorn", "drat", "inro", "into", "iodo", "iota", "iron", "naid", "naio", "nard",
          "natr", "nito", "nodi", "noir", "nori", "odor", "oint", "onto", "ooid", "oont",
          "oord", "orad", "orna", "raad", "rada", "raia", "raid", "rain", "rana", "rand",
          "rani", "rant", "rata", "rind", "riot", "rita", "road", "roan", "roid", "roit",
          "rond", "rood", "roon", "root", "rota", "roto", "taar", "tain", "tana", "tara",
          "tari", "tarn", "taro", "tiao", "tiar", "tind", "toad", "toon", "tora", "torn",
          "toro", "trin", "trio", "trod", "tron", "adati", "adion", "adorn", "airan", "antra",
          "aorta", "arado", "arain", "arati", "ariot", "aroid", "aroon", "atria", "daira", "danio",
          "danta", "darat", "daroo", "dinar", "diota", "doina", "donor", "doria", "drain", "drant",
          "droit", "drona", "idant", "nadir", "naiad", "niata", "nidor", "niota", "nitro", "noria",
          "ootid", "orant", "radio", "radon", "ranid", "ratio", "riant", "riata", "rondo", "rotan",
          "tairn", "tania", "tanoa", "tarin", "tiara", "toran", "train", "triad", "trona", "adroit",
          "aidant", "anotia", "antiar", "aroint", "artiad", "atonia", "dation", "indart", "indoor", "inroad",
          "nardoo", "ordain", "radian", "ration", "ratoon", "tarand", "toroid", "adorant", "aration", "donator",
          "intrada", "odorant", "ondatra", "oration", "otarian", "radiant", "tornado", "adoration",
        ],
      },
      {
        id: "anniversary-4",
        level: 4,
        gameType: "runner",
        name: "Run To Us",
        challenge: "Keep running for 45 seconds. Tap to jump, or press the space bar on a computer.",
        clue: "It gets a little faster every 10 seconds. In override mode, you only need to last 10 seconds.",
        answer: "",
        rewardTitle: "Lifetime memberships for us",
        rewardText: "I want to do everything with you. Claim your prize: lifetime gym memberships for us.",
        image: "",
        imageName: "",
      },
      {
        id: "anniversary-5",
        level: 5,
        gameType: "answer",
        name: "Almost There",
        challenge: "Enter a place, song, or food that would make her instantly think of you two.",
        clue: "Make this one more specific than the others.",
        answer: "coffee",
        rewardTitle: "Fifth little gift",
        rewardText: "Put your fifth anniversary gift note here.",
        image: "",
        imageName: "",
      },
      {
        id: "anniversary-6",
        level: 6,
        gameType: "timing",
        name: "Lucky Clover",
        challenge: "A little light races around a 120-piece ring. Tap at exactly the right moment and stop it on the target 20 times.",
        clue: "Wait for the fast moving light to meet the glowing target. In override mode, only 3 perfect stops are needed.",
        answer: "",
        rewardTitle: "The necklace you love",
        rewardText: "A little sparkle for you: the necklace you love.",
        image: "",
        imageName: "",
      },
    ],
  },
  letter: {
    title: "A letter",
    body:
      "Sophia,\n\nI wanted this letter to be here no matter what else you choose to open, because these are the words I do not want hidden behind a game or a puzzle.\n\nI love you. I know that more deeply now than I knew how to show before. When I think about the people I have known, the memories I carry, and the kind of love that actually stays, no one comes close to you.\n\nYou have a way of making ordinary things feel warm. A quiet day, a small joke, a look across a room, the kind of moment that seems simple until later, when I realize it stayed with me because it was you.\n\nI wish I had protected your heart better. I wish I had been steadier with something as rare as your trust. I cannot rewrite what happened, but I can be honest about what I know now: you deserved care that felt safe, consistent, and chosen.\n\nIf these memories feel soft, it is because that is how so much of you lives in me. Not loud. Not forced. Just present. You made life feel lighter in ways I still notice.\n\nI choose you. Not because I expect anything from you, and not because this letter is meant to pull you back. I choose you in the simple truth of my heart. I choose the love I have for you, the respect I should have carried better, and the hope that you always feel protected and treasured.\n\nAt the end of this, I do not want you to feel cornered. You do not owe me a reply, forgiveness, or a next step. I only wanted you to know that the love I have for you is real. It is gentle, it is yours, and it comes with no pressure.",
    photos: [
      { url: "", name: "" },
      { url: "", name: "" },
      { url: "", name: "" },
    ],
  },
  memories: [
    {
      id: "quiet-walk",
      title: "The quiet walk",
      context: "One simple afternoon",
      caption: "This day felt simple in the best way. You made everything around us feel lighter.",
      image: "",
      mediaType: "image",
      x: 17,
      y: 30,
      accent: "#94d7e4",
      hasHeart: true,
      loveMessage: "You notice details other people miss.",
    },
    {
      id: "coffee-table",
      title: "Us on our dates",
      context: "Every place felt easier with you",
      caption: "I loved getting to be out in the world with you. Dinner, coffee, little plans - it all felt better because it was us.",
      image: "",
      mediaType: "image",
      x: 31,
      y: 55,
      accent: "#f3d386",
      hasHeart: true,
      loveMessage: "You made every date feel like somewhere I wanted to stay.",
    },
    {
      id: "laugh",
      title: "The laugh I remember",
      context: "A small bright moment",
      caption: "I do not remember every detail, but I remember how the room felt when you laughed.",
      image: "",
      mediaType: "image",
      x: 45,
      y: 22,
      accent: "#f6a6ba",
      hasHeart: true,
      loveMessage: "You laugh with your whole self.",
    },
    {
      id: "drive-home",
      title: "Beside you",
      context: "Where happy felt simple",
      caption: "Beside you, I felt so happy. Even in quiet moments, being close to you made the world feel softer.",
      image: "",
      mediaType: "image",
      x: 59,
      y: 44,
      accent: "#9582f2",
      hasHeart: false,
      loveMessage: "",
    },
    {
      id: "rainy-day",
      title: "A rainy day",
      context: "Staying in",
      caption: "Nothing big happened. That was the whole point. It still felt like a day I wanted to keep.",
      image: "",
      mediaType: "image",
      x: 72,
      y: 27,
      accent: "#94d7e4",
      hasHeart: true,
      loveMessage: "You make people feel safe being themselves.",
    },
    {
      id: "favorite-photo",
      title: "The most beautiful person",
      context: "The way I see you",
      caption: "To me, you are the most beautiful person in the world. Not only because of how you look, but because of the softness and light you carry.",
      image: "",
      mediaType: "image",
      x: 82,
      y: 62,
      accent: "#f3d386",
      hasHeart: true,
      loveMessage: "Your beauty feels calm, real, and impossible not to notice.",
    },
    {
      id: "small-kindness",
      title: "A small kindness",
      context: "The part that stayed with me",
      caption: "I saw how much care you put into people. I should have appreciated that more out loud.",
      image: "",
      mediaType: "image",
      x: 52,
      y: 73,
      accent: "#f6a6ba",
      hasHeart: true,
      loveMessage: "You care deeply, even when it is hard.",
    },
    {
      id: "last-light",
      title: "Our first Christmas",
      context: "A memory wrapped in warmth",
      caption: "Our first Christmas is one of those memories I still hold carefully. It felt sweet, warm, and ours.",
      image: "",
      mediaType: "image",
      x: 25,
      y: 78,
      accent: "#9582f2",
      hasHeart: false,
      loveMessage: "",
    },
    {
      id: "shared-song",
      title: "That song",
      context: "A small soundtrack",
      caption: "I remember the feeling more than the exact moment. It was easy to be there with you.",
      image: "",
      mediaType: "image",
      x: 40,
      y: 38,
      accent: "#94d7e4",
      hasHeart: true,
      loveMessage: "You made little moments feel like they had their own music.",
    },
    {
      id: "good-morning",
      title: "A good morning",
      context: "Nothing rushed",
      caption: "There was a softness to mornings with you that I did not appreciate enough at the time.",
      image: "",
      mediaType: "image",
      x: 66,
      y: 17,
      accent: "#f3d386",
      hasHeart: false,
      loveMessage: "",
    },
    {
      id: "inside-joke",
      title: "The inside joke",
      context: "Only we understood it",
      caption: "It still makes me smile that something so small could become ours for a while.",
      image: "",
      mediaType: "image",
      x: 86,
      y: 41,
      accent: "#f6a6ba",
      hasHeart: true,
      loveMessage: "You made it easy to feel close without trying too hard.",
    },
    {
      id: "quiet-support",
      title: "By your side",
      context: "When things felt heavy",
      caption: "I remember being beside you when things felt uncertain, wishing I could carry more of it for you. I would choose that place beside you, always.",
      image: "",
      mediaType: "image",
      x: 61,
      y: 84,
      accent: "#9582f2",
      hasHeart: true,
      loveMessage: "Being there for you felt natural, because your heart matters to me.",
    },
    {
      id: "ordinary-night",
      title: "An ordinary night",
      context: "The kind I miss",
      caption: "Not every memory has a big story. Some just stayed because they felt peaceful.",
      image: "",
      mediaType: "image",
      x: 12,
      y: 62,
      accent: "#94d7e4",
      hasHeart: false,
      loveMessage: "",
    },
    {
      id: "handwritten-note",
      title: "A note I wish I left",
      context: "The words I should have said",
      caption: "Some feelings deserved to be said gently and clearly while they were right in front of me.",
      image: "",
      mediaType: "image",
      x: 77,
      y: 76,
      accent: "#f3d386",
      hasHeart: true,
      loveMessage: "You deserved tenderness that was consistent, not only remembered later.",
    },
    {
      id: "future-light",
      title: "A future light",
      context: "What I still hope for you",
      caption: "More than anything, I hope your days feel peaceful, protected, and full of the love you deserve.",
      image: "",
      mediaType: "image",
      x: 34,
      y: 88,
      accent: "#f6a6ba",
      hasHeart: false,
      loveMessage: "",
    },
  ],
};

const STARTER_MEMORY_COPY_MIGRATIONS = {
  "coffee-table": {
    title: "That little table",
    context: "Coffee and easy conversation",
    caption: "I remember how easy it was to talk with you, even when there was nothing important to say.",
    loveMessage: "You make ordinary time feel worth remembering.",
  },
  "drive-home": {
    title: "The drive home",
    context: "Windows down, music low",
    caption: "It was quiet, but not empty. I liked that kind of quiet with you.",
    loveMessage: "",
  },
  "favorite-photo": {
    title: "The photo I kept",
    context: "A favorite frame",
    caption: "There is something about this one that still feels gentle to me.",
    loveMessage: "You bring warmth without trying to perform it.",
  },
  "last-light": {
    title: "Last light",
    context: "Evening",
    caption: "The light was soft, and so was the moment. I remember feeling lucky to be there.",
    loveMessage: "",
  },
  "quiet-support": {
    title: "Quiet support",
    context: "When things felt heavy",
    caption: "I noticed how you showed up for people. I should have said more about how much that mattered.",
    loveMessage: "You care in ways that are steady and real.",
  },
};

const OPENING_SEQUENCE = [
  {
    kicker: "Before the stars",
    title: "Sophia, I choose you.",
    line: "I know that more clearly and more gently than I ever have before.",
  },
  {
    kicker: "What I know",
    title: "No one comes close.",
    line: "Not in my heart. Not in the quiet places I keep returning to.",
  },
  {
    kicker: "What I carry",
    title: "A love that stayed.",
    line: "Your softness, your light, the way you made ordinary moments feel worth holding onto.",
  },
  {
    kicker: "Still",
    title: "No pressure. Just love.",
    line: "You do not owe me anything. I only wanted you to feel seen and treasured here.",
  },
  {
    kicker: "For you",
    title: "Every star is a little moment.",
    line: "Each one is something I love, remember, or never stopped feeling.",
  },
];

const ANNIVERSARY_ANAGRAM_GAMES = {
  "anniversary-3": {
    pangram: "adoration",
    displayLetters: ["A", "O", "D", "R", "A", "T", "I", "O", "N"],
    minWords: 15,
    allowedWords: [
      "ado", "aid", "air", "ait", "ana", "and", "ani", "ant", "ara", "arn",
      "art", "dan", "dao", "dar", "din", "dit", "don", "dor", "dot", "iao",
      "ion", "naa", "nar", "nat", "nid", "nit", "noa", "nod", "nor", "not",
      "oar", "oat", "oda", "ona", "ora", "ort", "rad", "ran", "rat", "ria",
      "rid", "rio", "rit", "rod", "roi", "rot", "taa", "tad", "tai", "tan",
      "tao", "tar", "tid", "tin", "toa", "tod", "toi", "ton", "too", "tor",
      "tra", "tri", "adat", "adit", "aint", "aion", "airt", "anda", "anoa", "anta",
      "anti", "arad", "aria", "arid", "arna", "arni", "dain", "dari", "darn", "dart",
      "data", "dian", "dint", "dirt", "dita", "doat", "doit", "dont", "doon", "door",
      "dorn", "drat", "inro", "into", "iodo", "iota", "iron", "naid", "naio", "nard",
      "natr", "nito", "nodi", "noir", "nori", "odor", "oint", "onto", "ooid", "oont",
      "oord", "orad", "orna", "raad", "rada", "raia", "raid", "rain", "rana", "rand",
      "rani", "rant", "rata", "rind", "riot", "rita", "road", "roan", "roid", "roit",
      "rond", "rood", "roon", "root", "rota", "roto", "taar", "tain", "tana", "tara",
      "tari", "tarn", "taro", "tiao", "tiar", "tind", "toad", "toon", "tora", "torn",
      "toro", "trin", "trio", "trod", "tron", "adati", "adion", "adorn", "airan", "antra",
      "aorta", "arado", "arain", "arati", "ariot", "aroid", "aroon", "atria", "daira", "danio",
      "danta", "darat", "daroo", "dinar", "diota", "doina", "donor", "doria", "drain", "drant",
      "droit", "drona", "idant", "nadir", "naiad", "niata", "nidor", "niota", "nitro", "noria",
      "ootid", "orant", "radio", "radon", "ranid", "ratio", "riant", "riata", "rondo", "rotan",
      "tairn", "tania", "tanoa", "tarin", "tiara", "toran", "train", "triad", "trona", "adroit",
      "aidant", "anotia", "antiar", "aroint", "artiad", "atonia", "dation", "indart", "indoor", "inroad",
      "nardoo", "ordain", "radian", "ration", "ratoon", "tarand", "toroid", "adorant", "aration", "donator",
      "intrada", "odorant", "ondatra", "oration", "otarian", "radiant", "tornado", "adoration",
    ],
  },
};

const TOGETHER_ACTIVITIES = [
  "Go on a walk outside together and just talk",
  "Get coffee or boba together",
  "Go get ice cream together",
  "Take a sunset drive together",
  "Watch a movie together and share snacks",
  "Do a little picnic together",
  "Visit a bookstore together and pick something for each other",
  "Go to Target together and wander every aisle",
  "Try a new dessert place together",
  "Cook dinner together tonight",
  "Bake something sweet together",
  "Go thrifting together and find one cute thing",
  "Do a mini photoshoot together",
  "Have a beach walk together",
  "Go to the park together and stay off your phones",
  "Have a late-night snack run together",
  "Pick a restaurant together and make it a date",
  "Do a cozy blanket-and-show night together",
  "Go window shopping together",
  "Listen to music together and rate songs",
  "Play a game together",
  "Do a craft or paint night together",
  "Get dressed up and go somewhere cute together",
  "Go watch the sunset together",
  "Go on a small adventure and let the day decide itself",
  "Have a car talk together somewhere quiet",
  "Go to a farmers market together",
  "Make a dessert crawl together",
  "Take cute pictures together today",
  "Go to the mall together and make a whole afternoon of it",
  "Try a new drink spot together",
  "Go somewhere with a nice view together",
  "Have a breakfast date together",
  "Do a spontaneous date together tonight",
  "Go sit outside together and just be with each other",
];

const DATE_PLAN_IDEAS = [
  "sunset picnic", "cozy movie night", "coffee shop morning", "bookstore date", "museum afternoon",
  "farmers market walk", "beach sunset", "park picnic", "arcade night", "dessert crawl",
  "fancy dinner", "home pasta night", "mini road trip", "photo booth date", "paint night",
  "ice cream walk", "brunch date", "garden stroll", "candlelit dinner", "breakfast in bed",
  "boba and board games", "thrift store challenge", "rooftop view night", "aquarium day", "spa night at home",
];

const LOVE_LOTTERY_ACTIVITIES = buildLoveLotteryActivities();

const state = {
  data: loadData(),
  progress: loadProgress(),
  loveLottery: loadLoveLotteryProgress(),
  wishlist: loadWishlistItems(),
  anniversary: loadAnniversaryProgress(),
  dashboardGateUnlocked: loadDashboardGateProgress(),
  session: null,
  remoteReady: false,
  remoteMessage: "",
  activeScreen: getScreenForPath(),
  previousScreen: "constellation",
  selectedActivityId: null,
  activeMemoryId: null,
  activeMediaIndex: 0,
  albumIndex: 0,
  activeTrackIndex: 0,
  openingIndex: 0,
  openingTimer: null,
  audioUnlocked: false,
  shuffleTimer: null,
  soundEffectPlayers: {
    starHover: null,
    starClick: null,
  },
  lastSoundAt: {
    starHover: 0,
    starClick: 0,
  },
  activeDateEditorPlanId: null,
  activeMilestoneReward: null,
  activeWishlistItemId: null,
  activeAnniversaryCardId: null,
  anniversaryGameDeck: [],
  anniversaryGameSelections: [],
  anniversaryMatchedPairIds: [],
  anniversaryMatchingCelebration: false,
  anniversaryGameBusy: false,
  anniversaryGameMessage: "",
  anniversaryZoomedTileId: null,
  anniversaryZoomPreview: null,
  anniversarySnake: null,
  anniversarySnakeTimer: null,
  anniversarySnakePointerId: null,
  anniversarySnakeJoystickVector: { x: 0, y: 0 },
  anniversaryRunner: null,
  anniversaryRunnerFrame: null,
  anniversaryTiming: null,
  anniversaryTimingFrame: null,
  anniversaryTimingResumeTimer: null,
  anniversaryRunnerPointerId: null,
  anniversaryRunnerPressStartedAt: 0,
  anniversaryAnagramSelectedTileIds: [],
  anniversaryAnagramShuffle: [],
  anniversaryAnagramFeedback: "",
  anniversaryAdminActiveCardIndex: 0,
  anniversaryAdminOverride: loadAnniversaryAdminOverride(),
  anniversarySnakeControlMode: loadAnniversarySnakeControlMode(),
  anniversaryOverrideAnagramFoundWords: {},
  anniversaryOverrideRunnerHighScores: {},
  mediaLibraryTarget: null,
  dashboardPinEntry: "",
  anniversaryPinEntry: "",
  revealComplete: false,
  revealListeners: null,
};

let anniversaryAnagramFeedbackTimer = null;

const elements = {
  ambientCanvas: document.querySelector("#ambientCanvas"),
  todayPlanBanner: document.querySelector("#todayPlanBanner"),
  loveTrailCanvas: document.querySelector("#loveTrailCanvas"),
  dashboardScreen: document.querySelector("#dashboardScreen"),
  dashboardGatePanel: document.querySelector("#dashboardGatePanel"),
  dashboardMainPanel: document.querySelector("#dashboardMainPanel"),
  dashboardGateTitle: document.querySelector("#dashboardGateTitle"),
  dashboardGateSubtitle: document.querySelector("#dashboardGateSubtitle"),
  dashboardPinDots: document.querySelector("#dashboardPinDots"),
  dashboardPinButtons: Array.from(document.querySelectorAll("[data-dashboard-pin]")),
  dashboardPinClearButton: document.querySelector("#dashboardPinClearButton"),
  dashboardPinBackspaceButton: document.querySelector("#dashboardPinBackspaceButton"),
  dashboardUnlockButton: document.querySelector("#dashboardUnlockButton"),
  dashboardLockHint: document.querySelector("#dashboardLockHint"),
  importantDatesPanel: document.querySelector("#importantDatesPanel"),
  importantDatesList: document.querySelector("#importantDatesList"),
  datesScreen: document.querySelector("#datesScreen"),
  openDatesButton: document.querySelector("#openDatesButton"),
  datesHomeButton: document.querySelector("#datesHomeButton"),
  openDateCreatorButton: document.querySelector("#openDateCreatorButton"),
  dateCreatorForm: document.querySelector("#dateCreatorForm"),
  dateCreatorTypeSelect: document.querySelector("#dateCreatorTypeSelect"),
  dateCreatorNameInput: document.querySelector("#dateCreatorNameInput"),
  dateCreatorDateInput: document.querySelector("#dateCreatorDateInput"),
  dateCreatorEndLabel: document.querySelector("#dateCreatorEndLabel"),
  dateCreatorEndInput: document.querySelector("#dateCreatorEndInput"),
  dateCreatorLocationInput: document.querySelector("#dateCreatorLocationInput"),
  datesList: document.querySelector("#datesList"),
  wishlistScreen: document.querySelector("#wishlistScreen"),
  randomizerScreen: document.querySelector("#randomizerScreen"),
  anniversaryScreen: document.querySelector("#anniversaryScreen"),
  openSophiaPageButton: document.querySelector("#openSophiaPageButton"),
  openRandomizerButton: document.querySelector("#openRandomizerButton"),
  openWishlistButton: document.querySelector("#openWishlistButton"),
  openAnniversaryButton: document.querySelector("#openAnniversaryButton"),
  wishlistHomeButton: document.querySelector("#wishlistHomeButton"),
  anniversaryHomeButton: document.querySelector("#anniversaryHomeButton"),
  wishlistTabs: Array.from(document.querySelectorAll("[data-wishlist-tab]")),
  wishlistPanels: Array.from(document.querySelectorAll("[data-wishlist-panel]")),
  wishlistForms: Array.from(document.querySelectorAll("[data-wishlist-added-by]")),
  wishlistCalvinList: document.querySelector("#wishlistCalvinList"),
  wishlistList: document.querySelector("#wishlistList"),
  wishlistEditorModal: document.querySelector("#wishlistEditorModal"),
  wishlistEditorNameInput: document.querySelector("#wishlistEditorNameInput"),
  wishlistEditorUrlInput: document.querySelector("#wishlistEditorUrlInput"),
  wishlistEditorNoteInput: document.querySelector("#wishlistEditorNoteInput"),
  saveWishlistEditorButton: document.querySelector("#saveWishlistEditorButton"),
  mediaLibraryRail: document.querySelector("#mediaLibraryRail"),
  mediaLibraryTitle: document.querySelector("#mediaLibraryTitle"),
  mediaLibraryContext: document.querySelector("#mediaLibraryContext"),
  mediaLibraryGrid: document.querySelector("#mediaLibraryGrid"),
  mediaLibraryEmpty: document.querySelector("#mediaLibraryEmpty"),
  randomizerHomeButton: document.querySelector("#randomizerHomeButton"),
  anniversaryLockPanel: document.querySelector("#anniversaryLockPanel"),
  anniversaryMainPanel: document.querySelector("#anniversaryMainPanel"),
  anniversaryTitle: document.querySelector("#anniversaryTitle"),
  anniversarySubtitle: document.querySelector("#anniversarySubtitle"),
  anniversaryIntro: document.querySelector("#anniversaryIntro"),
  anniversaryPinDots: document.querySelector("#anniversaryPinDots"),
  anniversaryTumblerUpButtons: Array.from(document.querySelectorAll("[data-anniversary-tumbler-up]")),
  anniversaryTumblerDownButtons: Array.from(document.querySelectorAll("[data-anniversary-tumbler-down]")),
  anniversaryTumblerResetButton: document.querySelector("#anniversaryTumblerResetButton"),
  anniversaryUnlockButton: document.querySelector("#anniversaryUnlockButton"),
  anniversaryLockHint: document.querySelector("#anniversaryLockHint"),
  anniversaryProgressText: document.querySelector("#anniversaryProgressText"),
  anniversaryCards: document.querySelector("#anniversaryCards"),
  anniversaryGameModal: document.querySelector("#anniversaryGameModal"),
  anniversaryGameCard: document.querySelector("#anniversaryGameCard"),
  anniversaryGameTitle: document.querySelector("#anniversaryGameTitle"),
  anniversaryGameSubtitle: document.querySelector("#anniversaryGameSubtitle"),
  anniversaryGameDescription: document.querySelector("#anniversaryGameDescription"),
  anniversaryGameRotateNotice: document.querySelector("#anniversaryGameRotateNotice"),
  anniversaryGameHud: document.querySelector("#anniversaryGameHud"),
  anniversaryGameBoard: document.querySelector("#anniversaryGameBoard"),
  anniversaryGameForm: document.querySelector("#anniversaryGameForm"),
  anniversaryGameInput: document.querySelector("#anniversaryGameInput"),
  anniversaryGameGiftReveal: document.querySelector("#anniversaryGameGiftReveal"),
  anniversaryGameGiftTitle: document.querySelector("#anniversaryGameGiftTitle"),
  anniversaryGameGiftText: document.querySelector("#anniversaryGameGiftText"),
  anniversaryGameMessage: document.querySelector("#anniversaryGameMessage"),
  anniversaryDateRewardModal: document.querySelector("#anniversaryDateRewardModal"),
  anniversaryDateRewardTitle: document.querySelector("#anniversaryDateRewardTitle"),
  anniversaryDateRewardPhoto: document.querySelector("#anniversaryDateRewardPhoto"),
  anniversaryDateRewardText: document.querySelector("#anniversaryDateRewardText"),
  anniversaryDateRewardIntroActions: document.querySelector("#anniversaryDateRewardIntroActions"),
  anniversaryDateRewardFormFields: document.querySelector("#anniversaryDateRewardFormFields"),
  claimAnniversaryDateRewardButton: document.querySelector("#claimAnniversaryDateRewardButton"),
  scheduleAnniversaryDateRewardLaterButton: document.querySelector("#scheduleAnniversaryDateRewardLaterButton"),
  anniversaryDateRewardTypeSelect: document.querySelector("#anniversaryDateRewardTypeSelect"),
  anniversaryDateRewardLocationInput: document.querySelector("#anniversaryDateRewardLocationInput"),
  anniversaryDateRewardDateInput: document.querySelector("#anniversaryDateRewardDateInput"),
  anniversaryDateRewardEndLabel: document.querySelector("#anniversaryDateRewardEndLabel"),
  anniversaryDateRewardEndInput: document.querySelector("#anniversaryDateRewardEndInput"),
  saveAnniversaryDateRewardButton: document.querySelector("#saveAnniversaryDateRewardButton"),
  heartPhotoFrame: document.querySelector("#heartPhotoFrame"),
  randomizerStage: document.querySelector("#randomizerStage"),
  randomizerResult: document.querySelector("#randomizerResult"),
  randomizerTask: document.querySelector("#randomizerTask"),
  selectedDateNote: document.querySelector("#selectedDateNote"),
  todayPicksList: document.querySelector("#todayPicksList"),
  openActivityListButton: document.querySelector("#openActivityListButton"),
  activityListModal: document.querySelector("#activityListModal"),
  spinDateButton: document.querySelector("#spinDateButton"),
  markDateButton: document.querySelector("#markDateButton"),
  resetDateButton: document.querySelector("#resetDateButton"),
  activityCount: document.querySelector("#activityCount"),
  activityList: document.querySelector("#activityList"),
  loveProgressCount: document.querySelector("#loveProgressCount"),
  loveProgressNext: document.querySelector("#loveProgressNext"),
  loveProgressTrack: document.querySelector("#loveProgressTrack"),
  loveProgressFill: document.querySelector("#loveProgressFill"),
  loveProgressStars: document.querySelector("#loveProgressStars"),
  milestoneRewardModal: document.querySelector("#milestoneRewardModal"),
  quickRewardModal: document.querySelector("#quickRewardModal"),
  quickRewardText: document.querySelector("#quickRewardText"),
  milestoneRewardEarnedText: document.querySelector("#milestoneRewardEarnedText"),
  milestoneRewardTypeSelect: document.querySelector("#milestoneRewardTypeSelect"),
  milestoneRewardNameInput: document.querySelector("#milestoneRewardNameInput"),
  milestoneRewardDateFields: document.querySelector("#milestoneRewardDateFields"),
  milestoneRewardDateInput: document.querySelector("#milestoneRewardDateInput"),
  milestoneRewardEndLabel: document.querySelector("#milestoneRewardEndLabel"),
  milestoneRewardEndInput: document.querySelector("#milestoneRewardEndInput"),
  milestoneRewardLocationInput: document.querySelector("#milestoneRewardLocationInput"),
  saveMilestoneRewardButton: document.querySelector("#saveMilestoneRewardButton"),
  nextDateLog: document.querySelector("#nextDateLog"),
  loveLotteryAudio: document.querySelector("#loveLotteryAudio"),
  dateEditorModal: document.querySelector("#dateEditorModal"),
  dateEditorItemName: document.querySelector("#dateEditorItemName"),
  dateEditorTypeSelect: document.querySelector("#dateEditorTypeSelect"),
  dateEditorNameInput: document.querySelector("#dateEditorNameInput"),
  dateEditorInput: document.querySelector("#dateEditorInput"),
  dateEditorEndLabel: document.querySelector("#dateEditorEndLabel"),
  dateEditorEndInput: document.querySelector("#dateEditorEndInput"),
  dateEditorLocationInput: document.querySelector("#dateEditorLocationInput"),
  dateEditorMapLinks: document.querySelector("#dateEditorMapLinks"),
  saveDateEditorButton: document.querySelector("#saveDateEditorButton"),
  landingScreen: document.querySelector("#landingScreen"),
  openingScreen: document.querySelector("#openingScreen"),
  constellationScreen: document.querySelector("#constellationScreen"),
  puzzleScreen: document.querySelector("#puzzleScreen"),
  letterScreen: document.querySelector("#letterScreen"),
  landingTitle: document.querySelector("#landingTitle"),
  landingSubtext: document.querySelector(".landing-subtext"),
  enterButton: document.querySelector("#enterButton"),
  landingMusicButton: document.querySelector("#landingMusicButton"),
  openingLetter: document.querySelector("#openingLetter"),
  openingKicker: document.querySelector("#openingKicker"),
  openingTitle: document.querySelector("#openingTitle"),
  openingLine: document.querySelector("#openingLine"),
  openingProgress: document.querySelector("#openingProgress"),
  skipOpeningButton: document.querySelector("#skipOpeningButton"),
  backToLandingButton: document.querySelector("#backToLandingButton"),
  starsLayer: document.querySelector("#starsLayer"),
  constellationLines: document.querySelector("#constellationLines"),
  memoryProgress: document.querySelector("#memoryProgress"),
  heartProgress: document.querySelector("#heartProgress"),
  openAlbumButton: document.querySelector("#openAlbumButton"),
  openPuzzleButton: document.querySelector("#openPuzzleButton"),
  openLetterButton: document.querySelector("#openLetterButton"),
  openAdminButton: document.querySelector("#openAdminButton"),
  revealContainer: document.querySelector("#revealContainer"),
  revealPhoto: document.querySelector("#revealPhoto"),
  revealCanvas: document.querySelector("#revealCanvas"),
  closePuzzleButton: document.querySelector("#closePuzzleButton"),
  puzzleLetterButton: document.querySelector("#puzzleLetterButton"),
  closeLetterButton: document.querySelector("#closeLetterButton"),
  letterTitle: document.querySelector("#letterTitle"),
  letterBody: document.querySelector("#letterBody"),
  memoryModal: document.querySelector("#memoryModal"),
  memoryImage: document.querySelector("#memoryImage"),
  memoryTitle: document.querySelector("#memoryTitle"),
  memoryContext: document.querySelector("#memoryContext"),
  memoryCaption: document.querySelector("#memoryCaption"),
  hiddenMomentButton: document.querySelector("#hiddenMomentButton"),
  hiddenMemoryModal: document.querySelector("#hiddenMemoryModal"),
  hiddenMemoryMedia: document.querySelector("#hiddenMemoryMedia"),
  hiddenMemoryTitle: document.querySelector("#hiddenMemoryTitle"),
  hiddenMemoryCaption: document.querySelector("#hiddenMemoryCaption"),
  albumModal: document.querySelector("#albumModal"),
  albumMedia: document.querySelector("#albumMedia"),
  albumCounter: document.querySelector("#albumCounter"),
  albumTitle: document.querySelector("#albumTitle"),
  albumContext: document.querySelector("#albumContext"),
  albumCaption: document.querySelector("#albumCaption"),
  albumPrevButton: document.querySelector("#albumPrevButton"),
  albumNextButton: document.querySelector("#albumNextButton"),
  musicAudio: document.querySelector("#musicAudio"),
  musicToggleButton: document.querySelector("#musicToggleButton"),
  musicIcon: document.querySelector("#musicIcon"),
  musicTrackLabel: document.querySelector("#musicTrackLabel"),
  volumeInput: document.querySelector("#volumeInput"),
  adminPanel: document.querySelector("#adminPanel"),
  adminForm: document.querySelector("#adminForm"),
  adminSupabaseStatus: document.querySelector("#adminSupabaseStatus"),
  adminEmailLabel: document.querySelector("#adminEmailLabel"),
  adminEmailInput: document.querySelector("#adminEmailInput"),
  adminPasswordLabel: document.querySelector("#adminPasswordLabel"),
  adminPasswordInput: document.querySelector("#adminPasswordInput"),
  signInButton: document.querySelector("#signInButton"),
  sendMagicLinkButton: document.querySelector("#sendMagicLinkButton"),
  signOutButton: document.querySelector("#signOutButton"),
  reloadRemoteButton: document.querySelector("#reloadRemoteButton"),
  emailInviteStatus: document.querySelector("#emailInviteStatus"),
  emailRecipientInput: document.querySelector("#emailRecipientInput"),
  emailPageUrlInput: document.querySelector("#emailPageUrlInput"),
  emailFromNameInput: document.querySelector("#emailFromNameInput"),
  sendTestEmailButton: document.querySelector("#sendTestEmailButton"),
  adminTitle: document.querySelector("#adminTitle"),
  adminSubtitle: document.querySelector("#adminSubtitle"),
  adminThreshold: document.querySelector("#adminThreshold"),
  adminMusicStatus: document.querySelector("#adminMusicStatus"),
  adminMusicInputs: Array.from(document.querySelectorAll("[data-music-input]")),
  adminMusicVolume: document.querySelector("#adminMusicVolume"),
  clearMusicButton: document.querySelector("#clearMusicButton"),
  soundLibraryStatus: document.querySelector("#soundLibraryStatus"),
  soundEffectInputs: Array.from(document.querySelectorAll("[data-sfx-input]")),
  soundEffectVolumeInputs: Array.from(document.querySelectorAll("[data-sfx-volume]")),
  clearSoundEffectsButton: document.querySelector("#clearSoundEffectsButton"),
  adminPuzzleImage: document.querySelector("#adminPuzzleImage"),
  clearPuzzleImageButton: document.querySelector("#clearPuzzleImageButton"),
  adminLetterTitle: document.querySelector("#adminLetterTitle"),
  adminLetterBody: document.querySelector("#adminLetterBody"),
  letterPhotoStatus: document.querySelector("#letterPhotoStatus"),
  letterPhotoInputs: Array.from(document.querySelectorAll("[data-letter-photo-input]")),
  clearLetterPhotosButton: document.querySelector("#clearLetterPhotosButton"),
  memoryEditorList: document.querySelector("#memoryEditorList"),
  addMemoryButton: document.querySelector("#addMemoryButton"),
  exportJsonButton: document.querySelector("#exportJsonButton"),
  importJsonInput: document.querySelector("#importJsonInput"),
  resetProgressButton: document.querySelector("#resetProgressButton"),
  resetDataButton: document.querySelector("#resetDataButton"),
  adminTabs: Array.from(document.querySelectorAll("[data-admin-tab]")),
  adminTabPanels: Array.from(document.querySelectorAll("[data-admin-panel]")),
  loveLotteryMusicStatus: document.querySelector("#loveLotteryMusicStatus"),
  loveLotteryMusicInput: document.querySelector("#loveLotteryMusicInput"),
  loveLotteryMusicVolume: document.querySelector("#loveLotteryMusicVolume"),
  clearLoveLotteryMusicButton: document.querySelector("#clearLoveLotteryMusicButton"),
  anniversaryEntryCode: document.querySelector("#anniversaryEntryCode"),
  dashboardEntryCode: document.querySelector("#dashboardEntryCode"),
  dashboardAdminTitle: document.querySelector("#dashboardAdminTitle"),
  dashboardAdminSubtitle: document.querySelector("#dashboardAdminSubtitle"),
  anniversaryAdminTitle: document.querySelector("#anniversaryAdminTitle"),
  anniversaryAdminSubtitle: document.querySelector("#anniversaryAdminSubtitle"),
  anniversaryAdminIntro: document.querySelector("#anniversaryAdminIntro"),
  anniversaryAdminOverrideToggle: document.querySelector("#anniversaryAdminOverrideToggle"),
  anniversaryAdminOverrideStatus: document.querySelector("#anniversaryAdminOverrideStatus"),
  anniversaryAdminWorkspace: document.querySelector("#anniversaryAdminWorkspace"),
  anniversaryAdminCardList: document.querySelector("#anniversaryAdminCardList"),
  anniversaryAdminCardTabs: document.querySelector("#anniversaryAdminCardTabs"),
  resetAnniversaryProgressButton: document.querySelector("#resetAnniversaryProgressButton"),
  globalDock: document.querySelector("#globalDock"),
  dockToggleButton: document.querySelector("#dockToggleButton"),
  dockLinks: Array.from(document.querySelectorAll("[data-dock-target]")),
  datesDockBadge: document.querySelector("#datesDockBadge"),
  wishlistDockBadge: document.querySelector("#wishlistDockBadge"),
  toastHost: document.querySelector("#toastHost"),
};

function loadData() {
  const stored = localStorage.getItem(STORAGE_KEYS.data);
  if (!stored) {
    return structuredClone(DEFAULT_DATA);
  }

  try {
    return normalizeData(JSON.parse(stored));
  } catch {
    return structuredClone(DEFAULT_DATA);
  }
}

function normalizeData(data) {
  const fallback = structuredClone(DEFAULT_DATA);
  const memories = updateStarterMemoryCopy(
    mergeStarterMemories(
      Array.isArray(data.memories) && data.memories.length ? data.memories : fallback.memories,
      fallback.memories
    ),
    fallback.memories
  );

  return {
    ...fallback,
    ...data,
    title: data.title || fallback.title,
    subtitle: !data.subtitle || data.subtitle === LEGACY_DEFAULT_SUBTITLE ? fallback.subtitle : data.subtitle,
    unlockThreshold: Number(data.unlockThreshold) || fallback.unlockThreshold,
    puzzleImage: data.puzzleImage || "",
    music: normalizeMusic(data.music, fallback.music),
    soundEffects: normalizeSoundEffects(data.soundEffects, fallback.soundEffects, normalizeMusic(data.music, fallback.music).volume),
    loveLottery: normalizeLoveLotterySettings(data.loveLottery, fallback.loveLottery),
    dashboardGate: normalizeDashboardGateSettings(data.dashboardGate, fallback.dashboardGate),
    anniversary: normalizeAnniversarySettings(data.anniversary, fallback.anniversary),
    letter: {
      ...fallback.letter,
      ...(data.letter || {}),
      photos: normalizeLetterPhotos(data.letter?.photos || data.letter?.images, fallback.letter.photos),
    },
    memories: memories.map((memory, index) => {
      const media = normalizeMemoryMedia(memory);

      return {
        id: memory.id || `memory-${Date.now()}-${index}`,
        title: memory.title || `Memory ${index + 1}`,
        context: memory.context || "",
        caption: memory.caption || "",
        image: media[0]?.url || memory.image || "",
        mediaType: media[0]?.type || memory.mediaType || inferMediaType(memory.image),
        media,
        x: clampNumber(Number(memory.x), 8, 92, 16 + index * 8),
        y: clampNumber(Number(memory.y), 12, 86, 25 + index * 5),
        accent: memory.accent || fallback.memories[index % fallback.memories.length].accent,
        hasHeart: Boolean(memory.hasHeart),
        loveMessage: memory.loveMessage || "",
        heartPhoto: {
          url: memory.heartPhoto?.url || "",
          name: memory.heartPhoto?.name || "",
        },
      };
    }),
  };
}

function normalizeAnniversarySettings(settings, fallbackSettings) {
  const sourceCards = Array.isArray(settings?.cards) ? settings.cards : [];

  return {
    ...fallbackSettings,
    ...(settings || {}),
    entryCode: String(settings?.entryCode || fallbackSettings.entryCode || "1436").replace(/\D/g, "").slice(0, 4) || "1436",
    title: settings?.title || fallbackSettings.title,
    subtitle: settings?.subtitle || fallbackSettings.subtitle,
    intro: settings?.intro || fallbackSettings.intro,
    cards: fallbackSettings.cards.map((fallbackCard, index) => {
      const card = sourceCards[index] || {};
      const usesLegacyLevelOneCopy =
        index === 0 &&
        (card.name === "Level 1: Sweet Start" ||
          card.challenge === "Name the month we first started knowing each other." ||
          card.clue === "The answer is just the month name, like March.");
      const usesLegacyLevelTwoAnswerPrompt =
        index === 1 &&
        (card.gameType === "answer" ||
          card.name === "Little Memory Lock" ||
          card.challenge === "Type the city where one of your favorite early memories happened.");
      const usesLegacyLevelThreeAnswerPrompt =
        index === 2 &&
        (card.gameType === "answer" ||
          card.name === "Soft Detail" ||
          card.challenge === "Enter a short word only the two of you would immediately understand." ||
          card.answer === "baby");
      const usesLegacyLevelFourAnswerPrompt =
        index === 3 &&
        (card.gameType === "answer" ||
          card.name === "Deeper Cut" ||
          card.challenge === "Use a four-digit year tied to your story." ||
          card.answer === "2024");
      const usesLegacyLevelSixAnswerPrompt =
        index === 5 &&
        (card.gameType === "answer" ||
          card.name === "Final Lock" ||
          card.challenge === "Type the final answer that should open the last gift." ||
          card.answer === "forever");
      const usesLegacyExpandedMathDeck =
        index === 0 &&
        Array.isArray(card.matchingPairs) &&
        card.matchingPairs.length > fallbackCard.matchingPairs.length;
      const normalizedName = usesLegacyLevelOneCopy || usesLegacyLevelTwoAnswerPrompt || usesLegacyLevelThreeAnswerPrompt || usesLegacyLevelFourAnswerPrompt || usesLegacyLevelSixAnswerPrompt
        ? fallbackCard.name
        : card.name || fallbackCard.name;
      const normalizedChallenge = usesLegacyLevelOneCopy || usesLegacyExpandedMathDeck || usesLegacyLevelSixAnswerPrompt
        ? fallbackCard.challenge
        : card.challenge || fallbackCard.challenge;
      const normalizedClue = usesLegacyLevelOneCopy || usesLegacyLevelThreeAnswerPrompt || usesLegacyLevelFourAnswerPrompt || usesLegacyLevelSixAnswerPrompt
        ? fallbackCard.clue
        : card.clue || fallbackCard.clue;
      const normalizedPairs = usesLegacyExpandedMathDeck
        ? normalizeAnniversaryMatchingPairs(
            [
              ...(card.matchingPairs || []).slice(0, 6),
              fallbackCard.matchingPairs[6],
              ...(card.matchingPairs || []).slice(6, 11),
            ],
            fallbackCard.matchingPairs
          )
        : normalizeAnniversaryMatchingPairs(card.matchingPairs, fallbackCard.matchingPairs);
      return {
        ...fallbackCard,
        ...card,
        id: card.id || fallbackCard.id,
        level: index + 1,
        gameType: usesLegacyLevelTwoAnswerPrompt || usesLegacyLevelThreeAnswerPrompt || usesLegacyLevelFourAnswerPrompt || usesLegacyLevelSixAnswerPrompt
          ? fallbackCard.gameType
          : card.gameType || fallbackCard.gameType || "answer",
        name: normalizedName,
        challenge: usesLegacyLevelTwoAnswerPrompt || usesLegacyLevelThreeAnswerPrompt || usesLegacyLevelFourAnswerPrompt || usesLegacyLevelSixAnswerPrompt
          ? fallbackCard.challenge
          : normalizedChallenge,
        clue: usesLegacyLevelTwoAnswerPrompt || usesLegacyLevelFourAnswerPrompt || usesLegacyLevelSixAnswerPrompt
          ? fallbackCard.clue
          : normalizedClue,
        answer: String(
          usesLegacyLevelTwoAnswerPrompt || usesLegacyLevelThreeAnswerPrompt || usesLegacyLevelFourAnswerPrompt || usesLegacyLevelSixAnswerPrompt
            ? fallbackCard.answer
            : card.answer || fallbackCard.answer || ""
        ).trim().toLowerCase(),
        rewardTitle: card.rewardTitle || fallbackCard.rewardTitle,
        rewardText: card.rewardText || fallbackCard.rewardText,
        image: card.image || "",
        imageName: card.imageName || "",
        allowedWords: Array.from(
          new Set(
            [
              ...(Array.isArray(fallbackCard.allowedWords) ? fallbackCard.allowedWords : []),
              ...(Array.isArray(card.allowedWords) ? card.allowedWords : []),
            ]
              .map((word) => String(word || "").trim().toLowerCase())
              .filter(Boolean)
          )
        ).sort(),
        matchingPairs: normalizedPairs,
      };
    }),
  };
}

function normalizeAnniversaryMatchingPairs(pairs, fallbackPairs = []) {
  const source = Array.isArray(pairs) ? pairs : [];
  const fallback = Array.isArray(fallbackPairs) ? fallbackPairs : [];

  return Array.from({ length: fallback.length || source.length || 6 }, (_, index) => {
    const pair = source[index] || fallback[index] || {};
    return {
      id: pair.id || fallback[index]?.id || `pair-${index + 1}`,
      word: pair.word || fallback[index]?.word || `Pair ${index + 1}`,
      matchText: pair.matchText || fallback[index]?.matchText || "",
      image: pair.image || "",
      imageName: pair.imageName || "",
      imagePositionY: clampNumber(Number(pair.imagePositionY), 0, 100, Number(fallback[index]?.imagePositionY) || 50),
    };
  });
}

function getAnniversaryGameLabel(card) {
  if (card.gameType === "matching") {
    return "Memory Match";
  }

  if (card.gameType === "snake") {
    return "Snake Game";
  }

  if (card.gameType === "runner") {
    return "Runner Game";
  }

  if (card.gameType === "anagram") {
    return "Anagram Hunt";
  }

  if (card.gameType === "timing") {
    return "Timing Ring";
  }

  return "Secret Challenge";
}

function addMediaLibraryImage(items, seen, url, name, source) {
  if (!url || inferMediaType(url) !== "image" || seen.has(url)) {
    return;
  }

  seen.add(url);
  items.push({
    url,
    name: name || "Saved image",
    source,
  });
}

function collectMediaLibraryImages() {
  const items = [];
  const seen = new Set();
  const memories = Array.isArray(state.data.memories) ? state.data.memories : [];
  const letterPhotos = normalizeLetterPhotos(state.data.letter?.photos, DEFAULT_DATA.letter.photos);
  const anniversarySettings = normalizeAnniversarySettings(state.data.anniversary, DEFAULT_DATA.anniversary);

  memories.forEach((memory, index) => {
    const label = memory.title || `Memory ${index + 1}`;
    const media = Array.isArray(memory.media) ? memory.media : [];
    media.forEach((entry) => {
      addMediaLibraryImage(items, seen, entry?.url, entry?.name || label, `Memory: ${label}`);
    });
    addMediaLibraryImage(items, seen, memory.image, label, `Memory: ${label}`);
    addMediaLibraryImage(items, seen, memory.heartPhoto?.url, memory.heartPhoto?.name || `${label} heart photo`, `SC moment: ${label}`);
  });

  letterPhotos.forEach((photo, index) => {
    addMediaLibraryImage(items, seen, photo.url, photo.name || `Letter photo ${index + 1}`, "Letter");
  });

  addMediaLibraryImage(items, seen, state.data.puzzleImage, "Reveal photo", "Puzzle reveal");

  anniversarySettings.cards.forEach((card) => {
    addMediaLibraryImage(items, seen, card.image, card.imageName || card.name, `Anniversary: ${card.name}`);
    card.matchingPairs.forEach((pair, pairIndex) => {
      addMediaLibraryImage(
        items,
        seen,
        pair.image,
        pair.imageName || `${card.name} pair ${pairIndex + 1}`,
        `Anniversary pair: ${pair.word || `Pair ${pairIndex + 1}`}`
      );
    });
  });

  return items;
}

function normalizeDashboardGateSettings(settings, fallbackSettings) {
  return {
    ...fallbackSettings,
    ...(settings || {}),
    entryCode: String(settings?.entryCode || fallbackSettings.entryCode || "090601").replace(/\D/g, "").slice(0, 6) || "090601",
    title: settings?.title || fallbackSettings.title,
    subtitle: settings?.subtitle || fallbackSettings.subtitle,
  };
}

function normalizeLetterPhotos(photos, fallbackPhotos) {
  const source = Array.isArray(photos) ? photos : [];
  return Array.from({ length: 3 }, (_, index) => {
    const photo = source[index] || fallbackPhotos[index] || {};
    if (typeof photo === "string") {
      return { url: photo, name: "" };
    }

    return {
      url: photo.url || "",
      name: photo.name || "",
    };
  });
}

function mergeStarterMemories(memories, starterMemories) {
  const existingIds = new Set(memories.map((memory) => memory.id));
  const missing = starterMemories.filter((memory) => !existingIds.has(memory.id));
  return [...memories, ...missing];
}

function updateStarterMemoryCopy(memories, starterMemories) {
  const starterById = new Map(starterMemories.map((memory) => [memory.id, memory]));
  return memories.map((memory) => {
    const legacy = STARTER_MEMORY_COPY_MIGRATIONS[memory.id];
    const starter = starterById.get(memory.id);

    if (!legacy || !starter) {
      return memory;
    }

    const nextMemory = { ...memory };
    ["title", "context", "caption", "loveMessage"].forEach((field) => {
      if (nextMemory[field] === legacy[field]) {
        nextMemory[field] = starter[field];
      }
    });

    return nextMemory;
  });
}

function normalizeSoundEffects(soundEffects, fallbackSoundEffects, defaultVolume = DEFAULT_DATA.music.volume) {
  const fallbackVolume = clampNumber(Number(defaultVolume), 0, 1, DEFAULT_DATA.music.volume);

  return {
    starHover: {
      ...fallbackSoundEffects.starHover,
      ...(soundEffects?.starHover || {}),
      volume: clampNumber(Number(soundEffects?.starHover?.volume), 0, 1, fallbackVolume),
    },
    starClick: {
      ...fallbackSoundEffects.starClick,
      ...(soundEffects?.starClick || {}),
      volume: clampNumber(Number(soundEffects?.starClick?.volume), 0, 1, fallbackVolume),
    },
  };
}

function normalizeMusic(music, fallbackMusic) {
  const tracks = Array.isArray(music?.tracks)
    ? music.tracks
    : music?.url
      ? [{ url: music.url, name: music.name || "" }]
      : [];

  const normalizedTracks = Array.from({ length: 3 }, (_, index) => {
    const track = tracks[index] || fallbackMusic.tracks[index] || {};
    return {
      url: track.url || "",
      name: track.name || "",
    };
  });

  return {
    tracks: normalizedTracks,
    volume: clampNumber(Number(music?.volume), 0, 1, fallbackMusic.volume),
  };
}

function normalizeLoveLotterySettings(settings, fallbackSettings) {
  return {
    ...fallbackSettings,
    ...(settings || {}),
    music: {
      ...fallbackSettings.music,
      ...(settings?.music || {}),
      url: settings?.music?.url || "",
      name: settings?.music?.name || "",
      volume: clampNumber(Number(settings?.music?.volume), 0, 1, fallbackSettings.music.volume),
    },
  };
}

function normalizeMemoryMedia(memory) {
  const mediaItems = Array.isArray(memory.media) ? memory.media : [];
  const normalized = mediaItems
    .map((item) => {
      if (typeof item === "string") {
        return {
          url: item,
          type: inferMediaType(item),
          name: "",
        };
      }

      return {
        url: item?.url || "",
        type: item?.type || item?.mediaType || inferMediaType(item?.url),
        name: item?.name || "",
      };
    })
    .filter((item) => item.url);

  if (!normalized.length && memory.image) {
    normalized.push({
      url: memory.image,
      type: memory.mediaType || inferMediaType(memory.image),
      name: "",
    });
  }

  return normalized;
}

function loadProgress() {
  const stored = localStorage.getItem(STORAGE_KEYS.progress);
  if (!stored) {
    return { memoriesFound: [], heartsFound: [] };
  }

  try {
    const parsed = JSON.parse(stored);
    return {
      memoriesFound: Array.isArray(parsed.memoriesFound) ? parsed.memoriesFound : [],
      heartsFound: Array.isArray(parsed.heartsFound) ? parsed.heartsFound : [],
    };
  } catch {
    return { memoriesFound: [], heartsFound: [] };
  }
}

function loadLoveLotteryProgress() {
  const stored = localStorage.getItem(STORAGE_KEYS.loveLottery);
  if (!stored) {
    return normalizeLoveLotteryProgress();
  }

  try {
    return normalizeLoveLotteryProgress(JSON.parse(stored));
  } catch {
    return normalizeLoveLotteryProgress();
  }
}

function loadAnniversaryProgress() {
  const stored = localStorage.getItem(STORAGE_KEYS.anniversary);
  if (!stored) {
    return normalizeAnniversaryProgress();
  }

  try {
    return normalizeAnniversaryProgress(JSON.parse(stored));
  } catch {
    return normalizeAnniversaryProgress();
  }
}

function loadDashboardGateProgress() {
  return sessionStorage.getItem(STORAGE_KEYS.dashboardGate) === "unlocked";
}

function saveDashboardGateProgress() {
  if (state.dashboardGateUnlocked) {
    sessionStorage.setItem(STORAGE_KEYS.dashboardGate, "unlocked");
    return;
  }

  sessionStorage.removeItem(STORAGE_KEYS.dashboardGate);
}

function normalizeAnniversaryProgress(progress = {}) {
  const rawAnagramProgress =
    progress.anagramFoundWordsByCardId && typeof progress.anagramFoundWordsByCardId === "object"
      ? progress.anagramFoundWordsByCardId
      : {};
  const anagramFoundWordsByCardId = Object.fromEntries(
    Object.entries(rawAnagramProgress).map(([cardId, words]) => [
      cardId,
      Array.from(
        new Set(
          (Array.isArray(words) ? words : [])
            .map((word) => String(word || "").trim().toLowerCase())
            .filter((word) => word.length >= 3)
        )
      ),
    ])
  );
  const rawTimingProgress =
    progress.timingProgressByCardId && typeof progress.timingProgressByCardId === "object"
      ? progress.timingProgressByCardId
      : {};
  const timingProgressByCardId = Object.fromEntries(
    Object.entries(rawTimingProgress).map(([cardId, entry]) => [
      cardId,
      {
        hits: Math.max(0, Math.round(Number(entry?.hits) || 0)),
      },
    ])
  );
  const rawTimingCompletionCounts =
    progress.timingCompletionCountsByCardId && typeof progress.timingCompletionCountsByCardId === "object"
      ? progress.timingCompletionCountsByCardId
      : {};
  const timingCompletionCountsByCardId = Object.fromEntries(
    Object.entries(rawTimingCompletionCounts).map(([cardId, count]) => [
      cardId,
      Math.max(0, Math.round(Number(count) || 0)),
    ])
  );

  return {
    unlockedMain: Boolean(progress.unlockedMain),
    unlockedCardIds: Array.isArray(progress.unlockedCardIds) ? progress.unlockedCardIds.filter(Boolean) : [],
    pendingDateRewardCardIds: Array.isArray(progress.pendingDateRewardCardIds) ? progress.pendingDateRewardCardIds.filter(Boolean) : [],
    anagramFoundWordsByCardId,
    timingProgressByCardId,
    timingCompletionCountsByCardId,
    runnerHighScoresByCardId:
      progress.runnerHighScoresByCardId && typeof progress.runnerHighScoresByCardId === "object"
        ? Object.fromEntries(
            Object.entries(progress.runnerHighScoresByCardId).map(([cardId, entry]) => [
              cardId,
              {
                bestScore: Math.max(0, Number(entry?.bestScore) || 0),
                bestSeconds: Math.max(0, Number(entry?.bestSeconds) || 0),
              },
            ])
          )
        : {},
  };
}

function saveAnniversaryProgress() {
  state.anniversary = normalizeAnniversaryProgress(state.anniversary);
  localStorage.setItem(STORAGE_KEYS.anniversary, JSON.stringify(state.anniversary));
  void saveRemoteAnniversaryProgress();
}

function saveLoveLotteryProgress() {
  state.loveLottery = normalizeLoveLotteryProgress(state.loveLottery);
  localStorage.setItem(STORAGE_KEYS.loveLottery, JSON.stringify(state.loveLottery));
  void saveRemoteLoveLotteryProgress();
}

function normalizeLoveLotteryProgress(progress = {}) {
  const markedIds = Array.isArray(progress.markedIds) ? progress.markedIds : [];
  const legacyPinnedPlans = progress.nextDatePlan ? [progress.nextDatePlan] : [];
  const log = normalizeLoveLotteryLog(progress.log);
  return {
    markedIds,
    completionCount: clampNumber(Number(progress.completionCount), 0, 500, markedIds.length),
    log,
    selections: normalizeLoveLotterySelections(progress.selections),
    pinnedDatePlans: normalizeLoveLotteryDatePlans(progress.pinnedDatePlans?.length ? progress.pinnedDatePlans : legacyPinnedPlans),
    claimedRewards: normalizeLoveLotteryClaimedRewards(progress.claimedRewards),
  };
}

function normalizeLoveLotteryLog(log) {
  return (Array.isArray(log) ? log : [])
    .map((entry, index) => {
      const loggedAt = entry?.loggedAt || new Date().toISOString();
      const status = normalizeLoveLotteryLogStatus(entry?.status, loggedAt);
      return {
        id: entry?.id || entry?.activityId || `log-${Date.now()}-${index}`,
        selectionId: entry?.selectionId || entry?.id || "",
        label: entry?.label || "",
        category: entry?.category || "daily",
        nextDatePlan: entry?.nextDatePlan ? normalizeLoveLotteryDatePlan(entry.nextDatePlan) : null,
        loggedAt,
        completedAt: entry?.completedAt || "",
        status,
      };
    })
    .filter(Boolean);
}

function normalizeLoveLotteryLogStatus(status, loggedAt) {
  if (status === "completed" || status === "expired" || status === "pending") {
    if (status === "pending" && isBeforeToday(loggedAt)) {
      return "expired";
    }
    return status;
  }

  return "completed";
}

function normalizeLoveLotteryClaimedRewards(rewards) {
  return (Array.isArray(rewards) ? rewards : [])
    .map((reward) => {
      const milestone = Number(reward?.milestone);
      const type = reward?.type;
      if (!Number.isFinite(milestone) || !["date", "gift", "trip"].includes(type)) {
        return null;
      }

      return {
        milestone,
        type,
        claimedAt: reward.claimedAt || new Date().toISOString(),
        label: reward.label || "",
        linkedId: reward.linkedId || "",
      };
    })
    .filter(Boolean);
}

function normalizeLoveLotterySelections(selections) {
  return (Array.isArray(selections) ? selections : [])
    .map((selection, index) => {
      const activity = getLoveLotteryActivity(selection.activityId || selection.id);
      if (!activity) {
        return null;
      }

      return {
        id: selection.id || crypto.randomUUID?.() || `selection-${Date.now()}-${index}`,
        activityId: activity.id,
        label: selection.label || activity.label,
        category: selection.category || activity.category,
        selectedAt: selection.selectedAt || selection.loggedAt || new Date().toISOString(),
        datePlan: activity.category === "date" ? normalizeLoveLotteryDatePlan(selection.datePlan || selection.nextDatePlan, activity) : null,
      };
    })
    .filter(Boolean);
}

function normalizeLoveLotteryDatePlans(plans) {
  return (Array.isArray(plans) ? plans : [])
    .map((plan) => normalizeLoveLotteryDatePlan(plan, getLoveLotteryActivity(plan?.activityId || plan?.id)))
    .filter(Boolean);
}

function normalizeLoveLotteryDatePlan(plan, activity) {
  if (!plan && !activity) {
    return null;
  }

  const fallbackDate = getDefaultDatePlanTimestamp(1);
  const scheduledFor = plan?.scheduledFor && !Number.isNaN(new Date(plan.scheduledFor).valueOf())
    ? new Date(plan.scheduledFor).toISOString()
    : resolvedPlanType(plan) === "trip" || resolvedPlanType(plan) === "date" || activity
      ? fallbackDate
      : "";
  const endsAt = plan?.endsAt && !Number.isNaN(new Date(plan.endsAt).valueOf())
    ? new Date(plan.endsAt).toISOString()
    : resolvedPlanType(plan) === "trip" && scheduledFor
      ? getDefaultTripEndTimestamp(scheduledFor)
      : "";
  const weeks = clampNumber(Number(plan?.weeks), 1, 3, 1);
  const resolvedActivity = activity || getLoveLotteryActivity(plan?.activityId || plan?.id);
  const type = resolvedActivity?.category === "date" ? "date" : resolvedPlanType(plan);

  return {
    planId: plan?.planId || plan?.id || crypto.randomUUID?.() || `date-plan-${Date.now()}`,
    activityId: plan?.activityId || resolvedActivity?.id || "",
    label: plan?.label || resolvedActivity?.label || "Date idea",
    task: plan?.task || resolvedActivity?.task || "",
    location: plan?.location || "",
    source: plan?.source || (resolvedActivity ? "lottery" : "manual"),
    type,
    rewardMilestone: Number.isFinite(Number(plan?.rewardMilestone)) ? Number(plan.rewardMilestone) : null,
    note: plan?.note || "",
    weeks,
    scheduledFor,
    endsAt,
    createdAt: plan?.createdAt || new Date().toISOString(),
  };
}

function resolvedPlanType(plan) {
  return plan?.type === "trip" ? "trip" : "date";
}

function loadWishlistItems() {
  const stored = localStorage.getItem(STORAGE_KEYS.wishlist);
  if (!stored) {
    return [];
  }

  try {
    return normalizeWishlistItems(JSON.parse(stored));
  } catch {
    return [];
  }
}

function loadAnniversaryAdminOverride() {
  try {
    return localStorage.getItem(STORAGE_KEYS.anniversaryAdminOverride) === "true";
  } catch {
    return false;
  }
}

function saveAnniversaryAdminOverride() {
  try {
    localStorage.setItem(STORAGE_KEYS.anniversaryAdminOverride, String(Boolean(state.anniversaryAdminOverride)));
  } catch {
    // Ignore storage write failures for this test-only setting.
  }
}

function loadAnniversarySnakeControlMode() {
  try {
    return localStorage.getItem(STORAGE_KEYS.anniversarySnakeControlMode) === "pad" ? "pad" : "joystick";
  } catch {
    return "joystick";
  }
}

function saveAnniversarySnakeControlMode() {
  try {
    localStorage.setItem(STORAGE_KEYS.anniversarySnakeControlMode, state.anniversarySnakeControlMode);
  } catch {
    // Ignore storage failures for this preference.
  }
}

function normalizeWishlistItems(items) {
  return (Array.isArray(items) ? items : [])
    .map((item) => ({
      id: item.id || crypto.randomUUID?.() || `wish-${Date.now()}-${Math.round(Math.random() * 100000)}`,
      page_id: item.page_id || PAGE_ID,
      item_name: item.item_name || item.name || "",
      item_url: item.item_url || item.url || "",
      note: item.note || "",
      added_by: normalizeWishlistPerson(item.added_by || item.addedBy || "Sophia"),
      purchased: Boolean(item.purchased),
      created_at: item.created_at || new Date().toISOString(),
      updated_at: item.updated_at || new Date().toISOString(),
    }))
    .filter((item) => item.item_name && (!item.item_url || /^https?:\/\//i.test(item.item_url)));
}

function normalizeWishlistPerson(value) {
  return String(value).toLowerCase() === "calvin" ? "Calvin" : "Sophia";
}

function restoreMissingRewardWishlistItems() {
  const existingIds = new Set((state.wishlist || []).map((item) => item.id));
  const recoveredItems = (state.loveLottery?.claimedRewards || [])
    .filter((reward) => reward.type === "gift" && reward.linkedId)
    .filter((reward) => !existingIds.has(reward.linkedId))
    .map((reward) => ({
      id: reward.linkedId,
      page_id: PAGE_ID,
      item_name: reward.label || `Gift for Sophia from ${reward.milestone} stars`,
      item_url: "",
      note: `Earned from ${reward.milestone} stars`,
      added_by: "Calvin",
      purchased: false,
      created_at: reward.claimedAt || new Date().toISOString(),
      updated_at: reward.claimedAt || new Date().toISOString(),
    }));

  if (!recoveredItems.length) {
    return false;
  }

  state.wishlist = normalizeWishlistItems([...(state.wishlist || []), ...recoveredItems]);
  return true;
}

function saveWishlistItems() {
  state.wishlist = normalizeWishlistItems(state.wishlist);
  localStorage.setItem(STORAGE_KEYS.wishlist, JSON.stringify(state.wishlist));
}

function buildLoveLotteryActivities() {
  const dateActivities = buildDatePlanActivities();
  const everydayActivities = TOGETHER_ACTIVITIES.map((label, index) => ({
    id: `daily-${index + 1}`,
    label,
    category: "daily",
  }));

  return [...dateActivities, ...everydayActivities];
}

function buildDatePlanActivities() {
  return DATE_PLAN_IDEAS.map((idea, index) => ({
    id: `date-${index + 1}`,
    label: `Plan a ${idea} for Sophia`,
    task: "Auto-scheduled 1, 2, or 3 weeks out. Mark selected to pin it to Dates.",
    category: "date",
  }));
}

function saveData() {
  localStorage.setItem(STORAGE_KEYS.data, JSON.stringify(state.data));
}

function saveProgress() {
  localStorage.setItem(STORAGE_KEYS.progress, JSON.stringify(state.progress));
}

function structuredClone(value) {
  return JSON.parse(JSON.stringify(value));
}

function clampNumber(value, min, max, fallback) {
  if (!Number.isFinite(value)) {
    return fallback;
  }
  return Math.min(max, Math.max(min, value));
}

function inferMediaType(url = "") {
  if (typeof url !== "string") {
    return "image";
  }

  if (url.startsWith("data:video/") || /\.(mp4|webm|mov)(\?|$)/i.test(url)) {
    return "video";
  }

  return "image";
}

async function init() {
  configureAdminVisibility();
  renderApp();
  renderLoveLottery();
  renderAdminForm();
  renderAdminAuth();
  initReveal();
  bindEvents();
  initAmbientCanvas();
  initLoveTrail();
  handleRouteChange();

  if (SUPABASE_CONFIGURED) {
    await initSupabase();
  }

  if (isAdminRoute()) {
    openAdmin();
  }
}

function configureAdminVisibility() {
  elements.openAdminButton.hidden = true;
}

function isAdminRoute() {
  return window.location.pathname.replace(/\/+$/, "") === "/admin";
}

function getNormalizedPath() {
  return window.location.pathname.replace(/\/+$/, "") || "/";
}

function hasDashboardAuthorization() {
  return state.dashboardGateUnlocked || isAdminRoute();
}

function isProtectedAppPath(path = getNormalizedPath()) {
  return path !== "/" && path !== "/admin";
}

function getScreenForPath() {
  const path = getNormalizedPath();
  if (path === "/admin") {
    return "dashboard";
  }
  if (path === "/forsophia") {
    return "landing";
  }
  if (path === "/anniversary") {
    return "anniversary";
  }
  if (path === "/dates") {
    return "dates";
  }
  if (path === "/love-lottery") {
    return "randomizer";
  }
  if (path === "/wishlist") {
    return "wishlist";
  }
  return "dashboard";
}

function navigateTo(path) {
  window.history.pushState({}, "", path);
  handleRouteChange();
}

function handleRouteChange() {
  stopOpeningSequence();
  const path = getNormalizedPath();
  if (!hasDashboardAuthorization() && isProtectedAppPath(path)) {
    window.history.replaceState({}, "", "/");
    showScreen("dashboard");
    return;
  }
  showScreen(getScreenForPath());
}

async function initSupabase() {
  const { data, error } = await supabase.auth.getSession();
  if (error) {
    state.remoteMessage = `Auth error: ${error.message}`;
  } else {
    state.session = data.session;
  }

  supabase.auth.onAuthStateChange((_event, session) => {
    state.session = session;
    renderAdminAuth();
  });

  await loadRemoteData();
  await loadRemoteLoveLotteryProgress();
  await loadRemoteAnniversaryProgress();
  await loadRemoteWishlistItems();
  renderAdminAuth();
}

async function loadRemoteData() {
  if (!SUPABASE_CONFIGURED) {
    return;
  }

  const { data, error } = await supabase
    .from("constellation_pages")
    .select("data")
    .eq("id", PAGE_ID)
    .maybeSingle();

  if (error) {
    state.remoteReady = false;
    state.remoteMessage = `Remote load failed: ${error.message}`;
    renderAdminAuth();
    return;
  }

  if (data?.data) {
    state.data = normalizeData(data.data);
    saveData();
    renderApp();
    renderAdminForm();
    initReveal();
    state.remoteMessage = `Loaded Supabase page "${PAGE_ID}".`;
  } else {
    state.remoteMessage = `No Supabase page exists yet for "${PAGE_ID}". Sign in and save to create it.`;
  }

  state.remoteReady = true;
  renderAdminAuth();
}

async function saveRemoteData() {
  if (!SUPABASE_CONFIGURED) {
    return { saved: false, reason: "Supabase is not configured." };
  }

  if (!state.session?.user?.id) {
    return { saved: false, reason: "Sign in before saving online." };
  }

  const payload = {
    id: PAGE_ID,
    owner_id: state.session.user.id,
    data: state.data,
    updated_at: new Date().toISOString(),
  };

  const { error } = await supabase
    .from("constellation_pages")
    .upsert(payload, { onConflict: "id" });

  if (error) {
    return { saved: false, reason: error.message };
  }

  state.remoteMessage = `Saved Supabase page "${PAGE_ID}".`;
  return { saved: true };
}

async function loadRemoteLoveLotteryProgress() {
  if (!SUPABASE_CONFIGURED) {
    return;
  }

  const { data, error } = await supabase
    .from("love_lottery_progress")
    .select("progress")
    .eq("page_id", PAGE_ID)
    .maybeSingle();

  if (error) {
    state.remoteMessage = `Love Lottery progress load failed: ${error.message}`;
    renderAdminAuth();
    return;
  }

  if (data?.progress) {
    state.loveLottery = normalizeLoveLotteryProgress(data.progress);
    localStorage.setItem(STORAGE_KEYS.loveLottery, JSON.stringify(state.loveLottery));
    if (restoreMissingRewardWishlistItems()) {
      saveWishlistItems();
      renderWishlist();
    }
    renderLoveLottery();
  }
}

async function saveRemoteLoveLotteryProgress() {
  if (!SUPABASE_CONFIGURED) {
    return { saved: false, reason: "Supabase is not configured." };
  }

  const progress = normalizeLoveLotteryProgress(state.loveLottery);
  const updated_at = new Date().toISOString();
  let error = null;

  if (state.session?.user?.id) {
    const payload = {
      page_id: PAGE_ID,
      owner_id: state.session.user.id,
      progress,
      updated_at,
    };

    ({ error } = await supabase
      .from("love_lottery_progress")
      .upsert(payload, { onConflict: "page_id" }));
  } else {
    ({ error } = await supabase
      .from("love_lottery_progress")
      .update({
        progress,
        updated_at,
      })
      .eq("page_id", PAGE_ID));
  }

  if (error) {
    state.remoteMessage = `Love Lottery progress save failed: ${error.message}`;
    renderAdminAuth();
    return { saved: false, reason: error.message };
  }

  return { saved: true };
}

async function loadRemoteAnniversaryProgress() {
  if (!SUPABASE_CONFIGURED) {
    return;
  }

  const { data, error } = await supabase
    .from("anniversary_progress")
    .select("progress")
    .eq("page_id", PAGE_ID)
    .maybeSingle();

  if (error) {
    state.remoteMessage = `Anniversary progress load failed: ${error.message}`;
    renderAdminAuth();
    return;
  }

  if (data?.progress) {
    state.anniversary = normalizeAnniversaryProgress(data.progress);
    localStorage.setItem(STORAGE_KEYS.anniversary, JSON.stringify(state.anniversary));
    renderAnniversary();
  }
}

async function saveRemoteAnniversaryProgress() {
  if (!SUPABASE_CONFIGURED) {
    return { saved: false, reason: "Supabase is not configured." };
  }

  const progress = normalizeAnniversaryProgress(state.anniversary);
  const updated_at = new Date().toISOString();
  let error = null;

  if (state.session?.user?.id) {
    const payload = {
      page_id: PAGE_ID,
      owner_id: state.session.user.id,
      progress,
      updated_at,
    };

    ({ error } = await supabase
      .from("anniversary_progress")
      .upsert(payload, { onConflict: "page_id" }));
  } else {
    ({ error } = await supabase
      .from("anniversary_progress")
      .update({
        progress,
        updated_at,
      })
      .eq("page_id", PAGE_ID));
  }

  if (error) {
    return { saved: false, reason: error.message };
  }

  return { saved: true };
}

function isMissingWishlistNoteColumnError(error) {
  const message = error?.message || "";
  return /wishlist_items\.note/i.test(message) && /does not exist/i.test(message);
}

function getWishlistSelectColumns(includeNote = true) {
  return includeNote
    ? "id,page_id,item_name,item_url,note,added_by,purchased,created_at,updated_at"
    : "id,page_id,item_name,item_url,added_by,purchased,created_at,updated_at";
}

async function loadRemoteWishlistItems() {
  if (!SUPABASE_CONFIGURED) {
    return;
  }

  let { data, error } = await supabase
    .from("wishlist_items")
    .select(getWishlistSelectColumns(true))
    .eq("page_id", PAGE_ID)
    .order("created_at", { ascending: false });

  if (isMissingWishlistNoteColumnError(error)) {
    ({ data, error } = await supabase
      .from("wishlist_items")
      .select(getWishlistSelectColumns(false))
      .eq("page_id", PAGE_ID)
      .order("created_at", { ascending: false }));
  }

  if (error) {
    state.remoteMessage = `Wishlist load failed: ${error.message}`;
    renderAdminAuth();
    return;
  }

  state.wishlist = normalizeWishlistItems(data || []);
  saveWishlistItems();
  renderWishlist();
}

async function addRemoteWishlistItem(item) {
  if (!SUPABASE_CONFIGURED) {
    return { saved: false };
  }

  let { data, error } = await supabase
    .from("wishlist_items")
    .insert({
      page_id: PAGE_ID,
      item_name: item.item_name,
      item_url: item.item_url,
      note: item.note || "",
      added_by: item.added_by,
      purchased: false,
    })
    .select(getWishlistSelectColumns(true))
    .single();

  if (isMissingWishlistNoteColumnError(error)) {
    ({ data, error } = await supabase
      .from("wishlist_items")
      .insert({
        page_id: PAGE_ID,
        item_name: item.item_name,
        item_url: item.item_url,
        added_by: item.added_by,
        purchased: false,
      })
      .select(getWishlistSelectColumns(false))
      .single());
  }

  if (error) {
    return { saved: false, reason: error.message };
  }

  return { saved: true, item: data };
}

async function updateRemoteWishlistItem(item) {
  if (!SUPABASE_CONFIGURED) {
    return { saved: false };
  }

  let { error } = await supabase
    .from("wishlist_items")
    .update({
      item_name: item.item_name,
      item_url: item.item_url,
      note: item.note || "",
      added_by: item.added_by,
      purchased: item.purchased,
      updated_at: new Date().toISOString(),
    })
    .eq("id", item.id)
    .eq("page_id", PAGE_ID);

  if (isMissingWishlistNoteColumnError(error)) {
    ({ error } = await supabase
      .from("wishlist_items")
      .update({
        item_name: item.item_name,
        item_url: item.item_url,
        added_by: item.added_by,
        purchased: item.purchased,
        updated_at: new Date().toISOString(),
      })
      .eq("id", item.id)
      .eq("page_id", PAGE_ID));
  }

  return error ? { saved: false, reason: error.message } : { saved: true };
}

function renderAdminAuth() {
  if (!elements.adminSupabaseStatus) {
    return;
  }

  if (!SUPABASE_CONFIGURED) {
    elements.adminSupabaseStatus.textContent = "Supabase is not configured. Changes save in this browser only.";
    elements.adminEmailLabel.hidden = true;
    elements.adminPasswordLabel.hidden = true;
    elements.signInButton.hidden = true;
    elements.sendMagicLinkButton.hidden = true;
    elements.signOutButton.hidden = true;
    elements.reloadRemoteButton.hidden = true;
    elements.sendTestEmailButton.disabled = true;
    return;
  }

  const signedIn = Boolean(state.session?.user?.email);
  elements.adminSupabaseStatus.textContent = signedIn
    ? `Signed in as ${state.session.user.email}. ${state.remoteMessage || "Online saves are enabled."}`
    : state.remoteMessage || "Supabase is configured. Sign in with your Supabase Auth email and password.";
  elements.adminEmailLabel.hidden = signedIn;
  elements.adminPasswordLabel.hidden = signedIn;
  elements.signInButton.hidden = signedIn;
  elements.sendMagicLinkButton.hidden = signedIn;
  elements.signOutButton.hidden = !signedIn;
  elements.reloadRemoteButton.hidden = false;
  elements.sendTestEmailButton.disabled = !signedIn;
}

function renderApp() {
  elements.landingTitle.textContent = state.data.title;
  elements.landingSubtext.innerHTML = escapeHtml(state.data.subtitle).replace(/\n/g, "<br>");
  renderMusic();
  renderLoveLotteryMusic();
  renderDashboardGate();
  renderAnniversary();
  renderImportantDates();
  renderDatesPage();
  renderWishlist();
  renderTodayPlanBanner();
  prepareSoundEffectPlayers();
  renderHeartPhotoFrame();
  renderStars();
  renderLines();
  renderProgress();
  renderLetter();
  updateGlobalDock();
}

function renderDashboardGate() {
  const settings = normalizeDashboardGateSettings(state.data.dashboardGate, DEFAULT_DATA.dashboardGate);
  const entry = state.dashboardPinEntry.slice(0, settings.entryCode.length);

  elements.dashboardGateTitle.textContent = settings.title;
  elements.dashboardGateSubtitle.textContent = settings.subtitle;
  elements.dashboardGatePanel.hidden = state.dashboardGateUnlocked;
  elements.dashboardMainPanel.hidden = !state.dashboardGateUnlocked;
  elements.dashboardPinDots.innerHTML = "";

  for (let index = 0; index < settings.entryCode.length; index += 1) {
    const dot = document.createElement("span");
    dot.className = "dashboard-pin-dot";
    if (entry[index]) {
      dot.classList.add("is-filled");
    }
    elements.dashboardPinDots.append(dot);
  }

  elements.dashboardUnlockButton.disabled = entry.length !== settings.entryCode.length;
  elements.dashboardPinBackspaceButton.disabled = entry.length === 0;
  elements.dashboardPinClearButton.disabled = entry.length === 0;
}

function renderAnniversary() {
  const settings = normalizeAnniversarySettings(state.data.anniversary, DEFAULT_DATA.anniversary);
  const progress = normalizeAnniversaryProgress(state.anniversary);
  const override = Boolean(state.anniversaryAdminOverride);
  const unlockedCount = settings.cards.filter((card) => progress.unlockedCardIds.includes(card.id)).length;

  elements.anniversaryTitle.textContent = settings.title;
  elements.anniversarySubtitle.textContent = settings.subtitle;
  elements.anniversaryIntro.textContent = settings.intro;
  elements.anniversaryProgressText.textContent = override
    ? `Override mode on • ${unlockedCount} / ${settings.cards.length} real gifts open`
    : `${unlockedCount} / ${settings.cards.length} gifts open`;
  elements.anniversaryLockPanel.hidden = progress.unlockedMain || override;
  elements.anniversaryMainPanel.hidden = !(progress.unlockedMain || override);
  renderAnniversaryTumbler();

  elements.anniversaryCards.innerHTML = "";
  settings.cards.forEach((card, index) => {
    const previousUnlocked = index === 0 || progress.unlockedCardIds.includes(settings.cards[index - 1].id);
    const isUnlocked = progress.unlockedCardIds.includes(card.id);
    const isAvailable = override || (progress.unlockedMain && previousUnlocked);
    const article = document.createElement("article");
    article.className = "anniversary-card";
    if (isUnlocked) {
      article.classList.add("is-unlocked");
    }
    if (!isAvailable) {
      article.classList.add("is-locked");
    }

    article.innerHTML = `
      <div class="anniversary-card-media ${card.image ? "has-image" : ""}" ${card.image ? `style="background-image:url('${escapeAttribute(card.image)}')"` : ""}>
        ${card.image ? "" : `<div class="anniversary-card-placeholder"><span>Gift image</span><strong>Level ${card.level}</strong></div>`}
      </div>
      <div class="anniversary-card-copy">
        <span class="anniversary-level-pill">Level ${card.level}</span>
        <h3>${escapeHtml(card.name)}</h3>
        <p class="anniversary-card-game-type">${escapeHtml(getAnniversaryGameLabel(card))}</p>
        <p class="anniversary-card-challenge">${escapeHtml(card.challenge)}</p>
        <p class="anniversary-card-clue">${escapeHtml(card.clue)}</p>
        ${
          isUnlocked
            ? `
              <div class="anniversary-reward">
                <span>Unlocked</span>
                <strong>${escapeHtml(card.rewardTitle)}</strong>
                <p>${escapeHtml(card.rewardText)}</p>
              </div>
            `
            : `
              <button class="secondary-button anniversary-open-game-button" type="button" data-open-anniversary-card="${escapeAttribute(card.id)}" ${isAvailable ? "" : "disabled"}>
                ${card.gameType === "matching" ? "Play memory match" : "Open challenge"}
              </button>
            `
        }
      </div>
    `;

    elements.anniversaryCards.append(article);
  });
}

function openAnniversaryCardGame(cardId) {
  ensureAmbientMusic();
  const settings = normalizeAnniversarySettings(state.data.anniversary, DEFAULT_DATA.anniversary);
  const progress = normalizeAnniversaryProgress(state.anniversary);
  const override = Boolean(state.anniversaryAdminOverride);
  const cardIndex = settings.cards.findIndex((card) => card.id === cardId);
  const card = settings.cards[cardIndex];
  if (!card) {
    return;
  }

  const previousUnlocked = cardIndex === 0 || progress.unlockedCardIds.includes(settings.cards[cardIndex - 1].id);
  if (!override && (!progress.unlockedMain || !previousUnlocked)) {
    showToast("Level locked", "Open the level before this one first.");
    return;
  }

  state.activeAnniversaryCardId = cardId;
  state.anniversaryGameMessage = "";
  state.anniversaryGameBusy = false;
  state.anniversaryGameSelections = [];
  state.anniversaryMatchedPairIds = [];
  state.anniversaryMatchingCelebration = false;
  state.anniversaryZoomedTileId = null;
  state.anniversaryZoomPreview = null;
  state.anniversaryGameDeck = card.gameType === "matching" ? buildAnniversaryMatchingDeck(card) : [];
  state.anniversarySnake = card.gameType === "snake" ? createAnniversarySnakeState() : null;
  state.anniversaryRunner = card.gameType === "runner" ? createAnniversaryRunnerState() : null;
  state.anniversaryTiming = card.gameType === "timing" ? createAnniversaryTimingState() : null;
  clearAnniversarySnakeTimer();
  clearAnniversaryRunnerFrame();
  clearAnniversaryTimingFrame();
  clearAnniversaryTimingResumeTimer();
  state.anniversarySnakeJoystickVector = { x: 0, y: 0 };
  state.anniversarySnakePointerId = null;
  state.anniversaryRunnerPointerId = null;
  state.anniversaryRunnerPressStartedAt = 0;
  state.anniversaryAnagramSelectedTileIds = [];
  state.anniversaryAnagramShuffle = [];
  renderAnniversaryGameModal();
  elements.anniversaryGameModal.hidden = false;
  updateAnniversaryGameScreenState(card);
  if (progress.pendingDateRewardCardIds.includes(card.id)) {
    openAnniversaryDateRewardModal(card);
  }
  if (card.gameType === "snake") {
    state.anniversaryGameMessage = "Tap the board to start. Space works on a computer too.";
    renderAnniversaryGameModal();
  }
  if (card.gameType === "runner") {
    state.anniversaryGameMessage = "Tap the screen to start. Space works too.";
    renderAnniversaryGameModal();
  }
  if (card.gameType === "timing") {
    state.anniversaryGameMessage = "Tap the ring to start. Space works too.";
    renderAnniversaryGameModal();
  }
}

function closeAnniversaryCardGame() {
  elements.anniversaryGameModal.hidden = true;
  state.activeAnniversaryCardId = null;
  state.anniversaryGameDeck = [];
  state.anniversaryGameSelections = [];
  state.anniversaryMatchedPairIds = [];
  state.anniversaryMatchingCelebration = false;
  state.anniversaryGameBusy = false;
  state.anniversaryGameMessage = "";
  state.anniversaryZoomedTileId = null;
  state.anniversaryZoomPreview = null;
  state.anniversarySnake = null;
  state.anniversaryRunner = null;
  state.anniversaryTiming = null;
  state.anniversarySnakeJoystickVector = { x: 0, y: 0 };
  state.anniversarySnakePointerId = null;
  state.anniversaryRunnerPointerId = null;
  state.anniversaryRunnerPressStartedAt = 0;
  state.anniversaryAnagramSelectedTileIds = [];
  state.anniversaryAnagramShuffle = [];
  clearAnniversarySnakeTimer();
  clearAnniversaryRunnerFrame();
  clearAnniversaryTimingFrame();
  clearAnniversaryTimingResumeTimer();
  updateAnniversaryGameScreenState();
}

function buildAnniversaryMatchingDeck(card) {
  const pairs = normalizeAnniversaryMatchingPairs(card.matchingPairs, DEFAULT_DATA.anniversary.cards[0].matchingPairs);
  const deck = pairs.flatMap((pair, index) => {
    const promptTile = {
      id: `${pair.id}-prompt`,
      pairId: pair.id,
      kind: pair.image ? "image" : "prompt",
      label: pair.word,
      image: pair.image,
      imagePositionY: pair.imagePositionY,
      order: `${index}-a`,
    };
    const answerTile = {
      id: `${pair.id}-answer`,
      pairId: pair.id,
      kind: "word",
      label: pair.matchText || pair.word,
      image: "",
      order: `${index}-b`,
    };
    return [promptTile, answerTile];
  });

  return deck
    .map((item) => ({ ...item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ sort, ...item }) => item);
}

function createAnniversarySnakeState() {
  const gridSize = 12;
  const snake = [
    { x: 4, y: 6 },
    { x: 3, y: 6 },
    { x: 2, y: 6 },
  ];
  const heart = spawnAnniversarySnakeHeart(snake, gridSize);

  return {
    gridSize,
    snake,
    direction: "right",
    nextDirection: "right",
    heart,
    score: 0,
    target: state.anniversaryAdminOverride ? 5 : 20,
    speedMs: 240,
    status: "ready",
  };
}

function clearAnniversarySnakeTimer() {
  if (state.anniversarySnakeTimer) {
    window.clearTimeout(state.anniversarySnakeTimer);
    state.anniversarySnakeTimer = null;
  }
}

function spawnAnniversarySnakeHeart(snake, gridSize) {
  const occupied = new Set(snake.map((segment) => `${segment.x}:${segment.y}`));
  const openCells = [];
  for (let y = 0; y < gridSize; y += 1) {
    for (let x = 0; x < gridSize; x += 1) {
      const key = `${x}:${y}`;
      if (!occupied.has(key)) {
        openCells.push({ x, y });
      }
    }
  }

  return openCells.length
    ? openCells[Math.floor(Math.random() * openCells.length)]
    : { x: 0, y: 0 };
}

function createAnniversaryRunnerState() {
  return {
    status: "ready",
    elapsedMs: 0,
    score: 0,
    targetMs: (state.anniversaryAdminOverride ? 10 : 45) * 1000,
    baseSpeed: 36,
    jumpVelocity: 0,
    jumpOffset: 0,
    gravity: 0.27,
    playerXBack: 15.4,
    playerXFront: 19.2,
    playerHeight: 5.4,
    obstacles: [{ id: `runner-obstacle-${Date.now()}`, x: 106, width: 6.2, height: 7.2, collisionHeight: 3.2, emoji: "🏋️" }],
    lastTimestamp: null,
    nextObstacleId: 1,
    spawnCooldownMs: 1450,
  };
}

function getAnniversaryTimingTargetHits() {
  return state.anniversaryAdminOverride ? 3 : 20;
}

function getAnniversaryTimingStage(hits = 0) {
  if (state.anniversaryAdminOverride) {
    if (hits >= 2) {
      return 3;
    }
    if (hits >= 1) {
      return 2;
    }
    return 1;
  }

  if (hits >= 15) {
    return 3;
  }
  if (hits >= 10) {
    return 2;
  }
  return 1;
}

function getAnniversaryTimingSpeedForHits(hits = 0) {
  const stage = getAnniversaryTimingStage(hits);
  if (state.anniversaryAdminOverride) {
    return [58, 78, 98][stage - 1];
  }
  return [76, 92, 112][stage - 1];
}

function getAnniversaryTimingStageLabel(hits = 0) {
  const stage = getAnniversaryTimingStage(hits);
  if (state.anniversaryAdminOverride) {
    return [`Speed 1`, `Speed 2`, `Speed 3`][stage - 1];
  }
  return [`1-10`, `11-15`, `16-20`][stage - 1];
}

function getRandomAnniversaryTimingIndex(totalUnits, blocked = []) {
  const blockedSet = new Set((Array.isArray(blocked) ? blocked : []).filter((value) => Number.isInteger(value)));
  const available = Array.from({ length: totalUnits }, (_, index) => index).filter((index) => !blockedSet.has(index));
  return available.length ? available[Math.floor(Math.random() * available.length)] : 0;
}

function createAnniversaryTimingState() {
  const totalUnits = 120;
  const currentIndex = Math.floor(Math.random() * totalUnits);
  const settings = normalizeAnniversarySettings(state.data.anniversary, DEFAULT_DATA.anniversary);
  const activeCard = settings.cards.find((item) => item.id === state.activeAnniversaryCardId);
  const savedHits = activeCard ? getAnniversaryTimingProgress(activeCard.id).hits : 0;
  const targetHits = getAnniversaryTimingTargetHits();
  const hits = Math.min(savedHits, targetHits);
  return {
    status: "ready",
    totalUnits,
    currentFloat: currentIndex,
    currentIndex,
    targetIndex: getRandomAnniversaryTimingIndex(totalUnits, [currentIndex]),
    hits,
    targetHits,
    speedUnitsPerSecond: getAnniversaryTimingSpeedForHits(hits),
    lastTimestamp: null,
    lastTapResult: "",
  };
}

function updateAnniversaryGameScreenState(card = null) {
  const activeCard = card || normalizeAnniversarySettings(state.data.anniversary, DEFAULT_DATA.anniversary)
    .cards.find((item) => item.id === state.activeAnniversaryCardId);
  const isMatching = activeCard?.gameType === "matching";
  const isSnake = activeCard?.gameType === "snake";
  const isRunner = activeCard?.gameType === "runner";
  const isAnagram = activeCard?.gameType === "anagram";
  const isTiming = activeCard?.gameType === "timing";
  const isAnyGameOpen = Boolean(activeCard) && !elements.anniversaryGameModal.hidden;
  document.body.classList.toggle("is-anniversary-matching-open", Boolean(activeCard) && isMatching && !elements.anniversaryGameModal.hidden);
  document.body.classList.toggle("is-anniversary-snake-open", Boolean(activeCard) && isSnake && !elements.anniversaryGameModal.hidden);
  document.body.classList.toggle("is-anniversary-runner-open", Boolean(activeCard) && isRunner && !elements.anniversaryGameModal.hidden);
  document.body.classList.toggle("is-anniversary-anagram-open", Boolean(activeCard) && isAnagram && !elements.anniversaryGameModal.hidden);
  document.body.classList.toggle("is-anniversary-timing-open", Boolean(activeCard) && isTiming && !elements.anniversaryGameModal.hidden);
  document.body.classList.toggle("is-anniversary-game-open", isAnyGameOpen);
}

function getAnniversarySnakeSpeed(score = 0) {
  return Math.max(110, 240 - score * 4);
}

function getAnniversaryRunnerHighScore(cardId) {
  if (state.anniversaryAdminOverride) {
    return state.anniversaryOverrideRunnerHighScores?.[cardId] || { bestScore: 0, bestSeconds: 0 };
  }

  const progress = normalizeAnniversaryProgress(state.anniversary);
  return progress.runnerHighScoresByCardId?.[cardId] || { bestScore: 0, bestSeconds: 0 };
}

function saveAnniversaryRunnerHighScore(cardId, bestScore, bestSeconds) {
  const normalized = {
    bestScore: Math.max(0, Math.round(Number(bestScore) || 0)),
    bestSeconds: Math.max(0, Number(bestSeconds) || 0),
  };

  if (state.anniversaryAdminOverride) {
    state.anniversaryOverrideRunnerHighScores = {
      ...(state.anniversaryOverrideRunnerHighScores || {}),
      [cardId]: normalized,
    };
    return;
  }

  const progress = normalizeAnniversaryProgress(state.anniversary);
  progress.runnerHighScoresByCardId = {
    ...(progress.runnerHighScoresByCardId || {}),
    [cardId]: normalized,
  };
  state.anniversary = progress;
  saveAnniversaryProgress();
}

function getAnniversaryTimingProgress(cardId) {
  if (state.anniversaryAdminOverride) {
    return { hits: Math.max(0, Math.round(Number(state.anniversaryTiming?.hits) || 0)) };
  }

  const progress = normalizeAnniversaryProgress(state.anniversary);
  return progress.timingProgressByCardId?.[cardId] || { hits: 0 };
}

function saveAnniversaryTimingProgress(cardId, hits) {
  const normalizedHits = Math.max(0, Math.round(Number(hits) || 0));
  if (state.anniversaryAdminOverride) {
    return;
  }

  const progress = normalizeAnniversaryProgress(state.anniversary);
  progress.timingProgressByCardId = {
    ...(progress.timingProgressByCardId || {}),
    [cardId]: { hits: normalizedHits },
  };
  state.anniversary = progress;
  saveAnniversaryProgress();
}

function clearAnniversaryTimingProgress(cardId) {
  if (state.anniversaryAdminOverride) {
    return;
  }

  const progress = normalizeAnniversaryProgress(state.anniversary);
  progress.timingProgressByCardId = {
    ...(progress.timingProgressByCardId || {}),
    [cardId]: { hits: 0 },
  };
  state.anniversary = progress;
  saveAnniversaryProgress();
}

function incrementAnniversaryTimingCompletionCount(cardId) {
  if (state.anniversaryAdminOverride) {
    return;
  }

  const progress = normalizeAnniversaryProgress(state.anniversary);
  progress.timingCompletionCountsByCardId = {
    ...(progress.timingCompletionCountsByCardId || {}),
    [cardId]: Math.max(0, Number(progress.timingCompletionCountsByCardId?.[cardId]) || 0) + 1,
  };
  state.anniversary = progress;
  saveAnniversaryProgress();
}

function clearAnniversaryRunnerFrame() {
  if (state.anniversaryRunnerFrame) {
    window.cancelAnimationFrame(state.anniversaryRunnerFrame);
    state.anniversaryRunnerFrame = null;
  }
}

function clearAnniversaryTimingFrame() {
  if (state.anniversaryTimingFrame) {
    window.cancelAnimationFrame(state.anniversaryTimingFrame);
    state.anniversaryTimingFrame = null;
  }
}

function clearAnniversaryTimingResumeTimer() {
  if (state.anniversaryTimingResumeTimer) {
    window.clearTimeout(state.anniversaryTimingResumeTimer);
    state.anniversaryTimingResumeTimer = null;
  }
}

function scheduleAnniversarySnakeTick() {
  clearAnniversarySnakeTimer();
  const snakeState = state.anniversarySnake;
  if (!snakeState || snakeState.status !== "playing" || elements.anniversaryGameModal.hidden) {
    return;
  }

  state.anniversarySnakeTimer = window.setTimeout(() => {
    tickAnniversarySnake();
  }, snakeState.speedMs);
}

function beginAnniversarySnake() {
  const snakeState = state.anniversarySnake;
  if (!snakeState || snakeState.status !== "ready") {
    return;
  }

  snakeState.status = "playing";
  state.anniversaryGameMessage = "Nom nom time. Go get those hearts.";
  renderAnniversaryGameModal();
  scheduleAnniversarySnakeTick();
}

function startAnniversaryRunnerLoop() {
  clearAnniversaryRunnerFrame();
  const step = (timestamp) => {
    const runnerState = state.anniversaryRunner;
    const settings = normalizeAnniversarySettings(state.data.anniversary, DEFAULT_DATA.anniversary);
    const card = settings.cards.find((item) => item.id === state.activeAnniversaryCardId);
    if (!card || card.gameType !== "runner" || !runnerState || runnerState.status !== "playing" || elements.anniversaryGameModal.hidden) {
      clearAnniversaryRunnerFrame();
      return;
    }

    if (!runnerState.lastTimestamp) {
      runnerState.lastTimestamp = timestamp;
    }
    const deltaMs = Math.min(40, timestamp - runnerState.lastTimestamp);
    runnerState.lastTimestamp = timestamp;
    tickAnniversaryRunner(deltaMs, card);
    if (state.anniversaryRunner?.status === "playing") {
      state.anniversaryRunnerFrame = window.requestAnimationFrame(step);
    } else {
      clearAnniversaryRunnerFrame();
    }
  };

  state.anniversaryRunnerFrame = window.requestAnimationFrame(step);
}

function beginAnniversaryRunner() {
  const runnerState = state.anniversaryRunner;
  if (!runnerState || runnerState.status !== "ready") {
    return;
  }

  runnerState.status = "playing";
  runnerState.lastTimestamp = null;
  state.anniversaryGameMessage = "Run little buddy, run.";
  renderAnniversaryGameModal();
  startAnniversaryRunnerLoop();
}

function startAnniversaryTimingLoop() {
  clearAnniversaryTimingFrame();
  const step = (timestamp) => {
    const timingState = state.anniversaryTiming;
    const settings = normalizeAnniversarySettings(state.data.anniversary, DEFAULT_DATA.anniversary);
    const card = settings.cards.find((item) => item.id === state.activeAnniversaryCardId);
    if (!card || card.gameType !== "timing" || !timingState || timingState.status !== "playing" || elements.anniversaryGameModal.hidden) {
      clearAnniversaryTimingFrame();
      return;
    }

    if (!timingState.lastTimestamp) {
      timingState.lastTimestamp = timestamp;
    }
    const deltaMs = Math.min(40, timestamp - timingState.lastTimestamp);
    timingState.lastTimestamp = timestamp;
    tickAnniversaryTiming(deltaMs);
    if (state.anniversaryTiming?.status === "playing") {
      state.anniversaryTimingFrame = window.requestAnimationFrame(step);
    } else {
      clearAnniversaryTimingFrame();
    }
  };

  state.anniversaryTimingFrame = window.requestAnimationFrame(step);
}

function beginAnniversaryTiming() {
  const timingState = state.anniversaryTiming;
  if (!timingState || timingState.status !== "ready") {
    return;
  }

  ensureAmbientMusic();
  timingState.status = "playing";
  timingState.lastTimestamp = null;
  timingState.lastTapResult = "";
  state.anniversaryGameMessage = "Tap exactly when the moving light lands on the glowing target.";
  renderAnniversaryGameModal();
  startAnniversaryTimingLoop();
}

function tickAnniversaryTiming(deltaMs) {
  const timingState = state.anniversaryTiming;
  if (!timingState || timingState.status !== "playing") {
    return;
  }

  timingState.currentFloat = (timingState.currentFloat + (deltaMs * timingState.speedUnitsPerSecond) / 1000) % timingState.totalUnits;
  timingState.currentIndex = Math.floor(timingState.currentFloat) % timingState.totalUnits;
  renderAnniversaryGameModal();
}

function restartAnniversaryTiming() {
  const settings = normalizeAnniversarySettings(state.data.anniversary, DEFAULT_DATA.anniversary);
  const card = settings.cards.find((item) => item.id === state.activeAnniversaryCardId);
  if (!card || card.gameType !== "timing") {
    return;
  }

  state.anniversaryTiming = createAnniversaryTimingState();
  state.anniversaryGameMessage = "Tap the ring to start. Space works on a computer too.";
  clearAnniversaryTimingFrame();
  clearAnniversaryTimingResumeTimer();
  renderAnniversaryGameModal();
}

function handleAnniversaryTimingTap() {
  const settings = normalizeAnniversarySettings(state.data.anniversary, DEFAULT_DATA.anniversary);
  const card = settings.cards.find((item) => item.id === state.activeAnniversaryCardId);
  const timingState = state.anniversaryTiming;
  if (!card || card.gameType !== "timing" || !timingState) {
    return;
  }

  if (timingState.status === "ready") {
    beginAnniversaryTiming();
    return;
  }

  if (timingState.status === "won") {
    restartAnniversaryTiming();
    return;
  }

  if (timingState.status !== "playing") {
    return;
  }

  clearAnniversaryTimingFrame();
  clearAnniversaryTimingResumeTimer();
  timingState.status = "checking";
  const hit = timingState.currentIndex === timingState.targetIndex;
  timingState.lastTapResult = hit ? "hit" : "miss";

  if (hit) {
    playAnniversaryTimingCue("hit");
    timingState.hits += 1;
    timingState.speedUnitsPerSecond = getAnniversaryTimingSpeedForHits(timingState.hits);
    saveAnniversaryTimingProgress(card.id, timingState.hits);
    if (timingState.hits >= timingState.targetHits) {
      timingState.status = "won";
      clearAnniversaryTimingProgress(card.id);
      incrementAnniversaryTimingCompletionCount(card.id);
      state.anniversaryGameMessage = "You kept your calm even when it got fast. I love making little moments like this for you. Let's go get the necklace. :)";
      renderAnniversaryGameModal();
      completeAnniversaryCard(card);
      return;
    }

    state.anniversaryGameMessage = `Good job. ${timingState.hits} of ${timingState.targetHits} lined up.`;
    timingState.targetIndex = getRandomAnniversaryTimingIndex(timingState.totalUnits, [timingState.currentIndex, timingState.targetIndex]);
  } else {
    playAnniversaryTimingCue("miss");
    state.anniversaryGameMessage = `So close. ${timingState.hits} of ${timingState.targetHits} perfect stops so far.`;
  }

  renderAnniversaryGameModal();
  state.anniversaryTimingResumeTimer = window.setTimeout(() => {
    if (!state.anniversaryTiming || state.activeAnniversaryCardId !== card.id) {
      return;
    }

    state.anniversaryTiming.status = "playing";
    state.anniversaryTiming.lastTimestamp = null;
    state.anniversaryTiming.lastTapResult = "";
    state.anniversaryTimingResumeTimer = null;
    renderAnniversaryGameModal();
    startAnniversaryTimingLoop();
  }, hit ? 2000 : 320);
}

function jumpAnniversaryRunner(pressDurationMs = 0) {
  const runnerState = state.anniversaryRunner;
  if (!runnerState) {
    return;
  }

  if (runnerState.status === "ready") {
    beginAnniversaryRunner();
    return;
  }

  if (runnerState.status !== "playing") {
    restartAnniversaryRunner();
    return;
  }

  if (runnerState.jumpOffset <= 0.5) {
    const jumpBoost = pressDurationMs >= 220 ? 4.3 : 3.85;
    runnerState.jumpVelocity = jumpBoost;
  }
}

function tickAnniversaryRunner(deltaMs, card) {
  const runnerState = state.anniversaryRunner;
  if (!runnerState || runnerState.status !== "playing") {
    return;
  }

  runnerState.elapsedMs += deltaMs;
  const elapsedSeconds = runnerState.elapsedMs / 1000;
  runnerState.score = Math.floor(elapsedSeconds * 5);

  const currentSpeed = runnerState.baseSpeed + Math.floor(elapsedSeconds / 10) * 5;
  runnerState.spawnCooldownMs -= deltaMs;
  if (runnerState.spawnCooldownMs <= 0) {
    const isTallObstacle = runnerState.nextObstacleId % 3 === 0;
    runnerState.obstacles.push({
      id: `runner-obstacle-${runnerState.nextObstacleId}`,
      x: 102,
      width: isTallObstacle ? 4.9 : 6.2,
      height: isTallObstacle ? 8.2 : 7.1,
      collisionHeight: isTallObstacle ? 4.2 : 3.1,
      emoji: runnerState.nextObstacleId % 2 === 0 ? "🏋️" : "🧃",
    });
    runnerState.nextObstacleId += 1;
    runnerState.spawnCooldownMs = Math.max(1080, 1640 - currentSpeed * 12);
  }

  runnerState.jumpOffset = Math.max(0, runnerState.jumpOffset + runnerState.jumpVelocity);
  runnerState.jumpVelocity -= runnerState.gravity;
  if (runnerState.jumpOffset <= 0) {
    runnerState.jumpOffset = 0;
    runnerState.jumpVelocity = 0;
  }

  runnerState.obstacles = runnerState.obstacles
    .map((obstacle) => ({ ...obstacle, x: obstacle.x - currentSpeed * (deltaMs / 1000) }))
    .filter((obstacle) => obstacle.x + obstacle.width > -10);

  const runnerFront = runnerState.playerXFront;
  const runnerBack = runnerState.playerXBack;
  const runnerBottom = runnerState.jumpOffset;
  const runnerTop = runnerBottom + runnerState.playerHeight;
  const collision = runnerState.obstacles.some((obstacle) => {
    const hitLeft = runnerBack + 0.35;
    const hitRight = runnerFront - 0.35;
    const overlapsHorizontally = obstacle.x < hitRight && obstacle.x + obstacle.width > hitLeft;
    const overlapsVertically = runnerBottom < (obstacle.collisionHeight || obstacle.height || 0) && runnerTop > 0.5;
    return overlapsHorizontally && overlapsVertically;
  });

  const highScore = getAnniversaryRunnerHighScore(card.id);
  if (runnerState.score > highScore.bestScore) {
    saveAnniversaryRunnerHighScore(card.id, runnerState.score, elapsedSeconds);
  }

  if (collision) {
    runnerState.status = "lost";
    state.anniversaryGameMessage = `Stumbled. You made it ${elapsedSeconds.toFixed(1)}s for ${runnerState.score} points. Tap or press space to try again.`;
    renderAnniversaryGameModal();
    clearAnniversaryRunnerFrame();
    return;
  }

  if (runnerState.elapsedMs >= runnerState.targetMs) {
    runnerState.status = "won";
    state.anniversaryGameMessage = "Heart burst. You ran all the way into our little health era.";
    renderAnniversaryGameModal();
    clearAnniversaryRunnerFrame();
    completeAnniversaryCard(card);
    return;
  }

  state.anniversaryGameMessage = `Keep going. ${Math.max(0, Math.ceil((runnerState.targetMs - runnerState.elapsedMs) / 1000))} seconds left.`;
  renderAnniversaryGameModal();
}

function setAnniversarySnakeDirection(direction) {
  const snakeState = state.anniversarySnake;
  if (!snakeState || (snakeState.status !== "playing" && snakeState.status !== "ready")) {
    return;
  }

  const opposite = {
    up: "down",
    down: "up",
    left: "right",
    right: "left",
  };

  if (direction === opposite[snakeState.direction]) {
    return;
  }

  snakeState.nextDirection = direction;
  if (snakeState.status === "ready") {
    beginAnniversarySnake();
  }
}

function tickAnniversarySnake() {
  const settings = normalizeAnniversarySettings(state.data.anniversary, DEFAULT_DATA.anniversary);
  const card = settings.cards.find((item) => item.id === state.activeAnniversaryCardId);
  const snakeState = state.anniversarySnake;
  if (!card || card.gameType !== "snake" || !snakeState || snakeState.status !== "playing") {
    clearAnniversarySnakeTimer();
    return;
  }

  snakeState.direction = snakeState.nextDirection;
  const head = snakeState.snake[0];
  const movement = {
    up: { x: 0, y: -1 },
    down: { x: 0, y: 1 },
    left: { x: -1, y: 0 },
    right: { x: 1, y: 0 },
  }[snakeState.direction] || { x: 1, y: 0 };
  const nextHead = {
    x: head.x + movement.x,
    y: head.y + movement.y,
  };

  const hitWall =
    nextHead.x < 0 ||
    nextHead.y < 0 ||
    nextHead.x >= snakeState.gridSize ||
    nextHead.y >= snakeState.gridSize;
  const hitSelf = snakeState.snake.some((segment) => segment.x === nextHead.x && segment.y === nextHead.y);

  if (hitWall || hitSelf) {
    snakeState.status = "lost";
    snakeState.crashType = hitWall ? "wall" : "self";
    state.anniversaryGameMessage = hitWall
      ? "Bonk. The blue snack wall got you. Tap try again for another nom nom run."
      : "Bonk. You bumped into your own snack trail. Tap try again.";
    renderAnniversaryGameModal();
    clearAnniversarySnakeTimer();
    return;
  }

  snakeState.snake.unshift(nextHead);
  const ateHeart = nextHead.x === snakeState.heart.x && nextHead.y === snakeState.heart.y;
  if (ateHeart) {
    snakeState.score += 1;
    snakeState.speedMs = getAnniversarySnakeSpeed(snakeState.score);
    snakeState.heart = spawnAnniversarySnakeHeart(snakeState.snake, snakeState.gridSize);
    state.anniversaryGameMessage = snakeState.score >= snakeState.target
      ? "Nom nom complete. Your date prize is ready."
      : `Nom ${snakeState.score} of ${snakeState.target}.`;
  } else {
    snakeState.snake.pop();
  }

  if (snakeState.score >= snakeState.target) {
    snakeState.status = "won";
    renderAnniversaryGameModal();
    clearAnniversarySnakeTimer();
    completeAnniversaryCard(card);
    return;
  }

  renderAnniversaryGameModal();
  scheduleAnniversarySnakeTick();
}

function restartAnniversarySnake() {
  const settings = normalizeAnniversarySettings(state.data.anniversary, DEFAULT_DATA.anniversary);
  const card = settings.cards.find((item) => item.id === state.activeAnniversaryCardId);
  if (!card || card.gameType !== "snake") {
    return;
  }

  state.anniversarySnake = createAnniversarySnakeState();
  state.anniversaryGameMessage = "Tap the board to start. Space works on a computer too.";
  state.anniversarySnakeJoystickVector = { x: 0, y: 0 };
  clearAnniversarySnakeTimer();
  renderAnniversaryGameModal();
}

function restartAnniversaryRunner() {
  const settings = normalizeAnniversarySettings(state.data.anniversary, DEFAULT_DATA.anniversary);
  const card = settings.cards.find((item) => item.id === state.activeAnniversaryCardId);
  if (!card || card.gameType !== "runner") {
    return;
  }

  state.anniversaryRunner = createAnniversaryRunnerState();
  state.anniversaryGameMessage = "Tap the screen to start. Space works too.";
  state.anniversaryRunnerPointerId = null;
  state.anniversaryRunnerPressStartedAt = 0;
  clearAnniversaryRunnerFrame();
  renderAnniversaryGameModal();
}

function renderAnniversaryGameModal() {
  const settings = normalizeAnniversarySettings(state.data.anniversary, DEFAULT_DATA.anniversary);
  const card = settings.cards.find((item) => item.id === state.activeAnniversaryCardId);
  if (!card) {
    return;
  }

  const isUnlocked = state.anniversary.unlockedCardIds.includes(card.id);
  const isMatchingCelebration = card.gameType === "matching" && state.anniversaryMatchingCelebration && !isUnlocked;
  const usesRotateNotice = card.gameType === "matching" || card.gameType === "runner" || card.gameType === "snake";
  elements.anniversaryGameCard.classList.toggle("is-matching-game", card.gameType === "matching");
  elements.anniversaryGameCard.classList.toggle("is-matching-celebration", isMatchingCelebration);
  elements.anniversaryGameCard.classList.toggle("is-snake-game", card.gameType === "snake");
  elements.anniversaryGameCard.classList.toggle("is-runner-game", card.gameType === "runner");
  elements.anniversaryGameCard.classList.toggle("is-timing-game", card.gameType === "timing");
  elements.anniversaryGameRotateNotice.hidden = isMatchingCelebration || !usesRotateNotice;
  elements.anniversaryGameRotateNotice.querySelector("strong").textContent = card.gameType === "snake"
    ? "Turn your phone upright"
    : "Turn your phone sideways";
  elements.anniversaryGameRotateNotice.querySelector("p").textContent = card.gameType === "runner"
    ? "This runner works best in landscape so the jump timing and obstacles feel right."
    : card.gameType === "snake"
      ? "Heart Snake is portrait-only so the controls and board feel right."
      : "This matching game is landscape-only so the full board has room to breathe.";
  elements.anniversaryGameHud.hidden = isMatchingCelebration || !(card.gameType === "snake" || card.gameType === "runner");
  elements.anniversaryGameSubtitle.textContent = getAnniversaryGameLabel(card);
  elements.anniversaryGameTitle.textContent = card.name;
  elements.anniversaryGameDescription.textContent = card.challenge;
  elements.anniversaryGameMessage.textContent = state.anniversaryGameMessage || card.clue;
  elements.anniversaryGameSubtitle.hidden = isMatchingCelebration;
  elements.anniversaryGameTitle.hidden = isMatchingCelebration;
  elements.anniversaryGameDescription.hidden = isMatchingCelebration;
  elements.anniversaryGameMessage.hidden = isMatchingCelebration;
  elements.anniversaryGameGiftReveal.hidden = isMatchingCelebration || !isUnlocked;
  elements.anniversaryGameGiftTitle.textContent = card.rewardTitle;
  elements.anniversaryGameGiftText.textContent = card.rewardText;

  if (card.gameType === "matching") {
    elements.anniversaryGameHud.innerHTML = "";
    elements.anniversaryGameForm.hidden = true;
    renderAnniversaryMatchingBoard(card, isUnlocked);
    updateAnniversaryGameScreenState(card);
    return;
  }

  if (card.gameType === "snake") {
    elements.anniversaryGameForm.hidden = true;
    renderAnniversarySnakeBoard();
    updateAnniversaryGameScreenState(card);
    return;
  }

  if (card.gameType === "runner") {
    elements.anniversaryGameForm.hidden = true;
    renderAnniversaryRunnerBoard(card, isUnlocked);
    updateAnniversaryGameScreenState(card);
    return;
  }

  if (card.gameType === "anagram") {
    elements.anniversaryGameHud.innerHTML = "";
    renderAnniversaryAnagramBoard(card, isUnlocked);
    elements.anniversaryGameForm.hidden = true;
    updateAnniversaryGameScreenState(card);
    return;
  }

  if (card.gameType === "timing") {
    elements.anniversaryGameForm.hidden = true;
    renderAnniversaryTimingBoard(card, isUnlocked);
    updateAnniversaryGameScreenState(card);
    return;
  }

  elements.anniversaryGameHud.innerHTML = "";
  elements.anniversaryGameBoard.innerHTML = "";
  elements.anniversaryGameBoard.className = "anniversary-game-board";
  elements.anniversaryGameForm.hidden = false;
  elements.anniversaryGameInput.value = "";
  elements.anniversaryGameInput.placeholder = "Type your answer";
  elements.anniversaryGameInput.disabled = isUnlocked;
  elements.anniversaryGameForm.querySelector("button").disabled = isUnlocked;
  elements.anniversaryGameForm.querySelector("button").textContent = "Unlock gift";
  updateAnniversaryGameScreenState(card);
}

function renderAnniversaryMatchingBoard(card, isUnlocked) {
  if (state.anniversaryMatchingCelebration && !isUnlocked) {
    const photoPairs = normalizeAnniversaryMatchingPairs(card.matchingPairs, DEFAULT_DATA.anniversary.cards[0].matchingPairs)
      .filter((pair) => pair.image)
      .slice(0, 6);
    const celebrationGridMarkup = state.anniversaryGameDeck.map((tile) => {
      const hasImage = tile.kind === "image" && tile.image;
      return `
        <span class="anniversary-memory-celebration-grid-card ${hasImage ? "has-image" : ""}">
          ${
            hasImage
              ? `<span class="anniversary-memory-photo" aria-hidden="true" style="background-image:url('${escapeAttribute(tile.image)}'); background-position:center ${clampNumber(Number(tile.imagePositionY), 0, 100, 50)}%;"></span>`
              : `<strong>${escapeHtml(tile.label)}</strong>`
          }
        </span>
      `;
    }).join("");
    const deckCardsMarkup = state.anniversaryGameDeck.map((tile, index) => {
      const col = index % 6;
      const row = Math.floor(index / 6);
      const fromX = `${(col - 2.5) * 7.2}rem`;
      const fromY = `${(row - 1.5) * 4.8}rem`;
      const rotate = `${((index % 2 === 0 ? -1 : 1) * (6 + (index % 5) * 3))}deg`;
      const endY = `${Math.min(index * 0.08, 1.2)}rem`;
      return `
        <span
          class="anniversary-memory-stack-card"
          style="--memory-from-x:${fromX}; --memory-from-y:${fromY}; --memory-from-rotate:${rotate}; --memory-end-y:${endY}; --memory-delay:3s; z-index:${100 - index};"
          aria-hidden="true"
        ></span>
      `;
    }).join("");
    const photoMarkup = photoPairs.map((pair, index) => `
      <div class="anniversary-memory-celebration-photo" style="animation-delay:${4.2 + index * 0.18}s;">
        <span class="anniversary-memory-photo" style="background-image:url('${escapeAttribute(pair.image)}'); background-position:center ${clampNumber(Number(pair.imagePositionY), 0, 100, 50)}%;"></span>
      </div>
    `).join("");

    elements.anniversaryGameBoard.innerHTML = `
      <div class="anniversary-memory-celebration">
        <div class="anniversary-memory-celebration-grid" aria-hidden="true">
          ${celebrationGridMarkup}
        </div>
        <div class="anniversary-memory-stack" aria-hidden="true">
          ${deckCardsMarkup}
        </div>
        <div class="anniversary-memory-celebration-copy is-overlay">
          <strong>Congratulations</strong>
          <p>I want to make more memories with you. I love you.</p>
        </div>
        <div class="anniversary-memory-celebration-gallery">
          ${photoMarkup}
        </div>
        <button class="primary-button anniversary-memory-claim-button" type="button" data-anniversary-matching-claim>
          Claim gift
        </button>
      </div>
    `;
    elements.anniversaryGameBoard.className = "anniversary-game-board is-matching is-celebrating";
    return;
  }

  elements.anniversaryGameBoard.innerHTML = "";
  elements.anniversaryGameBoard.className = "anniversary-game-board is-matching";

  state.anniversaryGameDeck.forEach((tile) => {
    const isSelected = state.anniversaryGameSelections.includes(tile.id);
    const isMatched = state.anniversaryMatchedPairIds.includes(tile.pairId) || isUnlocked;
    const hasImage = tile.kind === "image" && tile.image;
    const isZoomed = state.anniversaryZoomedTileId === tile.id;
    const button = document.createElement("button");
    button.type = "button";
    button.className = "anniversary-memory-tile";
    button.dataset.anniversaryTile = tile.id;
    if (isSelected || isMatched) {
      button.classList.add("is-revealed");
    }
    if (isMatched) {
      button.classList.add("is-matched");
    }
    if (isZoomed) {
      button.classList.add("is-zoomed");
    }
    if (hasImage) {
      button.classList.add("has-image");
    }

    button.innerHTML = `
      <span class="anniversary-memory-tile-face anniversary-memory-tile-back">?</span>
      <span class="anniversary-memory-tile-face anniversary-memory-tile-front ${hasImage ? "has-image" : ""}">
        ${
          hasImage
            ? `<span class="anniversary-memory-photo" aria-label="${escapeAttribute(tile.label)}" style="background-image:url('${escapeAttribute(tile.image)}'); background-position:center ${clampNumber(Number(tile.imagePositionY), 0, 100, 50)}%;"></span>`
            : `<strong>${escapeHtml(tile.label)}</strong>`
        }
      </span>
    `;
    elements.anniversaryGameBoard.append(button);
  });

  if (state.anniversaryZoomPreview?.image) {
    const preview = document.createElement("div");
    preview.className = "anniversary-memory-floating-preview";
    preview.style.setProperty("--preview-left", `${state.anniversaryZoomPreview.left}px`);
    preview.style.setProperty("--preview-top", `${state.anniversaryZoomPreview.top}px`);
    preview.style.setProperty("--preview-width", `${state.anniversaryZoomPreview.width}px`);
    preview.style.setProperty("--preview-height", `${state.anniversaryZoomPreview.height}px`);
    preview.innerHTML = `<span class="anniversary-memory-photo" style="background-image:url('${escapeAttribute(state.anniversaryZoomPreview.image)}'); background-position:center ${clampNumber(Number(state.anniversaryZoomPreview.imagePositionY), 0, 100, 50)}%;"></span>`;
    elements.anniversaryGameBoard.append(preview);
  }
}

function setAnniversaryImagePreview(tile, tileElement) {
  const board = elements.anniversaryGameBoard;
  if (!tile || !tileElement || !board) {
    state.anniversaryZoomedTileId = null;
    state.anniversaryZoomPreview = null;
    return;
  }

  const tileRect = tileElement.getBoundingClientRect();
  const boardRect = board.getBoundingClientRect();
  const desiredWidth = Math.min(Math.max(tileRect.width * 1.65, 132), 220);
  const desiredHeight = Math.min(Math.max(tileRect.height * 1.8, 96), 170);
  const centerX = tileRect.left - boardRect.left + tileRect.width / 2;
  const centeredLeft = centerX - desiredWidth / 2;
  const clampedLeft = Math.min(
    Math.max(centeredLeft, 6),
    Math.max(6, boardRect.width - desiredWidth - 6)
  );
  const preferredTop = tileRect.top - boardRect.top - desiredHeight * 0.16;
  const clampedTop = Math.min(
    Math.max(preferredTop, 6),
    Math.max(6, boardRect.height - desiredHeight - 6)
  );

  state.anniversaryZoomedTileId = tile.id;
  state.anniversaryZoomPreview = {
    image: tile.image,
    imagePositionY: tile.imagePositionY,
    left: clampedLeft,
    top: clampedTop,
    width: desiredWidth,
    height: desiredHeight,
  };
}

function getAnniversaryAnagramConfig(cardId) {
  const baseConfig = ANNIVERSARY_ANAGRAM_GAMES[cardId];
  const anniversarySettings = normalizeAnniversarySettings(state.data.anniversary, DEFAULT_DATA.anniversary);
  const card = anniversarySettings.cards.find((item) => item.id === cardId);
  if (!baseConfig && !card) {
    return null;
  }

  const config = {
    ...(baseConfig || {}),
    pangram: String(card?.answer || baseConfig?.pangram || "").trim().toLowerCase(),
    allowedWords: [
      ...(Array.isArray(baseConfig?.allowedWords) ? baseConfig.allowedWords : []),
      ...(Array.isArray(card?.allowedWords) ? card.allowedWords : []),
    ],
  };

  return {
    ...config,
    pangram: String(config.pangram || "").trim().toLowerCase(),
    allowedWords: Array.from(
      new Set((Array.isArray(config.allowedWords) ? config.allowedWords : []).map((word) => String(word || "").trim().toLowerCase()).filter(Boolean))
    ).sort(),
  };
}

function buildAnniversaryAnagramTiles(cardId) {
  const config = getAnniversaryAnagramConfig(cardId);
  if (!config?.pangram) {
    return [];
  }

  return config.pangram.split("").map((letter, index) => ({
    id: `${cardId}-letter-${index}`,
    letter: letter.toUpperCase(),
    originalIndex: index,
  }));
}

function buildAnniversaryAnagramShuffle(cardId) {
  const tiles = buildAnniversaryAnagramTiles(cardId);
  if (!tiles.length) {
    return [];
  }

  const ids = tiles.map((tile) => tile.id);
  const originalIndexById = new Map(tiles.map((tile) => [tile.id, tile.originalIndex]));
  const minimumFarLetters = Math.ceil(ids.length / 2);

  for (let attempt = 0; attempt < 240; attempt += 1) {
    const shuffled = [...ids]
      .map((id) => ({ id, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map((item) => item.id);
    const farMovedLetters = shuffled.filter((id, index) => Math.abs(index - originalIndexById.get(id)) > 1).length;
    const sameSpotLetters = shuffled.filter((id, index) => index === originalIndexById.get(id)).length;
    if (farMovedLetters >= minimumFarLetters && sameSpotLetters <= Math.floor(ids.length / 3)) {
      return shuffled;
    }
  }

  return [...ids].reverse();
}

function getAnniversaryAnagramTileMap(cardId) {
  return new Map(buildAnniversaryAnagramTiles(cardId).map((tile) => [tile.id, tile]));
}

function ensureAnniversaryAnagramShuffle(cardId) {
  const tileIds = buildAnniversaryAnagramTiles(cardId).map((tile) => tile.id);
  const current = Array.isArray(state.anniversaryAnagramShuffle) ? state.anniversaryAnagramShuffle : [];
  const sameSet = current.length === tileIds.length && current.every((id) => tileIds.includes(id));
  if (!sameSet) {
    state.anniversaryAnagramShuffle = buildAnniversaryAnagramShuffle(cardId);
  }
}

function getAnniversaryAnagramCurrentGuess(cardId) {
  const tileMap = getAnniversaryAnagramTileMap(cardId);
  return (state.anniversaryAnagramSelectedTileIds || []).map((tileId) => tileMap.get(tileId)?.letter || "").join("");
}

function getAnniversaryFoundAnagramWords(cardId) {
  if (state.anniversaryAdminOverride) {
    return Array.isArray(state.anniversaryOverrideAnagramFoundWords?.[cardId]) ? state.anniversaryOverrideAnagramFoundWords[cardId] : [];
  }

  const progress = normalizeAnniversaryProgress(state.anniversary);
  return Array.isArray(progress.anagramFoundWordsByCardId?.[cardId]) ? progress.anagramFoundWordsByCardId[cardId] : [];
}

function setAnniversaryFoundAnagramWords(cardId, words) {
  const normalizedWords = Array.from(
    new Set((Array.isArray(words) ? words : []).map((word) => String(word || "").trim().toLowerCase()).filter((word) => word.length >= 3))
  ).sort();

  if (state.anniversaryAdminOverride) {
    state.anniversaryOverrideAnagramFoundWords = {
      ...(state.anniversaryOverrideAnagramFoundWords || {}),
      [cardId]: normalizedWords,
    };
    return;
  }

  const progress = normalizeAnniversaryProgress(state.anniversary);
  progress.anagramFoundWordsByCardId = {
    ...(progress.anagramFoundWordsByCardId || {}),
    [cardId]: normalizedWords,
  };
  state.anniversary = progress;
  saveAnniversaryProgress();
}

function renderAnniversaryAnagramBoard(card, isUnlocked) {
  const config = getAnniversaryAnagramConfig(card.id);
  const foundWords = getAnniversaryFoundAnagramWords(card.id);
  const hasPangram = foundWords.includes(config?.pangram);
  const foundCount = foundWords.length;
  const minWords = state.anniversaryAdminOverride ? 3 : (config?.minWords || 15);
  const remainingWords = Math.max(0, minWords - foundCount);
  ensureAnniversaryAnagramShuffle(card.id);
  const tiles = buildAnniversaryAnagramTiles(card.id);
  const tileMap = new Map(tiles.map((tile) => [tile.id, tile]));
  const selectedTileIds = Array.isArray(state.anniversaryAnagramSelectedTileIds) ? state.anniversaryAnagramSelectedTileIds : [];
  const selectedSet = new Set(selectedTileIds);
  const currentGuess = selectedTileIds.map((tileId) => tileMap.get(tileId)?.letter || "").join("");
  const progressBoxesMarkup = Array.from({ length: minWords }, (_, index) => `
    <span class="anniversary-anagram-progress-box ${index < foundCount ? "is-complete" : ""}" aria-hidden="true"></span>
  `).join("");
  const lettersMarkup = state.anniversaryAnagramShuffle.map((tileId) => {
    const tile = tileMap.get(tileId);
    if (!tile) {
      return "";
    }
    return `
      <button
        class="anniversary-anagram-letter ${selectedSet.has(tileId) ? "is-used" : ""}"
        type="button"
        data-anniversary-anagram-letter="${escapeAttribute(tileId)}"
        ${isUnlocked || selectedSet.has(tileId) ? "disabled" : ""}
      >${escapeHtml(tile.letter)}</button>
    `;
  }).join("");
  const foundMarkup = foundWords.length
    ? foundWords.map((word, index) => `<li class="${word === config?.pangram ? "is-pangram" : ""} ${index === foundWords.length - 1 && state.anniversaryAnagramFeedback === "success" ? "is-new" : ""}">${escapeHtml(word)}</li>`).join("")
    : `<li class="is-empty">No words found yet. Start with any 3-letter word.</li>`;

  elements.anniversaryGameBoard.className = "anniversary-game-board is-anagram";
  elements.anniversaryGameBoard.innerHTML = `
    <div class="anniversary-anagram-shell">
      <div class="anniversary-anagram-letters" aria-label="Anagram letters">
        ${lettersMarkup}
      </div>
      <div class="anniversary-anagram-builder">
        <div class="anniversary-anagram-current-word ${currentGuess ? "has-word" : ""} ${state.anniversaryAnagramFeedback ? `is-${state.anniversaryAnagramFeedback}` : ""}">
          ${currentGuess ? escapeHtml(currentGuess) : "Tap letters to build a word"}
        </div>
        <div class="anniversary-anagram-actions">
          <button class="secondary-button" type="button" data-anniversary-anagram-submit ${isUnlocked ? "disabled" : ""}>Submit</button>
          <button class="secondary-button" type="button" data-anniversary-anagram-backspace ${isUnlocked || !currentGuess ? "disabled" : ""}>Delete</button>
          <button class="secondary-button" type="button" data-anniversary-anagram-clear ${isUnlocked || !currentGuess ? "disabled" : ""}>Clear</button>
          <button class="secondary-button" type="button" data-anniversary-anagram-reshuffle ${isUnlocked ? "disabled" : ""}>Rescramble</button>
        </div>
      </div>
      <div class="anniversary-anagram-stats">
        <div class="anniversary-anagram-stat anniversary-anagram-stat--progress">
          <div class="anniversary-anagram-stat-labels">
            <span>Checks</span>
            <strong>${foundCount}/${minWords}</strong>
          </div>
          <div class="anniversary-anagram-progress" role="img" aria-label="${foundCount} of ${minWords} words found">
            ${progressBoxesMarkup}
          </div>
          <small>${remainingWords} left</small>
        </div>
        <div class="anniversary-anagram-stat ${hasPangram ? "is-complete" : ""}">
          <span>Pangram</span>
          <strong>${hasPangram ? "Found" : "Missing"}</strong>
        </div>
        <div class="anniversary-anagram-stat">
          <span>Status</span>
          <strong>${isUnlocked ? "Solved" : "Keep going"}</strong>
        </div>
      </div>
      <div class="anniversary-anagram-found">
        <p>${state.anniversaryAdminOverride
          ? `Override mode is on. Find any ${minWords} words to test the unlock.`
          : `Use only these letters. Find at least ${minWords} words, and one of them has to be the full pangram.`}</p>
        <ul>${foundMarkup}</ul>
      </div>
    </div>
  `;
}

function renderAnniversarySnakeBoard() {
  const snakeState = state.anniversarySnake;
  if (!snakeState) {
    elements.anniversaryGameHud.innerHTML = "";
    elements.anniversaryGameBoard.innerHTML = "";
    return;
  }

  const directionGlyph = {
    up: "↑",
    down: "↓",
    left: "←",
    right: "→",
  };
  const controlMode = state.anniversarySnakeControlMode === "pad" ? "pad" : "joystick";

  elements.anniversaryGameHud.innerHTML = `
    <div class="anniversary-snake-hudbar">
      <div class="anniversary-snake-mini-stats" aria-label="Snake status">
        <div class="anniversary-snake-mini-stat">
          <span>Hearts</span>
          <strong>${snakeState.score}/${snakeState.target}</strong>
        </div>
        <div class="anniversary-snake-mini-stat">
          <span>Length</span>
          <strong>${snakeState.snake.length}</strong>
        </div>
        <div class="anniversary-snake-mini-stat">
          <span>Heading</span>
          <strong>${directionGlyph[snakeState.nextDirection] || "→"}</strong>
        </div>
      </div>
      <div class="anniversary-snake-hud-actions">
        <button class="secondary-button anniversary-snake-mode-toggle" type="button" data-anniversary-snake-mode-toggle>
          ${controlMode === "joystick" ? "Use pad" : "Use stick"}
        </button>
        ${
          snakeState.status === "playing"
            ? ""
            : `
              <button class="secondary-button anniversary-snake-restart is-visible" type="button" data-anniversary-snake-restart>
                Try again
              </button>
            `
        }
      </div>
    </div>
  `;

  const occupied = new Map(snakeState.snake.map((segment, index) => [`${segment.x}:${segment.y}`, index]));
  const rows = [];
  for (let y = 0; y < snakeState.gridSize; y += 1) {
    for (let x = 0; x < snakeState.gridSize; x += 1) {
      const key = `${x}:${y}`;
      const segmentIndex = occupied.get(key);
      const isHeart = snakeState.heart.x === x && snakeState.heart.y === y;
      const classes = ["anniversary-snake-cell"];

      if (typeof segmentIndex === "number") {
        classes.push("is-snake");
        if (segmentIndex === 0) {
          classes.push("is-head");
        }
      }

      if (isHeart) {
        classes.push("is-heart");
      }

      const tailLabel = typeof segmentIndex === "number" && segmentIndex === snakeState.snake.length - 1 && snakeState.status === "playing"
        ? `<span class="anniversary-snake-tail-label">nom nom</span>`
        : "";
      rows.push(`<span class="${classes.join(" ")}">${tailLabel}</span>`);
    }
  }

  const thumbX = Math.round(state.anniversarySnakeJoystickVector.x * 24);
  const thumbY = Math.round(state.anniversarySnakeJoystickVector.y * 24);

  const snakeGridClasses = ["anniversary-snake-grid"];
  if (snakeState.status === "lost") {
    snakeGridClasses.push("is-crashed");
  }

  elements.anniversaryGameBoard.className = "anniversary-game-board is-snake";
  elements.anniversaryGameBoard.innerHTML = `
    <div class="anniversary-snake-shell">
      <button class="${snakeGridClasses.join(" ")}" type="button" data-anniversary-snake-start style="--snake-grid-size:${snakeState.gridSize}">
        ${rows.join("")}
        ${
          snakeState.status === "ready"
            ? `
              <span class="anniversary-snake-start-overlay">
                <strong>Tap to start</strong>
                <span>Space works on desktop too.</span>
              </span>
            `
            : ""
        }
      </button>
      <div class="anniversary-snake-controls">
        <div class="anniversary-snake-instructions">
          ${controlMode === "joystick"
            ? "Drag lightly and guide the nom nom snake toward every heart."
            : "Tap any arrow and keep the nom nom snake heading toward hearts."}
        </div>
        ${
          controlMode === "joystick"
            ? `
              <div class="anniversary-snake-joystick" data-anniversary-joystick>
                <span class="anniversary-snake-joystick-ring"></span>
                <span
                  class="anniversary-snake-joystick-thumb"
                  style="transform: translate(${thumbX}px, ${thumbY}px);"
                ></span>
              </div>
            `
            : `
              <div class="anniversary-snake-pad" aria-label="Snake direction pad">
                <button class="anniversary-snake-pad-button is-up" type="button" data-anniversary-snake-direction="up" aria-label="Move up">↑</button>
                <button class="anniversary-snake-pad-button is-left" type="button" data-anniversary-snake-direction="left" aria-label="Move left">←</button>
                <button class="anniversary-snake-pad-button is-right" type="button" data-anniversary-snake-direction="right" aria-label="Move right">→</button>
                <button class="anniversary-snake-pad-button is-down" type="button" data-anniversary-snake-direction="down" aria-label="Move down">↓</button>
              </div>
            `
        }
      </div>
    </div>
  `;
}

function renderAnniversaryRunnerBoard(card, isUnlocked) {
  const runnerState = state.anniversaryRunner;
  if (!runnerState) {
    elements.anniversaryGameHud.innerHTML = "";
    elements.anniversaryGameBoard.innerHTML = "";
    return;
  }

  const elapsedSeconds = runnerState.elapsedMs / 1000;
  const targetSeconds = Math.round(runnerState.targetMs / 1000);
  const distanceMeters = Math.round(elapsedSeconds * 22);
  const remainingSeconds = Math.max(0, runnerState.targetMs - runnerState.elapsedMs) / 1000;
  const rewardImageMarkup = card.image
    ? `
      <div class="anniversary-runner-win-photo-shell">
        <span
          class="anniversary-runner-win-photo"
          style="background-image:url('${escapeAttribute(card.image)}');"
          aria-label="${escapeAttribute(card.rewardTitle || card.name || "Reward photo")}"
        ></span>
      </div>
    `
    : `
      <div class="anniversary-runner-win-photo-shell is-placeholder">
        <span class="anniversary-runner-win-photo-placeholder">us</span>
      </div>
    `;

  elements.anniversaryGameHud.innerHTML = "";

  const runnerBottom = 1.15 + runnerState.jumpOffset * 0.22;
  const obstaclesMarkup = runnerState.obstacles.map((obstacle) => `
    <span
      class="anniversary-runner-obstacle"
      style="left:${obstacle.x}%; width:${obstacle.width}%; bottom:1.15rem; --runner-obstacle-hit-height:${obstacle.collisionHeight || obstacle.height || 0}rem;"
      aria-hidden="true"
    >${escapeHtml(obstacle.emoji)}</span>
  `).join("");

  const runnerShellClasses = ["anniversary-runner-shell"];
  if (runnerState.status !== "playing") {
    runnerShellClasses.push("is-finished");
  }
  if (runnerState.status === "lost") {
    runnerShellClasses.push("is-stumbled");
  }
  if (runnerState.status === "won") {
    runnerShellClasses.push("is-won");
  }

  elements.anniversaryGameBoard.className = "anniversary-game-board is-runner";
  elements.anniversaryGameBoard.innerHTML = `
    <button class="${runnerShellClasses.join(" ")}" type="button" data-anniversary-runner-jump aria-label="Jump">
      <div class="anniversary-runner-sky"></div>
      <div class="anniversary-runner-track"></div>
      <span
        class="anniversary-runner-player"
        style="bottom:${runnerBottom}rem;"
        aria-hidden="true"
      >🐸</span>
      ${obstaclesMarkup}
      ${
        runnerState.status === "won"
          ? `
            <div class="anniversary-runner-win-burst" aria-hidden="true">💖</div>
            <div class="anniversary-runner-win-center">
              ${rewardImageMarkup}
            </div>
          `
          : ""
      }
      ${
        runnerState.status === "lost"
          ? `
            <div class="anniversary-runner-stumble-center">
              <strong>Stumbled!</strong>
              <span>Tap to restart</span>
            </div>
          `
          : ""
      }
      <div class="anniversary-runner-statsbar" aria-hidden="true">
        <span>${distanceMeters}m</span>
        <span>${elapsedSeconds.toFixed(1)}s</span>
        <span>${runnerState.score} pts</span>
        <span>${remainingSeconds.toFixed(1)}s left</span>
      </div>
      <div class="anniversary-runner-overlay">
        <strong>${
          runnerState.status === "won"
            ? "Heart unlocked"
            : runnerState.status === "lost"
              ? "Stumbled"
              : runnerState.status === "ready"
                ? "Tap the screen to start"
                : runnerState.status === "playing"
                  ? "Tap anywhere to jump"
                  : isUnlocked
                    ? "Gift unlocked"
                    : "Run To Us"
        }</strong>
        <span>${
          runnerState.status === "won"
            ? "A little glowing us moment."
            : runnerState.status === "lost"
              ? "Tap or press space to start again."
              : runnerState.status === "ready"
                ? "Space bar works on desktop too."
                : runnerState.status === "playing"
                  ? "Space bar works on desktop too."
                  : isUnlocked
                    ? "Your gym gift is ready."
                    : ""
        }</span>
      </div>
    </button>
  `;
}

function renderAnniversaryTimingBoard(card, isUnlocked) {
  const timingState = state.anniversaryTiming;
  if (!timingState) {
    elements.anniversaryGameHud.innerHTML = "";
    elements.anniversaryGameBoard.innerHTML = "";
    return;
  }

  const segmentsMarkup = Array.from({ length: timingState.totalUnits }, (_, index) => {
    const classes = ["anniversary-timing-segment"];
    if (index === timingState.targetIndex) {
      classes.push("is-target");
    }
    if (index === timingState.currentIndex) {
      classes.push("is-active");
    }
    if (index === timingState.targetIndex && index === timingState.currentIndex) {
      classes.push("is-hit");
    }
    return `<span class="${classes.join(" ")}" style="--timing-angle:${index * 3}deg;"></span>`;
  }).join("");

  const rewardImageMarkup = card.image
    ? `
      <span
        class="anniversary-timing-center-photo"
        style="background-image:url('${escapeAttribute(card.image)}');"
        aria-hidden="true"
      ></span>
    `
    : `<span class="anniversary-timing-center-gem" aria-hidden="true">✦</span>`;
  const stageLabel = getAnniversaryTimingStageLabel(timingState.hits);
  const nextHit = Math.min(timingState.targetHits, timingState.hits + 1);

  elements.anniversaryGameHud.innerHTML = "";
  elements.anniversaryGameBoard.className = "anniversary-game-board is-timing";
  elements.anniversaryGameBoard.innerHTML = `
    <button class="anniversary-timing-shell ${timingState.status === "won" ? "is-won" : ""} ${timingState.lastTapResult === "hit" ? "is-hit" : ""} ${timingState.lastTapResult === "miss" ? "is-miss" : ""}" type="button" data-anniversary-timing-tap aria-label="Stop the moving light on the target">
      <div class="anniversary-timing-ring-wrap">
        <div class="anniversary-timing-ring" aria-hidden="true">
          ${segmentsMarkup}
          <div class="anniversary-timing-center">
            <div class="anniversary-timing-clover">
              <span class="anniversary-timing-clover-petal is-top"></span>
              <span class="anniversary-timing-clover-petal is-right"></span>
              <span class="anniversary-timing-clover-petal is-bottom"></span>
              <span class="anniversary-timing-clover-petal is-left"></span>
              <span class="anniversary-timing-clover-core"></span>
            </div>
            <div class="anniversary-timing-center-copy">
              <span>${timingState.status === "won" ? "Prize" : "Catch"}</span>
              <strong>${timingState.status === "won" ? timingState.targetHits : nextHit}</strong>
              <em>of ${timingState.targetHits}</em>
              ${timingState.status === "won" ? rewardImageMarkup : ""}
            </div>
          </div>
        </div>
      </div>
      <div class="anniversary-timing-panel">
        <div class="anniversary-timing-stat">
          <span>Perfect stops</span>
          <strong>${timingState.hits} / ${timingState.targetHits}</strong>
        </div>
        <div class="anniversary-timing-stat">
          <span>Speed</span>
          <strong>${stageLabel}</strong>
        </div>
      </div>
      <div class="anniversary-timing-overlay">
        <strong>${
          timingState.status === "won"
            ? "Congratulations, my love"
            : timingState.lastTapResult === "hit"
              ? "Good job"
            : timingState.status === "ready"
              ? "Tap to start"
              : timingState.status === "checking"
                ? "Hold your breath"
                : "Tap on the target"
        }</strong>
        <span>${
          timingState.status === "won"
            ? "You kept your calm even when it got fast. I love making little moments like this for you. Let's go get the necklace. :)"
            : timingState.lastTapResult === "hit"
              ? "Perfect stop. Take the little win, then get ready for the next one."
            : timingState.status === "ready"
              ? "Space bar works on desktop too."
              : timingState.status === "checking"
                ? "The ring pauses for a split second after each tap."
                : "Catch the racing light exactly on the gold mark."
        }</span>
      </div>
      ${
        timingState.status === "won"
          ? `
            <div class="anniversary-timing-win-popup" role="dialog" aria-modal="false" aria-label="Congratulations">
              <span class="anniversary-timing-win-kicker">You won</span>
              <strong>Congratulations, my love</strong>
              <p>You kept your calm even when it got fast.</p>
              <p>I love making little moments like this for you.</p>
              <p>Let's go get the necklace. :)</p>
            </div>
          `
          : ""
      }
    </button>
  `;
}

function renderAnniversarySnakeJoystickThumb() {
  const thumb = elements.anniversaryGameBoard.querySelector(".anniversary-snake-joystick-thumb");
  if (!thumb) {
    return;
  }

  const thumbX = Math.round(state.anniversarySnakeJoystickVector.x * 24);
  const thumbY = Math.round(state.anniversarySnakeJoystickVector.y * 24);
  thumb.style.transform = `translate(${thumbX}px, ${thumbY}px)`;
}

function renderAnniversaryTumbler() {
  const settings = normalizeAnniversarySettings(state.data.anniversary, DEFAULT_DATA.anniversary);
  const digitCount = settings.entryCode.length;
  const entry = (state.anniversaryPinEntry || "0".repeat(digitCount)).padEnd(digitCount, "0").slice(0, digitCount);
  state.anniversaryPinEntry = entry;

  elements.anniversaryPinDots.innerHTML = "";
  for (let index = 0; index < digitCount; index += 1) {
    const dot = document.createElement("span");
    dot.className = "anniversary-tumbler-digit";
    dot.textContent = entry[index] || "0";
    dot.dataset.anniversaryDigit = String(index);
    elements.anniversaryPinDots.append(dot);
  }

  elements.anniversaryUnlockButton.disabled = false;
}

function unlockAnniversaryMain() {
  state.anniversary.unlockedMain = true;
  state.anniversaryPinEntry = "";
  saveAnniversaryProgress();
  renderAnniversary();
  showToast("Secret opened", "The anniversary page is unlocked now.");
}

function completeAnniversaryCard(card) {
  const shouldOfferDateReward = card.id === "anniversary-1" || card.id === "anniversary-4";

  if (state.anniversaryAdminOverride) {
    renderAnniversary();
    renderAnniversaryGameModal();
    showToast(`Level ${card.level} tested`, "Override mode is on, so real progress was not changed.");
    if (shouldOfferDateReward) {
      openAnniversaryDateRewardModal(card);
    }
    return;
  }

  if (!state.anniversary.unlockedCardIds.includes(card.id)) {
    state.anniversary.unlockedCardIds.push(card.id);
  }
  if (shouldOfferDateReward && !state.anniversary.pendingDateRewardCardIds.includes(card.id)) {
    state.anniversary.pendingDateRewardCardIds.push(card.id);
  }
  saveAnniversaryProgress();

  renderAnniversary();
  renderAnniversaryGameModal();
  showToast(`Level ${card.level} unlocked`, card.rewardTitle);
  if (shouldOfferDateReward) {
    openAnniversaryDateRewardModal(card);
  }
}

function openAnniversaryDateRewardModal(card = null) {
  const activeCard = card || normalizeAnniversarySettings(state.data.anniversary, DEFAULT_DATA.anniversary)
    .cards.find((item) => item.id === state.activeAnniversaryCardId);
  const isMatchingReward = activeCard?.id === "anniversary-1";
  const isRunnerReward = activeCard?.id === "anniversary-4";
  elements.anniversaryDateRewardModal.dataset.rewardType = isRunnerReward ? "runner" : isMatchingReward ? "matching" : "date";
  elements.anniversaryDateRewardTitle.textContent = isRunnerReward
    ? "You did it, my love"
    : isMatchingReward
      ? "First little gift"
      : "Pick your date";
  elements.anniversaryDateRewardText.textContent = isRunnerReward
    ? "I want to do everything with you.\n\nClaim your prize: lifetime gym memberships for us."
    : isMatchingReward
      ? "I want to make more memories with you. I love you.\n\nSelect a trip or a date and we can plan it in the Dates list. Wherever you want to go, I want to take you."
      : "Choose the restaurant you want and the date you want us to go.";
  if (activeCard?.image) {
    elements.anniversaryDateRewardPhoto.hidden = false;
    elements.anniversaryDateRewardPhoto.style.backgroundImage = `url("${activeCard.image}")`;
  } else {
    elements.anniversaryDateRewardPhoto.hidden = true;
    elements.anniversaryDateRewardPhoto.style.backgroundImage = "";
  }
  elements.claimAnniversaryDateRewardButton.textContent = isRunnerReward ? "Claim prize" : "Claim gift";
  elements.scheduleAnniversaryDateRewardLaterButton.textContent = isMatchingReward ? "Choose later" : "Schedule later";
  elements.scheduleAnniversaryDateRewardLaterButton.hidden = isRunnerReward;
  elements.anniversaryDateRewardIntroActions.hidden = false;
  elements.anniversaryDateRewardFormFields.hidden = true;
  elements.anniversaryDateRewardFormFields.classList.remove("is-revealed");
  elements.anniversaryDateRewardTypeSelect.value = isMatchingReward ? "trip" : "date";
  elements.anniversaryDateRewardLocationInput.value = "";
  elements.anniversaryDateRewardDateInput.value = toDateTimeLocalValue(getDefaultDatePlanTimestamp(1));
  elements.anniversaryDateRewardEndInput.value = "";
  updateAnniversaryDateRewardForm();
  elements.anniversaryDateRewardModal.hidden = false;
}

function closeAnniversaryDateRewardModal() {
  elements.anniversaryDateRewardModal.hidden = true;
}

function revealAnniversaryDateRewardForm() {
  if (elements.anniversaryDateRewardModal.dataset.rewardType === "runner") {
    state.anniversary.pendingDateRewardCardIds = (state.anniversary.pendingDateRewardCardIds || []).filter((cardId) => cardId !== "anniversary-4");
    saveAnniversaryProgress();
    renderAnniversary();
    closeAnniversaryDateRewardModal();
    showToast("Prize claimed", "Lifetime gym memberships for us.");
    return;
  }

  elements.anniversaryDateRewardIntroActions.hidden = true;
  elements.anniversaryDateRewardFormFields.hidden = false;
  elements.anniversaryDateRewardFormFields.classList.remove("is-revealed");
  window.requestAnimationFrame(() => {
    elements.anniversaryDateRewardFormFields.classList.add("is-revealed");
  });
}

function updateAnniversaryDateRewardForm() {
  const type = elements.anniversaryDateRewardTypeSelect.value === "trip" ? "trip" : "date";
  const isTrip = type === "trip";
  elements.anniversaryDateRewardEndLabel.hidden = !isTrip;
  elements.anniversaryDateRewardEndInput.required = isTrip;
  elements.anniversaryDateRewardLocationInput.placeholder = isTrip ? "Anywhere you want us to go" : "Any place you want us to go";

  if (isTrip && !elements.anniversaryDateRewardEndInput.value && elements.anniversaryDateRewardDateInput.value) {
    elements.anniversaryDateRewardEndInput.value = toDateTimeLocalValue(
      getDefaultTripEndTimestamp(new Date(elements.anniversaryDateRewardDateInput.value).toISOString())
    );
  }
}

function getActiveAnniversaryRewardCardId() {
  const rewardType = elements.anniversaryDateRewardModal.dataset.rewardType;
  if (rewardType === "runner") {
    return "anniversary-4";
  }
  if (rewardType === "matching") {
    return "anniversary-1";
  }
  return state.activeAnniversaryCardId || "anniversary-1";
}

function buildAnniversaryDateRewardPlan({ type = "date", location = "", scheduledFor = "", endsAt = "", note = "" } = {}) {
  const dateIso = scheduledFor && !Number.isNaN(new Date(scheduledFor).valueOf())
    ? new Date(scheduledFor).toISOString()
    : getDefaultDatePlanTimestamp(1);
  const cleanLocation = location.trim();
  const normalizedType = type === "trip" ? "trip" : "date";
  const endIso = normalizedType === "trip" && endsAt && !Number.isNaN(new Date(endsAt).valueOf())
    ? new Date(endsAt).toISOString()
    : "";
  return normalizeLoveLotteryDatePlan({
    planId: crypto.randomUUID?.() || `anniversary-date-${Date.now()}`,
    label: cleanLocation
      ? normalizedType === "trip"
        ? `Trip with you to ${cleanLocation}`
        : `Date with you at ${cleanLocation}`
      : normalizedType === "trip"
        ? "Trip with you"
        : "Date with you",
    location: cleanLocation,
    source: "manual",
    type: normalizedType,
    weeks: 1,
    scheduledFor: dateIso,
    endsAt: endIso,
    createdAt: new Date().toISOString(),
    note,
  });
}

function saveAnniversaryDateRewardLater() {
  const rewardCardId = getActiveAnniversaryRewardCardId();
  const rewardType = elements.anniversaryDateRewardModal.dataset.rewardType;
  const plan = buildAnniversaryDateRewardPlan({
    type: rewardType === "matching" ? "trip" : "date",
    note: rewardType === "matching"
      ? "First anniversary gift. Edit this whenever you are ready to choose a trip or date."
      : "Anniversary prize. Edit this whenever you are ready to choose the details.",
  });

  state.loveLottery.pinnedDatePlans = [...(state.loveLottery.pinnedDatePlans || []), plan];
  state.anniversary.pendingDateRewardCardIds = (state.anniversary.pendingDateRewardCardIds || []).filter((cardId) => cardId !== rewardCardId);
  saveAnniversaryProgress();
  saveLoveLotteryProgress();
  renderImportantDates();
  renderDatesPage();
  renderAnniversary();
  renderLoveLottery();
  closeAnniversaryDateRewardModal();
  showToast("Saved for later", "It is waiting in Dates and can be edited anytime.");
}

function saveAnniversaryDateReward() {
  const rewardCardId = getActiveAnniversaryRewardCardId();
  const type = elements.anniversaryDateRewardTypeSelect.value === "trip" ? "trip" : "date";
  const location = elements.anniversaryDateRewardLocationInput.value.trim();
  const scheduledRaw = elements.anniversaryDateRewardDateInput.value;
  const endsAtRaw = elements.anniversaryDateRewardEndInput.value;
  if (!location || !scheduledRaw || (type === "trip" && !endsAtRaw)) {
    showToast("Plan details needed", "Pick where you want to go and when.");
    return;
  }

  const plan = buildAnniversaryDateRewardPlan({
    type,
    location,
    scheduledFor: scheduledRaw,
    endsAt: endsAtRaw,
    note: rewardCardId === "anniversary-1"
      ? "First anniversary gift plan."
      : "Anniversary reward plan.",
  });

  state.loveLottery.pinnedDatePlans = [...(state.loveLottery.pinnedDatePlans || []), plan];
  state.anniversary.pendingDateRewardCardIds = (state.anniversary.pendingDateRewardCardIds || []).filter((cardId) => cardId !== rewardCardId);
  saveAnniversaryProgress();
  saveLoveLotteryProgress();
  renderImportantDates();
  renderDatesPage();
  renderAnniversary();
  renderLoveLottery();
  closeAnniversaryDateRewardModal();
  showToast("Plan saved", "Your gift is now waiting in Dates and can be edited anytime.");
}

function unlockDashboardMain() {
  state.dashboardGateUnlocked = true;
  state.dashboardPinEntry = "";
  saveDashboardGateProgress();
  renderDashboardGate();
  updateGlobalDock();
  showToast("Home opened", "The main page is unlocked now.");
}

function tryDashboardCodeUnlock() {
  const settings = normalizeDashboardGateSettings(state.data.dashboardGate, DEFAULT_DATA.dashboardGate);
  const entered = state.dashboardPinEntry.slice(0, settings.entryCode.length);

  if (entered.length !== settings.entryCode.length) {
    elements.dashboardLockHint.textContent = "Finish the full pin first.";
    showToast("Almost there", "Finish the home pin first.");
    return;
  }

  if (entered !== settings.entryCode) {
    elements.dashboardLockHint.textContent = "That pin did not match. Try again.";
    state.dashboardPinEntry = "";
    renderDashboardGate();
    showToast("Not yet", "That home pin was not the right one.");
    return;
  }

  elements.dashboardLockHint.textContent = "Unlocked.";
  unlockDashboardMain();
}

function pressDashboardPinDigit(value) {
  const settings = normalizeDashboardGateSettings(state.data.dashboardGate, DEFAULT_DATA.dashboardGate);
  if (state.dashboardPinEntry.length >= settings.entryCode.length) {
    return;
  }

  ensureAmbientMusic();
  state.dashboardPinEntry = `${state.dashboardPinEntry}${value}`.slice(0, settings.entryCode.length);
  elements.dashboardLockHint.textContent = "Enter the pin to open your little home.";
  renderDashboardGate();
}

function backspaceDashboardPin() {
  ensureAmbientMusic();
  state.dashboardPinEntry = state.dashboardPinEntry.slice(0, -1);
  renderDashboardGate();
}

function clearDashboardPin() {
  ensureAmbientMusic();
  state.dashboardPinEntry = "";
  renderDashboardGate();
}

function ensureAmbientMusic() {
  if (!elements.musicAudio?.src || !elements.musicAudio.paused) {
    return;
  }

  unlockSoundEffects();
  elements.musicAudio.play().catch(() => updateMusicButtons());
}

function tryAnniversaryCodeUnlock() {
  ensureAmbientMusic();
  const settings = normalizeAnniversarySettings(state.data.anniversary, DEFAULT_DATA.anniversary);
  const entered = state.anniversaryPinEntry.slice(0, settings.entryCode.length);

  if (entered !== settings.entryCode) {
    elements.anniversaryLockHint.textContent = "That code did not match. Try again.";
    state.anniversaryPinEntry = "0".repeat(settings.entryCode.length);
    renderAnniversaryTumbler();
    showToast("Not yet", "That tumbler code was not the secret one.");
    return;
  }

  elements.anniversaryLockHint.textContent = "Unlocked.";
  unlockAnniversaryMain();
}

function unlockAnniversaryCard(cardId, answer) {
  const settings = normalizeAnniversarySettings(state.data.anniversary, DEFAULT_DATA.anniversary);
  const cardIndex = settings.cards.findIndex((card) => card.id === cardId);
  const card = settings.cards[cardIndex];
  if (!card) {
    return;
  }

  const previousUnlocked = cardIndex === 0 || state.anniversary.unlockedCardIds.includes(settings.cards[cardIndex - 1].id);
  if (!state.anniversary.unlockedMain || !previousUnlocked) {
    showToast("Level locked", "Open the level before this one first.");
    return;
  }

  const normalizedAnswer = String(answer || "").trim().toLowerCase();
  if (!normalizedAnswer) {
    showToast("Answer needed", "Type an answer before unlocking the gift.");
    return;
  }

  if (normalizedAnswer !== card.answer) {
    showToast("Try again", "That answer did not match this challenge.");
    return;
  }

  completeAnniversaryCard(card);
}

function resetAnniversaryProgress() {
  state.anniversary = normalizeAnniversaryProgress();
  state.anniversaryPinEntry = "";
  saveAnniversaryProgress();
  elements.anniversaryLockHint.textContent = "Set the tumbler to the secret code.";
  renderAnniversary();
  showToast("Anniversary reset", "The tumbler and all six gifts are locked again.");
}

function stepAnniversaryTumbler(index, delta) {
  ensureAmbientMusic();
  const settings = normalizeAnniversarySettings(state.data.anniversary, DEFAULT_DATA.anniversary);
  const digits = Array.from({ length: settings.entryCode.length }, (_, digitIndex) => state.anniversaryPinEntry[digitIndex] || "0");
  const current = Number(digits[index] || 0);
  const next = (current + delta + 10) % 10;
  digits[index] = String(next);
  state.anniversaryPinEntry = digits.join("");
  elements.anniversaryLockHint.textContent = "Set the tumbler to the secret code.";
  renderAnniversaryTumbler();
}

function resetAnniversaryTumbler() {
  ensureAmbientMusic();
  const settings = normalizeAnniversarySettings(state.data.anniversary, DEFAULT_DATA.anniversary);
  state.anniversaryPinEntry = "0".repeat(settings.entryCode.length);
  renderAnniversaryTumbler();
}

function submitAnniversaryAnagramWord(card, rawGuess) {
  const config = getAnniversaryAnagramConfig(card.id);
  if (!config) {
    return;
  }

  const guess = String(rawGuess || "").trim().toLowerCase();
  if (anniversaryAnagramFeedbackTimer) {
    clearTimeout(anniversaryAnagramFeedbackTimer);
    anniversaryAnagramFeedbackTimer = null;
  }
  if (guess.length < 3) {
    state.anniversaryAnagramFeedback = "error";
    state.anniversaryGameMessage = "Tiny nibble, but make it at least 3 letters.";
    renderAnniversaryGameModal();
    return;
  }

  if (!config.allowedWords.includes(guess)) {
    showToast("Not on allowed list", "Try another word from these letters.");
    state.anniversaryAnagramFeedback = "error";
    state.anniversaryGameMessage = "Not on allowed list.";
    state.anniversaryAnagramSelectedTileIds = [];
    renderAnniversaryGameModal();
    return;
  }

  const foundWords = getAnniversaryFoundAnagramWords(card.id);
  if (foundWords.includes(guess)) {
    showToast("Already found", "That word was already counted.");
    state.anniversaryAnagramFeedback = "error";
    state.anniversaryGameMessage = guess === config.pangram
      ? "You already found the pangram, cute genius."
      : "You already found that one. Try another word.";
    state.anniversaryAnagramSelectedTileIds = [];
    renderAnniversaryGameModal();
    return;
  }

  const nextWords = [...foundWords, guess].sort();
  setAnniversaryFoundAnagramWords(card.id, nextWords);
  const hasPangram = nextWords.includes(config.pangram);
  const minWords = state.anniversaryAdminOverride ? 3 : (config.minWords || 15);
  state.anniversaryAnagramFeedback = "success";
  state.anniversaryGameMessage = guess === config.pangram
    ? "Pangram found. That was the big love word."
    : `Sweet. ${nextWords.length} of ${minWords} words found.`;
  state.anniversaryAnagramSelectedTileIds = [];
  anniversaryAnagramFeedbackTimer = setTimeout(() => {
    state.anniversaryAnagramFeedback = "";
    anniversaryAnagramFeedbackTimer = null;
    if (state.activeAnniversaryCardId === card.id) {
      renderAnniversaryGameModal();
    }
  }, 850);

  if ((state.anniversaryAdminOverride && nextWords.length >= minWords) || (!state.anniversaryAdminOverride && nextWords.length >= minWords && hasPangram)) {
    state.anniversaryGameMessage = state.anniversaryAdminOverride
      ? "Override clear. Three words found and the test unlock is ready."
      : "All set. You found enough words and the pangram too.";
    completeAnniversaryCard(card);
    return;
  }

  renderAnniversaryGameModal();
}

function handleAnniversaryAnagramLetter(tileId) {
  const settings = normalizeAnniversarySettings(state.data.anniversary, DEFAULT_DATA.anniversary);
  const card = settings.cards.find((item) => item.id === state.activeAnniversaryCardId);
  if (!card || card.gameType !== "anagram") {
    return;
  }

  ensureAmbientMusic();
  state.anniversaryAnagramFeedback = "";
  if ((state.anniversaryAnagramSelectedTileIds || []).includes(tileId)) {
    return;
  }

  state.anniversaryAnagramSelectedTileIds = [...(state.anniversaryAnagramSelectedTileIds || []), tileId];
  renderAnniversaryGameModal();
}

function backspaceAnniversaryAnagramLetter() {
  state.anniversaryAnagramFeedback = "";
  state.anniversaryAnagramSelectedTileIds = (state.anniversaryAnagramSelectedTileIds || []).slice(0, -1);
  renderAnniversaryGameModal();
}

function clearAnniversaryAnagramGuess() {
  state.anniversaryAnagramFeedback = "";
  state.anniversaryAnagramSelectedTileIds = [];
  renderAnniversaryGameModal();
}

function reshuffleAnniversaryAnagram() {
  const settings = normalizeAnniversarySettings(state.data.anniversary, DEFAULT_DATA.anniversary);
  const card = settings.cards.find((item) => item.id === state.activeAnniversaryCardId);
  if (!card || card.gameType !== "anagram") {
    return;
  }

  ensureAmbientMusic();
  state.anniversaryAnagramFeedback = "";
  state.anniversaryAnagramSelectedTileIds = [];
  state.anniversaryAnagramShuffle = buildAnniversaryAnagramShuffle(card.id);
  state.anniversaryGameMessage = "Letters reshuffled.";
  renderAnniversaryGameModal();
}

function handleAnniversaryGameSubmit(event) {
  event.preventDefault();
  const cardId = state.activeAnniversaryCardId;
  if (!cardId) {
    return;
  }

  const settings = normalizeAnniversarySettings(state.data.anniversary, DEFAULT_DATA.anniversary);
  const card = settings.cards.find((item) => item.id === cardId);
  if (!card) {
    return;
  }

  if (card.gameType === "anagram") {
    submitAnniversaryAnagramWord(card, getAnniversaryAnagramCurrentGuess(card.id));
    return;
  }

  unlockAnniversaryCard(cardId, elements.anniversaryGameInput.value);
}

function handleAnniversaryMatchingTile(tileId, tileElement = null) {
  const settings = normalizeAnniversarySettings(state.data.anniversary, DEFAULT_DATA.anniversary);
  const card = settings.cards.find((item) => item.id === state.activeAnniversaryCardId);
  if (!card || card.gameType !== "matching" || state.anniversaryGameBusy || state.anniversaryMatchingCelebration) {
    return;
  }

  const tile = state.anniversaryGameDeck.find((item) => item.id === tileId);
  if (!tile) {
    return;
  }

  const isMatched = state.anniversaryMatchedPairIds.includes(tile.pairId);
  const isSelected = state.anniversaryGameSelections.includes(tile.id);
  const hasImage = tile.kind === "image" && tile.image;

  if ((isMatched || isSelected) && hasImage) {
    if (state.anniversaryZoomedTileId === tile.id) {
      state.anniversaryZoomedTileId = null;
      state.anniversaryZoomPreview = null;
    } else {
      setAnniversaryImagePreview(tile, tileElement);
    }
    renderAnniversaryGameModal();
    return;
  }

  if (isMatched || isSelected) {
    return;
  }

  ensureAmbientMusic();
  state.anniversaryZoomedTileId = null;
  state.anniversaryZoomPreview = null;
  state.anniversaryGameSelections = [...state.anniversaryGameSelections, tile.id];
  renderAnniversaryGameModal();

  if (state.anniversaryGameSelections.length < 2) {
    return;
  }

  const [firstId, secondId] = state.anniversaryGameSelections;
  const first = state.anniversaryGameDeck.find((item) => item.id === firstId);
  const second = state.anniversaryGameDeck.find((item) => item.id === secondId);
  if (!first || !second) {
    return;
  }

  if (first.pairId === second.pairId) {
    state.anniversaryMatchedPairIds.push(first.pairId);
    state.anniversaryGameSelections = [];
    state.anniversaryZoomedTileId = null;
    state.anniversaryZoomPreview = null;
    state.anniversaryGameMessage = "That one matches.";
    renderAnniversaryGameModal();

    const requiredMatches = state.anniversaryAdminOverride ? 1 : card.matchingPairs.length;
    if (state.anniversaryMatchedPairIds.length >= requiredMatches) {
      state.anniversaryGameMessage = "";
      state.anniversaryMatchingCelebration = true;
      renderAnniversaryGameModal();
    }
    return;
  }

  state.anniversaryGameBusy = true;
  state.anniversaryZoomedTileId = null;
  state.anniversaryZoomPreview = null;
  state.anniversaryGameMessage = "Not a match. Try again.";
  renderAnniversaryGameModal();
  window.setTimeout(() => {
    state.anniversaryGameSelections = [];
    state.anniversaryGameBusy = false;
    state.anniversaryZoomedTileId = null;
    state.anniversaryZoomPreview = null;
    renderAnniversaryGameModal();
  }, 900);
}

function claimAnniversaryMatchingPrize() {
  const settings = normalizeAnniversarySettings(state.data.anniversary, DEFAULT_DATA.anniversary);
  const card = settings.cards.find((item) => item.id === state.activeAnniversaryCardId);
  if (!card || card.gameType !== "matching" || !state.anniversaryMatchingCelebration) {
    return;
  }

  state.anniversaryMatchingCelebration = false;
  state.anniversaryGameMessage = "The first gift is revealed.";
  completeAnniversaryCard(card);
}

function updateAnniversarySnakeJoystick(clientX, clientY, joystick) {
  const snakeState = state.anniversarySnake;
  if (!snakeState || !joystick) {
    return;
  }

  const rect = joystick.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  const deltaX = clientX - centerX;
  const deltaY = clientY - centerY;
  const radius = Math.max(rect.width, rect.height) / 2;
  const threshold = radius * 0.16;
  const crossThreshold = radius * 0.12;
  const magnitude = Math.hypot(deltaX, deltaY) || 1;
  const limited = Math.min(radius * 0.42, magnitude);
  const normalizedX = (deltaX / magnitude) * (limited / (radius * 0.42));
  const normalizedY = (deltaY / magnitude) * (limited / (radius * 0.42));

  if (Math.abs(deltaX) > threshold || Math.abs(deltaY) > threshold) {
    let direction = null;
    const currentDirection = snakeState.nextDirection || snakeState.direction;

    if ((currentDirection === "up" || currentDirection === "down") && Math.abs(deltaX) > crossThreshold) {
      direction = deltaX > 0 ? "right" : "left";
    } else if ((currentDirection === "left" || currentDirection === "right") && Math.abs(deltaY) > crossThreshold) {
      direction = deltaY > 0 ? "down" : "up";
    } else {
      direction = Math.abs(deltaX) >= Math.abs(deltaY)
        ? (deltaX > 0 ? "right" : "left")
        : (deltaY > 0 ? "down" : "up");
    }

    setAnniversarySnakeDirection(direction);
  }

  state.anniversarySnakeJoystickVector = {
    x: Number.isFinite(normalizedX) ? normalizedX : 0,
    y: Number.isFinite(normalizedY) ? normalizedY : 0,
  };
  renderAnniversarySnakeJoystickThumb();
}

function resetAnniversarySnakeJoystick() {
  state.anniversarySnakePointerId = null;
  state.anniversarySnakeJoystickVector = { x: 0, y: 0 };
  if (state.anniversarySnake && state.anniversarySnakeControlMode === "joystick") {
    renderAnniversarySnakeJoystickThumb();
  }
}

function renderHeartPhotoFrame() {
  const photos = getLoveLotteryPhotos();
  const points = getHeartTilePoints();

  elements.heartPhotoFrame.innerHTML = "";
  points.forEach((point, index) => {
    const photo = photos[index % photos.length];
    const tile = document.createElement("span");
    tile.className = "heart-photo-tile";
    tile.style.left = `${point.x}%`;
    tile.style.top = `${point.y}%`;
    tile.style.setProperty("--tile-rotation", `${point.rotation}deg`);
    tile.style.setProperty("--tile-delay", `${(index % 10) * 0.8}s`);
    tile.style.setProperty("--tile-accent", photo.accent);

    if (photo.url) {
      const image = document.createElement("img");
      image.src = photo.url;
      image.alt = "";
      tile.append(image);
    }

    elements.heartPhotoFrame.append(tile);
  });
}

function getLoveLotteryPhotos() {
  const accents = ["#f6a6ba", "#f3d386", "#94d7e4", "#9582f2"];
  const memoryPhotos = state.data.memories
    .flatMap((memory) => normalizeMemoryMedia(memory))
    .filter((item) => item.type !== "video" && item.url)
    .map((item, index) => ({ url: item.url, accent: accents[index % accents.length] }));
  const letterPhotos = normalizeLetterPhotos(state.data.letter?.photos, DEFAULT_DATA.letter.photos)
    .filter((photo) => photo.url)
    .map((photo, index) => ({ url: photo.url, accent: accents[(index + memoryPhotos.length) % accents.length] }));
  const photos = [...memoryPhotos, ...letterPhotos];

  if (photos.length) {
    return photos;
  }

  return accents.map((accent) => ({ url: "", accent }));
}

function getHeartTilePoints() {
  if (window.matchMedia("(max-width: 760px)").matches) {
    return [
      { x: 29, y: 15, rotation: -13 },
      { x: 45, y: 20, rotation: 7 },
      { x: 55, y: 20, rotation: -7 },
      { x: 71, y: 15, rotation: 13 },
      { x: 18, y: 33, rotation: -8 },
      { x: 82, y: 33, rotation: 8 },
      { x: 24, y: 51, rotation: 7 },
      { x: 76, y: 51, rotation: -7 },
      { x: 31, y: 61, rotation: -5 },
      { x: 69, y: 61, rotation: 5 },
      { x: 39, y: 70, rotation: -8 },
      { x: 61, y: 70, rotation: 8 },
    ];
  }

  return [
    { x: 31, y: 24, rotation: -12 },
    { x: 47, y: 21, rotation: 6 },
    { x: 53, y: 21, rotation: -6 },
    { x: 69, y: 24, rotation: 12 },
    { x: 22, y: 40, rotation: 8 },
    { x: 78, y: 40, rotation: -8 },
    { x: 27, y: 59, rotation: -6 },
    { x: 73, y: 59, rotation: 6 },
    { x: 34, y: 68, rotation: -5 },
    { x: 66, y: 68, rotation: 5 },
    { x: 39, y: 76, rotation: 10 },
    { x: 61, y: 76, rotation: -10 },
  ];
}

function renderLoveLottery() {
  const marked = new Set(state.loveLottery.markedIds);
  const completedCount = getLoveLotteryCompletionCount();
  const total = LOVE_LOTTERY_ACTIVITIES.length;
  const todaySelections = getTodayLoveLotterySelections();
  if (!getSelectedLoveLotterySelection() && todaySelections.length) {
    state.selectedActivityId = todaySelections[todaySelections.length - 1].id;
  }
  const selectedEntry = getSelectedLoveLotterySelection();
  const selectedActivity = selectedEntry ? getLoveLotteryActivity(selectedEntry.activityId) : null;
  const hasScheduledDate = hasScheduledDatePlan();

  elements.activityCount.textContent = `${completedCount} / ${total} progress`;
  elements.markDateButton.disabled =
    !selectedEntry ||
    Boolean(selectedEntry && getLoveLotteryLogEntry(selectedEntry.id)) ||
    getLoveLotterySpinsToday() >= 3 ||
    (marked.has(selectedEntry.activityId) && selectedActivity?.category !== "shopping");
  elements.spinDateButton.disabled = getLoveLotterySpinsToday() >= 3;
  elements.spinDateButton.textContent = getLoveLotterySpinsToday() >= 3 ? "Done" : "Spin";
  renderImportantDates();
  renderDatesPage();
  renderLoveLotteryProgress(completedCount, total);
  renderTodayPicks();
  renderSelectedDateNote();
  renderNextDateLog();
  renderTodayPlanBanner();
  updateGlobalDock();
  if (!selectedEntry) {
    elements.randomizerResult.textContent = formatLoveLotteryDate();
    elements.randomizerTask.hidden = true;
    elements.randomizerTask.textContent = "";
  } else {
    elements.randomizerResult.textContent = selectedEntry.label;
    elements.randomizerTask.hidden = false;
    elements.randomizerTask.textContent =
      selectedEntry.category === "date"
        ? "Tap the date note to adjust the time. Mark selected to save it for today, then complete it when it happens."
        : selectedEntry.category === "shopping"
          ? "Mark selected to save it for today, then complete it when it is done."
          : "Mark selected to save it for today, then complete it when it is done.";
  }

  elements.activityList.innerHTML = "";
  LOVE_LOTTERY_ACTIVITIES.forEach((activity) => {
    const row = document.createElement("button");
    row.className = "activity-row";
    row.type = "button";
    row.dataset.activityId = activity.id;
    row.classList.toggle("is-marked", marked.has(activity.id));
    row.classList.toggle("is-selected", selectedEntry?.activityId === activity.id);

    const label = document.createElement("span");
    label.textContent = activity.label;
    const tag = document.createElement("span");
    tag.className = "activity-tag";
    tag.textContent = activity.category === "shopping" ? "shopping" : activity.category === "date" ? "date" : "daily";

    row.append(label, tag);
    elements.activityList.append(row);
  });
}

function renderWishlist() {
  if (restoreMissingRewardWishlistItems()) {
    saveWishlistItems();
  }
  renderWishlistGrid();
  renderWishlistCalvinList();
}

function renderWishlistGrid() {
  elements.wishlistList.innerHTML = "";

  if (!state.wishlist.length) {
    elements.wishlistList.innerHTML = `<p class="wishlist-empty">No wishes yet.</p>`;
    return;
  }

  state.wishlist.forEach((item) => {
    elements.wishlistList.append(createWishlistCard(item, false));
  });
}

function renderWishlistCalvinList() {
  elements.wishlistCalvinList.innerHTML = "";

  if (!state.wishlist.length) {
    elements.wishlistCalvinList.innerHTML = `<p class="wishlist-empty">Nothing to mark yet.</p>`;
    return;
  }

  state.wishlist.forEach((item) => {
    const row = document.createElement("article");
    row.className = "wishlist-check-row";
    row.innerHTML = `
      <div>
        <strong>${escapeHtml(item.item_name)}</strong>
        ${item.note ? `<p class="wishlist-item-note">${escapeHtml(item.note)}</p>` : ""}
        ${renderWishlistPersonTags(item.added_by)}
        ${item.item_url ? `<a href="${escapeAttribute(item.item_url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(getUrlHost(item.item_url))}</a>` : `<span class="wishlist-empty-link">No link yet</span>`}
      </div>
      <label class="wishlist-purchased-toggle">
        <input type="checkbox" data-wishlist-purchased="${escapeAttribute(item.id)}" ${item.purchased ? "checked" : ""}>
        Gotten
      </label>
    `;
    elements.wishlistCalvinList.append(row);
  });
}

function createWishlistCard(item) {
  const card = document.createElement("article");
  card.className = "wishlist-card";
  card.classList.toggle("is-purchased", item.purchased);
  if (!item.item_url) {
    card.innerHTML = `
      <div class="wishlist-card-copy">
        ${renderWishlistPersonTags(item.added_by)}
        <h3>${escapeHtml(item.item_name)}</h3>
        ${item.note ? `<p class="wishlist-item-note">${escapeHtml(item.note)}</p>` : ""}
        <span class="wishlist-preview-fallback is-static">
          <span>No link yet</span>
          <span>Add one later</span>
        </span>
        <button class="secondary-button wishlist-edit-button" type="button" data-wishlist-edit="${escapeAttribute(item.id)}">Edit gift</button>
        ${item.purchased ? "<span class=\"wishlist-badge\">Gotten</span>" : ""}
      </div>
    `;
    return card;
  }
  card.innerHTML = `
    <a class="wishlist-preview" href="${escapeAttribute(item.item_url)}" target="_blank" rel="noopener noreferrer" aria-label="Open ${escapeAttribute(item.item_name)}">
      <iframe src="${escapeAttribute(item.item_url)}" title="${escapeAttribute(item.item_name)} preview" loading="lazy" sandbox="allow-scripts allow-same-origin"></iframe>
      <div class="wishlist-preview-placeholder">
        <strong>${escapeHtml(item.item_name)}</strong>
        <span>${escapeHtml(getUrlHost(item.item_url))}</span>
      </div>
      <div class="wishlist-preview-fallback">
        <span>${escapeHtml(getUrlHost(item.item_url))}</span>
        <span>Open item</span>
      </div>
    </a>
    <div class="wishlist-card-copy">
      ${renderWishlistPersonTags(item.added_by)}
      <h3>${escapeHtml(item.item_name)}</h3>
      ${item.note ? `<p class="wishlist-item-note">${escapeHtml(item.note)}</p>` : ""}
      <a class="wishlist-open-link" href="${escapeAttribute(item.item_url)}" target="_blank" rel="noopener noreferrer">Open link</a>
      <button class="secondary-button wishlist-edit-button" type="button" data-wishlist-edit="${escapeAttribute(item.id)}">Edit gift</button>
      ${item.purchased ? "<span class=\"wishlist-badge\">Gotten</span>" : ""}
    </div>
  `;
  const iframe = card.querySelector("iframe");
  const preview = card.querySelector(".wishlist-preview");
  let canRevealPreview = true;
  iframe.addEventListener("load", () => {
    if (canRevealPreview) {
      preview.classList.add("has-preview");
    }
  });
  window.setTimeout(() => {
    canRevealPreview = false;
    if (!preview.classList.contains("has-preview")) {
      preview.classList.add("is-preview-blocked");
    }
  }, 1000);
  return card;
}

function renderWishlistPersonTags(addedBy) {
  const active = normalizeWishlistPerson(addedBy);
  return `
    <div class="wishlist-person-tags" aria-label="Added by ${escapeAttribute(active)}">
      <span class="wishlist-person-tag ${active === "Sophia" ? "is-active" : ""}">Sophia</span>
      <span class="wishlist-person-tag ${active === "Calvin" ? "is-active" : ""}">Calvin</span>
    </div>
  `;
}

function getUrlHost(url) {
  try {
    return new URL(url).host.replace(/^www\./, "");
  } catch {
    return "Open link";
  }
}

function setWishlistTab(tabName) {
  elements.wishlistTabs.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.wishlistTab === tabName);
  });
  elements.wishlistPanels.forEach((panel) => {
    panel.classList.toggle("is-active", panel.dataset.wishlistPanel === tabName);
  });
}

async function addWishlistItem(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const nameInput = form.querySelector("input[type='text']");
  const urlInput = form.querySelector("input[type='url']");
  const addedBy = normalizeWishlistPerson(form.dataset.wishlistAddedBy);
  const name = nameInput.value.trim();
  const url = urlInput.value.trim();

  if (!name || !/^https?:\/\//i.test(url)) {
    showToast("Wishlist item needs a link", "Use an item name and a full https:// URL.");
    return;
  }

  const localItem = {
    id: crypto.randomUUID?.() || `wish-${Date.now()}`,
    page_id: PAGE_ID,
    item_name: name,
    item_url: url,
    note: "",
    added_by: addedBy,
    purchased: false,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  };

  const remote = await addRemoteWishlistItem(localItem);
  const item = normalizeWishlistItems([remote.item || localItem])[0];
  state.wishlist = [item, ...state.wishlist.filter((wish) => wish.id !== item.id)];
  saveWishlistItems();
  renderWishlist();
  if (remote.saved) {
    await loadRemoteWishlistItems();
  }
  form.reset();
  setWishlistTab("list");
  showToast(`${addedBy} wish added`, remote.saved ? "Saved to the shared wishlist." : "Saved in this browser.");
}

async function toggleWishlistPurchased(itemId, purchased) {
  const item = state.wishlist.find((wish) => wish.id === itemId);
  if (!item) {
    return;
  }

  item.purchased = purchased;
  item.updated_at = new Date().toISOString();
  saveWishlistItems();
  renderWishlist();
  const remote = await updateRemoteWishlistItem(item);
  if (remote.saved) {
    await loadRemoteWishlistItems();
  } else if (SUPABASE_CONFIGURED) {
    showToast("Wishlist saved locally", remote.reason || "The shared wishlist did not update online.");
  }
}

function openWishlistEditor(itemId) {
  const item = state.wishlist.find((wish) => wish.id === itemId);
  if (!item) {
    return;
  }

  state.activeWishlistItemId = itemId;
  elements.wishlistEditorNameInput.value = item.item_name || "";
  elements.wishlistEditorUrlInput.value = item.item_url || "";
  elements.wishlistEditorNoteInput.value = item.note || "";
  elements.wishlistEditorModal.hidden = false;
}

function closeWishlistEditor() {
  elements.wishlistEditorModal.hidden = true;
  state.activeWishlistItemId = null;
}

async function saveWishlistEditor() {
  const item = state.wishlist.find((wish) => wish.id === state.activeWishlistItemId);
  if (!item) {
    return;
  }

  const nextName = elements.wishlistEditorNameInput.value.trim();
  const nextUrl = elements.wishlistEditorUrlInput.value.trim();
  const nextNote = elements.wishlistEditorNoteInput.value.trim();
  if (!nextName) {
    return;
  }

  if (nextUrl && !/^https?:\/\//i.test(nextUrl)) {
    showToast("Gift link needs https", "Use a full https:// URL or leave it blank.");
    return;
  }

  item.item_name = nextName;
  item.item_url = nextUrl;
  item.note = nextNote;
  item.updated_at = new Date().toISOString();
  saveWishlistItems();
  renderWishlist();
  const remote = await updateRemoteWishlistItem(item);
  if (remote.saved) {
    await loadRemoteWishlistItems();
  } else if (SUPABASE_CONFIGURED) {
    showToast("Gift edit stayed local", remote.reason || "The shared wishlist did not update online.");
  }
  closeWishlistEditor();
}

function getLoveLotteryCompletionCount() {
  const markedDailyCount = state.loveLottery.markedIds
    .map((id) => getLoveLotteryActivity(id))
    .filter((activity) => activity?.category !== "shopping").length;
  const storedCount = clampNumber(Number(state.loveLottery.completionCount), 0, 500, markedDailyCount);
  return Math.max(storedCount, markedDailyCount);
}

function getLoveLotteryActivity(activityId) {
  return LOVE_LOTTERY_ACTIVITIES.find((activity) => activity.id === activityId);
}

function getTodayLoveLotterySelections() {
  const todayKey = new Date().toDateString();
  return (Array.isArray(state.loveLottery.selections) ? state.loveLottery.selections : []).filter((entry) => {
    if (!entry?.selectedAt) {
      return false;
    }

    return new Date(entry.selectedAt).toDateString() === todayKey;
  });
}

function getTodayLoveLotteryMarkedPicks() {
  const todayKey = new Date().toDateString();
  return (Array.isArray(state.loveLottery.log) ? state.loveLottery.log : []).filter((entry) => {
    if (!entry?.loggedAt) {
      return false;
    }

    return new Date(entry.loggedAt).toDateString() === todayKey && entry.status !== "expired";
  });
}

function getSelectedLoveLotterySelection() {
  const todaySelections = getTodayLoveLotterySelections();
  return todaySelections.find((entry) => entry.id === state.selectedActivityId) || null;
}

function isBeforeToday(value) {
  if (!value) {
    return false;
  }

  return startOfDay(value).valueOf() < startOfDay(new Date()).valueOf();
}

function getLoveLotteryLogEntry(selectionId) {
  return (state.loveLottery.log || []).find((entry) => entry.selectionId === selectionId) || null;
}

function getLoveLotterySpinsToday() {
  return getTodayLoveLotteryMarkedPicks().length;
}

function formatLoveLotteryDate(date = new Date()) {
  return date.toLocaleDateString(undefined, { weekday: "long", month: "long", day: "numeric" });
}

function formatLoveLotteryDateTime(date = new Date()) {
  return date.toLocaleString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

function getDefaultDatePlanTimestamp(weeks) {
  const date = new Date();
  date.setDate(date.getDate() + weeks * 7);
  date.setHours(19, 0, 0, 0);
  return date.toISOString();
}

function getDefaultTripEndTimestamp(startValue = getDefaultDatePlanTimestamp(2)) {
  const date = new Date(startValue);
  if (Number.isNaN(date.valueOf())) {
    return "";
  }
  date.setDate(date.getDate() + 2);
  date.setHours(12, 0, 0, 0);
  return date.toISOString();
}

function getFutureDatePlan(activity) {
  const weeks = [1, 2, 3][Math.floor(Math.random() * 3)];
  return {
    planId: crypto.randomUUID?.() || `date-plan-${Date.now()}`,
    activityId: activity.id,
    label: activity.label,
    task: activity.task,
    location: "",
    source: "lottery",
    type: "date",
    weeks,
    scheduledFor: getDefaultDatePlanTimestamp(weeks),
    endsAt: "",
    createdAt: new Date().toISOString(),
  };
}

function formatDatePlan(plan) {
  if (!plan?.scheduledFor) {
    return plan?.type === "trip" ? "Add trip dates" : "Add date and time";
  }

  const start = new Date(plan.scheduledFor);
  if (plan.type === "trip" && plan.endsAt) {
    const end = new Date(plan.endsAt);
    return `${formatLoveLotteryDateTime(start)} - ${formatLoveLotteryDateTime(end)}`;
  }
  return formatLoveLotteryDateTime(start);
}

function getImportantDates() {
  return [...(state.loveLottery.pinnedDatePlans || [])].sort((a, b) => {
    const left = a?.scheduledFor ? new Date(a.scheduledFor).valueOf() : Number.POSITIVE_INFINITY;
    const right = b?.scheduledFor ? new Date(b.scheduledFor).valueOf() : Number.POSITIVE_INFINITY;
    return left - right;
  });
}

function getTodayPlans() {
  return getImportantDates().filter(isDatePlanToday);
}

function getRewardLinkedPlans() {
  const linked = new Set(
    (state.loveLottery.claimedRewards || [])
      .filter((reward) => reward.type === "date" || reward.type === "trip")
      .map((reward) => reward.linkedId)
      .filter(Boolean)
  );
  return getImportantDates().filter((plan) => linked.has(plan.planId));
}

function getIncompletePlanCount() {
  return getImportantDates().filter((plan) => !isDatePlanComplete(plan)).length;
}

function getPendingGiftRewardCount() {
  return (state.loveLottery.claimedRewards || [])
    .filter((reward) => reward.type === "gift" && reward.linkedId)
    .filter((reward) => {
      const item = state.wishlist.find((wish) => wish.id === reward.linkedId);
      return item && !item.purchased;
    }).length;
}

function isUpcomingDatePlan(plan) {
  return Boolean(plan?.scheduledFor) && new Date(plan.scheduledFor).valueOf() >= Date.now();
}

function isDatePlanComplete(plan) {
  if (!plan) {
    return false;
  }

  const hasName = Boolean(String(plan.label || "").trim());
  const hasStart = Boolean(plan.scheduledFor) && !Number.isNaN(new Date(plan.scheduledFor).valueOf());
  const hasLocation = Boolean(String(plan.location || "").trim());
  if (plan.type === "trip") {
    const hasEnd = Boolean(plan.endsAt) && !Number.isNaN(new Date(plan.endsAt).valueOf());
    return hasName && hasStart && hasEnd && hasLocation;
  }
  return hasName && hasStart && hasLocation;
}

function isDatePlanToday(plan) {
  if (!plan?.scheduledFor) {
    return false;
  }

  const now = new Date();
  const start = new Date(plan.scheduledFor);
  const end = plan.type === "trip" && plan.endsAt ? new Date(plan.endsAt) : start;
  return startOfDay(start).valueOf() <= startOfDay(now).valueOf() && startOfDay(end).valueOf() >= startOfDay(now).valueOf();
}

function startOfDay(value) {
  const date = new Date(value);
  date.setHours(0, 0, 0, 0);
  return date;
}

function hasScheduledDatePlan() {
  return getImportantDates().some((plan) => isUpcomingDatePlan(plan) && isDatePlanComplete(plan));
}

function getMapLinks(location) {
  const query = String(location || "").trim();
  if (!query) {
    return null;
  }

  const encoded = encodeURIComponent(query);
  return {
    apple: `https://maps.apple.com/?q=${encoded}`,
    google: `https://www.google.com/maps/search/?api=1&query=${encoded}`,
  };
}

function renderDatePlanLocation(location = "") {
  const links = getMapLinks(location);
  if (!links) {
    return "";
  }

  return `
    <div class="date-plan-links">
      <span>${escapeHtml(location)}</span>
      <div class="date-plan-link-row">
        <a href="${escapeAttribute(links.apple)}" target="_blank" rel="noopener noreferrer">Apple Maps</a>
        <a href="${escapeAttribute(links.google)}" target="_blank" rel="noopener noreferrer">Google Maps</a>
      </div>
    </div>
  `;
}

function renderImportantDates() {
  const plans = getImportantDates();
  elements.importantDatesList.innerHTML = "";

  if (!plans.length) {
    elements.importantDatesList.innerHTML = `<p class="important-dates-empty">No marked dates yet.</p>`;
    return;
  }

  plans.forEach((plan) => {
    elements.importantDatesList.append(createDatePlanButton(plan, "important-date-card"));
  });
}

function renderDatesPage() {
  const plans = getImportantDates();
  if (elements.dateCreatorDateInput && !elements.dateCreatorDateInput.value) {
    elements.dateCreatorDateInput.value = toDateTimeLocalValue(getDefaultDatePlanTimestamp(1));
  }
  elements.datesList.innerHTML = "";

  if (!plans.length) {
    elements.datesList.innerHTML = `<p class="important-dates-empty">No plans yet. Add a date or trip here.</p>`;
    return;
  }

  plans.forEach((plan) => {
    elements.datesList.append(createDatePlanButton(plan, "date-plan-card"));
  });
}

function createDatePlanButton(plan, className = "date-plan-chip") {
  const card = document.createElement("article");
  card.className = className;
  card.classList.toggle("is-today", isDatePlanToday(plan));
  card.classList.toggle("is-incomplete", !isDatePlanComplete(plan));
  card.innerHTML = `
    <div class="date-plan-card-copy">
      <span>${escapeHtml(plan.label)}</span>
      <strong>${escapeHtml(formatDatePlan(plan))}</strong>
      ${plan.location ? `<em>${escapeHtml(plan.location)}</em>` : `<em>${escapeHtml(plan.type === "trip" ? "Add trip location" : "Add date location")}</em>`}
      <p class="date-plan-meta">${escapeHtml(plan.type === "trip" ? "Trip" : "Date")}${!isDatePlanComplete(plan) ? " · Needs details" : ""}</p>
      ${plan.note ? `<p class="date-plan-note">${escapeHtml(plan.note)}</p>` : ""}
      ${renderDatePlanLocation(plan.location)}
    </div>
    <button class="secondary-button date-plan-edit-button" type="button" data-date-plan-id="${escapeAttribute(plan.planId)}">Edit</button>
  `;
  return card;
}

function renderNextDateLog() {
  const plans = getImportantDates();
  if (!plans.length) {
    elements.nextDateLog.hidden = true;
    elements.nextDateLog.textContent = "";
    return;
  }

  elements.nextDateLog.hidden = false;
  elements.nextDateLog.innerHTML = "";
  const label = document.createElement("span");
  label.textContent = "Saved dates";
  elements.nextDateLog.append(label);

  const list = document.createElement("div");
  list.className = "next-date-log-list";
  plans.forEach((plan) => {
    const item = document.createElement("button");
    item.type = "button";
    item.className = "date-plan-chip next-date-log-item";
    item.dataset.datePlanId = plan.planId;
    item.textContent = plan.label;
    list.append(item);
  });
  elements.nextDateLog.append(list);
}

function renderTodayPicks() {
  const todaySelections = getTodayLoveLotteryMarkedPicks();
  const selectedEntry = getSelectedLoveLotterySelection();
  elements.todayPicksList.innerHTML = "";

  if (!todaySelections.length) {
    elements.todayPicksList.innerHTML = `<p class="today-picks-empty">Nothing picked yet today.</p>`;
    return;
  }

  todaySelections.forEach((entry, index) => {
    const card = document.createElement("article");
    card.className = "today-pick-card";
    card.classList.toggle("is-active", selectedEntry?.id === entry.selectionId);
    card.classList.toggle("is-complete", entry.status === "completed");
    const displayPlan = entry.nextDatePlan || entry.datePlan || null;
    card.innerHTML = `
      <button class="today-pick-select" type="button" data-selection-id="${escapeAttribute(entry.selectionId || "")}">
        <span>Pick ${index + 1}</span>
        <strong>${escapeHtml(entry.label)}</strong>
        <em>${escapeHtml(entry.category === "date" && displayPlan ? formatLoveLotteryDateTime(new Date(displayPlan.scheduledFor)) : entry.category)}</em>
      </button>
      <div class="today-pick-actions">
        ${entry.status === "completed"
          ? `<button class="secondary-button today-pick-undo-button" type="button" data-undo-selection-id="${escapeAttribute(entry.selectionId || "")}">Undo complete</button>`
          : `
            <button class="secondary-button today-pick-complete-button" type="button" data-complete-selection-id="${escapeAttribute(entry.selectionId || "")}">Complete</button>
            <button class="secondary-button today-pick-remove-button" type="button" data-remove-selection-id="${escapeAttribute(entry.selectionId || "")}">Unselect</button>
          `}
      </div>
    `;
    elements.todayPicksList.append(card);
  });
}

function renderSelectedDateNote() {
  const selectedEntry = getSelectedLoveLotterySelection();
  const datePlan = selectedEntry?.datePlan;

  if (selectedEntry?.category !== "date" || !datePlan?.scheduledFor) {
    elements.selectedDateNote.hidden = true;
    elements.selectedDateNote.textContent = "";
    return;
  }

  elements.selectedDateNote.hidden = false;
  elements.selectedDateNote.innerHTML = `
    <span>Selected date</span>
    <strong>${escapeHtml(selectedEntry.label)}</strong>
    <em>${escapeHtml(formatDatePlan(datePlan))}</em>
  `;
}

function setSelectedLoveLotterySelection(selectionId) {
  const selection = (state.loveLottery.selections || []).find((entry) => entry.id === selectionId);
  if (!selection) {
    return;
  }

  state.selectedActivityId = selection.id;
  renderLoveLottery();
}

function updateDateCreatorForm() {
  const isTrip = elements.dateCreatorTypeSelect.value === "trip";
  elements.dateCreatorEndLabel.hidden = !isTrip;
  elements.dateCreatorEndInput.required = isTrip;
  if (isTrip && !elements.dateCreatorEndInput.value && elements.dateCreatorDateInput.value) {
    elements.dateCreatorEndInput.value = toDateTimeLocalValue(getDefaultTripEndTimestamp(new Date(elements.dateCreatorDateInput.value).toISOString()));
  }
}

function addManualDatePlan(event) {
  event.preventDefault();
  const type = elements.dateCreatorTypeSelect.value === "trip" ? "trip" : "date";
  const label = elements.dateCreatorNameInput.value.trim();
  const scheduledRaw = elements.dateCreatorDateInput.value;
  const endRaw = elements.dateCreatorEndInput.value;
  const location = elements.dateCreatorLocationInput.value.trim();

  if (!label || !scheduledRaw) {
    return;
  }

  if (type === "trip" && !endRaw) {
    return;
  }

  state.loveLottery.pinnedDatePlans = [
    ...(state.loveLottery.pinnedDatePlans || []),
    normalizeLoveLotteryDatePlan({
      planId: crypto.randomUUID?.() || `date-plan-${Date.now()}`,
      label,
      location,
      source: "manual",
      type,
      weeks: 1,
      scheduledFor: new Date(scheduledRaw).toISOString(),
      endsAt: type === "trip" ? new Date(endRaw).toISOString() : "",
      createdAt: new Date().toISOString(),
    }),
  ];
  saveLoveLotteryProgress();
  renderImportantDates();
  renderDatesPage();
  renderLoveLottery();
  elements.dateCreatorForm.reset();
  elements.dateCreatorTypeSelect.value = "date";
  elements.dateCreatorEndInput.value = "";
  updateDateCreatorForm();
  elements.dateCreatorForm.hidden = true;
  elements.openDateCreatorButton.setAttribute("aria-expanded", "false");
  showToast(type === "trip" ? "Trip added" : "Date added", "It is now saved in Dates.");
}

function openDateEditor(planId) {
  const plan = [...(state.loveLottery.pinnedDatePlans || []), ...getTodayLoveLotterySelections().map((entry) => entry.datePlan).filter(Boolean)]
    .find((item) => item?.planId === planId);

  if (!plan) {
    return;
  }

  state.activeDateEditorPlanId = planId;
  elements.dateEditorItemName.textContent = plan.label;
  elements.dateEditorTypeSelect.value = plan.type || "date";
  elements.dateEditorNameInput.value = plan.label;
  elements.dateEditorNameInput.disabled = plan.source === "lottery";
  elements.dateEditorInput.value = toDateTimeLocalValue(plan.scheduledFor);
  elements.dateEditorEndInput.value = plan.endsAt ? toDateTimeLocalValue(plan.endsAt) : "";
  elements.dateEditorLocationInput.value = plan.location || "";
  elements.dateEditorTypeSelect.disabled = plan.source === "lottery";
  updateDateEditorForm();
  const links = getMapLinks(plan.location);
  elements.dateEditorMapLinks.innerHTML = links
    ? `
      <a href="${escapeAttribute(links.apple)}" target="_blank" rel="noopener noreferrer">Open in Apple Maps</a>
      <a href="${escapeAttribute(links.google)}" target="_blank" rel="noopener noreferrer">Open in Google Maps</a>
    `
    : `<span>No location set yet.</span>`;
  elements.dateEditorModal.hidden = false;
}

function closeDateEditor() {
  elements.dateEditorModal.hidden = true;
  state.activeDateEditorPlanId = null;
}

function updateDateEditorForm() {
  const isTrip = elements.dateEditorTypeSelect.value === "trip";
  elements.dateEditorEndLabel.hidden = !isTrip;
  elements.dateEditorEndInput.required = isTrip;
}

function openMilestoneRewardModal(milestone) {
  const completionCount = getLoveLotteryCompletionCount();
  if (!isMilestoneUnlocked(milestone, completionCount) || getClaimedMilestoneReward(milestone)) {
    return;
  }

  if (milestone === 0) {
    openQuickRewardModal(milestone);
    return;
  }

  state.activeMilestoneReward = milestone;
  elements.milestoneRewardEarnedText.textContent = `Reward earned from ${milestone} stars.`;
  elements.milestoneRewardTypeSelect.value = "date";
  elements.milestoneRewardNameInput.value = `Date for us from ${milestone} stars`;
  elements.milestoneRewardDateInput.value = toDateTimeLocalValue(getDefaultDatePlanTimestamp(1));
  elements.milestoneRewardEndInput.value = "";
  elements.milestoneRewardLocationInput.value = "";
  updateMilestoneRewardForm();
  elements.milestoneRewardModal.hidden = false;
}

function closeMilestoneRewardModal() {
  elements.milestoneRewardModal.hidden = true;
  state.activeMilestoneReward = null;
}

function openQuickRewardModal(milestone) {
  state.activeMilestoneReward = milestone;
  elements.quickRewardText.textContent = `Choose the first little reward from ${milestone} stars.`;
  elements.quickRewardModal.hidden = false;
}

function closeQuickRewardModal() {
  elements.quickRewardModal.hidden = true;
  state.activeMilestoneReward = null;
}

function updateMilestoneRewardForm() {
  const type = elements.milestoneRewardTypeSelect.value;
  const needsDateFields = type === "date" || type === "trip";
  const isTrip = type === "trip";
  elements.milestoneRewardDateFields.hidden = !needsDateFields;
  elements.milestoneRewardDateInput.required = needsDateFields;
  elements.milestoneRewardEndLabel.hidden = !isTrip;
  elements.milestoneRewardEndInput.required = isTrip;
  elements.milestoneRewardLocationInput.required = false;

  if (isTrip && !elements.milestoneRewardEndInput.value && elements.milestoneRewardDateInput.value) {
    elements.milestoneRewardEndInput.value = toDateTimeLocalValue(getDefaultTripEndTimestamp(new Date(elements.milestoneRewardDateInput.value).toISOString()));
  }
}

async function saveMilestoneReward() {
  const milestone = state.activeMilestoneReward;
  const type = elements.milestoneRewardTypeSelect.value;
  const label = elements.milestoneRewardNameInput.value.trim();
  const scheduledRaw = elements.milestoneRewardDateInput.value;
  const endRaw = elements.milestoneRewardEndInput.value;
  const location = elements.milestoneRewardLocationInput.value.trim();

  if (!milestone || !label) {
    return;
  }

  if ((type === "date" || type === "trip") && !scheduledRaw) {
    return;
  }

  if (type === "trip" && !endRaw) {
    return;
  }

  const confirmed = window.confirm(`Are you sure you want to claim ${type} from ${milestone} stars?`);
  if (!confirmed) {
    return;
  }

  let linkedId = "";

  if (type === "gift") {
    const localItem = {
      id: crypto.randomUUID?.() || `wish-${Date.now()}`,
      page_id: PAGE_ID,
      item_name: label,
      item_url: "",
      note: `Earned from ${milestone} stars`,
      added_by: "Calvin",
      purchased: false,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    const remote = await addRemoteWishlistItem(localItem);
    const item = normalizeWishlistItems([remote.item || localItem])[0];
    state.wishlist = [item, ...state.wishlist.filter((wish) => wish.id !== item.id)];
    saveWishlistItems();
    renderWishlist();
    linkedId = item.id;
  } else {
    const plan = normalizeLoveLotteryDatePlan({
      planId: crypto.randomUUID?.() || `reward-plan-${Date.now()}`,
      label,
      location,
      source: type,
      type,
      weeks: 1,
      scheduledFor: new Date(scheduledRaw).toISOString(),
      endsAt: type === "trip" ? new Date(endRaw).toISOString() : "",
      createdAt: new Date().toISOString(),
      task: `Earned from ${milestone} stars`,
    });
    plan.rewardMilestone = milestone;
    plan.note = `Earned from ${milestone} stars`;
    state.loveLottery.pinnedDatePlans = [
      ...(state.loveLottery.pinnedDatePlans || []),
      plan,
    ];
    linkedId = plan.planId;
  }

  state.loveLottery.claimedRewards = [
    ...(state.loveLottery.claimedRewards || []),
    {
      milestone,
      type,
      claimedAt: new Date().toISOString(),
      label,
      linkedId,
    },
  ];
  saveLoveLotteryProgress();
  renderApp();
  renderLoveLottery();
  closeMilestoneRewardModal();
  showToast("Reward created", `Saved from ${milestone} stars.`);
}

async function createQuickReward(type) {
  const milestone = state.activeMilestoneReward;
  if (milestone === null || milestone === undefined) {
    return;
  }

  if (type === "gift") {
    const localItem = {
      id: crypto.randomUUID?.() || `wish-${Date.now()}`,
      page_id: PAGE_ID,
      item_name: `Gift for Sophia from ${milestone} stars`,
      item_url: "",
      note: `Earned from ${milestone} stars`,
      added_by: "Calvin",
      purchased: false,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
    const remote = await addRemoteWishlistItem(localItem);
    const item = normalizeWishlistItems([remote.item || localItem])[0];
    state.wishlist = [item, ...state.wishlist.filter((wish) => wish.id !== item.id)];
    saveWishlistItems();
    state.loveLottery.claimedRewards = [
      ...(state.loveLottery.claimedRewards || []),
      { milestone, type, claimedAt: new Date().toISOString(), label: item.item_name, linkedId: item.id },
    ];
    saveLoveLotteryProgress();
    renderApp();
    closeQuickRewardModal();
    navigateTo("/wishlist");
    setWishlistTab("list");
    showToast("Gift starter added", "It is waiting in the wish list.");
    return;
  }

  const isTrip = type === "trip";
  const start = isTrip ? getDefaultDatePlanTimestamp(2) : getDefaultDatePlanTimestamp(1);
  const plan = normalizeLoveLotteryDatePlan({
    planId: crypto.randomUUID?.() || `reward-plan-${Date.now()}`,
    label: isTrip ? `Trip for us from ${milestone} stars` : `Date for us from ${milestone} stars`,
    location: "",
    source: type,
    type,
    weeks: isTrip ? 2 : 1,
    scheduledFor: start,
    endsAt: isTrip ? getDefaultTripEndTimestamp(start) : "",
    createdAt: new Date().toISOString(),
    task: `Earned from ${milestone} stars`,
    note: `Earned from ${milestone} stars`,
    rewardMilestone: milestone,
  });

  state.loveLottery.pinnedDatePlans = [...(state.loveLottery.pinnedDatePlans || []), plan];
  state.loveLottery.claimedRewards = [
    ...(state.loveLottery.claimedRewards || []),
    { milestone, type, claimedAt: new Date().toISOString(), label: plan.label, linkedId: plan.planId },
  ];
  saveLoveLotteryProgress();
  renderApp();
  renderLoveLottery();
  closeQuickRewardModal();
  navigateTo("/dates");
  openDateEditor(plan.planId);
  showToast(isTrip ? "Trip starter added" : "Date starter added", "Finish the details in Plans.");
}

function saveDateEditor() {
  if (!state.activeDateEditorPlanId || !elements.dateEditorInput.value) {
    return;
  }

  if (elements.dateEditorTypeSelect.value === "trip" && !elements.dateEditorEndInput.value) {
    return;
  }

  const nextType = elements.dateEditorTypeSelect.value === "trip" ? "trip" : "date";
  const nextIso = new Date(elements.dateEditorInput.value).toISOString();
  const nextEndIso = nextType === "trip" && elements.dateEditorEndInput.value
    ? new Date(elements.dateEditorEndInput.value).toISOString()
    : "";
  const nextLocation = elements.dateEditorLocationInput.value.trim();
  const nextName = elements.dateEditorNameInput.value.trim();
  state.loveLottery.pinnedDatePlans = (state.loveLottery.pinnedDatePlans || []).map((plan) =>
    plan.planId === state.activeDateEditorPlanId
      ? {
          ...plan,
          type: plan.source === "lottery" ? "date" : nextType,
          label: plan.source === "lottery" ? plan.label : (nextName || plan.label),
          scheduledFor: nextIso,
          endsAt: plan.source === "lottery" ? "" : nextEndIso,
          location: nextLocation,
        }
      : plan
  );
  state.loveLottery.selections = (state.loveLottery.selections || []).map((selection) => {
    if (selection?.datePlan?.planId !== state.activeDateEditorPlanId) {
      return selection;
    }

    return {
      ...selection,
      datePlan: {
        ...selection.datePlan,
        type: "date",
        label: selection.datePlan.source === "lottery" ? selection.datePlan.label : (nextName || selection.datePlan.label),
        scheduledFor: nextIso,
        endsAt: "",
        location: nextLocation,
      },
    };
  });
  saveLoveLotteryProgress();
  renderImportantDates();
  renderDatesPage();
  renderLoveLottery();
  closeDateEditor();
}

function toDateTimeLocalValue(value) {
  const date = new Date(value);
  if (Number.isNaN(date.valueOf())) {
    return "";
  }
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return `${year}-${month}-${day}T${hours}:${minutes}`;
}

function renderLoveLotteryProgress(completedCount, total) {
  const clamped = clampNumber(completedCount, 0, total, 0);
  const nextStar = Math.min(total, Math.ceil((clamped + 1) / 30) * 30);
  elements.loveProgressCount.textContent = `${clamped} / ${total}`;
  elements.loveProgressNext.textContent = clamped >= total ? "Every star is full" : `Next: plan a date, trip, or gift for Sophia at ${nextStar}`;
  elements.loveProgressFill.style.width = `${Math.max(0, (clamped / total) * elements.loveProgressStars.scrollWidth)}px`;
  elements.loveProgressStars.innerHTML = "";

  getLoveLotteryRewardMilestones(total).forEach((milestone) => {
    const claimedReward = getClaimedMilestoneReward(milestone);
    const milestoneBox = document.createElement("button");
    milestoneBox.type = "button";
    milestoneBox.className = "love-progress-star";
    milestoneBox.dataset.milestoneReward = String(milestone);
    milestoneBox.classList.toggle("is-complete", isMilestoneUnlocked(milestone, clamped));
    milestoneBox.classList.toggle("is-claimed", Boolean(claimedReward));
    milestoneBox.disabled = !isMilestoneUnlocked(milestone, clamped) || Boolean(claimedReward);
    milestoneBox.title = getLoveLotteryMilestoneLabel(milestone);

    const star = document.createElement("span");
    star.className = "love-progress-star-icon";
    star.textContent = "★";

    const label = document.createElement("span");
    label.className = "love-progress-star-label";
    label.textContent = String(milestone);

    milestoneBox.append(star, label);
    if (claimedReward) {
      const note = document.createElement("span");
      note.className = "love-progress-star-note";
      note.textContent = `Earned from ${milestone} stars`;
      milestoneBox.append(note);
    }
    elements.loveProgressStars.append(milestoneBox);
  });

  window.requestAnimationFrame(() => {
    elements.loveProgressFill.style.width = `${Math.max(0, (clamped / total) * elements.loveProgressStars.scrollWidth)}px`;
  });
}

function getLoveLotteryMilestoneLabel(milestone) {
  return `${milestone}: Plan a date, trip, or gift for Sophia`;
}

function getLoveLotteryRewardMilestones(total) {
  const milestones = [0];
  for (let milestone = 30; milestone <= total; milestone += 30) {
    milestones.push(milestone);
  }
  return milestones;
}

function isMilestoneUnlocked(milestone, completionCount) {
  return milestone === 0 || completionCount >= milestone;
}

function getClaimedMilestoneReward(milestone) {
  return (state.loveLottery.claimedRewards || []).find((reward) => reward.milestone === milestone) || null;
}

function renderLoveLotteryMusic() {
  const settings = normalizeLoveLotterySettings(state.data.loveLottery, DEFAULT_DATA.loveLottery);
  const music = settings.music;
  const wasPlaying = !elements.loveLotteryAudio.paused;

  elements.loveLotteryAudio.volume = music.volume;

  if (!music.url) {
    elements.loveLotteryAudio.removeAttribute("src");
    elements.loveLotteryAudio.load();
    return;
  }

  if (elements.loveLotteryAudio.src !== music.url) {
    elements.loveLotteryAudio.src = music.url;
    if (wasPlaying) {
      elements.loveLotteryAudio.play().catch(() => {});
    }
  }
}

function playLoveLotteryMusic() {
  if (!elements.loveLotteryAudio.src) {
    return;
  }

  if (elements.loveLotteryAudio.paused) {
    elements.loveLotteryAudio.play().catch(() => {});
  }
}

function spinLoveLottery() {
  if (getLoveLotterySpinsToday() >= 3) {
    elements.randomizerResult.textContent = "All 3 spins are logged for today.";
    elements.randomizerTask.hidden = true;
    elements.randomizerTask.textContent = "";
    renderLoveLottery();
    return;
  }

  const marked = new Set(state.loveLottery.markedIds);
  const remaining = LOVE_LOTTERY_ACTIVITIES.filter((activity) => {
    if (activity.category === "date" && hasScheduledDatePlan()) {
      return false;
    }
    return activity.category === "shopping" || !marked.has(activity.id);
  });

  if (!remaining.length) {
    state.selectedActivityId = null;
    elements.randomizerResult.textContent = "We marked every idea. Reset marks when we want a fresh jar.";
    renderLoveLottery();
    return;
  }

  if (state.shuffleTimer) {
    window.clearInterval(state.shuffleTimer);
    state.shuffleTimer = null;
  }

  elements.randomizerStage.classList.add("is-shuffling");
  elements.spinDateButton.classList.add("is-spinning");
  elements.spinDateButton.disabled = true;
  elements.markDateButton.disabled = true;

  state.shuffleTimer = window.setInterval(() => {
    const preview = remaining[Math.floor(Math.random() * remaining.length)];
    elements.randomizerResult.textContent = preview.label;
  }, 82);

  window.setTimeout(() => {
    const selected = remaining[Math.floor(Math.random() * remaining.length)];
    window.clearInterval(state.shuffleTimer);
    state.shuffleTimer = null;
    const selection = {
      id: crypto.randomUUID?.() || `selection-${Date.now()}`,
      activityId: selected.id,
      label: selected.label,
      category: selected.category,
      selectedAt: new Date().toISOString(),
      datePlan: selected.category === "date" ? getFutureDatePlan(selected) : null,
    };
    state.selectedActivityId = selection.id;
    state.loveLottery.selections = [
      ...(Array.isArray(state.loveLottery.selections) ? state.loveLottery.selections : []),
      selection,
    ];
    saveLoveLotteryProgress();
    elements.randomizerStage.classList.remove("is-shuffling");
    elements.spinDateButton.classList.remove("is-spinning");
    elements.spinDateButton.disabled = false;
    renderLoveLottery();
  }, 1250);
}

function markSelectedLoveLotteryActivity() {
  const selectedEntry = getSelectedLoveLotterySelection();
  const activity = getLoveLotteryActivity(selectedEntry?.activityId);
  if (!selectedEntry || !activity) {
    return;
  }

  if (activity.category !== "shopping" && state.loveLottery.markedIds.includes(selectedEntry.activityId)) {
    return;
  }

  if (getLoveLotteryLogEntry(selectedEntry.id)) {
    return;
  }

  if (activity.category === "date" && selectedEntry.datePlan) {
    const existingPlans = state.loveLottery.pinnedDatePlans || [];
    if (!existingPlans.some((plan) => plan.planId === selectedEntry.datePlan.planId)) {
      state.loveLottery.pinnedDatePlans = [...existingPlans, selectedEntry.datePlan];
    }
  }

  state.loveLottery.log = [
    ...(Array.isArray(state.loveLottery.log) ? state.loveLottery.log : []),
    {
      id: selectedEntry.activityId,
      selectionId: selectedEntry.id,
      label: activity.label,
      category: activity.category,
      nextDatePlan: activity.category === "date" ? selectedEntry.datePlan : null,
      loggedAt: new Date().toISOString(),
      completedAt: "",
      status: "pending",
    },
  ];
  elements.randomizerResult.textContent = `Saved for ${formatLoveLotteryDate()}`;
  saveLoveLotteryProgress();
  renderLoveLottery();
}

function completeLoveLotteryPick(selectionId) {
  const entry = getLoveLotteryLogEntry(selectionId);
  if (!entry || entry.status === "completed") {
    return;
  }

  const activity = getLoveLotteryActivity(entry.id);
  const currentCompletionCount = getLoveLotteryCompletionCount();
  state.loveLottery.log = (state.loveLottery.log || []).map((item) =>
    item.selectionId === selectionId
      ? {
          ...item,
          status: "completed",
          completedAt: new Date().toISOString(),
        }
      : item
  );

  if (activity?.category !== "shopping" && !state.loveLottery.markedIds.includes(entry.id)) {
    state.loveLottery.markedIds = [...state.loveLottery.markedIds, entry.id];
    state.loveLottery.completionCount = clampNumber(currentCompletionCount + 1, 0, 500, currentCompletionCount);
  }

  saveLoveLotteryProgress();
  renderLoveLottery();
}

function undoCompleteLoveLotteryPick(selectionId) {
  const entry = getLoveLotteryLogEntry(selectionId);
  if (!entry || entry.status !== "completed") {
    return;
  }

  const activity = getLoveLotteryActivity(entry.id);
  const currentCompletionCount = getLoveLotteryCompletionCount();
  state.loveLottery.log = (state.loveLottery.log || []).map((item) =>
    item.selectionId === selectionId
      ? {
          ...item,
          status: "pending",
          completedAt: "",
        }
      : item
  );

  if (activity?.category !== "shopping") {
    state.loveLottery.markedIds = (state.loveLottery.markedIds || []).filter((id) => id !== entry.id);
    state.loveLottery.completionCount = clampNumber(currentCompletionCount - 1, 0, 500, 0);
  }

  saveLoveLotteryProgress();
  renderLoveLottery();
}

function unselectLoveLotteryPick(selectionId) {
  const entry = getLoveLotteryLogEntry(selectionId);
  if (!entry || entry.status === "completed") {
    return;
  }

  const planId = entry.nextDatePlan?.planId || "";
  state.loveLottery.log = (state.loveLottery.log || []).filter((item) => item.selectionId !== selectionId);
  state.loveLottery.selections = (state.loveLottery.selections || []).filter((item) => item.id !== selectionId);

  if (planId) {
    const stillUsedInLog = (state.loveLottery.log || []).some((item) => item.nextDatePlan?.planId === planId);
    const stillUsedInSelections = (state.loveLottery.selections || []).some((item) => item.datePlan?.planId === planId);
    if (!stillUsedInLog && !stillUsedInSelections) {
      state.loveLottery.pinnedDatePlans = (state.loveLottery.pinnedDatePlans || []).filter((plan) => plan.planId !== planId);
    }
  }

  if (state.selectedActivityId === selectionId) {
    state.selectedActivityId = null;
  }

  saveLoveLotteryProgress();
  renderLoveLottery();
}

function toggleLoveLotteryActivity(activityId) {
  const activity = getLoveLotteryActivity(activityId);
  const currentCompletionCount = getLoveLotteryCompletionCount();
  const marked = new Set(state.loveLottery.markedIds);
  if (marked.has(activityId)) {
    marked.delete(activityId);
    if (activity?.category !== "shopping") {
      state.loveLottery.completionCount = clampNumber(currentCompletionCount - 1, 0, 500, 0);
    }
  } else {
    marked.add(activityId);
    if (activity?.category !== "shopping") {
      state.loveLottery.completionCount = clampNumber(currentCompletionCount + 1, 0, 500, currentCompletionCount);
    }
  }
  state.loveLottery.markedIds = Array.from(marked);
  saveLoveLotteryProgress();
  renderLoveLottery();
}

function resetLoveLotteryProgress() {
  state.loveLottery = { markedIds: [], completionCount: 0, log: [], selections: [], pinnedDatePlans: [], claimedRewards: [] };
  state.selectedActivityId = null;
  state.activeDateEditorPlanId = null;
  state.activeMilestoneReward = null;
  elements.randomizerResult.textContent = formatLoveLotteryDate();
  elements.randomizerTask.hidden = true;
  elements.randomizerTask.textContent = "";
  saveLoveLotteryProgress();
  renderLoveLottery();
}

function renderMusic() {
  const music = normalizeMusic(state.data.music, DEFAULT_DATA.music);
  const tracks = getActiveMusicTracks();
  const wasPlaying = !elements.musicAudio.paused;

  if (tracks.length) {
    if (!tracks[state.activeTrackIndex]) {
      state.activeTrackIndex = 0;
    }

    const track = tracks[state.activeTrackIndex];
    const hadDifferentSource = elements.musicAudio.src !== track.url;
    elements.musicAudio.src = track.url;
    elements.musicAudio.loop = tracks.length === 1;
    elements.musicTrackLabel.textContent = `${track.name || `Song ${state.activeTrackIndex + 1}`} (${state.activeTrackIndex + 1}/${tracks.length})`;

    if (hadDifferentSource && wasPlaying) {
      elements.musicAudio.play().catch(() => updateMusicButtons());
    }
  } else {
    elements.musicAudio.removeAttribute("src");
    elements.musicAudio.load();
    elements.musicTrackLabel.textContent = "No track";
  }

  const activeTrack = tracks[state.activeTrackIndex];
  const volume = clampNumber(Number(activeTrack?.volume ?? music.volume), 0, 1, DEFAULT_DATA.music.volume);
  elements.musicAudio.volume = volume;
  elements.volumeInput.value = String(volume);
  updateMusicButtons();
}

function getActiveMusicTracks() {
  return state.activeScreen === "wishlist" ? getWishlistMusicTracks() : getMusicTracks();
}

function getMusicTracks() {
  const music = normalizeMusic(state.data.music, DEFAULT_DATA.music);
  return music.tracks
    .filter((track) => track.url)
    .map((track, index) => ({
      ...track,
      name: track.name || `Constellation song ${index + 1}`,
      volume: music.volume,
    }));
}

function getWishlistMusicTracks() {
  const constellationTracks = getMusicTracks();
  const loveLotterySettings = normalizeLoveLotterySettings(state.data.loveLottery, DEFAULT_DATA.loveLottery);
  const loveLotteryTrack = loveLotterySettings.music.url
    ? [{
        url: loveLotterySettings.music.url,
        name: loveLotterySettings.music.name || "Love Lottery song",
        volume: loveLotterySettings.music.volume,
      }]
    : [];

  return [...constellationTracks, ...loveLotteryTrack];
}

function playNextMusicTrack() {
  const tracks = getActiveMusicTracks();
  if (!tracks.length) {
    updateMusicButtons();
    return;
  }

  state.activeTrackIndex = (state.activeTrackIndex + 1) % tracks.length;
  renderMusic();
  elements.musicAudio.play().catch(() => updateMusicButtons());
}

function playWishlistMusic({ randomize = false } = {}) {
  const tracks = getWishlistMusicTracks();
  if (!tracks.length) {
    renderMusic();
    return;
  }

  if (randomize) {
    state.activeTrackIndex = Math.floor(Math.random() * tracks.length);
  } else if (!tracks[state.activeTrackIndex]) {
    state.activeTrackIndex = 0;
  }

  renderMusic();
  elements.musicAudio.play().catch(() => updateMusicButtons());
}

function prepareSoundEffectPlayers() {
  const music = normalizeMusic(state.data.music, DEFAULT_DATA.music);
  const soundEffects = normalizeSoundEffects(state.data.soundEffects, DEFAULT_DATA.soundEffects, music.volume);

  Object.keys(state.soundEffectPlayers).forEach((key) => {
    const effect = soundEffects[key];
    const current = state.soundEffectPlayers[key];

    if (!effect?.url) {
      state.soundEffectPlayers[key] = null;
      return;
    }

    if (!current || current.src !== effect.url) {
      const audio = new Audio(effect.url);
      audio.preload = "auto";
      state.soundEffectPlayers[key] = audio;
    }

    state.soundEffectPlayers[key].volume = clampNumber(Number(effect.volume), 0, 1, music.volume);
  });
}

function unlockSoundEffects() {
  if (state.audioUnlocked) {
    return;
  }

  prepareSoundEffectPlayers();
  Object.values(state.soundEffectPlayers).forEach((audio) => {
    if (!audio) {
      return;
    }

    const previousMuted = audio.muted;
    audio.muted = true;
    audio.play()
      .then(() => {
        audio.pause();
        audio.currentTime = 0;
        audio.muted = previousMuted;
      })
      .catch(() => {
        audio.muted = previousMuted;
      });
  });
  state.audioUnlocked = true;
}

function playSoundEffect(key) {
  const now = performance.now();
  if (now - state.lastSoundAt[key] < 90) {
    return;
  }

  prepareSoundEffectPlayers();
  const audio = state.soundEffectPlayers[key];
  if (!audio) {
    return;
  }

  state.lastSoundAt[key] = now;
  try {
    audio.currentTime = 0;
  } catch {
    // Some browsers reject seeking before metadata is ready; play still works.
  }
  audio.play().catch(() => {
    if (!state.audioUnlocked) {
      unlockSoundEffects();
    }
  });
}

function getAnniversaryTimingAudioContext() {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) {
    return null;
  }

  if (!anniversaryTimingAudioContext) {
    anniversaryTimingAudioContext = new AudioContextClass();
  }

  if (anniversaryTimingAudioContext.state === "suspended") {
    void anniversaryTimingAudioContext.resume().catch(() => {});
  }

  return anniversaryTimingAudioContext;
}

function playAnniversaryTimingCue(kind) {
  if (!state.audioUnlocked) {
    unlockSoundEffects();
  }

  const context = getAnniversaryTimingAudioContext();
  if (!context) {
    return;
  }

  const now = context.currentTime + 0.01;
  const output = context.createGain();
  output.gain.value = kind === "hit" ? 0.16 : 0.19;
  output.connect(context.destination);

  const notes = kind === "hit"
    ? [
        { frequency: 1046.5, duration: 0.1, type: "triangle", gain: 1 },
        { frequency: 1567.98, duration: 0.16, type: "sine", gain: 0.9, delay: 0.06 },
        { frequency: 2093, duration: 0.12, type: "triangle", gain: 0.58, delay: 0.12 },
      ]
    : [
        { frequency: 420, duration: 0.075, type: "sawtooth", gain: 1 },
        { frequency: 320, duration: 0.11, type: "square", gain: 0.88, delay: 0.045 },
        { frequency: 240, duration: 0.08, type: "triangle", gain: 0.58, delay: 0.09 },
      ];

  notes.forEach((note) => {
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    const startAt = now + (note.delay || 0);
    const endAt = startAt + note.duration;
    oscillator.type = note.type;
    oscillator.frequency.setValueAtTime(note.frequency, startAt);
    gain.gain.setValueAtTime(0.0001, startAt);
    gain.gain.exponentialRampToValueAtTime(output.gain.value * note.gain, startAt + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, endAt);
    oscillator.connect(gain);
    gain.connect(output);
    oscillator.start(startAt);
    oscillator.stop(endAt + 0.02);
  });
}

function renderStars() {
  elements.starsLayer.innerHTML = "";
  const layout = getConstellationLayout();

  state.data.memories.forEach((memory, index) => {
    const point = layout[memory.id] || { x: memory.x, y: memory.y };
    const button = document.createElement("button");
    button.type = "button";
    button.className = "star-button";
    button.style.left = `${point.x}%`;
    button.style.top = `${point.y}%`;
    button.style.animationDelay = `${index * 130}ms`;
    button.setAttribute("aria-label", `Open memory: ${memory.title}`);
    button.dataset.memoryId = memory.id;

    const isFound = state.progress.memoriesFound.includes(memory.id);

    if (isFound) {
      button.classList.add("is-found");
    }

    if (state.progress.heartsFound.includes(memory.id)) {
      button.classList.add("is-heart-found");
    }

    if (memory.hasHeart) {
      button.classList.add("has-heart");
    }

    const core = document.createElement("span");
    core.className = "star-core";
    core.style.boxShadow = isFound
      ? `0 0 14px rgba(148, 215, 228, 0.92), 0 0 32px rgba(149, 130, 242, 0.32)`
      : `0 0 12px rgba(255, 250, 240, 0.95), 0 0 30px ${hexToRgba(memory.accent, 0.45)}`;
    button.append(core);

    button.addEventListener("pointerenter", () => playSoundEffect("starHover"));
    button.addEventListener("focus", () => playSoundEffect("starHover"));
    button.addEventListener("click", () => {
      playSoundEffect("starClick");
      openMemory(memory.id);
    });
    elements.starsLayer.append(button);
  });
}

function renderLines() {
  elements.constellationLines.innerHTML = "";
  const points = state.data.memories;
  const layout = getConstellationLayout();

  for (let index = 0; index < points.length - 1; index += 1) {
    if (index % 3 === 2) {
      continue;
    }

    const first = points[index];
    const second = points[index + 1];
    const firstPoint = layout[first.id] || { x: first.x, y: first.y };
    const secondPoint = layout[second.id] || { x: second.x, y: second.y };
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", `${firstPoint.x}%`);
    line.setAttribute("y1", `${firstPoint.y}%`);
    line.setAttribute("x2", `${secondPoint.x}%`);
    line.setAttribute("y2", `${secondPoint.y}%`);
    elements.constellationLines.append(line);
  }
}

function getConstellationLayout() {
  const memoryIds = state.data.memories.map((memory) => memory.id);
  const signature = memoryIds.join("|");
  const stored = sessionStorage.getItem(STORAGE_KEYS.layout);

  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      if (parsed.signature === signature && parsed.points) {
        return parsed.points;
      }
    } catch {
      sessionStorage.removeItem(STORAGE_KEYS.layout);
    }
  }

  const points = createRandomConstellationLayout(memoryIds);
  sessionStorage.setItem(STORAGE_KEYS.layout, JSON.stringify({ signature, points }));
  return points;
}

function createRandomConstellationLayout(memoryIds) {
  const points = {};
  const placed = [];
  const columns = Math.ceil(Math.sqrt(memoryIds.length));
  const rows = Math.ceil(memoryIds.length / columns);

  memoryIds.forEach((id, index) => {
    const column = index % columns;
    const row = Math.floor(index / columns);
    let x = 10 + ((column + Math.random() * 0.72 + 0.14) / columns) * 80;
    let y = 14 + ((row + Math.random() * 0.7 + 0.15) / rows) * 70;

    for (let attempt = 0; attempt < 10; attempt += 1) {
      const tooClose = placed.some((point) => Math.hypot(point.x - x, point.y - y) < 11);
      if (!tooClose) {
        break;
      }

      x = 8 + Math.random() * 84;
      y = 13 + Math.random() * 72;
    }

    points[id] = {
      x: Math.round(x * 10) / 10,
      y: Math.round(y * 10) / 10,
    };
    placed.push(points[id]);
  });

  return points;
}

function getProgressDetails() {
  const totalMemories = state.data.memories.length;
  const heartIds = state.data.memories.filter((memory) => memory.hasHeart).map((memory) => memory.id);
  const validMemoryFound = state.progress.memoriesFound.filter((id) =>
    state.data.memories.some((memory) => memory.id === id)
  );
  const validHeartsFound = state.progress.heartsFound.filter((id) => heartIds.includes(id));
  const target = Math.min(state.data.unlockThreshold, heartIds.length);

  return {
    totalMemories,
    heartIds,
    validMemoryFound,
    validHeartsFound,
    puzzleTarget: target,
    puzzleUnlocked: validMemoryFound.length >= totalMemories,
    albumUnlocked: heartIds.length > 0 && validHeartsFound.length >= heartIds.length,
  };
}

function renderProgress() {
  const progress = getProgressDetails();

  state.progress.memoriesFound = progress.validMemoryFound;
  state.progress.heartsFound = progress.validHeartsFound;
  saveProgress();

  elements.memoryProgress.textContent = `Memories found: ${progress.validMemoryFound.length} / ${progress.totalMemories}`;
  elements.heartProgress.textContent = `Hidden moments: ${progress.validHeartsFound.length} / ${progress.heartIds.length}`;
  elements.openPuzzleButton.disabled = !progress.puzzleUnlocked;
  elements.openPuzzleButton.textContent = progress.puzzleUnlocked ? "A gift for you" : "Gift locked";
  elements.openAlbumButton.hidden = !progress.albumUnlocked;
}

function renderLetter() {
  elements.letterTitle.textContent = state.data.letter.title;
  const paragraphs = state.data.letter.body.split(/\n{2,}/);
  const photos = normalizeLetterPhotos(state.data.letter.photos, DEFAULT_DATA.letter.photos).filter((photo) => photo.url);
  const insertAfter = [1, 3, 5];

  elements.letterBody.innerHTML = paragraphs
    .map((paragraph, index) => {
      const photoIndex = insertAfter.indexOf(index);
      const photo = photoIndex >= 0 ? photos[photoIndex] : null;
      const paragraphHtml = `<p>${escapeHtml(paragraph).replace(/\n/g, "<br>")}</p>`;

      if (!photo) {
        return paragraphHtml;
      }

      return `${paragraphHtml}<figure class="letter-photo"><img src="${escapeAttribute(photo.url)}" alt="${escapeAttribute(photo.name || "Letter memory photo")}"></figure>`;
    })
    .join("") +
    `<p class="letter-signature">Your Always,<br>Calvin</p>` +
    `<p class="letter-corner-note">I miss the way the world felt softer with you in it.</p>`;
}

function openMemory(memoryId) {
  const memory = state.data.memories.find((item) => item.id === memoryId);
  if (!memory) {
    return;
  }

  if (!state.progress.memoriesFound.includes(memory.id)) {
    state.progress.memoriesFound.push(memory.id);
  }

  elements.memoryTitle.textContent = memory.title;
  elements.memoryContext.textContent = memory.context;
  elements.memoryCaption.textContent = memory.caption;
  state.activeMemoryId = memory.id;
  state.activeMediaIndex = 0;
  renderMemoryMedia(memory);
  renderHiddenMomentStamp(memory);

  saveProgress();
  renderProgress();
  renderStars();
  elements.memoryModal.hidden = false;
}

function renderHiddenMomentStamp(memory) {
  elements.hiddenMomentButton.hidden = true;
  elements.hiddenMomentButton.classList.remove("is-found");

  if (!memory.hasHeart || !memory.loveMessage) {
    return;
  }

  const position = getHiddenMomentPosition(memory.id);
  elements.hiddenMomentButton.style.left = `${position.x}%`;
  elements.hiddenMomentButton.style.top = `${position.y}%`;
  elements.hiddenMomentButton.hidden = false;

  if (state.progress.heartsFound.includes(memory.id)) {
    elements.hiddenMomentButton.classList.add("is-found");
  }
}

function revealHiddenMoment(memory, announce = true) {
  const wasLocked = !state.progress.heartsFound.includes(memory.id);
  elements.hiddenMomentButton.classList.add("is-found");

  if (wasLocked) {
    state.progress.heartsFound.push(memory.id);
    saveProgress();
    renderProgress();
    renderStars();
  }

  if (announce) {
    openHiddenMemoryPopup(memory);
  }

  if (wasLocked && getProgressDetails().albumUnlocked) {
    showToast("Album unlocked", "Every hidden SC moment is open now.");
  }
}

function getHiddenMomentPosition(memoryId) {
  const seed = hashString(memoryId);
  return {
    x: 12 + (seed % 72),
    y: 10 + (Math.floor(seed / 17) % 72),
  };
}

function hashString(value) {
  let hash = 0;
  for (let index = 0; index < value.length; index += 1) {
    hash = ((hash << 5) - hash + value.charCodeAt(index)) | 0;
  }
  return Math.abs(hash);
}

function getMemoryMedia(memory) {
  return normalizeMemoryMedia(memory);
}

function getPreferredMemoryMedia(memory, index = 0, preferImage = false) {
  const media = getMemoryMedia(memory);
  if (!media.length) {
    return null;
  }

  if (preferImage) {
    return media.find((item) => item.type !== "video") || media[0];
  }

  return media[index % media.length];
}

function renderMediaSurface(container, memory, mediaItem, options = {}) {
  container.textContent = "";
  container.innerHTML = "";
  container.style.backgroundImage = "";
  container.classList.remove("video-memory", "fallback-image");

  if (mediaItem?.url) {
    if (mediaItem.type === "video") {
      container.classList.add("video-memory");
      const video = document.createElement("video");
      video.src = mediaItem.url;
      video.controls = Boolean(options.controls);
      video.playsInline = true;
      video.preload = "metadata";
      container.append(video);
      return;
    }

    const image = document.createElement("img");
    image.src = mediaItem.url;
    image.alt = mediaItem.name || memory.title || "Memory photo";
    image.loading = "lazy";
    container.append(image);
    return;
  }

  container.classList.add("fallback-image");
  container.style.backgroundImage = makeFallbackBackground(memory.accent);
  container.textContent = memory.title || "Memory";
}

function renderMemoryMedia(memory) {
  elements.memoryImage.className = "memory-image";
  elements.memoryImage.textContent = "";
  elements.memoryImage.innerHTML = "";
  elements.memoryImage.style.backgroundImage = "";
  const media = getMemoryMedia(memory);
  const mediaItem = media[state.activeMediaIndex % Math.max(media.length, 1)];

  if (mediaItem?.url) {
    if (mediaItem.type === "video") {
      elements.memoryImage.classList.add("video-memory");
      elements.memoryImage.style.backgroundImage = "none";
      const video = document.createElement("video");
      video.src = mediaItem.url;
      video.controls = true;
      video.playsInline = true;
      video.preload = "metadata";
      elements.memoryImage.append(video);
      return;
    }

    elements.memoryImage.style.backgroundImage = `url("${mediaItem.url}")`;
    return;
  }

  elements.memoryImage.classList.add("fallback-image");
  elements.memoryImage.style.backgroundImage = makeFallbackBackground(memory.accent);
  elements.memoryImage.textContent = memory.title;
}

function openHiddenMemoryPopup(memory) {
  elements.hiddenMemoryTitle.textContent = memory.title || "A small thing I love";
  elements.hiddenMemoryCaption.textContent = memory.loveMessage || memory.caption || "A quiet piece of why you mean so much.";

  const heartMedia = memory.heartPhoto?.url
    ? { url: memory.heartPhoto.url, type: "image", name: memory.heartPhoto.name || "" }
    : getPreferredMemoryMedia(memory, 0, true);

  renderMediaSurface(elements.hiddenMemoryMedia, memory, heartMedia, { controls: true });
  elements.hiddenMemoryModal.hidden = false;
}

function closeHiddenMemoryPopup() {
  elements.hiddenMemoryModal.hidden = true;
  elements.hiddenMemoryMedia.querySelectorAll("video").forEach((video) => video.pause());
}

function openAlbum(index = 0) {
  const memories = state.data.memories;
  if (!memories.length) {
    return;
  }

  state.albumIndex = clampNumber(index, 0, memories.length - 1, 0);
  renderAlbum();
  elements.albumModal.hidden = false;
}

function closeAlbum() {
  elements.albumModal.hidden = true;
  elements.albumMedia.querySelectorAll("video").forEach((video) => video.pause());
}

function moveAlbum(direction) {
  const memories = state.data.memories;
  if (!memories.length) {
    return;
  }

  state.albumIndex = (state.albumIndex + direction + memories.length) % memories.length;
  playSoundEffect("starClick");
  renderAlbum();
}

function renderAlbum() {
  const memories = state.data.memories;
  const memory = memories[state.albumIndex];
  if (!memory) {
    return;
  }

  elements.albumCounter.textContent = `Memory ${state.albumIndex + 1} / ${memories.length}`;
  elements.albumTitle.textContent = memory.title || "Memory";
  elements.albumContext.textContent = memory.context || "";
  elements.albumCaption.textContent = memory.caption || "";
  renderMediaSurface(elements.albumMedia, memory, getPreferredMemoryMedia(memory, 0, false), { controls: true });
  elements.albumPrevButton.disabled = memories.length <= 1;
  elements.albumNextButton.disabled = memories.length <= 1;
}

function makeFallbackBackground(accent) {
  const color = accent || "#94d7e4";
  return `
    radial-gradient(circle at 30% 20%, ${hexToRgba(color, 0.8)}, transparent 18rem),
    radial-gradient(circle at 72% 78%, rgba(246, 166, 186, 0.36), transparent 20rem),
    linear-gradient(135deg, rgba(9, 14, 29, 1), rgba(34, 28, 57, 1))
  `;
}

function hexToRgba(hex, alpha) {
  const normalized = hex.replace("#", "");
  const value = normalized.length === 3
    ? normalized.split("").map((char) => char + char).join("")
    : normalized.padEnd(6, "0").slice(0, 6);
  const r = parseInt(value.slice(0, 2), 16);
  const g = parseInt(value.slice(2, 4), 16);
  const b = parseInt(value.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function showScreen(name) {
  const screens = {
    dashboard: elements.dashboardScreen,
    dates: elements.datesScreen,
    wishlist: elements.wishlistScreen,
    randomizer: elements.randomizerScreen,
    anniversary: elements.anniversaryScreen,
    landing: elements.landingScreen,
    opening: elements.openingScreen,
    constellation: elements.constellationScreen,
    puzzle: elements.puzzleScreen,
    letter: elements.letterScreen,
  };

  Object.entries(screens).forEach(([screenName, element]) => {
    element.classList.toggle("is-active", screenName === name);
  });

  state.activeScreen = name;
  document.body.dataset.screen = name;
  updateGlobalDock();
  renderTodayPlanBanner();

  if (name === "wishlist") {
    renderMusic();
  }

  if ((name === "dashboard" || name === "dates" || name === "randomizer") && elements.musicAudio && !elements.musicAudio.paused) {
    elements.musicAudio.pause();
  }

  if (name !== "randomizer" && elements.loveLotteryAudio && !elements.loveLotteryAudio.paused) {
    elements.loveLotteryAudio.pause();
  }
}

function updateGlobalDock() {
  elements.globalDock.hidden = !state.dashboardGateUnlocked;
  if (!state.dashboardGateUnlocked) {
    return;
  }

  const dockScreen = ["puzzle", "letter"].includes(state.activeScreen) ? "constellation" : state.activeScreen;
  elements.dockLinks.forEach((button) => {
    const target = button.dataset.dockTarget;
    const active = target === dockScreen;
    button.classList.toggle("is-active", active);
  });

  updateDockBadge(elements.datesDockBadge, getIncompletePlanCount());
  updateDockBadge(elements.wishlistDockBadge, getPendingGiftRewardCount());
}

function updateDockBadge(element, count) {
  if (!element) {
    return;
  }

  const safeCount = Number(count) || 0;
  element.hidden = safeCount <= 0;
  if (safeCount <= 0) {
    element.textContent = "";
    return;
  }
  element.textContent = safeCount > 9 ? "9+" : String(safeCount);
}

function renderTodayPlanBanner() {
  const plans = getTodayPlans();
  if (!plans.length) {
    elements.todayPlanBanner.hidden = true;
    elements.todayPlanBanner.textContent = "";
    return;
  }

  const [first] = plans;
  const summary = first.type === "trip"
    ? `Today we have a trip: ${first.label}`
    : `Today we have a date: ${first.label}`;
  const extra = plans.length > 1 ? ` +${plans.length - 1} more` : "";
  elements.todayPlanBanner.textContent = `${summary}${extra}`;
  elements.todayPlanBanner.hidden = false;
}

function showLetter() {
  state.previousScreen = state.activeScreen === "letter" ? "constellation" : state.activeScreen;
  showScreen("letter");
}

function closeLetter() {
  showScreen(state.previousScreen === "puzzle" ? "puzzle" : "constellation");
}

function initReveal() {
  state.revealComplete = false;

  if (state.revealListeners) {
    elements.revealCanvas.removeEventListener("mousemove", state.revealListeners.mousemove);
    elements.revealCanvas.removeEventListener("touchmove", state.revealListeners.touchmove);
    state.revealListeners = null;
  }

  elements.revealCanvas.style.cssText = "";
  elements.puzzleLetterButton.hidden = true;

  const url = getRevealPhotoUrl();
  if (url) {
    elements.revealPhoto.src = url;
    elements.revealPhoto.hidden = false;
  } else {
    elements.revealPhoto.src = "";
    elements.revealPhoto.hidden = true;
  }

  const setup = () => {
    const container = elements.revealContainer;
    elements.revealCanvas.width = container.offsetWidth || 400;
    elements.revealCanvas.height = container.offsetHeight || 400;
    drawRevealOverlay();
  };

  if (url) {
    if (elements.revealPhoto.complete && elements.revealPhoto.naturalWidth) {
      setup();
    } else {
      elements.revealPhoto.onload = setup;
    }
  } else {
    window.setTimeout(setup, 0);
  }

  let lastCheck = 0;

  const handleMove = (x, y) => {
    if (state.revealComplete) {
      return;
    }

    scratchReveal(x, y);

    const now = Date.now();
    if (now - lastCheck >= 350) {
      lastCheck = now;
      checkRevealComplete();
    }
  };

  const onMouseMove = (e) => {
    const rect = elements.revealCanvas.getBoundingClientRect();
    handleMove(e.clientX - rect.left, e.clientY - rect.top);
  };

  const onTouchMove = (e) => {
    e.preventDefault();
    const rect = elements.revealCanvas.getBoundingClientRect();
    const t = e.touches[0];
    handleMove(t.clientX - rect.left, t.clientY - rect.top);
  };

  elements.revealCanvas.addEventListener("mousemove", onMouseMove);
  elements.revealCanvas.addEventListener("touchmove", onTouchMove, { passive: false });
  state.revealListeners = { mousemove: onMouseMove, touchmove: onTouchMove };
}

function getRevealPhotoUrl() {
  if (state.data.puzzleImage) {
    return state.data.puzzleImage;
  }

  return state.data.memories
    .flatMap((memory) => getMemoryMedia(memory))
    .find((media) => media.type !== "video")?.url || "";
}

function drawRevealOverlay() {
  const canvas = elements.revealCanvas;
  const ctx = canvas.getContext("2d");
  const w = canvas.width;
  const h = canvas.height;

  const grad = ctx.createLinearGradient(0, 0, 0, h);
  grad.addColorStop(0, "rgba(6, 9, 26, 0.97)");
  grad.addColorStop(1, "rgba(16, 9, 32, 0.97)");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, w, h);

  const fontSize = Math.max(14, Math.round(h * 0.048));
  const lineH = Math.round(fontSize * 1.55);

  ctx.fillStyle = "rgba(247, 241, 232, 0.92)";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.font = `italic ${fontSize}px Georgia, "Times New Roman", serif`;

  const lines = [
    "“If I could fold time back",
    "and begin again,",
    "I would find you sooner,",
    "love you louder,",
    "and never let you wonder.”",
  ];

  const totalH = lines.length * lineH;
  const startY = h / 2 - totalH / 2 + lineH / 2;
  lines.forEach((line, i) => {
    ctx.fillText(line, w / 2, startY + i * lineH);
  });

  const hintSize = Math.max(11, Math.round(fontSize * 0.56));
  ctx.font = `${hintSize}px Inter, ui-sans-serif, system-ui, sans-serif`;
  ctx.fillStyle = "rgba(185, 192, 214, 0.6)";
  ctx.fillText("move your cursor here to reveal", w / 2, h - Math.round(h * 0.055));
}

function scratchReveal(x, y) {
  const canvas = elements.revealCanvas;
  const ctx = canvas.getContext("2d");
  const radius = Math.max(22, Math.round(canvas.width * 0.06));
  ctx.globalCompositeOperation = "destination-out";
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fill();
  ctx.globalCompositeOperation = "source-over";
}

function checkRevealComplete() {
  if (state.revealComplete) {
    return;
  }

  const canvas = elements.revealCanvas;
  const ctx = canvas.getContext("2d");
  const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
  let transparent = 0;

  for (let i = 3; i < data.length; i += 4) {
    if (data[i] < 128) {
      transparent += 1;
    }
  }

  if (transparent / (data.length / 4) >= 0.62) {
    autoCompleteReveal();
  }
}

function autoCompleteReveal() {
  state.revealComplete = true;
  const canvas = elements.revealCanvas;
  canvas.style.transition = "opacity 900ms ease";
  canvas.style.opacity = "0";
  window.setTimeout(() => {
    canvas.style.display = "none";
    elements.puzzleLetterButton.hidden = false;
    showToast("Revealed", "The letter is waiting for you whenever you’re ready.");
  }, 900);
}

function renderAdminForm() {
  elements.adminTitle.value = state.data.title;
  elements.adminSubtitle.value = state.data.subtitle;
  elements.adminThreshold.value = state.data.unlockThreshold;
  if (!elements.emailPageUrlInput.value) {
    elements.emailPageUrlInput.value = window.location.origin;
  }
  if (!elements.emailFromNameInput.value) {
    elements.emailFromNameInput.value = "A little constellation";
  }
  const music = normalizeMusic(state.data.music, DEFAULT_DATA.music);
  const dashboardGate = normalizeDashboardGateSettings(state.data.dashboardGate, DEFAULT_DATA.dashboardGate);
  const savedTracks = music.tracks.filter((track) => track.url);
  elements.dashboardEntryCode.value = dashboardGate.entryCode;
  elements.dashboardAdminTitle.value = dashboardGate.title;
  elements.dashboardAdminSubtitle.value = dashboardGate.subtitle;
  elements.adminMusicStatus.textContent = savedTracks.length
    ? `Saved songs: ${savedTracks.map((track, index) => track.name || `Song ${index + 1}`).join(", ")}`
    : "No saved music tracks.";
  elements.adminMusicVolume.value = String(music.volume);
  renderLoveLotteryAdminForm();
  renderAnniversaryAdminForm();
  renderSoundLibraryForm();
  elements.adminLetterTitle.value = state.data.letter.title;
  elements.adminLetterBody.value = state.data.letter.body;
  renderLetterPhotoStatus();
  renderMemoryEditors();
}

function renderLoveLotteryAdminForm() {
  const settings = normalizeLoveLotterySettings(state.data.loveLottery, DEFAULT_DATA.loveLottery);
  elements.loveLotteryMusicStatus.textContent = settings.music.url
    ? `Saved music: ${settings.music.name || "Love Lottery music"}`
    : "No Love Lottery music saved.";
  elements.loveLotteryMusicVolume.value = String(settings.music.volume);
}

function renderAnniversaryAdminForm() {
  const settings = normalizeAnniversarySettings(state.data.anniversary, DEFAULT_DATA.anniversary);
  const cards = Array.isArray(settings.cards) ? settings.cards : [];
  state.anniversaryAdminActiveCardIndex = clampNumber(
    Number(state.anniversaryAdminActiveCardIndex),
    0,
    Math.max(0, cards.length - 1),
    0
  );
  elements.anniversaryEntryCode.value = settings.entryCode;
  elements.anniversaryAdminTitle.value = settings.title;
  elements.anniversaryAdminSubtitle.value = settings.subtitle;
  elements.anniversaryAdminIntro.value = settings.intro;
  elements.anniversaryAdminOverrideToggle.checked = Boolean(state.anniversaryAdminOverride);
  elements.anniversaryAdminOverrideStatus.textContent = state.anniversaryAdminOverride
    ? "On. All anniversary levels can be opened for testing without changing real progress."
    : "Off. Anniversary levels follow the real lock order.";
  elements.anniversaryAdminCardList.innerHTML = "";
  elements.anniversaryAdminCardTabs.innerHTML = "";

  const activeCard = cards[state.anniversaryAdminActiveCardIndex];
  if (activeCard) {
    const index = state.anniversaryAdminActiveCardIndex;
    const article = document.createElement("article");
    article.className = "memory-editor anniversary-admin-card-editor";
    article.dataset.anniversaryCardIndex = String(index);
    article.innerHTML = `
      <div class="section-title-row">
        <h3>Level ${activeCard.level}</h3>
        <span class="admin-status">${activeCard.image ? escapeHtml(activeCard.imageName || "image saved") : "No image saved"}</span>
      </div>
      <div class="memory-editor-grid">
        <label>
          Card name
          <input type="text" value="${escapeAttribute(activeCard.name)}" data-anniversary-field="name">
        </label>
        <label>
          Game type
          <select data-anniversary-field="gameType">
            <option value="matching" ${activeCard.gameType === "matching" ? "selected" : ""}>Matching game</option>
            <option value="snake" ${activeCard.gameType === "snake" ? "selected" : ""}>Snake game</option>
            <option value="runner" ${activeCard.gameType === "runner" ? "selected" : ""}>Runner game</option>
            <option value="anagram" ${activeCard.gameType === "anagram" ? "selected" : ""}>Anagram game</option>
            <option value="timing" ${activeCard.gameType === "timing" ? "selected" : ""}>Timing ring</option>
            <option value="answer" ${activeCard.gameType === "answer" ? "selected" : ""}>Answer prompt</option>
          </select>
        </label>
      </div>
      <label>
        Challenge
        <textarea rows="2" data-anniversary-field="challenge">${escapeHtml(activeCard.challenge)}</textarea>
      </label>
      <label>
        Clue
        <textarea rows="2" data-anniversary-field="clue">${escapeHtml(activeCard.clue)}</textarea>
      </label>
      <label ${activeCard.gameType === "anagram" ? "" : "hidden"}>
        Allowed anagram words
        <textarea rows="6" data-anniversary-anagram-words>${escapeHtml((Array.isArray(activeCard.allowedWords) ? activeCard.allowedWords : []).join("\n"))}</textarea>
      </label>
      <label ${activeCard.gameType === "matching" || activeCard.gameType === "snake" || activeCard.gameType === "runner" || activeCard.gameType === "timing" ? "hidden" : ""}>
        Answer
        <input type="text" value="${escapeAttribute(activeCard.answer)}" data-anniversary-field="answer">
      </label>
      <div class="memory-editor-grid">
        <label>
          Gift title
          <input type="text" value="${escapeAttribute(activeCard.rewardTitle)}" data-anniversary-field="rewardTitle">
        </label>
        <label>
          Gift image
          <input type="file" accept="image/*" data-anniversary-image-input="${index}">
        </label>
      </div>
      <label>
        Gift or hidden clue
        <textarea rows="3" data-anniversary-field="rewardText">${escapeHtml(activeCard.rewardText)}</textarea>
      </label>
      <div class="anniversary-admin-pairs" ${activeCard.gameType === "matching" ? "" : "hidden"}>
        ${(Array.isArray(activeCard.matchingPairs) ? activeCard.matchingPairs : []).map((pair, pairIndex) => `
          <article class="memory-editor" data-anniversary-pair-index="${pairIndex}">
            <div class="memory-editor-grid">
              <label>
                Prompt or memory word
                <input type="text" value="${escapeAttribute(pair.word)}" data-anniversary-pair-field="word" data-anniversary-pair-index="${pairIndex}">
              </label>
              <label>
                Match text / answer
                <input type="text" value="${escapeAttribute(pair.matchText || "")}" data-anniversary-pair-field="matchText" data-anniversary-pair-index="${pairIndex}">
              </label>
            </div>
            <div class="memory-editor-grid">
              <label>
                Pair image
                <input type="file" accept="image/*" data-anniversary-pair-image-input="${index}:${pairIndex}">
              </label>
              <div class="anniversary-pair-library-preview ${pair.image ? "has-image" : ""}">
                ${
                  pair.image
                    ? `
                      <div class="anniversary-pair-preview-tile">
                        <span
                          class="anniversary-memory-photo"
                          style="background-image:url('${escapeAttribute(pair.image)}'); background-position:center ${clampNumber(Number(pair.imagePositionY), 0, 100, 50)}%;"
                          aria-label="${escapeAttribute(pair.word || `Pair ${pairIndex + 1}`)}"
                        ></span>
                      </div>
                    `
                    : `<span>${pair.matchText ? "Text-to-text pair" : "No library photo chosen yet"}</span>`
                }
              </div>
            </div>
            <div class="memory-editor-grid" ${pair.image ? "" : "hidden"}>
              <label>
                Tile crop vertical position
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="1"
                  value="${clampNumber(Number(pair.imagePositionY), 0, 100, 50)}"
                  data-anniversary-pair-field="imagePositionY"
                  data-anniversary-pair-index="${pairIndex}"
                >
              </label>
              <label>
                Y position
                <input
                  type="number"
                  min="0"
                  max="100"
                  step="1"
                  value="${clampNumber(Number(pair.imagePositionY), 0, 100, 50)}"
                  data-anniversary-pair-field="imagePositionY"
                  data-anniversary-pair-index="${pairIndex}"
                >
              </label>
            </div>
            <p class="admin-status">${pair.image ? escapeHtml(pair.imageName || "pair image saved") : "No pair image saved"}</p>
            <div class="memory-editor-grid">
              <button class="secondary-button" type="button" data-open-anniversary-pair-library="${index}:${pairIndex}" ${pair.matchText ? "disabled" : ""}>Choose from library</button>
            </div>
            <div class="memory-editor-actions">
              <button class="secondary-button" type="button" data-clear-anniversary-pair-image="${index}:${pairIndex}">Clear pair image</button>
            </div>
          </article>
        `).join("")}
      </div>
      <div class="memory-editor-actions">
        <button class="secondary-button" type="button" data-clear-anniversary-image="${index}">Clear image</button>
      </div>
    `;
    elements.anniversaryAdminCardList.append(article);
  }

  cards.forEach((card, index) => {
    const button = document.createElement("button");
    const active = index === state.anniversaryAdminActiveCardIndex;
    button.type = "button";
    button.className = `anniversary-admin-card-tab ${active ? "is-active" : ""}`;
    button.dataset.anniversaryAdminCardTab = String(index);
    button.setAttribute("role", "tab");
    button.setAttribute("aria-selected", active ? "true" : "false");
    button.innerHTML = `
      <span>Level ${card.level}</span>
      <strong>${escapeHtml(card.name || `Game ${index + 1}`)}</strong>
    `;
    elements.anniversaryAdminCardTabs.append(button);
  });
}

function renderLetterPhotoStatus() {
  const photos = normalizeLetterPhotos(state.data.letter.photos, DEFAULT_DATA.letter.photos);
  const saved = photos
    .map((photo, index) => photo.url ? `Photo ${index + 1}: ${photo.name || "saved"}` : "")
    .filter(Boolean);
  elements.letterPhotoStatus.textContent = saved.length ? saved.join(" | ") : "No letter photos saved.";
}

function renderMemoryEditors() {
  elements.memoryEditorList.innerHTML = "";

  state.data.memories.forEach((memory, index) => {
    const editor = document.createElement("article");
    editor.className = "memory-editor";
    editor.dataset.index = String(index);
    editor.innerHTML = `
      <div class="section-title-row">
        <h3>${escapeHtml(memory.title || `Memory ${index + 1}`)}</h3>
        <button class="secondary-button danger-button" type="button" data-remove-memory="${index}">Remove</button>
      </div>
      <div class="memory-editor-grid">
        <label>
          Title
          <input type="text" value="${escapeAttribute(memory.title)}" data-field="title">
        </label>
        <label>
          Context
          <input type="text" value="${escapeAttribute(memory.context)}" data-field="context">
        </label>
        <label>
          X position
          <input type="number" min="5" max="95" value="${memory.x}" data-field="x">
        </label>
        <label>
          Y position
          <input type="number" min="8" max="92" value="${memory.y}" data-field="y">
        </label>
      </div>
      <label>
        Caption
        <textarea rows="3" data-field="caption">${escapeHtml(memory.caption)}</textarea>
      </label>
      <label>
        Photo or video
        <input type="file" accept="image/*,video/*" data-media-input="${index}">
      </label>
      <p class="admin-status">Current media: ${memory.image ? escapeHtml(memory.mediaType || "image") : "none"}</p>
      <label class="checkbox-row">
        <input type="checkbox" data-field="hasHeart" ${memory.hasHeart ? "checked" : ""}>
        Has hidden SC moment
      </label>
      <label>
        Hidden SC popup caption
        <textarea rows="2" data-field="loveMessage">${escapeHtml(memory.loveMessage)}</textarea>
      </label>
      <label>
        Hidden SC photo
        <input type="file" accept="image/*" data-heart-photo-input="${index}">
      </label>
      <p class="admin-status">${memory.heartPhoto?.url ? "Heart photo saved." : "No heart photo — uses memory photo as fallback."}</p>
      <div class="memory-editor-actions">
        <button class="secondary-button" type="button" data-clear-media="${index}">Clear media</button>
        <button class="secondary-button" type="button" data-clear-heart-photo="${index}">Clear heart photo</button>
      </div>
    `;

    elements.memoryEditorList.append(editor);
  });
}

function renderSoundLibraryForm() {
  const music = normalizeMusic(state.data.music, DEFAULT_DATA.music);
  const soundEffects = normalizeSoundEffects(state.data.soundEffects, DEFAULT_DATA.soundEffects, music.volume);
  const saved = [
    soundEffects.starHover.url ? `Hover: ${soundEffects.starHover.name || "saved sound"}` : "",
    soundEffects.starClick.url ? `Click: ${soundEffects.starClick.name || "saved sound"}` : "",
  ].filter(Boolean);

  elements.soundLibraryStatus.textContent = saved.length ? saved.join(" | ") : "No star sound effects saved.";
  elements.soundEffectVolumeInputs.forEach((input) => {
    const key = input.dataset.sfxVolume;
    input.value = String(soundEffects[key]?.volume ?? music.volume);
  });
}

function renderMediaLibraryModal() {
  const items = collectMediaLibraryImages();
  elements.mediaLibraryGrid.innerHTML = "";
  elements.mediaLibraryEmpty.hidden = items.length > 0;

  items.forEach((item, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "media-library-item";
    button.dataset.mediaLibrarySelect = String(index);
    button.innerHTML = `
      <img src="${escapeAttribute(item.url)}" alt="${escapeAttribute(item.name)}">
      <span class="media-library-item-name">${escapeHtml(item.name)}</span>
      <span class="media-library-item-source">${escapeHtml(item.source)}</span>
    `;
    elements.mediaLibraryGrid.append(button);
  });
}

function syncDefaultSoundEffectVolumes(previousVolume, nextVolume) {
  const previous = clampNumber(Number(previousVolume), 0, 1, DEFAULT_DATA.music.volume);
  const next = clampNumber(Number(nextVolume), 0, 1, DEFAULT_DATA.music.volume);
  state.data.soundEffects = normalizeSoundEffects(state.data.soundEffects, DEFAULT_DATA.soundEffects, previous);

  Object.keys(DEFAULT_DATA.soundEffects).forEach((key) => {
    const effect = state.data.soundEffects[key];
    if (!effect) {
      return;
    }

    if (Math.abs(Number(effect.volume) - previous) < 0.001) {
      effect.volume = next;
    }
  });
}

function syncAdminFieldsToData() {
  state.data.title = elements.adminTitle.value.trim() || DEFAULT_DATA.title;
  state.data.subtitle = elements.adminSubtitle.value.trim() || DEFAULT_DATA.subtitle;
  state.data.unlockThreshold = clampNumber(Number(elements.adminThreshold.value), 1, 12, DEFAULT_DATA.unlockThreshold);
  state.data.music = {
    ...normalizeMusic(state.data.music, DEFAULT_DATA.music),
    volume: clampNumber(Number(elements.adminMusicVolume.value), 0, 1, DEFAULT_DATA.music.volume),
  };
  state.data.loveLottery = normalizeLoveLotterySettings(state.data.loveLottery, DEFAULT_DATA.loveLottery);
  state.data.loveLottery.music.volume = clampNumber(
    Number(elements.loveLotteryMusicVolume.value),
    0,
    1,
    DEFAULT_DATA.loveLottery.music.volume
  );
  state.data.dashboardGate = normalizeDashboardGateSettings(state.data.dashboardGate, DEFAULT_DATA.dashboardGate);
  state.data.dashboardGate.entryCode = elements.dashboardEntryCode.value.replace(/\D/g, "").slice(0, 6) || DEFAULT_DATA.dashboardGate.entryCode;
  state.data.dashboardGate.title = elements.dashboardAdminTitle.value.trim() || DEFAULT_DATA.dashboardGate.title;
  state.data.dashboardGate.subtitle = elements.dashboardAdminSubtitle.value.trim() || DEFAULT_DATA.dashboardGate.subtitle;
  state.data.anniversary = normalizeAnniversarySettings(state.data.anniversary, DEFAULT_DATA.anniversary);
  state.data.anniversary.entryCode = elements.anniversaryEntryCode.value.replace(/\D/g, "").slice(0, 4) || DEFAULT_DATA.anniversary.entryCode;
  state.data.anniversary.title = elements.anniversaryAdminTitle.value.trim() || DEFAULT_DATA.anniversary.title;
  state.data.anniversary.subtitle = elements.anniversaryAdminSubtitle.value.trim() || DEFAULT_DATA.anniversary.subtitle;
  state.data.anniversary.intro = elements.anniversaryAdminIntro.value.trim() || DEFAULT_DATA.anniversary.intro;
  state.data.soundEffects = normalizeSoundEffects(state.data.soundEffects, DEFAULT_DATA.soundEffects, state.data.music.volume);
  elements.soundEffectVolumeInputs.forEach((input) => {
    const key = input.dataset.sfxVolume;
    if (state.data.soundEffects[key]) {
      state.data.soundEffects[key].volume = clampNumber(Number(input.value), 0, 1, state.data.music.volume);
    }
  });
  state.data.letter.title = elements.adminLetterTitle.value.trim() || DEFAULT_DATA.letter.title;
  state.data.letter.body = elements.adminLetterBody.value.trim() || DEFAULT_DATA.letter.body;
  state.data.letter.photos = normalizeLetterPhotos(state.data.letter.photos, DEFAULT_DATA.letter.photos);

  elements.anniversaryAdminCardList.querySelectorAll("[data-anniversary-card-index]").forEach((editor) => {
    const index = Number(editor.dataset.anniversaryCardIndex);
    const card = state.data.anniversary.cards[index];
    if (!card) {
      return;
    }

    editor.querySelectorAll("[data-anniversary-field]").forEach((field) => {
      const key = field.dataset.anniversaryField;
      card[key] = key === "answer" ? field.value.trim().toLowerCase() : field.value.trim();
    });

    const anagramWordsField = editor.querySelector("[data-anniversary-anagram-words]");
    if (anagramWordsField) {
      card.allowedWords = Array.from(
        new Set(
          anagramWordsField.value
            .split(/[\n,]+/)
            .map((word) => word.trim().toLowerCase())
            .filter(Boolean)
        )
      ).sort();
    }

    editor.querySelectorAll("[data-anniversary-pair-field]").forEach((field) => {
      const pairIndex = Number(field.dataset.anniversaryPairIndex);
      const key = field.dataset.anniversaryPairField;
      const pair = card.matchingPairs[pairIndex];
      if (!pair || !key) {
        return;
      }

      if (key === "imagePositionY") {
        pair.imagePositionY = clampNumber(Number(field.value), 0, 100, 50);
        return;
      }

      pair[key] = field.value.trim();
    });
  });

  elements.memoryEditorList.querySelectorAll(".memory-editor").forEach((editor) => {
    const index = Number(editor.dataset.index);
    const memory = state.data.memories[index];
    if (!memory) {
      return;
    }

    editor.querySelectorAll("[data-field]").forEach((field) => {
      const key = field.dataset.field;
      if (key === "hasHeart") {
        memory.hasHeart = field.checked;
        return;
      }

      if (key === "x" || key === "y") {
        memory[key] = clampNumber(Number(field.value), key === "x" ? 5 : 8, key === "x" ? 95 : 92, memory[key]);
        return;
      }

      memory[key] = field.value.trim();
    });
  });
}

function addMemory() {
  const index = state.data.memories.length + 1;
  state.data.memories.push({
    id: `memory-${Date.now()}`,
    title: `Memory ${index}`,
    context: "",
    caption: "Add a short, grounded caption here.",
    image: "",
    mediaType: "image",
    media: [],
    x: clampNumber(12 + index * 9, 8, 92, 50),
    y: clampNumber(22 + index * 7, 12, 86, 50),
    accent: ["#94d7e4", "#f3d386", "#f6a6ba", "#9582f2"][index % 4],
    hasHeart: false,
    loveMessage: "",
  });
  renderMemoryEditors();
}

function removeMemory(index) {
  const [removed] = state.data.memories.splice(index, 1);
  if (removed) {
    state.progress.memoriesFound = state.progress.memoriesFound.filter((id) => id !== removed.id);
    state.progress.heartsFound = state.progress.heartsFound.filter((id) => id !== removed.id);
    saveProgress();
  }
  renderMemoryEditors();
  renderApp();
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(reader.result));
    reader.addEventListener("error", () => reject(reader.error));
    reader.readAsDataURL(file);
  });
}

function readImageFileAsDataUrl(file, maxDimension = 1600, quality = 0.84) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener("error", () => reject(reader.error));
    reader.addEventListener("load", () => {
      const image = new Image();
      image.addEventListener("error", reject);
      image.addEventListener("load", () => {
        const scale = Math.min(1, maxDimension / Math.max(image.width, image.height));
        const width = Math.max(1, Math.round(image.width * scale));
        const height = Math.max(1, Math.round(image.height * scale));
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");

        canvas.width = width;
        canvas.height = height;
        context.fillStyle = "#111827";
        context.fillRect(0, 0, width, height);
        context.drawImage(image, 0, 0, width, height);
        resolve(canvas.toDataURL("image/jpeg", quality));
      });
      image.src = reader.result;
    });
    reader.readAsDataURL(file);
  });
}

function dataUrlToBlob(dataUrl) {
  const [header, body] = dataUrl.split(",");
  const mimeMatch = header.match(/data:([^;]+);base64/);
  const mime = mimeMatch?.[1] || "application/octet-stream";
  const binary = atob(body);
  const bytes = new Uint8Array(binary.length);

  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index);
  }

  return new Blob([bytes], { type: mime });
}

function extensionForFile(file, fallback = "jpg") {
  const fromName = file.name.split(".").pop()?.toLowerCase().replace(/[^a-z0-9]/g, "");
  if (fromName) {
    return fromName === "mov" ? "mov" : fromName;
  }

  const fromType = file.type.split("/").pop()?.toLowerCase().replace(/[^a-z0-9]/g, "");
  return fromType || fallback;
}

async function uploadMediaFile(file, purpose) {
  const isImage = file.type.startsWith("image/");
  const isVideo = file.type.startsWith("video/");
  const isAudio = file.type.startsWith("audio/");

  if (!isImage && !isVideo && !isAudio) {
    throw new Error("Choose an image, video, or audio file.");
  }

  if ((isVideo || isAudio) && !SUPABASE_CONFIGURED) {
    throw new Error("Video and audio uploads need Supabase Storage. Configure Supabase first.");
  }

  if (SUPABASE_CONFIGURED && !state.session?.user?.id) {
    throw new Error("Sign in before uploading media online.");
  }

  if (isImage && !SUPABASE_CONFIGURED) {
    return {
      url: await readImageFileAsDataUrl(file),
      mediaType: "image",
    };
  }

  const userId = state.session.user.id;
  const randomPart = crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.round(Math.random() * 100000)}`;
  const mediaType = isAudio ? "audio" : isVideo ? "video" : "image";
  const extension = isAudio ? extensionForFile(file, "mp3") : isVideo ? extensionForFile(file, "mp4") : "jpg";
  const path = `${userId}/${PAGE_ID}/${purpose}-${Date.now()}-${randomPart}.${extension}`;
  const fileBody = isVideo || isAudio ? file : dataUrlToBlob(await readImageFileAsDataUrl(file));
  const contentType = isAudio ? file.type || "audio/mpeg" : isVideo ? file.type || "video/mp4" : "image/jpeg";
  const { error } = await supabase.storage.from(MEDIA_BUCKET).upload(path, fileBody, {
    cacheControl: "31536000",
    contentType,
    upsert: false,
  });

  if (error) {
    throw new Error(error.message);
  }

  const { data } = supabase.storage.from(MEDIA_BUCKET).getPublicUrl(path);
  return {
    url: data.publicUrl,
    mediaType,
  };
}

async function handleMemoryMediaInput(input) {
  const index = Number(input.dataset.mediaInput);
  const file = input.files?.[0];
  if (!file || !state.data.memories[index]) {
    return;
  }

  try {
    const memory = state.data.memories[index];
    const media = await uploadMediaFile(file, `memory-${memory.id}`);
    memory.media = [{
      url: media.url,
      type: media.mediaType,
      name: file.name,
    }];
    memory.image = media.url;
    memory.mediaType = media.mediaType;
    renderMemoryEditors();
    showToast("Media updated", "Save changes to publish it online.");
  } catch (error) {
    showToast("Upload failed", error.message);
  } finally {
    input.value = "";
  }
}

async function handleHeartPhotoInput(input) {
  const index = Number(input.dataset.heartPhotoInput);
  const file = input.files?.[0];
  if (!file || !state.data.memories[index]) {
    return;
  }

  try {
    const memory = state.data.memories[index];
    const media = await uploadMediaFile(file, `heart-photo-${memory.id}`);
    if (media.mediaType !== "image") {
      showToast("Heart photo needs an image", "Choose a photo for the hidden SC moment.");
      return;
    }

    memory.heartPhoto = { url: media.url, name: file.name };
    renderMemoryEditors();
    showToast("Heart photo added", "Save changes to publish it online.");
  } catch (error) {
    showToast("Upload failed", error.message);
  } finally {
    input.value = "";
  }
}

async function handlePuzzleImageInput(input) {
  const file = input.files?.[0];
  if (!file) {
    return;
  }

  try {
    const media = await uploadMediaFile(file, "puzzle");
    if (media.mediaType !== "image") {
      showToast("Puzzle needs an image", "Use photos for the puzzle and videos for memories.");
      return;
    }

    state.data.puzzleImage = media.url;
    showToast("Puzzle image added", SUPABASE_CONFIGURED ? "Save changes to publish it online." : "Save changes to keep it in this browser.");
  } catch (error) {
    showToast("Upload failed", error.message);
  } finally {
    input.value = "";
  }
}

async function handleLetterPhotoInput(input) {
  const photoIndex = clampNumber(Number(input.dataset.letterPhotoInput), 0, 2, 0);
  const file = input.files?.[0];
  if (!file) {
    return;
  }

  try {
    const media = await uploadMediaFile(file, `letter-photo-${photoIndex + 1}`);
    if (media.mediaType !== "image") {
      showToast("Letter photo needs an image", "Choose a photo for the letter.");
      return;
    }

    const photos = normalizeLetterPhotos(state.data.letter.photos, DEFAULT_DATA.letter.photos);
    photos[photoIndex] = {
      url: media.url,
      name: file.name,
    };
    state.data.letter.photos = photos;
    renderLetter();
    renderLetterPhotoStatus();
    showToast(`Letter photo ${photoIndex + 1} added`, "Save changes to publish it online.");
  } catch (error) {
    showToast("Letter photo upload failed", error.message);
  } finally {
    input.value = "";
  }
}

async function handleMusicInput(input) {
  const trackIndex = clampNumber(Number(input.dataset.musicInput), 0, 2, 0);
  const file = input.files?.[0];
  if (!file) {
    return;
  }

  try {
    const media = await uploadMediaFile(file, "music");
    if (media.mediaType !== "audio") {
      showToast("Music needs audio", "Choose an MP3, WAV, OGG, AAC, or audio WebM file.");
      return;
    }

    const music = normalizeMusic(state.data.music, DEFAULT_DATA.music);
    music.tracks[trackIndex] = {
      url: media.url,
      name: file.name,
    };
    music.volume = clampNumber(Number(elements.adminMusicVolume.value), 0, 1, DEFAULT_DATA.music.volume);
    state.data.music = music;
    state.activeTrackIndex = getMusicTracks().findIndex((track) => track.url === media.url);
    if (state.activeTrackIndex < 0) {
      state.activeTrackIndex = 0;
    }
    renderMusic();
    renderAdminForm();
    showToast(`Song ${trackIndex + 1} added`, "Save changes to publish the music playlist online.");
  } catch (error) {
    showToast("Music upload failed", error.message);
  } finally {
    input.value = "";
  }
}

async function handleLoveLotteryMusicInput(input) {
  const file = input.files?.[0];
  if (!file) {
    return;
  }

  try {
    const media = await uploadMediaFile(file, "love-lottery-music");
    if (media.mediaType !== "audio") {
      showToast("Music needs audio", "Choose an MP3, WAV, OGG, AAC, or audio WebM file.");
      return;
    }

    state.data.loveLottery = normalizeLoveLotterySettings(state.data.loveLottery, DEFAULT_DATA.loveLottery);
    state.data.loveLottery.music = {
      url: media.url,
      name: file.name,
      volume: clampNumber(Number(elements.loveLotteryMusicVolume.value), 0, 1, DEFAULT_DATA.loveLottery.music.volume),
    };
    renderLoveLotteryMusic();
    renderLoveLotteryAdminForm();
    showToast("Love Lottery music added", "Save changes to publish this music online.");
  } catch (error) {
    showToast("Love Lottery upload failed", error.message);
  } finally {
    input.value = "";
  }
}

async function handleAnniversaryImageInput(input) {
  const index = Number(input.dataset.anniversaryImageInput);
  const file = input.files?.[0];
  const settings = normalizeAnniversarySettings(state.data.anniversary, DEFAULT_DATA.anniversary);
  if (!file || !settings.cards[index]) {
    return;
  }

  try {
    const media = await uploadMediaFile(file, `anniversary-${settings.cards[index].id}`);
    if (media.mediaType !== "image") {
      showToast("Image needed", "Choose an image for this anniversary card.");
      return;
    }

    state.data.anniversary = settings;
    state.data.anniversary.cards[index].image = media.url;
    state.data.anniversary.cards[index].imageName = file.name;
    renderAnniversary();
    renderAnniversaryAdminForm();
    showToast(`Level ${index + 1} image added`, "Save changes to publish it online.");
  } catch (error) {
    showToast("Upload failed", error.message);
  } finally {
    input.value = "";
  }
}

async function handleAnniversaryPairImageInput(input) {
  const [cardIndexRaw, pairIndexRaw] = String(input.dataset.anniversaryPairImageInput || "").split(":");
  const cardIndex = Number(cardIndexRaw);
  const pairIndex = Number(pairIndexRaw);
  const file = input.files?.[0];
  const settings = normalizeAnniversarySettings(state.data.anniversary, DEFAULT_DATA.anniversary);
  const card = settings.cards[cardIndex];
  const pair = card?.matchingPairs?.[pairIndex];
  if (!file || !card || !pair) {
    return;
  }

  try {
    const media = await uploadMediaFile(file, `anniversary-${card.id}-pair-${pair.id}`);
    if (media.mediaType !== "image") {
      showToast("Image needed", "Choose an image for this matching pair.");
      return;
    }

    state.data.anniversary = settings;
    state.data.anniversary.cards[cardIndex].matchingPairs[pairIndex].image = media.url;
    state.data.anniversary.cards[cardIndex].matchingPairs[pairIndex].imageName = file.name;
    state.data.anniversary.cards[cardIndex].matchingPairs[pairIndex].imagePositionY = clampNumber(
      Number(state.data.anniversary.cards[cardIndex].matchingPairs[pairIndex].imagePositionY),
      0,
      100,
      50
    );
    renderAnniversaryAdminForm();
    showToast(`Pair ${pairIndex + 1} image added`, "Save changes to publish it online.");
  } catch (error) {
    showToast("Upload failed", error.message);
  } finally {
    input.value = "";
  }
}

function openMediaLibraryPicker(target) {
  state.mediaLibraryTarget = target;
  renderMediaLibraryModal();
  const anniversarySettings = normalizeAnniversarySettings(state.data.anniversary, DEFAULT_DATA.anniversary);
  const card = anniversarySettings.cards[target.cardIndex];
  const pair = card?.matchingPairs?.[target.pairIndex];
  elements.mediaLibraryTitle.textContent = pair?.word ? `Choose a photo for "${pair.word}"` : "Choose a saved photo";
  elements.mediaLibraryContext.textContent = card
    ? `Pick a saved image for Level ${card.level}${pair?.word ? ` and the word "${pair.word}".` : "."}`
    : "Pick from the photos already saved in your little home.";
  elements.mediaLibraryRail.hidden = false;
  elements.anniversaryAdminWorkspace.classList.add("is-library-open");
}

function closeMediaLibraryPicker() {
  state.mediaLibraryTarget = null;
  elements.mediaLibraryRail.hidden = true;
  elements.anniversaryAdminWorkspace.classList.remove("is-library-open");
}

function selectMediaLibraryImage(index) {
  const item = collectMediaLibraryImages()[index];
  if (!item || !state.mediaLibraryTarget) {
    return;
  }

  if (state.mediaLibraryTarget.type === "anniversaryPair") {
    const { cardIndex, pairIndex } = state.mediaLibraryTarget;
    state.data.anniversary = normalizeAnniversarySettings(state.data.anniversary, DEFAULT_DATA.anniversary);
    const pair = state.data.anniversary.cards[cardIndex]?.matchingPairs?.[pairIndex];
    if (!pair) {
      return;
    }

    pair.image = item.url;
    pair.imageName = item.name;
    pair.imagePositionY = clampNumber(Number(pair.imagePositionY), 0, 100, 50);
    renderAnniversaryAdminForm();
    showToast("Pair image selected", "Save changes to publish this matching photo online.");
  }

  closeMediaLibraryPicker();
}

async function handleSoundEffectInput(input) {
  const key = input.dataset.sfxInput;
  const file = input.files?.[0];
  if (!file || !DEFAULT_DATA.soundEffects[key]) {
    return;
  }

  try {
    const media = await uploadMediaFile(file, `sfx-${key}`);
    if (media.mediaType !== "audio") {
      showToast("Sound effect needs audio", "Choose a short MP3, WAV, OGG, AAC, or audio WebM file.");
      return;
    }

    const music = normalizeMusic(state.data.music, DEFAULT_DATA.music);
    const soundEffects = normalizeSoundEffects(state.data.soundEffects, DEFAULT_DATA.soundEffects, music.volume);
    const volumeInput = elements.soundEffectVolumeInputs.find((item) => item.dataset.sfxVolume === key);
    soundEffects[key] = {
      url: media.url,
      name: file.name,
      volume: clampNumber(Number(volumeInput?.value), 0, 1, music.volume),
    };
    state.data.soundEffects = soundEffects;
    prepareSoundEffectPlayers();
    renderSoundLibraryForm();
    showToast("Sound effect added", "Save changes to publish it online.");
  } catch (error) {
    showToast("Sound upload failed", error.message);
  } finally {
    input.value = "";
  }
}

function exportJson() {
  syncAdminFieldsToData();
  const blob = new Blob([JSON.stringify(state.data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "sophia-constellation.json";
  link.click();
  URL.revokeObjectURL(url);
}

async function importJson(input) {
  const file = input.files?.[0];
  if (!file) {
    return;
  }

  try {
    const text = await file.text();
    state.data = normalizeData(JSON.parse(text));
    saveData();
    renderApp();
    renderAdminForm();
    initReveal();
    showToast("JSON imported", "The constellation has been updated.");
  } catch {
    showToast("Import failed", "That file was not valid JSON for this app.");
  } finally {
    input.value = "";
  }
}

function resetProgress() {
  state.progress = { memoriesFound: [], heartsFound: [] };
  saveProgress();
  renderApp();
  initReveal();
  showToast("Progress reset", "All stars and hidden moments are undiscovered again.");
}

function resetData() {
  if (!window.confirm("Reset the app data to the starter version?")) {
    return;
  }

  state.data = structuredClone(DEFAULT_DATA);
  state.dashboardGateUnlocked = false;
  state.dashboardPinEntry = "";
  saveDashboardGateProgress();
  state.anniversary = normalizeAnniversaryProgress();
  saveAnniversaryProgress();
  saveData();
  resetProgress();
  renderAdminForm();
  showToast("App data reset", "The starter constellation is back.");
}

function setAdminTab(tabName) {
  elements.adminTabs.forEach((button) => {
    const active = button.dataset.adminTab === tabName;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-selected", active ? "true" : "false");
  });

  elements.adminTabPanels.forEach((panel) => {
    panel.classList.toggle("is-active", panel.dataset.adminPanel === tabName);
  });
}

function bindEvents() {
  elements.openSophiaPageButton.addEventListener("click", () => navigateTo("/forsophia"));
  elements.openDatesButton.addEventListener("click", () => navigateTo("/dates"));
  elements.openAnniversaryButton.addEventListener("click", () => navigateTo("/anniversary"));
  elements.openWishlistButton.addEventListener("click", () => {
    navigateTo("/wishlist");
    playWishlistMusic({ randomize: true });
  });
  elements.dashboardPinButtons.forEach((button) => {
    button.addEventListener("click", () => {
      pressDashboardPinDigit(button.dataset.dashboardPin);
      button.classList.add("is-pressed");
      window.setTimeout(() => button.classList.remove("is-pressed"), 140);
    });
  });
  elements.dashboardPinClearButton.addEventListener("click", clearDashboardPin);
  elements.dashboardPinBackspaceButton.addEventListener("click", backspaceDashboardPin);
  elements.dashboardUnlockButton.addEventListener("click", tryDashboardCodeUnlock);
  elements.datesHomeButton.addEventListener("click", () => navigateTo("/"));
  elements.anniversaryHomeButton.addEventListener("click", () => navigateTo("/"));
  elements.openDateCreatorButton.addEventListener("click", () => {
    const willOpen = elements.dateCreatorForm.hidden;
    elements.dateCreatorForm.hidden = !willOpen ? true : false;
    elements.openDateCreatorButton.setAttribute("aria-expanded", willOpen ? "true" : "false");
    if (willOpen) {
      updateDateCreatorForm();
      if (!elements.dateCreatorDateInput.value) {
        elements.dateCreatorDateInput.value = toDateTimeLocalValue(getDefaultDatePlanTimestamp(1));
      }
      elements.dateCreatorNameInput.focus();
    }
  });
  elements.dateCreatorTypeSelect.addEventListener("change", updateDateCreatorForm);
  elements.dateCreatorDateInput.addEventListener("change", updateDateCreatorForm);
  elements.dateCreatorForm.addEventListener("submit", addManualDatePlan);
  elements.wishlistHomeButton.addEventListener("click", () => navigateTo("/"));
  elements.wishlistTabs.forEach((button) => {
    button.addEventListener("click", () => setWishlistTab(button.dataset.wishlistTab));
  });
  elements.wishlistForms.forEach((form) => {
    form.addEventListener("submit", addWishlistItem);
  });
  elements.wishlistList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-wishlist-edit]");
    if (button) {
      openWishlistEditor(button.dataset.wishlistEdit);
    }
  });
  elements.wishlistCalvinList.addEventListener("change", (event) => {
    if (event.target.matches("[data-wishlist-purchased]")) {
      void toggleWishlistPurchased(event.target.dataset.wishlistPurchased, event.target.checked);
    }
  });
  elements.openRandomizerButton.addEventListener("click", () => {
    navigateTo("/love-lottery");
    elements.musicAudio.pause();
    renderLoveLotteryMusic();
    playLoveLotteryMusic();
  });
  elements.randomizerHomeButton.addEventListener("click", () => navigateTo("/"));
  elements.anniversaryTumblerUpButtons.forEach((button) => {
    button.addEventListener("click", () => stepAnniversaryTumbler(Number(button.dataset.anniversaryTumblerUp), 1));
  });
  elements.anniversaryTumblerDownButtons.forEach((button) => {
    button.addEventListener("click", () => stepAnniversaryTumbler(Number(button.dataset.anniversaryTumblerDown), -1));
  });
  elements.anniversaryTumblerResetButton.addEventListener("click", resetAnniversaryTumbler);
  elements.anniversaryUnlockButton.addEventListener("click", tryAnniversaryCodeUnlock);
  elements.anniversaryCards.addEventListener("click", (event) => {
    const button = event.target.closest("[data-open-anniversary-card]");
    if (button) {
      openAnniversaryCardGame(button.dataset.openAnniversaryCard);
    }
  });
  elements.anniversaryGameModal.addEventListener("click", (event) => {
    if (event.target.closest("[data-close-anniversary-game]")) {
      closeAnniversaryCardGame();
    }
    const anagramLetter = event.target.closest("[data-anniversary-anagram-letter]");
    if (anagramLetter) {
      handleAnniversaryAnagramLetter(anagramLetter.dataset.anniversaryAnagramLetter);
    }
    if (event.target.closest("[data-anniversary-anagram-submit]")) {
      const settings = normalizeAnniversarySettings(state.data.anniversary, DEFAULT_DATA.anniversary);
      const card = settings.cards.find((item) => item.id === state.activeAnniversaryCardId);
      if (card?.gameType === "anagram") {
        submitAnniversaryAnagramWord(card, getAnniversaryAnagramCurrentGuess(card.id));
      }
    }
    if (event.target.closest("[data-anniversary-anagram-backspace]")) {
      backspaceAnniversaryAnagramLetter();
    }
    if (event.target.closest("[data-anniversary-anagram-clear]")) {
      clearAnniversaryAnagramGuess();
    }
    if (event.target.closest("[data-anniversary-anagram-reshuffle]")) {
      reshuffleAnniversaryAnagram();
    }
    if (event.target.closest("[data-anniversary-timing-tap]")) {
      handleAnniversaryTimingTap();
    }
    if (event.target.closest("[data-anniversary-snake-mode-toggle]")) {
      state.anniversarySnakeControlMode = state.anniversarySnakeControlMode === "joystick" ? "pad" : "joystick";
      saveAnniversarySnakeControlMode();
      resetAnniversarySnakeJoystick();
      renderAnniversaryGameModal();
    }
    if (event.target.closest("[data-anniversary-snake-restart]")) {
      restartAnniversarySnake();
    }
    if (event.target.closest("[data-anniversary-snake-start]")) {
      beginAnniversarySnake();
    }
    if (event.target.closest("[data-anniversary-runner-restart]")) {
      restartAnniversaryRunner();
    }
    const directionButton = event.target.closest("[data-anniversary-snake-direction]");
    if (directionButton) {
      setAnniversarySnakeDirection(directionButton.dataset.anniversarySnakeDirection);
    }
  });
  elements.anniversaryDateRewardModal.addEventListener("click", (event) => {
    if (event.target.closest("[data-close-anniversary-date-reward]")) {
      closeAnniversaryDateRewardModal();
    }
  });
  elements.saveAnniversaryDateRewardButton.addEventListener("click", saveAnniversaryDateReward);
  elements.anniversaryDateRewardTypeSelect.addEventListener("change", updateAnniversaryDateRewardForm);
  elements.anniversaryDateRewardDateInput.addEventListener("change", updateAnniversaryDateRewardForm);
  elements.claimAnniversaryDateRewardButton.addEventListener("click", revealAnniversaryDateRewardForm);
  elements.scheduleAnniversaryDateRewardLaterButton.addEventListener("click", saveAnniversaryDateRewardLater);
  elements.anniversaryGameForm.addEventListener("submit", handleAnniversaryGameSubmit);
  elements.anniversaryGameBoard.addEventListener("click", (event) => {
    if (event.target.closest("[data-anniversary-matching-claim]")) {
      claimAnniversaryMatchingPrize();
      return;
    }
    const tile = event.target.closest("[data-anniversary-tile]");
    if (tile) {
      handleAnniversaryMatchingTile(tile.dataset.anniversaryTile, tile);
    }
  });
  elements.anniversaryGameModal.addEventListener("pointerdown", (event) => {
    const runnerSurface = event.target.closest("[data-anniversary-runner-jump]");
    if (runnerSurface && state.anniversaryRunner) {
      state.anniversaryRunnerPointerId = event.pointerId;
      state.anniversaryRunnerPressStartedAt = performance.now();
      runnerSurface.setPointerCapture?.(event.pointerId);
      event.preventDefault();
      return;
    }

    const joystick = event.target.closest("[data-anniversary-joystick]");
    if (!joystick || !state.anniversarySnake || state.anniversarySnakeControlMode !== "joystick") {
      return;
    }

    state.anniversarySnakePointerId = event.pointerId;
    joystick.setPointerCapture?.(event.pointerId);
    updateAnniversarySnakeJoystick(event.clientX, event.clientY, joystick);
    event.preventDefault();
  });
  elements.anniversaryGameModal.addEventListener("pointermove", (event) => {
    if (state.anniversarySnakePointerId !== event.pointerId || state.anniversarySnakeControlMode !== "joystick") {
      return;
    }

    const joystick = event.target.closest("[data-anniversary-joystick]") || elements.anniversaryGameBoard.querySelector("[data-anniversary-joystick]");
    if (!joystick) {
      return;
    }

    updateAnniversarySnakeJoystick(event.clientX, event.clientY, joystick);
    event.preventDefault();
  });
  ["pointerup", "pointercancel"].forEach((eventName) => {
    elements.anniversaryGameModal.addEventListener(eventName, (event) => {
      if (state.anniversaryRunnerPointerId === event.pointerId) {
        const heldForMs = Math.max(0, performance.now() - state.anniversaryRunnerPressStartedAt);
        if (eventName === "pointerup") {
          jumpAnniversaryRunner(heldForMs);
        }
        state.anniversaryRunnerPointerId = null;
        state.anniversaryRunnerPressStartedAt = 0;
      }
      if (state.anniversarySnakePointerId === event.pointerId) {
        resetAnniversarySnakeJoystick();
      }
    });
  });
  window.addEventListener("keydown", (event) => {
    if (elements.anniversaryGameModal.hidden) {
      return;
    }

    if (event.code === "Space" && state.anniversaryRunner) {
      if (state.anniversaryRunner.status === "playing") {
        jumpAnniversaryRunner(0);
      } else {
        restartAnniversaryRunner();
      }
      event.preventDefault();
      return;
    }

    if (event.code === "Space" && state.anniversaryTiming) {
      handleAnniversaryTimingTap();
      event.preventDefault();
      return;
    }

    if (!state.anniversarySnake) {
      return;
    }

    if (event.code === "Space") {
      const snakeState = state.anniversarySnake;
      if (snakeState.status === "ready") {
        beginAnniversarySnake();
        event.preventDefault();
        return;
      }
      if (snakeState.status === "lost") {
        restartAnniversarySnake();
        event.preventDefault();
        return;
      }
    }

    const direction = {
      ArrowUp: "up",
      ArrowDown: "down",
      ArrowLeft: "left",
      ArrowRight: "right",
    }[event.key];
    if (!direction) {
      return;
    }

    setAnniversarySnakeDirection(direction);
    event.preventDefault();
  });
  elements.spinDateButton.addEventListener("click", spinLoveLottery);
  elements.markDateButton.addEventListener("click", markSelectedLoveLotteryActivity);
  elements.selectedDateNote.addEventListener("click", () => {
    const selectedEntry = getSelectedLoveLotterySelection();
    if (selectedEntry?.datePlan?.planId) {
      openDateEditor(selectedEntry.datePlan.planId);
    }
  });
  elements.loveLotteryAudio.addEventListener("play", renderLoveLotteryMusic);
  elements.loveLotteryAudio.addEventListener("pause", renderLoveLotteryMusic);
  elements.openActivityListButton.addEventListener("click", () => {
    elements.activityListModal.hidden = false;
  });
  elements.activityListModal.addEventListener("click", (event) => {
    if (event.target.closest("[data-close-activity-list]")) {
      elements.activityListModal.hidden = true;
    }
  });
  elements.resetDateButton.addEventListener("click", resetLoveLotteryProgress);
  elements.todayPicksList.addEventListener("click", (event) => {
    const undoButton = event.target.closest("[data-undo-selection-id]");
    if (undoButton) {
      undoCompleteLoveLotteryPick(undoButton.dataset.undoSelectionId);
      return;
    }

    const completeButton = event.target.closest("[data-complete-selection-id]");
    if (completeButton) {
      completeLoveLotteryPick(completeButton.dataset.completeSelectionId);
      return;
    }

    const removeButton = event.target.closest("[data-remove-selection-id]");
    if (removeButton) {
      unselectLoveLotteryPick(removeButton.dataset.removeSelectionId);
      return;
    }

    const button = event.target.closest("[data-selection-id]");
    if (button) {
      setSelectedLoveLotterySelection(button.dataset.selectionId);
    }
  });
  [elements.nextDateLog, elements.importantDatesList, elements.datesList].forEach((container) => {
    container.addEventListener("click", (event) => {
      const button = event.target.closest("[data-date-plan-id]");
      if (button) {
        openDateEditor(button.dataset.datePlanId);
      }
    });
  });
  elements.activityList.addEventListener("click", (event) => {
    const row = event.target.closest("[data-activity-id]");
    if (row) {
      toggleLoveLotteryActivity(row.dataset.activityId);
    }
  });
  elements.dateEditorModal.addEventListener("click", (event) => {
    if (event.target.closest("[data-close-date-editor]")) {
      closeDateEditor();
    }
  });
  elements.wishlistEditorModal.addEventListener("click", (event) => {
    if (event.target.closest("[data-close-wishlist-editor]")) {
      closeWishlistEditor();
    }
  });
  elements.quickRewardModal.addEventListener("click", (event) => {
    if (event.target.closest("[data-close-quick-reward]")) {
      closeQuickRewardModal();
      return;
    }

    const option = event.target.closest("[data-quick-reward-type]");
    if (option) {
      void createQuickReward(option.dataset.quickRewardType);
    }
  });
  elements.milestoneRewardModal.addEventListener("click", (event) => {
    if (event.target.closest("[data-close-milestone-reward]")) {
      closeMilestoneRewardModal();
    }
  });
  elements.saveWishlistEditorButton.addEventListener("click", () => {
    void saveWishlistEditor();
  });
  elements.saveDateEditorButton.addEventListener("click", saveDateEditor);
  elements.dateEditorTypeSelect.addEventListener("change", updateDateEditorForm);
  elements.milestoneRewardTypeSelect.addEventListener("change", updateMilestoneRewardForm);
  elements.milestoneRewardDateInput.addEventListener("change", updateMilestoneRewardForm);
  elements.saveMilestoneRewardButton.addEventListener("click", () => {
    void saveMilestoneReward();
  });
  elements.loveProgressStars.addEventListener("click", (event) => {
    const button = event.target.closest("[data-milestone-reward]");
    if (button) {
      openMilestoneRewardModal(Number(button.dataset.milestoneReward));
    }
  });
  elements.dockToggleButton.addEventListener("click", () => navigateTo("/"));
  elements.dockLinks.forEach((button) => {
    button.addEventListener("click", () => {
      if (!state.dashboardGateUnlocked) {
        return;
      }

      const target = button.dataset.dockTarget;
      if (target === "dates") {
        navigateTo("/dates");
        return;
      }
      if (target === "randomizer") {
        navigateTo("/love-lottery");
        renderLoveLotteryMusic();
        playLoveLotteryMusic();
        return;
      }
      if (target === "wishlist") {
        navigateTo("/wishlist");
        playWishlistMusic({ randomize: true });
        return;
      }
      if (target === "anniversary") {
        navigateTo("/anniversary");
        return;
      }
      navigateTo("/forsophia");
    });
  });
  window.addEventListener("popstate", handleRouteChange);
  elements.adminTabs.forEach((button) => {
    button.addEventListener("click", () => setAdminTab(button.dataset.adminTab));
  });
  window.addEventListener("resize", () => {
    renderHeartPhotoFrame();
  });

  elements.enterButton.addEventListener("click", enterExperience);
  elements.skipOpeningButton.addEventListener("click", finishOpeningSequence);
  elements.backToLandingButton.addEventListener("click", () => {
    stopOpeningSequence();
    showScreen("landing");
  });
  elements.openLetterButton.addEventListener("click", () => {
    playSoundEffect("starClick");
    showLetter();
  });
  elements.puzzleLetterButton.addEventListener("click", () => {
    playSoundEffect("starClick");
    showLetter();
  });
  elements.closeLetterButton.addEventListener("click", closeLetter);

  elements.letterTitle.addEventListener("click", () => {
    const secret = "Sophia, my baby and my wifey";
    elements.letterTitle.textContent =
      elements.letterTitle.textContent === secret
        ? state.data.letter.title
        : secret;
  });

  elements.openAlbumButton.addEventListener("click", () => {
    playSoundEffect("starClick");
    openAlbum();
  });

  elements.openPuzzleButton.addEventListener("click", () => {
    if (!elements.openPuzzleButton.disabled) {
      initReveal();
      showScreen("puzzle");
    }
  });

  elements.closePuzzleButton.addEventListener("click", () => showScreen("constellation"));

  elements.memoryModal.addEventListener("click", (event) => {
    if (event.target.closest("[data-close-modal]")) {
      elements.memoryModal.hidden = true;
    }
  });

  elements.hiddenMemoryModal.addEventListener("click", (event) => {
    if (event.target.closest("[data-close-hidden-memory]")) {
      closeHiddenMemoryPopup();
    }
  });

  elements.albumModal.addEventListener("click", (event) => {
    if (event.target.closest("[data-close-album]")) {
      closeAlbum();
    }
  });
  elements.albumPrevButton.addEventListener("click", () => moveAlbum(-1));
  elements.albumNextButton.addEventListener("click", () => moveAlbum(1));

  elements.hiddenMomentButton.addEventListener("click", () => {
    const memory = state.data.memories.find((item) => item.id === state.activeMemoryId);
    if (memory) {
      playSoundEffect("starClick");
      revealHiddenMoment(memory);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (state.activeScreen === "dashboard" && !state.dashboardGateUnlocked) {
      if (/^\d$/.test(event.key)) {
        pressDashboardPinDigit(event.key);
        return;
      }

      if (event.key === "Backspace") {
        backspaceDashboardPin();
        return;
      }

      if (event.key === "Enter") {
        tryDashboardCodeUnlock();
        return;
      }
    }

    if (state.activeScreen === "anniversary" && !state.anniversary.unlockedMain) {
      if (event.key === "ArrowUp") {
        stepAnniversaryTumbler(0, 1);
        return;
      }

      if (event.key === "ArrowDown") {
        stepAnniversaryTumbler(0, -1);
        return;
      }

      if (event.key === "Backspace") {
        resetAnniversaryTumbler();
        return;
      }

      if (event.key === "Enter") {
        tryAnniversaryCodeUnlock();
        return;
      }
    }

    if (event.key !== "Escape") {
      return;
    }

    if (!elements.hiddenMemoryModal.hidden) {
      closeHiddenMemoryPopup();
      return;
    }

    if (!elements.albumModal.hidden) {
      closeAlbum();
      return;
    }

    if (!elements.memoryModal.hidden) {
      elements.memoryModal.hidden = true;
      return;
    }

    if (!elements.adminPanel.hidden) {
      closeAdmin();
      return;
    }

    if (!elements.activityListModal.hidden) {
      elements.activityListModal.hidden = true;
      return;
    }

    if (!elements.anniversaryGameModal.hidden) {
      closeAnniversaryCardGame();
      return;
    }

    if (!elements.dateEditorModal.hidden) {
      closeDateEditor();
      return;
    }

    if (!elements.wishlistEditorModal.hidden) {
      closeWishlistEditor();
      return;
    }

    if (!elements.milestoneRewardModal.hidden) {
      closeMilestoneRewardModal();
      return;
    }

    if (!elements.quickRewardModal.hidden) {
      closeQuickRewardModal();
      return;
    }

    if (!elements.mediaLibraryRail.hidden) {
      closeMediaLibraryPicker();
      return;
    }

    if (state.activeScreen === "letter") {
      closeLetter();
    }
  });

  elements.musicToggleButton.addEventListener("click", toggleMusic);
  elements.landingMusicButton.addEventListener("click", toggleMusic);
  elements.volumeInput.addEventListener("input", () => {
    elements.musicAudio.volume = Number(elements.volumeInput.value);
  });
  elements.musicAudio.addEventListener("pause", updateMusicButtons);
  elements.musicAudio.addEventListener("play", updateMusicButtons);
  elements.musicAudio.addEventListener("ended", playNextMusicTrack);

  elements.openAdminButton.addEventListener("click", openAdmin);
  elements.adminPanel.addEventListener("click", (event) => {
    if (event.target.closest("[data-close-admin]")) {
      closeAdmin();
    }
  });

  elements.signInButton.addEventListener("click", signInWithPassword);
  elements.sendMagicLinkButton.addEventListener("click", sendMagicLink);
  elements.signOutButton.addEventListener("click", signOut);
  elements.reloadRemoteButton.addEventListener("click", loadRemoteData);
  elements.sendTestEmailButton.addEventListener("click", sendTestEmail);

  elements.adminForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    syncAdminFieldsToData();
    state.data = normalizeData(state.data);
    saveData();
    renderApp();
    renderAdminForm();
    initReveal();

    if (SUPABASE_CONFIGURED) {
      const remote = await saveRemoteData();
      await saveRemoteLoveLotteryProgress();
      renderAdminAuth();
      showToast(remote.saved ? "Changes saved online" : "Saved locally", remote.saved ? "Supabase is updated." : remote.reason);
      return;
    }

    showToast("Changes saved", "Preview updated in this browser.");
  });

  elements.addMemoryButton.addEventListener("click", addMemory);
  elements.adminMusicInputs.forEach((input) => {
    input.addEventListener("change", (event) => handleMusicInput(event.target));
  });
  elements.adminMusicVolume.addEventListener("input", () => {
    const previousMusicVolume = normalizeMusic(state.data.music, DEFAULT_DATA.music).volume;
    state.data.music = {
      ...normalizeMusic(state.data.music, DEFAULT_DATA.music),
      volume: clampNumber(Number(elements.adminMusicVolume.value), 0, 1, DEFAULT_DATA.music.volume),
    };
    syncDefaultSoundEffectVolumes(previousMusicVolume, state.data.music.volume);
    renderMusic();
    prepareSoundEffectPlayers();
    renderSoundLibraryForm();
  });
  elements.loveLotteryMusicInput.addEventListener("change", (event) => handleLoveLotteryMusicInput(event.target));
  elements.loveLotteryMusicVolume.addEventListener("input", () => {
    state.data.loveLottery = normalizeLoveLotterySettings(state.data.loveLottery, DEFAULT_DATA.loveLottery);
    state.data.loveLottery.music.volume = clampNumber(
      Number(elements.loveLotteryMusicVolume.value),
      0,
      1,
      DEFAULT_DATA.loveLottery.music.volume
    );
    renderLoveLotteryMusic();
    renderLoveLotteryAdminForm();
  });
  elements.clearLoveLotteryMusicButton.addEventListener("click", () => {
    state.data.loveLottery = normalizeLoveLotterySettings(state.data.loveLottery, DEFAULT_DATA.loveLottery);
    state.data.loveLottery.music = structuredClone(DEFAULT_DATA.loveLottery.music);
    elements.loveLotteryAudio.pause();
    renderLoveLotteryMusic();
    renderLoveLotteryAdminForm();
    showToast("Love Lottery music cleared", "Save changes to remove it online.");
  });
  elements.anniversaryAdminCardList.addEventListener("change", (event) => {
    if (event.target.matches("[data-anniversary-field]")) {
      syncAdminFieldsToData();
      renderAnniversary();
      renderAnniversaryAdminForm();
      return;
    }

    if (event.target.matches("[data-anniversary-image-input]")) {
      void handleAnniversaryImageInput(event.target);
      return;
    }

    if (event.target.matches("[data-anniversary-pair-image-input]")) {
      void handleAnniversaryPairImageInput(event.target);
    }
  });
  elements.anniversaryAdminCardList.addEventListener("input", (event) => {
    if (event.target.matches("[data-anniversary-field]")) {
      syncAdminFieldsToData();
      renderAnniversary();
      return;
    }

    if (event.target.matches('[data-anniversary-pair-field="imagePositionY"]')) {
      const pairIndex = event.target.dataset.anniversaryPairIndex;
      const editor = event.target.closest("[data-anniversary-pair-index]");
      const value = String(clampNumber(Number(event.target.value), 0, 100, 50));
      if (editor && pairIndex) {
        editor.querySelectorAll(`[data-anniversary-pair-field="imagePositionY"][data-anniversary-pair-index="${pairIndex}"]`).forEach((field) => {
          if (field !== event.target) {
            field.value = value;
          }
        });
        const preview = editor.querySelector(".anniversary-memory-photo");
        if (preview) {
          preview.style.backgroundPosition = `center ${value}%`;
        }
      }
      syncAdminFieldsToData();
      renderAnniversary();
      return;
    }

    if (event.target.matches("[data-anniversary-pair-field]")) {
      syncAdminFieldsToData();
      renderAnniversary();
    }
  });
  elements.anniversaryAdminCardList.addEventListener("click", (event) => {
    const openLibraryButton = event.target.closest("[data-open-anniversary-pair-library]");
    if (openLibraryButton) {
      const [cardIndexRaw, pairIndexRaw] = String(openLibraryButton.dataset.openAnniversaryPairLibrary).split(":");
      openMediaLibraryPicker({
        type: "anniversaryPair",
        cardIndex: Number(cardIndexRaw),
        pairIndex: Number(pairIndexRaw),
      });
      return;
    }

    const clearButton = event.target.closest("[data-clear-anniversary-image]");
    if (clearButton) {
      const index = Number(clearButton.dataset.clearAnniversaryImage);
      state.data.anniversary = normalizeAnniversarySettings(state.data.anniversary, DEFAULT_DATA.anniversary);
      if (state.data.anniversary.cards[index]) {
        state.data.anniversary.cards[index].image = "";
        state.data.anniversary.cards[index].imageName = "";
        renderAnniversary();
        renderAnniversaryAdminForm();
        showToast("Card image cleared", "Save changes to keep this update.");
      }
      return;
    }

    const clearPairButton = event.target.closest("[data-clear-anniversary-pair-image]");
    if (clearPairButton) {
      const [cardIndexRaw, pairIndexRaw] = String(clearPairButton.dataset.clearAnniversaryPairImage).split(":");
      const cardIndex = Number(cardIndexRaw);
      const pairIndex = Number(pairIndexRaw);
      state.data.anniversary = normalizeAnniversarySettings(state.data.anniversary, DEFAULT_DATA.anniversary);
      const pair = state.data.anniversary.cards[cardIndex]?.matchingPairs?.[pairIndex];
      if (pair) {
        pair.image = "";
        pair.imageName = "";
        pair.imagePositionY = 50;
        renderAnniversaryAdminForm();
        showToast("Pair image cleared", "Save changes to keep this update.");
      }
    }
  });
  elements.anniversaryAdminCardTabs.addEventListener("click", (event) => {
    const button = event.target.closest("[data-anniversary-admin-card-tab]");
    if (!button) {
      return;
    }

    syncAdminFieldsToData();
    state.anniversaryAdminActiveCardIndex = Number(button.dataset.anniversaryAdminCardTab);
    renderAnniversaryAdminForm();
  });
  elements.mediaLibraryRail.addEventListener("click", (event) => {
    if (event.target.closest("[data-close-media-library]")) {
      closeMediaLibraryPicker();
      return;
    }

    const item = event.target.closest("[data-media-library-select]");
    if (item) {
      selectMediaLibraryImage(Number(item.dataset.mediaLibrarySelect));
    }
  });
  elements.resetAnniversaryProgressButton.addEventListener("click", resetAnniversaryProgress);
  elements.anniversaryAdminOverrideToggle.addEventListener("change", () => {
    state.anniversaryAdminOverride = elements.anniversaryAdminOverrideToggle.checked;
    saveAnniversaryAdminOverride();
    renderAnniversary();
    renderAnniversaryAdminForm();
    showToast(
      state.anniversaryAdminOverride ? "Override mode on" : "Override mode off",
      state.anniversaryAdminOverride
        ? "All anniversary levels are open for testing only."
        : "Anniversary levels are back to the normal lock order."
    );
  });
  elements.clearMusicButton.addEventListener("click", () => {
    state.data.music = {
      ...structuredClone(DEFAULT_DATA.music),
      volume: clampNumber(Number(elements.adminMusicVolume.value), 0, 1, DEFAULT_DATA.music.volume),
    };
    state.activeTrackIndex = 0;
    renderMusic();
    renderAdminForm();
    showToast("Music cleared", "Save changes to remove the track online.");
  });
  elements.soundEffectInputs.forEach((input) => {
    input.addEventListener("change", (event) => handleSoundEffectInput(event.target));
  });
  elements.soundEffectVolumeInputs.forEach((input) => {
    input.addEventListener("input", () => {
      const key = input.dataset.sfxVolume;
      const music = normalizeMusic(state.data.music, DEFAULT_DATA.music);
      state.data.soundEffects = normalizeSoundEffects(state.data.soundEffects, DEFAULT_DATA.soundEffects, music.volume);
      if (state.data.soundEffects[key]) {
        state.data.soundEffects[key].volume = clampNumber(Number(input.value), 0, 1, music.volume);
        prepareSoundEffectPlayers();
      }
    });
  });
  elements.clearSoundEffectsButton.addEventListener("click", () => {
    const music = normalizeMusic(state.data.music, DEFAULT_DATA.music);
    state.data.soundEffects = normalizeSoundEffects({}, DEFAULT_DATA.soundEffects, music.volume);
    prepareSoundEffectPlayers();
    renderSoundLibraryForm();
    showToast("Sound effects cleared", "Save changes to remove them online.");
  });
  elements.clearPuzzleImageButton.addEventListener("click", () => {
    state.data.puzzleImage = "";
    showToast("Puzzle image cleared", "Save changes to keep this update.");
  });
  elements.adminPuzzleImage.addEventListener("change", (event) => handlePuzzleImageInput(event.target));
  elements.letterPhotoInputs.forEach((input) => {
    input.addEventListener("change", (event) => handleLetterPhotoInput(event.target));
  });
  elements.clearLetterPhotosButton.addEventListener("click", () => {
    state.data.letter.photos = structuredClone(DEFAULT_DATA.letter.photos);
    renderLetter();
    renderLetterPhotoStatus();
    showToast("Letter photos cleared", "Save changes to remove them online.");
  });
  elements.exportJsonButton.addEventListener("click", exportJson);
  elements.importJsonInput.addEventListener("change", (event) => importJson(event.target));
  elements.resetProgressButton.addEventListener("click", resetProgress);
  elements.resetDataButton.addEventListener("click", resetData);

  elements.memoryEditorList.addEventListener("input", (event) => {
    if (event.target.matches("[data-field]")) {
      syncAdminFieldsToData();
    }
  });

  elements.memoryEditorList.addEventListener("change", (event) => {
    if (event.target.matches("[data-media-input]")) {
      handleMemoryMediaInput(event.target);
    }

    if (event.target.matches("[data-heart-photo-input]")) {
      handleHeartPhotoInput(event.target);
    }
  });

  elements.memoryEditorList.addEventListener("click", (event) => {
    const removeButton = event.target.closest("[data-remove-memory]");
    if (removeButton) {
      removeMemory(Number(removeButton.dataset.removeMemory));
      return;
    }

    const clearButton = event.target.closest("[data-clear-media]");
    if (clearButton) {
      const index = Number(clearButton.dataset.clearMedia);
      if (state.data.memories[index]) {
        state.data.memories[index].image = "";
        state.data.memories[index].mediaType = "image";
        state.data.memories[index].media = [];
        renderMemoryEditors();
        showToast("Media cleared", "Save changes to keep this update.");
      }
    }

    const clearHeartButton = event.target.closest("[data-clear-heart-photo]");
    if (clearHeartButton) {
      const index = Number(clearHeartButton.dataset.clearHeartPhoto);
      if (state.data.memories[index]) {
        state.data.memories[index].heartPhoto = { url: "", name: "" };
        renderMemoryEditors();
        showToast("Heart photo cleared", "Save changes to keep this update.");
      }
    }
  });
}

function enterExperience() {
  unlockSoundEffects();
  document.body.classList.add("is-entered");
  const el = document.documentElement;
  if (el.requestFullscreen) {
    el.requestFullscreen().catch(() => {});
  } else if (el.webkitRequestFullscreen) {
    el.webkitRequestFullscreen();
  }
  if (elements.musicAudio.src && elements.musicAudio.paused) {
    elements.musicAudio.play().catch(() => {
      showToast("Music blocked", "Use the music play button once the constellation opens.");
    });
  }

  startOpeningSequence();
}

function startOpeningSequence() {
  stopOpeningSequence();
  state.openingIndex = 0;
  renderOpeningStep();
  showScreen("opening");
  scheduleOpeningStep();
}

function scheduleOpeningStep() {
  state.openingTimer = window.setTimeout(() => {
    if (state.openingIndex >= OPENING_SEQUENCE.length - 1) {
      finishOpeningSequence();
      return;
    }

    state.openingIndex += 1;
    renderOpeningStep();
    scheduleOpeningStep();
  }, 6300);
}

function stopOpeningSequence() {
  if (state.openingTimer) {
    window.clearTimeout(state.openingTimer);
    state.openingTimer = null;
  }
}

function finishOpeningSequence() {
  stopOpeningSequence();
  showScreen("constellation");
}

function renderOpeningStep() {
  const step = OPENING_SEQUENCE[state.openingIndex];
  elements.openingKicker.textContent = step.kicker;
  elements.openingTitle.textContent = step.title;
  elements.openingLine.textContent = step.line;
  elements.openingLetter.classList.remove("is-unfolding");
  void elements.openingLetter.offsetWidth;
  elements.openingLetter.classList.add("is-unfolding");

  elements.openingProgress.innerHTML = "";
  const bar = document.createElement("span");
  bar.style.setProperty("--opening-progress-duration", "6300ms");
  elements.openingProgress.append(bar);
}

async function sendTestEmail() {
  if (!state.session?.access_token) {
    showToast("Sign in first", "Use your Supabase admin login before sending a test email.");
    return;
  }

  const to = elements.emailRecipientInput.value.trim();
  const pageUrl = elements.emailPageUrlInput.value.trim() || window.location.origin;
  const fromName = elements.emailFromNameInput.value.trim();

  if (!to) {
    showToast("Recipient required", "Enter the email address you want to test.");
    return;
  }

  elements.sendTestEmailButton.disabled = true;
  elements.emailInviteStatus.textContent = `Sending test email to ${to}...`;

  try {
    const response = await fetch("/api/send-test-email", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${state.session.access_token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ to, pageUrl, fromName }),
    });
    const result = await response.json().catch(() => ({}));

    if (!response.ok) {
      throw new Error(result.error || `Email failed with status ${response.status}.`);
    }

    elements.emailInviteStatus.textContent = `Sent to ${to}.`;
    showToast("Email sent", result.message || "The test invitation was sent.");
  } catch (error) {
    const message = error instanceof Error ? error.message : "The email endpoint did not respond.";
    elements.emailInviteStatus.textContent = message;
    showToast("Email failed", message);
  } finally {
    elements.sendTestEmailButton.disabled = !state.session?.access_token;
  }
}

async function sendMagicLink() {
  if (!SUPABASE_CONFIGURED) {
    showToast("Supabase missing", "Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY first.");
    return;
  }

  const email = elements.adminEmailInput.value.trim();
  if (!email) {
    showToast("Email required", "Enter your admin email first.");
    return;
  }

  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: AUTH_REDIRECT_TO,
    },
  });

  showToast(error ? "Magic link failed" : "Magic link sent", error ? error.message : "Open the email link in this browser.");
}

async function signInWithPassword() {
  if (!SUPABASE_CONFIGURED) {
    showToast("Supabase missing", "Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY first.");
    return;
  }

  const email = elements.adminEmailInput.value.trim();
  const password = elements.adminPasswordInput.value;

  if (!email || !password) {
    showToast("Email and password required", "Enter the Supabase Auth email and password.");
    return;
  }

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    showToast("Sign in failed", error.message);
    return;
  }

  state.session = data.session;
  elements.adminPasswordInput.value = "";
  renderAdminAuth();
  await loadRemoteData();
  showToast("Signed in", "Online editing is enabled.");
}

async function signOut() {
  if (!SUPABASE_CONFIGURED) {
    return;
  }

  await supabase.auth.signOut();
  state.session = null;
  renderAdminAuth();
  showToast("Signed out", "Online editing is disabled until you sign in again.");
}

function openAdmin() {
  renderAdminForm();
  elements.adminPanel.hidden = false;
}

function closeAdmin() {
  elements.adminPanel.hidden = true;

  if (isAdminRoute()) {
    window.history.replaceState({}, "", "/");
  }
}

async function toggleMusic() {
  if (!elements.musicAudio.src) {
    showToast("No music yet", "Add a track in the admin dashboard.");
    return;
  }

  if (elements.musicAudio.paused) {
    try {
      await elements.musicAudio.play();
    } catch {
      showToast("Music blocked", "Press play again or check the saved audio file.");
    }
  } else {
    elements.musicAudio.pause();
  }
}

function updateMusicButtons() {
  const isPlaying = !elements.musicAudio.paused;
  elements.musicIcon.textContent = isPlaying ? "Pause" : "Play";
  elements.musicToggleButton.setAttribute("aria-label", isPlaying ? "Pause music" : "Play music");
  elements.landingMusicButton.textContent = isPlaying ? "Pause music" : "Play music";
}

function showToast(title, message) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<span>${escapeHtml(title)}</span>${escapeHtml(message)}`;
  elements.toastHost.append(toast);

  window.setTimeout(() => {
    toast.remove();
  }, 4200);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function escapeAttribute(value) {
  return escapeHtml(value).replace(/`/g, "&#096;");
}

function initAmbientCanvas() {
  const canvas = elements.ambientCanvas;
  const context = canvas.getContext("2d");
  const motionAllowed = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let stars = [];

  function resize() {
    const ratio = window.devicePixelRatio || 1;
    canvas.width = Math.floor(window.innerWidth * ratio);
    canvas.height = Math.floor(window.innerHeight * ratio);
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    context.setTransform(ratio, 0, 0, ratio, 0, 0);

    const count = Math.max(150, Math.floor((window.innerWidth * window.innerHeight) / 5200));
    stars = Array.from({ length: count }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      radius: Math.random() * 1.55 + 0.25,
      alpha: Math.random() * 0.55 + 0.2,
      speed: Math.random() * 0.09 + 0.012,
      twinkle: Math.random() * Math.PI * 2,
      twinkleSpeed: Math.random() * 0.025 + 0.008,
      flare: Math.random() > 0.88,
    }));
  }

  function draw() {
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    stars.forEach((star) => {
      const twinkle = motionAllowed ? (Math.sin(star.twinkle) + 1) * 0.22 : 0.12;
      context.globalAlpha = Math.min(1, star.alpha + twinkle);
      context.fillStyle = star.flare ? "rgba(246, 166, 186, 0.88)" : "rgba(255, 250, 240, 0.86)";
      context.beginPath();
      context.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      context.fill();

      if (star.flare) {
        context.globalAlpha = Math.min(0.7, star.alpha + twinkle);
        context.strokeStyle = "rgba(255, 250, 240, 0.62)";
        context.lineWidth = 0.7;
        context.beginPath();
        context.moveTo(star.x - star.radius * 3.2, star.y);
        context.lineTo(star.x + star.radius * 3.2, star.y);
        context.moveTo(star.x, star.y - star.radius * 3.2);
        context.lineTo(star.x, star.y + star.radius * 3.2);
        context.stroke();
      }

      if (motionAllowed) {
        star.twinkle += star.twinkleSpeed;
        star.y -= star.speed;
        star.x += Math.sin(star.y * 0.01) * 0.02;

        if (star.y < -2) {
          star.y = window.innerHeight + 2;
          star.x = Math.random() * window.innerWidth;
        }
      }
    });

    context.globalAlpha = 1;
    window.requestAnimationFrame(draw);
  }

  resize();
  draw();
  window.addEventListener("resize", resize);
}

function initLoveTrail() {
  const canvas = elements.loveTrailCanvas;
  const context = canvas.getContext("2d");
  const motionAllowed = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const particles = [];

  if (!motionAllowed) {
    return;
  }

  function resize() {
    const ratio = window.devicePixelRatio || 1;
    canvas.width = Math.floor(window.innerWidth * ratio);
    canvas.height = Math.floor(window.innerHeight * ratio);
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
  }

  function addParticle(x, y, options = {}) {
    if (state.activeScreen !== "landing") {
      return;
    }

    particles.push({
      x,
      y,
      vx: (options.burst ? -0.8 + Math.random() * 1.6 : -0.35 - Math.random() * 0.7),
      vy: options.burst ? -0.9 + Math.random() * 1.8 : (Math.random() - 0.5) * 0.6,
      life: 1,
      size: (options.burst ? 4 : 3) + Math.random() * 4,
      hue: Math.random() > 0.5 ? "rose" : "gold",
    });

    if (particles.length > 90) {
      particles.shift();
    }
  }

  function addTrailPoint(x, y, burst = false) {
    const count = burst ? 8 : 2;
    for (let index = 0; index < count; index += 1) {
      addParticle(
        x - 10 - Math.random() * 14 + (Math.random() - 0.5) * (burst ? 34 : 4),
        y + (Math.random() - 0.5) * (burst ? 34 : 16),
        { burst }
      );
    }
  }

  function drawHeart(x, y, size) {
    context.beginPath();
    context.moveTo(x, y + size * 0.32);
    context.bezierCurveTo(x - size, y - size * 0.35, x - size * 0.38, y - size, x, y - size * 0.32);
    context.bezierCurveTo(x + size * 0.38, y - size, x + size, y - size * 0.35, x, y + size * 0.32);
    context.fill();
  }

  function draw() {
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);

    particles.forEach((particle, index) => {
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.life -= 0.018;
      particle.size *= 0.994;

      if (particle.life <= 0) {
        particles.splice(index, 1);
        return;
      }

      context.globalAlpha = Math.max(0, particle.life);
      context.fillStyle = particle.hue === "rose" ? "rgba(246, 166, 186, 0.82)" : "rgba(243, 211, 134, 0.72)";
      drawHeart(particle.x, particle.y, particle.size);
    });

    context.globalAlpha = 1;
    window.requestAnimationFrame(draw);
  }

  let lastMove = 0;
  elements.landingScreen.addEventListener("pointermove", (event) => {
    const now = performance.now();
    if (now - lastMove < 28) {
      return;
    }

    lastMove = now;
    addTrailPoint(event.clientX, event.clientY);
  });

  elements.landingScreen.addEventListener("pointerdown", (event) => {
    addTrailPoint(event.clientX, event.clientY, true);
  });

  elements.landingScreen.addEventListener("touchstart", (event) => {
    Array.from(event.touches).forEach((touch) => addTrailPoint(touch.clientX, touch.clientY, true));
  }, { passive: true });

  elements.landingScreen.addEventListener("touchmove", (event) => {
    const now = performance.now();
    if (now - lastMove < 36) {
      return;
    }

    lastMove = now;
    Array.from(event.touches).forEach((touch) => addTrailPoint(touch.clientX, touch.clientY));
  }, { passive: true });

  resize();
  draw();
  window.addEventListener("resize", resize);
}

init();
