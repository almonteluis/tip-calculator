import React from "react";
import { space_mono } from "../fonts/fonts";

interface ResultsRowProps {
  title: string;
  total: number;
}

export default function resultRow({ title, total }: ResultsRowProps) {
  return (
    <div className="flex justify-between">
      <div>
        <div
          className={`text-white  font-bold text-sm ${space_mono.className}`}
        >
          {title}
        </div>
        <div className={`text-grayish-cyan text-sm ${space_mono.className}`}>
          / person
        </div>
      </div>
      <div
        className={`text-strong-cyan font-bold text-4xl ${space_mono.className}`}
      >
        ${total.toFixed(2)}
      </div>
    </div>
  );
}
