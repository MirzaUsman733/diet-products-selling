import React, { ChangeEvent } from 'react';
import { Grid, Radio, RadioGroup, FormControlLabel, TextField, IconButton, Button } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import Male from '@mui/icons-material/Male';
import Female from '@mui/icons-material/Female';

interface GenderAgeComponentProps {
  genderValue: string;
  setGenderValue: React.Dispatch<React.SetStateAction<string>>;
  age: string;
  setAge: React.Dispatch<React.SetStateAction<string>>;
  scrollFunction: () => void;
}

const GenderAgeComponent: React.FC<GenderAgeComponentProps> = ({
  genderValue,
  setGenderValue,
  age,
  setAge,
  scrollFunction,
}) => (
  <>
    <hr />
    <div className="flex flex-col justify-center items-center mt-8">
      <div className="flex">
        <label className="inline-block text-2xl mb-4" htmlFor="age">
          Your Gender & Age
        </label>{' '}
        &nbsp;
        {'  '}
        <Button style={{ color: '#5A5A5A' }} onClick={scrollFunction}>
          {'   '}
          <InfoIcon className="inline-block text-3xl" />{' '}
        </Button>
      </div>
      <div className="text-center">
        <Grid container spacing={2} direction="row">
          <Grid item xs={12} sm={6}>
            <RadioGroup
              row
              aria-label="gender"
              name="row-radio-buttons-group"
              value={genderValue}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setGenderValue(e.target.value)}
            >
              <FormControlLabel
                value="male"
                control={<Radio />}
                label={
                  <div>
                    <IconButton color="primary" size="small">
                      <Male />
                    </IconButton>
                    Male
                  </div>
                }
              />
              <FormControlLabel
                value="female"
                control={<Radio />}
                label={
                  <div>
                    <IconButton color="error" size="small">
                      <Female />
                    </IconButton>
                    Female
                  </div>
                }
              />
            </RadioGroup>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              className="mb-4 mt-3"
              id="age"
              label="Age"
              type="number"
              color="info"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setAge(e.target.value)}
            />
          </Grid>
        </Grid>
      </div>
    </div>
    <hr />
  </>
);

export default GenderAgeComponent;
