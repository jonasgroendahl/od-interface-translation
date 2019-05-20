import React, { useState, useEffect } from "react";
import Stepper from "./components/Stepper";
import { withStyles, MuiThemeProvider, CssBaseline } from "@material-ui/core";
import theme from "./utils/theme";
import CurrentStep from "./components/CurrentStep";
import steps from "./utils/vars";
import LanguageSelector from "./components/LanguageSelector";

const styles = {
  grid: {
    gridTemplateColumns: "300px 1fr 1fr",
    display: "grid",
    gridGap: "10px",
    padding: 20
  }
};

const translationState = steps.map(step => {
  const fields = Object.keys(step.fields).reduce((acc, field) => {
    acc[field] = "";
    return acc;
  }, {});
  console.log(fields);
  return fields;
});

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
        <CurrentStep activeStep={activeStep} translations={translations} setTranslation={setTranslation} lang={lang} />
      </div>
    </MuiThemeProvider>
  );
}

export default withStyles(styles)(App);
