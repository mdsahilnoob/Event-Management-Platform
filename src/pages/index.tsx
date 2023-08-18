import { Inter } from "next/font/google";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import { AiOutlineArrowRight } from "react-icons/ai";
import NewsCards from "@/components/NewsCards";
import { heroNews } from "../../constants";
import { useState } from "react";
import About from "@/components/About";
import { Button } from "@material-tailwind/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  useEffect(() => {
    if(!localStorage.getItem("theme"))
      localStorage.setItem("theme", "light");
  }, []);

  return (
    <div className={inter.className}>
      <main className={`bg-light dark:bg-dark min-h-screen h-fit text-dark dark:text-light overflow-x-hidden transition duration-100 ease-in-out`}>
        <div className="fixed top-0 z-10 flex md:w-full justify-center">
          <Navbar />
        </div>
        <div className="px-5 md:px-2">
          <section className="flex pb-10 flex-col w-full md:mx-16 mb-10 h-fit md:mt-44 mt-16 ">
            <div className="flex gap-24 md:flex-row flex-col">
              <div className="flex flex-col md:w-[60vw] w-full gap-10">
                <div className={`border-dark dark:border-light border-2 gap-8 p-10 md:p-0 h-full flex flex-col items-center justify-center ${inter.className} light dark`}>
                  <h1 className="uppercase text-5xl md:text-7xl md:tracking-[24px] tracking-widest">
                    Ibento
                  </h1>
                  <div className="flex flex-col gap-4">
                    <h3 className="text-lg">Work Smart, Event Hard</h3>
                    <Button className={`text-dark bg-light dark:bg-light_tert font-regular px-9 py-2 light dark`}>
                      Get Started
                    </Button>
                  </div>
                </div>
                <Button className={`uppercase h-20 md:h-32 text-dark bg-light_tert font-normal dark:bg-light p-4 light dark`}>
                  <div className="w-full h-full border-2 md:text-2xl text-md md:tracking-[18px] tracking-wide border-dark flex justify-center items-center hover:gap-2 transition ease-in duration-100">
                    Get in touch
                    <AiOutlineArrowRight />
                  </div>
                </Button>
              </div>

              <div className="flex flex-col gap-5 w-1/2">
                {heroNews.map((news) => (
                  <div key={news.title}>
                    <NewsCards
                      name={news.name}
                      content={news.content}
                      title={news.title}
                      image={news.image}
                      className="flex xl:flex-row flex-col mt-5 md:gap-5 gap-10 items-center"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section className="mt-10" id="about">
            <About />   
          </section>
        </div>
      </main>
    </div>
  );
}