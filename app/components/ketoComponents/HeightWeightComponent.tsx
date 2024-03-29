import React, { ChangeEvent } from 'react';
import { Grid, TextField, RadioGroup, FormControlLabel, Radio, Container } from '@mui/material';

interface HeightWeightComponentProps {
  weight: string;
  setWeight: React.Dispatch<React.SetStateAction<string>>;
  weightUnit: string;
  setWeightUnit: React.Dispatch<React.SetStateAction<string>>;
  height: string;
  setHeight: React.Dispatch<React.SetStateAction<string>>;
  heightFeet: string;
  setHeightFeet: React.Dispatch<React.SetStateAction<string>>;
  heightInches: string;
  setHeightInches: React.Dispatch<React.SetStateAction<string>>;
  heightUnit: string;
  setHeightUnit: React.Dispatch<React.SetStateAction<string>>;
}

const HeightWeightComponent: React.FC<HeightWeightComponentProps> = ({
  weight,
  setWeight,
  weightUnit,
  setWeightUnit,
  height,
  setHeight,
  heightFeet,
  setHeightFeet,
  heightInches,
  setHeightInches,
  heightUnit,
  setHeightUnit,
}) => (
  <div className="mb-4">
    <Container>
      <Grid container spacing={2} direction="row">
        <Grid item xs={12} sm={heightUnit === 'cm' ? 6 : 4}>
          <TextField
            className="mb-4"
            id="weight"
            label="Weight"
            type="number"
            color="warning"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setWeight(e.target.value)}
          />
          <RadioGroup
            row
            aria-label="weightUnit"
            name="row-radio-buttons-group"
            value={weightUnit}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setWeightUnit(e.target.value)}
          >
            <FormControlLabel value="kg" control={<Radio />} label="kg" />
            <FormControlLabel value="lbs" control={<Radio />} label="lbs" />
          </RadioGroup>
        </Grid>
        <Grid item xs={12} sm={heightUnit === 'cm' ? 6 : 8}>
          {heightUnit === 'cm' ? (
            <TextField
              className="mb-4"
              id="height"
              label="Height (cm)"
              type="number"
              color="error"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setHeight(e.target.value)}
            />
          ) : (
            <div>
              <TextField
                className="mb-4"
                id="heightFeet"
                label="Feet"
                type="number"
                color="error"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setHeightFeet(e.target.value)}
              />
              <TextField
                className="mb-4"
                id="heightInches"
                label="Inches"
                type="number"
                color="error"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setHeightInches(e.target.value)}
              />
            </div>
          )}

          <RadioGroup
            row
            aria-label="heightUnit"
            name="row-radio-buttons-group"
            value={heightUnit}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setHeightUnit(e.target.value)}
          >
            <FormControlLabel value="cm" control={<Radio />} label="cm" />
            <FormControlLabel value="feet" control={<Radio />} label="feet" />
          </RadioGroup>
        </Grid>
      </Grid>
    </Container>
  </div>
);

export default HeightWeightComponent;
