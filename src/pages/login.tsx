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
      <div className="bg-light dark:bg-dark px-5 md:px-0 min-h-screen h-fit text-dark dark:text-light overflow-x-hidden transition duration-100 ease-in-out">
        <div className="fixed top-0 z-10 flex md:w-full justify-center">
          <Navbar active={active} setActive={setActive} />
        </div>
        <div className="flex mt-44 px-20 justify-between">
        {loginNews.map((news)=>(
        <div key={news.name}>
            <NewsCards name={news.name} image={news.image} title={news.title} content={news.content} />
        </div>
        ))}
          <form action="" onSubmit={handleFormSubmit} className="w-full flex flex-col gap-10 items-center justify-center">
            <span className="uppercase tracking-[18px] text-3xl">
                sign into ibento
            </span>
            <Input
              type="text"
              name="Email"
              size="lg"
              placeholder="Email"
              required
              className="px-5 py-3 rounded-md border-light_tert dark:border-light outline-none border-2 bg-light dark:bg-dark"
            />
            <Input
              type="password"
              name="Password"
              size="lg"
              placeholder="Password"
              required
              className="px-5 py-3 rounded-md border-light_tert dark:border-light outline-none border-2 bg-light dark:bg-dark"
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
