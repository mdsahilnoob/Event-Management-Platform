import { useEffect } from "react";
import LaptopNav from "@/components/Navbar";
import Link from "next/link";

export default function EventsPage() {
  useEffect(() => {
    if (!localStorage.getItem("theme")) {
      localStorage.setItem("theme", "light");
    }
  }, []);

  const allEvents = [
    {
      club: "GDSC",
      title: "Clash Models",
      date: "06.10.2023",
    },
    {
      club: "Tech Club",
      title: "Tech Expo",
      date: "07.10.2023",
    },
    {
      club: "Art Club",
      title: "Art Exhibition",
      date: "08.10.2023",
    },
    {
      club: "Science Society",
      title: "Science Fair",
      date: "09.10.2023",
    },
    {
      club: "Music Club",
      title: "Concert",
      date: "10.10.2023",
    },
    {
      club: "Sports Club",
      title: "Sports Tournament",
      date: "11.10.2023",
    },
    {
      club: "Dance Club",
      title: "Dance Showcase",
      date: "12.10.2023",
    },
    {
      club: "Literary Club",
      title: "Book Reading",
      date: "13.10.2023",
    },
    {
      club: "Film Club",
      title: "Movie Screening",
      date: "14.10.2023",
    },
    {
      club: "Coding Club",
      title: "Hackathon",
      date: "15.10.2023",
    },
    {
      club: "Art Club",
      title: "Art Workshop",
      date: "16.10.2023",
    },
    {
      club: "Music Club",
      title: "Music Festival",
      date: "17.10.2023",
    },
    {
      club: "Debate Club",
      title: "Debate Competition",
      date: "18.10.2023",
    },
    {
      club: "Photography Club",
      title: "Photography Exhibition",
      date: "19.10.2023",
    },
    {
      club: "Business Club",
      title: "Entrepreneurship Seminar",
      date: "20.10.2023",
    },
    {
      club: "Fashion Club",
      title: "Fashion Show",
      date: "21.10.2023",
    },
    {
      club: "Environmental Club",
      title: "Green Initiative Event",
      date: "22.10.2023",
    },
    {
      club: "Chess Club",
      title: "Chess Tournament",
      date: "23.10.2023",
    },
    {
      club: "Drama Club",
      title: "Theater Performance",
      date: "24.10.2023",
    },
    {
      club: "Robotics Club",
      title: "Robotics Exhibition",
      date: "25.10.2023",
    },
  ];

  return (
    <div>
      <div className="fixed top-0 z-10 md:w-full justify-center flex flex-col items-center dark:text-light">
        <LaptopNav />
      </div>
      <main className="bg-light dark:bg-dark min-h-screen py-28 h-fit text-dark dark:text-light transition duration-100 ease-in-out">
        <div className="px-5 md:px-20 flex py-10">
          <section className="flex pb-10 flex-col w-full md:px-10 mb-10 h-fit">
            <div className="border-dark dark:border-light border-2 p-10 min-h-fit flex flex-col light dark gap-5">
              <h2 className="text-xl md:text-3xl tracking-wide mb-4 px-8 mt-5 font-medium">
                All Events:
              </h2>
              <div className="grid grid-cols-4 gap-2 px-8 font-medium text-xl">
                <h3>Club Name</h3>
                <h3>Event Title</h3>
                <h3>Date of Event</h3>
                <h3>Click To Apply</h3>
              </div>
              <div className="h-1 w-full dark:bg-light bg-dark"></div>
              <div className="flex flex-col gap-8 px-8">
                {allEvents.map((e, index) => (
                  <div className="grid grid-cols-4 gap-5 font-medium" key={index}>
                    <h3>{e.club}</h3>
                    <h3>{e.title}</h3>
                    <h3>{e.date}</h3>
                    <Link href={`/apply/${encodeURIComponent(e.title)}`}>Apply</Link>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
