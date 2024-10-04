import { Inter, Lora, Source_Sans_3, Space_Mono } from "next/font/google";
// define your variable fonts
const inter = Inter({ subsets: ["latin"] });
const lora = Lora({ subsets: ["latin"] }); // Add subsets here
const space_mono = Space_Mono({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

// define 2 weights of a non-variable font
const sourceCodePro400 = Source_Sans_3({ weight: "400", subsets: ["latin"] }); // Add subsets here
const sourceCodePro700 = Source_Sans_3({ weight: "700", subsets: ["latin"] }); // Add subsets here

export { inter, lora, sourceCodePro400, sourceCodePro700, space_mono };
