import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect } from "react";
import Switcher from "../components/Switcher";
import Navbar from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  useEffect(() => {
    localStorage.setItem("theme", "light");
  }, []);

  return (
    <div className={inter.className}>
      <main
        className={`bg-light dark:bg-dark min-h-screen h-fit text-dark dark:text-light overflow-x-hidden transition duration-100 ease-in-out`}
      >
        <Navbar />
      </main>
    </div>
  );
}
