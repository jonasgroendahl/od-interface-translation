import ex1 from "../assets/slides/Slide30.PNG";
import ex2 from "../assets/slides/Slide31.PNG";

import slide_home from "../assets/slides/Slide1.png";
import slide_home_expanded from "../assets/slides/Slide2.PNG";
import slide_schedule from "../assets/slides/Slide4.PNG";
import slide_classdetail from "../assets/slides/Slide5.PNG";
import slide_classdetail_playing from "../assets/slides/Slide6.PNG";
import slide_classdetail_dialog from "../assets/slides/Slide7.PNG";
import slide_classdetail_dialog_disable_od from "../assets/slides/Slide8.PNG";
import slide_classdetail_passcode from "../assets/slides/Slide9.PNG";
import slide_classdetail_dialog_scheduled from "../assets/slides/Slide10.PNG";
import slide_lang from "../assets/slides/Slide11.PNG";
import s_search_tab1 from "../assets/slides/Slide12.PNG";
import s_search_tab2 from "../assets/slides/Slide13.PNG";
import a_tab3 from "../assets/slides/Slide14.PNG";
import a_tab1 from "../assets/slides/Slide15.PNG";
import not_found from "../assets/slides/Slide16.PNG";
import b_start from "../assets/slides/Slide17.PNG";
import b_start_2 from "../assets/slides/Slide18.PNG";
import b_start_3 from "../assets/slides/Slide19.PNG";
import b_browse from "../assets/slides/Slide20.PNG";
import b_setup_1 from "../assets/slides/Slide22.PNG";
import b_setup_2 from "../assets/slides/Slide23.PNG";
import b_setup_3 from "../assets/slides/Slide24.PNG";
import b_setup_4 from "../assets/slides/Slide25.PNG";
import b_od_app from "../assets/slides/Slide26.PNG";
import b_od_app_dialog from "../assets/slides/Slide27.PNG";
import b_od_preparing from "../assets/slides/Slide28.PNG";
import b_done from "../assets/slides/Slide29.PNG";

import extra_ from "../assets/slides/extra_.png";

export const URL = process.env.NODE_ENV === "development" ? "http://localhost:3001/v3/translation" : "https://api-wexer.herokuapp.com/v3/translation";

