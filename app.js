import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || "";
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || "";
const MEDIA_BUCKET = import.meta.env.VITE_SUPABASE_MEDIA_BUCKET || "constellation-media";
const PAGE_ID = import.meta.env.VITE_CONSTELLATION_PAGE_ID || "sophia";
const AUTH_REDIRECT_TO = import.meta.env.VITE_SUPABASE_REDIRECT_TO || `${window.location.origin}/admin`;
const SUPABASE_CONFIGURED = Boolean(SUPABASE_URL && SUPABASE_ANON_KEY);
const supabase = SUPABASE_CONFIGURED ? createClient(SUPABASE_URL, SUPABASE_ANON_KEY) : null;

const STORAGE_KEYS = {
  data: "sophiaConstellation:data",
  progress: "sophiaConstellation:progress",
  layout: "sophiaConstellation:layout",
  loveLottery: "sophiaConstellation:loveLottery",
  wishlist: "sophiaConstellation:wishlist",
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

const SHOPPING_ACTIVITIES = [
  "Go shopping together with a tiny treat budget",
  "Shop for clothes and pick one outfit for each other",
  "Do a cozy grocery shopping trip for tonight's dinner",
  "Find a small gift for my baby",
  "Visit a bookstore and choose a book for each other",
  "Pick out matching socks or pajamas",
  "Buy ingredients for a dessert we have never made",
  "Choose a candle or room spray for our space",
  "Browse a thrift store and find the cutest item",
  "Pick one new snack from every aisle we visit",
  "Shop for flowers and build a little bouquet",
  "Choose a framed photo or print for our room",
  "Find a silly kitchen tool we would actually use",
  "Buy supplies for a mini craft night",
  "Pick a surprise drink for each other",
];

const LOVE_LOTTERY_ACTIONS = [
  (task) => `Do this for Sophia today: ${task}`,
  (task) => `Make her day easier by choosing to ${task}`,
  (task) => `Show love through action: ${task}`,
  (task) => `Take one thing off her plate: ${task}`,
  (task) => `Make the space feel calmer: ${task}`,
  (task) => `Do this without being asked: ${task}`,
  (task) => `Prepare a little care moment: ${task}`,
  (task) => `Be thoughtful and ${task}`,
  (task) => `Make today softer by doing this: ${task}`,
  (task) => `Handle a small responsibility: ${task}`,
  (task) => `Leave proof of love by doing this: ${task}`,
];

const LOVE_LOTTERY_THEMES = [
  "wash the dishes or clear the sink",
  "wipe down the kitchen counters",
  "take out the trash and replace the bag",
  "fold a laundry load neatly",
  "start a laundry load before it piles up",
  "make the bed extra nicely",
  "tidy the room for ten focused minutes",
  "clear the car of cups, wrappers, and clutter",
  "prep a simple breakfast or snack",
  "make her a drink exactly how she likes it",
  "refill her water and remind her gently",
  "pack or prep something she needs tomorrow",
  "charge her phone or device if it is low",
  "warm up or plate food for her",
  "plan dinner before she has to ask",
  "handle one errand she has been avoiding",
  "check whether she needs anything from the store",
  "organize one messy drawer, shelf, or surface",
  "restock something useful before it runs out",
  "clean the bathroom mirror or sink",
  "sweep or vacuum one shared area",
  "put fresh towels out",
  "light a candle and reset the room",
  "write a short note naming one thing you appreciate",
  "send a thoughtful check-in message",
  "ask what would make her day easier and do it",
  "give her twenty quiet minutes to rest",
  "handle the next small decision for both of you",
  "set out a cozy blanket or pillow",
  "prepare a comfort snack plate",
  "rub her shoulders or hands for five minutes",
  "make a small apology or thank-you specific",
  "look up one solution to something stressing her",
  "set a reminder for something important to her",
  "do one task she normally carries alone",
];

const DATE_PLAN_IDEAS = [
  "sunset picnic", "cozy movie night", "coffee shop morning", "bookstore date", "museum afternoon",
  "farmers market walk", "beach sunset", "park picnic", "arcade night", "dessert crawl",
  "fancy dinner", "home pasta night", "mini road trip", "photo booth date", "paint night",
  "ice cream walk", "brunch date", "garden stroll", "candlelit dinner", "breakfast in bed",
  "boba and board games", "thrift store challenge", "rooftop view night", "aquarium day", "spa night at home",
];

const DATE_PREP_TASKS = [
  "pick the day and time",
  "choose one outfit idea",
  "save one place to go",
  "write Sophia a tiny invite",
];

const LOVE_LOTTERY_ACTIVITIES = buildLoveLotteryActivities();

const state = {
  data: loadData(),
  progress: loadProgress(),
  loveLottery: loadLoveLotteryProgress(),
  wishlist: loadWishlistItems(),
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
  revealComplete: false,
  revealListeners: null,
};

const elements = {
  ambientCanvas: document.querySelector("#ambientCanvas"),
  loveTrailCanvas: document.querySelector("#loveTrailCanvas"),
  dashboardScreen: document.querySelector("#dashboardScreen"),
  wishlistScreen: document.querySelector("#wishlistScreen"),
  randomizerScreen: document.querySelector("#randomizerScreen"),
  openSophiaPageButton: document.querySelector("#openSophiaPageButton"),
  openRandomizerButton: document.querySelector("#openRandomizerButton"),
  openWishlistButton: document.querySelector("#openWishlistButton"),
  wishlistHomeButton: document.querySelector("#wishlistHomeButton"),
  wishlistTabs: Array.from(document.querySelectorAll("[data-wishlist-tab]")),
  wishlistPanels: Array.from(document.querySelectorAll("[data-wishlist-panel]")),
  wishlistForms: Array.from(document.querySelectorAll("[data-wishlist-added-by]")),
  wishlistCalvinList: document.querySelector("#wishlistCalvinList"),
  wishlistList: document.querySelector("#wishlistList"),
  randomizerHomeButton: document.querySelector("#randomizerHomeButton"),
  heartPhotoFrame: document.querySelector("#heartPhotoFrame"),
  randomizerStage: document.querySelector("#randomizerStage"),
  randomizerResult: document.querySelector("#randomizerResult"),
  randomizerTask: document.querySelector("#randomizerTask"),
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
  nextDateLog: document.querySelector("#nextDateLog"),
  loveLotteryAudio: document.querySelector("#loveLotteryAudio"),
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

function saveLoveLotteryProgress() {
  state.loveLottery = normalizeLoveLotteryProgress(state.loveLottery);
  localStorage.setItem(STORAGE_KEYS.loveLottery, JSON.stringify(state.loveLottery));
  void saveRemoteLoveLotteryProgress();
}

function normalizeLoveLotteryProgress(progress = {}) {
  const markedIds = Array.isArray(progress.markedIds) ? progress.markedIds : [];
  return {
    markedIds,
    completionCount: clampNumber(Number(progress.completionCount), 0, 500, markedIds.length),
    log: Array.isArray(progress.log) ? progress.log : [],
    nextDatePlan: progress.nextDatePlan || null,
  };
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

function normalizeWishlistItems(items) {
  return (Array.isArray(items) ? items : [])
    .map((item) => ({
      id: item.id || crypto.randomUUID?.() || `wish-${Date.now()}-${Math.round(Math.random() * 100000)}`,
      page_id: item.page_id || PAGE_ID,
      item_name: item.item_name || item.name || "",
      item_url: item.item_url || item.url || "",
      added_by: normalizeWishlistPerson(item.added_by || item.addedBy || "Sophia"),
      purchased: Boolean(item.purchased),
      created_at: item.created_at || new Date().toISOString(),
      updated_at: item.updated_at || new Date().toISOString(),
    }))
    .filter((item) => item.item_name && /^https?:\/\//i.test(item.item_url));
}

function normalizeWishlistPerson(value) {
  return String(value).toLowerCase() === "calvin" ? "Calvin" : "Sophia";
}

function saveWishlistItems() {
  state.wishlist = normalizeWishlistItems(state.wishlist);
  localStorage.setItem(STORAGE_KEYS.wishlist, JSON.stringify(state.wishlist));
}

function buildLoveLotteryActivities() {
  const generated = [];
  LOVE_LOTTERY_ACTIONS.forEach((action) => {
    LOVE_LOTTERY_THEMES.forEach((theme) => {
      generated.push(action(theme));
    });
  });

  const dateActivities = buildDatePlanActivities();
  const everydayActivities = generated.slice(0, 500 - SHOPPING_ACTIVITIES.length - dateActivities.length).map((label, index) => ({
    id: `daily-${index + 1}`,
    label,
    category: "daily",
  }));

  const shoppingActivities = SHOPPING_ACTIVITIES.map((label, index) => ({
    id: `shopping-${index + 1}`,
    label,
    category: "shopping",
  }));

  return [...shoppingActivities, ...dateActivities, ...everydayActivities];
}

function buildDatePlanActivities() {
  return DATE_PLAN_IDEAS.flatMap((idea, ideaIndex) =>
    DATE_PREP_TASKS.map((task, taskIndex) => ({
      id: `date-${ideaIndex + 1}-${taskIndex + 1}`,
      label: `Plan a ${idea} for Sophia: ${task}`,
      task: `Small task today: ${task}.`,
      category: "date",
    }))
  );
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

function getScreenForPath() {
  const path = getNormalizedPath();
  if (path === "/forsophia" || path === "/admin") {
    return "landing";
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
    renderLoveLottery();
  }
}

async function saveRemoteLoveLotteryProgress() {
  if (!SUPABASE_CONFIGURED || !state.session?.user?.id) {
    return { saved: false, reason: "Sign in before saving Love Lottery progress online." };
  }

  const payload = {
    page_id: PAGE_ID,
    owner_id: state.session.user.id,
    progress: normalizeLoveLotteryProgress(state.loveLottery),
    updated_at: new Date().toISOString(),
  };

  const { error } = await supabase
    .from("love_lottery_progress")
    .upsert(payload, { onConflict: "page_id" });

  if (error) {
    state.remoteMessage = `Love Lottery progress save failed: ${error.message}`;
    renderAdminAuth();
    return { saved: false, reason: error.message };
  }

  return { saved: true };
}

async function loadRemoteWishlistItems() {
  if (!SUPABASE_CONFIGURED) {
    return;
  }

  const { data, error } = await supabase
    .from("wishlist_items")
    .select("id,page_id,item_name,item_url,added_by,purchased,created_at,updated_at")
    .eq("page_id", PAGE_ID)
    .order("created_at", { ascending: false });

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

  const { data, error } = await supabase
    .from("wishlist_items")
    .insert({
      page_id: PAGE_ID,
      item_name: item.item_name,
      item_url: item.item_url,
      added_by: item.added_by,
      purchased: false,
    })
    .select("id,page_id,item_name,item_url,added_by,purchased,created_at,updated_at")
    .single();

  if (error) {
    return { saved: false, reason: error.message };
  }

  return { saved: true, item: data };
}

async function updateRemoteWishlistItem(item) {
  if (!SUPABASE_CONFIGURED) {
    return { saved: false };
  }

  const { error } = await supabase
    .from("wishlist_items")
    .update({
      item_name: item.item_name,
      item_url: item.item_url,
      added_by: item.added_by,
      purchased: item.purchased,
      updated_at: new Date().toISOString(),
    })
    .eq("id", item.id)
    .eq("page_id", PAGE_ID);

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
  renderWishlist();
  prepareSoundEffectPlayers();
  renderHeartPhotoFrame();
  renderStars();
  renderLines();
  renderProgress();
  renderLetter();
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
  const remaining = LOVE_LOTTERY_ACTIVITIES.filter((activity) => activity.category === "shopping" || !marked.has(activity.id));
  const completedCount = getLoveLotteryCompletionCount();
  const total = LOVE_LOTTERY_ACTIVITIES.length;

  elements.activityCount.textContent = `${completedCount} / ${total} progress`;
  elements.markDateButton.disabled =
    !state.selectedActivityId ||
    getLoveLotterySpinsToday() >= 3 ||
    (marked.has(state.selectedActivityId) && getLoveLotteryActivity(state.selectedActivityId)?.category !== "shopping");
  elements.spinDateButton.disabled = getLoveLotterySpinsToday() >= 3;
  elements.spinDateButton.textContent = getLoveLotterySpinsToday() >= 3 ? "Done" : "Spin";
  renderLoveLotteryProgress(completedCount, total);
  renderNextDateLog();
  if (!state.selectedActivityId) {
    elements.randomizerResult.textContent = formatLoveLotteryDate();
    elements.randomizerTask.hidden = true;
    elements.randomizerTask.textContent = "";
  }

  elements.activityList.innerHTML = "";
  LOVE_LOTTERY_ACTIVITIES.forEach((activity) => {
    const row = document.createElement("button");
    row.className = "activity-row";
    row.type = "button";
    row.dataset.activityId = activity.id;
    row.classList.toggle("is-marked", marked.has(activity.id));
    row.classList.toggle("is-selected", state.selectedActivityId === activity.id);

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
        ${renderWishlistPersonTags(item.added_by)}
        <a href="${escapeAttribute(item.item_url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(getUrlHost(item.item_url))}</a>
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
      <a class="wishlist-open-link" href="${escapeAttribute(item.item_url)}" target="_blank" rel="noopener noreferrer">Open link</a>
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
  await updateRemoteWishlistItem(item);
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

function getLoveLotterySpinsToday() {
  const todayKey = new Date().toDateString();
  return (Array.isArray(state.loveLottery.log) ? state.loveLottery.log : []).filter((entry) => {
    if (!entry?.loggedAt) {
      return false;
    }

    return new Date(entry.loggedAt).toDateString() === todayKey;
  }).length;
}

function formatLoveLotteryDate(date = new Date()) {
  return date.toLocaleDateString(undefined, { weekday: "long", month: "long", day: "numeric" });
}

function getFutureDatePlan(activity) {
  const weeks = Math.random() < 0.5 ? 1 : 2;
  const date = new Date();
  date.setDate(date.getDate() + weeks * 7);
  return {
    id: activity.id,
    label: activity.label,
    task: activity.task,
    weeks,
    scheduledFor: date.toISOString(),
    createdAt: new Date().toISOString(),
  };
}

function formatDatePlan(plan) {
  const date = new Date(plan.scheduledFor);
  return `${plan.label} in ${plan.weeks} ${plan.weeks === 1 ? "week" : "weeks"} (${formatLoveLotteryDate(date)})`;
}

function renderNextDateLog() {
  const plan = state.loveLottery.nextDatePlan;
  if (!plan?.scheduledFor) {
    elements.nextDateLog.hidden = true;
    elements.nextDateLog.textContent = "";
    return;
  }

  elements.nextDateLog.hidden = false;
  elements.nextDateLog.innerHTML = `
    <span>Next date</span>
    <strong>${escapeHtml(formatDatePlan(plan))}</strong>
    <em>${escapeHtml(plan.task || "")}</em>
  `;
}

function renderLoveLotteryProgress(completedCount, total) {
  const clamped = clampNumber(completedCount, 0, total, 0);
  const nextStar = Math.min(total, Math.ceil((clamped + 1) / 30) * 30);
  elements.loveProgressCount.textContent = `${clamped} / ${total}`;
  elements.loveProgressNext.textContent = clamped >= total ? "Every star is full" : `Next: plan a date, trip, or gift for Sophia at ${nextStar}`;
  elements.loveProgressFill.style.width = `${Math.max(0, (clamped / total) * elements.loveProgressStars.scrollWidth)}px`;
  elements.loveProgressStars.innerHTML = "";

  for (let milestone = 30; milestone <= total; milestone += 30) {
    const milestoneBox = document.createElement("span");
    milestoneBox.className = "love-progress-star";
    milestoneBox.classList.toggle("is-complete", clamped >= milestone);
    milestoneBox.title = getLoveLotteryMilestoneLabel(milestone);

    const star = document.createElement("span");
    star.className = "love-progress-star-icon";
    star.textContent = "★";

    const label = document.createElement("span");
    label.className = "love-progress-star-label";
    label.textContent = String(milestone);

    milestoneBox.append(star, label);
    elements.loveProgressStars.append(milestoneBox);
  }

  window.requestAnimationFrame(() => {
    elements.loveProgressFill.style.width = `${Math.max(0, (clamped / total) * elements.loveProgressStars.scrollWidth)}px`;
  });
}

function getLoveLotteryMilestoneLabel(milestone) {
  return `${milestone}: Plan a date, trip, or gift for Sophia`;
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
  const remaining = LOVE_LOTTERY_ACTIVITIES.filter((activity) => activity.category === "shopping" || !marked.has(activity.id));

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
    state.selectedActivityId = selected.id;
    if (selected.category === "date") {
      const plan = getFutureDatePlan(selected);
      state.loveLottery.nextDatePlan = plan;
      elements.randomizerResult.textContent = formatDatePlan(plan);
      elements.randomizerTask.hidden = false;
      elements.randomizerTask.textContent = plan.task;
      saveLoveLotteryProgress();
      renderNextDateLog();
    } else {
      elements.randomizerResult.textContent = selected.label;
      elements.randomizerTask.hidden = true;
      elements.randomizerTask.textContent = "";
    }
    elements.randomizerStage.classList.remove("is-shuffling");
    elements.spinDateButton.classList.remove("is-spinning");
    elements.spinDateButton.disabled = false;
    renderLoveLottery();
  }, 1250);
}

function markSelectedLoveLotteryActivity() {
  const activity = getLoveLotteryActivity(state.selectedActivityId);
  if (!state.selectedActivityId || !activity) {
    return;
  }

  if (getLoveLotterySpinsToday() >= 3) {
    elements.randomizerResult.textContent = "All 3 spins are logged for today.";
    renderLoveLottery();
    return;
  }

  const currentCompletionCount = getLoveLotteryCompletionCount();
  if (activity.category !== "shopping" && state.loveLottery.markedIds.includes(state.selectedActivityId)) {
    return;
  }

  if (activity.category !== "shopping") {
    state.loveLottery.markedIds = [...state.loveLottery.markedIds, state.selectedActivityId];
  }

  state.loveLottery.completionCount = clampNumber(currentCompletionCount + 1, 0, 500, currentCompletionCount);
  state.loveLottery.log = [
    ...(Array.isArray(state.loveLottery.log) ? state.loveLottery.log : []),
    {
      id: state.selectedActivityId,
      label: activity.label,
      category: activity.category,
      nextDatePlan: activity.category === "date" ? state.loveLottery.nextDatePlan : null,
      loggedAt: new Date().toISOString(),
    },
  ];
  elements.randomizerResult.textContent = `Logged ${formatLoveLotteryDate()}`;
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
  state.loveLottery = { markedIds: [], completionCount: 0, log: [], nextDatePlan: null };
  state.selectedActivityId = null;
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
    wishlist: elements.wishlistScreen,
    randomizer: elements.randomizerScreen,
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

  if (name === "wishlist") {
    renderMusic();
  }

  if ((name === "dashboard" || name === "randomizer") && elements.musicAudio && !elements.musicAudio.paused) {
    elements.musicAudio.pause();
  }

  if (name !== "randomizer" && elements.loveLotteryAudio && !elements.loveLotteryAudio.paused) {
    elements.loveLotteryAudio.pause();
  }
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
  const savedTracks = music.tracks.filter((track) => track.url);
  elements.adminMusicStatus.textContent = savedTracks.length
    ? `Saved songs: ${savedTracks.map((track, index) => track.name || `Song ${index + 1}`).join(", ")}`
    : "No saved music tracks.";
  elements.adminMusicVolume.value = String(music.volume);
  renderLoveLotteryAdminForm();
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
  elements.openWishlistButton.addEventListener("click", () => {
    navigateTo("/wishlist");
    playWishlistMusic({ randomize: true });
  });
  elements.wishlistHomeButton.addEventListener("click", () => navigateTo("/"));
  elements.wishlistTabs.forEach((button) => {
    button.addEventListener("click", () => setWishlistTab(button.dataset.wishlistTab));
  });
  elements.wishlistForms.forEach((form) => {
    form.addEventListener("submit", addWishlistItem);
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
  elements.spinDateButton.addEventListener("click", spinLoveLottery);
  elements.markDateButton.addEventListener("click", markSelectedLoveLotteryActivity);
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
  elements.activityList.addEventListener("click", (event) => {
    const row = event.target.closest("[data-activity-id]");
    if (row) {
      toggleLoveLotteryActivity(row.dataset.activityId);
    }
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
