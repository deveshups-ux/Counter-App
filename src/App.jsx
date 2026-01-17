import React, { useState } from "react";

const App = () => {
  const [num, setnum] = useState(0);

  function Increase() {
    setnum(num + 1);
  }
  function Decrease() {
    setnum(num - 1);
  }
  function Jump() {
    setnum(num + 10);
  }

  return (
    <div className="bg-slate-100 flex justify-center items-center h-screen w-full">
      <div className="w-[380px] h-[420px] rounded-3xl bg-gradient-to-br from-sky-200 to-indigo-200 shadow-2xl p-6">
        <div className="h-1/2 flex justify-center items-center">
          <h1 className="text-8xl font-bold text-slate-700 drop-shadow">
            {num}
          </h1>
        </div>

        <div className="flex flex-col justify-center items-center gap-4 h-1/2">
          <button
            onClick={Increase}
            className="w-full py-3 bg-emerald-500 text-white rounded-2xl font-semibold hover:bg-emerald-600 active:scale-95 transition"
          >
            INCREASE ONE
          </button>

          <button
            onClick={Decrease}
            className="w-full py-3 bg-rose-500 text-white rounded-2xl font-semibold hover:bg-rose-600 active:scale-95 transition"
          >
            DECREASE ONE
          </button>

          <button
            onClick={Jump}
            className="w-full py-3 bg-indigo-500 text-white rounded-2xl font-semibold hover:bg-indigo-600 active:scale-95 transition"
          >
            JUMP BY 10
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
