import React from "react";
import { Button } from "@material-ui/core";
import { Check } from "@material-ui/icons";
import { URL } from "../utils/vars";
import formatObject from "../utils/LangFile";

export default function SubmitStep({ translations, lang }) {
  const formattedTranslation = formatObject(translations);
  console.log(formattedTranslation);

  async function submit() {
    await fetch(URL, {
      method: "POST",
      body: JSON.stringify({
        json: formattedTranslation,
        country_code: lang
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });
    alert("Updated!");
  }

  return (
    <div>
      <Button color="primary" variant="contained" onClick={submit}>
        Submit translation <Check style={{ marginLeft: 10 }} />
      </Button>
    </div>
  );
}
