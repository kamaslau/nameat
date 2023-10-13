// TODO handle styles for extra long name values

"use client";

import { useState, useRef } from "react";

export default function Form({ className = "", onUpdate }) {
  const [name, setName] = useState("");
  const [hint, setHint] = useState(null);

  const inputRef = useRef();

  const handleNameChange = (value) => {
    // TODO ditch non-alphabetical characters

    setName(value);

    if (value.length <= process.env.NEXT_PUBLIC_INPUT_LENGTH_MAX) {
      setHint("Please input a name (e.g., Johny, Victor, Hanako).");
      value.length === 0 && inputRef.current.focus();
    } else {
      setHint(
        `This is gonna be a l${"O".repeat(
          value.length - process.env.NEXT_PUBLIC_INPUT_LENGTH_MAX
        )}ng walk...`
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onUpdate(name);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`bg-white flex flex-col justify-center w-1/3 border p-4 ${className}`}
    >
      <fieldset className="w-full overflow-hidden relative">
        <input
          ref={inputRef}
          value={name.toUpperCase()}
          onChange={(e) => handleNameChange(e.target.value.toLowerCase())}
          className="text-center w-full border p-2"
          placeholder="Name"
          autoFocus={name.length === 0}
        />

        {hint?.length > 0 && <p className="text-center w-full my-1">{hint}</p>}
      </fieldset>

      {name.length > 0 && (
        <div className="w-full mt-4 flex justify-center gap-2">
          {name.length > 0 && (
            <button
              onClick={(e) => {
                handleNameChange("");
                onUpdate("");
              }}
              type="button"
              className="grow py-1"
            >
              Reset
            </button>
          )}

          <button className="text-white bg-black grow border py-1">
            Get Map
          </button>
        </div>
      )}
    </form>
  );
}
