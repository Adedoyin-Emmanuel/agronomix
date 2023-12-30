import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { ReduxProvider } from "./store/providers/provider";

export const metadata: Metadata = {
  title: "Agronomix",
  description: "Elevate Your Agro Shopping Experience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Toaster />
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
