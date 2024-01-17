import React from 'react';
import TextField from '@mui/material/TextField';
import { InputAdornment, InputLabel } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

interface SurplusInputProps {
  surplus: number;
  setSurplus: React.Dispatch<React.SetStateAction<number>>;
  scrollToSurplusDetail: () => void;
}

const SurplusInput: React.FC<SurplusInputProps> = ({ surplus, setSurplus, scrollToSurplusDetail }) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-8">
        <div className="flex">
          <InputLabel className="inline-block text-lg mb-4" htmlFor="bodyType">
            How much deficiency do you want?
          </InputLabel>{' '}
          &nbsp;
          {'  '}
          <button
            style={{ color: '#5A5A5A' }}
            onClick={scrollToSurplusDetail}
          >
            {'   '}
            <InfoIcon className="inline-block text-xl" />{' '}
          </button>
        </div>
        <TextField
          className="mb-4"
          id="surplus"
          label="Surplus"
          type="number"
          color="primary"
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            endAdornment: <InputAdornment position="end">kg.</InputAdornment>,
          }}
          value={surplus}
          onChange={(e) => setSurplus(parseFloat(e.target.value))}
        />
      </div>
      <hr className="my-4" />
    </>
  );
};

export default SurplusInput;
