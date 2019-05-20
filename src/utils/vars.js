import sc1 from "../assets/Screenshot from 2019-05-20 10-30-07.png";
import sc2 from "../assets/Screenshot from 2019-05-20 10-18-00.png";
import sc3 from "../assets/Screenshot from 2019-05-20 10-18-05.png";
import sc4 from "../assets/Screenshot from 2019-05-20 10-18-24.png";
import sc5 from "../assets/Screenshot from 2019-05-20 10-18-31.png";
import sc6 from "../assets/Screenshot from 2019-05-20 10-18-36.png";
import sc7 from "../assets/Screenshot from 2019-05-20 10-18-47.png";
import sc8 from "../assets/Screenshot from 2019-05-20 10-24-43.png";

export const URL = process.env.NODE_ENV === "development" ? "http://localhost:3001/v3/translation" : "http://wexer-api.herokuapp.com/v3/translation";

const steps = [
  {
    text: "Home screen",
    image: sc1,
    fields: {
      description: "Welcome to the Virtual Player. Choose from hundreds of classes. Touch an option to get started.",
      btn1: "Explore",
      btn2: "View schedule",
      btn3: "Search",
      currentClass: "Now playing:",
      nextClass: "Next up:",
      countdown: "Workout starting in"
    }
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
      rehab: "Rehab"
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
      title: "Schedule"
    }
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
      equipment: "Equipment"
    }
  }
];

export default steps;
