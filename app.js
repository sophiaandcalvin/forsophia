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
    starHover: { url: "", name: "", volume: 0.28 },
    starClick: { url: "", name: "", volume: 0.42 },
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
    line: "I know that more clearly than ever.",
  },
  {
    kicker: "What I know",
    title: "No one comes close.",
    line: "Not in my heart. Not in the quiet places I keep coming back to.",
  },
  {
    kicker: "What I want",
    title: "To protect your heart.",
    line: "Your peace, your softness, and the love I should have held with more care.",
  },
  {
    kicker: "Still",
    title: "No pressure.",
    line: "You do not owe me a response. I just wanted you to feel loved here.",
  },
  {
    kicker: "For you",
    title: "The stars are little moments.",
    line: "Each one is something I love, remember, or never stopped feeling.",
  },
];

const state = {
  data: loadData(),
  progress: loadProgress(),
  session: null,
  remoteReady: false,
  remoteMessage: "",
  activeScreen: "landing",
  previousScreen: "constellation",
  selectedPuzzleIndex: null,
  activeMemoryId: null,
  activeMediaIndex: 0,
  albumIndex: 0,
  activeTrackIndex: 0,
  openingIndex: 0,
  openingTimer: null,
  audioUnlocked: false,
  soundEffectPlayers: {
    starHover: null,
    starClick: null,
  },
  lastSoundAt: {
    starHover: 0,
    starClick: 0,
  },
  puzzleOrder: [],
  puzzleSolved: false,
};

