import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect } from "react";
import Switcher from "../../components/Switcher"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  
  return (
    <main
      className={`bg-primary dark:bg-secondary min-h-screen h-fit text-secondary dark:text-primary`}
    >
      Hwlooo
      <Switcher />
    </main>
  );
}
