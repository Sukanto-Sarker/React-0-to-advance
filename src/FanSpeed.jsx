import { useState } from "react";

export default function FanSpeed() {
  const [speed, setSpeed] = useState(0);

  // speed অনুযায়ী animation duration
  const speedClass =
    speed === 1
      ? "animate-[spin_2s_linear_infinite]"
      : speed === 2
      ? "animate-[spin_1s_linear_infinite]"
      : speed === 3
      ? "animate-[spin_0.5s_linear_infinite]"
      : "";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-gray-100">
      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-700">
        Fan Speed Controller
      </h1>

      {/* Speed Display */}
      <p className="text-lg font-semibold">
        Speed: {speed}
      </p>

      {/* Fan */}
      <div
        className={`relative w-40 h-40 rounded-full border-4 border-gray-400 flex items-center justify-center ${speedClass}`}
      >
        {/* Blades */}
        <div className="absolute w-32 h-2 bg-gray-500 rounded"></div>
        <div className="absolute w-2 h-32 bg-gray-500 rounded"></div>
        <div className="absolute w-24 h-2 bg-gray-400 rounded rotate-45"></div>
        <div className="absolute w-2 h-24 bg-gray-400 rounded rotate-45"></div>

        {/* Center */}
        <div className="w-6 h-6 bg-gray-700 rounded-full"></div>
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mt-4">
        <button
          onClick={() => setSpeed(1)}
          className="px-4 py-2 bg-green-500 text-white font-semibold rounded hover:bg-green-600"
        >
          Speed 1
        </button>

        <button
          onClick={() => setSpeed(2)}
          className="px-4 py-2 bg-yellow-500 text-white font-semibold rounded hover:bg-yellow-600"
        >
          Speed 2
        </button>

        <button
          onClick={() => setSpeed(3)}
          className="px-4 py-2 bg-red-500 text-white font-semibold rounded hover:bg-red-600"
        >
          Speed 3
        </button>
      </div>
    </div>
  );
}
