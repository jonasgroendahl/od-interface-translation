import React, { useState } from "react";
import Stepper from "./components/Stepper";
import { withStyles, MuiThemeProvider, CssBaseline } from "@material-ui/core";
import theme from "./utils/theme";
import CurrentStep from "./components/CurrentStep";
import steps, { translationState } from "./utils/vars";
import LanguageSelector from "./components/LanguageSelector";
import SubmitStep from "./components/SubmitStep";

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
  const [translations, setTranslation] = useState(translationState);
  const [lang, setLang] = useState("");
  const [open, setOpen] = useState(true);

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.grid}>
        <LanguageSelector lang={lang} setLang={setLang} open={open} setOpen={setOpen} setTranslations={setTranslation} />
        <Stepper lang={lang} step={activeStep} setStep={setActiveStep} setOpen={setOpen} />
        {activeStep < steps.length ? (
          <CurrentStep activeStep={activeStep} translations={translations} setTranslation={setTranslation} />
        ) : (
          <SubmitStep translations={translations} setTranslation={setTranslation} lang={lang} />
        )}
      </div>
    </MuiThemeProvider>
  );
}

export default withStyles(styles)(App);
