import React from "react";
import "./App.css";
import { classnames } from "tailwindcss-classnames";

function App() {
  // const _className = classnames(
  //   ""
  // );
  return (
    <div className="App">
      {/* <button className={_className}>Save changes</button> */}
      <button className="px-6 py-2 rounded bg-slate-400 hover:bg-slate-500 text-slate-100">
        Button
      </button>
      <button className="px-6 py-2 rounded bg-zinc-400 hover:bg-zinc-500 text-zinc-100">
        Button
      </button>
      <button className="px-6 py-2 rounded bg-neutral-400 hover:bg-neutral-500 text-neutral-100">
        Button
      </button>
      <button className="px-6 py-2 rounded bg-stone-400 hover:bg-stone-500 text-stone-100">
        Button
      </button>
      <button className="px-6 py-2 text-orange-100 bg-orange-400 rounded hover:bg-orange-500">
        Button
      </button>
      <button className="px-6 py-2 rounded bg-amber-400 hover:bg-amber-500 text-amber-100">
        Button
      </button>
      <button className="px-6 py-2 rounded bg-lime-400 hover:bg-lime-500 text-lime-100">
        Button
      </button>
      <button className="px-6 py-2 rounded bg-emerald-400 hover:bg-emerald-500 text-emerald-100">
        Button
      </button>
      <button className="px-6 py-2 text-teal-100 bg-teal-400 rounded hover:bg-teal-500">
        Button
      </button>
      <button className="px-6 py-2 rounded bg-cyan-400 hover:bg-cyan-500 text-cyan-100">
        Button
      </button>
      <button className="px-6 py-2 rounded bg-sky-400 hover:bg-sky-500 text-sky-100">
        Button
      </button>
      <button className="px-6 py-2 rounded bg-violet-400 hover:bg-violet-500 text-violet-100">
        Button
      </button>
      <button className="px-6 py-2 text-purple-100 bg-purple-400 rounded hover:bg-purple-500">
        Button
      </button>
      <button className="px-6 py-2 rounded bg-fuchsia-400 hover:bg-fuchsia-500 text-fuchsia-100">
        Button
      </button>
      <button className="px-6 py-2 rounded bg-rose-400 hover:bg-rose-500 text-rose-100">
        Button
      </button>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
}

export default App;
