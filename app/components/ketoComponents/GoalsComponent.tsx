import React, { ChangeEvent } from 'react';
import { RadioGroup, FormControlLabel, Radio, Button } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

interface GoalsComponentProps {
  goalsValue: string;
  handleGoalsChange: (event: ChangeEvent<HTMLInputElement>) => void;
  scrollToGoalsDetail: () => void;
}

const GoalsComponent: React.FC<GoalsComponentProps> = ({
  goalsValue,
  handleGoalsChange,
  scrollToGoalsDetail,
}) => (
  <>
    <div className="flex flex-col justify-center items-center mt-8">
      <div>
        <span className="inline-block text-2xl mb-4">
          Your End Goals of a Ketogenic diet?{' '}
        </span>{' '}
        <Button style={{ color: '	#5A5A5A' }} onClick={scrollToGoalsDetail}>
          {' '}
          <InfoIcon
            className="inline-block text-3xl"
            style={{ marginBottom: '10px' }}
          />{' '}
        </Button>
      </div>
      <RadioGroup
        row
        aria-label="weight"
        name="row-radio-buttons-group"
        value={goalsValue}
        onChange={handleGoalsChange}
      >
        <FormControlLabel
          value="loseWeight"
          control={<Radio />}
          sx={{
            '& .MuiSvgIcon-root': {
              fontSize: 24,
            },
          }}
          label={
            <>
              <div>Lose Weight</div>
            </>
          }
        />
        <FormControlLabel
          value="maintain"
          control={<Radio />}
          sx={{
            '& .MuiSvgIcon-root': {
              fontSize: 24,
            },
          }}
          label={
            <>
              <div>Maintain</div>
            </>
          }
        />
        <FormControlLabel
          value="gainMuscle"
          control={<Radio />}
          sx={{
            '& .MuiSvgIcon-root': {
              fontSize: 24,
            },
          }}
          label={<div>Gain Muscle</div>}
        />
      </RadioGroup>
    </div>
    <hr className="my-4" />
  </>
);

export default GoalsComponent;
