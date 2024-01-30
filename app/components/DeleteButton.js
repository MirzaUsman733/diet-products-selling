'use client'
import { useState } from "react";

export default function DeleteButton({ label, onDelete }) {
  const [showConfirm, setShowConfirm] = useState(false);

  if (showConfirm) {
    return (
      <div className="fixed bg-black bg-opacity-80 inset-0 flex items-center h-300 justify-center align-center z-50">
        <div className="bg-white p-10 rounded-lg">
          <div>Are you sure you want to delete?</div>
          <div className="flex items-center justify-around gap-1 mt-5 mx-auto">
            <button
              type="button"
              onClick={() => setShowConfirm(false)}
              className="bg-gray-300 py-2 px-2 rounded-md"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                onDelete();
                setShowConfirm(false);
              }}
              type="button"
              className="bg-red-500 text-white py-2 px-3 rounded-md"
            >
              Yes, delete!
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setShowConfirm(true)}
      className="bg-red-500 text-white py-2 px-4 rounded-md"
    >
      {label}
    </button>
  );
}
