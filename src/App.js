import React, { useState } from "react";
import Stepper from "./components/Stepper";
import { withStyles, MuiThemeProvider, CssBaseline, TextField } from "@material-ui/core";
import theme from "./utils/theme";
import CurrentStep from "./components/CurrentStep";
import steps, { translationState } from "./utils/vars";
import LanguageSelector from "./components/LanguageSelector";
import SubmitStep from "./components/SubmitStep";
import "./index.css";

const styles = {
  grid: {
    gridTemplateColumns: "350px 25% 1fr",
    display: "grid",
    gridGap: "20px",
    padding: 20
  }
};

function App({ classes }) {
  const [activeStep, setActiveStep] = useState(0);
  const [translations, setTranslation] = useState([...translationState]);
  const [lang, setLang] = useState("");
  const [open, setOpen] = useState(true);
  const [auth, setAuth] = useState(false);

  function handleStepChange(value) {
    setActiveStep(value);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }

  function handleDeleteAll() {
    const newTranslation = [...translations];

    newTranslation.forEach((el, index) => {
      const keys = Object.keys(el);
      keys.forEach(key => {
        el[key] = "";
      });
    });
    setTranslation(newTranslation);
  }

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {!auth ? (
        <div className="centerMe">
          <TextField
            label="Password"
            onChange={e => {
              if (e.target.value === "4G#gJ2DYn@") {
                setAuth(true);
              }
            }}
          />
        </div>
      ) : (
        <div className={classes.grid}>
          <LanguageSelector lang={lang} setLang={setLang} open={open} setOpen={setOpen} setTranslations={setTranslation} />
          <Stepper lang={lang} step={activeStep} setStep={handleStepChange} setOpen={setOpen} onDelete={handleDeleteAll} />
          {activeStep < steps.length ? (
            <CurrentStep activeStep={activeStep} translations={translations} setTranslation={setTranslation} />
          ) : (
            <SubmitStep translations={translations} setTranslation={setTranslation} lang={lang} />
          )}
        </div>
      )}
    </MuiThemeProvider>
  );
}

export default withStyles(styles)(App);