const elements = {
  ambientCanvas: document.querySelector("#ambientCanvas"),
  loveTrailCanvas: document.querySelector("#loveTrailCanvas"),
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
  puzzleBoard: document.querySelector("#puzzleBoard"),
  shufflePuzzleButton: document.querySelector("#shufflePuzzleButton"),
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
    soundEffects: normalizeSoundEffects(data.soundEffects, fallback.soundEffects),
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

function normalizeSoundEffects(soundEffects, fallbackSoundEffects) {
  return {
    starHover: {
      ...fallbackSoundEffects.starHover,
      ...(soundEffects?.starHover || {}),
      volume: clampNumber(Number(soundEffects?.starHover?.volume), 0, 1, fallbackSoundEffects.starHover.volume),
    },
    starClick: {
      ...fallbackSoundEffects.starClick,
      ...(soundEffects?.starClick || {}),
      volume: clampNumber(Number(soundEffects?.starClick?.volume), 0, 1, fallbackSoundEffects.starClick.volume),
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
  renderAdminForm();
  renderAdminAuth();
  initPuzzle();
  bindEvents();
  initAmbientCanvas();
  initLoveTrail();

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
    initPuzzle();
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
  prepareSoundEffectPlayers();
  renderStars();
  renderLines();
  renderProgress();
  renderLetter();
}

function renderMusic() {
  const music = normalizeMusic(state.data.music, DEFAULT_DATA.music);
  const tracks = getMusicTracks();
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

  const volume = clampNumber(Number(music.volume), 0, 1, DEFAULT_DATA.music.volume);
  elements.musicAudio.volume = volume;
  elements.volumeInput.value = String(volume);
  updateMusicButtons();
}

function getMusicTracks() {
  return normalizeMusic(state.data.music, DEFAULT_DATA.music).tracks.filter((track) => track.url);
}

function playNextMusicTrack() {
  const tracks = getMusicTracks();
  if (!tracks.length) {
    updateMusicButtons();
    return;
  }

  state.activeTrackIndex = (state.activeTrackIndex + 1) % tracks.length;
  renderMusic();
  elements.musicAudio.play().catch(() => updateMusicButtons());
}

function prepareSoundEffectPlayers() {
  const soundEffects = normalizeSoundEffects(state.data.soundEffects, DEFAULT_DATA.soundEffects);

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

    state.soundEffectPlayers[key].volume = clampNumber(Number(effect.volume), 0, 1, DEFAULT_DATA.soundEffects[key].volume);
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

    if (state.progress.memoriesFound.includes(memory.id)) {
      button.classList.add("is-found");
    }

    if (state.progress.heartsFound.includes(memory.id)) {
      button.classList.add("is-heart-found");
    }

    const core = document.createElement("span");
    core.className = "star-core";
    core.style.boxShadow = `0 0 12px rgba(255, 250, 240, 0.95), 0 0 30px ${hexToRgba(memory.accent, 0.45)}`;
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
    puzzleUnlocked: heartIds.length === 0 || validHeartsFound.length >= target,
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
  elements.openPuzzleButton.textContent = progress.puzzleUnlocked ? "Open puzzle" : "Puzzle locked";
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
  renderMediaSurface(elements.hiddenMemoryMedia, memory, getPreferredMemoryMedia(memory, 0, true), { controls: true });
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
}

function showLetter() {
  state.previousScreen = state.activeScreen === "letter" ? "constellation" : state.activeScreen;
  showScreen("letter");
}

function closeLetter() {
  showScreen(state.previousScreen === "puzzle" ? "puzzle" : "constellation");
}

function initPuzzle() {
  state.puzzleOrder = createShuffledOrder();
  state.selectedPuzzleIndex = null;
  state.puzzleSolved = false;
  renderPuzzle();
}

function createShuffledOrder() {
  const order = Array.from({ length: 9 }, (_, index) => index);
  for (let index = order.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [order[index], order[swapIndex]] = [order[swapIndex], order[index]];
  }

  if (order.every((tile, index) => tile === index)) {
    [order[0], order[1]] = [order[1], order[0]];
  }

  return order;
}

function renderPuzzle() {
  elements.puzzleBoard.innerHTML = "";
  const image = getPuzzleImage();

  state.puzzleOrder.forEach((tileNumber, boardIndex) => {
    const tile = document.createElement("button");
    tile.type = "button";
    tile.className = "puzzle-tile";
    tile.textContent = `Piece ${tileNumber + 1}`;
    tile.style.backgroundImage = image;
    tile.style.backgroundSize = "300% 300%";
    tile.style.backgroundPosition = `${(tileNumber % 3) * 50}% ${Math.floor(tileNumber / 3) * 50}%`;
    tile.classList.toggle("is-selected", state.selectedPuzzleIndex === boardIndex);
    tile.addEventListener("click", () => selectPuzzleTile(boardIndex));
    elements.puzzleBoard.append(tile);
  });
}

function getPuzzleImage() {
  const firstPhoto = state.data.memories
    .flatMap((memory) => getMemoryMedia(memory))
    .find((media) => media.type !== "video")?.url;
  if (state.data.puzzleImage) {
    return `url("${state.data.puzzleImage}")`;
  }

  if (firstPhoto) {
    return `url("${firstPhoto}")`;
  }

  return makeFallbackBackground("#f3d386");
}

function selectPuzzleTile(boardIndex) {
  if (state.puzzleSolved) {
    return;
  }

  if (state.selectedPuzzleIndex === null) {
    state.selectedPuzzleIndex = boardIndex;
    renderPuzzle();
    return;
  }

  if (state.selectedPuzzleIndex === boardIndex) {
    state.selectedPuzzleIndex = null;
    renderPuzzle();
    return;
  }

  [state.puzzleOrder[state.selectedPuzzleIndex], state.puzzleOrder[boardIndex]] = [
    state.puzzleOrder[boardIndex],
    state.puzzleOrder[state.selectedPuzzleIndex],
  ];
  state.selectedPuzzleIndex = null;
  renderPuzzle();
  checkPuzzle();
}

function checkPuzzle() {
  if (!state.puzzleOrder.every((tile, index) => tile === index)) {
    return;
  }

  state.puzzleSolved = true;
  showToast("Puzzle complete", "The letter is ready when you are.");
  window.setTimeout(showLetter, 700);
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
  renderSoundLibraryForm();
  elements.adminLetterTitle.value = state.data.letter.title;
  elements.adminLetterBody.value = state.data.letter.body;
  renderLetterPhotoStatus();
  renderMemoryEditors();
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
      <div class="memory-editor-actions">
        <button class="secondary-button" type="button" data-clear-media="${index}">Clear media</button>
      </div>
    `;

    elements.memoryEditorList.append(editor);
  });
}

function renderSoundLibraryForm() {
  const soundEffects = normalizeSoundEffects(state.data.soundEffects, DEFAULT_DATA.soundEffects);
  const saved = [
    soundEffects.starHover.url ? `Hover: ${soundEffects.starHover.name || "saved sound"}` : "",
    soundEffects.starClick.url ? `Click: ${soundEffects.starClick.name || "saved sound"}` : "",
  ].filter(Boolean);

  elements.soundLibraryStatus.textContent = saved.length ? saved.join(" | ") : "No star sound effects saved.";
  elements.soundEffectVolumeInputs.forEach((input) => {
    const key = input.dataset.sfxVolume;
    input.value = String(soundEffects[key]?.volume ?? DEFAULT_DATA.soundEffects[key].volume);
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
  state.data.soundEffects = normalizeSoundEffects(state.data.soundEffects, DEFAULT_DATA.soundEffects);
  elements.soundEffectVolumeInputs.forEach((input) => {
    const key = input.dataset.sfxVolume;
    if (state.data.soundEffects[key]) {
      state.data.soundEffects[key].volume = clampNumber(Number(input.value), 0, 1, DEFAULT_DATA.soundEffects[key].volume);
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

    const soundEffects = normalizeSoundEffects(state.data.soundEffects, DEFAULT_DATA.soundEffects);
    const volumeInput = elements.soundEffectVolumeInputs.find((item) => item.dataset.sfxVolume === key);
    soundEffects[key] = {
      url: media.url,
      name: file.name,
      volume: clampNumber(Number(volumeInput?.value), 0, 1, DEFAULT_DATA.soundEffects[key].volume),
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
    initPuzzle();
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
  initPuzzle();
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

function bindEvents() {
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

  elements.openAlbumButton.addEventListener("click", () => {
    playSoundEffect("starClick");
    openAlbum();
  });

  elements.openPuzzleButton.addEventListener("click", () => {
    if (!elements.openPuzzleButton.disabled) {
      showScreen("puzzle");
    }
  });

  elements.closePuzzleButton.addEventListener("click", () => showScreen("constellation"));
  elements.shufflePuzzleButton.addEventListener("click", initPuzzle);

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
    initPuzzle();

    if (SUPABASE_CONFIGURED) {
      const remote = await saveRemoteData();
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
    state.data.music = {
      ...normalizeMusic(state.data.music, DEFAULT_DATA.music),
      volume: clampNumber(Number(elements.adminMusicVolume.value), 0, 1, DEFAULT_DATA.music.volume),
    };
    renderMusic();
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
      state.data.soundEffects = normalizeSoundEffects(state.data.soundEffects, DEFAULT_DATA.soundEffects);
      if (state.data.soundEffects[key]) {
        state.data.soundEffects[key].volume = clampNumber(Number(input.value), 0, 1, DEFAULT_DATA.soundEffects[key].volume);
        prepareSoundEffectPlayers();
      }
    });
  });
  elements.clearSoundEffectsButton.addEventListener("click", () => {
    state.data.soundEffects = structuredClone(DEFAULT_DATA.soundEffects);
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
  });
}

function enterExperience() {
  unlockSoundEffects();
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
