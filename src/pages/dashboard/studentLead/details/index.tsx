import React from "react";
import LaptopNav from "@/components/Dashnav";
import Link from "next/link";

const YourEvents = () => {
  const yourEvents = [
    {
      applicationNo: "GD0001",
      title: "Clash Models",
      club: "GDSC",
      date: "06.10.2023",
      status: "Approved",
    },
    {
      applicationNo: "GD0002",
      title: "Clash Models",
      club: "GDSC",
      date: "06.10.2023",
      status: "Pending",
    },
    {
      applicationNo: "GD003",
      title: "Clash Models",
      club: "GDSC",
      date: "06.10.2023",
      status: "Approved",
    },
    {
      applicationNo: "GD0004",
      title: "Clash Models",
      club: "GDSC",
      date: "06.10.2023",
      status: "Rejected",
    },
  ];

  return (
    <div>
      <div className="bg-light dark:bg-dark dark:text-light min-h-screen h-fit pb-5 ">
        <LaptopNav />
        <div className="flex flex-col gap-5 px-10">
          <h2 className="text-xl md:text-3xl tracking-wide mb-4 px-8 mt-5 font-medium">
            Your Events:
          </h2>
          <div className="grid grid-cols-4 gap-5 px-5 font-semibold text-xl">
            <h3>Application Number</h3>
            <h3>Event Title</h3>
            <h3>Date of Event</h3>
            <h3>Status</h3>
          </div>
          <div className="h-1 w-full dark:bg-light bg-dark"></div>

          <div className="flex flex-col gap-4 px-8">
            {yourEvents.map((e) => (
              <div
                className="grid-cols-4 grid gap-5 font-medium"
                key={e.applicationNo}
              >
                <h3>{e.applicationNo}</h3>
                <Link
                  href={`/dashboard/studentLead/details/${encodeURIComponent(
                    e.applicationNo
                  )}`}
                >
                  {e.title}
                </Link>
                <h3>{e.date}</h3>
                <h3
                  className={
                    e.status == "Approved"
                      ? "text-[#096C00]"
                      : e.status == "Rejected"
                      ? "text-[#C40000]"
                      : "text-[#148DA8]"
                  }
                >
                  {e.status}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourEvents;
