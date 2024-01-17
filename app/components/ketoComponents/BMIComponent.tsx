// BMIComponent.tsx
import React from 'react';

interface BMI {
  value: number;
  category: string;
  color: string;
  txtColor: string;
}

interface BMIComponentProps {
  bmi: BMI | null;
}

const BMIComponent: React.FC<BMIComponentProps> = ({ bmi }) => (
  <div className="h-100">
    {bmi && (
      <div
        className={`text-center ${bmi.color} ${bmi.txtColor}`}
        style={{
          margin: 0,
        }}
      >
        <hr className="m-0" />
        <div>
          <div>
            <p>BMI: {bmi.value}</p>
            <p>Category: {bmi.category}</p>
          </div>
        </div>
        <hr />
      </div>
    )}
  </div>
);

export default BMIComponent;
