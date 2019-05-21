import React, { useState } from "react";
import { Typography, Card, CardContent, TextField, CircularProgress, Dialog, withStyles } from "@material-ui/core";
import steps from "../utils/vars";

// test commit

const styles = {
  flex: {
    display: "flex",
    "& span": {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      flex: 1
    },
    "& > div": {
      width: 200
    }
  },
  img: {
    width: "100%",
    objectFit: "contain",
    height: "auto"
  },
  card: {
    marginBottom: 10
  }
};

function CurrentStep(props) {
  const { activeStep, setTranslation, translations, classes } = props;

  const [loading, setLoading] = useState(0);
  const [showFullScreen, setShowFullScreen] = useState(false);

  function handleChange(e) {
    const newTranslation = [...translations];
    newTranslation[activeStep][e.target.name] = e.target.value;
    setTranslation(newTranslation);
  }

  const step = steps[activeStep];

  const fields = Object.keys(step.fields).map((field, index) => {
    let longname = false;
    if (step.fields[field].length > 30) {
      longname = true;
    }
    return (
      <div className={classes.flex}>
        <Typography variant="caption">{steps[activeStep].fields[field]}</Typography>
        <TextField
          key={field}
          value={translations[activeStep][field]}
          name={field}
          onChange={handleChange}
          multiline={longname}
          rows={5}
          variant="outlined"
          margin="normal"
          label={`Field ${index + 1}`}
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
        {step.image.map(img => (
          <Card className={classes.card}>
            <CardContent style={{ textAlign: "center" }}>
              <img src={img} height={400} className={classes.img} alt="" onLoad={() => setLoading(false)} onClick={() => setShowFullScreen(img)} />
            </CardContent>
          </Card>
        ))}
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
        <Dialog open={Boolean(showFullScreen)} onClose={() => setShowFullScreen(null)} maxWidth="lg">
          <img
            src={showFullScreen}
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

export default withStyles(styles)(CurrentStep);
