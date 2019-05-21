import React, { useState } from "react";
import { Typography, Card, CardContent, TextField, CircularProgress, Dialog } from "@material-ui/core";
import steps from "../utils/vars";

// test commit

export default function CurrentStep({ activeStep, setTranslation, translations }) {
  const [loading, setLoading] = useState(0);
  const [showFullScreen, setShowFullScreen] = useState(false);

  function handleChange(e) {
    const newTranslation = [...translations];
    newTranslation[activeStep][e.target.name] = e.target.value;
    setTranslation(newTranslation);
  }

  const step = steps[activeStep];

  const fields = Object.keys(step.fields).map(field => {
    let longname = false;
    if (step.fields[field].length > 30) {
      longname = true;
    }
    return (
      <div>
        <Typography variant="caption">{steps[activeStep].fields[field]}</Typography>
        <TextField
          key={field}
          value={translations[activeStep][field]}
          name={field}
          onChange={handleChange}
          multiline={longname}
          rows={5}
          variant="outlined"
          margin="dense"
        />
      </div>
    );
  });

  return (
    <>
      <div>
        <Typography variant="body1" style={{ marginBottom: 15 }}>
          Fill in the translation for each field. On the right you can see the context of the text that you're translating.
        </Typography>
        <div style={{ display: "flex", flexDirection: "column" }}>{fields}</div>
      </div>
      <div>
        <Card>
          <CardContent style={{ textAlign: "center" }}>
            {!loading ? (
              <img
                src={step.image}
                height={600}
                style={{ width: "100%", objectFit: "contain", height: "auto" }}
                alt=""
                onLoad={() => setLoading(false)}
                onClick={() => setShowFullScreen(true)}
              />
            ) : (
              <CircularProgress />
            )}
          </CardContent>
        </Card>
        <div style={{ display: "flex", marginTop: 10 }}>
          {step.extras &&
            step.extras.map(extra => (
              <Card style={{ marginRight: 10 }}>
                <CardContent style={{ textAlign: "center" }}>
                  <img src={extra} height={150} style={{ width: "100%", objectFit: "contain" }} alt="" />
                </CardContent>
              </Card>
            ))}
        </div>
        <Dialog open={showFullScreen} onClose={() => setShowFullScreen(false)} maxWidth="lg">
          <img
            src={step.image}
            style={{ width: "100%", objectFit: "contain" }}
            alt=""
            onLoad={() => setLoading(false)}
            onClick={() => setShowFullScreen(true)}
          />
        </Dialog>
      </div>
    </>
  );
}
