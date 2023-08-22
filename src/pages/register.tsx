import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import { Input, Button } from "@material-tailwind/react";
import { Inter } from "next/font/google";
import NewsCards from "@/components/NewsCards";
import { loginNews } from "../../constants";

const inter = Inter({ subsets: ["latin"] });

const Login = () => {
  const [active, setActive] = useState("login");
  const [college, setcollege] = useState("")
  const [email, setemail] = useState("")
  const [domain, setdomain] = useState("")
  const [contact, setcontact] = useState("")
  const [address, setaddress] = useState("")
  const [pincode, setpincode] = useState(0)

  const handleFormSubmit = async(e:any) => {
    e.preventDefault()
    
    const response = await fetch('./api/college/create', {
      method:'POST',
      headers: {
        'Content-Type': 'application/json',      
      },
      body: JSON.stringify({
        pincode: pincode,
        address: address,
        emailDomain: domain,
        email:email,
        name: college,
        contact: contact,
      })
    })

    const data = await response.json()

    alert(data.message)

  };

  useEffect(() => {
    if(!localStorage.getItem("theme"))
      localStorage.setItem("theme", "light");
  }, []);
  
  return (
    <div className={inter.className}>
      <div className="fixed top-0 z-10 flex md:w-full justify-center text-dark dark:text-light">
        <Navbar />
      </div>
      <div className="bg-light dark:bg-dark px-5 md:px-0 min-h-screen h-fit text-dark dark:text-light overflow-x-hidden transition duration-100 ease-in-out pb-5">
        <div className="flex md:mt-44 px-0 justify-between md:flex-row flex-col md:items-start items-center md:gap-10 md:pl-10 gap-10 mt-20">
          <form
            action=""
            onSubmit={(e)=>{handleFormSubmit(e)}}
            className="w-full md:w-[70vw] flex flex-col gap-10 items-center justify-center md:border-none border-dark/50 border-2 px-4 py-5 dark:border-light_tert/50 text-center"
          >
            <span className="uppercase md:tracking-[18px] tracking-[10px] md:text-2xl text-xl">
              Register with Us
            </span>
            <Input
              type="text"
              name="collegeName"
              size="lg"
              placeholder="College Name"
              required
              className="px-5 py-3 rounded-md border-dark/50 text-dark dark:text-light placeholder:text-dark dark:placeholder:text-light dark:border-light outline-none border-2 bg-light dark:bg-dark"
              onChange={(e)=>{setcollege(e.target.value)}}
            />
            <Input
              type="email"
              name="email"
              size="lg"
              placeholder="Email"
              required
              className="px-5 py-3 rounded-md border-dark/50 text-dark dark:text-light placeholder:text-dark dark:placeholder:text-light dark:border-light outline-none border-2 bg-light dark:bg-dark"
              onChange={(e)=>{setemail(e.target.value)}}
            />
            <Input
              type="text"
              name="EmailDomain"
              size="lg"
              placeholder="Email Domain"
              required
              className="px-5 py-3 rounded-md border-dark/50 text-dark dark:text-light placeholder:text-dark dark:placeholder:text-light dark:border-light outline-none border-2 bg-light dark:bg-dark"
              onChange={(e)=>{setdomain(e.target.value)}}
            />
            <Input
              type="text"
              name="contact"
              size="lg"
              placeholder="Contact"
              required
              className="px-5 py-3 rounded-md border-dark/50 text-dark dark:text-light placeholder:text-dark dark:placeholder:text-light dark:border-light outline-none border-2 bg-light dark:bg-dark"
              onChange={(e)=>{setcontact(e.target.value)}}
            />
            <div className="flex flex-col md:flex-row md:gap-2">
              <Input
                type="text"
                name="address"
                size="lg"
                placeholder="Address"
                required
                className="px-5 py-3 rounded-md border-dark/50 text-dark dark:text-light placeholder:text-dark dark:placeholder:text-light dark:border-light outline-none border-2 bg-light dark:bg-dark"
                onChange={(e)=>{setaddress(e.target.value)}}
              />
              <Input
                type="number"
                name="pincode"
                size="lg"
                placeholder="Pincode"
                required
                className="px-5 py-3 rounded-md border-dark/50 text-dark dark:text-light placeholder:text-dark dark:placeholder:text-light dark:border-light outline-none border-2 bg-light dark:bg-dark"
                onChange={(e)=>{setpincode(parseInt(e.target.value))}}
              />
            </div>
            <Button
              className="bg-light_tert w-full py-2 text-md font-medium tracking text-dark"
              type="submit"
              onClick={handleFormSubmit}
            >
              Submit
            </Button>
          </form>
          {loginNews.map((news) => (
            <div key={news.name} className="md:mt-10 mt-0 md:w-[70vw] h-[60vh] flex justify-center ">
              <NewsCards
                name={news.name}
                image={news.image}
                title={news.title}
                content={news.content}
                className="flex flex-col items-center text-center mt-5 gap-4"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Login;
