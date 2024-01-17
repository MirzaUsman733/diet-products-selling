import React, { ChangeEvent } from 'react';

interface DurationInputProps {
  duration: number | string;
  setDuration: React.Dispatch<React.SetStateAction<number | string>>;
  customDuration: string;
  setCustomDuration: React.Dispatch<React.SetStateAction<string>>;
}

const DurationInput: React.FC<DurationInputProps> = ({
  duration,
  setDuration,
  customDuration,
  setCustomDuration,
}) => {
  const handleDurationChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    if (value === 'custom') {
      setDuration(value);
    } else {
      setDuration(Number(value));
      setCustomDuration('');
    }
  };

  return (
    <>
      <div className="mb-4">
        <label htmlFor="duration" className="block text-sm font-medium text-gray-700">
          Duration
        </label>
        <select
          id="duration"
          name="duration"
          value={duration}
          onChange={handleDurationChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value={3}>Three Months</option>
          <option value={6}>Six Months</option>
          <option value={12}>1 Year</option>
          <option value="custom">Custom</option>
        </select>
        {duration === 'custom' && (
          <input
            type="number"
            id="customDuration"
            name="customDuration"
            value={customDuration}
            onChange={(e) => setCustomDuration(e.target.value)}
            className="mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm"
            placeholder="Custom Duration (in months)"
          />
        )}
      </div>
      <hr className="my-4" />
    </>
  );
};

export default DurationInput;
