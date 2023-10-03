import { Inter } from "next/font/google";
import { useEffect } from "react";
import Dashnav from "../../../components/Dashnav";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Button } from "@material-tailwind/react";
import Image from "next/image";

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
        className={`bg-light dark:bg-dark min-h-screen h-fit text-dark dark:text-light overflow-x-hidden transition duration-100 ease-in-out `}
      >
        <div className="fixed top-0 z-10 md:w-full justify-center flex flex-col">
          <Dashnav />
          <div className="px-5 md:px-20 flex py-10">
            <section className="flex pb-10 flex-col w-full md:px-10 mb-10 h-fit my-10 ">
              <div className="flex gap-24 md:flex-row flex-col">
                <div className="flex flex-col md:w-[60vw] w-full gap-10">
                  <div
                    className={`border-dark dark:border-light border-2 gap-4 py-5 p-10 md:p-0 h-full flex flex-col ${inter.className} light dark`}
                  >
                    <h1 className="text-xl md:text-3xl tracking-wide mb-4 px-8 mt-5 font-medium">
                      Upcoming Events at Your College:
                    </h1>

                    <div className="flex flex-col gap-4 px-8">
                      {upcomingEvents.map((e) => (
                        <div
                          className="flex flex-row justify-between "
                          key={e.title}
                        >
                          <h3 className="text-sm font-light">
                            {e.title} by {e.club}
                          </h3>
                          <h3 className="text-sm font-light">{e.date}</h3>
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
              </div>
            </section>
            <section className="flex flex-col dark:bg-light w-full items-center py-10 gap-10 rounded-md bg-dark text-light">
              <Image
                src="/devansh.png"
                alt="profile-pic"
                width={64}
                height={64}
              />
              <div className="dark:bg-dark dark:text-light bg-light text-dark w-full items-center flex justify-center py-2 text-xl">
                    Devansh Asthana
              </div>
              <div className="dark:text-dark/60 flex flex-col gap-2 text-xl justify-center items-center">
                <span>Roll: 2105895</span>
                <span>Club: GDSC</span>
                <span>Role: Lead</span>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
