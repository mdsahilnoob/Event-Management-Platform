import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import { Input, Button } from "@material-tailwind/react";
import { Inter } from "next/font/google";
import NewsCards from "@/components/NewsCards";
import { loginNews } from "../../constants";


const inter = Inter({ subsets: ["latin"] });

const Login = () => {
  const [active, setActive] = useState("login");

  const handleFormSubmit = () => {
    console.log("Submitting");
  };
  return (
    <div className={inter.className}>
      <div className="bg-light dark:bg-dark px-5 md:px-0 min-h-screen h-fit text-dark dark:text-light overflow-x-hidden transition duration-100 ease-in-out pb-5">
        <div className="fixed top-0 z-10 flex md:w-full justify-center">
          <Navbar active={active} setActive={setActive} />
        </div>
        <div className="flex md:mt-44 px-20 justify-between md:flex-row flex-col-reverse md:items-start items-center md:gap-0 gap-10 mt-20">
        {loginNews.map((news)=>(
        <div key={news.name} className="md:mt-10 mt-0">
            <NewsCards name={news.name} image={news.image} title={news.title} content={news.content} className="flex flex-col items-center text-center mt-5 max-w-xs gap-4"/>
        </div>
        ))}
          <form action="" onSubmit={handleFormSubmit} className="w-full flex flex-col gap-10 items-center justify-center md:border-none border-dark/50 border-2 px-4 py-5 dark:border-light_tert/50 text-center">
            <span className="uppercase md:tracking-[18px] tracking-[10px] md:text-3xl text-xl ">
                sign into ibento
            </span>
            <Input
              type="text"
              name="Email"
              size="lg"
              placeholder="Email"
              required
              className="px-5 py-3 rounded-md border-dark/50 text-dark dark:text-light placeholder:text-dark dark:placeholder:text-light dark:border-light outline-none border-2 bg-light dark:bg-dark"
            />
            <Input
              type="password"
              name="Password"
              size="lg"
              placeholder="Password"
              required
              className="px-5 py-3 rounded-md border-dark/50 text-dark dark:text-light placeholder:text-dark dark:placeholder:text-light dark:border-light outline-none border-2 bg-light dark:bg-dark"
            />
            <Button
              className="bg-light_tert w-full py-2 text-md font-medium tracking text-dark"
              type="submit"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