const steps = [
  {
    text: "Home screen",
    image: [slide_home, slide_home_expanded],
    fields: {
      description: "Welcome to the Virtual Player. Choose from hundreds of classes. Touch an option to get started.",
      description_2: "Touch an option to get started",
      btn1: "Explore",
      btn2: "View schedule",
      btn3: "Search",
      currentClass: "Now playing",
      viewAll: "View all",
      featuredTitle: "Featured",
      newestTitle: "Newest",
      popularTitle: "Most popular",
      nextClass: "Next up",
      countdown: "Workout starting in"
    },
    extras: [ex1, ex2]
  },
  {
    text: "Class not found page",
    image: [not_found],
    fields: {
      notFound: "Not found",
      errorText: "The class you attempted to view is currently not downloaded onto the player yet",
      errorText2: "Try again later",
      errorBtn: "Back to home screen"
    }
  },
  {
    text: "Schedule",
    image: [slide_schedule],
    fields: {
      title: "Schedule",
      virtual: "Virtual",
      live: "Live",
      stream: "Stream",
      go: "Go",
      zoom: "Zoom"
    },
    extras: []
  },
  {
    text: "Class detail page",
    image: [slide_classdetail, slide_classdetail_playing],
    fields: {
      playBtn: "Play",
      qr: "Do this class at home: scan code & save for later",
      duration: "Duration",
      type: "Type",
      level: "Level",
      trainer: "Trainer",
      provider: "Provider",
      equipment: "Equipment",
      relatedContent: "Related content",
      stopBtn: "Stop",
      pauseBtn: "Pause",
      unpauseBtn: "Resume",
      more: "More"
    }
  },
  {
    text: "Class detail page - dialog",
    image: [slide_classdetail_dialog, slide_classdetail_dialog_disable_od],
    fields: {
      title: "Class playing",
      prompt: "Are you sure that you would like to cancel ongoing class?",
      ok: "Ok",
      cancel: "Cancel",
      alert: "Please wait for the current class to finish before starting a new one.",
      adminOverwrite: "Admin override"
    },
    extras: []
  },
  {
    text: "Class detail page - dialog passcode",
    image: [slide_classdetail_passcode],
    fields: {
      passcode: "Enter passcode",
      delete: "Delete"
    }
  },
  {
    text: "Class detail page - dialog upcoming class",
    image: [slide_classdetail_dialog_scheduled],
    fields: {
      scheduledClassMessage: "Selection conflicts with a scheduled class. Your class will play, but will be interrupted by the scheduled class",
      confirm: "Confirm",
      cancel: "Cancel"
    }
  },
  {
    text: "Home screen - language dialog",
    image: [slide_lang],
    fields: {
      title: "Choose your language"
    }
  },
  {
    text: "Search page - main tab",
    image: [s_search_tab1],
    fields: {
      btn1: "Category filter",
      btn2: "Search",
      btn3: "Content Providers",
      "10 min": "10 min",
      "20 min": "20 min",
      "30 min": "30 min",
      "40+ min": "40+ min",
      cardio: "Cardio",
      conditioning: "Conditioning",
      "mind / body": "Mind & Body",
      cycling: "Cycling",
      beginner: "Beginner",
      intermediate: "Intermediate",
      advanced: "Advanced",
      results: "Results",
      noResults: "No results found"
    }
  },
  {
    text: "Search page - search tab",
    image: [s_search_tab2],
    fields: {
      searchPlaceholder: "Tap to search by name, category or tags",
      keyboardSpace: "Space",
      keyboardClear: "Clear"
    }
  },
  {
    text: "Extra items",
    image: [extra_],
    fields: {
      relatedByCategory: "Related content by category",
      relatedByProvider: "Related content by provider",
      kids: "Kids",
      senior: "Senior",
      rehab: "Rehab",
      intro: "Intro",
      "not set": "Not set",
      "for everyone": "For everyone"
    }
  },
  {
    text: "Admin section",
    image: [a_tab3, a_tab1],
    fields: {
      title: "Admin",
      tab1: "General",
      tab2: "Advanced",
      tab3: "Add ons",
      club: "Club",
      playerId: "Player ID",
      ic: "Launch",
      moto1: "Show tiles",
      moto2: "Hide tiles",
      opt1: "Player interface",
      opt3: "Volume",
      opt2: "Numpad"
    }
  },
  {
    text: "Bodybike start screen",
    image: [b_start, b_start_2, b_start_3],
    fields: {
      title: "Welcome to Body Bike. Select your training mode to continue. ",
      btn: "Go",
      description1: "Choose BIKE mode for hundreds of cycle workouts. BODY BIKE will show your live data on-screen.",
      description2: "Choose FLOOR MODE for on floor exercises. BODY BIKE will not show any data on screen when not in BIKE MODE."
    }
  },
  {
    text: "Bodybike main",
    image: [b_browse],
    fields: {
      bikeModeOption: "BIKE MODE",
      bikemode: "Just ride"
    }
  },
  {
    text: "Bodybike setup",
    image: [b_setup_1, b_setup_2, b_setup_3, b_setup_4],
    fields: {
      title_setupbodybike: "Setup your ride",
      description_setupbodybike: "Input your data so BODY BIKE can calculate your calorie burn",
      select1: "Gender",
      male: "Male",
      female: "Female",
      next: "Next",
      btn1: "Back",
      btn2: "Skip",
      btn3: "Back to main menu",
      select2: "Age",
      select3: "Weight (kilograms)",
      select4: "Height (cm)"
    }
  },
  {
    text: "Bodybike completed class",
    image: [b_od_preparing, b_done], // missing 1 sc
    fields: {
      splash: "Preparing your ride summary",
      title: "Ride complete", // TODO when applying mapping in App
      description: "See your ride summary below. Scan the QR code on your phone to save your workout and sync with Strava.",
      done: "Done"
    }
  },
  {
    text: "Wexer GF Bodybike overlay",
    image: [b_od_app, b_od_app_dialog],
    fields: {
      output: "Output",
      summary: "Summary",
      power: "Power (w)",
      calories: "Calories",
      cadence: "Cadence (rpm)",
      distance: "Distance (km)",
      speed: "Speed (kmh)",
      time: "Elapsed time",
      btn1: "End ride",
      continue: "Continue"
    }
  },
  {
    text: "Bodybike cooldown",
    image: [],
    fields: {
      cooldownTitle: "Cool down routines",
      cooldownDescription: "Switch the BODY BIKE 180 into Floor mode and try a cool down routine."
    }
  }
];

export const translationState = steps.map(step => {
  const fields = Object.keys(step.fields).reduce((acc, field) => {
    acc[field] = "";
    return acc;
  }, {});
  return fields;
});

export default steps;
