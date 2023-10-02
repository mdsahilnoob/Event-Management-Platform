import { Inter } from "next/font/google";
import { useEffect } from "react";
import Dashnav from "../../../components/Dashnav";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Button } from "@material-tailwind/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  useEffect(() => {
    if (!localStorage.getItem("theme")) {
      localStorage.setItem("theme", "light");
    }
  }, []);

  const upcomingEvents = [
    { title: "Clash Models", club: "GDSC", date: "06.10.2023" },
    { title: "Clash Models", club: "GDSC", date: "06.10.2023" },
    { title: "Clash Models", club: "GDSC", date: "06.10.2023" },
  ];

  return (
    <div className={inter.className}>
      <main
        className={`bg-light dark:bg-dark min-h-screen h-fit text-dark dark:text-light overflow-x-hidden transition duration-100 ease-in-out`}
      >
        <div className="fixed top-0 z-10 flex md:w-full justify-center">
          <Dashnav />
        </div>
        <div className="px-5 md:px-2">
          <section className="flex pb-10 flex-col w-full md:mx-16 mb-10 h-fit md:mt-44 mt-16 ">
            <div className="flex gap-24 md:flex-row flex-col">
              <div className="flex flex-col md:w-[60vw] w-full gap-10">
                <div
                  className={`border-dark dark:border-light border-2 gap-4 py-5 p-10 md:p-0 h-full flex flex-col ${inter.className} light dark`}
                >
                  <h1 className="text-xl md:text-xl tracking-wide mb-4 px-8 mt-2 font-medium">
                    Upcoming Events at Your College:
                  </h1>

                  <div className="flex flex-col gap-4 px-8">
                    {upcomingEvents.map((e)=>(

                      <div className="flex flex-row justify-between " key={e.title}>
                        <h3 className="text-lg">{e.title} by {e.club}</h3>
                        <h3>{e.date}</h3>
                      </div>
                    ))}
                    <Button
                      className={`text-dark bg-light dark:bg-light_tert font-regular px-20 py-2 light dark`}
                    >
                      View More
                    </Button>
                  </div>
                </div>
                <Button
                  className={`uppercase h-20 md:h-32 text-dark bg-light_tert font-normal dark:bg-light p-4 light dark`}
                >
                  <div className="w-full h-full border-2 md:text-2xl text-md md:tracking-[18px] tracking-wide border-dark flex justify-center items-center transition ease-in duration-100">
                    Apply for New Event
                    <AiOutlineArrowRight />
                  </div>
                </Button>
              </div>

              {/* Rest of your content */}
            </div>
          </section>
          {/* Other sections */}
        </div>
      </main>
    </div>
  );
}
