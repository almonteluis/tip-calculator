import React from "react";
import { space_mono } from "@/app/fonts/fonts";

export default function footer() {
  return (
    <>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <div
          className={`text-very-light-grayish-cyan text-2xl ${space_mono.className}`}
        >
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          <span className="text-dark-grayish-cyan">
            . Coded by <a href="#">Jorge L Almonte</a>.
          </span>
        </div>
      </footer>
    </>
  );
}
