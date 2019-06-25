import React from "react";
import { Stepper, Step, StepLabel, Drawer, Typography, IconButton, Grid } from "@material-ui/core";
import steps from "../utils/vars";
import { Delete } from "@material-ui/icons";

export default function Stepperino(props) {
  const { step, setStep, lang, setOpen, onDelete } = props;

  function handleDelete() {
    const isSure = window.confirm("Sure?");
    if (isSure) {
      onDelete();
    }
  }

  return (
    <Drawer variant="permanent" orientation="left">
      <Grid container justify="center" alignItems="center">
        <Typography variant="body1" style={{ textAlign: "center", cursor: "pointer" }} onClick={() => setOpen(true)}>
          {lang}
        </Typography>
        <IconButton onClick={handleDelete} style={{ marginLeft: 10 }}>
          <Delete />
        </IconButton>
      </Grid>
      <Stepper activeStep={step} orientation="vertical">
        {steps.map((step, index) => (
          <Step onClick={() => setStep(index)}>
            <StepLabel style={{ cursor: "pointer" }}>{step.text}</StepLabel>
          </Step>
        ))}
        <Step onClick={() => setStep(steps.length)}>
          <StepLabel style={{ cursor: "pointer" }}>Submit translation</StepLabel>
        </Step>
      </Stepper>
    </Drawer>
  );
}
