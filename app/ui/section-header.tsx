import React from "react";
import { space_mono } from "../fonts/fonts";

interface SectionHeaderProps {
  title: string;
}

export default function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <>
      <div className="pb-2">
        <p className={`text-dark-grayish-cyan font-bold ${space_mono.className}`}>
          {title}
        </p>
      </div>
    </>
  );
}
