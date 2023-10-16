import { Inter } from 'next/font/google';
import { useEffect } from 'react';
import Dashnav from '../../../components/Dashnav';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Button } from '@material-tailwind/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router'; // Import the router

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  useEffect(() => {
    if (!localStorage.getItem('theme')) {
      localStorage.setItem('theme', 'light');
    }
  }, []);

  const upcomingEvents = [
    { title: 'Clash Models', club: 'GDSC', date: '06.10.2023' },
    { title: 'Clash Models', club: 'GDSC', date: '06.10.2023' },
    { title: 'Clash Models', club: 'GDSC', date: '06.10.2023' },
  ];
  const yourEvents = [
    {
      applicationNo: 'GD0001',
      title: 'Clash Models',
      club: 'GDSC',
      date: '06.10.2023',
      status: 'Approved',
    },
    {
      applicationNo: 'GD0002',
      title: 'Clash Models',
      club: 'GDSC',
      date: '06.10.2023',
      status: 'Pending',
    },
    {
      applicationNo: 'GD003',
      title: 'Clash Models',
      club: 'GDSC',
      date: '06.10.2023',
      status: 'Approved',
    },
    {
      applicationNo: 'GD0004',
      title: 'Clash Models',
      club: 'GDSC',
      date: '06.10.2023',
      status: 'Rejected',
    },
  ];

  const router = useRouter(); // Initialize the router

  return (
    <div className={inter.className}>
      <div className="fixed top-0 z-10 md:w-full justify-center flex flex-col">
        <Dashnav />
      </div>
      <main
        className={`bg-light dark:bg-dark min-h-screen py-16 h-fit text-dark dark:text-light transition duration-100 ease-in-out`}
      >
        <div className="px-5 md:px-20 flex py-10">
          <section className="flex pb-10 flex-col w-full md:px-10 mb-10 h-fit ">
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
                <div
                  className={`border-dark dark:border-light border-2 gap-4 p-10 min-h-fit flex flex-col ${inter.className} light dark`}
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
                            e.status == 'Approved'
                              ? 'text-[#096C00]'
                              : e.status == 'Rejected'
                              ? 'text-[#C40000]'
                              : 'text-[#148DA8]'
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
                <Button
                  className={`uppercase h-20 md:h-32 text-dark bg-light_tert font-normal dark:bg-light p-4 light dark`}
                  onClick={() => router.push('/dashboard/studentLead/apply')}
                >
                  <div className="w-full h-full border-2 md:text-2xl text-md md:tracking-[18px] tracking-wide border-dark flex justify-center items-center transition ease-in duration-100 py-5">
                    Apply for New Event
                    <AiOutlineArrowRight />
                  </div>
                </Button>
              </div>
            </div>
          </section>
          <section className="flex flex-col dark:bg-light w-full items-center py-10 gap-10 rounded-md bg-dark text-light">
            <Image src="/devansh.png" alt="profile-pic" width={64} height={64} />
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
      </main>
    </div>
  );
}
