import React from "react";
import Image from "next/image";
import LaptopNav from "@/components/Dashnav";
import {AiOutlineUpload} from "react-icons/ai"

const Apply = () => {
  return (
    <div className="bg-light dark:bg-dark min-h-screen h-fit pb-5">
      <LaptopNav />
      <div className="dark:bg-light mx-10 px-5 mt-10 py-10">
        <form action="" className="flex justify-between dark:text-dark">
          <div className="w-full pr-16">
            <div className="flex gap-10">
              <div className="flex flex-col">
                <label htmlFor="date">Date of Event</label>
                <input
                  type="date"
                  className="py-2 px-2 bg-light border-2 border-dark"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="date">Venue Required</label>
                <input
                  type="text"
                  className="py-2 px-2 bg-light border-2 border-dark"
                />
              </div>
            </div>
            <div className="flex flex-col mt-5 gap-5">
              <div className="flex flex-col">
                <label htmlFor="date">Event Title</label>
                <input
                  type="text"
                  className="py-2 px-2 bg-light border-2 border-dark"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="date">Description</label>
                <textarea
                  className="py-2 px-2 bg-light border-2 border-dark"
                  rows={5} cols={10}
                >
                    Provide a brief description of your event, including objective of event, target audience, and number of expected participants
                </textarea>
              </div>
              <div className="flex flex-col">
                <label htmlFor="Requirements">Requirements</label>
                <textarea
                  className="py-2 px-2 bg-light border-2 border-dark"
                  rows={5} cols={10}
                >
                    Add Requirements
                </textarea>
              </div>
            </div>
            <div className="flex mt-5 gap-5">
                <input type="file" className="flex items-center gap-3 w-fit dark:bg-dark dark:text-light px-2 py-2" />
                <button className="flex items-center gap-3 w-fit dark:bg-dark dark:text-light px-5 py-2" type="submit">
                    <span>Submit</span>
                </button>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-3">
            <Image 
                src="/profile-pic-for-apply.png"
                alt="profile-pic"
                height={96}
                width={96}
                className="rounded-full"
            />
              <div className="flex flex-col">
                <label htmlFor="date">Student Name</label>
                <input
                  type="text"
                  className="py-2 px-2 bg-light border-2 border-dark cursor-not-allowed"
                  value="Devansh Asthana"
                  readOnly
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="date">Club Name</label>
                <input
                  type="text"
                  className="py-2 px-2 bg-light border-2 border-dark cursor-not-allowed"
                  value="GDSC"
                  readOnly
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="date">Role</label>
                <input
                  type="text"
                  className="py-2 px-2 bg-light border-2 border-dark cursor-not-allowed"
                  value="Club Lead"
                  readOnly
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="date">Stream</label>
                <input
                  type="text"
                  className="py-2 px-2 bg-light border-2 border-dark cursor-not-allowed"
                  value="CSE"
                  readOnly
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="date">Faculty In Charge</label>
                <input
                  type="text"
                  className="py-2 px-2 bg-light border-2 border-dark cursor-not-allowed"
                  value="Dr. M. Mishra"
                  readOnly
                />
              </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Apply;
