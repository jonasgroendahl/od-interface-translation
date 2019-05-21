import React from "react";
import { Dialog, DialogContent, Typography, Select } from "@material-ui/core";
import { URL, translationState } from "../utils/vars";

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

        // set default

        const translationStateCopy = [...translationState];

        translationStateCopy.forEach((el, index) => {
          //console.log(el);
          const keys = Object.keys(el);
          keys.forEach(key => {
            const exist = dataQ[index] && dataQ[index][key];
            console.log(exist);
            if (exist) {
              el[key] = dataQ[index][key];
            }
          });
        });

        setTranslations(translationStateCopy);
      });
    setOpen(false);
  }

  function handleClose() {
    if (lang) {
      setOpen(false);
    }
  }

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogContent>
        <Typography variant="body1">Choose a language you want to translate to.</Typography>
        <Select native value={lang} onChange={handleChange}>
          <option disabled value="">
            Select language
          </option>
          <option>DA</option>
          <option>DE</option>
          <option>NL</option>
          <option>ES</option>
          <option>IT</option>
          <option>FR</option>
          <option>PL</option>
          <option>FI</option>
          <option>SE</option>
          <option>CN</option>
          <option>JA</option>
        </Select>
      </DialogContent>
    </Dialog>
  );
}
