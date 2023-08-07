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
        <section className="flex w-full mx-16 h-[70vh]">
          <div className="flex flex-col w-[60vw] gap-10">
            <div className=" border-dark dark:border-light border-2 gap-8 h-full flex flex-col items-center justify-center">
              <h1 className="uppercase text-7xl">Ibento</h1>
              <div className="flex flex-col gap-4">
                <h3 className="text-lg">Work Smart, Event Hard</h3>
                <button className="text-dark bg-light px-9 py-2">
                  Get Started
                </button>
              </div>
            </div>
            <button className="uppercase h-32 text-dark bg-light p-4">
              <div className="w-full h-full border-4 text-2xl tracking-[18px] border-dark grid items-center">
                Get in touch
              </div>
            </button>
          </div>

          <div></div>
        </section>
      </main>
    </div>
  );
}
