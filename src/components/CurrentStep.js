import React, { useState } from "react";
import { Typography, Card, CardContent, TextField, Button, CircularProgress } from "@material-ui/core";
import steps, { URL } from "../utils/vars";
import { Check } from "@material-ui/icons";

// test commit

export default function CurrentStep({ activeStep, setTranslation, translations, lang }) {
  const [loading, setLoading] = useState(0);

  function handleChange(e) {
    const newTranslation = [...translations];
    newTranslation[activeStep][e.target.name] = e.target.value;
    setTranslation(newTranslation);
    console.log(newTranslation);
  }

  async function submit() {
    console.log(translations);
    await fetch(URL, {
      method: "POST",
      body: JSON.stringify({
        json: translations,
        country_code: lang
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });
    alert("Updated!");
  }

  let renderStep = null;

  if (activeStep < 8) {
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

    renderStep = (
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
                <img src={step.image} height={600} style={{ width: "100%" }} onLoad={() => console.log("Loaded...!") || setLoading(false)} />
              ) : (
                <CircularProgress />
              )}
            </CardContent>
          </Card>
        </div>
      </>
    );
  } else {
    renderStep = (
      <Button color="primary" variant="contained" onClick={submit}>
        Submit translation <Check />
      </Button>
    );
  }
  return renderStep;
}
