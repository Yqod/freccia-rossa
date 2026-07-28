import localFont from "next/font/local";
import { Open_Sans } from "next/font/google";

export const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-open-sans",
  display: "swap",
});

export const stackSans = localFont({
  src: [
    {
      path: "../fonts/StackSansHeadline-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/StackSansHeadline-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/StackSansHeadline-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/StackSansHeadline-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/StackSansHeadline-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-stack-sans",
  display: "swap",
});
