import React from "react";
import { Stepper, Step, StepLabel, Drawer, Typography } from "@material-ui/core";
import steps from "../utils/vars";

export default function Stepperino(props) {
  const { step, setStep, lang, setOpen } = props;

  return (
    <Drawer variant="permanent" orientation="left">
      <Typography variant="body1" style={{ marginTop: 10, textAlign: "center" }} onClick={() => setOpen(true)}>
        {lang}
      </Typography>
      <Stepper activeStep={step} orientation="vertical">
        {steps.map((step, index) => (
          <Step onClick={() => setStep(index)}>
            <StepLabel style={{ cursor: "pointer" }}>{step.text}</StepLabel>
          </Step>
        ))}
        <Step onClick={() => setStep(8)}>
          <StepLabel style={{ cursor: "pointer" }}>Submit translation</StepLabel>
        </Step>
      </Stepper>
    </Drawer>
  );
}
