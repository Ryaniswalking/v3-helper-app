import React, { useState } from 'react';
import { FormControl, RadioGroup, FormControlLabel, Radio } from '@mui/material';

function FormatSelector({ format, setFormat}) {

  const handleChange = (event) => {
    setFormat(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <RadioGroup row value={format} onChange={handleChange} name="format-options">
        <FormControlLabel value="XML" control={<Radio />} label="XML" />
        <FormControlLabel value="JSON" control={<Radio />} label="JSON" />
        <FormControlLabel value="OTHER" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
  );
}

export default FormatSelector;
