// Import necessary types from React and MUI
import React, { FC, ChangeEvent } from "react";
import { RadioGroup, FormControlLabel, Radio, IconButton,Button } from "@mui/material";
import LaptopIcon from "@mui/icons-material/Laptop";
import SportsMartialArtsIcon from "@mui/icons-material/SportsMartialArts";
import InfoIcon from "@mui/icons-material/Info";
import SnowshoeingIcon from "@mui/icons-material/Snowshoeing";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import Link from "next/link";

// Define prop types
interface ActivityComponentProps {
  activityValue: string;
  handleActivityChange: (event: ChangeEvent<HTMLInputElement>) => void;
  scrollToActivityDetail: () => void;
}

// Functional component
const ActivityComponent: FC<ActivityComponentProps> = ({
  activityValue,
  handleActivityChange,
  scrollToActivityDetail,
}) => (
  <>
    <div className="flex flex-col items-center justify-center mt-8">
      <div className="mb-4">
        <span className="inline-block text-lg mb-4">Your Activity Level </span>
        <Link href="#" passHref>
          <Button
            style={{ color: "#5A5A5A" }}
            onClick={scrollToActivityDetail}
            className="inline-block text-xl"
          >
            <InfoIcon />
          </Button>
        </Link>
      </div>
      <RadioGroup
        row
        aria-label="activity"
        name="activity-level"
        value={activityValue}
        onChange={handleActivityChange}
      >
        {/* Sedentary */}
        <FormControlLabel
          value="sedentary"
          control={<Radio />}
          label={
            <>
              <div className="flex items-center">
                <IconButton color="secondary" size="small">
                  <LaptopIcon />
                </IconButton>
                Sedentary
              </div>
            </>
          }
        />
        {/* Lightly Active */}
        <FormControlLabel
          value="lightlyActive"
          control={<Radio />}
          label={
            <>
              <div className="flex items-center">
                <IconButton color="primary" size="small">
                  <SnowshoeingIcon />
                </IconButton>
                Lightly Active
              </div>
            </>
          }
        />
        {/* Moderately Active */}
        <FormControlLabel
          value="moderatelyActive"
          control={<Radio />}
          label={
            <>
              <div className="flex items-center">
                <IconButton color="warning" size="small">
                  <DirectionsBikeIcon />
                </IconButton>
                Moderately Active
              </div>
            </>
          }
        />
        {/* Very Active */}
        <FormControlLabel
          value="veryActive"
          control={<Radio />}
          label={
            <>
              <div className="flex items-center">
                <IconButton color="success" size="small">
                  <SportsMartialArtsIcon />
                </IconButton>
                Very Active
              </div>
            </>
          }
        />
      </RadioGroup>
    </div>
    <hr className="my-8" />
  </>
);

export default ActivityComponent;
