import React from 'react';

interface ResultComponentProps {
  result: {
    calories?: number;
  };
}

const ResultComponent: React.FC<ResultComponentProps> = ({ result }) => (
  <>
    {result && (
      <>
        <p className="mt-4">
          <strong>Based on your inputs, we suggest you eat:</strong>{' '}
          {result.calories ? `${result.calories} calories` : 'N/A'}.
        </p>
      </>
    )}
  </>
);

export default ResultComponent;
