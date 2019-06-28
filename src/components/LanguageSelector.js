import React from "react";
import { Dialog, DialogContent, Typography, Select } from "@material-ui/core";
import { URL, translationState } from "../utils/vars";

export default function LanguageSelector(props) {
  const { lang, setLang, open, setOpen, setTranslations } = props;

  function handleChange(e) {
    setLang(e.target.value);
    fetch(`${URL}?country_code=${e.target.value}`)
      .then(res => res.json())
      .then(data => {
        const dataQ = JSON.parse(data);

        const translationStateCopy = [...translationState];

        // take the skeleton of the translation object and fill out valid from DB
        translationStateCopy.forEach((el, index) => {
          const keys = Object.keys(el);
          keys.forEach(key => {
            const exist = dataQ[index] && dataQ[index][key];
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
          <option value="DA">Danish</option>
          <option value="DE">German</option>
          <option value="NL">Dutch</option>
          <option value="ES">Spanish</option>
          <option value="IT">Italian</option>
          <option value="FR">French</option>
          <option value="PL">Polish</option>
          <option value="CS">Czech</option>
          <option value="FI">Finnish</option>
          <option value="SE">Swedish</option>
          <option value="CN">Chinese</option>
          <option value="JA">Japanese</option>
        </Select>
      </DialogContent>
    </Dialog>
  );
}
