import sc1 from "../assets/Screenshot from 2019-05-20 10-30-07.png";
import sc2 from "../assets/Screenshot from 2019-05-20 10-18-00.png";
import sc3 from "../assets/Screenshot from 2019-05-20 10-18-05.png";
import sc4 from "../assets/Screenshot from 2019-05-20 10-18-24.png";
import sc5 from "../assets/Screenshot from 2019-05-20 10-18-31.png";
import sc6 from "../assets/Screenshot from 2019-05-20 10-18-36.png";
import sc7 from "../assets/Screenshot from 2019-05-20 10-18-47.png";
import sc8 from "../assets/Screenshot from 2019-05-20 10-24-43.png";
import sc9 from "../assets/Screenshot from 2019-05-20 10-32-31.png";
import sc10 from "../assets/Screenshot from 2019-05-20 10-33-45.png";
import sc11 from "../assets/Screenshot from 2019-05-20 10-38-43.png";
import sc12 from "../assets/Screenshot from 2019-05-20 10-39-31.png";
import sc13 from "../assets/Screenshot from 2019-05-21 08-48-50.png";

import ex1 from "../assets/home_extra_1.png";
import ex2 from "../assets/home_extra_2.png";
import ex3 from "../assets/class_detail_extra_1.jpg";

export const URL = process.env.NODE_ENV === "development" ? "http://localhost:3001/v3/translation" : "https://api-wexer.herokuapp.com/v3/translation";

