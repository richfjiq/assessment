import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Football Tickets', href: '#' },
  { name: 'Music Tickets', href: '#' },
  { name: 'More', href: '#' },
];

const navigationModalMenu = [
  { name: 'Home', href: '#' },
  { name: 'Football Tickets', href: '#' },
  { name: 'Music Tickets', href: '#' },
  { name: 'More', href: '#' },
  { name: 'About Us', href: '#' },
  { name: 'FAQ', href: '#' },
  { name: 'Terms of Use', href: '#' },
  { name: 'Privacy', href: '#' },
  { name: 'Partner with Us', href: '#' },
];

const sponsors = [
  {
    name: 'football ticket net',
    url: 'https://res.cloudinary.com/dfwt0gh29/image/upload/h_35/v1541515002/providers/ftn',
  },
  {
    name: 'box office',
    ulr: 'https://res.cloudinary.com/dfwt0gh29/image/upload/h_35/v1541515002/providers/bo',
  },
  {
    name: 'ticket bad',
    ulr: 'https://res.cloudinary.com/dfwt0gh29/image/upload/h_35/v1541515002/providers/ftp',
  },
  {
    name: 'sports event 365',
    url: 'https://res.cloudinary.com/dfwt0gh29/image/upload/h_35/v1541515002/providers/ti',
  },
  {
    name: 'stub hub',
    url: 'https://res.cloudinary.com/dfwt0gh29/image/upload/w_80/v1541515002/providers/sh',
  },
  {
    name: 'via go go',
    ulr: 'https://res.cloudinary.com/dfwt0gh29/image/upload/h_35/v1541515002/providers/vgg',
  },
  {
    name: 'live football tickets',
    url: 'https://res.cloudinary.com/dfwt0gh29/image/upload/h_35/v1541515002/providers/lft',
  },
];

const Hero = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="clipPath bg-[#003BDE] h-[355px] md:bg-white md:h-auto mb-10">
      <header className="max-w-[1200px] w-full mx-auto absolute inset-x-0 top-0 z-50">
        <nav
          className="w-full flex justify-between py-5 px-[16px] md:px-16"
          aria-label="Global"
        >
          <div className="flex">
            <div className="flex">
              <a href="#" className="m-1.5 p-1.5">
                <span className="sr-only">SeatPick Company</span>
                <img
                  className="h-8 w-[100px] md:hidden"
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

            <ul className="hidden md:flex ml-[20px] items-center">
              {navigation.map((item) => (
                <div className="group">
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

                    <div className="absolute p-4 w-[200px] top-[60px] hidden group-hover:md:flex group-hover:md:flex-col hover:md:flex bg-white pt-2 pb-2 rounded-lg shadow-lg border border-[#e2e2e2]">
                      <a
                        href="#"
                        className="text-sm font-normal leading-6 text-gray-400"
                      >
                        Link 1
                      </a>
                      <a
                        href="#"
                        className="text-sm font-normal leading-6 text-gray-400"
                      >
                        Link 2
                      </a>
                      <a
                        href="#"
                        className="text-sm font-normal leading-6 text-gray-400"
                      >
                        Link 3
                      </a>
                      <a
                        href="#"
                        className="text-sm font-normal leading-6 text-gray-400"
                      >
                        Link 4
                      </a>
                      <a
                        href="#"
                        className="text-sm font-normal leading-6 text-gray-400"
                      >
                        Link 5
                      </a>
                      <a
                        href="#"
                        className="text-sm font-normal leading-6 text-gray-400"
                      >
                        Link 6
                      </a>
                    </div>
                  </li>
                </div>
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
              <Bars3Icon className="h-8 w-8 text-white" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden md:flex justify-end items-center group">
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
            <div className="absolute text-center p-4 w-[100px] top-[60px] hidden group-hover:md:flex group-hover:md:flex-col hover:md:flex bg-white pt-2 pb-2 rounded-lg shadow-lg border border-[#e2e2e2]">
              <a
                href="#"
                className="text-sm font-normal leading-6 text-gray-400"
              >
                € EUR
              </a>
              <a
                href="#"
                className="text-sm font-normal leading-6 text-gray-400"
              >
                £ GBP
              </a>
              <a
                href="#"
                className="text-sm font-normal leading-6 text-gray-400"
              >
                $ USD
              </a>
            </div>
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
                  {navigationModalMenu.map((item, index) => {
                    const renderDivider = () => {
                      if (index === 0 || index === 4 || index === 7) {
                        return <hr />;
                      }
                    };
                    console.log({ index });
                    return (
                      <>
                        <a
                          key={item.name}
                          href={item.href}
                          className="-mx-3 block rounded-lg px-3 py-2 text-xl font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        >
                          {item.name}
                        </a>
                        {renderDivider()}
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className="relative pt-14 text-center">
        <div>
          <h1 className="text-[25px] px-4 sm:px-0 mb-4 md:mb-0 mt-[42px] text-white md:text-black font-medium md:font-semibold md:text-[40px] md:mt-[100px] ">
            Find the best ticket in seconds.
          </h1>
          <p className="text-center hidden md:block mt-[15px] text-lg leading-8 text-gray-600">
            Best prices. No hidden fees. Only trusted sites.
          </p>
        </div>

        <form className="flex justify-center mt-0 md:mt-[40px]">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative max-w-[380px] w-full md:max-w-none md:w-[78%] px-[16px] sm:px-0">
            <div className="absolute inset-y-0 left-4 flex items-center pl-3 pointer-events-none">
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
              className="hidden md:flex justify-center items-center w-full h-[60px] md:h-[80px] pl-12 text-[18px] text-gray-900 border border-gray-300 rounded-lg bg-white  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  shadow-lg"
              placeholder="Search for event, team, artist, or avenue"
              required
            />
            <input
              className="md:hidden flex justify-center items-center w-full h-[60px] md:h-[80px] pl-12 text-[16px] font-semibold text-gray-900 border border-gray-300 rounded-lg bg-white  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  shadow-lg"
              placeholder="Event, team, performer"
              required
            />
            <button className="hidden md:block w-[85px] h-[44px] text-white text-xl absolute right-8 bottom-[16px] bg-blue-700 focus:ring-4 focus:outline-none  font-medium rounded-lg py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Search
            </button>
          </div>
        </form>
        <div className="justify-center mt-[90px] hidden md:flex">
          {sponsors.map((sponsor) => (
            <img
              className="grayscale h-[25px] mx-[16px]"
              src={sponsor.ulr}
              alt={sponsor.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
