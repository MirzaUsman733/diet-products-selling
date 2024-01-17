// BodyTypeComponent.tsx
import React, { ChangeEvent } from "react";
import {
  Grid,
  TextField,
  Button,
  CircularProgress,
  InputLabel,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";

interface BodyTypeComponentProps {
  bodyImage: string | null;
  bustSize: number;
  setBustSize: (value: number) => void;
  waistSize: number;
  setWaistSize: (value: number) => void;
  highHipSize: number;
  setHighHipSize: (value: number) => void;
  hipSize: number;
  setHipSize: (value: number) => void;
  bodyShape: string | null;
  whr: string | null;
  calculateBodyType: () => void;
  loadingBodyType: boolean;
  scrollToBodyTypeDetail: () => void;
}

const BodyTypeComponent: React.FC<BodyTypeComponentProps> = ({
  bodyImage,
  bustSize,
  setBustSize,
  waistSize,
  setWaistSize,
  highHipSize,
  setHighHipSize,
  hipSize,
  setHipSize,
  bodyShape,
  whr,
  calculateBodyType,
  loadingBodyType,
  scrollToBodyTypeDetail,
}) => {
  return (
    <>
      <hr className="my-4" />
      <div className="flex flex-col justify-center items-center mt-10">
        <div className="flex">
          <InputLabel className="inline-block text-xl mb-4" htmlFor="bodyType">
            Check the Body Shape
          </InputLabel>{" "}
          &nbsp;
          {"  "}
          <Button style={{ color: "#5A5A5A" }} onClick={scrollToBodyTypeDetail}>
            {"   "}
            <InfoIcon className="inline-block text-2xl" />{" "}
          </Button>
        </div>
        <div>
          <Grid container spacing={2} direction="row">
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                className="mb-4"
                id="bustSize"
                label="Bust Size"
                type="number"
                color="success"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setBustSize(Number(e.target.value))
                }
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                className="mb-4"
                id="waistSize"
                label="Waist Size"
                type="number"
                color="success"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setWaistSize(Number(e.target.value))
                }
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                className="mb-4"
                id="highHipSize"
                label="High Hip Size"
                type="number"
                color="success"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setHighHipSize(Number(e.target.value))
                }
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                className="mb-4"
                id="hipSize"
                label="Hip Size"
                type="number"
                color="success"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setHipSize(Number(e.target.value))
                }
              />
            </Grid>
          </Grid>
        </div>
        <div>
          <Button
            variant="contained"
            color="primary"
            onClick={calculateBodyType}
            disabled={loadingBodyType}
            className="mt-4"
          >
            {loadingBodyType ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              "Click Me"
            )}
          </Button>
          <br />
          <div>
            {bodyShape && <p>{bodyShape}</p>}
            {whr && <p>{whr}</p>}
            {bodyImage && <img src={bodyImage} alt="Body Type" />}
          </div>
        </div>
      </div>
      <hr className="my-4" />
    </>
  );
};

export default BodyTypeComponent;