const steps = [
  {
    text: "Home screen",
    image: sc1,
    fields: {
      description: "Welcome to the Virtual Player. Choose from hundreds of classes. Touch an option to get started.",
      btn1: "Explore",
      btn2: "View schedule",
      btn3: "Search",
      currentClass: "Now playing",
      nextClass: "Next up",
      countdown: "Workout starting in",
      viewAll: "View all"
    },
    extras: [ex1, ex2]
  },
  {
    text: "Search page - main tab",
    image: sc2,
    fields: {
      btn1: "Category filter",
      btn2: "Search",
      btn3: "Content Providers",
      noResults: "No results found",
      results: "Results",
      beginner: "Beginner",
      intermediate: "Intermediate",
      advanced: "Advanced",
      cycling: "Cycling",
      kids: "Kids",
      senior: "Senior",
      conditioning: "Conditioning",
      "mind / body": "Mind & Body",
      cardio: "Cardio",
      rehab: "Rehab",
      live: "Live",
      intro: "Intro",
      "not set": "Not set",
      "for everyone": "For everyone",
      "10 min": "10 min",
      "20 min": "20 min",
      "30 min": "30 min",
      "40+ min": "40+ min"
    }
  },
  {
    text: "Search page - search tab",
    image: sc3,
    fields: {
      searchPlaceholder: "Tap to search by name, category or tags",
      keyboardSpace: "Space",
      keyboardClear: "Clear"
    }
  },
  {
    text: "Home screen - language dialog",
    image: sc4,
    fields: {
      title: "Choose your language"
    }
  },
  {
    text: "Admin",
    image: sc5,
    fields: {
      title: "Admin",
      tab1: "General",
      tab2: "Advanced",
      tab3: "Add ons",
      club: "Club",
      playerId: "Player ID",
      opt1: "Player interface",
      opt2: "Type",
      opt3: "Volume"
    }
  },
  {
    text: "Admin - Add On tab",
    image: sc6,
    fields: {
      ic: "Launch",
      moto1: "Show tiles",
      moto2: "Hide tiles"
    }
  },
  {
    text: "Schedule",
    image: sc7,
    fields: {
      title: "Schedule",
      virtual: "Virtual",
      stream: "Stream"
    },
    extras: []
  },
  {
    text: "Class detail page",
    image: sc8,
    fields: {
      playBtn: "Play",
      stopBtn: "Stop",
      pauseBtn: "Pause",
      unpauseBtn: "Resume",
      qr: "Do this class at home: scan code & save for later",
      relatedContent: "Related content",
      duration: "Duration",
      type: "Type",
      level: "Level",
      provider: "Provider",
      trainer: "Trainer",
      equipment: "Equipment",
      more: "More"
    },
    extras: [ex3]
  },
  {
    text: "Class detail page - dialog",
    image: sc9,
    fields: {
      title: "Class playing",
      prompt: "Are you sure that you would like to cancel ongoing class?",
      alert: "Please wait for the current class to finish before starting a new one.",
      adminOverwrite: "Admin override",
      confirm: "Confirm"
    },
    extras: []
  },
  {
    text: "Class detail page - dialog passcode",
    image: sc10,
    fields: {
      passcode: "Enter passcode",
      cancel: "Cancel",
      ok: "Ok",
      delete: "Delete"
    }
  },
  {
    text: "Class detil page - dialog upcoming class",
    image: sc11,
    fields: {
      scheduledClassMessage:
        "There's an up and coming scheduled class which will interfere with the class, that you're currently trying to play, when it reaches the scheduled time."
    }
  },
  {
    text: "Class not found page",
    image: sc12,
    fields: {
      errorBtn: "Back to home screen",
      errorText: "The class you attempted to view is currently not downloaded onto the player yet",
      errorText2: "Try again later"
    }
  },
  {
    text: "Tags",
    image: sc13,
    fields: {
      short: "Short",
      high: "High",
      bodyweight: "Bodyweight",
      strength: "Strength",
      functional: "Functional",
      crossfit: "CrossFit",
      quick: "Quick",
      fast: "Fast",
      express: "Express",
      recovery: "Recovery",
      agility: "Agility",
      plyo: "Plyo",
      sport: "Sport",
      challenge: "Challenge",
      fit: "Fit",
      hit: "HIT",
      cardio: "Cardio",
      ballet: "Ballet",
      combat: "Combat",
      weight: "Weight Loss",
      lean: "Lean",
      musclebuilding: "Muscle Building",
      strong: "Strong",
      atletic: "Athletic",
      burn: "Burn",
      trim: "Trim",
      endurance: "Endurance",
      arms: "Arms",
      legs: "Legs",
      quads: "Quads",
      biceps: "Biceps",
      glutes: "Glutes",
      shoulders: "Shoulders",
      abs: "Abs",
      triceps: "Tripceps",
      step: "Step",
      bench: "Bench",
      box: "Box",
      foamroller: "Foam Roller",
      bands: "Bands",
      weights: "Weights",
      dumbbell: "Dumbbell",
      barbell: "Barbell",
      kettlebell: "Kettlebell",
      bar: "Bar",
      bike: "Bike",
      cycle: "Cycle",
      ride: "Ride",
      sprint: "Sprint",
      spin: "Spin",
      spinning: "Spinning",
      dance: "Dance",
      calories: "Calories",
      boxing: "Boxing",
      yoga: "Yoga",
      pilates: "Pilates",
      stretch: "Stretch",
      mobility: "Mobility",
      spine: "Spine",
      back: "Back",
      flex: "Flex",
      meditation: "Meditation",
      holistic: "Holistic",
      core: "Core",
      squat: "Squat",
      pump: "Pump",
      bumstums: "Bums & tums",
      tone: "Tone",
      power: "Power",
      kids: "Kids",
      pregnant: "Pregnant",
      martialarts: "Martial arts",
      older: "Older",
      fight: "Fight",
      senior: "Senior",
      prenatal: "Pre natal",
      postnatal: "Post natal"
    }
  },
  {
    text: "Extras",
    image: "https://pngimage.net/wp-content/uploads/2018/05/extra-extra-png-1.png",
    fields: {
      relatedByCategory: "Related content by category",
      relatedByProvider: "Related content by provider",
      description1: "Choose BIKE mode for hundreds of cycle workouts. BODY BIKE will show your live data on-screen.",
      description2: "Choose FLOOR MODE for on floor exercises. BODY BIKE will not show any data on screen when not in BIKE MODE.",
      title: "Welcome to Body Bike. Select your training mode to continue. ",
      btn: "Go",
      title: "Ride complete",
      description: "See your ride summary below. Scan the QR code on your phone to save your workout and sync with Strava.",
      cooldownTitle: "Cool down routines",
      cooldownDescription: "Switch the BODY BIKE 360 into Floor mode and try a cool down routine.",
      bikemode: "Just ride"
    }
  }
];

export const translationState = steps.map(step => {
  const fields = Object.keys(step.fields).reduce((acc, field) => {
    acc[field] = "";
    return acc;
  }, {});
  console.log(fields);
  return fields;
});

export default steps;
