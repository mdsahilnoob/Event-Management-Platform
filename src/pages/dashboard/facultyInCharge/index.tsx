import React from "react";
import FacultyNav from "@/components/FacultyNav";
import Image from "next/image";
import { Button } from "@material-tailwind/react";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const FacultyInCharge = () => {
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
    <div className="bg-light dark:bg-dark dark:text-light min-h-screen h-fit pb-5">
      <FacultyNav />
      <div className="flex justify-between px-20 mt-10 gap-10">
        <div
          className={`border-dark dark:border-light border-2 gap-4 p-10 min-h-fit flex flex-col ${inter.className} light dark w-full`}
        >
          <h2 className="text-xl md:text-3xl tracking-wide mb-4 px-8 mt-5 font-medium">
            Your Events:
          </h2>
          <div className="grid grid-cols-4 gap-5 px-5 font-medium">
            <h3>Application Number</h3>
            <h3>Event Title</h3>
            <h3>Date of Event</h3>
            <h3>Status</h3>
          </div>
          <div className="h-1 w-full bg-light"></div>

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
            <Button
              className={`text-dark bg-light dark:bg-light_tert font-regular px-20 py-2 light dark`}
            >
              View More
            </Button>
          </div>
        </div>
        <div className="flex flex-col dark:bg-light w-1/2 items-center py-10 gap-10 rounded-md bg-dark text-light">
          <Image src="/devansh.png" alt="profile-pic" width={64} height={64} />
          <div className="dark:bg-dark dark:text-light bg-light text-dark w-full items-center flex justify-center py-2 text-xl">
            Dr. SK Dash
          </div>
          <div className="dark:text-dark/60 flex flex-col gap-2 text-md justify-center items-center">
            <span>Faculty ID: 10005688</span>
            <span>Department: CSE</span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacultyInCharge;
