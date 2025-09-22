"use client";
import { useState } from "react";

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  options: Option[];
  placeholder?: string;
  onChange?: (value: string) => void;
}

export default function CustomSelect({
  options,
  placeholder = "Seleziona...",
  onChange,
}: CustomSelectProps) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (value: string) => {
    setSelected(value);
    setOpen(false);
    if (onChange) onChange(value);
  };

  return (
    <div className="relative w-full">
      {/* Box chiuso */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full rounded-md border border-[#e6d39a]/50 bg-zinc-900 px-3 py-2 text-left text-white hover:bg-zinc-800 transition"
      >
        {selected || placeholder}
        <span className="float-right">▾</span>
      </button>

      {/* Menu aperto */}
      {open && (
        <div className="absolute z-10 mt-1 w-full rounded-md bg-zinc-900 border border-zinc-800 shadow-lg">
          <ul className="max-h-60 overflow-y-auto text-sm text-white">
            {options.map((opt) => (
              <li
                key={opt.value}
                onClick={() => handleSelect(opt.value)}
                className="px-4 py-2 cursor-pointer hover:bg-[#e6d39a]/20"
              >
                {opt.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
