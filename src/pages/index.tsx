import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect } from "react";
import Switcher from "../components/Switcher";
import Navbar from "../components/Navbar";
import { AiOutlineArrowRight } from "react-icons/ai";
import NewsCards from "@/components/NewsCards";
import { heroNews } from "../../constants";

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
        <section className="flex flex-col w-full md:mx-16 px-2 h-screen mb-10 md:mt-0 mt-10">
          <Navbar />
          <div className="flex gap-24 md:flex-row flex-col">
            <div className="flex flex-col md:w-[60vw] w-full gap-10">
              <div className=" border-dark dark:border-light border-2 gap-8 h-full flex flex-col items-center justify-center">
                <h1 className="uppercase text-7xl md:tracking-[24px] tracking-widest">Ibento</h1>
                <div className="flex flex-col gap-4">
                  <h3 className="text-lg">Work Smart, Event Hard</h3>
                  <button className="text-dark bg-light px-9 py-2">
                    Get Started
                  </button>
                </div>
              </div>
              <button className="uppercase h-32 text-dark bg-light_tert dark:bg-light p-4">
                <div className="w-full h-full border-4 text-2xl md:tracking-[18px] tracking-wide border-dark flex justify-center items-center hover:gap-2 transition ease-in duration-100">
                  Get in touch
                  <AiOutlineArrowRight />
                </div>
              </button>
            </div>

            <div className="flex flex-col gap-5 w-1/2">
              {heroNews.map((news) => (
                <div id={news.title}>
                  <NewsCards
                    name={news.name}
                    content={news.content}
                    title={news.title}
                    image={news.image}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
