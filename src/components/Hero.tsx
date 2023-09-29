import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Football Tickets', href: '#' },
  { name: 'Music Tickets', href: '#' },
  { name: 'More', href: '#' },
];

const Hero = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-[#003BDE] px-4 h-[355px] min-[960]:h-auto md:bg-white md:[clip-path: polygon(0 0, 100% 0, 100% 100%, 0 90%)]">
      <header className="max-w-[1200px] w-full mx-auto absolute inset-x-0 top-0 z-50">
        <nav
          className="w-full flex justify-between py-5 px-16"
          aria-label="Global"
        >
          <div className="flex">
            <div className="flex">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">SeatPick Company</span>
                <img
                  className="h-8 w-[130px] md:hidden"
                  src="	https://seatpick.com/_next/static/media/index.37c9c910.svg"
                  alt="white logo"
                />
                <img
                  className="h-8 w-[130px]"
                  src="https://seatpick.com/_next/static/media/blue.c6017a41.svg"
                  alt="blue logo"
                />
              </a>
            </div>

            <ul className="hidden md:flex ml-[20px]">
              {navigation.map((item) => (
                <li
                  className={
                    item.name === 'More' ? 'hidden min-[1090px]:block' : ''
                  }
                >
                  <a
                    id="dropdownHoverButton"
                    data-dropdown-toggle="dropdownHover"
                    data-dropdown-trigger="hover"
                    key={item.name}
                    href={item.href}
                    className="text-sm font-normal leading-6 text-gray-400 flex items-center px-4"
                  >
                    {item.name}
                    <svg
                      className="w-2.5 h-2.5 ml-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6 text-white" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden md:flex justify-end items-center">
            <a
              href="#"
              className="flex items-center text-sm font-normal leading-6 text-gray-400"
            >
              €EUR
              <svg
                className="w-2.5 h-2.5 ml-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </a>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">SeatPick Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://seatpick.com/_next/static/media/blue.c6017a41.svg"
                  alt="company logo"
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className="relative pt-14 text-center">
        <div>
          <h1 className="text-[25px] mt-[42px] text-white md:text-black font-semibold md:text-[40px] md:mt-[100px] ">
            Find the best ticket in seconds.
          </h1>
          <p className="text-center mt-[15px] text-lg leading-8 text-gray-600">
            Best prices. No hidden fees. Only trusted sites.
          </p>
        </div>

        <form className="flex justify-center mt-[40px]">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative max-w-[945px] w-full">
            <div className="absolute inset-y-0 left-2 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              className="flex justify-center items-center w-full h-[80px] pl-12 text-[18px] text-gray-900 border border-gray-300 rounded-lg bg-white  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  shadow-lg"
              placeholder="Search for event, team, artist, or avenue"
              required
            />
            <button className="w-[85px] h-[44px] text-white text-xl absolute right-6 bottom-[16px] bg-blue-700 focus:ring-4 focus:outline-none  font-medium rounded-lg py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Search
            </button>
          </div>
        </form>
        <div className="justify-center mt-[90px] hidden md:flex">
          <img
            className="grayscale h-[25px] mx-[16px]"
            src="https://res.cloudinary.com/dfwt0gh29/image/upload/h_35/v1541515002/providers/ftn"
            alt="football ticket net"
          />
          <img
            className="grayscale h-[25px] mx-[16px]"
            src="	https://res.cloudinary.com/dfwt0gh29/image/upload/h_35/v1541515002/providers/bo"
            alt="box office"
          />
          <img
            className="grayscale h-[25px] mx-[16px]"
            src="	https://res.cloudinary.com/dfwt0gh29/image/upload/h_35/v1541515002/providers/ftp"
            alt="ticket bad"
          />
          <img
            className="grayscale h-[25px] mx-[16px]"
            src="https://res.cloudinary.com/dfwt0gh29/image/upload/h_35/v1541515002/providers/ti"
            alt="sports event 365"
          />
          <img
            className="grayscale h-[25px] mx-[16px]"
            src="https://res.cloudinary.com/dfwt0gh29/image/upload/w_80/v1541515002/providers/sh"
            alt="stub hub"
          />
          <img
            className="grayscale h-[25px] mx-[16px]"
            src="	https://res.cloudinary.com/dfwt0gh29/image/upload/h_35/v1541515002/providers/vgg"
            alt="via go go"
          />
          <img
            className="grayscale h-[25px] mx-[16px]"
            src="https://res.cloudinary.com/dfwt0gh29/image/upload/h_35/v1541515002/providers/lft"
            alt="live football tickets"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
