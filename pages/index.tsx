
import { Inter } from "next/font/google";
import { Accordion } from "@/components/Accordion"
import Rating from "@/components/Rating"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
      >
        <Accordion />
        <Accordion multiple />
        <Rating />
      </main>
    </>
  );
}
