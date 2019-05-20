import React from "react";
import { Dialog, DialogContent, Typography, Select } from "@material-ui/core";
import { URL } from "../utils/vars";

export default function LanguageSelector(props) {
  const { lang, setLang, open, setOpen, setTranslations } = props;

  function handleChange(e) {
    console.log("handleChange", e.target.value);
    setLang(e.target.value);
    fetch(`${URL}?country_code=${e.target.value}`)
      .then(res => res.json())
      .then(data => {
        const dataQ = JSON.parse(data);
        console.log(dataQ);
        setTranslations(dataQ);
      });
    setOpen(false);
  }

  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogContent>
        <Typography variant="body1">Choose a language you want to translate to.</Typography>
        <Select native value={lang} onChange={handleChange}>
          <option disabled value="">
            Select language
          </option>
          <option>DA</option>
          <option>DE</option>
          <option>NL</option>
        </Select>
      </DialogContent>
    </Dialog>
  );
}
